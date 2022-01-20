import { browser, $, ElementFinder } from "protractor"


export class LoginPage {

    website : string
    createNewAccount : ElementFinder
    email : ElementFinder
    password : ElementFinder
    loginButton : ElementFinder
    recaptchaBox : ElementFinder
    alertInfo : ElementFinder

    constructor(private readonly $main = ("#Main")){
        this.createNewAccount = $("a[href='register.php']")
        this.website = 'https://phptravels.org/login'
        this.email = $("#inputEmail")
        this.password = $("#inputPassword")
        this.loginButton = $("#login")
        this.recaptchaBox = $(".recaptcha-checkbox-border")
        this.alertInfo = $(".alert.alert-danger")
    }

}