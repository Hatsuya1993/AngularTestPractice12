import { browser, ElementFinder, $ } from "protractor"
import { Helper } from '../helper/helper'

interface RegisterDetails {
    firstName : string
    lastName : string
    email : string
    phoneNumber: string
    companyName : string
    streetAddress : string
    streetaddress2 : string
    city : string
    state : string
    postCode : string
    country : string
    mobile : string
    password : string
    confirmPassword : string
}

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

    async fill(data: Partial<RegisterDetails>){
        if(data){
            if(data.firstName){
                await Helper.displayed(this.firstName)
                await this.firstName.sendKeys(data.firstName)
            }
        }
    }

}