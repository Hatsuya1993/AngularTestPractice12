import {$$, ElementArrayFinder} from "protractor";


export class PricingPage {
  website : string;
  plans : ElementArrayFinder;

  constructor(private readonly $main = ("#Main")) {
    this.website = "https://phptravels.com/order";
    this.plans = $$(".plan-type");
  }

  async getAllPlans(data1 : ElementArrayFinder, data2 : Array<String>) : Promise<Boolean> {
    for (let i = 0; i < await data1.count(); i++) {
      if (data2.includes(await data1.get(i).getText())) continue;
      return false;
    }
    return true;
  }
}
