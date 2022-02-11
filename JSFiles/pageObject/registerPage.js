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
        this.website = "https://phptravels.org/register.php";
        this.firstName = protractor_1.$("#inputFirstName");
        this.lastName = protractor_1.$("#inputLastName");
        this.email = protractor_1.$("#inputEmail");
        this.phoneNumber = protractor_1.$("#inputPhone");
        this.companyName = protractor_1.$("#inputCompanyName");
        this.streetAddress = protractor_1.$("#inputAddress1");
        this.streetAddress2 = protractor_1.$("#inputAddress2");
        this.city = protractor_1.$("#inputCity");
        this.state = protractor_1.$("#stateinput");
        this.postCode = protractor_1.$("#inputPostcode");
        this.country = protractor_1.$("#inputCountry");
        this.mobile = protractor_1.$("#customfield2");
        this.password = protractor_1.$("#inputNewPassword1");
        this.confirmPassword = protractor_1.$("#inputNewPassword2");
        this.captchaBox = protractor_1.$("#recaptcha-anchor .recaptcha-checkbox-border");
        this.registerButton = protractor_1.element(protractor_1.by.buttonText("Register"));
        this.reCaptcha = protractor_1.$("iframe[title='reCAPTCHA']");
        this.noMatchPassword = protractor_1.$("#nonMatchingPasswordResult");
        this.errorAlert = protractor_1.$(".alert.alert-danger");
        this.registerTitle = protractor_1.$(".login-title");
        this.labelForFirstName = protractor_1.$("label[for='inputFirstName']");
        this.labelForLastName = protractor_1.$("label[for='inputLastName']");
        this.labelForEmailAddress = protractor_1.$("label[for='inputEmail']");
        this.labelForPhone = protractor_1.$("label[for='inputPhone']");
        this.labelForCompanyName = protractor_1.$("label[for='inputCompanyName']");
        this.labelStreetAddress = protractor_1.$("label[for='inputAddress1']");
        this.labelStreetAddress2 = protractor_1.$("label[for='inputAddress2']");
        this.labelCity = protractor_1.$("label[for='inputCity']");
        this.labelState = protractor_1.$("label[for='stateinput']");
        this.labelPostCode = protractor_1.$("label[for='inputPostcode']");
        this.labelCountry = protractor_1.$("label[for='inputCountry']");
        this.labelMobile = protractor_1.$("label[for='customfield2']");
        this.labelPasswordOne = protractor_1.$("label[for='inputNewPassword1']");
        this.labelPasswordTwo = protractor_1.$("label[for='inputNewPassword2']");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9yZWdpc3RlclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlEO0FBQ3pELDZDQUF3QztBQW1CeEMsTUFBYSxZQUFZO0lBc0N2QixZQUE2QixRQUFRLENBQUMsT0FBTyxDQUFDO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxxQ0FBcUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFDLENBQUMsOENBQThDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsVUFBVSxHQUFHLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsY0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGNBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxhQUFhLEdBQUcsY0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGNBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxjQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsY0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLGNBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsY0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFDLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVLLElBQUksQ0FBQyxJQUE4Qjs7WUFDdkMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNsQixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN2QyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDL0M7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDN0M7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNkLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ25DLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN2QztnQkFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3BCLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNuRDtnQkFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ3BCLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3pDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNuRDtnQkFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ3RCLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQzNDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2lCQUN2RDtnQkFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7b0JBQ3ZCLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQzVDLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2lCQUN6RDtnQkFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2IsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JDO2dCQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDZCxNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkM7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDN0M7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNoQixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNyQyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2xGO2dCQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDZixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNwQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDekM7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDN0M7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN4QixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUM3QyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztpQkFDM0Q7YUFDRjtRQUNILENBQUM7S0FBQTtDQUNGO0FBeElELG9DQXdJQyJ9