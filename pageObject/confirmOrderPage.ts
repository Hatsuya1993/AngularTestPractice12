import {ElementFinder, $, by} from "protractor";

interface formForConfirmOrder {
    firstName: string,
    lastName: string,
    businessName: string,
    emailAddress: string,
    mobile: string
}


export class ConfirmOrderPage {
  firstNameInput : ElementFinder;
  lastNameInput : ElementFinder;
  businessNameInput : ElementFinder;
  emailAddressInput : ElementFinder;
  mobileInput : ElementFinder;
  submitButton : ElementFinder;

  constructor(private readonly $main : ElementFinder = $("main")) {
    this.firstNameInput = this.$main.$("#first_name");
    this.lastNameInput = this.$main.$("#last_name");
    this.businessNameInput = this.$main.$("#bizname");
    this.emailAddressInput = this.$main.$("#email");
    this.mobileInput = this.$main.$("#mobile");
    this.submitButton = this.$main.element(by.buttonText("Confirm Order"));
  }

  public async fillInConfirmOrder(info: formForConfirmOrder) {
    if (info.firstName != "") {
      await this.firstNameInput.sendKeys(info.firstName);
    }
    if (info.lastName != "") {
      await this.lastNameInput.sendKeys(info.lastName);
    }
    if (info.businessName != "") {
      await this.businessNameInput.sendKeys(info.businessName);
    }
    if (info.emailAddress != "") {
      await this.emailAddressInput.sendKeys(info.emailAddress);
    }
    if (info.mobile != "") {
      await this.mobileInput.sendKeys(info.mobile);
    }
  }
}
