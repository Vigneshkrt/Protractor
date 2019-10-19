describe('AngularTest', () => {

    it('check', ()=>{
        // browser.waitForAngularEnabled(false);
        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
        element(by.model('first')).sendKeys(10);
        element(by.model('second')).sendKeys(10);
        element(by.id('gobutton')).click();
        expect(element(by.className('ng-binding')).getText()).toEqual('20');
        browser.sleep(2000);
    })
});

