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
    constructor($main = ("#Main")) {
        this.$main = $main;
        this.createNewAccount = protractor_1.$("a[href='register.php']");
        this.website = 'https://phptravels.org/login';
        this.email = protractor_1.$("#inputEmail");
        this.password = protractor_1.$("#inputPassword");
        this.loginButton = protractor_1.$("#login");
        this.recaptchaBox = protractor_1.$(".recaptcha-checkbox-border");
        this.alertInfo = protractor_1.$(".alert.alert-danger");
        this.firstName = protractor_1.$("#inputEmail");
        this.iframe = protractor_1.$("iframe[title='reCAPTCHA']");
        this.title = protractor_1.$(".login-title");
        this.emailLabel = protractor_1.$("label[for='inputEmail']");
        this.passwordLabel = protractor_1.$("label[for='inputPassword']");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9sb2dpblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNEO0FBQ3RELDZDQUF5QztBQVN6QyxNQUFhLFNBQVM7SUFnQmxCLFlBQTZCLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQTtRQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO1FBQzVDLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxjQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtJQUV4RCxDQUFDO0lBRUssSUFBSSxDQUFDLElBQTJCOztZQUNsQyxJQUFHLElBQUksRUFBQztnQkFDSixJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7b0JBQ1YsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtvQkFDdEMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7aUJBQzVDO2dCQUNELElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztvQkFDYixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUNyQyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtpQkFDOUM7YUFDSjtRQUNMLENBQUM7S0FBQTtDQUVKO0FBN0NELDhCQTZDQyJ9