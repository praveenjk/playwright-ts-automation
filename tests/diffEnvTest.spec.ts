import { expect, test } from "@playwright/test";
import { describe } from "node:test";

describe('Diff Env Test', () => {
    test('Test for Dev Env @smoke', async ({ page }) => {
        await page.goto(process.env.BASE_URL!);
        await expect(page).toHaveURL(process.env.BASE_URL!);
        console.log('Running on:', process.env.BASE_URL);
        })
})