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
}
exports.FlightReservationModulePage = FlightReservationModulePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpZ2h0UmVzZXJ2YXRpb25Nb2R1bGVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9mbGlnaHRSZXNlcnZhdGlvbk1vZHVsZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQW9FO0FBRXBFLE1BQWEsMkJBQTJCO0lBaUJ0QyxZQUE2QixRQUF3QixjQUFDLENBQUMsTUFBTSxDQUFDO1FBQWpDLFVBQUssR0FBTCxLQUFLLENBQTRCO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsaURBQWlELENBQUM7UUFDakUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsNkNBQTZDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsMkNBQTJDLENBQUMsQ0FBQyxDQUFDO1FBQ25ILElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7UUFDaEcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUscUNBQXFDLENBQUMsQ0FBQyxDQUFDO1FBQy9HLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDO0lBRUQsd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3BDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCx3QkFBd0I7UUFDdEIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDcEMsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDO0lBQ3RDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBekZELGtFQXlGQyJ9