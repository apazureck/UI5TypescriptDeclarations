sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller: sap.ui.core.mvc.Controller) {
    Controller.extend("app.controller.App");
});

namespace app.controller {
    import Controller = sap.ui.core.mvc.Controller;
    export class App extends Controller {
        onInit() {
            console.log("Initializing App Controller");
        }
    }
}