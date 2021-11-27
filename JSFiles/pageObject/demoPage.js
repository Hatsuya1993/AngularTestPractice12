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
        this.docsOption = protractor_1.element(protractor_1.by.linkText("Docs"));
        this.blogOption = protractor_1.element(protractor_1.by.linkText("Blog"));
        this.loginOption = protractor_1.element(protractor_1.by.linkText("Login"));
        this.facebookIcon = protractor_1.element(protractor_1.by.css("a[href='https://www.facebook.com/phptravels/']"));
        this.youtubeIcon = protractor_1.element(protractor_1.by.css("a[href='https://www.youtube.com/c/phptravelsofficial']"));
        this.twitterIcon = protractor_1.element(protractor_1.by.css("a[href='https://www.twitter.com/phptravels']"));
        this.linkedIn = protractor_1.element(protractor_1.by.css("a[href='https://www.linkedin.com/company/phptravels/']"));
        this.instagramIcon = protractor_1.element(protractor_1.by.css("a[href='https://www.instagram.com/phptravels_/']"));
        this.deskTopLink = protractor_1.element(protractor_1.by.linkText("Desktop App"));
        this.mobileAppLink = protractor_1.element(protractor_1.by.linkText("Mobile Apps"));
        this.featuresLink = protractor_1.element(protractor_1.by.linkText("Features"));
        this.requirementsLink = protractor_1.element(protractor_1.by.linkText("Requirements"));
        this.technologyLink = protractor_1.element(protractor_1.by.linkText("Technology"));
    }
}
exports.DemoPage = DemoPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtb1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0L2RlbW9QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUFvRTtBQUVwRSxNQUFhLFFBQVE7SUF3QmpCLFlBQTZCLFFBQVEsY0FBQyxDQUFDLE9BQU8sQ0FBQztRQUFsQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsOEJBQThCLENBQUE7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFDLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQTtRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzVDLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7UUFDN0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO1FBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFBO1FBQ3JGLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdEQUF3RCxDQUFDLENBQUMsQ0FBQTtRQUM1RixJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUE7UUFDbEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0RBQXdELENBQUMsQ0FBQyxDQUFBO1FBQ3pGLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsQ0FBQTtRQUN4RixJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtRQUNwRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7UUFDNUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0NBRUo7QUFoREQsNEJBZ0RDIn0=