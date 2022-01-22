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
describe('Testing loginPage', () => {
    let loginPage = new loginPage_1.LoginPage();
    const loginDetails = {
        email: 'testEmail@test.com',
        password: 'testpassword12345'
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
    it('Correct link for login', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('login');
    }));
    fit('Check the login title', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield loginPage.title.isDisplayed()).toBeTruthy();
    }));
    it('Display error when no details is given', () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.clickItem(loginPage.loginButton);
        expect(loginPage.alertInfo.isDisplayed()).toBeTruthy();
    }));
    it('Successful login', () => __awaiter(void 0, void 0, void 0, function* () {
        yield loginPage.fill({
            email: loginDetails.email,
            password: loginDetails.password
        });
        yield helper_1.Helper.handleIframe(loginPage.iframe);
        yield helper_1.Helper.clickItem(loginPage.recaptchaBox);
        yield helper_1.Helper.handleExitIframe();
        yield helper_1.Helper.clickItem(loginPage.loginButton);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('clientarea');
        // Need a way to handle puzzle
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvbG9naW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDZDQUE4QztBQUM5Qyw2Q0FBMEM7QUFDMUMsdURBQWtFO0FBRWxFLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFFL0IsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUE7SUFFL0IsTUFBTSxZQUFZLEdBQTJCO1FBQ3pDLEtBQUssRUFBRyxvQkFBb0I7UUFDNUIsUUFBUSxFQUFHLG1CQUFtQjtLQUNqQyxDQUFBO0lBRUQsVUFBVSxDQUFFLEdBQVMsRUFBRTtRQUNuQixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BDLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtJQUM3RCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsU0FBUyxDQUFFLEdBQVMsRUFBRTtRQUNsQixNQUFNLG9CQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDekIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxHQUFTLEVBQUU7UUFDcEMsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM1RCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLHVCQUF1QixFQUFFLEdBQVMsRUFBRTtRQUNwQyxNQUFNLENBQUMsTUFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDNUQsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSxHQUFTLEVBQUU7UUFDcEQsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM3QyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQzFELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsa0JBQWtCLEVBQUUsR0FBUyxFQUFFO1FBQzlCLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQztZQUNqQixLQUFLLEVBQUcsWUFBWSxDQUFDLEtBQUs7WUFDMUIsUUFBUSxFQUFHLFlBQVksQ0FBQyxRQUFRO1NBQ25DLENBQUMsQ0FBQTtRQUNGLE1BQU0sZUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDM0MsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM5QyxNQUFNLGVBQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQy9CLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDN0MsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM3RCw4QkFBOEI7SUFDbEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=