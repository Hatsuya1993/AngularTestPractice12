"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
class LoginPage {
    constructor($main = ("#Main")) {
        this.$main = $main;
        this.createNewAccount = protractor_1.$("a[href='register.php']");
        this.website = 'https://phptravels.org/login';
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9sb2dpblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXNEO0FBR3RELE1BQWEsU0FBUztJQUtsQixZQUE2QixRQUFRLENBQUMsT0FBTyxDQUFDO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGNBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsOEJBQThCLENBQUE7SUFDakQsQ0FBQztDQUVKO0FBVkQsOEJBVUMifQ==