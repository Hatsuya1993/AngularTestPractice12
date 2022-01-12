import { browser, $, by } from "protractor"
import { globalData } from "../helper/global";
import { DemoPage } from "../pageObject/demoPage";
import { Helper } from "../helper/helper"
import { RegisterPage } from "../pageObject/registerPage";
import { LoginPage } from "../pageObject/loginPage";

describe('Testing registerPage', () => {

    let demoPage = new DemoPage();
    let registerPage = new RegisterPage()
    let loginPage = new LoginPage()

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
        let demoPage = new DemoPage()
        await Helper.clickItem(demoPage.loginOption)
        await Helper.handleTabs(1)
        await Helper.clickItem(loginPage.createNewAccount)
    })

})