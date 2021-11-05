import { $, by, element, ElementFinder, Locator } from "protractor";

export class DemoPage {

    website : string
    title : ElementFinder
    subTitle : ElementFinder
    mainTitle : ElementFinder
    navOption : ElementFinder
    demoOption : ElementFinder

    constructor(private readonly $main = $("#Main")){
        this.website = "https://phptravels.com/demo/"
        this.title = $("#PHPTRAVELS")
        this.subTitle = $("#TRAVEL_TECHNOLOGY_PARTNER")
        this.mainTitle = this.$main.$(".main-title")
        this.navOption = $("nav.clearfix")
        this.demoOption = element(by.linkText("Demo"))
    }

}