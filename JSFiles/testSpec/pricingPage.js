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
    const pricingPage = new pricingPage_1.PricingPage();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(pricingPage.website);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
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
    fit("Paypal's button should be disabled", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.scrollPage("2000");
        expect(pricingPage.paypalButton.getAttribute("disabled")).toEqual("true");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2luZ1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0U3BlYy9wcmljaW5nUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUNuQyw2Q0FBNEM7QUFDNUMsMkRBQXNEO0FBQ3RELDZDQUF3QztBQUV4QyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQ2pDLE1BQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0lBRXRDLFVBQVUsQ0FBRSxHQUFTLEVBQUU7UUFDckIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBRSxHQUFTLEVBQUU7UUFDcEIsTUFBTSxvQkFBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUNBQW1DLEVBQUUsR0FBUyxFQUFFO1FBQ2pELE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUMxRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZDQUE2QyxFQUFFLEdBQVMsRUFBRTtRQUMzRCxNQUFNLEtBQUssR0FBRyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFlBQVks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