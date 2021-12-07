import { element, ElementFinder, $ } from "protractor"


export class OrderPage {

    buyNowButton : ElementFinder

    constructor(private readonly $main = ("main")){
        this.buyNowButton = $("#order_button")
    }

}