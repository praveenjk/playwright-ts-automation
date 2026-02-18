import { test, expect } from '@playwright/test';

const baseURLs: string[] = ['https://www.google.com/', 'https://www.bing.com/', 'https://www.yahoo.com/'];

//using for loop to create multiple tests
for (const url of baseURLs) {
    test(`Sample test for peralleTest1 ${url}`, async ({ page }) => {
        // Navigate to the application page
        await page.goto(url);

    })
}

//using forEach to create multiple tests
baseURLs.forEach((url) => {
    test(`Sample test for peralleTest2 ${url}`, async ({ page }) => {
        // Navigate to the application page
        await page.goto(url);
    })


});