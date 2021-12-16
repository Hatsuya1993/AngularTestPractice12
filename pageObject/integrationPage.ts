import { element, ElementFinder, $, by } from "protractor"
import { Helper } from "../helper/helper"

export class IntegrationPage {

    pageContents : ElementFinder
    websiteTravelPort : ElementFinder
    travelPortDoc : ElementFinder

    constructor(private readonly $main = ("main")){

        this.pageContents = element(by.css(".container.module"))
        this.websiteTravelPort = $("a[href*='travelport']")
        this.travelPortDoc = $("a[href*='hotels/travelport']")
    }
}