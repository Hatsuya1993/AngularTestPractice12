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
    constructor($root = protractor_1.$("#PageContainer")) {
        this.$root = $root;
        this.website = "https://phptravels.com/order";
        this.plans = this.$root.$$(".plan-type");
        this.travelPortFlights = this.$root.$("a[href*='phptravels.gumroad.com/l/utzhq']");
        this.travelPortFlightsPopUp = this.$root.$(".product-row");
        this.iframe = this.$root.$(".gumroad-overlay-iframe");
        this.amadeusFlights = this.$root.$("a[href*='phptravels.gumroad.com/l/nevel']");
        this.amadeusFlightsPopUp = this.$root.$(".product-row");
        this.aerTicketFlights = this.$root.$("a[href*='phptravels.gumroad.com/l/ocyro']");
        this.kiwiFlightsPopUp = this.$root.$("a[href*='phptravels.gumroad.com/l/bplom']");
        this.travelPayOutsPopUp = this.$root.$("a[href*='phptravels.gumroad.com/l/vurcy']");
        this.hotelBedsPopUp = this.$root.$("a[href*='phptravels.gumroad.com/l/yqgbc']");
        this.viatorPopUp = this.$root.$("a[href*='phptravels.gumroad.com/l/fxaax']");
        this.CRMHubSpotPopUp = this.$root.$("a[href*='phptravels.gumroad.com/l/fljug']");
        this.agodaPopUp = this.$root.$("a[href*='phptravels.gumroad.com/l/xyznu']");
        this.hotelstonPopUp = this.$root.$("a[href*='phptravels.gumroad.com/l/dqajx']");
        this.customGateWayPopUp = this.$root.$("a[href*='phptravels.gumroad.com/l/kblry']");
        this.setmposPopUp = this.$root.$("a[href*='phptravels.gumroad.com/l/hdrpv']");
        this.rezlive = this.$root.$("a[href*='phptravels.gumroad.com/l/xgles']");
        this.paddleButton = this.$root.$(".item_id_Paddle .btn-primary");
        this.paypalButton = this.$root.$(".item_id_Paypal .btn-primary");
        this.stripeButton = this.$root.$(".item_id_Paypal .btn-primary");
        this.bankButton = this.$root.$(".item_id_Bank .btn-primary");
        this.contactUs = this.$root.$(".main-content a[href*='phptravels.com/contact-us']");
        this.bottomInfo = this.$root.$$(".bottom .info");
        this.frequentlyAsked = this.$root.$(".faq .faq-title");
        this.lookingForCustomization = this.$root.$(".working-in-a-team-container .main-content h2");
        this.worldLeadingBooking = this.$root.$(".form-group h2");
        this.checkoutPopUpForm = this.$root.$(".buy-form-main");
        this.iWantThisButton = this.$root.element(protractor_1.by.buttonText("I want this!"));
        this.buyThisButton = this.$root.element(protractor_1.by.buttonText("Buy this"));
        this.paylaterButton = this.$root.$(".item_id_Pay .btn-primary");
        this.worldLeadingBookingContainer = this.$root.$(".time-saving-approach");
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
//# sourceMappingURL=pricingPage.js.map