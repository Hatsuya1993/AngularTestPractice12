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
const orderPage_1 = require("../pageObject/orderPage");
describe('Testing orderPage', () => {
    let demoPage = new demoPage_1.DemoPage();
    let orderPage = new orderPage_1.OrderPage();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(demoPage.website);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
    }));
    it('Should disable the buy now button by default', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.pricingOption);
        expect(yield orderPage.buyNowButton.isEnabled()).toBe(false);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvb3JkZXJQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9DO0FBQ3BDLDZDQUE4QztBQUM5QyxxREFBa0Q7QUFDbEQsNkNBQXlDO0FBQ3pDLHVEQUFvRDtBQUdwRCxRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBRS9CLElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBQzlCLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBRWhDLFVBQVUsQ0FBRSxHQUFTLEVBQUU7UUFDbkIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNuQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDN0QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLFNBQVMsQ0FBRSxHQUFTLEVBQUU7UUFDbEIsTUFBTSxvQkFBTyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3pCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsOENBQThDLEVBQUUsR0FBUyxFQUFFO1FBQVUsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDbEcsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM5QyxNQUFNLENBQUMsTUFBTSxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2hFLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFTixDQUFDLENBQUMsQ0FBQSJ9