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
exports.RegisterPage = void 0;
const protractor_1 = require("protractor");
const helper_1 = require("../helper/helper");
class RegisterPage {
    constructor($main = protractor_1.$("#Main")) {
        this.$main = $main;
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
        this.registerButton = this.$main.element(protractor_1.by.buttonText("Register"));
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
    fill(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data) {
                if (data.firstName) {
                    yield helper_1.Helper.displayed(this.firstName);
                    yield this.firstName.sendKeys(data.firstName);
                }
                if (data.lastName) {
                    yield helper_1.Helper.displayed(this.lastName);
                    yield this.lastName.sendKeys(data.lastName);
                }
                if (data.email) {
                    yield helper_1.Helper.displayed(this.email);
                    yield this.email.sendKeys(data.email);
                }
                if (data.phoneNumber) {
                    yield helper_1.Helper.displayed(this.phoneNumber);
                    yield this.phoneNumber.sendKeys(data.phoneNumber);
                }
                if (data.companyName) {
                    yield helper_1.Helper.displayed(this.companyName);
                    yield this.companyName.sendKeys(data.companyName);
                }
                if (data.streetAddress) {
                    yield helper_1.Helper.displayed(this.streetAddress);
                    yield this.streetAddress.sendKeys(data.streetAddress);
                }
                if (data.streetAddress2) {
                    yield helper_1.Helper.displayed(this.streetAddress2);
                    yield this.streetAddress2.sendKeys(data.streetAddress2);
                }
                if (data.city) {
                    yield helper_1.Helper.displayed(this.city);
                    yield this.city.sendKeys(data.city);
                }
                if (data.state) {
                    yield helper_1.Helper.displayed(this.state);
                    yield this.state.sendKeys(data.state);
                }
                if (data.postCode) {
                    yield helper_1.Helper.displayed(this.postCode);
                    yield this.postCode.sendKeys(data.postCode);
                }
                if (data.country) {
                    yield helper_1.Helper.displayed(this.country);
                    yield this.country.element(protractor_1.by.cssContainingText("option", data.country)).click();
                }
                if (data.mobile) {
                    yield helper_1.Helper.displayed(this.mobile);
                    yield this.mobile.sendKeys(data.mobile);
                }
                if (data.password) {
                    yield helper_1.Helper.displayed(this.password);
                    yield this.password.sendKeys(data.password);
                }
                if (data.confirmPassword) {
                    yield helper_1.Helper.displayed(this.confirmPassword);
                    yield this.confirmPassword.sendKeys(data.confirmPassword);
                }
            }
        });
    }
}
exports.RegisterPage = RegisterPage;
//# sourceMappingURL=registerPage.js.map