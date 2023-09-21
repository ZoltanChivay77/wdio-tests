class hwSecond {
    get scrollPoint() {return $('//*[contains(text(),"The place for anyone from anywhere")]')}
    get enterprise () {return $('a[href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"]')}
    get cloudButton () {return $('a[href="/account/enterprises/new?ref_cta=Enterprise%2520Cloud&ref_loc=choose_an_enterprise_plan&ref_page=%2Forganizations%2Fenterprise_plan%3Fref_cta%3DStart%2Ba%2Bfree%2Benterprise%2Btrial%26ref_loc%3DHome%2Bcampaign%2Bfooter%26ref_page%3D%252F"]')}
    get headerNeed() {return $('//*[contains(text(),"Pick your trial plan")]')}
    async scrollToTheText(){
        await this.scrollPoint.scrollIntoView()
    }
    async checkEnterprise(){
        await this.enterprise.isDisplayed()
    }
    async clickOnEnterprise(){
        await this.enterprise.click()
    }
    async checkHeader(){
        await this.headerNeed.isDisplayed()
    }
    async clickOnCloudButton(){
        await this.cloudButton.click()
    }
}
export default new hwSecond()