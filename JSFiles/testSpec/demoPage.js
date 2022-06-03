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
const loginPage_1 = require("../pageObject/loginPage");
const log4jsconfig_1 = require("../config/log4jsconfig");
describe("Testing demoPage", () => {
    let demoPage;
    const log4jsconfig = new log4jsconfig_1.Log4jsconfig();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        demoPage = new demoPage_1.DemoPage();
        log4jsconfig.log().debug("Opening website of " + demoPage.getWebsite());
        yield protractor_1.browser.get(demoPage.getWebsite());
        log4jsconfig.log().debug("Website opened " + demoPage.getWebsite());
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.restart();
    }));
    it("Check if the home url is correct", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("demo");
    }));
    it("Check if the title is correct", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check if the title is correct");
        expect(yield helper_1.Helper.checkString(demoPage.getTitle(), "PHPTRAVELS")).toBeTruthy();
    }));
    it("Check if the subtitle is correct", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check if the subtitle is correct");
        expect(yield helper_1.Helper.checkString(demoPage.getSubtitle(), "TRAVEL TECHNOLOGY PARTNER")).toBeTruthy();
    }));
    it("Check if the main title is correct", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check if the main title is correct");
        expect(yield helper_1.Helper.checkString(demoPage.getMainTitle(), "Demo Credentials for Frontend and Backend")).toBeTruthy();
    }));
    it("Check if the nav options at the top are available", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check if the nav options at the top are available");
        expect(yield helper_1.Helper.displayed(demoPage.getNavOption())).toBeTruthy();
    }));
    it("Check if the home url is correct if demo is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check if the home url is correct if demo is clicked");
        yield helper_1.Helper.clickItem(demoPage.getDemoOption());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("demo");
    }));
    it("Check if the pricing url is currect if pricing if clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check if the pricing url is currect if pricing if clicked");
        yield helper_1.Helper.clickItem(demoPage.getPricingOption());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("order");
    }));
    it("Check if the integrations url is correct if clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check if the integrations url is correct if clicked");
        yield helper_1.Helper.clickItem(demoPage.getIntegrationOption());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("integrations");
    }));
    it("Check another tab is opened when Docs is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check another tab is opened when Docs is clicked");
        yield helper_1.Helper.clickItem(demoPage.getDocsOption());
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Check when Docs tab is clicked, the new tab hold the correct url", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check when Docs tab is clicked, the new tab hold the correct url");
        yield helper_1.Helper.clickItem(demoPage.getDocsOption());
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("docs");
    }));
    it("Check another tab is opened when Blog is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check another tab is opened when Blog is clicked");
        yield helper_1.Helper.clickItem(demoPage.getBlogOption());
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Check when Blog tab is clicked, the new tab hold the correct url", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check when Blog tab is clicked, the new tab hold the correct url");
        yield helper_1.Helper.clickItem(demoPage.getBlogOption());
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("blog");
    }));
    it("Check when login button is clicked another tab is opened", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check when login button is clicked another tab is opened");
        yield helper_1.Helper.clickItem(demoPage.getLoginOption());
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Check when the login button is clicked, the url is correct", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check when the login button is clicked, the url is correct");
        yield helper_1.Helper.clickItem(demoPage.getLoginOption());
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("login");
    }));
    it("Check when the facebook icon is clicked, 2 tabs are opened", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check when the facebook icon is clicked, 2 tabs are opened");
        yield helper_1.Helper.clickItem(demoPage.getFacebookIcon());
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Check the url when the facebook icon is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the facebook icon is clicked");
        yield helper_1.Helper.clickItem(demoPage.getFacebookIcon());
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("facebook");
    }));
    it("Check the url when the youtube icon is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the youtube icon is clicked");
        yield helper_1.Helper.clickItem(demoPage.getYoutubeIcon());
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Check the url when youtube is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when youtube is clicked");
        yield helper_1.Helper.clickItem(demoPage.getYoutubeIcon());
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("phptravelsofficial");
    }));
    it("Check the url when twitter is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when twitter is clicked");
        yield helper_1.Helper.clickItem(demoPage.getTwitterIcon());
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("twitter");
    }));
    it("Check the number of tabs when linkedin button is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the number of tabs when linkedin button is clicked");
        yield helper_1.Helper.clickItem(demoPage.getLinkedIn());
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Check the url when the linkedin is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the linkedin is clicked");
        yield helper_1.Helper.clickItem(demoPage.getLinkedIn());
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("linkedin");
    }));
    it("Check the number of tabs opened when instagram icon is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the number of tabs opened when instagram icon is clicked");
        yield helper_1.Helper.clickItem(demoPage.getInstagramIcon());
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Check when instagram url when it is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check when instagram url when it is clicked");
        yield helper_1.Helper.clickItem(demoPage.getInstagramIcon());
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("instagram");
    }));
    it("Check the url when the desktop app is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the desktop app is clicked");
        yield helper_1.Helper.clickItem(demoPage.getDeskTopLink());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("desktop-application");
    }));
    it("Check the url when the mobile app is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the mobile app is clicked");
        yield helper_1.Helper.clickItem(demoPage.getMobileAppLink());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("mobile-applications");
    }));
    it("Check the url when the features is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the features is clicked");
        yield helper_1.Helper.clickItem(demoPage.getFeaturesLink());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("features");
    }));
    it("Check the url when the requirements is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the requirements is clicked");
        yield helper_1.Helper.clickItem(demoPage.getRequirementsLink());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("requirements");
    }));
    it("Check the url when the technology is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the technology is clicked");
        yield helper_1.Helper.clickItem(demoPage.getTechnologyLink());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("technology");
    }));
    it("Check the url when the Changelog is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the Changelog is clicked");
        yield helper_1.Helper.clickItem(demoPage.getChangeLogLink());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("change-log");
    }));
    it("Check the url when the updates is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the updates is clicked");
        yield helper_1.Helper.clickItem(demoPage.getUpdatesLink());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("updates");
    }));
    it("Check the url when the providers is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the providers is clicked");
        yield helper_1.Helper.clickItem(demoPage.getProvidersLink());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("providers");
    }));
    it("Check the url when the affiliate is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the affiliate is clicked");
        yield helper_1.Helper.clickItem(demoPage.getAffiliateLink());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("affiliate");
    }));
    it("Check the url when the roadmap is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the roadmap is clicked");
        yield helper_1.Helper.clickItem(demoPage.getRoadMapLink());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("roadmap");
    }));
    it("Check the url when the product services is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the product services is clicked");
        yield helper_1.Helper.clickItem(demoPage.getProductServicesLink());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("services");
    }));
    it("Check the url when the customization is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the customization is clicke");
        yield helper_1.Helper.clickItem(demoPage.getCustomizationLink());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("customizations");
    }));
    it("Check the url when the hotels integration is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the hotels integration is clicked");
        yield helper_1.Helper.clickItem(demoPage.getHotelIntegration());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("expedia-api-integration");
    }));
    it("Check the url when the shared cloud hosting is clicked", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url when the shared cloud hosting is clicked");
        yield helper_1.Helper.clickItem(demoPage.getSharedCloudHosting());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("shared-hosting");
    }));
    it("Check the url for the register page", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Check the url for the register page");
        yield helper_1.Helper.clickItem(demoPage.getLoginOption());
        yield helper_1.Helper.handleTabs(1);
        const loginPage = new loginPage_1.LoginPage();
        yield helper_1.Helper.clickItem(loginPage.createNewAccount);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("register");
    }));
});
//# sourceMappingURL=demoPage.js.map