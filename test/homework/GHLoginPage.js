class GHLoginPage {
    get singUpButton() { return $('a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')}
    async clickOnSingUpButton(){
        await this.singUpButton.click()

    }
}
export default new GHLoginPage()