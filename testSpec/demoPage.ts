import { browser } from "protractor"
import { globalData } from "../helper/global";
import { DemoPage } from "../pageObject/demoPage";


describe('Testing demoPage', () => {
    
    beforeEach( async () => {
        browser.waitForAngularEnabled(false);
        let demoPage = new DemoPage();
        await browser.get(demoPage.website)
        await browser.manage().window().maximize();
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"])
    })

    afterEach( async () => {
        await browser.close()
    })

    it('Check if the home url is correct', async () => {
        expect(await browser.getCurrentUrl()).toContain("demo")
    })

})
