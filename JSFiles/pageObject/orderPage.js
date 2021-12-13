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
exports.OrderPage = void 0;
const protractor_1 = require("protractor");
const helper_1 = require("../helper/helper");
class OrderPage {
    constructor($main = ("main")) {
        this.$main = $main;
        this.buyNowButton = protractor_1.$("#order_button");
        this.checkBoxOption = protractor_1.$('input[type="checkbox"]');
        this.firstNameInput = protractor_1.$('#first_name');
        this.lastNameInput = protractor_1.$('#last_name');
        this.businessNameInput = protractor_1.$('#bizname');
        this.emailAddressInput = protractor_1.$('#email');
        this.mobileInput = protractor_1.$('#mobile');
        this.orderPageData = protractor_1.$('#order');
    }
    getCheckBox(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkBoxOption = protractor_1.element(protractor_1.by.id(id));
            yield helper_1.Helper.displayed(this.checkBoxOption);
            yield helper_1.Helper.clickItem(this.checkBoxOption);
        });
    }
}
exports.OrderPage = OrderPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9vcmRlclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBEO0FBQzFELDZDQUF5QztBQUV6QyxNQUFhLFNBQVM7SUFXbEIsWUFBNkIsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUFoQixVQUFLLEdBQUwsS0FBSyxDQUFXO1FBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFDLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxjQUFDLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsY0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFWSxXQUFXLENBQUMsRUFBVTs7WUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUN4QyxNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQzNDLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDL0MsQ0FBQztLQUFBO0NBQ0o7QUEzQkQsOEJBMkJDIn0=