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
const log4jsconfig_1 = require("../config/log4jsconfig");
const EC = protractor_1.ExpectedConditions;
const log4jsconfig = new log4jsconfig_1.Log4jsconfig();
class Helper {
    static displayed(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            yield protractor_1.browser.wait(EC.presenceOf(item), global_1.globalData["WAIT_TIME"]["WAIT_LONGER"], "Presence false");
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            yield protractor_1.browser.wait(EC.visibilityOf(item), global_1.globalData["WAIT_TIME"]["WAIT_LONGER"], "Visibility false");
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            return true;
        });
    }
    static clickItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_SHORT"]);
            if (yield this.displayed(item)) {
                yield item.click();
                log4jsconfig.log().debug(`Click element of ${item}`);
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
            log4jsconfig.log().debug(`Get all tabs of ${windowHandles}`);
            yield protractor_1.browser.switchTo().window(windowHandles[tabs]);
            log4jsconfig.log().debug(`Switch to ${windowHandles[tabs]}`);
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
    static scrollPageImplicit(value) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < value; i++) {
                protractor_1.browser.executeScript("window.scrollBy(0, 10)");
            }
        });
    }
    static scrollAndCheck(data) {
        return __awaiter(this, void 0, void 0, function* () {
            while ((yield this.displayed(data)) != true) {
                this.scrollPageImplicit(global_1.globalData["SCROLL"]["SCROLL_SHORT"]);
            }
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
    static checkString(given, actual) {
        return __awaiter(this, void 0, void 0, function* () {
            log4jsconfig.log().debug(`Given ${yield given.getText()} and actual of ${actual}`);
            if ((yield given.getText()) === actual) {
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map