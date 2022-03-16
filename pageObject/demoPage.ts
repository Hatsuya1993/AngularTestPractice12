import {$, by, ElementFinder} from "protractor";

export class DemoPage {
  website : string;
  title : ElementFinder;
  subTitle : ElementFinder;
  mainTitle : ElementFinder;
  navOption : ElementFinder;
  demoOption : ElementFinder;
  pricingOption : ElementFinder;
  integrationOption : ElementFinder;
  docsOption : ElementFinder;
  blogOption : ElementFinder;
  loginOption : ElementFinder;
  facebookIcon : ElementFinder;
  youtubeIcon : ElementFinder;
  twitterIcon : ElementFinder;
  linkedIn : ElementFinder;
  instagramIcon : ElementFinder;
  deskTopLink : ElementFinder;
  mobileAppLink : ElementFinder;
  featuresLink : ElementFinder;
  requirementsLink : ElementFinder;
  technologyLink : ElementFinder;
  changeLogLink : ElementFinder;
  updatesLink : ElementFinder;
  providersLink : ElementFinder;
  affiliateLink : ElementFinder;
  roadMapLink : ElementFinder;
  productServicesLink : ElementFinder;
  customizationLink : ElementFinder;
  hotelIntegration : ElementFinder;
  sharedCloudHosting : ElementFinder;

  constructor(private readonly $main : ElementFinder = $("#Main")) {
    this.website = "https://phptravels.com/demo/";
    this.title = this.$main.$("#PHPTRAVELS");
    this.subTitle = this.$main.$("#TRAVEL_TECHNOLOGY_PARTNER");
    this.mainTitle = this.$main.$(".main-title");
    this.navOption = this.$main.$("nav.clearfix");
    this.demoOption = this.$main.element(by.linkText("Demo"));
    this.pricingOption = this.$main.element(by.linkText("Pricing"));
    this.integrationOption = this.$main.element(by.linkText("Integrations"));
    this.docsOption = this.$main.element(by.linkText("Docs"));
    this.blogOption = this.$main.element(by.linkText("Blog"));
    this.loginOption = this.$main.element(by.linkText("Login"));
    this.facebookIcon = this.$main.element(by.css("a[href='https://www.facebook.com/phptravels/']"));
    this.youtubeIcon = this.$main.element(by.css("a[href='https://www.youtube.com/c/phptravelsofficial']"));
    this.twitterIcon = this.$main.element(by.css("a[href='https://www.twitter.com/phptravels']"));
    this.linkedIn = this.$main.element(by.css("a[href='https://www.linkedin.com/company/phptravels/']"));
    this.instagramIcon = this.$main.element(by.css("a[href='https://www.instagram.com/phptravels_/']"));
    this.deskTopLink = this.$main.element(by.linkText("Desktop App"));
    this.mobileAppLink = this.$main.element(by.linkText("Mobile Apps"));
    this.featuresLink = this.$main.element(by.linkText("Features"));
    this.requirementsLink = this.$main.element(by.linkText("Requirements"));
    this.technologyLink = this.$main.element(by.linkText("Technology"));
    this.changeLogLink = this.$main.element(by.linkText("Changelog"));
    this.updatesLink = this.$main.element(by.linkText("Updates"));
    this.providersLink = this.$main.element(by.linkText("Providers"));
    this.affiliateLink = this.$main.element(by.linkText("Affiliate"));
    this.roadMapLink = this.$main.element(by.linkText("Road Map"));
    this.productServicesLink = this.$main.element(by.linkText("Product Services"));
    this.customizationLink = this.$main.element(by.linkText("Customizations"));
    this.hotelIntegration = this.$main.element(by.css("a[href=\"https://phptravels.com/expedia-api-integration/\"]"));
    this.sharedCloudHosting = this.$main.element(by.linkText("Shared Cloud Hosting"));
  }
}
