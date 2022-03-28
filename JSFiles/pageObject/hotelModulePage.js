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
}
exports.HotelModulePage = HotelModulePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWxNb2R1bGVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9ob3RlbE1vZHVsZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQWdFO0FBRWhFLE1BQWEsZUFBZTtJQVExQixZQUE2QixRQUF3QixjQUFDLENBQUMsTUFBTSxDQUFDO1FBQWpDLFVBQUssR0FBTCxLQUFLLENBQTRCO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsZ0RBQWdELENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Q0FDRjtBQXhDRCwwQ0F3Q0MifQ==