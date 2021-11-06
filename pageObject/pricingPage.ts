import { browser } from "protractor"


export class PricingPage {

    website : string

    constructor(private readonly $main = ("#Main")){
        this.website = "https://phptravels.com/order"
    }

}