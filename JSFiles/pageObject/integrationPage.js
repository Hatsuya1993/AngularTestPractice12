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
    }
}
exports.IntegrationPage = IntegrationPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9pbnRlZ3JhdGlvblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQWtGO0FBR2xGLE1BQWEsZUFBZTtJQWtCeEIsWUFBNkIsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUFoQixVQUFLLEdBQUwsS0FBSyxDQUFXO1FBRXpDLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxjQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQTtRQUN0RCxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxPQUFPLEdBQUcsZUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUE7UUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDNUMsQ0FBQztDQUNKO0FBcENELDBDQW9DQyJ9