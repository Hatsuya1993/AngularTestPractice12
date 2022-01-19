import { browser} from "protractor"
import { globalData } from "../helper/global";
import { LoginPage } from "../pageObject/loginPage";

describe('Testing loginPage', () => {

    let loginPage = new LoginPage()

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


})