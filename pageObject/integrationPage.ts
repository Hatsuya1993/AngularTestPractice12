import { element, ElementFinder, $, by } from "protractor"
import { Helper } from "../helper/helper"

export class IntegrationPage {

    pageContents : ElementFinder


    constructor(private readonly $main = ("main")){

        this.pageContents = element(by.css(".container.module"))

    }
}