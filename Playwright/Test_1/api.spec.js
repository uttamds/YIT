import { test, expect } from '@playwright/test';

test('Verify first product price is $9.99 (live API)', async ({ page }) => {

  // Load local HTML file
  await page.goto('http://127.0.0.1:5500/api.html');

  // Click Load Products button
  await page.click('button');

  // Locate first product price
  const firstPrice = page.locator('.card p').first();

  // Wait + Assertion
  await expect(firstPrice).toHaveText('Price: $9.99');
});
