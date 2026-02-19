import { expect, test } from "@playwright/test";
import { describe } from "node:test";

describe('Diff Env Test', () => {
    test('Test for Dev Env @smoke', async ({ page }) => {
        await page.goto(process.env.baseURL!);
        await expect(page).toHaveURL(process.env.baseURL!);
        console.log('Running on:', process.env.baseURL);
        })
})