import { browser, ElementFinder, $ } from "protractor"


export class RegisterPage {

    firstName : ElementFinder
    lastName : ElementFinder
    email : ElementFinder
    phoneNumber : ElementFinder
    companyName : ElementFinder
    streetAddress : ElementFinder
    streetAddress2 : ElementFinder
    city : ElementFinder
    state : ElementFinder
    postCode : ElementFinder
    country : ElementFinder
    mobile : ElementFinder
    password : ElementFinder
    confirmPassword : ElementFinder
    captchaBox : ElementFinder

    constructor(private readonly $main = ("#Main")){

        this.firstName = $('#inputFirstName')
        this.lastName = $('#inputLastName')
        this.email = $('#inputEmail')
        this.phoneNumber = $('#inputPhone')
        this.companyName = $('#inputCompanyName')
        this.streetAddress = $('#inputAddress1')
        this.streetAddress2 = $('#inputAddress2')
        this.city = $('#inputCity')
        this.state = $('#stateinput')
        this.postCode = $('#inputPostcode')
        this.country = $('#inputCountry')
        this.mobile = $('#customfield2')
        this.password = $('#inputNewPassword1')
        this.confirmPassword = $('#inputNewPassword2')
        this.captchaBox = $('#recaptcha-anchor .recaptcha-checkbox-border')
    }

}