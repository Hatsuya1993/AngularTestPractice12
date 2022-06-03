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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtb1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0U3BlYy9kZW1vUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUNuQyw2Q0FBNEM7QUFDNUMscURBQWdEO0FBQ2hELDZDQUF3QztBQUN4Qyx1REFBa0Q7QUFDbEQseURBQW9EO0FBRXBELFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDaEMsSUFBSSxRQUFtQixDQUFDO0lBQ3hCLE1BQU0sWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0lBQ3hDLFVBQVUsQ0FBQyxHQUFTLEVBQUU7UUFDcEIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDMUIsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsR0FBRSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUN2RSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEdBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDbkUsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUUsR0FBUyxFQUFFO1FBQ3BCLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lB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