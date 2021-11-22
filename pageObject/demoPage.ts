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
    }

}