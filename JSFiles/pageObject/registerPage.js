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
    constructor($main = ("#Main")) {
        this.$main = $main;
        this.website = 'https://phptravels.org/register.php';
        this.firstName = protractor_1.$('#inputFirstName');
        this.lastName = protractor_1.$('#inputLastName');
        this.email = protractor_1.$('#inputEmail');
        this.phoneNumber = protractor_1.$('#inputPhone');
        this.companyName = protractor_1.$('#inputCompanyName');
        this.streetAddress = protractor_1.$('#inputAddress1');
        this.streetAddress2 = protractor_1.$('#inputAddress2');
        this.city = protractor_1.$('#inputCity');
        this.state = protractor_1.$('#stateinput');
        this.postCode = protractor_1.$('#inputPostcode');
        this.country = protractor_1.$('#inputCountry');
        this.mobile = protractor_1.$('#customfield2');
        this.password = protractor_1.$('#inputNewPassword1');
        this.confirmPassword = protractor_1.$('#inputNewPassword2');
        this.captchaBox = protractor_1.$('#recaptcha-anchor .recaptcha-checkbox-border');
        this.registerButton = protractor_1.element(protractor_1.by.buttonText('Register'));
        this.reCaptcha = protractor_1.$("iframe[title='reCAPTCHA']");
        this.noMatchPassword = protractor_1.$("#nonMatchingPasswordResult");
        this.errorAlert = protractor_1.$(".alert.alert-danger");
        this.registerTitle = protractor_1.$(".login-title");
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
                    yield this.country.element(protractor_1.by.cssContainingText('option', data.country)).click();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9yZWdpc3RlclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1FO0FBQ25FLDZDQUF5QztBQW1CekMsTUFBYSxZQUFZO0lBd0JyQixZQUE2QixRQUFRLENBQUMsT0FBTyxDQUFDO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFFMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQ0FBcUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFDLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFDLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtRQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFDLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFDLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQTtR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