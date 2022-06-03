"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationPage = void 0;
const protractor_1 = require("protractor");
class IntegrationPage {
    constructor($main = protractor_1.$("main")) {
        this.$main = $main;
        this.pageContents = this.$main.element(protractor_1.by.css(".container.module"));
        this.websiteTravelPort = this.$main.$("a[href*='travelport']");
        this.travelPortDoc = this.$main.$("a[href*='hotels/travelport']");
        this.travelPayOut = this.$main.$("a[href*='travelpayouts']");
        this.modules = this.$main.$$(".module h4");
        this.hotelBeds = this.$main.$("a[href*=hotelbeds]");
        this.hotelBedsDoc = this.$main.$("a[href*='hotels/hotelbeds']");
        this.hotelston = this.$main.$("a[href*=hotelston]");
        this.hotelstonDoc = this.$main.$("a[href*='hotels/hotelston']");
        this.expedia = this.$main.$("a[href*='expedia.com']");
        this.viator = this.$main.$("a[href*='viator']");
        this.viatorDoc = this.$main.$("a[href*='tours/viator']");
        this.cartrawler = this.$main.$("a[href*='cartrawler']");
        this.cartrawlerDoc = this.$main.$("a[href*='cars/cartrawler']");
        this.kititaxi = this.$main.$("a[href*='kiwitaxi']");
        this.iway = this.$main.$("a[href='http://www.iway.io/']");
    }
}
exports.IntegrationPage = IntegrationPage;
//# sourceMappingURL=integrationPage.js.map