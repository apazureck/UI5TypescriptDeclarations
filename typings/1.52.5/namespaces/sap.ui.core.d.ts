declare namespace sap.ui.core {
    // Methods
    /**
        * Applies the support for custom style classes on the prototype of a `{}`.
     * 
     * All controls (subclasses of `{}`) provide the support custom style classes. The control API provides functions to the application which allow it to add, remove or change style classes for the control. In general, this option is not available for elements because elements do not necessarily have a representation in the DOM.
     * 
     * This function can be used by a control developer to explicitly enrich the API of his/her element implementation with the API functions for the custom style class support. It must be called on the prototype of the element.
     * 
     * ** Usage Example: ** `sap.ui.define(['sap/ui/core/Element', 'sap/ui/core/CustomStyleClassSupport'], function(Element, CustomStyleClassSupport) {
     *    "use strict";
     *    var MyElement = Element.extend("my.MyElement", {
     *       metadata : {
     *          //...
     *       }
     *       //...
     *    });
     * 
     *    CustomStyleClassSupport.apply(MyElement.prototype);
     * 
     *    return MyElement;
     * }, true);`
     * 
     * Furthermore, the function `oRenderManager.writeClasses(oElement);` ({@link sap.ui.core.RenderManager#writeClasses}) must be called within the renderer of the control to which the element belongs, when writing the root tag of the element. This ensures the classes are written to the HTML.
     * 
     * This function adds the following functions to the elements prototype:  * `addStyleClass`: {@link {}#addStyleClass} * `removeStyleClass`: {@link {}#removeStyleClass} * `toggleStyleClass`: {@link {}#toggleStyleClass} * `hasStyleClass`: {@link {}#hasStyleClass}  In addition the clone function of the element is extended to ensure that the custom style classes are also available on the cloned element.
     * 
     * ** Note: ** This function can only be used * within * control development. An application cannot add style class support on existing elements by calling this function.
        */
    export function CustomStyleClassSupport(): any;
}