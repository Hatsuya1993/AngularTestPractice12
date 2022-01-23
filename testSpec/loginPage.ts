import { browser} from "protractor"
import { globalData } from "../helper/global";
import { Helper } from "../helper/helper";
import { LoginDetails, LoginPage } from "../pageObject/loginPage";

describe('Testing loginPage', () => {

    let loginPage = new LoginPage()

    const loginDetails : Partial<LoginDetails> = {
        email : 'testEmail@test.com',
        password : 'testpassword12345'
    }

    beforeEach( async () => {
        browser.waitForAngularEnabled(false);
        await browser.get(loginPage.website)
        await browser.manage().window().maximize();
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"])
    })

    afterEach( async () => {
        await browser.close()
    })

    it('Correct link for login', async () => {        
        expect(await browser.getCurrentUrl()).toContain('login')
    })

    it('Check the login title', async () => {
        expect(await loginPage.title.isDisplayed()).toBeTruthy()
    })

    fit('Check the email input is displayed and correctly labeled', async () => {
        expect(await loginPage.emailLabel.isDisplayed()).toBeTruthy()
        expect(await loginPage.emailLabel.getText()).toBe('Email Address')
    })

    it('Display error when no details is given', async () => {
        await Helper.clickItem(loginPage.loginButton)
        expect(loginPage.alertInfo.isDisplayed()).toBeTruthy()
    })

    it('Successful login', async () => {
        await loginPage.fill({
            email : loginDetails.email,
            password : loginDetails.password
        })
        await Helper.handleIframe(loginPage.iframe)
        await Helper.clickItem(loginPage.recaptchaBox)
        await Helper.handleExitIframe()
        await Helper.clickItem(loginPage.loginButton)
        expect(await browser.getCurrentUrl()).toContain('clientarea')
    })
})