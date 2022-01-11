import { browser, $, ElementFinder } from "protractor"


export class LoginPage {

    createNewAccount : ElementFinder

    constructor(private readonly $main = ("#Main")){
        this.createNewAccount = $("a[href='register.php']")
    }

}