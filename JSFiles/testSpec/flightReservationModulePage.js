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
    let flightReservationModulePage;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        flightReservationModulePage = new flightReservationModulePage_1.FlightReservationModulePage();
        yield protractor_1.browser.get(flightReservationModulePage.getWebsite());
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
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
    it("Verify features options two title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getFeaturesOptionsTwoTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify features 3 title is displayed*/
    it("Verify features options three title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getFeaturesOptionsThreeTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify features 1 title is correctly populated*/
    it("Verify features options one title is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getFeaturesOptionsOneTitle().getText()).toBe("Flight Listing");
    }));
    /* Verify features 2 title is correctly populated*/
    it("Verify features options two title is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getFeaturesOptionsTwoTitle().getText()).toBe("Last Minutes Deals");
    }));
    /* Verify features 3 title is correctly populated*/
    it("Verify features options three title is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield flightReservationModulePage.getFeaturesOptionsThreeTitle().getText()).toBe("Popular Flights");
    }));
    /* Verify features 1 description is displayed*/
    it("Verify features options one description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield (yield flightReservationModulePage.getFeaturesOptionsOneDescrition().getText()).length).toBeGreaterThan(0);
    }));
    /* Verify features 2 description is displayed*/
    it("Verify features options two description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield (yield flightReservationModulePage.getFeaturesOptionsTwoDescription().getText()).length).toBeGreaterThan(0);
    }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpZ2h0UmVzZXJ2YXRpb25Nb2R1bGVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvZmxpZ2h0UmVzZXJ2YXRpb25Nb2R1bGVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDZDQUE0QztBQUM1QywyRkFBc0Y7QUFFdEYsUUFBUSxDQUFDLDRCQUE0QixFQUFFLEdBQUcsRUFBRTtJQUMxQyxJQUFJLDJCQUEyQixDQUFDO0lBQ2hDLFVBQVUsQ0FBQyxHQUFTLEVBQUU7UUFDcEIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQywyQkFBMkIsR0FBRyxJQUFJLHlEQUEyQixFQUFFLENBQUM7UUFDaEUsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzVELE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLEdBQVMsRUFBRTtRQUNuQixNQUFNLG9CQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILDhDQUE4QztJQUM5QyxFQUFFLENBQUMsMENBQTBDLEVBQUUsR0FBUyxFQUFFO1FBQ3hELE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3RSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsb0NBQW9DO0lBQ3BDLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxHQUFTLEVBQUU7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