"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
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
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9sb2dpblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXNEO0FBR3RELE1BQWEsU0FBUztJQVVsQixZQUE2QixRQUFRLENBQUMsT0FBTyxDQUFDO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGNBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsOEJBQThCLENBQUE7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFDLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUNuQyxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLGNBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDN0MsQ0FBQztDQUVKO0FBcEJELDhCQW9CQyJ9