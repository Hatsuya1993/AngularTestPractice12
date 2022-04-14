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
}
exports.FlightReservationModulePage = FlightReservationModulePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpZ2h0UmVzZXJ2YXRpb25Nb2R1bGVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9mbGlnaHRSZXNlcnZhdGlvbk1vZHVsZVBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTRDO0FBRTVDLE1BQWEsMkJBQTJCO0lBTXRDLFlBQTZCLFFBQXdCLGNBQUMsQ0FBQyxNQUFNLENBQUM7UUFBakMsVUFBSyxHQUFMLEtBQUssQ0FBNEI7UUFDNUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxpREFBaUQsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUVELG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0NBQ0Y7QUE1QkQsa0VBNEJDIn0=