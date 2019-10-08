import { element } from "protractor";

describe('Weather', () => {
    it('check', ()=>{
        browser.get('http://newtours.demoaut.com');
        let userName = element(by.xpath('/html/body/div/table/tbody/tr/td[2]/table/tbody/tr[4]/td/table/tbody/tr/td[2]/table/tbody/tr[2]/td[3]/form/table/tbody/tr[4]/td/table/tbody/tr[2]/td[2]/input'));
        element()
    })
})

