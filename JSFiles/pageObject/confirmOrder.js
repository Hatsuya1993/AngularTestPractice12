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
exports.ConfirmOrderPage = void 0;
const protractor_1 = require("protractor");
class ConfirmOrderPage {
    constructor($main = ("main")) {
        this.$main = $main;
        this.firstNameInput = protractor_1.$("#first_name");
        this.lastNameInput = protractor_1.$("#last_name");
        this.businessNameInput = protractor_1.$("#bizname");
        this.emailAddressInput = protractor_1.$("#email");
        this.mobileInput = protractor_1.$("#mobile");
        this.submitButton = protractor_1.element(protractor_1.by.buttonText("Confirm Order"));
    }
    fillInConfirmOrder(info) {
        return __awaiter(this, void 0, void 0, function* () {
            if (info.firstName != "") {
                yield this.firstNameInput.sendKeys(info.firstName);
            }
            if (info.lastName != "") {
                yield this.lastNameInput.sendKeys(info.lastName);
            }
            if (info.businessName != "") {
                yield this.businessNameInput.sendKeys(info.businessName);
            }
            if (info.emailAddress != "") {
                yield this.emailAddressInput.sendKeys(info.emailAddress);
            }
            if (info.mobile != "") {
                yield this.mobileInput.sendKeys(info.mobile);
            }
        });
    }
}
exports.ConfirmOrderPage = ConfirmOrderPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybU9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9jb25maXJtT3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlEO0FBV3pELE1BQWEsZ0JBQWdCO0lBUTNCLFlBQTZCLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFBaEIsVUFBSyxHQUFMLEtBQUssQ0FBVztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRVksa0JBQWtCLENBQUMsSUFBeUI7O1lBQ3ZELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3hCLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRTtnQkFDdkIsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxFQUFFO2dCQUMzQixNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsRUFBRTtnQkFDM0IsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMxRDtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzlDO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFsQ0QsNENBa0NDIn0=