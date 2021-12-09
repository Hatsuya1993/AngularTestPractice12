import { element, ElementFinder, $, by } from "protractor"
import { Helper } from "../helper/helper"


export class OrderPage {

    buyNowButton : ElementFinder
    checkBoxOption : ElementFinder

    constructor(private readonly $main = ("main")){
        this.buyNowButton = $("#order_button")
        this.checkBoxOption = $('input[type="checkbox"]')
    }

    public async getCheckBox(id: string) {
        this.checkBoxOption = element(by.id(id))
        await Helper.displayed(this.checkBoxOption)
        await Helper.clickItem(this.checkBoxOption)
    }

}