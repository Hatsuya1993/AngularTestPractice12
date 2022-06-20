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
const log4jsconfig_1 = require("../config/log4jsconfig");
describe("Flights Reservation Module", () => {
    let flightReservationModulePage;
    const log4jsconfig = new log4jsconfig_1.Log4jsconfig();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        flightReservationModulePage = new flightReservationModulePage_1.FlightReservationModulePage();
        log4jsconfig.log().debug("Opening website of " + flightReservationModulePage.getWebsite());
        yield protractor_1.browser.get(flightReservationModulePage.getWebsite());
        log4jsconfig.log().debug("Website opened " + flightReservationModulePage.getWebsite());
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.restart();
    }));
    /* Verify if the url is correctly displayed */
    it("Verify if the url is correctly displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify if the url is correctly displayed");
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("flights-module-features");
    }));
    /* Verify the header is displayed */
    it("Verify if the header is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify if the header is displayed");
        expect(yield flightReservationModulePage.getHeader().isDisplayed()).toBeTruthy();
    }));
    /* Verify the header title is displayed */
    it("Verify if the header title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify if the header title is displayed");
        expect(yield flightReservationModulePage.getHeaderTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify the header title is correctly populated */
    it("Verify the header title is correctly populated", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify the header title is correctly populated");
        expect(yield flightReservationModulePage.getHeaderTitle().getText()).toContain("Flights Reservation Module");
    }));
    /* Verify the header description is displayed */
    it("Verify the header description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify the header description is displayed");
        expect(yield flightReservationModulePage.getHeaderDescription().isDisplayed()).toBeTruthy();
    }));
    /* Verify the header description is correctly populated */
    it("Verify the header description is correctly populated", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify the header description is correctly populated");
        expect(yield flightReservationModulePage.getHeaderDescription().getText()).toContain("Airline Ticketing Software with Flight Booking engine in built");
    }));
    /* Verify a total of 3 options under header*/
    it("Verify there are a total of 3 options", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify there are a total of 3 options");
        expect(yield flightReservationModulePage.getOptions().count()).toEqual(3);
    }));
    /* Verify option 1 title is displayed */
    it("Verify options 1 title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify options 1 title is displayed");
        expect(yield flightReservationModulePage.getOptionsOneTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify option 1 title is correctly populated */
    it("Verify options 1 title is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify options 1 title is displayed correctly");
        expect(yield flightReservationModulePage.getOptionsOneTitle().getText()).toBe("Search filter and reserve flights tickets");
    }));
    /* Verify option 1 description is displayed */
    it("Verify options 1 description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify options 1 description is displayed");
        expect(yield flightReservationModulePage.getOptionsOneDescription().isDisplayed()).toBeTruthy();
    }));
    /* Verify option 1 description is correctly populated*/
    it("Verify options 1 description is correctly populated", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify options 1 description is correctly populated");
        expect(yield flightReservationModulePage.getOptionsOneDescription().getText()).toBe("Premium features included search by oneway return ticket or offer multi destination booking facility to your clients with with realtime and opensource code platform of phptravels");
    }));
    /* Verify option 2 title is displayed */
    it("Verify options 2 title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify options 2 title is displayed");
        expect(yield flightReservationModulePage.getOptionsTwoTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify option 2 title is correctly populated */
    it("Verify options 2 title is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify options 2 title is displayed correctly");
        expect(yield flightReservationModulePage.getOptionsTwoTitle().getText()).toBe("Flights booking module");
    }));
    /* Verify option 2 description is displayed */
    it("Verify options 2 description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify options 2 description is displayed");
        expect(yield flightReservationModulePage.getOptionsTwoDescription().isDisplayed()).toBeTruthy();
    }));
    /* Verify option 2 description is correctly populated*/
    it("Verify options 2 description is correctly populated", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify options 2 description is correctly populated");
        expect(yield flightReservationModulePage.getOptionsTwoDescription().getText()).toBe("Dedicated flights module with multiple features and functionalities such as adding flights managing routes airlines and working with multiple GDS APIs. it also supports multi-currency and multi-language with ability to auto update currency rates and support with major online payment gateways to accept payments for each booking made on your website.");
    }));
    /* Verify option 3 title is displayed */
    it("Verify options 3 title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify options 3 title is displayed");
        expect(yield flightReservationModulePage.getOptionsThreeTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify option 3 title is correctly populated */
    it("Verify options 3 title is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify options 3 title is displayed correctly");
        expect(yield flightReservationModulePage.getOptionsThreeTitle().getText()).toBe("Complete flights back-office system");
    }));
    /* Verify option 3 description is displayed */
    it("Verify options 3 description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify options 3 description is displayed");
        expect(yield flightReservationModulePage.getOptionsThreeDescription().isDisplayed()).toBeTruthy();
    }));
    /* Verify option 3 description is correctly populated*/
    it("Verify options 3 description is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify options 3 description is displayed correctly");
        expect(yield flightReservationModulePage.getOptionsThreeDescription().getText()).toBe("Sell flights tickets direct from your own GDS account simply by connecting with your credentials. no tech skills required to make it functionaly just deploy phptravels on your site and enable which modules and services you like to sell from.");
    }));
    /* Verify features is displayed */
    it("Verify features is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features is displayed");
        expect(yield flightReservationModulePage.getFeaturesContainer().isDisplayed()).toBeTruthy();
    }));
    // Verify features is correctly populated
    it("Verify features is correctly populated", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features is correctly populated");
        expect(yield flightReservationModulePage.getFeatures().getText()).toBe("Main Features");
    }));
    /* Verify features title is displayed */
    it("Verify features title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features title is displayed");
        expect(yield flightReservationModulePage.getFeatures().isDisplayed()).toBeTruthy();
    }));
    /* Verify features options is populated */
    it("Verify features options is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options is displayed");
        expect(yield flightReservationModulePage.getFeaturesOptions().isDisplayed()).toBeTruthy();
    }));
    /* Verify features options is displaying 3 options*/
    it("Verify features options is displayed 3 options", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options is displayed 3 options");
        expect(yield flightReservationModulePage.getFeaturesOptionsEach().count()).toBe(3);
    }));
    /* Verify features 1 title is displayed*/
    it("Verify features options one title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options one title is displayed");
        expect(yield flightReservationModulePage.getFeaturesOptionsOneTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify features 2 title is displayed*/
    it("Verify features options two title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options two title is displayed");
        expect(yield flightReservationModulePage.getFeaturesOptionsTwoTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify features 3 title is displayed*/
    it("Verify features options three title is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options three title is displayed");
        expect(yield flightReservationModulePage.getFeaturesOptionsThreeTitle().isDisplayed()).toBeTruthy();
    }));
    /* Verify features 1 title is correctly populated*/
    it("Verify features options one title is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options one title is displayed correctly");
        expect(yield flightReservationModulePage.getFeaturesOptionsOneTitle().getText()).toBe("Flight Listing");
    }));
    /* Verify features 2 title is correctly populated*/
    it("Verify features options two title is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options two title is displayed correctly");
        expect(yield flightReservationModulePage.getFeaturesOptionsTwoTitle().getText()).toBe("Last Minutes Deals");
    }));
    /* Verify features 3 title is correctly populated*/
    it("Verify features options three title is displayed correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options three title is displayed correctly");
        expect(yield flightReservationModulePage.getFeaturesOptionsThreeTitle().getText()).toBe("Popular Flights");
    }));
    /* Verify features 1 description is displayed*/
    it("Verify features options one description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options one description is displayed");
        expect(yield flightReservationModulePage.getFeaturesOptionsOneDescrition().isDisplayed()).toBeTruthy();
    }));
    /* Verify features 2 description is displayed*/
    it("Verify features options two description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options two description is displayed");
        expect(yield (yield flightReservationModulePage.getFeaturesOptionsTwoDescription().getText()).length).toBeTruthy();
    }));
    /* Verify features 3 description is displayed*/
    it("Verify features options three description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options three description is displayed");
        expect(yield (yield flightReservationModulePage.getFeaturesOptionsThreeDescription().getText()).length).toBeTruthy();
    }));
    /* Verify features 1 description is correctly populated*/
    it("Verify features options one description is correctly displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options one description is correctly displayed");
        expect(yield (yield flightReservationModulePage.getFeaturesOptionsOneDescrition().getText()).length).toBeGreaterThan(0);
    }));
    /* Verify features 2 description is correctly populated*/
    it("Verify features options two description is correctly displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options two description is correctly displayed");
        expect(yield (yield flightReservationModulePage.getFeaturesOptionsTwoDescription().getText()).length).toBeGreaterThan(0);
    }));
    /* Verify features 3 description is correctly populated*/
    it("Verify features options three description is correctly displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify features options three description is correctly displayed");
        expect(yield (yield flightReservationModulePage.getFeaturesOptionsThreeDescription().getText()).length).toBeGreaterThan(0);
    }));
    /* Verify booking system is displayed */
    it("Verify booking system is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify booking system is displayed");
        expect(yield flightReservationModulePage.getCompleteFlightBookingSystem().isDisplayed()).toBeTruthy();
    }));
    /* Verify booking system is populated correctly */
    it("Verify booking system is populated correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify booking system is populated correctly");
        expect(yield flightReservationModulePage.getCompleteFlightBookingSystem().getText()).toBe("Complete flight booking system");
    }));
    /* Verify booking system description is displayed */
    fit("Verify booking system description is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Verify booking system description is displayed");
        expect(yield flightReservationModulePage.getCompleteFlightBookingSystemDescription().isDisplayed()).toBeTruthy();
    }));
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
//# sourceMappingURL=flightReservationModulePage.js.map