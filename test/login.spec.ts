/**
 * To learn more about Playwright Test visit:
 * https://www.checklyhq.com/docs/browser-checks/playwright-test/
 * https://playwright.dev/docs/writing-tests
 */
import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

// If available, we set the target URL to a preview deployment URL provided by the ENVIRONMENT_URL created by Vercel.
// Otherwise, we use the Production URL.
const username = process.env.USER_NAME || 'foo';
const userpassword = process.env.USER_PASSWORD || 'bar';

test('visit page and take screenshot', async ({ page }) => {
  // We visit the page. This waits for the "load" event by default.
  const response = await page.goto('/');

  // Test that the response did not fail
  expect(response?.status()).toBeLessThanOrEqual(401);

  // unfortunately the cognito ui contains two instances of the dialog
  // so we need to use the first one. (Cognito Hosted UI seems to have implemented responsiveness poorly)
  await page.locator('#identifier-field').fill(username);

  await page.getByLabel('Email address or username').click();
  await page.getByLabel('Email address or username').fill(username);
  await page.getByLabel('Email address or username').press('Enter');

  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Password', { exact: true }).fill(userpassword);
  await page.getByLabel('Password', { exact: true }).press('Enter');

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.jpg' });

  // go to dashboard
  await page.getByText('Dashboard').click();

  // create new item
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('Foo Bar Baz Asdasd');
  await page.getByPlaceholder('Name').press('Tab');
  await page.getByRole('listitem').nth(1).getByRole('button').click();
  await page.waitForResponse((resp) => resp.url().includes('/dashboard'));

  // delete item
  await page.getByRole('listitem').nth(2).getByRole('button').click();
  await page.waitForResponse((resp) => resp.url().includes('/dashboard'));

  // create another item
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('Foo Bar Baz ooo');
  await page.getByPlaceholder('Name').press('Tab');
  await page.getByRole('listitem').nth(1).getByRole('button').click();
  await page.waitForResponse((resp) => resp.url().includes('/dashboard'));

  // delete item
  await page.getByRole('listitem').nth(2).getByRole('button').click();
  await page.waitForResponse((resp) => resp.url().includes('/dashboard'));

  // open user menu
  await page.getByRole('banner').getByRole('button').nth(1).click();
  // sign out
  await page.getByRole('button', { name: 'Sign out' }).click();

  await page.waitForURL('https://accounts.juicyarts.de/*');
  await page.getByRole('heading', { name: 'Sign in' }).click();
});
