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
const hotelModulePage_1 = require("../pageObject/hotelModulePage");
const log4jsconfig_1 = require("../config/log4jsconfig");
describe("Hotel Module Page", () => {
    let hotelModulePage;
    const log4jsconfig = new log4jsconfig_1.Log4jsconfig();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        hotelModulePage = new hotelModulePage_1.HotelModulePage();
        log4jsconfig.log().debug("Opening website of " + hotelModulePage.getWebsite());
        yield protractor_1.browser.get(hotelModulePage.getWebsite());
        log4jsconfig.log().debug("Website opened " + hotelModulePage.getWebsite());
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.restart();
    }));
    it("Correct link for hotels module features", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Correct link for hotels module features");
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("hotels-module-features");
    }));
    it("Header should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Header should be displayed");
        expect(yield hotelModulePage.getHeader().isDisplayed()).toBeTruthy();
    }));
    it("Hotels booking module should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Hotels booking module should be displayed");
        expect(yield hotelModulePage.getHotelsModule().first().isDisplayed()).toBeTruthy();
    }));
    it("Full calendar should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Full calendar should be displayed");
        expect(yield hotelModulePage.getFullCalendar().first().isDisplayed()).toBeTruthy();
    }));
    it("Main features should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Main features should be displayed");
        expect(yield hotelModulePage.getMainFeatures().isDisplayed()).toBeTruthy();
    }));
    it("Hotels module should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Hotels module should be displayed");
        expect(yield hotelModulePage.getGoogleMaps().last().isDisplayed()).toBeTruthy();
    }));
    it("Banner should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Banner should be displayed");
        expect(yield hotelModulePage.getBanner().isDisplayed()).toBeTruthy();
    }));
    it("Banner title should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Banner title should be displayed");
        expect(yield hotelModulePage.getBannerTitle().isDisplayed()).toBeTruthy();
    }));
    it("Banner title should be populated correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Banner title should be populated correctly");
        expect(yield hotelModulePage.getBannerTitle().getText()).toContain("Complete Hotel Management ");
    }));
    it("Banner description should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Banner description should be displayed");
        expect(yield hotelModulePage.getBannerDescription().isDisplayed()).toBeTruthy();
    }));
    it("View pricing button should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("View pricing button should be displayed");
        expect(yield hotelModulePage.getViewPricing().isDisplayed()).toBeTruthy();
    }));
    it("Pricing page should move to the order page", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Pricing page should move to the order page");
        yield helper_1.Helper.clickItem(hotelModulePage.getViewPricing());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("order");
    }));
    it("View overview demo button should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("View overview demo button should be displayed");
        expect(yield hotelModulePage.getOverviewButton().isDisplayed()).toBeTruthy();
    }));
    it("Clicking the demo button will move to the demo page", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Clicking the demo button will move to the demo page");
        yield helper_1.Helper.clickItem(hotelModulePage.getOverviewButton());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("demo");
    }));
});
//# sourceMappingURL=hotelModulePage.js.map