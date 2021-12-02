import { $, by, element, ElementFinder, Locator } from "protractor";

export class DemoPage {

    website : string
    title : ElementFinder
    subTitle : ElementFinder
    mainTitle : ElementFinder
    navOption : ElementFinder
    demoOption : ElementFinder
    pricingOption : ElementFinder
    integrationOption : ElementFinder
    docsOption : ElementFinder
    blogOption : ElementFinder
    loginOption : ElementFinder
    facebookIcon : ElementFinder
    youtubeIcon : ElementFinder
    twitterIcon : ElementFinder
    linkedIn : ElementFinder
    instagramIcon : ElementFinder
    deskTopLink : ElementFinder
    mobileAppLink : ElementFinder
    featuresLink : ElementFinder
    requirementsLink : ElementFinder
    technologyLink : ElementFinder
    changeLogLink : ElementFinder
    updatesLink : ElementFinder
    providersLink : ElementFinder
    affiliateLink : ElementFinder
    roadMapLink : ElementFinder

    constructor(private readonly $main = $("#Main")){
        this.website = "https://phptravels.com/demo/"
        this.title = $("#PHPTRAVELS")
        this.subTitle = $("#TRAVEL_TECHNOLOGY_PARTNER")
        this.mainTitle = this.$main.$(".main-title")
        this.navOption = $("nav.clearfix")
        this.demoOption = element(by.linkText("Demo"))
        this.pricingOption = element(by.linkText("Pricing"))
        this.integrationOption = element(by.linkText("Integrations"))
        this.docsOption = element(by.linkText("Docs"))
        this.blogOption = element(by.linkText("Blog"))
        this.loginOption = element(by.linkText("Login"))
        this.facebookIcon = element(by.css("a[href='https://www.facebook.com/phptravels/']"))
        this.youtubeIcon = element(by.css("a[href='https://www.youtube.com/c/phptravelsofficial']"))
        this.twitterIcon = element(by.css("a[href='https://www.twitter.com/phptravels']"))
        this.linkedIn = element(by.css("a[href='https://www.linkedin.com/company/phptravels/']"))
        this.instagramIcon = element(by.css("a[href='https://www.instagram.com/phptravels_/']"))
        this.deskTopLink = element(by.linkText("Desktop App"))
        this.mobileAppLink = element(by.linkText("Mobile Apps"))
        this.featuresLink = element(by.linkText("Features"))
        this.requirementsLink = element(by.linkText("Requirements"))
        this.technologyLink = element(by.linkText("Technology"))
        this.changeLogLink = element(by.linkText("Changelog"))
        this.updatesLink = element(by.linkText("Updates"))
        this.providersLink = element(by.linkText("Providers"))
        this.affiliateLink = element(by.linkText("Affiliate"))
        this.roadMapLink = element(by.linkText("Road Map"))
    }

}