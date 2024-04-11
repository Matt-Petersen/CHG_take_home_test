const { test, expect } = require('@playwright/test');

test('verifies view', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/login');
  await expect(page).toHaveTitle(/The Internet/);
  await expect(page.getByText('Login Page')).toBeVisible();
  await expect(page.getByTestId('username')).toBeVisible();
  await expect(page.getByTestId('password')).toBeVisible();
  await expect(page.getByTestId('submit')).toBeVisible();
});

test('invalid login', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/login');
  await page.fill('#username', 'incorrectUser');
  await page.fill('#password', 'badPassword');
  await page.click('button[type="submit"]')
  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});

test('valid login', async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword');
  await page.click('button[type="submit"]')
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  await expect(page.getByText('Secure Area')).toBeVisible();
});
