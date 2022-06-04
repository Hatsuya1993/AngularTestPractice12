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
const log4jsconfig_1 = require("../config/log4jsconfig");
const integrationPage_1 = require("../pageObject/integrationPage");
describe("Testing orderPage", () => {
    let integrationPage;
    const log4jsconfig = new log4jsconfig_1.Log4jsconfig();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        integrationPage = new integrationPage_1.IntegrationPage();
        log4jsconfig.log().debug("Opening website of " + integrationPage.getWebsite());
        yield protractor_1.browser.get(integrationPage.getWebsite());
        log4jsconfig.log().debug("Website opened " + integrationPage.getWebsite());
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.restart();
    }));
    it("Should check the default content is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Should check the default content is displayed");
        expect(yield integrationPage.getPageContent().isDisplayed()).toBeTruthy();
    }));
    it("Should open another tab to the correct website for travelport", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Should open another tab to the correct website for travelport");
        yield helper_1.Helper.scrollAndCheck(integrationPage.getTravelPort());
        yield helper_1.Helper.clickItem(integrationPage.getTravelPort());
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for travelport", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Should open to the correct website for travelport");
        yield helper_1.Helper.scrollAndCheck(integrationPage.getTravelPort());
        yield helper_1.Helper.clickItem(integrationPage.getTravelPort());
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("travelport");
    }));
    it("Should open another tab to the correct website for Amadeus", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Should open another tab to the correct website for Amadeus");
        yield helper_1.Helper.scrollAndCheck(integrationPage.getAmadeus());
        yield helper_1.Helper.clickItem(integrationPage.getAmadeus());
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for Amadeus", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Should open to the correct website for Amadeus");
        yield helper_1.Helper.scrollAndCheck(integrationPage.getAmadeus());
        yield helper_1.Helper.clickItem(integrationPage.getAmadeus());
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("nevel");
    }));
});
//# sourceMappingURL=integrationPage.js.map