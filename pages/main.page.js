exports.MainPage = class MainPage {
    constructor(page) {
        this.page = page;
        this.parkingLot = page.locator("#parkingLot");
        this.calendarEntry = page.locator("#entryDate");
        this.dateEntry = page.locator("#entryTime");
        this.monthEntry = page.locator(".flatpickr-monthDropdown-month");
        this.calendarExit = page.locator("#exitDate");
        this.monthExit = page.locator(".flatpickr-monthDropdown-month");
        this.dateExit = page.locator("#exitTime");
        this.calculateButton = page.locator("#calculateCost");
        this.bookButton = page.locator("#reserveOnline")
    }

    async waitFor () {
        this.page.waitForURL(
            "https://practice.expandtesting.com/webpark"
        )
    }

    async costCalculator(lot,dayEntry,monthEntry,yearEntry,dayExit,monthExit,yearExit){
        await this.parkingLot.selectOption({value:lot});
        await this.calendarEntry.click();
        await this.monthEntry.selectOption({value:monthEntry});
        while (true){
           const currentYear = await page.locator(".cur-year").textContent();
           if(currentYear == yearEntry)
           {
            break;
           }
           await page.locator(".arrowUp").click();
        }
        const dates = await this.page.$$("//a[@class='flatpickr-day']");
        for (const dt of dates){
            if (await dt.textContent()==dayEntry){
                await dt.click();
                break;
            }
        }
        await this.calendarExit.click();
        while (true){
            const currentYear = await page.locator(".cur-year").textContent();
            if(currentYear == yearExit)
            {
             break;
            }
            await page.locator(".arrowUp").click();
         }
         const dates2 = await this.page.$$("//a[@class='flatpickr-day']");
         for (const dt of dates2){
             if (await dt.textContent()==dayExit){
                 await dt.click();
                 break;
             }
         }
        await this.calculateButton.click();
        await this.bookButton.click();
    }
}