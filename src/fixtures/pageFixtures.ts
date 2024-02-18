import { test as baseTest } from '@playwright/test';
import {JoinPage} from '../pages/joinPage'
import {Path} from "../constants/urls";

type pages = {
    joinPage: JoinPage;
}

export const pagesFixtures = baseTest.extend<pages>({
    joinPage: async ({ page }, use) => {
        const joinPage = new JoinPage(page);
        await page.goto(Path.joinForm);
        await use(joinPage);
        await page.close();
    },
});
export { expect } from '@playwright/test';
