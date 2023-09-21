class hwFour {
    get searchButt() {return $('button[data-target="qbsearch-input.inputButton"]')}
    get searchString() {return $('#query-builder-test')}
    
   
    async pushSearchButt () {
        await this.searchButt.click()
    }
    async writeAct () {
        await this.searchString.addValue("act")
    }
    async checkingResult () {
        let resu = $('//span[contains(text(),"nektos/")]')
        await expect(resu).toHaveTextContaining('act')
    }
    
}
export default new hwFour()