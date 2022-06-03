"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelModulePage = void 0;
const protractor_1 = require("protractor");
class HotelModulePage {
    constructor($main = protractor_1.$("body")) {
        this.$main = $main;
        this.website = "https://phptravels.com/hotels-module-features/";
        this.configuration = this.$main.$("a[href='/startup/configuration']");
        this.header = this.$main.$("header.BS-header");
        this.hotelsModule = this.$main.$$(".container-outer.grey");
        this.fullCalendar = this.$main.$$(".container-outer.white");
        this.mainFeatures = this.$main.$(".features.grey");
        this.googleMaps = this.$main.$$(".container-outer.white");
        this.banner = this.$main.$(".gradient-cover");
        this.bannerTitle = this.$main.$(".gradient .container .col-12 h2");
        this.bannerDescription = this.$main.$(".gradient .container .col-md-8 p");
        this.viewPricing = this.$main.$("[href*='phptravels.com/order']");
        this.overviewDemoButton = this.$main.$("[href*='https://phptravels.com/demo']");
    }
    getWebsite() {
        return this.website;
    }
    getConfiguration() {
        return this.configuration;
    }
    getHeader() {
        return this.header;
    }
    getHotelsModule() {
        return this.hotelsModule;
    }
    getFullCalendar() {
        return this.fullCalendar;
    }
    getMainFeatures() {
        return this.mainFeatures;
    }
    getGoogleMaps() {
        return this.googleMaps;
    }
    getBanner() {
        return this.banner;
    }
    getBannerTitle() {
        return this.bannerTitle;
    }
    getBannerDescription() {
        return this.bannerDescription;
    }
    getViewPricing() {
        return this.viewPricing;
    }
    getOverviewButton() {
        return this.overviewDemoButton;
    }
}
exports.HotelModulePage = HotelModulePage;
//# sourceMappingURL=hotelModulePage.js.map