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
const helper_1 = require("../helper/helper");
const hotelModulePage_1 = require("../pageObject/hotelModulePage");
describe("Hotel Module Page", () => {
    const hotelModulePage = new hotelModulePage_1.HotelModulePage();
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get(hotelModulePage.getWebsite());
        yield protractor_1.browser.manage().window().maximize();
        yield protractor_1.browser.sleep(global_1.globalData["WAIT_TIME"]["WAIT_LONG"]);
    }));
    afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.close();
    }));
    it("Correct link for hotels module features", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("hotels-module-features");
    }));
    it("Header should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getHeader().isDisplayed()).toBeTruthy();
    }));
    it("Hotels booking module should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getHotelsModule().first().isDisplayed()).toBeTruthy();
    }));
    it("Full calendar should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getFullCalendar().first().isDisplayed()).toBeTruthy();
    }));
    it("Main features should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getMainFeatures().isDisplayed()).toBeTruthy();
    }));
    it("Hotels module should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getGoogleMaps().last().isDisplayed()).toBeTruthy();
    }));
    it("Banner should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getBanner().isDisplayed()).toBeTruthy();
    }));
    it("Banner title should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getBannerTitle().isDisplayed()).toBeTruthy();
    }));
    it("Banner title should be populated correctly", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getBannerTitle().getText()).toContain("Complete Hotel Management ");
    }));
    it("Banner description should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getBannerDescription().isDisplayed()).toBeTruthy();
    }));
    it("View pricing button should be displayed", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield hotelModulePage.getViewPricing().isDisplayed()).toBeTruthy();
    }));
    fit("Pricing page should move to the order page", () => __awaiter(void 0, void 0, void 0, function* () {
        yield helper_1.Helper.clickItem(hotelModulePage.getViewPricing());
        expect(yield protractor_1.browser.getCurrentUrl()).toContain("order");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWxNb2R1bGVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdFNwZWMvaG90ZWxNb2R1bGVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW1DO0FBQ25DLDZDQUE0QztBQUM1Qyw2Q0FBd0M7QUFDeEMsbUVBQThEO0FBRTlELFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxHQUFHLEVBQUU7SUFDakMsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7SUFFOUMsVUFBVSxDQUFFLEdBQVMsRUFBRTtRQUNyQixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDaEQsTUFBTSxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsbUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxTQUFTLENBQUUsR0FBUyxFQUFFO1FBQ3BCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlDQUF5QyxFQUFFLEdBQVMsRUFBRTtRQUN2RCxNQUFNLENBQUMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDNUUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxHQUFTLEVBQUU7UUFDMUMsTUFBTSxDQUFDLE1BQU0sZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywyQ0FBMkMsRUFBRSxHQUFTLEVBQUU7UUFDekQsTUFBTSxDQUFDLE1BQU0sZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDckYsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxHQUFTLEVBQUU7UUFDakQsTUFBTSxDQUFDLE1BQU0sZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDckYsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxHQUFTLEVBQUU7UUFDakQsTUFBTSxDQUFDLE1BQU0sZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDN0UsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxHQUFTLEVBQUU7UUFDakQsTUFBTSxDQUFDLE1BQU0sZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbEYsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxHQUFTLEVBQUU7UUFDMUMsTUFBTSxDQUFDLE1BQU0sZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxHQUFTLEVBQUU7UUFDaEQsTUFBTSxDQUFDLE1BQU0sZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRSxHQUFTLEVBQUU7UUFDMUQsTUFBTSxDQUFDLE1BQU0sZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDbkcsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSxHQUFTLEVBQUU7UUFDdEQsTUFBTSxDQUFDLE1BQU0sZUFBZSxDQUFDLG9CQUFvQixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNsRixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlDQUF5QyxFQUFFLEdBQVMsRUFBRTtRQUN2RCxNQUFNLENBQUMsTUFBTSxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1RSxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLDRDQUE0QyxFQUFFLEdBQVMsRUFBRTtRQUMzRCxNQUFNLGVBQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLE1BQU0sb0JBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==