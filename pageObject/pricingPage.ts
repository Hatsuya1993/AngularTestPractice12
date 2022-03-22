import {ElementArrayFinder, ElementFinder, $, by} from "protractor";


export class PricingPage {
  website : string;
  plans : ElementArrayFinder;
  travelPortFlights : ElementFinder;
  travelPortFlightsPopUp : ElementFinder;
  amadeusFlights : ElementFinder;
  amadeusFlightsPopUp : ElementFinder;
  aerTicketFlights : ElementFinder;
  kiwiFlightsPopUp: ElementFinder;
  travelPayOutsPopUp : ElementFinder;
  viatorPopUp : ElementFinder;
  rezlive : ElementFinder;
  hotelstonPopUp : ElementFinder;
  hotelBedsPopUp : ElementFinder;
  CRMHubSpotPopUp : ElementFinder;
  customGateWayPopUp : ElementFinder;
  setmposPopUp : ElementFinder;
  agodaPopUp : ElementFinder;
  paypalButton : ElementFinder;
  iframe : ElementFinder;
  contactUs : ElementFinder;
  bottomInfo : ElementArrayFinder;
  frequentlyAsked : ElementFinder;
  lookingForCustomization : ElementFinder;
  worldLeadingBooking : ElementFinder;
  checkoutPopUpForm : ElementFinder;
  iWantThisButton : ElementFinder;
  buyThisButton : ElementFinder;
  stripeButton : ElementFinder;
  paddleButton : ElementFinder;
  bankButton : ElementFinder;
  paylaterButton : ElementFinder;
  worldLeadingBookingContainer : ElementFinder;

  constructor(private readonly $root : ElementFinder = $("#PageContainer")) {
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
    this.iWantThisButton = this.$root.element(by.buttonText("I want this!"));
    this.buyThisButton = this.$root.element(by.buttonText("Buy this"));
    this.paylaterButton = this.$root.$(".item_id_Pay .btn-primary");
    this.worldLeadingBookingContainer = this.$root.$(".time-saving-approach");
  }

  async getAllPlans(data1 : ElementArrayFinder, data2 : Array<String>) : Promise<Boolean> {
    for (let i = 0; i < await data1.count(); i++) {
      if (data2.includes(await data1.get(i).getText())) continue;
      return false;
    }
    return true;
  }
}
