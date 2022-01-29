import {$, ElementFinder, element, by} from "protractor";
import {Helper} from "../helper/helper";

export interface LoginDetails {
    email : string
    password : string
}


export class LoginPage {
  website : string;
  createNewAccount : ElementFinder;
  email : ElementFinder;
  password : ElementFinder;
  loginButton : ElementFinder;
  recaptchaBox : ElementFinder;
  alertInfo : ElementFinder;
  firstName : ElementFinder;
  iframe : ElementFinder;
  title : ElementFinder;
  emailLabel : ElementFinder;
  passwordLabel : ElementFinder;
  forgot : ElementFinder;

  constructor(private readonly $main = ("#Main")) {
    this.createNewAccount = $("a[href='register.php']");
    this.website = "https://phptravels.org/login";
    this.email = $("#inputEmail");
    this.password = $("#inputPassword");
    this.loginButton = $("#login");
    this.recaptchaBox = $(".recaptcha-checkbox-border");
    this.alertInfo = $(".alert.alert-danger");
    this.firstName = $("#inputEmail");
    this.iframe = $("iframe[title='reCAPTCHA']");
    this.title = $(".login-title");
    this.emailLabel = $("label[for='inputEmail']");
    this.passwordLabel = $("label[for='inputPassword']");
    this.forgot = element(by.linkText("Forgot?"));
  }

  async fill(data: Partial<LoginDetails>) {
    if (data) {
      if (data.email) {
        await Helper.displayed(this.firstName);
        await this.firstName.sendKeys(data.email);
      }
      if (data.password) {
        await Helper.displayed(this.password);
        await this.password.sendKeys(data.password);
      }
    }
  }
}
