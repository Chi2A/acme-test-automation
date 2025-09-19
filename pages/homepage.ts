import { Locator, Page, expect } from "@playwright/test";
export class HomePage {
  addAccountButton: Locator;
  customerNameTab: Locator;
    expectedUrl: string;
    
    constructor(page: Page) { 
        this.addAccountButton = page.locator('a[class="btn btn-primary btn-sm"]');
        this.customerNameTab = page.locator('div[class="logged-user-name"]')
        this.expectedUrl= "https://demo.applitools.com/app.html"
    }

}

