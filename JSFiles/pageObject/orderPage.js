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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9vcmRlclBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBEO0FBQzFELDZDQUF5QztBQUd6QyxNQUFhLFNBQVM7SUFLbEIsWUFBNkIsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUFoQixVQUFLLEdBQUwsS0FBSyxDQUFXO1FBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVZLFdBQVcsQ0FBQyxFQUFVOztZQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3hDLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDM0MsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUMvQyxDQUFDO0tBQUE7Q0FFSjtBQWhCRCw4QkFnQkMifQ==