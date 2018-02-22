declare namespace sap.ui.core.Renderer {
    // Methods
    /**
        * Creates a new static renderer class that extends a given renderer.
     * 
     * This method can be used with two signatures that are explained below. In both variants, the returned renderer class inherits all properties (methods, fields) from the given parent renderer class. Both variants also add an 'extend' method to the created renderer class that behaves like the new signature of this `Renderer.extend` method, but creates subclasses of the new class, not of `sap.ui.core.Renderer`.
     * 
     * ** New Signature **<br> In the new signature variant, two parameters must be given: a qualified name for the new renderer (its class name), and an optional object literal that contains methods or fields to be added to the new renderer class.
     * 
     * This signature has been designed to resemble the class extension mechanism as provided by {@link sap.ui.base.Object.extend Object.extend}.
     * 
     * `sap.ui.define(['sap/ui/core/Renderer'],
     *     function(Renderer) {
     *     "use strict";
     * 
     *     var LabelRenderer = Renderer.extend('sap.m.LabelRenderer', {
     *         render: function(oRM, oControl) {
     * 
     *             renderPreamble(oRM, oControl);
     * 
     *             // implementation core renderer logic here
     * 
     *             renderPostamble(oRM, oControl);
     * 
     *         },
     * 
     *         renderPreamble : function(oRM, oControl) {
     *         ...
     *         },
     * 
     *         renderPostamble : function(oRM, oControl) {
     *         ...
     *         }
     * 
     *     });
     * 
     *     return LabelRenderer;
     * });`
     * 
     * The extension of Renderers works across multiple levels. A FancyLabelRenderer can extend the above LabelRenderer:
     * 
     * `sap.ui.define(['sap/m/LabelRenderer'],
     *     function(LabelRenderer) {
     *     "use strict";
     * 
     *     var FancyLabelRenderer = LabelRenderer.extend('sap.mylib.FancyLabelRenderer', {
     *         render: function(oRM, oControl) {
     * 
     *             // call base renderer
     *             LabelRenderer.renderPreamble(oRM, oControl);
     * 
     *             // ... do your own fancy rendering here
     * 
     *             // call base renderer again
     *             LabelRenderer.renderPostamble(oRM, oControl);
     *         }
     *     });
     * 
     *     return FancyLabelRenderer;
     * });`
     * 
     * ** Note: ** the new signature no longer requires the `bExport` flag to be set for the enclosing {@link sap.ui.define} call. The Renderer base class takes care of the necessary global export of the renderer. This allows Non-SAP developers to write a renderer that complies with the documented restriction for `sap.ui.define` (no use of bExport = true outside sap.ui.core projects).
     * 
     * ** Deprecated Signature **<br> The deprecated old signature expects just one parameter: a renderer that should be extended. With that signature the renderer can't be exported globally as the name of the renderer class is not known.
     * 
     * For compatibility reasons, the class created by the deprecated signature contains a property `_super` that references the parent class. It shouldn't be used by applications / control developers as it doesn't work reliably for deeper inheritance chains: if the old variant of `Renderer.extend` is used on two or more levels of the inheritance hierarchy, the `_super` property of the resulting renderer class will always point to the implementation of the base renderer of the last call to extend. Instead of using `this._super`, renderer implementations should use the new signature variant and access the base implementation of a method via the AMD reference to the base renderer (as shown in the FancyLabelRenderer example above).
        */
    export function extend(vName: string | {}, oRendererInfo: {}): {};
}