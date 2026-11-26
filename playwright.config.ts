import {defineConfig, devices} from '@playwright/test';
import 'dotenv/config';
import path from 'path';

const envPath = path.resolve(__dirname, '.env');


export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    retries: 2,
    workers: 1,
    use: {
        baseURL: process.env.BASE_URL,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        },
        {
            name: 'firefox',
            use: {...devices['Desktop Firefox']},
        },
        {
            name: 'webkit',
            use: {...devices['Desktop Safari']},
        },
    ]
})