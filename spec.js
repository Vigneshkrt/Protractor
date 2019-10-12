describe('AngularTest', () => {

    it('check', ()=>{
        browser.get('http://angularjs.org');
        element(by.model('yourName')).sendKeys('Best Tester');
        let userName = element(by.xpath('//div[contains(@class, "well ng-scope")]/div/h1'));
        expect(userName.getText()).toEqual('Hello Best Tester!');
        browser.sleep(5000);
    })
})

