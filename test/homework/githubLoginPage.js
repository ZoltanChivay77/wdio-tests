class gHLoginPage {
    get singUpButton() { return $('a[href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]')}
    get emailInput() {return $('#email')}
    get continueButton() {return $('button[data-optimizely-event="click.signup_continue.email"]')}
    get passwordInput() {return $('#password')}
    get continueButton2() {return $('button[data-optimizely-event="click.signup_continue.password"]')}
    get loginInput() {return $('#login')}
    get continueButton3() {return $('button[data-optimizely-event="click.signup_continue.username"]')} 
    get acceptInput() {return $('#opt_in')}
    get continueButton4() {return $('button[data-optimizely-event="click.signup_continue.opt-in"]')} 
    async clickOnSingUpButton(){
        await this.singUpButton.click()
    }
    async addEmail(){
        await this.emailInput.addValue("exampleexample@gmail.com")
    }
    async clickOnContinueButton(){
        await this.continueButton.click()
    }
    async addPassword(){
        await this.passwordInput.addValue("AbraKadabra123312")
    }
    async clickOnContinueButton2(){
        await this.continueButton2.click()  
    }
    async addLogin(){
        await this.loginInput.addValue("SuperPuperUser777")   
    }
    async clickOnContinueButton3(){
        await this.continueButton3.click()  
    }
    async addAcept(){
        await this.acceptInput.addValue("y")   
    }
    async clickOnContinueButton4(){
        await this.continueButton4.click()  
    }
}
export default new gHLoginPage()