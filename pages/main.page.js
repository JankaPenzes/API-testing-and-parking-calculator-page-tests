exports.MainPage = class MainPage {
    constructor(page) {
        this.page = page;
        this.parkingLot = page.locator("#parkingLot");
        this.calendarEntry = page.locator("#entryDate");
        this.dateEntry = page.locator("#entryTime");
        this.monthEntry = page.getByLabel('Month').first();
        this.yearEntry = page.getByRole('spinbutton', { name: 'Year' });
        this.ageSwitch = page.locator(".arrowUp").first();
        this.dayEntry = page.getByLabel("March 20, 2026");
        this.timeEntry = page.getByPlaceholder('Entry Time');
        this.hourEntry = page.getByRole('spinbutton', { name: 'Hour' });
        this.minuteEntry = page.getByRole('spinbutton', { name: 'Minute' });
        this.calendarExit = page.locator("#exitDate");
        this.monthExit = page.getByLabel('Month').nth(1);
        this.yearExit = page.getByRole('spinbutton', { name: 'Year' });
        this.ageSwitch2 = page.locator('div:nth-child(10) > .flatpickr-months > .flatpickr-month > .flatpickr-current-month > .numInputWrapper > .arrowUp')
        this.timeExit = page.locator("#exitTime");
        this.hourExit = page.locator(".flatpickr-hour");
        this.minuteExit = page.locator(".flatpickr-minute");
        this.calculateButton = page.locator("#calculateCost");
        this.bookButton = page.locator("#reserveOnline")
        this.date2 = (date)=>page.getByLabel(date);
    }

    async goTo () {
        this.page.goto(
            "https://practice.expandtesting.com/webpark"
        )
    }

    async infoEntry(dayEntry,monthEntry,yearEntry,hourEntry,minuteEntry){
        await this.calendarEntry.waitFor();
        await this.calendarEntry.click();
        await this.monthEntry.click();
        await this.monthEntry.selectOption({label:monthEntry});
        let currentYear;
        currentYear = parseInt(await this.yearEntry.inputValue());
        while (currentYear<yearEntry){
            this.ageSwitch.click();
            currentYear = parseInt(await this.yearEntry.inputValue()); 
        }
        // const dates = await this.page.$$("//a[@class='flatpickr-day']");
        // for (const dt of dates){
        //     if (await dt.textContent()==dayEntry){
        //         await dt.click();
        //         break;
        //     }
        // }
        // await this.dayEntry.click();
        await this.timeEntry.click();
        await this.hourEntry.fill(hourEntry);
        await this.minuteEntry.fill(minuteEntry);
    }

    async infoExit(dayExit,monthExit,yearExit,hourExit,minuteExit){
        await this.calendarExit.click();
        await this.monthExit.selectOption({label:monthExit});
        let currentYear;
        currentYear = parseInt(await this.yearExit.inputValue());
        while (currentYear<yearExit){
            this.ageSwitch2.click();
            currentYear = parseInt(await this.yearExit.inputValue()); 
        };
        //  const dates2 = await this.page.$$("//a[@class='flatpickr-day']");
        //  for (const dt of dates2){
        //      if (await dt.textContent()==dayExit){
        //          await dt.click();
        //          break;
        //      }
        //  }
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