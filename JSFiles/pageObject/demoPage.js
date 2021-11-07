"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoPage = void 0;
const protractor_1 = require("protractor");
class DemoPage {
    constructor($main = protractor_1.$("#Main")) {
        this.$main = $main;
        this.website = "https://phptravels.com/demo/";
        this.title = protractor_1.$("#PHPTRAVELS");
        this.subTitle = protractor_1.$("#TRAVEL_TECHNOLOGY_PARTNER");
        this.mainTitle = this.$main.$(".main-title");
        this.navOption = protractor_1.$("nav.clearfix");
        this.demoOption = protractor_1.element(protractor_1.by.linkText("Demo"));
        this.pricingOption = protractor_1.element(protractor_1.by.linkText("Pricing"));
        this.integrationOption = protractor_1.element(protractor_1.by.linkText("Integrations"));
    }
}
exports.DemoPage = DemoPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtb1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L2RlbW9QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFvRTtBQUVwRSxNQUFhLFFBQVE7SUFXakIsWUFBNkIsUUFBUSxjQUFDLENBQUMsT0FBTyxDQUFDO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyw4QkFBOEIsQ0FBQTtRQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFDLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBQ3BELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQTtJQUNqRSxDQUFDO0NBRUo7QUF0QkQsNEJBc0JDIn0=