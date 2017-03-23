sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
   "use strict";
   return UIComponent.extend("app.Component", {
      metadata : {
            manifest: "json"
      },
      init : function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);
         console.log("Initialized Component");
      }
   });
});

sap.ui.define(["sap/ui/core/mvc/Controller",
      // Insert your used ui5 elements here to get them loaded
], function (Controller: sap.ui.core.mvc.Controller) {
    "use strict";
    return Controller.extend("namespace.controller.name");
});