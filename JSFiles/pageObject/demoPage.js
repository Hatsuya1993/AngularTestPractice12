"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPage = void 0;
const protractor_1 = require("protractor");
class DemoPage {
    constructor($main = protractor_1.$("body")) {
        this.$main = $main;
        this.website = "https://phptravels.com/demo/";
        this.title = this.$main.$("#PHPTRAVELS");
        this.subTitle = this.$main.$("#TRAVEL_TECHNOLOGY_PARTNER");
        this.mainTitle = this.$main.$(".main-title");
        this.navOption = this.$main.$("nav.clearfix");
        this.demoOption = this.$main.element(protractor_1.by.linkText("Demo"));
        this.pricingOption = this.$main.element(protractor_1.by.linkText("Pricing"));
        this.integrationOption = this.$main.element(protractor_1.by.linkText("Integrations"));
        this.docsOption = this.$main.element(protractor_1.by.linkText("Docs"));
        this.blogOption = this.$main.element(protractor_1.by.linkText("Blog"));
        this.loginOption = this.$main.element(protractor_1.by.linkText("Login"));
        this.facebookIcon = this.$main.element(protractor_1.by.css("a[href='https://www.facebook.com/phptravels/']"));
        this.youtubeIcon = this.$main.element(protractor_1.by.css("a[href='https://www.youtube.com/c/phptravelsofficial']"));
        this.twitterIcon = this.$main.element(protractor_1.by.css("a[href='https://www.twitter.com/phptravels']"));
        this.linkedIn = this.$main.element(protractor_1.by.css("a[href='https://www.linkedin.com/company/phptravels/']"));
        this.instagramIcon = this.$main.element(protractor_1.by.css("a[href='https://www.instagram.com/phptravels_/']"));
        this.deskTopLink = this.$main.element(protractor_1.by.linkText("Desktop App"));
        this.mobileAppLink = this.$main.element(protractor_1.by.linkText("Mobile Apps"));
        this.featuresLink = this.$main.element(protractor_1.by.linkText("Features"));
        this.requirementsLink = this.$main.element(protractor_1.by.linkText("Requirements"));
        this.technologyLink = this.$main.element(protractor_1.by.linkText("Technology"));
        this.changeLogLink = this.$main.element(protractor_1.by.linkText("Changelog"));
        this.updatesLink = this.$main.element(protractor_1.by.linkText("Updates"));
        this.providersLink = this.$main.element(protractor_1.by.linkText("Providers"));
        this.affiliateLink = this.$main.element(protractor_1.by.linkText("Affiliate"));
        this.roadMapLink = this.$main.element(protractor_1.by.linkText("Road Map"));
        this.productServicesLink = this.$main.element(protractor_1.by.linkText("Product Services"));
        this.customizationLink = this.$main.element(protractor_1.by.linkText("Customizations"));
        this.hotelIntegration = this.$main.element(protractor_1.by.css("a[href=\"https://phptravels.com/expedia-api-integration/\"]"));
        this.sharedCloudHosting = this.$main.element(protractor_1.by.linkText("Shared Cloud Hosting"));
    }
    getWebsite() {
        return this.website;
    }
    getTitle() {
        return this.title;
    }
    getSubtitle() {
        return this.subTitle;
    }
    getMainTitle() {
        return this.mainTitle;
    }
    getNavOption() {
        return this.navOption;
    }
    getDemoOption() {
        return this.demoOption;
    }
    getPricingOption() {
        return this.pricingOption;
    }
    getIntegrationOption() {
        return this.integrationOption;
    }
    getDocsOption() {
        return this.docsOption;
    }
    getBlogOption() {
        return this.blogOption;
    }
    getLoginOption() {
        return this.loginOption;
    }
    getFacebookIcon() {
        return this.facebookIcon;
    }
    getYoutubeIcon() {
        return this.youtubeIcon;
    }
    getTwitterIcon() {
        return this.twitterIcon;
    }
    getLinkedIn() {
        return this.linkedIn;
    }
    getInstagramIcon() {
        return this.instagramIcon;
    }
    getDeskTopLink() {
        return this.deskTopLink;
    }
    getMobileAppLink() {
        return this.mobileAppLink;
    }
    getFeaturesLink() {
        return this.featuresLink;
    }
    getRequirementsLink() {
        return this.requirementsLink;
    }
    getTechnologyLink() {
        return this.technologyLink;
    }
    getChangeLogLink() {
        return this.changeLogLink;
    }
    getUpdatesLink() {
        return this.updatesLink;
    }
    getProvidersLink() {
        return this.providersLink;
    }
    getAffiliateLink() {
        return this.affiliateLink;
    }
    getRoadMapLink() {
        return this.roadMapLink;
    }
    getProductServicesLink() {
        return this.productServicesLink;
    }
    getCustomizationLink() {
        return this.customizationLink;
    }
    getHotelIntegration() {
        return this.hotelIntegration;
    }
    getSharedCloudHosting() {
        return this.sharedCloudHosting;
    }
}
exports.DemoPage = DemoPage;
//# sourceMappingURL=demoPage.js.map