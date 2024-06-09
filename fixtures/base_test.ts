import { test as baseTest } from '@playwright/test';
import { CreateNewNoticePage } from '../page_objects/create_new_notice_page';
import { HomePage } from '../page_objects/home_page';

type pages = {
    createNewNoticePage: CreateNewNoticePage;
    homePage: HomePage
}

const testPages = baseTest.extend<pages>({
    createNewNoticePage: async ({ page }, use) => {
      await use(new CreateNewNoticePage(page));
    },

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
      }
});

export const test = testPages;