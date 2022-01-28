import {element, ElementFinder, $, by} from "protractor";
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

  constructor(private readonly $main = ("main")) {
    this.buyNowButton = $("#order_button");
    this.checkBoxOption = $("input[type=\"checkbox\"]");
    this.firstNameInput = $("#first_name");
    this.lastNameInput = $("#last_name");
    this.businessNameInput = $("#bizname");
    this.emailAddressInput = $("#email");
    this.mobileInput = $("#mobile");
    this.orderPageData = $("#order");
  }

  public async getCheckBox(id: string) {
    this.checkBoxOption = element(by.id(id));
    await Helper.displayed(this.checkBoxOption);
    await Helper.clickItem(this.checkBoxOption);
  }
}
