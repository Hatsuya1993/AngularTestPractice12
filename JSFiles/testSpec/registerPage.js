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
    const registerPage = new registerPage_1.RegisterPage();
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
        yield protractor_1.browser.get(registerPage.website);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
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
    fit("State should be displayed with the correct label", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield registerPage.labelState.isDisplayed()).toBeTruthy();
        expect(yield registerPage.labelState.getText()).toBe("State (Optional)");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvcmVnaXN0ZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDZDQUE0QztBQUM1Qyw2Q0FBd0M7QUFDeEMsNkRBQXlFO0FBRXpFLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7SUFDcEMsTUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7SUFFeEMsTUFBTSxlQUFlLEdBQThCO1FBQ2pELFNBQVMsRUFBRSxlQUFlLEdBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJO1FBQ3ZELFFBQVEsRUFBRSxjQUFjLEdBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJO1FBQ3JELEtBQUssRUFBRSxDQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFDLFdBQVc7UUFDaEQsV0FBVyxFQUFFLFlBQVk7UUFDekIsV0FBVyxFQUFFLGlCQUFpQjtRQUM5QixhQUFhLEVBQUUsbUJBQW1CO1FBQ2xDLGNBQWMsRUFBRSxvQkFBb0I7UUFDcEMsSUFBSSxFQUFFLFVBQVU7UUFDaEIsS0FBSyxFQUFFLFdBQVc7UUFDbEIsT0FBTyxFQUFFLFdBQVc7UUFDcEIsTUFBTSxFQUFFLFlBQVk7UUFDcEIsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixlQUFlLEVBQUUsbUJBQW1CO1FBQ3BDLFFBQVEsRUFBRSxPQUFPO0tBQ2xCLENBQUM7SUFFRixNQUFNLGVBQWUsR0FBOEI7UUFDakQsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixlQUFlLEVBQUUsa0JBQWtCO0tBQ3BDLENBQUM7SUFFRixNQUFNLGFBQWEsR0FBOEI7UUFDL0MsU0FBUyxFQUFFLGVBQWUsR0FBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFH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