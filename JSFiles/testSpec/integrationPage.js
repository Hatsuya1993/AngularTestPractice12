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
const viewToPage_1 = require("../view/viewToPage");
describe("Testing orderPage", () => {
    let demoPage;
    let viewToPage;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        demoPage = new demoPage_1.DemoPage();
        viewToPage = new viewToPage_1.ViewToPage();
        yield protractor_1.browser.get(demoPage.website);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.restart();
    }));
    it("Should check the default content is displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        expect(yield integratePage.pageContents.isDisplayed()).toBeTruthy();
    }));
    it("Should open another tab to the correct website for travelport", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.websiteTravelPort);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for travelport", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.websiteTravelPort);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("travelport");
    }));
    it("Should open another tab to the correct website for travelport documentation", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.travelPortDoc);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for travelport", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.travelPortDoc);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("hotels/travelport");
    }));
    it("Should open another tab to the correct website for travelpayout", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.travelPayOut);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for travelpayouts", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.travelPayOut);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("travelpayouts");
    }));
    it("Check if each module is correct", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        const results = yield helper_1.Helper.checkEachValue(["Flights Modules", "Hotels Modules", "Tours Modules", "Cars Modules", "Multi-Vendor Manual Modules"], integratePage.modules);
        expect(results).toBe(true);
    }));
    it("Should open another tab to the correct website for hotel beds", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelBeds);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open another tab to the correct website for hotelbeds documentation", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelBedsDoc);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for hotelbeds documentation", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelBedsDoc);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("hotels/hotelbeds");
    }));
    it("Should open another tab to the correct website for hotelston", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelston);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for hotelston", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelston);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("hotelston");
    }));
    it("Should open another tab to the correct website for hotelston doc", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelstonDoc);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for hotelston doc", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.hotelstonDoc);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("modules/hotels/hotelston");
    }));
    it("Should open another tab to the correct website for expedia", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.expedia);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for expedia", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.expedia);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("expedia");
    }));
    it("Should open to the correct website for viator", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.viator);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for viator", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.viator);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("viator");
    }));
    it("Should open to the correct website for viator doc", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.viatorDoc);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for viator doc", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.viatorDoc);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("tours/viator");
    }));
    it("Should open to the correct website for cartrawler", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.cartrawler);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for cartrawler", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.cartrawler);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("cartrawler");
    }));
    it("Should open to the correct website for cartrawler doc", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.cartrawlerDoc);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for cartrawler doc", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.cartrawlerDoc);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("cars/cartrawler");
    }));
    it("Should open to the correct website for kiwitaxic", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.kititaxi);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
    it("Should open to the correct website for kiwitaxic doc", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.kititaxi);
        yield helper_1.Helper.handleTabs(1);
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("kiwitaxi");
    }));
    it("Should open to the correct website for iway", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.iway);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
});
//# sourceMappingURL=integrationPage.js.map