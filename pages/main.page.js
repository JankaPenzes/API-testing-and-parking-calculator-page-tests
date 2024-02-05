exports.MainPage = class MainPage {
    constructor(page) {
        this.page = page;
        this.parkingLot = page.locator("#parkingLot");
        this.calendarEntry = page.locator("#entryDate");
        this.dateEntry = page.locator("#entryTime");
        this.calendarExit = page.locator("#exitDate");
        this.dateExit = page.locator("#exitTime");
        this.calculateButton = page.locator("#calculateCost");
        this.bookButton = page.locator("#reserveOnline")
    }
}