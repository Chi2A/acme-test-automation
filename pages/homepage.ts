import { Locator, Page, expect } from "@playwright/test";
export class HomePage {
  addAccountButton: Locator;
  customerNameTab: Locator;
  homePageLogo: Locator;

  constructor(page: Page) {
    this.addAccountButton = page.locator('a[class="btn btn-primary btn-sm"]');
      this.customerNameTab = page.locator('div[class="logged-user-name"]');
       this.homePageLogo = page.locator('div[class="logo-label"]');
  }
      validateTitle(homePageLogo: string): void { 
        expect(this.homePageLogo).toHaveText(homePageLogo)
    }
}

