import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginpage"; 
import { HomePage } from "../pages/homepage";

test('Successfull login', async ({ page }) => {

    await page.goto('https://demo.applitools.com');
    let loginPage = new LoginPage(page);
    await loginPage.login("Sarah", "sar12#rah")
     let homePage = new HomePage(page);
    await homePage.validateTitle("ACME")
    
})
