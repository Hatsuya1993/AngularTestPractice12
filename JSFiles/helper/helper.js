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
exports.Helper = void 0;
const protractor_1 = require("protractor");
const global_1 = require("./global");
let EC = protractor_1.ExpectedConditions;
class Helper {
    static displayed(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            yield protractor_1.browser.wait(EC.presenceOf(item), global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            yield protractor_1.browser.wait(EC.visibilityOf(item), global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            return true;
        });
    }
    static clickItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            if (yield this.displayed(item)) {
                item.click();
                yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            }
        });
    }
}
exports.Helper = Helper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vaGVscGVyL2hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0U7QUFDeEUscUNBQXNDO0FBRXRDLElBQUksRUFBRSxHQUFHLCtCQUFrQixDQUFBO0FBRTNCLE1BQWEsTUFBTTtJQUVmLE1BQU0sQ0FBTyxTQUFTLENBQUMsSUFBb0I7O1lBQ3ZDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO1lBQzFELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7WUFDN0UsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7WUFDMUQsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtZQUMvRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtZQUMxRCxPQUFPLElBQUksQ0FBQTtRQUNmLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBTyxTQUFTLENBQUMsSUFBbUI7O1lBQ3RDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO1lBQzFELElBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDO2dCQUMxQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7Z0JBQ1osTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7YUFDN0Q7UUFDTCxDQUFDO0tBQUE7Q0FFSjtBQW5CRCx3QkFtQkMifQ==