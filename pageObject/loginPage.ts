import { browser, $, ElementFinder } from "protractor"


export class LoginPage {

    website : string
    createNewAccount : ElementFinder

    constructor(private readonly $main = ("#Main")){
        this.createNewAccount = $("a[href='register.php']")
        this.website = 'https://phptravels.org/login'
    }

}