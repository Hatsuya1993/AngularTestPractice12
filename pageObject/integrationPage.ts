import { element, ElementFinder, $, by, ElementArrayFinder, $$ } from "protractor"
import { Helper } from "../helper/helper"

export class IntegrationPage {

    pageContents : ElementFinder
    websiteTravelPort : ElementFinder
    travelPortDoc : ElementFinder
    travelPayOut : ElementFinder
    modules : ElementArrayFinder
    hotelBeds : ElementFinder
    hotelBedsDoc : ElementFinder

    constructor(private readonly $main = ("main")){

        this.pageContents = element(by.css(".container.module"))
        this.websiteTravelPort = $("a[href*='travelport']")
        this.travelPortDoc = $("a[href*='hotels/travelport']")
        this.travelPayOut = $("a[href*='travelpayouts']")
        this.modules = $$(".module h4")
        this.hotelBeds = $("a[href*=hotelbeds]")
        this.hotelBedsDoc = $("a[href*='hotels/hotelbeds']")
    }
}