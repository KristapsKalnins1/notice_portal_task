import { expect } from '@playwright/test';
import { test } from '../fixtures/base_test';
import { HomePage } from '../page_objects/home_page';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Delete first notice', async ({ page, homePage}) => {
  const firstTitleBeforeDeletion = await homePage.getFirstTitleText();
  await homePage.clickDelete();
  await homePage.waitForSuccessMessage();
  await homePage.getSuccessMessageText();
  await expect(homePage.successMessage).toHaveText('Success');
  await page.reload();
  const firstTitleAfterDeletion = await homePage.getFirstTitleText();
  expect(firstTitleAfterDeletion).not.toBe(firstTitleBeforeDeletion);
});
