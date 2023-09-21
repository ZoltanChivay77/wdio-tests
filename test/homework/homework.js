import { browser } from '@wdio/globals'
import gHLoginPage from '../homework/githubLoginPage.js'
import hwSecond from '../homework/homework2.js'
import hwThird from '../homework/homework3.js'
import hwFour from '../homework/homework4.js'
import hwFive from '../homework/homework5.js'
describe(" homework", () => {
    xit(" homework1", async () => {
        await browser.url('https://github.com/')                        
        let welcomeText = await $('span[data-target="typing-effect.content"]')
        await browser.pause(2000);
        await gHLoginPage.clickOnSingUpButton()                             
        await browser.pause(5000);                                      
        await expect (welcomeText).toHaveTextContaining('Welcome to GitHub!')
        await gHLoginPage.addEmail()
        await browser.pause(2000);
        await gHLoginPage.clickOnContinueButton()                          
        await browser.pause(2000);
        await gHLoginPage.addPassword()
        await browser.pause(2000);
        await gHLoginPage.clickOnContinueButton2()
        await browser.pause(2000);
        await gHLoginPage.addLogin()
        await browser.pause(2000);
        await gHLoginPage.clickOnContinueButton3()
        await browser.pause(2000);
        await gHLoginPage.addAcept()
        await browser.pause(2000);
        await gHLoginPage.clickOnContinueButton4()
        await browser.pause(2000);
    
    });
    xit(" homework2", async () => {
        await browser.url('https://github.com/')                        
        await browser.pause(2000);
        await hwSecond.scrollToTheText()                             
        await browser.pause(3000);
        await hwSecond.checkEnterprise()
        console.log("Is displayed: " + hwSecond.checkEnterprise)
        await hwSecond.clickOnEnterprise()
        await browser.pause(2000);
        await hwSecond.checkHeader()
        console.log("Is displayed: " + hwSecond.checkHeader)
        await hwSecond.clickOnCloudButton() 
        await browser.pause(2000);
    });
    xit("homework3", async () => {
        await browser.url('https://github.com/')
        await browser.pause(2000);
        await hwThird.scrollToScrollPoint() 
        await hwThird.checkSubscribe()
        console.log("Is link enabled: " + hwThird.checkSubscribe)
        await hwThird.clickSubscribe()
        await browser.pause(2000);
        let currentUrl = browser.getUrl();
        console.log(currentUrl);
        await hwThird.checkSubscribeTitle()
        console.log("Is link displayed" + hwThird.checkSubscribeTitle)
        await browser.pause(2000);
        await hwThird.putSubscribeTitle()
        await browser.pause(2000);
        await hwThird.selectUkraine()
        await browser.pause(2000);
        await hwThird.changeInput()
        await browser.pause(2000);
        await hwThird.pushFinalButton()
        await browser.pause(2000);
        let finalTitle = await $('#hero-section-brand-heading')
        await expect(finalTitle).toHaveTextContaining('Thanks for subscribing!')
        await browser.pause(2000);


    });
    xit("homework4", async () => {
        await browser.url('https://github.com/')
        await browser.maximizeWindow()
        await browser.pause(2000);
        hwFour.pushSearchButt()
        await browser.pause(2000);
        hwFour.writeAct()
        await browser.pause(2000);
        await browser.keys('Enter')
        await browser.pause(10000);
        await hwFour.checkingResult()
        await browser.pause(2000);


    });
    it("homework5", async () => {
        await browser.url('https://github.com/')
        await browser.maximizeWindow()
        await browser.pause(2000);
        await hwFive.pushPricingButt()
        await browser.pause(5000);
        hwFive.checkPricingTitle()
        await browser.pause(2000);
        hwFive.scrollToCompareFeatures()
        await browser.pause(2000);
        hwFive.pushCompareFeatures()
        await browser.pause(2000);
        hwFive.checkCompareFeaturesTitle()
        await browser.pause(2000);

        
    });
});