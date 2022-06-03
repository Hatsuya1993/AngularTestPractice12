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
//# sourceMappingURL=orderPage.js.map