import {test, expect} from '@playwright/test';

test('Login test', async ({page}) => {
    await page.goto('/');

    await page.fill('#user-name', process.env.WEBPAGE_USERNAME || "standard_user");
    await page.fill('#password', process.env.WEBPAGE_PASSWORD || "secret_sauce");
    await page.click('#login-button');

    await expect(page.locator('.title')).toHaveText('Products');
});