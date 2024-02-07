exports.MainPage = class MainPage {
    constructor(page) {
        this.page = page;
        this.parkingLot = page.locator("#parkingLot");
        this.calendarEntry = page.locator("#entryDate");
        this.dateEntry = page.locator("#entryTime");
        this.monthEntry = page.locator(".flatpickr-monthDropdown-month");
        this.yearEntry = page.locator(".cur-year");
        this.ageSwitch = page.locaotr(".arrowUp");
        this.timeEntry = page.locator("#entryTime");
        this.hourEntry = page.locator(".flatpickr-hour");
        this.minuteEntry = page.locator(".flatpickr-minute");
        this.calendarExit = page.locator("#exitDate");
        this.monthExit = page.locator(".flatpickr-monthDropdown-month");
        this.yearExit = page.locator(".cur-year");
        this.timeExit = page.locator("#exitTime");
        this.hourExit = page.locator(".flatpickr-hour");
        this.minuteExit = page.locator(".flatpickr-minute");
        this.calculateButton = page.locator("#calculateCost");
        this.bookButton = page.locator("#reserveOnline")
    }

    async waitFor () {
        this.page.waitForURL(
            "https://practice.expandtesting.com/webpark"
        )
    }

    async infoEntry(dayEntry,monthEntry,yearEntry,hourEntry,minuteEntry){
        await this.calendarEntry.click();
        await this.monthEntry.selectOption({value:monthEntry});
        while (true){
           const currentYear = await this.yearEntry.textContent();
           if(currentYear == yearEntry)
           {
            break;
           }
           this.ageSwitch.click();
        }
        const dates = await this.page.$$("//a[@class='flatpickr-day']");
        for (const dt of dates){
            if (await dt.textContent()==dayEntry){
                await dt.click();
                break;
            }
        }
        await this.timeEntry.click();
        await this.hourEntry.fill(hourEntry);
        await this.minuteEntry.fill(minuteEntry);
    }

    async infoExit(dayExit,monthExit,yearExit,hourExit,minuteExit){
        await this.calendarExit.click();
        await this.monthExit.selectOption({value:monthExit});
        while (true){
            const currentYear = await this.yearExit.textContent();
            if(currentYear == yearExit)
            {
             break;
            }
            this.ageSwitch.click();
         }
         const dates2 = await this.page.$$("//a[@class='flatpickr-day']");
         for (const dt of dates2){
             if (await dt.textContent()==dayExit){
                 await dt.click();
                 break;
             }
         }
        await this.timeEntry.click();
        await this.hourEntry.fill(hourEntry);
        await this.minuteEntry.fill(minuteEntry);
    }

    async costCalculator(lot){
        await this.parkingLot.selectOption({value:lot});
        await this.calculateButton.click();
        await this.bookButton.click();
    }
}