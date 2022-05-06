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
const flightReservationModulePage_1 = require("../pageObject/flightReservationModulePage");
describe("Flights Reservation Module", () => {
    const flightReservationModulePage = new flightReservationModulePage_1.FlightReservationModulePage();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(flightReservationModulePage.getWebsite());
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    /* Verify if the url is correctly displayed */
    it("Verify if the url is correctly displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("flights-module-features");
    }));
    /* Verify the header is displayed */
    it("Verify if the header is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getHeader().isDisplayed()).toBeTruthy();
    }));
    /* Verify the header title is displayed */
    it("Verify if the header title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getHeaderTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify the header title is correctly populated */
    it("Verify the header title is correctly populated", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getHeaderTitle().getText()).toContain("Flights Reservation Module");
    }));
    /* Verify the header description is displayed */
    it("Verify the header description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getHeaderDescription().isDisplayed()).toBeTruthy();
    }));
    /* Verify the header description is correctly populated */
    it("Verify the header description is correctly populated", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getHeaderDescription().getText()).toContain("Airline Ticketing Software with Flight Booking engine in built");
    }));
    /* Verify a total of 3 options under header*/
    it("Verify there are a total of 3 options", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getOptions().count()).toEqual(3);
    }));
    /* Verify option 1 title is displayed */
    it("Verify options 1 title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getOptionsOneTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify option 1 title is correctly populated */
    it("Verify options 1 title is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getOptionsOneTitle().getText()).toBe("Search filter and reserve flights tickets");
    }));
    /* Verify option 1 description is displayed */
    it("Verify options 1 description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getOptionsOneDescription().isDisplayed()).toBeTruthy();
    }));
    /* Verify option 1 description is correctly populated*/
    it("Verify options 1 description is correctly populated", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getOptionsOneDescription().getText()).toBe("Premium features included search by oneway return ticket or offer multi destination booking facility to your clients with with realtime and opensource code platform of phptravels");
    }));
    /* Verify option 2 title is displayed */
    it("Verify options 2 title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getOptionsTwoTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify option 2 title is correctly populated */
    it("Verify options 2 title is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getOptionsTwoTitle().getText()).toBe("Flights booking module");
    }));
    /* Verify option 2 description is displayed */
    it("Verify options 2 description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getOptionsTwoDescription().isDisplayed()).toBeTruthy();
    }));
    /* Verify option 2 description is correctly populated*/
    it("Verify options 2 description is correctly populated", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getOptionsTwoDescription().getText()).toBe("Dedicated flights module with multiple features and functionalities such as adding flights managing routes airlines and working with multiple GDS APIs. it also supports multi-currency and multi-language with ability to auto update currency rates and support with major online payment gateways to accept payments for each booking made on your website.");
    }));
    /* Verify option 3 title is displayed */
    it("Verify options 3 title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getOptionsThreeTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify option 3 title is correctly populated */
    it("Verify options 3 title is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getOptionsThreeTitle().getText()).toBe("Complete flights back-office system");
    }));
    /* Verify option 3 description is displayed */
    it("Verify options 3 description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getOptionsThreeDescription().isDisplayed()).toBeTruthy();
    }));
    /* Verify option 3 description is correctly populated*/
    it("Verify options 3 description is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getOptionsThreeDescription().getText()).toBe("Sell flights tickets direct from your own GDS account simply by connecting with your credentials. no tech skills required to make it functionaly just deploy phptravels on your site and enable which modules and services you like to sell from.");
    }));
    /* Verify features is displayed */
    it("Verify features is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getFeaturesContainer().isDisplayed()).toBeTruthy();
    }));
    // Verify features is correctly populated
    it("Verify features is correctly populated", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getFeatures().getText()).toBe("Main Features");
    }));
    /* Verify features title is displayed */
    it("Verify features title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getFeatures().isDisplayed()).toBeTruthy();
    }));
    /* Verify features options is populated */
    it("Verify features options is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getFeaturesOptions().isDisplayed()).toBeTruthy();
    }));
    /* Verify features options is displaying 3 options*/
    it("Verify features options is displayed 3 options", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getFeaturesOptionsEach().count()).toBe(3);
    }));
    /* Verify features 1 title is displayed*/
    it("Verify features options one title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getFeaturesOptionsOneTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify features 2 title is displayed*/
    fit("Verify features options two title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getFeaturesOptionsTwoTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify features 3 title is displayed*/
    /* Verify features 1 title is correctly populated*/
    /* Verify features 2 title is correctly populated*/
    /* Verify features 3 title is correctly populated*/
    /* Verify features 1 description is displayed*/
    /* Verify features 2 description is displayed*/
    /* Verify features 3 description is displayed*/
    /* Verify features 1 description is correctly populated*/
    /* Verify features 2 description is correctly populated*/
    /* Verify features 3 description is correctly populated*/
    /* Verify booking system is displayed */
    /* Verify booking system is populated correctly */
    /* Verify booking system description is displayed */
    /* Verify the demo button is displayed */
    /* Verify the demo button will move to the demo page */
    /* Verify the real time bookings from gds is displayed */
    /* Verify the real time bookings from gds is populated correctly */
    /* Verify the real time bookings from gds description is displayed */
    /* Verify the real time bookings from gds description is populated correctky */
    /* Verify the banner is displayed */
    /* Verify the banner title is displayed */
    /* Verify the banner title is populated correctly */
    /* Verify the banner description is displayed */
    /* Verify the pricing button is displayed */
    /* Verify the pricing button will move to the order page */
    /* Verify the regions are displayed */
    /* Verify the footer is displayed */
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpZ2h0UmVzZXJ2YXRpb25Nb2R1bGVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvZmxpZ2h0UmVzZXJ2YXRpb25Nb2R1bGVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDZDQUE0QztBQUM1QywyRkFBc0Y7QUFFdEYsUUFBUSxDQUFDLDRCQUE0QixFQUFFLEdBQUcsRUFBRTtJQUMxQyxNQUFNLDJCQUEyQixHQUFHLElBQUkseURBQTJCLEVBQUUsQ0FBQztJQUN0RSxVQUFVLENBQUMsR0FBUyxFQUFFO1FBQ3BCLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsOENBQThDO0lBQzlDLEVBQUUsQ0FBQywwQ0FBMEMsRUFBRSxHQUFTLEVBQUU7UUFDeEQsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxvQ0FBb0M7SUFDcEMsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLEdBQVMsRUFBRTtRQUNqRCxNQUFNLENBQUMsTUFBTSwyQkFBMkIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25GLENBQUMsQ0FBQSxDQUFDLENB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