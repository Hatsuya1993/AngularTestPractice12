import {$$, ElementArrayFinder, ElementFinder, $} from "protractor";


export class PricingPage {
  website : string;
  plans : ElementArrayFinder;
  travelPortFlights : ElementFinder;
  travelPortFlightsPopUp : ElementFinder;
  amadeusFlights : ElementFinder;
  amadeusFlightsPopUp : ElementFinder;
  iframe : ElementFinder;

  constructor(private readonly $main = ("#Main")) {
    this.website = "https://phptravels.com/order";
    this.plans = $$(".plan-type");
    this.travelPortFlights = $("a[href*='phptravels.gumroad.com/l/utzhq']");
    this.travelPortFlightsPopUp = $(".product-row");
    this.iframe = $(".gumroad-overlay-iframe");
    this.amadeusFlights = $("a[href*='phptravels.gumroad.com/l/nevel']");
    this.amadeusFlightsPopUp = $(".product-row");
  }

  async getAllPlans(data1 : ElementArrayFinder, data2 : Array<String>) : Promise<Boolean> {
    for (let i = 0; i < await data1.count(); i++) {
      if (data2.includes(await data1.get(i).getText())) continue;
      return false;
    }
    return true;
  }
}
