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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvcmVnaXN0ZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDZDQUE0QztBQUM1Qyw2Q0FBd0M7QUFDeEMsNkRBQXlFO0FBRXpFLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7SUFDcEMsSUFBSSxZQUFZLENBQUM7SUFFakIsTUFBTSxlQUFlLEdBQThCO1FBQ2pELFNBQVMsRUFBRSxlQUFlLEdBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJO1FBQ3ZELFFBQVEsRUFBRSxjQUFjLEdBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJO1FBQ3JELEtBQUssRUFBRSxDQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFDLFdBQVc7UUFDaEQsV0FBVyxFQUFFLFlBQVk7UUFDekIsV0FBVyxFQUFFLGlCQUFpQjtRQUM5QixhQUFhLEVBQUUsbUJBQW1CO1FBQ2xDLGNBQWMsRUFBRSxvQkFBb0I7UUFDcEMsSUFBSSxFQUFFLFVBQVU7UUFDaEIsS0FBSyxFQUFFLFdBQVc7UUFDbEIsT0FBTyxFQUFFLFdBQVc7UUFDcEIsTUFBTSxFQUFFLFlBQVk7UUFDcEIsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixlQUFlLEVBQUUsbUJBQW1CO1FBQ3BDLFFBQVEsRUFBRSxPQUFPO0tBQ2xCLENBQUM7SUFFRixNQUFNLGVBQWUsR0FBOEI7UUFDakQsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixlQUFlLEVBQUUsa0JBQWtCO0tBQ3BDLENBQUM7SUFFRixNQUFNLGFBQWEsR0FBOEI7UUFDL0MsU0FBUyxFQUFFLGVBQWUsR0FBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUk7UUFDdkQsUUFBUSxFQUFF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