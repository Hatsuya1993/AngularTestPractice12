import { browser} from "protractor"
import { globalData } from "../helper/global";
import { Helper } from "../helper/helper"
import { RegisterDetails, RegisterPage } from "../pageObject/registerPage";

describe('Testing registerPage', () => {

    let registerPage = new RegisterPage()

    const accountRegister : RegisterDetails = {
        firstName: 'FirstNameTest'+ new Date().getTime() / 1000,
        lastName: 'LastNameTest'+ new Date().getTime() / 1000,
        email: + new Date().getTime() / 1000+'@test.com',
        phoneNumber: '1234567890',
        companyName: 'testCompanyName',
        streetAddress: 'testStreetAddress',
        streetAddress2: 'testStreetAddress2',
        city: 'testCity',
        state: 'testState',
        country: 'Singapore',
        mobile: '1234567890',
        password: 'testPassword12345',
        confirmPassword: 'testPassword12345',
        postCode: "12345"
    }

    beforeEach( async () => {
        browser.waitForAngularEnabled(false);
        await browser.get(registerPage.website)
        await browser.manage().window().maximize();
        await browser.sleep(globalData["WAIT_TIME"]["WAIT_LONG"])
    })

    afterEach( async () => {
        await browser.close()
    })

    it('Correct link for docs php travels', async () => {        
        expect(await browser.getCurrentUrl()).toContain('register')
    })

    it('Error when email address is invalid', async () => {
        await registerPage.fill(accountRegister)
        await Helper.handleIframe(registerPage.reCaptcha)
        await Helper.clickItem(registerPage.captchaBox)
        await Helper.clickItem(registerPage.captchaBox)
        await Helper.handleExitIframe()
        await Helper.clickItem(registerPage.registerButton)
        expect(await browser.getCurrentUrl()).toContain('clientarea')
    })

})