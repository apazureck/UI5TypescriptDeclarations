# UI5TypescriptDeclarations
Typescript declarations for UI5

## Usage

Add it to your typings folder. The declarations are ambient, so you have to use for example `import Button = sap.m.Button` instead of `import { Button } from "sap.m"`. Furthermore the rest of your project has to be ambient, so you cannot use export in the root level of your application.

You can use typescript classes to get full intellisense (for example in vscode):

**"Classical" approach**

```typescript
sap.ui.define([
    "sap/ui/core/mvc/Controller"
    , "sap/ui/model/json/JSONModel"
    , "sap/m/MessageToast"
], function (BaseController, JSONModel, MessageToast) {
    "use strict";

    return BaseController.extend("my.application.frontend.controller.hosts.EditHost", {
        onInit: function () {
            this.component = this.getOwnerComponent();
            this.bus = this.component.getEventBus();
        },

        /* =========================================================== */
        /* event handlers                                              */
        /* =========================================================== */

        /**
         * Navigates back to the Master
         * @function
         */
        onNavPress : function () {
            this.myNavBack("hosts");
        },
    });
});
```

**Typescript class**

```typescript
sap.ui.define([
    "sap/ui/core/mvc/Controller"
    , "sap/ui/model/json/JSONModel"
    , "sap/m/MessageToast"
], function (BaseController, JSONModel, MessageToast) {
    "use strict";

    return BaseController.extend("my.application.frontend.controller.hosts.EditHost", {
});

namespace my.application.frontend.controller.hosts {

  // put your imports or local declarations here
  interface Test {
    prop1: number
  }
  
  import JSONModel = sap.ui.model.json.JSONModel;
  
  class EditHost extends sap.ui.core.mvc.Controller {
    onInit() {
      this.component = this.getOwnerComponent();
      this.bus = this.component.getEventBus();
      let model = new JSONModel<Test>();
    }
    
    onNavPress() {
     this.myNavBack("hosts");
    }
  }
}
```
