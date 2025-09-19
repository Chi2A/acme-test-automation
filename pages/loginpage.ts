import { test, expect } from '@playwright/test'
test('Login Page Functionality', async ({ page }) => { 
    await page.goto("https://demo.applitools.com");
    await page.locator('input[id="username”]').fill('Sarah')
    await page.locator('input[id="password”]').fill("sa12@rah");
    await page.locator('a[id="log-in"]').click()
    let expectedText = "Your nearest branch closes in: 30m 5s";
    let homePageTitle = page.locator('h6[id="time"]');
    expect(homePageTitle).toHaveText(expectedText);
})