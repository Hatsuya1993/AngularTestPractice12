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
    }
}
exports.HotelModulePage = HotelModulePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG90ZWxNb2R1bGVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9ob3RlbE1vZHVsZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTRDO0FBRTVDLE1BQWEsZUFBZTtJQUsxQixZQUE2QixRQUF3QixjQUFDLENBQUMsTUFBTSxDQUFDO1FBQWpDLFVBQUssR0FBTCxLQUFLLENBQTRCO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsZ0RBQWdELENBQUM7UUFDaEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7QUFWRCwwQ0FVQyJ9