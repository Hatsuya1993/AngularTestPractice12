import {ElementFinder, $, ElementArrayFinder} from "protractor";

export class HotelModulePage {
  readonly website : string;
  readonly configuration : ElementFinder;
  readonly header : ElementFinder;
  readonly hotelsModule : ElementArrayFinder;

  constructor(private readonly $main : ElementFinder = $("body")) {
    this.website = "https://phptravels.com/hotels-module-features/";
    this.configuration = this.$main.$("a[href='/startup/configuration']");
    this.header = this.$main.$("header.BS-header");
    this.hotelsModule = this.$main.$$(".container-outer.grey");
  }
}
