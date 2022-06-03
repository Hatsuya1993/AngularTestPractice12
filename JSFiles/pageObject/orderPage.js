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
    constructor($main = protractor_1.$("main")) {
        this.$main = $main;
        this.buyNowButton = this.$main.$("#order_button");
        this.checkBoxOption = this.$main.$("input[type=\"checkbox\"]");
        this.firstNameInput = this.$main.$("#first_name");
        this.lastNameInput = this.$main.$("#last_name");
        this.businessNameInput = this.$main.$("#bizname");
        this.emailAddressInput = this.$main.$("#email");
        this.mobileInput = this.$main.$("#mobile");
        this.orderPageData = this.$main.$("#order");
    }
    getCheckBox(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkBoxOption = this.$main.element(protractor_1.by.id(id));
            yield helper_1.Helper.displayed(this.checkBoxOption);
            yield helper_1.Helper.clickItem(this.checkBoxOption);
        });
    }
}
exports.OrderPage = OrderPage;
//# sourceMappingURL=orderPage.js.map