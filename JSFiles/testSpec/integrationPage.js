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
    it('Should check the default content is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        expect(yield integratePage.pageContents.isDisplayed()).toBeTruthy();
    }));
    it('Should open another tab to the correct website for travelport', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.websiteTravelPort);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Should open to the correct website for travelport', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.websiteTravelPort);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('travelport');
    }));
    it('Should open another tab to the correct website for travelport documentation', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.travelPortDoc);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Should open to the correct website for travelport', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.travelPortDoc);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('hotels/travelport');
    }));
    it('Should open another tab to the correct website for travelpayout', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.travelPayOut);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Should open to the correct website for travelpayouts', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.travelPayOut);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('travelpayouts');
    }));
    it('Check if each module is correct', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        const results = yield helper_1.Helper.checkEachValue(['Flights Modules', 'Hotels Modules', 'Tours Modules', 'Cars Modules', 'Multi-Vendor Manual Modules'], integratePage.modules);
        expect(results).toBe(true);
    }));
    it('Should open another tab to the correct website for hotel beds', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelBeds);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Should open another tab to the correct website for hotelbeds documentation', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelBedsDoc);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Should open to the correct website for hotelbeds documentation', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelBedsDoc);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('hotels/hotelbeds');
    }));
    it('Should open another tab to the correct website for hotelston', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelston);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Should open to the correct website for hotelston', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelston);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('hotelston');
    }));
    it('Should open another tab to the correct website for hotelston doc', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelstonDoc);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Should open to the correct website for hotelston doc', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelstonDoc);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('modules/hotels/hotelston');
    }));
    it('Should open another tab to the correct website for expedia', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.expedia);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Should open to the correct website for expedia', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.expedia);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('expedia');
    }));
    it('Should open to the correct website for viator', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.viator);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Should open to the correct website for viator', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.viator);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('viator');
    }));
    it('Should open to the correct website for viator doc', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.viatorDoc);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it('Should open to the correct website for viator doc', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.viatorDoc);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain('tours/viator');
    }));
    fit('Should open to the correct website for cartrawler', () => __awaiter(void 0, void 0, void 0, function* () {
        let integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.cartrawler);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvaW50ZWdyYXRpb25QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDLDZDQUE4QztBQUM5QyxxREFBa0Q7QUFDbEQsNkNBQXlDO0FBQ3pDLHVEQUFvRDtBQUNwRCw2REFBOEQ7QUFDOUQsbURBQWdEO0FBSWhELFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFFL0IsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7SUFDOUIsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7SUFDaEMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLCtCQUFnQixFQUFFLENBQUM7SUFDOUMsSUFBSSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFFbEMsVUFBVSxDQUFFLEdBQVMsRUFBRTtRQUNuQixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ25DLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQTtJQUM3RCxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsU0FBUyxDQUFFLEdBQVMsRUFBRTtRQUNsQixNQUFNLG9CQUFPLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDekIsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQywrQ0FBK0MsRUFBRSxHQUFTLEVBQUU7UUFDM0QsSUFBSSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFB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