"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightReservationModulePage = void 0;
const protractor_1 = require("protractor");
class FlightReservationModulePage {
    constructor($main = protractor_1.$("body")) {
        this.$main = $main;
        this.website = "https://phptravels.com/flights-module-features/";
        this.header = this.$main.$(".BS-header");
        this.headerTitle = this.$main.$("#header-title");
        this.headerDescription = this.$main.$("#header-description");
        this.options = this.$main.$$(".container-outer[style='overflow:hidden; ']");
        this.optionsOneTitle = this.$main.element(protractor_1.by.cssContainingText("h2", "Search filter and reserve flights tickets"));
        this.optionsOneDescription = this.$main.$$("div.col-md-5").get(0).$("p");
        this.optionsTwoTitle = this.$main.element(protractor_1.by.cssContainingText("h2", "Flights booking module"));
        this.optionsTwoDescription = this.$main.$$("div.col-md-5").get(1).$("p");
        this.optionsThreeTitle = this.$main.element(protractor_1.by.cssContainingText("h2", "Complete flights back-office system"));
        this.optionsThreeDescription = this.$main.$$("div.col-md-5").get(2).$("p");
        this.features = this.$main.element(protractor_1.by.cssContainingText("h2", "Main Features"));
        this.featuresContainer = this.$main.$(".features");
        this.featuresOptions = this.$main.$(".row.justify-content-center.text-center");
        this.featuresOptionsEach = this.featuresOptions.$$("div .container");
        this.featuresOptionsOneTitle = this.$main.element(protractor_1.by.cssContainingText("h5", "Flight Listing"));
        this.featuresOptionsTwoTitle = this.$main.element(protractor_1.by.cssContainingText("h5", "Last Minutes Deals"));
        this.featuresOptionsThreeTitle = this.$main.element(protractor_1.by.cssContainingText("h5", "Popular Flights"));
        this.featuresOptionsOneDescription = this.featuresOptionsOneTitle.element(protractor_1.by.xpath("following-sibling::p"));
        this.featuresOptionsTwoDescription = this.featuresOptionsTwoTitle.element(protractor_1.by.xpath("following-sibling::p"));
        this.featuresOptionsThreeDescription = this.featuresOptionsThreeTitle.element(protractor_1.by.xpath("following-sibling::p"));
        this.completeFlightBookingSystem = this.$main.element(protractor_1.by.cssContainingText("h2", "Complete flight booking system"));
        this.completeFlightBookingSystemDescription = this.completeFlightBookingSystem.element(protractor_1.by.xpath("following-sibling::p"));
    }
    getWebsite() {
        return this.website;
    }
    getHeader() {
        return this.header;
    }
    getHeaderTitle() {
        return this.headerTitle;
    }
    getHeaderDescription() {
        return this.headerDescription;
    }
    getOptions() {
        return this.options;
    }
    getOptionsOneTitle() {
        return this.optionsOneTitle;
    }
    getOptionsOneDescription() {
        return this.optionsOneDescription;
    }
    getOptionsTwoTitle() {
        return this.optionsTwoTitle;
    }
    getOptionsTwoDescription() {
        return this.optionsTwoDescription;
    }
    getOptionsThreeTitle() {
        return this.optionsThreeTitle;
    }
    getOptionsThreeDescription() {
        return this.optionsThreeDescription;
    }
    getFeatures() {
        return this.features;
    }
    getFeaturesContainer() {
        return this.featuresContainer;
    }
    getFeaturesOptions() {
        return this.featuresOptions;
    }
    getFeaturesOptionsEach() {
        return this.featuresOptionsEach;
    }
    getFeaturesOptionsOneTitle() {
        return this.featuresOptionsOneTitle;
    }
    getFeaturesOptionsTwoTitle() {
        return this.featuresOptionsTwoTitle;
    }
    getFeaturesOptionsThreeTitle() {
        return this.featuresOptionsThreeTitle;
    }
    getFeaturesOptionsOneDescrition() {
        return this.featuresOptionsOneDescription;
    }
    getFeaturesOptionsTwoDescription() {
        return this.featuresOptionsTwoDescription;
    }
    getFeaturesOptionsThreeDescription() {
        return this.featuresOptionsThreeDescription;
    }
    getCompleteFlightBookingSystem() {
        return this.completeFlightBookingSystem;
    }
    getCompleteFlightBookingSystemDescription() {
        return this.completeFlightBookingSystemDescription;
    }
}
exports.FlightReservationModulePage = FlightReservationModulePage;
//# sourceMappingURL=flightReservationModulePage.js.map