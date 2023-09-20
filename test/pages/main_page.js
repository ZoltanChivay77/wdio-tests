
class DouPage {

    get salariesButton() { return $('a[href="https://jobs.dou.ua/salaries/"]') }
    get jobButton() { return $('a[href="https://jobs.dou.ua/"]') }
    get relocateButton() { return $('.menu-site menu-site__relocate') }
    get kvartil() { return $('#q1') }
        async clickOnSalariesButton() {
            await this.salariesButton.click()
        }
        
        async clickOnJobButton() {
            await this.jobButton.click()
        }
        
        async clickOnRelocateButton() {
            await this.relocateButton.click()
        }
}

// from previous Lesson
//     get username() { return $('#username')}
//     get password() { return $('#password')}
//     get loginButton() { return $('.radius')}

//         async setUsernameInput(value) {
//             await this.username.addValue(value)
//         }
        
//         async setPasswordInput(value) {
//             await this.password.addValue(value)
//         }
        
//         async clickOnLoginButton() {
//             await this.loginButton.click()
//         }

export default new DouPage()
