import {ElementFinder, $, by, element} from "protractor";
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


  constructor(private readonly $main = ("#Main")) {
    this.website = "https://phptravels.org/register.php";
    this.firstName = $("#inputFirstName");
    this.lastName = $("#inputLastName");
    this.email = $("#inputEmail");
    this.phoneNumber = $("#inputPhone");
    this.companyName = $("#inputCompanyName");
    this.streetAddress = $("#inputAddress1");
    this.streetAddress2 = $("#inputAddress2");
    this.city = $("#inputCity");
    this.state = $("#stateinput");
    this.postCode = $("#inputPostcode");
    this.country = $("#inputCountry");
    this.mobile = $("#customfield2");
    this.password = $("#inputNewPassword1");
    this.confirmPassword = $("#inputNewPassword2");
    this.captchaBox = $("#recaptcha-anchor .recaptcha-checkbox-border");
    this.registerButton = element(by.buttonText("Register"));
    this.reCaptcha = $("iframe[title='reCAPTCHA']");
    this.noMatchPassword = $("#nonMatchingPasswordResult");
    this.errorAlert = $(".alert.alert-danger");
    this.registerTitle = $(".login-title");
    this.labelForFirstName = $("label[for='inputFirstName']");
    this.labelForLastName = $("label[for='inputLastName']");
    this.labelForEmailAddress = $("label[for='inputEmail']");
    this.labelForPhone = $("label[for='inputPhone']");
    this.labelForCompanyName = $("label[for='inputCompanyName']");
    this.labelStreetAddress = $("label[for='inputAddress1']");
    this.labelStreetAddress2 = $("label[for='inputAddress2']");
    this.labelCity = $("label[for='inputCity']");
    this.labelState = $("label[for='stateinput']");
    this.labelPostCode = $("label[for='inputPostcode']");
    this.labelCountry = $("label[for='inputCountry']");
    this.labelMobile = $("label[for='customfield2']");
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
