// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/login');

  // Expect a title "to contain" a substring.
  await expect(page.getByText('Login Page')).toBeVisible();
  await expect(page).toHaveTitle(/The Internet/);
});

// test('has login button', async ({ page }) => {
//   await page.goto('http://the-internet.herokuapp.com/login');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
