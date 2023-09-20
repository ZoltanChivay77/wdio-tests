import { expect } from '@wdio/globals'
import { GHLoginPage} from '../homework/githubLoginPage.js'
describe(" homework", () => {
    it(" homework", async () => {
        await browser.url('https://github.com/')                        //1
        await browser.pause(2000);
        await DouPage.clickOnSingUpButton()                             //2
        await browser.pause(5000);                                      //3
        // expect(DouSalaries.kvartTitle).toHaveValue("I Квартиль")    
        // await browser.pause(2000);
        // await DouPage.clickOnJobButton()                          //4
        // await browser.pause(2000);
        // expect(DouJob.DoujobButton.isDisplayed())                   //5
        // await browser.pause(2000);
        // await DouJob.clickOnDouJobButton()                          //6
        // await browser.pause(2000);
        // expect(DouJob.fastPath.toHaveText('Швидкий перехід:'))
        // await browser.pause(2000);
    
    });
});