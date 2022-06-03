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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2luZ1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0U3BlYy9wcmljaW5nUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUNuQyw2Q0FBNEM7QUFDNUMsMkRBQXNEO0FBQ3RELDZDQUF3QztBQUV4QyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQ2pDLElBQUksV0FBVyxDQUFDO0lBRWhCLFVBQVUsQ0FBRSxHQUFTLEVBQUU7UUFDckIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDaEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUUsR0FBUyxFQUFFO1FBQ3BCLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEdBQVMsRUFBRTtRQUNqRCxNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRSxHQUFTLEVBQUU7UUFDM0QsTUFBTSxLQUFLLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFF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