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
    const demoPage = new demoPage_1.DemoPage();
    const viewToPage = new viewToPage_1.ViewToPage();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(demoPage.website);
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
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
    fit("Should open to the correct website for iway", () => __awaiter(void 0, void 0, void 0, function* () {
        const integratePage = yield viewToPage.moveToIntegrate(demoPage.integrationOption);
        yield helper_1.Helper.clickItem(integratePage.iway);
        expect((yield protractor_1.browser.getAllWindowHandles()).length).toBe(2);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvaW50ZWdyYXRpb25QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDZDQUE0QztBQUM1QyxxREFBZ0Q7QUFDaEQsNkNBQXdDO0FBQ3hDLG1EQUE4QztBQUc5QyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBQ2hDLE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBRXBDLFVBQVUsQ0FBRSxHQUFTLEVBQUU7UUFDckIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxNQUFNLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxtQkFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBRSxHQUFTLEVBQUU7UUFDcEIsTUFBTSxvQkFBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0NBQStDLEVBQUUsR0FBUyxFQUFFO1FBQzdELE1BQU0sYUFBYSxHQUFHLE1BQU0sVUFBVSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRixNQUFNLENBQUMsTUFBTSxhQUFhLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrREFBK0QsRUFBRSxHQUFTLEVBQUU7UUFDN0UsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsQ0FBQyxNQUFNLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1EQUFtRCxFQUFFLEdBQVMsRUFBRTtRQUNqRSxNQUFNLGFBQWEsR0FBRyxNQUFNLFVBQVUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkYsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sZUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkVBQTZFLEVBQUUsR0FBUyxFQUFFO1FBQzNGLE1BQU0sYUFBYSxHQUFHLE1BQU0sVUFBVSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbURBQW1ELEVBQUUsR0FBUyxFQUFFO1FBQ2pFLE1BQU0sYUFBYSxHQUFHLE1BQU0sVUFBVSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sZUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdkUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpRUFBaUUsRUFBRSxHQUFTLEVBQUU7UUFDL0UsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLENBQUMsTUFBTSxvQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzREFBc0QsRUFBRSxHQUFTLEVBQUU7UUFDcEUsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkQsTUFBTSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFTLEVBQUU7UUFDL0MsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sT0FBTyxHQUFHLE1BQU0sZUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsNkJBQTZCLENBQUMsRUFBRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtEQUErRCxFQUFFLEdBQVMsRUFBRTtRQUM3RSxNQUFNLGFBQWEsR0FBRyxNQUFNLFVBQVUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkYsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRCxNQUFNLENBQUMsQ0FBQyxNQUFNLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDRFQUE0RSxFQUFFLEdBQVMsRUFBRTtRQUMxRixNQUFNLGFBQWEsR0FBRyxNQUFNLFVBQVUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkYsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsQ0FBQyxNQUFNLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdFQUFnRSxFQUFFLEdBQVMsRUFBRTtRQUM5RSxNQUFNLGFBQWEsR0FBRyxNQUFNLFVBQVUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkYsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuRCxNQUFNLGVBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOERBQThELEVBQUUsR0FBUyxFQUFFO1FBQzVFLE1BQU0sYUFBYSxHQUFHLE1BQU0sVUFBVSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0RBQWtELEVBQUUsR0FBUyxFQUFFO1FBQ2hFLE1BQU0sYUFBYSxHQUFHLE1BQU0sVUFBVSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sZUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0VBQWtFLEVBQUUsR0FBUyxFQUFFO1FBQ2hGLE1BQU0sYUFBYSxHQUFHLE1BQU0sVUFBVSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsc0RBQXNELEVBQUUsR0FBUyxFQUFFO1FBQ3BFLE1BQU0sYUFBYSxHQUFHLE1BQU0sVUFBVSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNuRixNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELE1BQU0sZUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDOUUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0REFBNEQsRUFBRSxHQUFTLEVBQUU7UUFDMUUsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsTUFBTSxDQUFDLENBQUMsTUFBTSxvQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnREFBZ0QsRUFBRSxHQUFTLEVBQUU7UUFDOUQsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsTUFBTSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrQ0FBK0MsRUFBRSxHQUFTLEVBQUU7UUFDN0QsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLENBQUMsTUFBTSxvQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrQ0FBK0MsRUFBRSxHQUFTLEVBQUU7UUFDN0QsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsTUFBTSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxHQUFTLEVBQUU7UUFDakUsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLENBQUMsTUFBTSxvQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxHQUFTLEVBQUU7UUFDakUsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEQsTUFBTSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxHQUFTLEVBQUU7UUFDakUsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsTUFBTSxDQUFDLENBQUMsTUFBTSxvQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxHQUFTLEVBQUU7UUFDakUsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsTUFBTSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1REFBdUQsRUFBRSxHQUFTLEVBQUU7UUFDckUsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLENBQUMsTUFBTSxvQkFBTyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1REFBdUQsRUFBRSxHQUFTLEVBQUU7UUFDckUsTUFBTSxhQUFhLEdBQUcsTUFBTSxVQUFVLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEQsTUFBTSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxNQUFNLG9CQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNyRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLEdBQVMsRUFBRTtRQUNoRSxNQUFNLGFBQWEsR0FBRyxNQUFNLFVBQVUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkYsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsQ0FBQyxNQUFNLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHNEQUFzRCxFQUFFLEdBQVMsRUFBRTtRQUNwRSxNQUFNLGFBQWEsR0FBRyxNQUFNLFVBQVUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkYsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxNQUFNLGVBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM5RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLDZDQUE2QyxFQUFFLEdBQVMsRUFBRTtRQUM1RCxNQUFNLGFBQWEsR0FBRyxNQUFNLFVBQVUsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkYsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsQ0FBQyxNQUFNLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==