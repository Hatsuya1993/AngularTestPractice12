import { element, ElementFinder, $, by, ElementArrayFinder, $$ } from "protractor"
import { Helper } from "../helper/helper"

export class IntegrationPage {

    configuration : ElementFinder

    constructor(private readonly $main = ("main")){
        this.configuration = $("a[href='/startup/configuration']")

    }
}