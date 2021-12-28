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
                yield item.click();
                yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            }
        });
    }
    static handleTabs(tabs) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            let windowHandles = yield protractor_1.browser.getAllWindowHandles();
            yield protractor_1.browser.switchTo().window(windowHandles[tabs]);
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
        });
    }
    static waitForPage(page) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.urlContains(page), global_1.globalData["WAIT_TIME"]["WAIT_LONGER"]);
        });
    }
    static scrollPage(amount) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.executeScript(`window.scrollTo(0,${amount});`);
        });
    }
    static mouseOverElement(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().mouseMove(data).perform();
        });
    }
    static checkEachValue(data, dataEl) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data.length !== (yield (yield dataEl.getText()).length))
                return false;
            for (const i of yield dataEl.getText()) {
                if (!data.includes(i))
                    return false;
            }
            return true;
        });
    }
}
exports.Helper = Helper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vaGVscGVyL2hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBa0g7QUFDbEgscUNBQXNDO0FBRXRDLElBQUksRUFBRSxHQUFHLCtCQUFrQixDQUFBO0FBRTNCLE1BQWEsTUFBTTtJQUVmLE1BQU0sQ0FBTyxTQUFTLENBQUMsSUFBb0I7O1lBQ3ZDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO1lBQzFELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7WUFDN0UsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7WUFDMUQsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtZQUMvRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtZQUMxRCxPQUFPLElBQUksQ0FBQTtRQUNmLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBTyxTQUFTLENBQUMsSUFBbUI7O1lBQ3RDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO1lBQzFELElBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDO2dCQUMxQixNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDbEIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7YUFDN0Q7UUFDTCxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sVUFBVSxDQUFDLElBQVk7O1lBQ2hDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO1lBQzFELElBQUksYUFBYSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ3hELE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7WUFDcEQsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7UUFDOUQsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLFdBQVcsQ0FBQyxJQUFZOztZQUNqQyxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBQ3BGLENBQUM7S0FBQTtJQUVELE1BQU0sQ0FBTyxVQUFVLENBQUMsTUFBYzs7WUFDbEMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsTUFBTSxJQUFJLENBQUMsQ0FBQTtRQUNoRSxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sZ0JBQWdCLENBQUMsSUFBbUI7O1lBQzdDLE1BQU0sb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDckQsQ0FBQztLQUFBO0lBRUQsTUFBTSxDQUFPLGNBQWMsQ0FBQyxJQUFtQixFQUFFLE1BQTJCOztZQUN4RSxJQUFHLElBQUksQ0FBQyxNQUFNLE1BQUssTUFBTSxDQUFDLE1BQU0sTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFBO2dCQUFFLE9BQU8sS0FBSyxDQUFBO1lBQ3RFLEtBQUksTUFBTSxDQUFDLElBQUksTUFBTSxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUM7Z0JBQ2xDLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFBRSxPQUFPLEtBQUssQ0FBQTthQUNyQztZQUNELE9BQU8sSUFBSSxDQUFBO1FBQ2YsQ0FBQztLQUFBO0NBRUo7QUE5Q0Qsd0JBOENDIn0=