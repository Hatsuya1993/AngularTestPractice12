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
        this.amadeusFlights = protractor_1.$("a[href*='phptravels.gumroad.com/l/nevel']");
        this.amadeusFlightsPopUp = protractor_1.$(".product-row");
        this.aerTicketFlights = protractor_1.$("a[href*='phptravels.gumroad.com/l/ocyro']");
        this.contactUs = protractor_1.$(".main-content a[href*='phptravels.com/contact-us']");
        this.bottomInfo = protractor_1.$$(".bottom .info");
        this.frequentlyAsked = protractor_1.$(".faq .faq-title");
        this.lookingForCustomization = protractor_1.$(".working-in-a-team-container .main-content h2");
        this.worldLeadingBooking = protractor_1.$(".form-group h2");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2luZ1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L3ByaWNpbmdQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFvRTtBQUdwRSxNQUFhLFdBQVc7SUFldEIsWUFBNkIsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsOEJBQThCLENBQUM7UUFDOUMsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFFLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxjQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxjQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxjQUFDLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGNBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBQyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxjQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsY0FBQyxDQUFDLCtDQUErQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGNBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFSyxXQUFXLENBQUMsS0FBMEIsRUFBRSxLQUFxQjs7WUFDakUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFBLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzVDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQUUsU0FBUztnQkFDM0QsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0NBQ0Y7QUF0Q0Qsa0NBc0NDIn0=