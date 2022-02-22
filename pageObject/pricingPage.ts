import {$$, ElementArrayFinder, ElementFinder, $} from "protractor";


export class PricingPage {
  website : string;
  plans : ElementArrayFinder;
  travelPortFlights : ElementFinder;
  travelPortFlightsPopUp : ElementFinder;
  amadeusFlights : ElementFinder;
  amadeusFlightsPopUp : ElementFinder;
  aerTicketFlights : ElementFinder;
  iframe : ElementFinder;
  contactUs : ElementFinder;
  bottomInfo : ElementArrayFinder;
  frequentlyAsked : ElementFinder;
  lookingForCustomization : ElementFinder;
  worldLeadingBooking : ElementFinder;

  constructor(private readonly $main = ("#Main")) {
    this.website = "https://phptravels.com/order";
    this.plans = $$(".plan-type");
    this.travelPortFlights = $("a[href*='phptravels.gumroad.com/l/utzhq']");
    this.travelPortFlightsPopUp = $(".product-row");
    this.iframe = $(".gumroad-overlay-iframe");
    this.amadeusFlights = $("a[href*='phptravels.gumroad.com/l/nevel']");
    this.amadeusFlightsPopUp = $(".product-row");
    this.aerTicketFlights = $("a[href*='phptravels.gumroad.com/l/ocyro']");
    this.contactUs = $(".main-content a[href*='phptravels.com/contact-us']");
    this.bottomInfo = $$(".bottom .info");
    this.frequentlyAsked = $(".faq .faq-title");
    this.lookingForCustomization = $(".working-in-a-team-container .main-content h2");
    this.worldLeadingBooking = $(".form-group h2");
  }

  async getAllPlans(data1 : ElementArrayFinder, data2 : Array<String>) : Promise<Boolean> {
    for (let i = 0; i < await data1.count(); i++) {
      if (data2.includes(await data1.get(i).getText())) continue;
      return false;
    }
    return true;
  }
}
