"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPage = void 0;
const protractor_1 = require("protractor");
class DemoPage {
    constructor($main = protractor_1.$("#Main")) {
        this.$main = $main;
        this.website = "https://phptravels.com/demo/";
        this.title = protractor_1.$("#PHPTRAVELS");
        this.subTitle = protractor_1.$("#TRAVEL_TECHNOLOGY_PARTNER");
        this.mainTitle = this.$main.$(".main-title");
        this.navOption = protractor_1.$("nav.clearfix");
        this.demoOption = protractor_1.element(protractor_1.by.linkText("Demo"));
        this.pricingOption = protractor_1.element(protractor_1.by.linkText("Pricing"));
        this.integrationOption = protractor_1.element(protractor_1.by.linkText("Integrations"));
        this.docsOption = protractor_1.element(protractor_1.by.linkText("Docs"));
        this.blogOption = protractor_1.element(protractor_1.by.linkText("Blog"));
        this.loginOption = protractor_1.element(protractor_1.by.linkText("Login"));
        this.facebookIcon = protractor_1.element(protractor_1.by.css("a[href='https://www.facebook.com/phptravels/']"));
        this.youtubeIcon = protractor_1.element(protractor_1.by.css("a[href='https://www.youtube.com/c/phptravelsofficial']"));
        this.twitterIcon = protractor_1.element(protractor_1.by.css("a[href='https://www.twitter.com/phptravels']"));
        this.linkedIn = protractor_1.element(protractor_1.by.css("a[href='https://www.linkedin.com/company/phptravels/']"));
        this.instagramIcon = protractor_1.element(protractor_1.by.css("a[href='https://www.instagram.com/phptravels_/']"));
        this.deskTopLink = protractor_1.element(protractor_1.by.linkText("Desktop App"));
        this.mobileAppLink = protractor_1.element(protractor_1.by.linkText("Mobile Apps"));
        this.featuresLink = protractor_1.element(protractor_1.by.linkText("Features"));
        this.requirementsLink = protractor_1.element(protractor_1.by.linkText("Requirements"));
        this.technologyLink = protractor_1.element(protractor_1.by.linkText("Technology"));
        this.changeLogLink = protractor_1.element(protractor_1.by.linkText("Changelog"));
        this.updatesLink = protractor_1.element(protractor_1.by.linkText("Updates"));
        this.providersLink = protractor_1.element(protractor_1.by.linkText("Providers"));
        this.affiliateLink = protractor_1.element(protractor_1.by.linkText("Affiliate"));
        this.roadMapLink = protractor_1.element(protractor_1.by.linkText("Road Map"));
        this.productServicesLink = protractor_1.element(protractor_1.by.linkText("Product Services"));
        this.customizationLink = protractor_1.element(protractor_1.by.linkText("Customizations"));
        this.hotelIntegration = protractor_1.element(protractor_1.by.css("a[href=\"https://phptravels.com/expedia-api-integration/\"]"));
        this.sharedCloudHosting = protractor_1.element(protractor_1.by.linkText("Shared Cloud Hosting"));
    }
}
exports.DemoPage = DemoPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtb1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L2RlbW9QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF5RDtBQUV6RCxNQUFhLFFBQVE7SUFnQ25CLFlBQTZCLFFBQVEsY0FBQyxDQUFDLE9BQU8sQ0FBQztRQUFsQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsOEJBQThCLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxl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