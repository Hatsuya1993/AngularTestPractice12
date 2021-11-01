import { $, ElementFinder } from "protractor";

export class DemoPage {

    website : string
    title : ElementFinder

    constructor(private readonly $main = $("#Main")){
        this.website = "https://phptravels.com/demo/"
        this.title = $("#PHPTRAVELS")
    }

}