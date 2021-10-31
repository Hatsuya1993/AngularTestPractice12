import { $ } from "protractor";

export class DemoPage {

    website : string

    constructor(private readonly $main = $("#Main")){
        this.website = "https://phptravels.com/demo/"
    }

}