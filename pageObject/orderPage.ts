import {ElementFinder, $, by} from "protractor";
import {Helper} from "../helper/helper";

export class OrderPage {
  buyNowButton : ElementFinder;
  checkBoxOption : ElementFinder;
  firstNameInput : ElementFinder;
  lastNameInput : ElementFinder;
  businessNameInput : ElementFinder;
  emailAddressInput : ElementFinder;
  mobileInput : ElementFinder;
  orderPageData : ElementFinder;

  constructor(private readonly $main : ElementFinder = $("main")) {
    this.buyNowButton = this.$main.$("#order_button");
    this.checkBoxOption = this.$main.$("input[type=\"checkbox\"]");
    this.firstNameInput = this.$main.$("#first_name");
    this.lastNameInput = this.$main.$("#last_name");
    this.businessNameInput = this.$main.$("#bizname");
    this.emailAddressInput = this.$main.$("#email");
    this.mobileInput = this.$main.$("#mobile");
    this.orderPageData = this.$main.$("#order");
  }

  public async getCheckBox(id: string) {
    this.checkBoxOption = this.$main.element(by.id(id));
    await Helper.displayed(this.checkBoxOption);
    await Helper.clickItem(this.checkBoxOption);
  }
}
