import {$$, ElementArrayFinder, ElementFinder, $, element, by} from "protractor";


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

  constructor(private readonly $main = ("#Main")) {
    this.website = "https://phptravels.com/order";
    this.plans = $$(".plan-type");
    this.travelPortFlights = $("a[href*='phptravels.gumroad.com/l/utzhq']");
    this.travelPortFlightsPopUp = $(".product-row");
    this.iframe = $(".gumroad-overlay-iframe");
    this.amadeusFlights = $("a[href*='phptravels.gumroad.com/l/nevel']");
    this.amadeusFlightsPopUp = $(".product-row");
    this.aerTicketFlights = $("a[href*='phptravels.gumroad.com/l/ocyro']");
    this.kiwiFlightsPopUp = $("a[href*='phptravels.gumroad.com/l/bplom']");
    this.travelPayOutsPopUp = $("a[href*='phptravels.gumroad.com/l/vurcy']");
    this.hotelBedsPopUp = $("a[href*='phptravels.gumroad.com/l/yqgbc']");
    this.viatorPopUp = $("a[href*='phptravels.gumroad.com/l/fxaax']");
    this.CRMHubSpotPopUp = $("a[href*='phptravels.gumroad.com/l/fljug']");
    this.agodaPopUp = $("a[href*='phptravels.gumroad.com/l/xyznu']");
    this.hotelstonPopUp = $("a[href*='phptravels.gumroad.com/l/dqajx']");
    this.customGateWayPopUp = $("a[href*='phptravels.gumroad.com/l/kblry']");
    this.setmposPopUp = $("a[href*='phptravels.gumroad.com/l/hdrpv']");
    this.rezlive = $("a[href*='phptravels.gumroad.com/l/xgles']");
    this.paypalButton = $(".item_id_Paypal .btn-primary");
    this.stripeButton = $(".item_id_Paypal .btn-primary");
    this.contactUs = $(".main-content a[href*='phptravels.com/contact-us']");
    this.bottomInfo = $$(".bottom .info");
    this.frequentlyAsked = $(".faq .faq-title");
    this.lookingForCustomization = $(".working-in-a-team-container .main-content h2");
    this.worldLeadingBooking = $(".form-group h2");
    this.checkoutPopUpForm = $(".buy-form-main");
    this.iWantThisButton = element(by.buttonText("I want this!"));
    this.buyThisButton = element(by.buttonText("Buy this"));
  }

  async getAllPlans(data1 : ElementArrayFinder, data2 : Array<String>) : Promise<Boolean> {
    for (let i = 0; i < await data1.count(); i++) {
      if (data2.includes(await data1.get(i).getText())) continue;
      return false;
    }
    return true;
  }
}
