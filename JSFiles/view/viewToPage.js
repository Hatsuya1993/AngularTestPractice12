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
exports.ViewToPage = void 0;
const helper_1 = require("../helper/helper");
const integrationPage_1 = require("../pageObject/integrationPage");
class ViewToPage {
    constructor($main = ("main")) {
        this.$main = $main;
    }
    moveToIntegrate(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield helper_1.Helper.clickItem(item);
            return new integrationPage_1.IntegrationPage();
        });
    }
}
exports.ViewToPage = ViewToPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld1RvUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3ZpZXcvdmlld1RvUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSw2Q0FBeUM7QUFDekMsbUVBQStEO0FBRS9ELE1BQWEsVUFBVTtJQUVuQixZQUE2QixRQUFRLENBQUMsTUFBTSxDQUFDO1FBQWhCLFVBQUssR0FBTCxLQUFLLENBQVc7SUFFN0MsQ0FBQztJQUVZLGVBQWUsQ0FBRSxJQUFvQjs7WUFDOUMsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzVCLE9BQU8sSUFBSSxpQ0FBZSxFQUFFLENBQUE7UUFDaEMsQ0FBQztLQUFBO0NBRUo7QUFYRCxnQ0FXQyJ9