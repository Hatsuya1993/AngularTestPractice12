import {ElementFinder, $} from "protractor";

export class HotelModulePage {
  website : string;
  configuration : ElementFinder;
  header : ElementFinder;

  constructor(private readonly $main : ElementFinder = $("body")) {
    this.website = "https://phptravels.com/hotels-module-features/";
    this.configuration = this.$main.$("a[href='/startup/configuration']");
    this.header = this.$main.$("header.BS-header");
  }
}
