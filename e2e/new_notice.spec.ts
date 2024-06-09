import { expect } from '@playwright/test';
import { test } from '../fixtures/base_test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Create new notice', async ({ page, createNewNoticePage}) => {
  await page.goto('/create');
  await createNewNoticePage.enterTitle('Test notice');
  await createNewNoticePage.enterTargetDate('20.06.2024');
  await createNewNoticePage.enterText('This is a test notice!');
  await createNewNoticePage.clickSave();
  await createNewNoticePage.waitForLoadingIndicator();
  await createNewNoticePage.waitForSuccessMessage();
  await createNewNoticePage.getSuccessMessageText();
  await expect(createNewNoticePage.successMessage).toHaveText('Paziņojums saglabāts!');
});
