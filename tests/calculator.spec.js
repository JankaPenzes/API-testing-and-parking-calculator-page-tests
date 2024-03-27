const base = require('@playwright/test');
import { MainPage } from '../pages/main.page';
const expect = base.expect;
const test = base.test.extend({
    mainPage: async ({ page }, use) => {
      const mainPage = new MainPage(page);
      await mainPage.goTo();
      await use(mainPage);
    },
  });
  test.describe("Testing cost calculator", () => {
    test("@my-test-01-Filling in all the fields correctly", async ({ page, mainPage }) => {
      await mainPage.infoEntry("2025-03-20","12","00");
      await mainPage.infoExit("2025-03-21","15","00");
      await mainPage.costCalculator("Economy Parking");
    });
});