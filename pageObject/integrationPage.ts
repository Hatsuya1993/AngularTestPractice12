import {element, ElementFinder, $, by, ElementArrayFinder, $$} from "protractor";

export class IntegrationPage {
  pageContents : ElementFinder;
  websiteTravelPort : ElementFinder;
  travelPortDoc : ElementFinder;
  travelPayOut : ElementFinder;
  modules : ElementArrayFinder;
  hotelBeds : ElementFinder;
  hotelBedsDoc : ElementFinder;
  hotelston : ElementFinder;
  hotelstonDoc : ElementFinder;
  expedia : ElementFinder;
  viator : ElementFinder;
  viatorDoc : ElementFinder;
  cartrawler : ElementFinder;
  cartrawlerDoc : ElementFinder;
  kititaxi : ElementFinder;
  iway : ElementFinder;

  constructor(private readonly $main = ("main")) {
    this.pageContents = element(by.css(".container.module"));
    this.websiteTravelPort = $("a[href*='travelport']");
    this.travelPortDoc = $("a[href*='hotels/travelport']");
    this.travelPayOut = $("a[href*='travelpayouts']");
    this.modules = $$(".module h4");
    this.hotelBeds = $("a[href*=hotelbeds]");
    this.hotelBedsDoc = $("a[href*='hotels/hotelbeds']");
    this.hotelston = $("a[href*=hotelston]");
    this.hotelstonDoc = $("a[href*='hotels/hotelston']");
    this.expedia = $("a[href*='expedia.com']");
    this.viator = $("a[href*='viator']");
    this.viatorDoc = $("a[href*='tours/viator']");
    this.cartrawler = $("a[href*='cartrawler']");
    this.cartrawlerDoc = $("a[href*='cars/cartrawler']");
    this.kititaxi = $("a[href*='kiwitaxi']");
    this.iway = $("a[href='http://www.iway.io/']");
  }
}
