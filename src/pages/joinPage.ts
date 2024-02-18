import {Locator, Page} from "@playwright/test";

export class JoinPage {
    private readonly page: Page;

    private readonly newClientBtn: Locator;
    private readonly fillDataBtn: Locator;
    private readonly numbOfLoaners: Locator;
    private readonly genderCombobox: Locator;
    private readonly openCalendarBtn: Locator;
    private readonly monthAndYearBtn: Locator;
    incomeField: Locator;
    formTitle: Locator;

    constructor(page: Page) {
        this.page = page;

        this.newClientBtn = page.getByText('Jeszcze nie, ale chcę dołączyć');
        this.fillDataBtn = page.getByRole('button', {name: 'Wypełnij dane'});
        this.numbOfLoaners = this.page.locator('label[for=\'GesComplexComponent1_GesRadio2-2\']');
        this.genderCombobox = this.page.locator('#GesComplexComponent1_GesComplexComponent1_GesCombobox1-widget');
        this.incomeField = page.getByLabel('Miesięczny dochód netto', {exact: false})
        this.openCalendarBtn = page.getByRole('button', {name: 'Open calendar'});
        this.monthAndYearBtn = page.getByRole('button', {name: 'Choose month and year'});
        this.formTitle = page.getByRole('heading', {name: 'Symulacja kredytu hipotecznego'});
    }

    async clickNewClient(): Promise<void> {
        await this.newClientBtn.click();
    }

    async clickFillData(): Promise<void> {
        await this.fillDataBtn.click();
    }

    async clickNumberOfLoaners(): Promise<void> {
        await this.numbOfLoaners.check()
    }

    async selectBirthDate(year = 2002, month = 'CZE', day = 12): Promise<void> {
        const gridcellRole = 'gridcell';
        await this.openCalendarBtn.click();
        await this.monthAndYearBtn.click();
        await this.page.getByRole(gridcellRole, {name: year.toString()}).click()
        await this.page.getByRole(gridcellRole).filter({ hasText: month}).click()
        await this.page.getByRole(gridcellRole, {name: day.toString()}).click()
    }

    async selectGender(gender = 'Kobieta'): Promise<void> {
        await this.genderCombobox.click()
        await this.page.getByRole('option', {name: gender}).click();
    }

    async inputIncome(value = '12'): Promise<void> {
        await this.incomeField.fill(value);
    }
}