import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('/');
    await page.fill('#user-name', process.env.WEBPAGE_USERNAME || "standard_user");
    await page.fill('#password', process.env.WEBPAGE_PASSWORD || "secret_sauce");
    await page.click('#login-button');
    expect(page.locator('.title')).toHaveText('Products')
});

test('Add to cart test', async ({page}) => {
    const productNameToBuy = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];
    for (const productName of productNameToBuy) {
        await page.locator('.inventory_item').filter({hasText: productName}).locator('button').click();
    }
    
    await page.click('.shopping_cart_link');
    const cartItems = page.locator('.cart_item');
    await expect(cartItems).toHaveCount(productNameToBuy.length);
});