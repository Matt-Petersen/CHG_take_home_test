const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://the-internet.herokuapp.com/login');
});

test('verifies login view', async ({ page }) => {
  await expect(page).toHaveTitle(/The Internet/);
  await expect(page.getByText('Login Page')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'This is where you can log' })).toBeVisible();
  await expect(page.getByLabel('Username')).toBeVisible();
  await expect(page.getByLabel('Password')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});

test('invalid login', async ({ page }) => {
  await page.fill('#username', 'incorrectUser');
  await page.fill('#password', 'badPassword');
  await page.click('button[type="submit"]')
  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});

test('valid login', async ({ page }) => {
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]')
  await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Welcome to the Secure Area.' })).toBeVisible();
});
