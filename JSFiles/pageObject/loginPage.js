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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9sb2dpblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXNEO0FBQ3RELDZDQUF5QztBQVN6QyxNQUFhLFNBQVM7SUFhbEIsWUFBNkIsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLDhCQUE4QixDQUFBO1FBQzdDLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFDLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFDLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVLLElBQUksQ0FBQyxJQUEyQjs7WUFDbEMsSUFBRyxJQUFJLEVBQUM7Z0JBQ0osSUFBRyxJQUFJLENBQUMsS0FBSyxFQUFDO29CQUNWLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7b0JBQ3RDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2lCQUM1QztnQkFDRCxJQUFHLElBQUksQ0FBQyxRQUFRLEVBQUM7b0JBQ2IsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDckMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQzlDO2FBQ0o7UUFDTCxDQUFDO0tBQUE7Q0FFSjtBQXZDRCw4QkF1Q0MifQ==