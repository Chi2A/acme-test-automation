
import { Locator, Page ,expect} from '@playwright/test'
export class LoginPage {
  userName: Locator;
  password: Locator;
  loginButton: Locator;
  homePageLogo: Locator;

  constructor(page: Page) {
    this.userName = page.locator('input[id="username”]');
    this.password = page.locator('input[id="password”]');
    this.loginButton = page.locator('a[id="log-in"]');
    this.homePageLogo = page.locator('div[class="logo-label"]');
  }
  async login(userName: string, password: string): Promise<void> {
    await this.userName.fill(userName);
    await this.password.fill(password);
    await this.loginButton.click();
  }
    validateTitle(homePageLogo: string): void { 
        expect(this.homePageLogo).toHaveText(homePageLogo)
    }
}