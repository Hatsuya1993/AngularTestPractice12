import { browser, $ } from "protractor"
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

    it('Should able the buy now button after selecting an option', async () => {        let demoPage = new DemoPage();
        await Helper.clickItem(demoPage.pricingOption)
        await Helper.waitForPage("order")
        await orderPage.getCheckBox("1")
        expect(await orderPage.buyNowButton.isEnabled()).toBe(true)
    })

    fit('Should check the url when the buy now button is clicked', async () => {
        await Helper.clickItem(demoPage.pricingOption)
        await Helper.waitForPage("order")
        await orderPage.getCheckBox("1")
        await Helper.scrollPage('500')
        await Helper.clickItem(orderPage.buyNowButton)
        expect(await browser.getCurrentUrl()).toContain("order-confirm")
    })

})