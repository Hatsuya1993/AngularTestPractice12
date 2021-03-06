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
    constructor($main = protractor_1.$("main")) {
        this.$main = $main;
        this.firstNameInput = this.$main.$("#first_name");
        this.lastNameInput = this.$main.$("#last_name");
        this.businessNameInput = this.$main.$("#bizname");
        this.emailAddressInput = this.$main.$("#email");
        this.mobileInput = this.$main.$("#mobile");
        this.submitButton = this.$main.element(protractor_1.by.buttonText("Confirm Order"));
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
//# sourceMappingURL=confirmOrderPage.js.map