sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller: sap.ui.core.mvc.Controller) {
    Controller.extend("app.controller.pages.FirstPage");
});

namespace app.controller.pages {
    import Controller = sap.ui.core.mvc.Controller;
    export class FirstPage extends Controller {
        onInit() {
            console.log("Initializing FirstPage Controller");
            console.log("Testchange");
        }

        testButtonPressed() {
            
        }
    }
}