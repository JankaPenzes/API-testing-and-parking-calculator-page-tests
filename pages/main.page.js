exports.MainPage = class MainPage {
    constructor(page) {
        this.page = page;
        this.parkingLot = page.locator("#parkingLot");
        this.calendarEntry = page.locator("#entryDate");
        this.dateEntry = page.locator("#entryTime");
        this.timeEntry = page.getByPlaceholder('Entry Time');
        this.hourEntry = page.getByRole('spinbutton', { name: 'Hour' });
        this.minuteEntry = page.getByRole('spinbutton', { name: 'Minute' });
        this.calendarExit = page.locator("#exitDate");
        this.timeExit = page.locator("#exitTime");
        this.hourExit = page.getByRole('spinbutton', { name: 'Hour' });
        this.minuteExit = page.getByRole('spinbutton', { name: 'Minute' });
        this.calculateButton = page.locator("#calculateCost");
        this.bookButton = page.locator("#reserveOnline");
        this.error = page.locator(".alert-danger");
        this.error2 = page.locator("#resultMessage");
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

    async errorMessage(lot){
        await this.parkingLot.click();
        await this.parkingLot.selectOption(lot);
        await this.calculateButton.click();
    }
}