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
const protractor_1 = require("protractor");
const global_1 = require("../helper/global");
const demoPage_1 = require("../pageObject/demoPage");
const helper_1 = require("../helper/helper");
const log4jsconfig_1 = require("../config/log4jsconfig");
describe("Testing orderPage", () => {
    let demoPage;
    const log4jsconfig = new log4jsconfig_1.Log4jsconfig();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        demoPage = new demoPage_1.DemoPage();
        log4jsconfig.log().debug("Opening website of " + demoPage.getWebsite());
        yield protractor_1.browser.get(demoPage.getWebsite());
        log4jsconfig.log().debug("Website opened " + demoPage.getWebsite());
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.restart();
    }));
    it("Correct link for docs php travels", () => __awaiter(void 0, void 0, void 0, function* () {
        log4jsconfig.log().debug("Correct link for docs php travel");
        const demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.getDocsOption());
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("phptravels");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9jc1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0U3BlYy9kb2NzUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUNuQyw2Q0FBNEM7QUFDNUMscURBQWdEO0FBQ2hELDZDQUF3QztBQUN4Qyx5REFBb0Q7QUFFcEQsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtJQUNqQyxJQUFJLFFBQW1CLENBQUM7SUFDeEIsTUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7SUFDeEMsVUFBVSxDQUFFLEdBQVMsRUFBRTtRQUNyQixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUMxQixZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixHQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDekMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNuRSxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBRSxHQUFTLEVBQUU7UUFDcEIsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUNBQW1DLEVBQUUsR0FBUyxFQUFFO1FBQ2pELFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUM3RCxNQUFNLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUNoQyxNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDakQsTUFBTSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=