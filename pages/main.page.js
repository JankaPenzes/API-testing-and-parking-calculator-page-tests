exports.MainPage = class MainPage {
    constructor(page) {
        this.page = page;
        this.parkingLot = page.locator("#parkingLot");
        this.calendarEntry = page.locator("#entryDate");
        this.dateEntry = page.locator("#entryTime");
        this.monthEntry = page.getByLabel('Month').first();
        this.yearEntry = page.getByRole('spinbutton', { name: 'Year' });
        this.ageSwitch = page.locator(".arrowUp").first();
        this.timeEntry = page.getByPlaceholder('Entry Time');
        this.hourEntry = page.getByRole('spinbutton', { name: 'Hour' });
        this.minuteEntry = page.getByRole('spinbutton', { name: 'Minute' });
        this.calendarExit = page.locator("#exitDate");
        this.monthExit = page.getByLabel('Month').nth(1);
        this.yearExit = page.getByRole('spinbutton', { name: 'Year' });
        this.ageSwitch2 = page.locator('div:nth-child(16) > .flatpickr-time > div > .arrowUp').first();
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
       // while (true){
        //    currentYear = parseInt(await this.yearEntry.inputValue()); 
        //    if(currentYear == yearEntry)
        //    {
        //     break;
        //    }
        //    this.ageSwitch.click();
        // }
        // const dates = await this.page.$$("//a[@class='flatpickr-day']");
        // for (const dt of dates){
        //     if (await dt.textContent()==dayEntry){
        //         await dt.click();
        //         break;
        //     }
        // }
        // 'March 2, 2027'
        await this.date2(`${monthEntry} ${dayEntry}, ${yearEntry}`).click({force:true});
        await this.timeEntry.click();
        await this.hourEntry.fill(hourEntry);
        await this.minuteEntry.fill(minuteEntry);
    }

    async infoExit(dayExit,monthExit,yearExit,hourExit,minuteExit){
        await this.calendarExit.click();
        await this.monthExit.selectOption({label:monthExit});
        while (true){
            const currentYear = parseInt(await this.yearExit.inputValue());
            if(currentYear == yearExit)
            {
             break;
            }
            this.ageSwitch2.click();
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