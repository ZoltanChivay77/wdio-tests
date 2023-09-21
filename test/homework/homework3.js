class hwThird {
    get subscribePoint() {return $('a[href="https://resources.github.com/newsletter/"]')}
    get subscribeTitle() {return $('#hero-section-brand-heading')}
    get subscribeInput() {return $('input[type="email"]')}
    get countrySelect() {return $('#country')}
    get pushInput() {return $('#gated-agree-marketingEmailOptin1')}
    get finalButton() {return $('button[type="submit"]')}
    async scrollToScrollPoint(){
        await this.subscribePoint.scrollIntoView()
    }
    async checkSubscribe () {
        await this.subscribePoint.isEnabled()
    }
    async clickSubscribe () {
        await this.subscribePoint.click()
    }
    async checkSubscribeTitle () {
        await this.subscribeTitle.isDisplayed()
    }
    async putSubscribeTitle () {
        await this.subscribeInput.addValue("qweqweqweqweqwwe@qwe.com")
    }
    async selectUkraine () {
        await this.countrySelect.selectByIndex(224)
    }
    async changeInput () {
        await this.pushInput.click()
    }
    async pushFinalButton () {
        await this.finalButton.click()
    }
}
export default new hwThird()