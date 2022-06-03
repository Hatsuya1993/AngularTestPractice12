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
const registerPage_1 = require("../pageObject/registerPage");
describe("Testing registerPage", () => {
    let registerPage;
    const accountRegister = {
        firstName: "FirstNameTest" + new Date().getTime() / 1000,
        lastName: "LastNameTest" + new Date().getTime() / 1000,
        email: +new Date().getTime() / 1000 + "@test.com",
        phoneNumber: "1234567890",
        companyName: "testCompanyName",
        streetAddress: "testStreetAddress",
        streetAddress2: "testStreetAddress2",
        city: "testCity",
        state: "testState",
        country: "Singapore",
        mobile: "1234567890",
        password: "testPassword12345",
        confirmPassword: "testPassword12345",
        postCode: "12345",
    };
    const noMatchPassword = {
        password: "testPassword12345",
        confirmPassword: "testPassword1234",
    };
    const errorRegister = {
        firstName: "FirstNameTest" + new Date().getTime() / 1000,
        lastName: "LastNameTest" + new Date().getTime() / 1000,
        streetAddress: "testStreetAddress",
        city: "testCity",
        state: "testState",
        country: "Singapore",
    };
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        registerPage = new registerPage_1.RegisterPage();
        yield protractor_1.browser.get(registerPage.website);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.restart();
    }));
    it("Correct link for docs php travels", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("register");
    }));
    it("Register title should be correct", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.registerTitle.isDisplayed()).toBeTruthy();
        expect(yield registerPage.registerTitle.getText()).toBe("Register");
    }));
    it("First name should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelForFirstName.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelForFirstName.getText()).toBe("First Name");
    }));
    it("Last name should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelForLastName.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelForLastName.getText()).toBe("Last Name");
    }));
    it("Email address should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelForEmailAddress.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelForEmailAddress.getText()).toBe("Email Address");
    }));
    it("Phone number should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelForPhone.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelForPhone.getText()).toBe("Phone Number");
    }));
    it("Company name should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelForCompanyName.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelForCompanyName.getText()).toBe("Company Name (Optional)");
    }));
    it("Street address should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelStreetAddress.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelStreetAddress.getText()).toBe("Street Address");
    }));
    it("Street address 2 should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelStreetAddress2.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelStreetAddress2.getText()).toBe("Street Address 2");
    }));
    it("City should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelCity.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelCity.getText()).toBe("City");
    }));
    it("State should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelState.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelState.getText()).toBe("State (Optional)");
    }));
    it("Postcode should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelPostCode.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelPostCode.getText()).toBe("Postcode (Optional)");
    }));
    it("Country should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelCountry.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelCountry.getText()).toBe("Country");
    }));
    it("Mobile should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelMobile.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelMobile.getText()).toBe("Mobile");
    }));
    it("Password should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelPasswordOne.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelPasswordOne.getText()).toBe("Password");
    }));
    it("Confirm password should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelPasswordTwo.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelPasswordTwo.getText()).toBe("Confirm Password");
    }));
    it("Register flow success", () => __awaiter(void 0, void 0, void 0, function* () {
        yield registerPage.fill(accountRegister);
        yield helper_1.Helper.handleIframe(registerPage.reCaptcha);
        yield helper_1.Helper.clickItem(registerPage.captchaBox);
        yield helper_1.Helper.clickItem(registerPage.captchaBox);
        yield helper_1.Helper.handleExitIframe();
        yield helper_1.Helper.clickItem(registerPage.registerButton);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("clientarea");
    }));
    it("Error when email address is invalid", () => __awaiter(void 0, void 0, void 0, function* () {
        yield registerPage.fill(noMatchPassword);
        expect(yield registerPage.noMatchPassword.isDisplayed()).toBeTruthy();
    }));
    it("Error when data is invalid", () => __awaiter(void 0, void 0, void 0, function* () {
        yield registerPage.fill(errorRegister);
        yield helper_1.Helper.clickItem(registerPage.registerButton);
        expect(yield registerPage.errorAlert.isDisplayed()).toBeTruthy();
    }));
});
//# sourceMappingURL=registerPage.js.map