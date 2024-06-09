// create_new_notice_page.ts
import { Locator, Page } from '@playwright/test';
import { LoadFnOutput } from 'module';

export class HomePage {
  readonly menuHomeButton: Locator;
  readonly menuCreateButton: Locator;
  readonly loadingIndicator: Locator;
  readonly successMessage: Locator;
  readonly deleteNoticeButton: Locator;
  readonly lastPageButton: Locator;
  readonly firstNoticeTitle: Locator;

  constructor(page: Page) {
    this.menuHomeButton = page.locator('#menu-home');
    this.deleteNoticeButton = page.locator('#row-0-delete-button');
    this.menuCreateButton = page.locator('#menu-create');
    this.loadingIndicator = page.locator('div[aria-busy="true"]');
    this.successMessage = page.locator('.p-toast-summary');
    this.lastPageButton = page.locator('button.p-paginator-last');
    this.firstNoticeTitle = page.locator('#row-0-title');
  }

  async clickMenuHome() {
    await this.menuHomeButton.click();
  }

  async clickMenuCreate() {
    await this.menuCreateButton.click();
  }

  async clickDelete() {
    await this.deleteNoticeButton.click();
  }

  async waitForLoadingIndicator() {
    console.log('Waiting for busy indicator to disappear...');
    await this.loadingIndicator.waitFor({ state: 'detached', timeout: 10000 });
    console.log('Busy indicator disappeared.');
  }
  
  async waitForSuccessMessage() {
    console.log('Waiting for success message to appear...');
    await this.successMessage.waitFor({ state: 'visible', timeout: 10000 });
    console.log('Success message appeared.');
  }

  async getSuccessMessageText() {
    return await this.successMessage.textContent();
  }

  async getFirstTitleText() {
    return await this.firstNoticeTitle.textContent();
  }


}