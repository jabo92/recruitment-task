import {pagesFixtures as test, expect} from '../src/fixtures/pageFixtures';

test('Join bank form', async ({joinPage}) => {
    await joinPage.clickNewClient();
    await joinPage.clickFillData();
    await joinPage.inputIncome();
    await joinPage.selectBirthDate();
    await joinPage.selectGender();
    await joinPage.clickNumberOfLoaners();

    expect(await joinPage.incomeField.inputValue()).toEqual('12,00');
    await expect(joinPage.formTitle).toBeVisible();
});