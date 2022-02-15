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
exports.PricingPage = void 0;
const protractor_1 = require("protractor");
class PricingPage {
    constructor($main = ("#Main")) {
        this.$main = $main;
        this.website = "https://phptravels.com/order";
        this.plans = protractor_1.$$(".plan-type");
        this.travelPortFlights = protractor_1.$("a[href*='phptravels.gumroad.com/l/utzhq']");
        this.travelPortFlightsPopUp = protractor_1.$(".product-row");
        this.iframe = protractor_1.$(".gumroad-overlay-iframe");
    }
    getAllPlans(data1, data2) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < (yield data1.count()); i++) {
                if (data2.includes(yield data1.get(i).getText()))
                    continue;
                return false;
            }
            return true;
        });
    }
}
exports.PricingPage = PricingPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2luZ1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L3ByaWNpbmdQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFvRTtBQUdwRSxNQUFhLFdBQVc7SUFPdEIsWUFBNkIsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsOEJBQThCLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxjQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUssV0FBVyxDQUFDLEtBQTBCLEVBQUUsS0FBcUI7O1lBQ2pFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUFFLFNBQVM7Z0JBQzNELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtDQUNGO0FBdEJELGtDQXNCQyJ9