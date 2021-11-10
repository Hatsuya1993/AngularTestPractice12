import { browser } from "protractor"
import { globalData } from "../helper/global";
import { DemoPage } from "../pageObject/demoPage";
import { Helper } from "../helper/helper"


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

    it('Check if the title is correct', async () => {
        let demoPage = new DemoPage()
        if(await Helper.displayed(demoPage.title)) expect(await demoPage.title.getText()).toBe("PHPTRAVELS")
    })

    it('Check if the subtitle is correct', async () => {
        let demoPage = new DemoPage()
        if(await Helper.displayed(demoPage.subTitle)) expect(await demoPage.subTitle.getText()).toBe("TRAVEL TECHNOLOGY PARTNER")
    })

    it('Check if the main title is correct', async () => {
        let demoPage = new DemoPage()
        if(await Helper.displayed(demoPage.mainTitle)) expect(await demoPage.mainTitle.getText()).toBe("Demo Credentials for Frontend and Backend")
    })

    it('Check if the nav options at the top are available', async () => {
        let demoPage = new DemoPage()
        expect(await Helper.displayed(demoPage.navOption)).toBeTruthy()
    })

    it('Check if the home url is correct if demo is clicked', async () => {
        let demoPage = new DemoPage()
        await Helper.clickItem(demoPage.demoOption)
        expect(await browser.getCurrentUrl()).toContain("demo")
    })

    it('Check if the pricing url is currect if pricing if clicked', async () => {
        let demoPage = new DemoPage()
        await Helper.clickItem(demoPage.pricingOption)
        expect(await browser.getCurrentUrl()).toContain("order")
    })

    it('Check if the integrations url is correct if clicked', async () => {
        let demoPage = new DemoPage()
        await Helper.clickItem(demoPage.integrationOption)
        expect(await browser.getCurrentUrl()).toContain("integrations")
    })

    it('Check another tab is opened when Docs is clicked', async () => {
        let demoPage = new DemoPage()
        await Helper.clickItem(demoPage.docsOption)
        expect((await browser.getAllWindowHandles()).length).toBe(2)
    })

    it('Check when Docs tab is clicked, the new tab hold the correct url', async () => {
        let demoPage = new DemoPage()
        await Helper.clickItem(demoPage.docsOption)
        await Helper.handleTabs(1)
        expect(await browser.getCurrentUrl()).toContain("docs")
    })

    fit('Check another tab is opened when Blog is clicked', async () => {
        let demoPage = new DemoPage()
        await Helper.clickItem(demoPage.blogOption)
        expect((await browser.getAllWindowHandles()).length).toBe(2)
    })

})
