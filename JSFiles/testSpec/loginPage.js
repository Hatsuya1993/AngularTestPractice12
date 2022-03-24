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
    const loginPage = new loginPage_1.LoginPage();
    const loginDetails = {
        email: "testEmail@test.com",
        password: "testpassword12345",
    };
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(loginPage.website);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvbG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDZDQUE0QztBQUM1Qyw2Q0FBd0M7QUFDeEMsdURBQWdFO0FBRWhFLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsTUFBTSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7SUFFbEMsTUFBTSxZQUFZLEdBQTJCO1FBQzNDLEtBQUssRUFBRSxvQkFBb0I7UUFDM0IsUUFBUSxFQUFFLG1CQUFtQjtLQUM5QixDQUFDO0lBRUYsVUFBVSxDQUFFLEdBQVMsRUFBRTtRQUNyQixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFFLEdBQVMsRUFBRTtRQUNwQixNQUFNLG9CQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxHQUFTLEVBQUU7UUFDdEMsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFLEdBQVMsRUFBRTtR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