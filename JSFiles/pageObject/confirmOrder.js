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
        this.firstNameInput = protractor_1.$('#first_name');
        this.lastNameInput = protractor_1.$('#last_name');
        this.businessNameInput = protractor_1.$('#bizname');
        this.emailAddressInput = protractor_1.$('#email');
        this.mobileInput = protractor_1.$('#mobile');
        this.submitButton = protractor_1.element(protractor_1.by.buttonText('Confirm Order'));
    }
    fillInConfirmOrder(info) {
        return __awaiter(this, void 0, void 0, function* () {
            if (info.firstName != '') {
                yield this.firstNameInput.sendKeys(info.firstName);
            }
            if (info.lastName != '') {
                yield this.lastNameInput.sendKeys(info.lastName);
            }
            if (info.businessName != '') {
                yield this.businessNameInput.sendKeys(info.businessName);
            }
            if (info.emailAddress != '') {
                yield this.emailAddressInput.sendKeys(info.emailAddress);
            }
            if (info.mobile != '') {
                yield this.mobileInput.sendKeys(info.mobile);
            }
        });
    }
}
exports.ConfirmOrderPage = ConfirmOrderPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybU9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9jb25maXJtT3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBEO0FBWTFELE1BQWEsZ0JBQWdCO0lBU3pCLFlBQTZCLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFBaEIsVUFBSyxHQUFMLEtBQUssQ0FBVztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFDLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFDLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBRVksa0JBQWtCLENBQUMsSUFBeUI7O1lBQ3JELElBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQUM7Z0JBQ3BCLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO2FBQ3JEO1lBQ0QsSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBQztnQkFDbkIsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7YUFDbkQ7WUFDRCxJQUFHLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxFQUFDO2dCQUN2QixNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO2FBQzNEO1lBQ0QsSUFBRyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQUUsRUFBQztnQkFDdkIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTthQUMzRDtZQUNELElBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUM7Z0JBQ2pCLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQy9DO1FBQ0QsQ0FBQztLQUFBO0NBRVI7QUFwQ0QsNENBb0NDIn0=