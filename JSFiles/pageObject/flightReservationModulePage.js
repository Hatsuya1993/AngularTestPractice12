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
}
exports.FlightReservationModulePage = FlightReservationModulePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpZ2h0UmVzZXJ2YXRpb25Nb2R1bGVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9mbGlnaHRSZXNlcnZhdGlvbk1vZHVsZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQW9FO0FBRXBFLE1BQWEsMkJBQTJCO0lBWXRDLFlBQTZCLFFBQXdCLGNBQUMsQ0FBQyxNQUFNLENBQUM7UUFBakMsVUFBSyxHQUFMLEtBQUssQ0FBNEI7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxpREFBaUQsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSwyQ0FBMkMsQ0FBQyxDQUFDLENBQUM7UUFDbkgsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNwQyxDQUFDO0NBQ0Y7QUEzREQsa0VBMkRDIn0=