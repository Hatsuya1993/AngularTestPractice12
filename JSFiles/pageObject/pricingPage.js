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
        this.kiwiFlightsPopUp = protractor_1.$("a[href*='phptravels.gumroad.com/l/bplom']");
        this.travelPayOutsPopUp = protractor_1.$("a[href*='phptravels.gumroad.com/l/vurcy']");
        this.hotelBedsPopUp = protractor_1.$("a[href*='phptravels.gumroad.com/l/yqgbc']");
        this.viatorPopUp = protractor_1.$("a[href*='phptravels.gumroad.com/l/fxaax']");
        this.CRMHubSpotPopUp = protractor_1.$("a[href*='phptravels.gumroad.com/l/fljug']");
        this.agodaPopUp = protractor_1.$("a[href*='phptravels.gumroad.com/l/xyznu']");
        this.hotelstonPopUp = protractor_1.$("a[href*='phptravels.gumroad.com/l/dqajx']");
        this.customGateWayPopUp = protractor_1.$("a[href*='phptravels.gumroad.com/l/kblry']");
        this.setmposPopUp = protractor_1.$("a[href*='phptravels.gumroad.com/l/hdrpv']");
        this.rezlive = protractor_1.$("a[href*='phptravels.gumroad.com/l/xgles']");
        this.paypalButton = protractor_1.$(".item_id_Paypal .btn-primary");
        this.contactUs = protractor_1.$(".main-content a[href*='phptravels.com/contact-us']");
        this.bottomInfo = protractor_1.$$(".bottom .info");
        this.frequentlyAsked = protractor_1.$(".faq .faq-title");
        this.lookingForCustomization = protractor_1.$(".working-in-a-team-container .main-content h2");
        this.worldLeadingBooking = protractor_1.$(".form-group h2");
        this.checkoutPopUpForm = protractor_1.$(".buy-form-main");
        this.iWantThisButton = protractor_1.element(protractor_1.by.buttonText("I want this!"));
        this.buyThisButton = protractor_1.element(protractor_1.by.buttonText("Buy this"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2luZ1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L3ByaWNpbmdQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpRjtBQUdqRixNQUFhLFdBQVc7SUE2QnRCLFlBQTZCLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFBakIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLDhCQUE4QixDQUFDO1FBQzlDLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFDLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsc0JBQXNCLEdBQUcsY0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFDLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsY0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxjQUFDLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsY0FBQyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGNBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBQyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFDLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLEdBQUcsY0FBQyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFDLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsY0FBQyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFDLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQUMsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBQyxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFDLENBQUMsb0RBQW9ELENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsVUFBVSxHQUFHLGVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxjQUFDLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsbUJBQW1CLEdBQUcsY0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUssV0FBVyxDQUFDLEtBQTBCLEVBQUUsS0FBcUI7O1lBQ2pFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUFFLFNBQVM7Z0JBQzNELE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtDQUNGO0FBbEVELGtDQWtFQyJ9