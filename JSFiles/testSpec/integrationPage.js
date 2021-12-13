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
const orderPage_1 = require("../pageObject/orderPage");
const confirmOrder_1 = require("../pageObject/confirmOrder");
const viewToPage_1 = require("../view/viewToPage");
describe('Testing orderPage', () => {
    let demoPage = new demoPage_1.DemoPage();
    let orderPage = new orderPage_1.OrderPage();
    let confirmOrderPage = new confirmOrder_1.ConfirmOrderPage();
    let viewToPage = new viewToPage_1.ViewToPage();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(demoPage.website);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
    }));
    fit('Should check the default content is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        expect(yield integratePage.pageContents.isDisplayed()).toBeTruthy();
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvaW50ZWdyYXRpb25QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDLDZDQUE4QztBQUM5QyxxREFBa0Q7QUFFbEQsdURBQW9EO0FBQ3BELDZEQUE4RDtBQUM5RCxtREFBZ0Q7QUFJaEQsUUFBUSxDQUFDLG1CQUFtQixFQUFFLEdBQUcsRUFBRTtJQUUvQixJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztJQUM5QixJQUFJLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztJQUNoQyxJQUFJLGdCQUFnQixHQUFHLElBQUksK0JBQWdCLEVBQUUsQ0FBQztJQUM5QyxJQUFJLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUVsQyxVQUFVLENBQUUsR0FBUyxFQUFFO1FBQ25CLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDbkMsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQzdELENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixTQUFTLENBQUUsR0FBUyxFQUFFO1FBQ2xCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUN6QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLCtDQUErQyxFQUFFLEdBQVMsRUFBRTtRQUM1RCxJQUFJLGFBQWEsR0FBRyxNQUFNLFVBQVUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDaEYsTUFBTSxDQUFDLE1BQU0sYUFBYSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3ZFLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9