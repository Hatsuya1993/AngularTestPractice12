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
const EC = protractor_1.ExpectedConditions;
class Helper {
    static displayed(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            yield protractor_1.browser.wait(EC.presenceOf(item), global_1.globalData["WAIT_TIME"]["WAIT_LONGER"]);
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            yield protractor_1.browser.wait(EC.visibilityOf(item), global_1.globalData["WAIT_TIME"]["WAIT_LONGER"]);
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
    static moveClickItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            yield protractor_1.browser.actions().mouseMove(item).click().perform();
        });
    }
    static handleTabs(tabs) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            const windowHandles = yield protractor_1.browser.getAllWindowHandles();
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
    static handleIframe(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(data.getWebElement());
        });
    }
    static handleExitIframe() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().defaultContent();
        });
    }
}
exports.Helper = Helper;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vaGVscGVyL2hlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMEY7QUFDMUYscUNBQW9DO0FBRXBDLE1BQU0sRUFBRSxHQUFHLCtCQUFrQixDQUFDO0FBRTlCLE1BQWEsTUFBTTtJQUNqQixNQUFNLENBQU8sU0FBUyxDQUFDLElBQW9COztZQUN6QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMzRCxNQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzNELE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDbEYsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDM0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFRCxNQUFNLENBQU8sU0FBUyxDQUFDLElBQW1COztZQUN4QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMzRCxJQUFJLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDOUIsTUFBTSxJQUFJ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