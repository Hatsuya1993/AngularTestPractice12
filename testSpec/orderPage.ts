import { browser } from "protractor"
import { globalData } from "../helper/global";
import { DemoPage } from "../pageObject/demoPage";
import { Helper } from "../helper/helper"
import { OrderPage } from "../pageObject/orderPage";


describe('Testing orderPage', () => {

    let demoPage = new DemoPage();
    let orderPage = new OrderPage();

    beforeEach( async () => {
        browser.waitForAngularEnabled(false);
        await browser.get(demoPage.website)
        await browser.manage().window().maximize();
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"])
    })

    afterEach( async () => {
        await browser.close()
    })

    it('Should disable the buy now button by default', async () => {        let demoPage = new DemoPage();
        await Helper.clickItem(demoPage.pricingOption)
        expect(await orderPage.buyNowButton.isEnabled()).toBe(false)
    })

})