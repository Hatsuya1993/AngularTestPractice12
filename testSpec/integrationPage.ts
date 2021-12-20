import { browser, $, by } from "protractor"
import { globalData } from "../helper/global";
import { DemoPage } from "../pageObject/demoPage";
import { Helper } from "../helper/helper"
import { OrderPage } from "../pageObject/orderPage";
import { ConfirmOrderPage } from "../pageObject/confirmOrder";
import { ViewToPage } from "../view/viewToPage";
import { IntegrationPage } from "../pageObject/integrationPage";


describe('Testing orderPage', () => {

    let demoPage = new DemoPage();
    let orderPage = new OrderPage();
    let confirmOrderPage = new ConfirmOrderPage();
    let viewToPage = new ViewToPage();

    beforeEach( async () => {
        browser.waitForAngularEnabled(false);
        await browser.get(demoPage.website)
        await browser.manage().window().maximize();
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"])
    })

    afterEach( async () => {
        await browser.close()
    })

    it('Should check the default content is displayed', async () => {
        let integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption)
        expect(await integratePage.pageContents.isDisplayed()).toBeTruthy()
    })

    it('Should open another tab to the correct website for travelport', async () => {
        let integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption)
        await Helper.clickItem(integratePage.websiteTravelPort)
        expect((await browser.getAllWindowHandles()).length).toBe(2)
    })

    it('Should open to the correct website for travelport', async () => {
        let integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption)
        await Helper.clickItem(integratePage.websiteTravelPort)
        await Helper.handleTabs(1)
        expect(await browser.getCurrentUrl()).toContain('travelport')
    })

    it('Should open another tab to the correct website for travelport documentation', async () => {
        let integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption)
        await Helper.clickItem(integratePage.travelPortDoc)
        expect((await browser.getAllWindowHandles()).length).toBe(2)
    })

    it('Should open to the correct website for travelport', async () => {
        let integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption)
        await Helper.clickItem(integratePage.travelPortDoc)
        await Helper.handleTabs(1)
        expect(await browser.getCurrentUrl()).toContain('hotels/travelport')
    })

    it('Should open another tab to the correct website for travelpayout', async () => {
        let integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption)
        await Helper.clickItem(integratePage.travelPayOut)
        expect((await browser.getAllWindowHandles()).length).toBe(2)
    })

    fit('Should open to the correct website for travelpayouts', async () => {
        let integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption)
        await Helper.clickItem(integratePage.travelPayOut)
        await Helper.handleTabs(1)
        expect(await browser.getCurrentUrl()).toContain('travelpayouts')
    })
})