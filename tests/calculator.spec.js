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
    test("@my-test-02-Filling in all the fields correctly", async ({ page, mainPage }) => {
      await mainPage.infoEntry("2025-03-20","12","00");
      await mainPage.infoExit("2025-03-21","15","00");
      await mainPage.costCalculator("Long-Term Surface Parking");
    });
    test("@my-test-03-Filling in all the fields correctly", async ({ page, mainPage }) => {
      await mainPage.infoEntry("2025-03-20","12","00");
      await mainPage.infoExit("2025-03-21","15","00");
      await mainPage.costCalculator("Long-Term Garage Parking");
    });
    test("@my-test-04-Filling in all the fields correctly", async ({ page, mainPage }) => {
      await mainPage.infoEntry("2025-03-20","12","00");
      await mainPage.infoExit("2025-03-21","15","00");
      await mainPage.costCalculator("Short-Term Parking");
    });
    test("@my-test-05-Filling in all the fields correctly", async ({ page, mainPage }) => {
      await mainPage.infoEntry("2025-03-20","12","00");
      await mainPage.infoExit("2025-03-21","15","00");
      await mainPage.costCalculator("Valet Parking");
    });
    test("@my-test-06-Entry date missing", async ({ page, mainPage }) => {
      await mainPage.infoEntry("","12","00");
      await mainPage.infoExit("2025-03-21","15","00");
      await mainPage.errorMessage("Valet Parking");
      await expect(mainPage.error).toBeVisible(); 
    });
    test("@my-test-07-Entry time missing", async ({ page, mainPage }) => {
      await mainPage.infoEntry("2025-03-20","","");
      await mainPage.infoExit("2025-03-21","15","00");
      await mainPage.errorMessage("Valet Parking");
      await expect(mainPage.error2).toBeVisible(); 
    });
    test("@my-test-08-Exit date missing", async ({ page, mainPage }) => {
      await mainPage.infoEntry("2025-03-21","12","00");
      await mainPage.infoExit("","15","00");
      await mainPage.errorMessage("Valet Parking");
      await expect(mainPage.error).toBeVisible(); 
    });
    test("@my-test-09-Exit time missing", async ({ page, mainPage }) => {
      await mainPage.infoEntry("2025-03-20","15","00");
      await mainPage.infoExit("2025-03-21","","");
      await mainPage.errorMessage("Valet Parking");
      await expect(mainPage.error2).toBeVisible(); 
    });
});