import { element, ElementFinder, $, by } from "protractor"
import { Helper } from "../helper/helper"

export class IntegrationPage {

    pageContents : ElementFinder
    websiteTravelPort : ElementFinder

    constructor(private readonly $main = ("main")){

        this.pageContents = element(by.css(".container.module"))
        this.websiteTravelPort = $("a[href*='travelport']")
    }
}