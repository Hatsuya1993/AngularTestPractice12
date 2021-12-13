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

    fit('Should check the default content is displayed', async () => {
        let integratePage = await viewToPage.moveToIntegrate(demoPage.integrationOption)
        expect(await integratePage.pageContents.isDisplayed()).toBeTruthy()
    })
})