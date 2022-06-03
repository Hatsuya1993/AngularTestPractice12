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
const pricingPage_1 = require("../pageObject/pricingPage");
const helper_1 = require("../helper/helper");
describe("Testing orderPage", () => {
    let pricingPage;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        pricingPage = new pricingPage_1.PricingPage();
        yield protractor_1.browser.get(pricingPage.website);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.restart();
    }));
    it("Correct link for docs php travels", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("phptravels.com/order");
    }));
    it("Check all the plans are populated correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        const plans = ["Plans and prices", "Startup", "Agency", "Business", "Enterprise"];
        const results = yield pricingPage.getAllPlans(pricingPage.plans, plans);
        expect(results).toBeTruthy();
    }));
    it("Pop up when travelport flights button is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1000");
        yield helper_1.Helper.clickItem(pricingPage.travelPortFlights);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        expect(pricingPage.travelPortFlightsPopUp.getAttribute("class")).toContain("showing");
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking startup buy this from popup will display checkout form", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1000");
        yield helper_1.Helper.clickItem(pricingPage.travelPortFlights);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        yield helper_1.Helper.clickItem(pricingPage.iWantThisButton);
        expect(yield pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking amadeus buy this from popup will display checkout form", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1000");
        yield helper_1.Helper.clickItem(pricingPage.amadeusFlights);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        yield helper_1.Helper.clickItem(pricingPage.buyThisButton);
        expect(yield pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking AerTicker buy this from popup will display checkout form", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1200");
        yield helper_1.Helper.clickItem(pricingPage.aerTicketFlights);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        yield helper_1.Helper.clickItem(pricingPage.buyThisButton);
        expect(yield pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking Kiwi buy this from popup will display checkout form", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1200");
        yield helper_1.Helper.clickItem(pricingPage.kiwiFlightsPopUp);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        yield helper_1.Helper.clickItem(pricingPage.iWantThisButton);
        expect(yield pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking TravelPayouts buy this from popup will display checkout form", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1200");
        yield helper_1.Helper.clickItem(pricingPage.travelPayOutsPopUp);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        yield helper_1.Helper.clickItem(pricingPage.buyThisButton);
        expect(yield pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking Viator buy this from popup will display checkout form", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1200");
        yield helper_1.Helper.clickItem(pricingPage.viatorPopUp);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        yield helper_1.Helper.clickItem(pricingPage.buyThisButton);
        expect(yield pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking Hotelbeds buy this from popup will display checkout form", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1200");
        yield helper_1.Helper.clickItem(pricingPage.hotelBedsPopUp);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        yield helper_1.Helper.clickItem(pricingPage.buyThisButton);
        expect(yield pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking Agoda buy this from popup will display checkout form", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1200");
        yield helper_1.Helper.clickItem(pricingPage.agodaPopUp);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        yield helper_1.Helper.clickItem(pricingPage.buyThisButton);
        expect(yield pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking Rezlive buy this from popup will display checkout form", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1200");
        yield helper_1.Helper.clickItem(pricingPage.rezlive);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        yield helper_1.Helper.clickItem(pricingPage.buyThisButton);
        expect(yield pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking Hotelston buy this from popup will display checkout form", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1200");
        yield helper_1.Helper.clickItem(pricingPage.hotelstonPopUp);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        yield helper_1.Helper.clickItem(pricingPage.buyThisButton);
        expect(yield pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking HubSpot CRM buy this from popup will display checkout form", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1200");
        yield helper_1.Helper.clickItem(pricingPage.CRMHubSpotPopUp);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        yield helper_1.Helper.clickItem(pricingPage.buyThisButton);
        expect(yield pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking custom gateways buy this from popup will display checkout form", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1800");
        yield helper_1.Helper.clickItem(pricingPage.customGateWayPopUp);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        yield helper_1.Helper.clickItem(pricingPage.buyThisButton);
        expect(yield pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking setmpos buy this from popup will display checkout form", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1800");
        yield helper_1.Helper.clickItem(pricingPage.setmposPopUp);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        yield helper_1.Helper.clickItem(pricingPage.buyThisButton);
        expect(yield pricingPage.checkoutPopUpForm.isDisplayed()).toBeTruthy();
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Pop up when amadeus flights button is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1000");
        yield helper_1.Helper.clickItem(pricingPage.amadeusFlights);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        expect(pricingPage.amadeusFlightsPopUp.getAttribute("class")).toContain("showing");
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Pop up when aerticket flights button is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1000");
        yield helper_1.Helper.clickItem(pricingPage.aerTicketFlights);
        yield helper_1.Helper.handleIframe(pricingPage.iframe);
        expect(pricingPage.amadeusFlightsPopUp.getAttribute("class")).toContain("showing");
        yield helper_1.Helper.handleExitIframe();
    }));
    it("Clicking the contact us button wil redirect the user to a new page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("2000");
        yield helper_1.Helper.clickItem(pricingPage.contactUs);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("contact-us");
    }));
    it("Bottom info should populate 4 rows of data", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield pricingPage.bottomInfo.count()).toBe(4);
    }));
    it("Frequently asked question is displayed and populated properly", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield pricingPage.frequentlyAsked.isDisplayed()).toBeTruthy();
        expect(yield pricingPage.frequentlyAsked.getText()).toBe("Frequently asked questions");
    }));
    it("Looking for customization is displayed and populated properly", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("2000");
        yield helper_1.Helper.displayed(pricingPage.lookingForCustomization);
        expect(yield pricingPage.lookingForCustomization.isDisplayed()).toBeTruthy();
        expect(yield pricingPage.lookingForCustomization.getText()).toBe("Looking for customization?");
    }));
    it("World's leading booking software title is displayed and populated correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("2000");
        yield helper_1.Helper.displayed(pricingPage.worldLeadingBooking);
        expect(yield pricingPage.worldLeadingBooking.isDisplayed()).toBeTruthy();
        expect(yield pricingPage.worldLeadingBooking.getText()).toBe("World's leading booking software");
    }));
    it("Paypal's button should be disabled", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("2000");
        expect(pricingPage.paypalButton.getAttribute("disabled")).toEqual("true");
    }));
    it("Stripe button should be disabled", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("2000");
        expect(pricingPage.stripeButton.getAttribute("disabled")).toEqual("true");
    }));
    it("Paddle button should be disabled", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("2000");
        expect(pricingPage.paddleButton.getAttribute("disabled")).toEqual("true");
    }));
    it("Bank button should be disabled", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("2000");
        expect(pricingPage.bankButton.getAttribute("disabled")).toEqual("true");
    }));
    it("Pay later button should be disabled", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("2000");
        expect(pricingPage.paylaterButton.getAttribute("disabled")).toEqual("true");
    }));
    it("Paypal clicked later will open a new page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1500");
        yield helper_1.Helper.moveClickItem(pricingPage.paypalButton);
        expect(yield (yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Stripe clicked later will open a new page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1500");
        yield helper_1.Helper.moveClickItem(pricingPage.stripeButton);
        expect(yield (yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Paddle clicked later will open a new page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1500");
        yield helper_1.Helper.moveClickItem(pricingPage.paddleButton);
        expect(yield (yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Bank wire clicked later will open a new page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1500");
        yield helper_1.Helper.moveClickItem(pricingPage.bankButton);
        expect(yield (yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Pay later clicked later will open a new page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1500");
        yield helper_1.Helper.moveClickItem(pricingPage.paylaterButton);
        expect(yield (yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Paypal click will move to home page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1500");
        yield helper_1.Helper.moveClickItem(pricingPage.paypalButton);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("phptravels");
    }));
    it("Stripe clicked later will move to home page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1500");
        yield helper_1.Helper.moveClickItem(pricingPage.stripeButton);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("phptravels");
    }));
    it("Paddle clicked later will move to home page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1500");
        yield helper_1.Helper.moveClickItem(pricingPage.paddleButton);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("phptravels");
    }));
    it("Bank wire clicked later will move to home page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1500");
        yield helper_1.Helper.moveClickItem(pricingPage.bankButton);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("phptravels");
    }));
    it("Pay later clicked later will move to home page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("1500");
        yield helper_1.Helper.moveClickItem(pricingPage.paylaterButton);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("phptravels");
    }));
    it("World's leading booking software is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield pricingPage.worldLeadingBookingContainer.isDisplayed()).toBeTruthy();
    }));
});
//# sourceMappingURL=pricingPage.js.map