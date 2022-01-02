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
    }
}
exports.IntegrationPage = IntegrationPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9pbnRlZ3JhdGlvblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQWtGO0FBR2xGLE1BQWEsZUFBZTtJQWV4QixZQUE2QixRQUFRLENBQUMsTUFBTSxDQUFDO1FBQWhCLFVBQUssR0FBTCxLQUFLLENBQVc7UUFFekMsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFFLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsT0FBTyxHQUFHLGNBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0NBQ0o7QUE5QkQsMENBOEJDIn0=