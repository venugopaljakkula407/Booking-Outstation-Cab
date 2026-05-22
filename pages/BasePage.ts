import { Page } from '@playwright/test';
/**
 * BasePage
 * All Page Object classes extend this. Provides common helpers
 * (navigate, waitForPageLoad) and holds the `page` reference.
 */
export class BasePage {
  protected page: Page;//store browser page here [protected means child cls use it]

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string = ''): Promise<void> {
    await this.page.goto(path);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}
//page -> browser tab
//class -> blue print of object
//protected ->accessible in child class but not outside
//constructor -> initalize the object
//async/await -> handleasynchronous operations like page navigate,elements interactions
//promise<void> -> no return value
//promise<string> -> returns text
//this.page ->refers to page/browser instance passed to constructor,used for all interactions in page ojects.
