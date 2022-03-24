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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybU9yZGVyUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3QvY29uZmlybU9yZGVyUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFXaEQsTUFBYSxnQkFBZ0I7SUFRM0IsWUFBNkIsUUFBd0IsY0FBQyxDQUFDLE1BQU0sQ0FBQztRQUFqQyxVQUFLLEdBQUwsS0FBSyxDQUE0QjtRQUM1RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFWSxrQkFBa0IsQ0FBQyxJQUF5Qjs7WUFDdkQsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFBRTtnQkFDeEIsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDcEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFO2dCQUN2QixNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsRDtZQUNELElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLEVBQUU7Z0JBQzNCLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDMUQ7WUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRSxFQUFFO2dCQUMzQixNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtnQkFDckIsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDOUM7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQWxDRCw0Q0FrQ0MifQ==