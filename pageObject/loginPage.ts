import {$, ElementFinder, by} from "protractor";
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

  constructor(private readonly $main : ElementFinder = $("#Main")) {
    this.createNewAccount = this.$main.$("a[href='register.php']");
    this.website = "https://phptravels.org/login";
    this.email = this.$main.$("#inputEmail");
    this.password = this.$main.$("#inputPassword");
    this.loginButton = this.$main.$("#login");
    this.recaptchaBox = this.$main.$(".recaptcha-checkbox-border");
    this.alertInfo = this.$main.$(".alert.alert-danger");
    this.firstName = this.$main.$("#inputEmail");
    this.iframe = this.$main.$("iframe[title='reCAPTCHA']");
    this.title = this.$main.$(".login-title");
    this.emailLabel = this.$main.$("label[for='inputEmail']");
    this.passwordLabel = this.$main.$("label[for='inputPassword']");
    this.forgot = this.$main.element(by.linkText("Forgot?"));
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
