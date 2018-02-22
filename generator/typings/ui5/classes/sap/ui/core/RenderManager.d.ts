declare module 'sap/ui/core/RenderManager' {
    import { Control } from 'sap/ui/core/Control';
    import { Element } from 'sap/ui/core/Element';
    import { Configuration } from 'sap/ui/core/Configuration';


    export interface IRenderManagerSettings {
    }

    /**
    
    */
    export class RenderManager {


        /**
            * Adds a class to the class collection if the name is not empty or null. The class collection is flushed if it is written to the buffer using {@link #writeClasses}
        */
        public addClass(sName: string): this;

        /**
            * Adds a style property to the style collection if the value is not empty or null The style collection is flushed if it is written to the buffer using {@link #writeStyle}
        */
        public addStyle(sName: string, value: string | number | number): this;

        /**
            * Cleans up the rendering state of the given control without rendering it.
         * 
         * A control is responsible for the rendering of all its child controls. But in some cases it makes sense that a control only renders a subset of its children based on some criterion. For example, a typical carousel control might, for performance reasons, only render the currently visible children (and maybe some child before and after the visible area to facilitate slide-in / slide-out animations), but not all children. This leads to situations where a child had been rendered before, but shouldn't be rendered anymore after an update of the carousel's position. The DOM related state of that child then must be cleaned up correctly, e.g. by de-registering resize handlers or native event handlers. `cleanupControlWithoutRendering` helps with that task by triggering the same activities that the normal rendering triggers before the rendering of a control (e.g. it fire the `BeforeRendering` event). It just doesn't call the renderer and the control will not receive an `AfterRendering` event.
         * 
         * The following example shows how `renderControl` and `cleanupControlWithoutRendering` should be used:
         * 
         * `CarouselRenderer.render = function(rm, oCarousel){
         * 
         *     ...
         * 
         *     oCarousel.getPages().forEach( oPage ) {
         *        if ( oCarousel.isPageToBeRendered( oPage ) ) {
         *           rm.renderControl( oPage ); // onBeforeRendering, render, later onAfterRendering
         *        } else {
         *           rm.cleanupControlWithoutRendering( oPage ); // onBeforeRendering
         *        }
         *     }
         * 
         *     ...
         * 
         *   };`
         * 
         * ###DOM Removal The method does not remove the DOM of the given control. The caller of this method has to take care to remove it at some later point in time. It should indeed be * later *, not * before * as the `onBeforeRendering` hook of the control might need access to the old DOM for a proper cleanup.
         * 
         * For parents which are rendered with the normal mechanism as shown in the example above, the removal of the old child DOM is guaranteed. The whole DOM of the parent control (including the DOM of the no longer rendered child) will be replaced with new DOM (no longer containing the child) when the rendering cycle finishes.
         * 
         * ** Note: **: the functionality of this method is different from the default handling for invisible controls (controls with `visible == false`). The standard rendering for invisible controls still renders a placeholder DOM. This allows re-rendering of the invisible control once it becomes visible again without a need to render its parent, too. Children that are cleaned up with this method here, are supposed to have no more DOM at all. Rendering them later on therefore requires an involvement (typically: a rendering) of their parent.
        */
        public cleanupControlWithoutRendering(oControl: Control): any;

        /**
            * Creates the ID to be used for the invisible Placeholder DOM element. This method can be used to get direct access to the placeholder DOM element. Also statically available as RenderManager.createInvisiblePlaceholderId()
        */
        protected static createInvisiblePlaceholderId(oElement: Element): string;

        /**
            * Cleans up the resources associated with this instance.
         * 
         * After the instance has been destroyed, it must not be used anymore. Applications should call this function if they don't need the instance any longer.
        */
        public destroy(): any;

        /**
            * Searches "to-be-preserved" nodes for the given control id.
        */
        public static findPreservedContent(sId: string): any;

        /**
            * Renders the content of the rendering buffer into the provided DOM node.
         * 
         * This function must not be called within control renderers.
         * 
         * Usage: `// Create a new instance of the RenderManager
         *   var rm = sap.ui.getCore().createRenderManager();
         * 
         *   // Use the writer API to fill the buffers
         *   rm.write(...);
         *   rm.renderControl(oControl);
         *   rm.write(...);
         *   ...
         * 
         *   // Finally flush the buffer into the provided DOM node (The current content is removed)
         *   rm.flush(oDomNode);
         * 
         *   // If the instance is not needed anymore, destroy it
         *   rm.destroy();`
        */
        public flush(oTargetDomNode: any, bDoNotPreserve: boolean, vInsert: boolean | number): any;

        /**
            * Returns the configuration object Shortcut for `sap.ui.getCore().getConfiguration()`
        */
        public getConfiguration(): Configuration;

        /**
            * Renders the given {@link sap.ui.core.Control} and finally returns the content of the rendering buffer. Ensures the buffer is restored to the state before calling this method.
        */
        public getHTML(oControl: Control): string;

        /**
            * Returns the hidden area reference belonging to this window instance.
        */
        public static getPreserveAreaRef(): any;

        /**
            * Returns the renderer class for a given control instance
        */
        public getRenderer(oControl: Control): any;

        /**
            * Returns the renderer class for a given control instance
        */
        public static getRenderer(oControl: Control): (() => any);

        /**
            * Collects descendants of the given root node that need to be preserved before the root node is wiped out. The "to-be-preserved" nodes are moved to a special, hidden 'preserve' area.
         * 
         * A node is declared "to-be-preserved" when it has the `data-sap-ui-preserve` attribute set. When the optional parameter `bPreserveNodesWithId` is set to true, then nodes with an id are preserved as well and their `data-sap-ui-preserve` attribute is set automatically. This option is used by UIAreas when they render for the first time and simplifies the handling of predefined HTML content in a web page.
         * 
         * The "to-be-preserved" nodes are searched with a depth first search and moved to the 'preserve' area in the order that they are found. So for direct siblings the order should be stable.
        */
        public static preserveContent(oRootNode: any, bPreserveRoot?: boolean, bPreserveNodesWithId?: boolean): any;

        /**
            * Renders the given control to the provided DOMNode.
         * 
         * If the control is already rendered in the provided DOMNode the DOM of the control is replaced. If the control is already rendered somewhere else the current DOM of the control is removed and the new DOM is appended to the provided DOMNode.
         * 
         * This function must not be called within control renderers.
        */
        public render(oControl: Control, oTargetDomNode: any): any;

        /**
            * Turns the given control into its HTML representation and appends it to the rendering buffer.
         * 
         * If the given control is undefined or null, then nothing is rendered.
        */
        public renderControl(oControl: Control): this;

        /**
            
        */
        public translate(sKey: string): any;

        /**
            * Write the given texts to the buffer
        */
        public write(sText: string | number): this;

        /**
            
        */
        public writeAcceleratorKey(): this;

        /**
            * Writes the accessibility state (see WAI-ARIA specification) of the provided element into the HTML based on the element's properties and associations.
         * 
         * The ARIA properties are only written when the accessibility feature is activated in the UI5 configuration.
         * 
         * The following properties/values to ARIA attribute mappings are done (if the element does have such properties):  * `editable===false` => `aria-readonly="true"` * `enabled===false` => `aria-disabled="true"` * `visible===false` => `aria-hidden="true"` * `required===true` => `aria-required="true"` * `selected===true` => `aria-selected="true"` * `checked===true` => `aria-checked="true"` 
         * 
         * In case of the required attribute also the Label controls which referencing the given element in their 'for' relation are taken into account to compute the `aria-required` attribute.
         * 
         * Additionally, the association `ariaDescribedBy` and `ariaLabelledBy` are used to write the ID lists of the ARIA attributes `aria-describedby` and `aria-labelledby`.
         * 
         * Label controls that reference the given element in their 'for' relation are automatically added to the `aria-labelledby` attributes.
         * 
         * Note: This function is only a heuristic of a control property to ARIA attribute mapping. Control developers have to check whether it fulfills their requirements. In case of problems (for example the RadioButton has a `selected` property but must provide an `aria-checked` attribute) the auto-generated result of this function can be influenced via the parameter `mProps` as described below.
         * 
         * The parameter `mProps` can be used to either provide additional attributes which should be added and/or to avoid the automatic generation of single ARIA attributes. The 'aria-' prefix will be prepended automatically to the keys (Exception: Attribute 'role' does not get the prefix 'aria-').
         * 
         * Examples: `{hidden : true}` results in `aria-hidden="true"` independent of the presence or absence of the visibility property. `{hidden : null}` ensures that no `aria-hidden` attribute is written independent of the presence or absence of the visibility property. The function behaves in the same way for the associations `ariaDescribedBy` and `ariaLabelledBy`. To append additional values to the auto-generated `aria-describedby` and `aria-labelledby` attributes the following format can be used: `{describedby : {value: "id1 id2", append: true}}` => `aria-describedby="ida idb id1 id2"` (assuming that "ida idb" is the auto-generated part based on the association `ariaDescribedBy`).
        */
        public writeAccessibilityState(oElement?: Element, mProps?: {}): this;

        /**
            * Writes the attribute and its value into the HTML.
         * 
         * For details about the escaping refer to {@link jQuery.sap.encodeHTML}
        */
        public writeAttribute(sName: string, vValue: string | number | boolean): this;

        /**
            * Writes the attribute and a value into the HTML, the value will be encoded.
         * 
         * The value is properly encoded to avoid XSS attacks.
        */
        public writeAttributeEscaped(sName: string, vValue: any): this;

        /**
            * Writes and flushes the class collection (all CSS classes added by "addClass()" since the last flush). Also writes the custom style classes added by the application with "addStyleClass(...)". Custom classes are added by default from the currently rendered control. If an oElement is given, this Element's custom style classes are added instead. If oElement === false, no custom style classes are added.
        */
        public writeClasses(oElement?: Element | boolean): this;

        /**
            * Writes the controls data into the HTML. Control Data consists at least of the id of a control
        */
        public writeControlData(oControl: Control): this;

        /**
            * Writes the elements data into the HTML. Element Data consists at least of the id of an element
        */
        public writeElementData(oElement: Element): this;

        /**
            * Escape text for HTML and write it to the buffer.
         * 
         * For details about the escaping refer to {@link jQuery.sap.encodeHTML}
        */
        public writeEscaped(sText: any, bLineBreaks: boolean): this;

        /**
            * Writes either an &lt;img&gt; tag for normal URI or a &lt;span&gt; tag with needed properties for an icon URI.
         * 
         * Additional classes and attributes can be added to the tag with the second and third parameter. All of the given attributes are escaped for security consideration.
         * 
         * When an &lt;img&gt; tag is rendered, the following two attributes are added by default and can be overwritten with corresponding values in the `mAttributes` parameter:  * `role: "presentation"` * `alt: ""` 
        */
        public writeIcon(sURI: sap.ui.core.URI, aClasses?: any[] | string, mAttributes?: {}): this;

        /**
            * Writes necessary invisible control/element placeholder data into the HTML.
         * 
         * Controls should use this method only if the standard implementation of the RenderManager doesn't fit their needs. That standard implementation renders an invisible &lt;span&gt; element for controls with `visible:false` to improve re-rendering performance. Due to the fault tolerance of the HTML5 standard, such &lt;span&gt; elements are accepted in many scenarios and won't appear in the render tree of the browser, However, in some cases, controls may need to write a different element when the &lt;span&gt; is not an allowed element (e.g. within the &lt;tr&gt; or &lt;li&gt; group).
         * 
         * The caller needs to start an opening HTML tag, then call this method, then complete the opening and closing tag.
         * 
         * `oRenderManager.write("&lt;tr");
         *   oRenderManager.writeInvisiblePlaceholderData(oControl);
         *   oRenderManager.write("&gt;&lt;/tr");`
        */
        protected writeInvisiblePlaceholderData(oElement: Element): this;

        /**
            * Writes and flushes the style collection
        */
        public writeStyles(): this;

    }
}