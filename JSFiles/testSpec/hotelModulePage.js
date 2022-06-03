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
describe("Hotel Module Page", () => {
    let hotelModulePage;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        hotelModulePage = new hotelModulePage_1.HotelModulePage();
        yield protractor_1.browser.get(hotelModulePage.getWebsite());
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.restart();
    }));
    it("Correct link for hotels module features", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("hotels-module-features");
    }));
    it("Header should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getHeader().isDisplayed()).toBeTruthy();
    }));
    it("Hotels booking module should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getHotelsModule().first().isDisplayed()).toBeTruthy();
    }));
    it("Full calendar should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getFullCalendar().first().isDisplayed()).toBeTruthy();
    }));
    it("Main features should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getMainFeatures().isDisplayed()).toBeTruthy();
    }));
    it("Hotels module should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getGoogleMaps().last().isDisplayed()).toBeTruthy();
    }));
    it("Banner should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getBanner().isDisplayed()).toBeTruthy();
    }));
    it("Banner title should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getBannerTitle().isDisplayed()).toBeTruthy();
    }));
    it("Banner title should be populated correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getBannerTitle().getText()).toContain("Complete Hotel Management ");
    }));
    it("Banner description should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getBannerDescription().isDisplayed()).toBeTruthy();
    }));
    it("View pricing button should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getViewPricing().isDisplayed()).toBeTruthy();
    }));
    it("Pricing page should move to the order page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.clickItem(hotelModulePage.getViewPricing());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("order");
    }));
    it("View overview demo button should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getOverviewButton().isDisplayed()).toBeTruthy();
    }));
    it("Clicking the demo button will move to the demo page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.clickItem(hotelModulePage.getOverviewButton());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("demo");
    }));
});
//# sourceMappingURL=hotelModulePage.js.map