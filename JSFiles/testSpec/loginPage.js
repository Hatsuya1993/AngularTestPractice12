"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const global_1 = require("../helper/global");
const helper_1 = require("../helper/helper");
const loginPage_1 = require("../pageObject/loginPage");
describe("Testing loginPage", () => {
    let loginPage;
    const loginDetails = {
        email: "testEmail@test.com",
        password: "testpassword12345",
    };
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        loginPage = new loginPage_1.LoginPage();
        yield protractor_1.browser.get(loginPage.website);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.restart();
    }));
    it("Correct link for login", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("login");
    }));
    it("Check the login title", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield loginPage.title.isDisplayed()).toBeTruthy();
    }));
    it("Check the email input is displayed and correctly labeled", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield loginPage.emailLabel.isDisplayed()).toBeTruthy();
        expect(yield loginPage.emailLabel.getText()).toBe("Email Address");
    }));
    it("Check the password input is displayed and correctly labeled", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield loginPage.passwordLabel.isDisplayed()).toBeTruthy();
        expect(yield loginPage.passwordLabel.getText()).toBe("Password");
    }));
    it("Check the login button is displayed and correctly labeled", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield loginPage.loginButton.isDisplayed()).toBeTruthy();
        expect(yield loginPage.loginButton.getAttribute("value")).toBe("Login");
    }));
    it("Check the create a new account link is displayed and correctly labeled", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield loginPage.createNewAccount.isDisplayed()).toBeTruthy();
        expect(yield loginPage.createNewAccount.getText()).toBe("Create a New Account");
    }));
    it("Display error when no details is given", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.clickItem(loginPage.loginButton);
        expect(loginPage.alertInfo.isDisplayed()).toBeTruthy();
    }));
    it("Check forgot link is displayed and correctly labeled", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield loginPage.forgot.isDisplayed()).toBeTruthy();
        expect(yield loginPage.forgot.getText()).toBe("Forgot?");
    }));
    it("Successful login", () => __awaiter(void 0, void 0, void 0, function* () {
        yield loginPage.fill({
            email: loginDetails.email,
            password: loginDetails.password,
        });
        yield helper_1.Helper.handleIframe(loginPage.iframe);
        yield helper_1.Helper.clickItem(loginPage.recaptchaBox);
        yield helper_1.Helper.handleExitIframe();
        yield helper_1.Helper.clickItem(loginPage.loginButton);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("clientarea");
    }));
});
//# sourceMappingURL=loginPage.js.map