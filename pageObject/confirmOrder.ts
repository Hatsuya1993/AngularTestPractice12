import { element, ElementFinder, $, by } from "protractor"
import { Helper } from "../helper/helper"

interface formForConfirmOrder {
    firstName: string,
    lastName: string,
    businessName: string,
    emailAddress: string,
    mobile: string
}


export class ConfirmOrderPage {

    firstNameInput : ElementFinder
    lastNameInput : ElementFinder
    businessNameInput : ElementFinder
    emailAddressInput : ElementFinder
    mobileInput : ElementFinder
    submitButton : ElementFinder

    constructor(private readonly $main = ("main")){
        this.firstNameInput = $('#first_name')
        this.lastNameInput = $('#last_name')
        this.businessNameInput = $('#bizname')
        this.emailAddressInput = $('#email')
        this.mobileInput = $('#mobile')
        this.submitButton = element(by.buttonText('Confirm Order'))
    }

    public async fillInConfirmOrder(info: formForConfirmOrder) {
        if(info.firstName != ''){
            await this.firstNameInput.sendKeys(info.firstName)
        }
        if(info.lastName != ''){
            await this.lastNameInput.sendKeys(info.lastName)
        }
        if(info.businessName != ''){
            await this.businessNameInput.sendKeys(info.businessName)
        }
        if(info.emailAddress != ''){
            await this.emailAddressInput.sendKeys(info.emailAddress)
        }
        if(info.mobile != ''){
            await this.mobileInput.sendKeys(info.mobile)
        }
        }

}