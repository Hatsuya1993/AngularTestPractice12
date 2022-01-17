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
    fit('Error when email address is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        yield registerPage.fill(noMatchPassword);
        expect(yield registerPage.noMatchPassword.isDisplayed()).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvcmVnaXN0ZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDZDQUE4QztBQUM5Qyw2Q0FBeUM7QUFDekMsNkRBQTJFO0FBRTNFLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLEVBQUU7SUFFbEMsSUFBSSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUE7SUFFckMsTUFBTSxlQUFlLEdBQThCO1FBQy9DLFNBQVMsRUFBRSxlQUFlLEdBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJO1FBQ3ZELFFBQVEsRUFBRSxjQUFjLEdBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJO1FBQ3JELEtBQUssRUFBRSxDQUFFLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFDLFdBQVc7UUFDaEQsV0FBVyxFQUFFLFlBQVk7UUFDekIsV0FBVyxFQUFFLGlCQUFpQjtRQUM5QixhQUFhLEVBQUUsbUJBQW1CO1FBQ2xDLGNBQWMsRUFBRSxvQkFBb0I7UUFDcEMsSUFBSSxFQUFFLFVBQVU7UUFDaEIsS0FBSyxFQUFFLFdBQVc7UUFDbEIsT0FBTyxFQUFFLFdBQVc7UUFDcEIsTUFBTSxFQUFFLFlBQVk7UUFDcEIsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixlQUFlLEVBQUUsbUJBQW1CO1FBQ3BDLFFBQVEsRUFBRSxPQUFPO0tBQ3BCLENBQUE7SUFFRCxNQUFNLGVBQWUsR0FBOEI7UUFDL0MsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixlQUFlLEVBQUUsa0JBQWtCO0tBQ3RDLENBQUE7SUFFRCxVQUFVLENBQUUsR0FBUyxFQUFFO1FBQ25CLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDdkMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQzdELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixTQUFTLENBQUUsR0FBUyxFQUFFO1FBQ2xCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEdBQVMsRUFBRTtRQUMvQyxNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQy9ELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsdUJBQXVCLEVBQUUsR0FBUyxFQUFFO1FBQ25DLE1BQU0sWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUN4QyxNQUFNLGVBQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ2pELE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDL0MsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMvQyxNQUFNLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQy9CLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDbkQsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUNqRSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLHFDQUFxQyxFQUFFLEdBQVMsRUFBRTtRQUNsRCxNQUFNLFlBQVksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDeEMsTUFBTSxDQUFDLE1BQU0sWUFBWSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3pFLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFTixDQUFDLENBQUMsQ0FBQSJ9