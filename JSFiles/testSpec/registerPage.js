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
describe('Testing registerPage', () => {
    let registerPage = new registerPage_1.RegisterPage();
    const accountRegister = {
        firstName: 'FirstNameTest' + new Date().getTime() / 1000,
        lastName: 'LastNameTest' + new Date().getTime() / 1000,
        email: +new Date().getTime() / 1000 + '@test.com',
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
    };
    const noMatchPassword = {
        password: 'testPassword12345',
        confirmPassword: 'testPassword1234',
    };
    const errorRegister = {
        firstName: 'FirstNameTest' + new Date().getTime() / 1000,
        lastName: 'LastNameTest' + new Date().getTime() / 1000,
        streetAddress: 'testStreetAddress',
        city: 'testCity',
        state: 'testState',
        country: 'Singapore',
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
    it('Correct link for docs php travels', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('register');
    }));
    it('Register flow success', () => __awaiter(void 0, void 0, void 0, function* () {
        yield registerPage.fill(accountRegister);
        yield helper_1.Helper.handleIframe(registerPage.reCaptcha);
        yield helper_1.Helper.clickItem(registerPage.captchaBox);
        yield helper_1.Helper.clickItem(registerPage.captchaBox);
        yield helper_1.Helper.handleExitIframe();
        yield helper_1.Helper.clickItem(registerPage.registerButton);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('clientarea');
    }));
    it('Error when email address is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        yield registerPage.fill(noMatchPassword);
        expect(yield registerPage.noMatchPassword.isDisplayed()).toBeTruthy();
    }));
    fit('Error when data is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        yield registerPage.fill(errorRegister);
        yield helper_1.Helper.clickItem(registerPage.registerButton);
        expect(yield registerPage.errorAlert.isDisplayed()).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvcmVnaXN0ZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDZDQUE4QztBQUM5Qyw2Q0FBeUM7QUFDekMsNkRBQTJFO0FBRTNFLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7SUFFbEMsSUFBSSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUE7SUFFckMsTUFBTSxlQUFlLEdBQThCO1FBQy9DLFNBQVMsRUFBRSxlQUFlLEdBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJO1FBQ3ZELFFBQVEsRUFBRSxjQUFjLEdBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJO1FBQ3JELEtBQUssRUFBRSxDQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFDLFdBQVc7UUFDaEQsV0FBVyxFQUFFLFlBQVk7UUFDekIsV0FBVyxFQUFFLGlCQUFpQjtRQUM5QixhQUFhLEVBQUUsbUJBQW1CO1FBQ2xDLGNBQWMsRUFBRSxvQkFBb0I7UUFDcEMsSUFBSSxFQUFFLFVBQVU7UUFDaEIsS0FBSyxFQUFFLFdBQVc7UUFDbEIsT0FBTyxFQUFFLFdBQVc7UUFDcEIsTUFBTSxFQUFFLFlBQVk7UUFDcEIsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixlQUFlLEVBQUUsbUJBQW1CO1FBQ3BDLFFBQVEsRUFBRSxPQUFPO0tBQ3BCLENBQUE7SUFFRCxNQUFNLGVBQWUsR0FBOEI7UUFDL0MsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixlQUFlLEVBQUUsa0JBQWtCO0tBQ3RDLENBQUE7SUFFRCxNQUFNLGFBQWEsR0FBOEI7UUFDN0MsU0FBUyxFQUFFLGVBQWUsR0FBRSxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFH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