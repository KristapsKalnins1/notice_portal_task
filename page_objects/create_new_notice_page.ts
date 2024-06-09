// create_new_notice_page.ts
import { Locator, Page } from '@playwright/test';

export class CreateNewNoticePage {
  readonly page: Page;
  readonly titleInput: Locator;
  readonly targetDateInput: Locator;
  readonly textInput: Locator;
  readonly saveButton: Locator;
  readonly loadingIndicator: Locator;
  readonly successMessage: Locator;
  readonly menuHomeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.titleInput = page.locator('#title');
    this.targetDateInput = page.locator('#target-date');
    this.textInput = page.locator('#text');
    this.saveButton = page.locator('p-button#save-button button');
    this.loadingIndicator = page.locator('div[aria-busy="true"]');
    this.successMessage = page.locator('.p-toast-summary');
  }

  async navigate() {
    await this.page.goto('/create');
  }

  async enterTitle(title: string) {
    await this.titleInput.fill(title);
  }

  async enterTargetDate(targetDate: string) {
    await this.targetDateInput.fill(targetDate);
    await this.targetDateInput.press('Enter');
  }

  async enterText(text: string) {
    await this.textInput.fill(text);
    await this.page.waitForTimeout(100);
  }

  async clickSave() {
    await this.saveButton.click();
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
}