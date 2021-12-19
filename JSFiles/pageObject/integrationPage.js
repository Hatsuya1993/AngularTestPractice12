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
    }
}
exports.IntegrationPage = IntegrationPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWdyYXRpb25QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9pbnRlZ3JhdGlvblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTBEO0FBRzFELE1BQWEsZUFBZTtJQU94QixZQUE2QixRQUFRLENBQUMsTUFBTSxDQUFDO1FBQWhCLFVBQUssR0FBTCxLQUFLLENBQVc7UUFFekMsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFBO1FBQ3hELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxjQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLGNBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUE7SUFDckQsQ0FBQztDQUNKO0FBZEQsMENBY0MifQ==