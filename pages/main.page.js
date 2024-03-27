exports.MainPage = class MainPage {
    constructor(page) {
        this.page = page;
        this.parkingLot = page.locator("#parkingLot");
        this.calendarEntry = page.locator("#entryDate");
        this.dateEntry = page.locator("#entryTime");
        // this.monthEntry = page.getByLabel('Month').first();
        // this.yearEntry = page.getByRole('spinbutton', { name: 'Year' });
        // this.ageSwitch = page.locator(".arrowUp").first();
        // this.dayEntry = page.getByLabel("March 20, 2026");
        this.timeEntry = page.getByPlaceholder('Entry Time');
        this.hourEntry = page.getByRole('spinbutton', { name: 'Hour' });
        this.minuteEntry = page.getByRole('spinbutton', { name: 'Minute' });
        this.calendarExit = page.locator("#exitDate");
        // this.monthExit = page.getByLabel('Month').nth(1);
        // this.yearExit = page.getByRole('spinbutton', { name: 'Year' });
        // this.ageSwitch2 = page.locator('div:nth-child(10) > .flatpickr-months > .flatpickr-month > .flatpickr-current-month > .numInputWrapper > .arrowUp')
        this.timeExit = page.locator("#exitTime");
        this.hourExit = page.getByRole('spinbutton', { name: 'Hour' });
        this.minuteExit = page.getByRole('spinbutton', { name: 'Minute' });
        this.calculateButton = page.locator("#calculateCost");
        this.bookButton = page.locator("#reserveOnline")
    }

    async goTo () {
        this.page.goto(
            "https://practice.expandtesting.com/webpark"
        )
    }

    async infoEntry(dateEntry,hourEntry,minuteEntry){
        await this.calendarEntry.waitFor();
        await this.calendarEntry.click();
        await this.calendarEntry.fill(dateEntry);
        await this.timeEntry.click();
        await this.hourEntry.fill(hourEntry);
        await this.minuteEntry.fill(minuteEntry);
    }

    async infoExit(dateExit,hourExit,minuteExit){
        await this.calendarExit.click();
        await this.calendarExit.fill(dateExit);
        await this.timeExit.click();
        await this.hourExit.fill(hourExit);
        await this.minuteExit.fill(minuteExit);
        await this.minuteEntry.fill(minuteExit);
    }

    async costCalculator(lot){
        await this.parkingLot.click();
        await this.parkingLot.selectOption(lot);
        await this.calculateButton.click();
        await this.bookButton.click();
    }
}