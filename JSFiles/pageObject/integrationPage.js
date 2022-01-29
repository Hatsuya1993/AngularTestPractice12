"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationPage = void 0;
const protractor_1 = require("protractor");
class IntegrationPage {
    constructor($main = ("main")) {
        this.$main = $main;
        this.pageContents = protractor_1.element(protractor_1.by.css(".container.module"));
        this.websiteTravelPort = protractor_1.$("a[href*='travelport']");
        this.travelPortDoc = protractor_1.$("a[href*='hotels/travelport']");
        this.travelPayOut = protractor_1.$("a[href*='travelpayouts']");
        this.modules = protractor_1.$$(".module h4");
        this.hotelBeds = protractor_1.$("a[href*=hotelbeds]");
        this.hotelBedsDoc = protractor_1.$("a[href*='hotels/hotelbeds']");
        this.hotelston = protractor_1.$("a[href*=hotelston]");
        this.hotelstonDoc = protractor_1.$("a[href*='hotels/hotelston']");
        this.expedia = protractor_1.$("a[href*='expedia.com']");
        this.viator = protractor_1.$("a[href*='viator']");
        this.viatorDoc = protractor_1.$("a[href*='tours/viator']");
        this.cartrawler = protractor_1.$("a[href*='cartrawler']");
        this.cartrawlerDoc = protractor_1.$("a[href*='cars/cartrawler']");
        this.kititaxi = protractor_1.$("a[href*='kiwitaxi']");
        this.iway = protractor_1.$("a[href='http://www.iway.io/']");
    }
}
exports.IntegrationPage = IntegrationPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9pbnRlZ3JhdGlvblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQWlGO0FBRWpGLE1BQWEsZUFBZTtJQWtCMUIsWUFBNkIsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUFoQixVQUFLLEdBQUwsS0FBSyxDQUFXO1FBQzNDLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxjQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBQ0Y7QUFwQ0QsMENBb0NDIn0=