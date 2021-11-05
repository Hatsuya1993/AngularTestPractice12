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
describe('Testing demoPage', () => {
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        let demoPage = new demoPage_1.DemoPage();
        yield protractor_1.browser.get(demoPage.website);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
    }));
    it('Check if the home url is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("demo");
    }));
    it('Check if the title is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        if (yield helper_1.Helper.displayed(demoPage.title))
            expect(yield demoPage.title.getText()).toBe("PHPTRAVELS");
    }));
    it('Check if the subtitle is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        if (yield helper_1.Helper.displayed(demoPage.subTitle))
            expect(yield demoPage.subTitle.getText()).toBe("TRAVEL TECHNOLOGY PARTNER");
    }));
    it('Check if the main title is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        if (yield helper_1.Helper.displayed(demoPage.mainTitle))
            expect(yield demoPage.mainTitle.getText()).toBe("Demo Credentials for Frontend and Backend");
    }));
    it('Check if the nav options at the top are available', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        expect(yield helper_1.Helper.displayed(demoPage.navOption)).toBeTruthy();
    }));
    fit('Check if the home url is correct if demo is clicked', () => __awaiter(void 0, void 0, void 0, function* () {
        let demoPage = new demoPage_1.DemoPage();
        yield helper_1.Helper.clickItem(demoPage.demoOption);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("demo");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtb1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0U3BlYy9kZW1vUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFvQztBQUNwQyw2Q0FBOEM7QUFDOUMscURBQWtEO0FBQ2xELDZDQUF5QztBQUd6QyxRQUFRLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBRTlCLFVBQVUsQ0FBRSxHQUFTLEVBQUU7UUFDbkIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUM5QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNuQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUE7SUFDN0QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLFNBQVMsQ0FBRSxHQUFTLEVBQUU7UUFDbEIsTUFBTSxvQkFBTyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ3pCLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsa0NBQWtDLEVBQUUsR0FBUyxFQUFFO1FBQzlDLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDM0QsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxHQUFTLEVBQUU7UUFDM0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDN0IsSUFBRyxNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUFFLE1BQU0sQ0FBQyxNQUFNLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDeEcsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFTLEVBQUU7UUFDOUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDN0IsSUFBRyxNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUFFLE1BQU0sQ0FBQyxNQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtJQUM3SCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEdBQVMsRUFBRTtRQUNoRCxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtRQUM3QixJQUFHLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQUUsTUFBTSxDQUFDLE1BQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFBO0lBQy9JLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsbURBQW1ELEVBQUUsR0FBUyxFQUFFO1FBQy9ELElBQUksUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFBO1FBQzdCLE1BQU0sQ0FBQyxNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDbkUsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxxREFBcUQsRUFBRSxHQUFTLEVBQUU7UUFDbEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUE7UUFDN0IsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUMzQyxNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzNELENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFTixDQUFDLENBQUMsQ0FBQSJ9