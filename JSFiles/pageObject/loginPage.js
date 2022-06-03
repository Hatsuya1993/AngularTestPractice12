"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
const helper_1 = require("../helper/helper");
class LoginPage {
    constructor($main = protractor_1.$("#Main")) {
        this.$main = $main;
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
        this.forgot = this.$main.element(protractor_1.by.linkText("Forgot?"));
    }
    fill(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data) {
                if (data.email) {
                    yield helper_1.Helper.displayed(this.firstName);
                    yield this.firstName.sendKeys(data.email);
                }
                if (data.password) {
                    yield helper_1.Helper.displayed(this.password);
                    yield this.password.sendKeys(data.password);
                }
            }
        });
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=loginPage.js.map