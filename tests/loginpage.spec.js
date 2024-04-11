const { test, expect } = require('@playwright/test');

test('verifies page', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/login');

  await expect(page).toHaveTitle(/The Internet/);
  await expect(page.getByText('Login Page')).toBeVisible();

});

