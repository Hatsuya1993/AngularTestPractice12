import { browser, $, by } from "protractor"
import { globalData } from "../helper/global";
import { DemoPage } from "../pageObject/demoPage";
import { Helper } from "../helper/helper"

describe('Testing orderPage', () => {

    let demoPage = new DemoPage();

    beforeEach( async () => {
        browser.waitForAngularEnabled(false);
        await browser.get(demoPage.website)
        await browser.manage().window().maximize();
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"])
    })

    afterEach( async () => {
        await browser.close()
    })

    it('Correct link for docs php travels', async () => {        
        let demoPage = new DemoPage();
        await Helper.clickItem(demoPage.docsOption)
        await Helper.handleTabs(1)
        expect(await browser.getCurrentUrl()).toContain('phptravels')
    })

})