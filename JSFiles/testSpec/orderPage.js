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
const demoPage_1 = require("../pageObject/demoPage");
const helper_1 = require("../helper/helper");
const orderPage_1 = require("../pageObject/orderPage");
const confirmOrderPage_1 = require("../pageObject/confirmOrderPage");
describe("Testing orderPage", () => {
    let demoPage;
    let orderPage;
    let confirmOrderPage;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        demoPage = new demoPage_1.DemoPage();
        orderPage = new orderPage_1.OrderPage();
        confirmOrderPage = new confirmOrderPage_1.ConfirmOrderPage();
        yield protractor_1.browser.get(demoPage.website);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.restart();
    }));
    it("Should disable the buy now button by default", () => __awaiter(void 0, void 0, void 0, function* () {
        const demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.pricingOption);
        expect(yield orderPage.buyNowButton.isEnabled()).toBe(false);
    }));
    it("Should able the buy now button after selecting an option", () => __awaiter(void 0, void 0, void 0, function* () {
        const demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.pricingOption);
        yield helper_1.Helper.waitForPage("order");
        yield orderPage.getCheckBox("1");
        expect(yield orderPage.buyNowButton.isEnabled()).toBe(true);
    }));
    it("Should check the url when the buy now button is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.clickItem(demoPage.pricingOption);
        yield helper_1.Helper.waitForPage("order");
        yield orderPage.getCheckBox("1");
        yield helper_1.Helper.scrollPage("500");
        yield helper_1.Helper.clickItem(orderPage.buyNowButton);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("order-confirm");
    }));
    it("Should input the given values", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.clickItem(demoPage.pricingOption);
        yield helper_1.Helper.waitForPage("order");
        yield orderPage.getCheckBox("1");
        yield helper_1.Helper.scrollPage("500");
        yield helper_1.Helper.clickItem(orderPage.buyNowButton);
        yield confirmOrderPage.fillInConfirmOrder({
            firstName: "testName",
            lastName: "testLastName",
            businessName: "testBusiness",
            emailAddress: "testEmail",
            mobile: "123456",
        });
        expect(yield confirmOrderPage.firstNameInput.getAttribute("value")).not.toBe("");
        expect(yield confirmOrderPage.lastNameInput.getAttribute("value")).not.toBe("");
        expect(yield confirmOrderPage.businessNameInput.getAttribute("value")).not.toBe("");
        expect(yield confirmOrderPage.emailAddressInput.getAttribute("value")).not.toBe("");
        expect(yield confirmOrderPage.mobileInput.getAttribute("value")).not.toBe("");
    }));
    it("Should check the default data is shown", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.clickItem(demoPage.pricingOption);
        expect(yield orderPage.orderPageData.isDisplayed()).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvb3JkZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDZDQUE0QztBQUM1QyxxREFBZ0Q7QUFDaEQsNkNBQXdDO0FBQ3hDLHVEQUFrRDtBQUNsRCxxRUFBZ0U7QUFHaEUsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtJQUNqQyxJQUFJLFFBQVEsQ0FBQztJQUNiLElBQUksU0FBUyxDQUFDO0lBQ2QsSUFBSSxnQkFBZ0IsQ0FBQztJQUNyQixVQUFVLENBQUUsR0FBUyxFQUFFO1FBQ3JCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1FBQzFCLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztRQUM1QixnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7UUFDMUMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUUsR0FBUyxFQUFFO1FBQ3BCLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhDQUE4QyxFQUFFLEdBQVMsRUFBRTtRQUM1RCxNQUFNLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUNoQyxNQUFNLGVBQU0s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