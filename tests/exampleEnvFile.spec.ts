import { test, expect } from '@playwright/test';



test('Go to google', async ({ page }) => {
  //await page.goto('https://www.google.com/');
  await page.goto(process.env.URL);
  console.log(page.title);
  await page.locator('#APjFqb').click();
  await page.locator('#APjFqb').fill('tax calculator');
  await page.locator('#APjFqb').press('Enter');


  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Google/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
