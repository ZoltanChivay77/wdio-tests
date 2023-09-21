class hwFive {
    get pricingButton() {return $('a[href="/pricing"]')}
    get pricingTitle(){return $('h2[class=h2-mktg]')}
    get CompareFeatures() {return $('a[href="#compare-features"]')}
    get CompareFeaturesTitle() {return $('.h1')}

    async pushPricingButt () {
        await this.pricingButton.click()
    }
    async checkPricingTitle(){
        await this.pricingTitle.isDisplayed()
        console.log("Is displayed: " + pricingTitle)
    }
    async scrollToCompareFeatures(){
        await this.CompareFeatures.scrollIntoView()
    }
    async pushCompareFeatures() {
        await this.CompareFeatures.click()
    }
    async checkCompareFeaturesTitle(){
        await this.CompareFeaturesTitle.isDisplayed()
        console.log("Is diplayed: " + CompareFeaturesTitle)
    }
    // await expect(pricingTitle).toHaveTextContaining('Get the complete developer platform.')
    

    
    // async checkingResult () {
    //     let resu = $('//span[contains(text(),"nektos/")]')
    //     await expect(resu).toHaveTextContaining('act')
    }
    
export default new hwFive()