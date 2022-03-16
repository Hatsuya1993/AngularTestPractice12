import {ElementFinder, $, by} from "protractor";
import {Helper} from "../helper/helper";

export interface RegisterDetails {
    firstName : string
    lastName : string
    email : string
    phoneNumber: string
    companyName : string
    streetAddress : string
    streetAddress2 : string
    city : string
    state : string
    postCode : string
    country : string
    mobile : string
    password : string
    confirmPassword : string
}

export class RegisterPage {
  firstName : ElementFinder;
  lastName : ElementFinder;
  email : ElementFinder;
  phoneNumber : ElementFinder;
  companyName : ElementFinder;
  streetAddress : ElementFinder;
  streetAddress2 : ElementFinder;
  city : ElementFinder;
  state : ElementFinder;
  postCode : ElementFinder;
  country : ElementFinder;
  mobile : ElementFinder;
  password : ElementFinder;
  confirmPassword : ElementFinder;
  captchaBox : ElementFinder;
  registerButton : ElementFinder;
  website : string;
  reCaptcha : ElementFinder;
  noMatchPassword : ElementFinder;
  errorAlert : ElementFinder;
  registerTitle : ElementFinder;
  labelForFirstName : ElementFinder;
  labelForLastName : ElementFinder;
  labelForEmailAddress : ElementFinder;
  labelForPhone : ElementFinder;
  labelForCompanyName : ElementFinder;
  labelStreetAddress : ElementFinder;
  labelStreetAddress2 : ElementFinder;
  labelCity : ElementFinder;
  labelState : ElementFinder;
  labelPostCode : ElementFinder;
  labelCountry : ElementFinder;
  labelMobile : ElementFinder;
  labelPasswordOne : ElementFinder;
  labelPasswordTwo : ElementFinder;


  constructor(private readonly $main : ElementFinder = $("#Main")) {
    this.website = "https://phptravels.org/register.php";
    this.firstName = this.$main.$("#inputFirstName");
    this.lastName = this.$main.$("#inputLastName");
    this.email = this.$main.$("#inputEmail");
    this.phoneNumber = this.$main.$("#inputPhone");
    this.companyName = this.$main.$("#inputCompanyName");
    this.streetAddress = this.$main.$("#inputAddress1");
    this.streetAddress2 = this.$main.$("#inputAddress2");
    this.city = this.$main.$("#inputCity");
    this.state = this.$main.$("#stateinput");
    this.postCode = this.$main.$("#inputPostcode");
    this.country = this.$main.$("#inputCountry");
    this.mobile = this.$main.$("#customfield2");
    this.password = this.$main.$("#inputNewPassword1");
    this.confirmPassword = this.$main.$("#inputNewPassword2");
    this.captchaBox = this.$main.$("#recaptcha-anchor .recaptcha-checkbox-border");
    this.registerButton = this.$main.element(by.buttonText("Register"));
    this.reCaptcha = this.$main.$("iframe[title='reCAPTCHA']");
    this.noMatchPassword = this.$main.$("#nonMatchingPasswordResult");
    this.errorAlert = this.$main.$(".alert.alert-danger");
    this.registerTitle = this.$main.$(".login-title");
    this.labelForFirstName = this.$main.$("label[for='inputFirstName']");
    this.labelForLastName = this.$main.$("label[for='inputLastName']");
    this.labelForEmailAddress = this.$main.$("label[for='inputEmail']");
    this.labelForPhone = this.$main.$("label[for='inputPhone']");
    this.labelForCompanyName = this.$main.$("label[for='inputCompanyName']");
    this.labelStreetAddress = this.$main.$("label[for='inputAddress1']");
    this.labelStreetAddress2 = this.$main.$("label[for='inputAddress2']");
    this.labelCity = this.$main.$("label[for='inputCity']");
    this.labelState = this.$main.$("label[for='stateinput']");
    this.labelPostCode = this.$main.$("label[for='inputPostcode']");
    this.labelCountry = this.$main.$("label[for='inputCountry']");
    this.labelMobile = this.$main.$("label[for='customfield2']");
    this.labelPasswordOne = this.$main.$("label[for='inputNewPassword1']");
    this.labelPasswordTwo = this.$main.$("label[for='inputNewPassword2']");
  }

  async fill(data: Partial<RegisterDetails>) {
    if (data) {
      if (data.firstName) {
        await Helper.displayed(this.firstName);
        await this.firstName.sendKeys(data.firstName);
      }
      if (data.lastName) {
        await Helper.displayed(this.lastName);
        await this.lastName.sendKeys(data.lastName);
      }
      if (data.email) {
        await Helper.displayed(this.email);
        await this.email.sendKeys(data.email);
      }
      if (data.phoneNumber) {
        await Helper.displayed(this.phoneNumber);
        await this.phoneNumber.sendKeys(data.phoneNumber);
      }
      if (data.companyName) {
        await Helper.displayed(this.companyName);
        await this.companyName.sendKeys(data.companyName);
      }
      if (data.streetAddress) {
        await Helper.displayed(this.streetAddress);
        await this.streetAddress.sendKeys(data.streetAddress);
      }
      if (data.streetAddress2) {
        await Helper.displayed(this.streetAddress2);
        await this.streetAddress2.sendKeys(data.streetAddress2);
      }
      if (data.city) {
        await Helper.displayed(this.city);
        await this.city.sendKeys(data.city);
      }
      if (data.state) {
        await Helper.displayed(this.state);
        await this.state.sendKeys(data.state);
      }
      if (data.postCode) {
        await Helper.displayed(this.postCode);
        await this.postCode.sendKeys(data.postCode);
      }
      if (data.country) {
        await Helper.displayed(this.country);
        await this.country.element(by.cssContainingText("option", data.country)).click();
      }
      if (data.mobile) {
        await Helper.displayed(this.mobile);
        await this.mobile.sendKeys(data.mobile);
      }
      if (data.password) {
        await Helper.displayed(this.password);
        await this.password.sendKeys(data.password);
      }
      if (data.confirmPassword) {
        await Helper.displayed(this.confirmPassword);
        await this.confirmPassword.sendKeys(data.confirmPassword);
      }
    }
  }
}
