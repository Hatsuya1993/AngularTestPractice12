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
describe('Testing demoPage', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let demoPage = new demoPage_1.DemoPage();
        yield protractor_1.browser.get(demoPage.website);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
    }));
    it('Check if the home url is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("demo");
    }));
    it('Check if the title is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        if (yield helper_1.Helper.displayed(demoPage.title))
            expect(yield demoPage.title.getText()).toBe("PHPTRAVELS");
    }));
    it('Check if the subtitle is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        if (yield helper_1.Helper.displayed(demoPage.subTitle))
            expect(yield demoPage.subTitle.getText()).toBe("TRAVEL TECHNOLOGY PARTNER");
    }));
    it('Check if the main title is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        if (yield helper_1.Helper.displayed(demoPage.mainTitle))
            expect(yield demoPage.mainTitle.getText()).toBe("Demo Credentials for Frontend and Backend");
    }));
    it('Check if the nav options at the top are available', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        expect(yield helper_1.Helper.displayed(demoPage.navOption)).toBeTruthy();
    }));
    it('Check if the home url is correct if demo is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.demoOption);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("demo");
    }));
    it('Check if the pricing url is currect if pricing if clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.pricingOption);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("order");
    }));
    it('Check if the integrations url is correct if clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.integrationOption);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("integrations");
    }));
    it('Check another tab is opened when Docs is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.docsOption);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Check when Docs tab is clicked, the new tab hold the correct url', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.docsOption);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("docs");
    }));
    it('Check another tab is opened when Blog is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.blogOption);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Check when Blog tab is clicked, the new tab hold the correct url', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.blogOption);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("blog");
    }));
    it('Check when login button is clicked another tab is opened', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.loginOption);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Check when the login button is clicked, the url is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.loginOption);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("login");
    }));
    it('Check when the facebook icon is clicked, 2 tabs are opened', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.facebookIcon);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Check the url when the facebook icon is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.facebookIcon);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("facebook");
    }));
    it('Check the url when the youtube icon is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.youtubeIcon);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Check the url when youtube is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demo = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demo.youtubeIcon);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('phptravelsofficial');
    }));
    it('Check the url when twitter is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demo = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demo.twitterIcon);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('twitter');
    }));
    it('Check the number of tabs when linkedin button is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.linkedIn);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Check the url when the linkedin is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.linkedIn);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('linkedin');
    }));
    it('Check the number of tabs opened when instagram icon is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.instagramIcon);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Check when instagram url when it is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.instagramIcon);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('instagram');
    }));
    it('Check the url when the desktop app is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.deskTopLink);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('desktop-application');
    }));
    it('Check the url when the mobile app is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.mobileAppLink);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('mobile-applications');
    }));
    it('Check the url when the features is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.featuresLink);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('features');
    }));
    it('Check the url when the requirements is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.requirementsLink);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('requirements');
    }));
    it('Check the url when the technology is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.technologyLink);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('technology');
    }));
    it('Check the url when the Changelog is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.changeLogLink);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('change-log');
    }));
    it('Check the url when the updates is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.updatesLink);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('updates');
    }));
    it('Check the url when the providers is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.providersLink);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('providers');
    }));
    it('Check the url when the affiliate is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.affiliateLink);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('affiliate');
    }));
    it('Check the url when the roadmap is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.roadMapLink);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('roadmap');
    }));
    it('Check the url when the product services is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.productServicesLink);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('services');
    }));
    it('Check the url when the customization is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.customizationLink);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('customizations');
    }));
    it('Check the url when the hotels integration is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.hotelIntegration);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('expedia-api-integration');
    }));
    it('Check the url when the shared cloud hosting is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.sharedCloudHosting);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('shared-hosting');
    }));
    it('Check the url for the register page', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.loginOption);
        yield helper_1.Helper.handleTabs(1);
        let loginPage = new loginPage_1.LoginPage();
        yield helper_1.Helper.clickItem(loginPage.createNewAccount);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('register');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtb1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0U3BlYy9kZW1vUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFvQztBQUNwQyw2Q0FBOEM7QUFDOUMscURBQWtEO0FBQ2xELDZDQUF5QztBQUN6Qyx1REFBaUQ7QUFHakQsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUU5QixVQUFVLENBQUUsR0FBUyxFQUFFO1FBQ25CLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDOUIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbkMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQzdELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixTQUFTLENBQUUsR0FBUyxFQUFFO1FBQ2xCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLEdBQVMsRUFBRTtRQUM5QyxNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzNELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsK0JBQStCLEVBQUUsR0FBUyxFQUFFO1FBQzNDLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzdCLElBQUcsTUFBTSxlQUFNLENBQUMs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