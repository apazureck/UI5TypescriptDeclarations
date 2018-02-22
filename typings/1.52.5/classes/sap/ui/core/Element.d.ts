declare module 'sap/ui/core/Element' {
    import { CustomData } from 'sap/ui/core/CustomData';
    import { ContextBinding } from 'sap/ui/model/ContextBinding';
    import { LayoutData } from 'sap/ui/core/LayoutData';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { TooltipBase } from 'sap/ui/core/TooltipBase';
    import { Interface } from 'sap/ui/base/Interface';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface IElementSettings extends IManagedObjectSettings {
    }

    /**
    
    */
    export class Element extends ManagedObject {

        /**
            * Constructs and initializes a UI Element with the given `sId` and settings.
         * 
         * If the optional `mSettings` are given, they must be a JSON-like object (object literal) that defines values for properties, aggregations, associations or events keyed by their name.
         * 
         * ** Valid Names: **
         * 
         * The property (key) names supported in the object literal are exactly the (case sensitive) names documented in the JSDoc for the properties, aggregations, associations and events of the control and its base classes. Note that for 0..n aggregations and associations this usually is the plural name, whereas it is the singular name in case of 0..1 relations.
         * 
         * If a key name is ambiguous for a specific control class (e.g. a property has the same name as an event), then this method prefers property, aggregation, association and event in that order. To resolve such ambiguities, the keys can be prefixed with `aggregation:`, `association:` or `event:`. In that case the keys must be quoted due to the ':'.
         * 
         * Each subclass should document the set of supported names in its constructor documentation.
         * 
         * ** Valid Values: **
         * 
         *  <li>for normal properties, the value has to be of the correct simple type (no type conversion occurs) <li>for 0..1 aggregations, the value has to be an instance of the aggregated control or element type <li>for 0..n aggregations, the value has to be an array of instances of the aggregated type <li>for 0..1 associations, an instance of the associated type or an id (string) is accepted <li>0..n associations are not supported yet <li>for events either a function (event handler) is accepted or an array of length 2 where the first element is a function and the 2nd element is an object to invoke the method on. 
         * 
         * Special aggregation `dependents` is connected to the lifecycle management and databinding, but not rendered automatically and can be used for popups or other dependent controls or elements. This allows the definition of popup controls in declarative views and enables propagation of model and context information to them.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IElementSettings);


        /**
            * Registers the given event handler to change events of the screen width/closest media container width, based on the range set with the specified name.
        */
        private _attachMediaContainerWidthChange(fnFunction: (() => any), oListener: {}, sName: string): any;

        /**
            * Removes a previously attached event handler from the change events of the screen width/closest media container width.
        */
        private _detachMediaContainerWidthChange(fnFunction: (() => any), oListener: {}, sName: string): any;

        /**
            * Returns the current media range of the Device or the closest media container
        */
        private _getCurrentMediaContainerRange(sName: string): any;

        /**
            * Returns the contextual width of an element, if set, or `undefined` otherwise
        */
        private _getMediaContainerWidth(): any;

        /**
            * Returns the best suitable DOM node that represents this Element wrapped as jQuery object. I.e. the element returned by {@link sap.ui.core.Element#getDomRef} is wrapped and returned.
         * 
         * If an ID suffix is given, the ID of this Element is concatenated with the suffix (separated by a single dash) and the DOM node with that compound ID will be wrapped by jQuery. This matches the UI5 naming convention for named inner DOM nodes of a control.
        */
        protected $(sSuffix?: string): any;

        /**
            * Adds some customData to the aggregation {@link #getCustomData customData}.
        */
        public addCustomData(oCustomData: CustomData): this;

        /**
            * Adds some dependent to the aggregation {@link #getDependents dependents}.
        */
        public addDependent(oDependent: this): this;

        /**
            * Adds a delegate that listens to the events that are fired on this element (as opposed to events which are fired BY this element).
         * 
         * When this element is cloned, the same delegate will be added to all clones. This behavior is well-suited for applications which want to add delegates that also work with templates in aggregation bindings. For control development the internal "addDelegate" method which does not clone delegates by default may be more suitable, as typically each control instance takes care of its own delegates.
         * 
         * To avoid double registrations, all registrations of the given delegate are first removed and then the delegate is added.
         * 
         * ** Important: ** If event delegates were added the delegate will still be called even if the event was processed and/or cancelled via `preventDefault` by the Element or another event delegate. `preventDefault` only prevents the event from bubbling. It should be checked e.g. in the event delegate's listener whether an Element is still enabled via `getEnabled`. Additionally there might be other things that delegates need to check depending on the event (e.g. not adding a key twice to an output string etc.).
        */
        public addEventDelegate(oDelegate: {}, oThis?: {}): this;

        /**
            * Applies the focus info.
         * 
         * To be overwritten by the specific control method.
        */
        protected applyFocusInfo(oFocusInfo: {}): any;

        /**
            * Bind the object to the referenced entity in the model, which is used as the binding context to resolve bound properties or aggregations of the object itself and all of its children relatively to the given path. If a relative binding path is used, this will be applied whenever the parent context changes. There is no difference between {@link sap.ui.core.Element#bindElement} and {@link sap.ui.base.ManagedObject#bindObject}.
        */
        public bindElement(vPath: { path: string, parameters?: {}, model?: string, events?: {}, }, mParameters?: {}): this;

        /**
            * Create a clone of this Element.
         * 
         * Calls `ManagedObject#clone` and additionally clones event delegates.
        */
        protected clone(sIdSuffix?: string, aLocalIds?: {}): this;

        /**
            * Creates a new Element from the given data.
         * 
         * If `vData` is an Element already, that element is returned. If `vData` is an object (literal), then a new element is created with `vData` as settings. The type of the element is either determined by a property named `Type` in the `vData` or by a type information in the `oKeyInfo` object
        */
        public static create(vData: Element | {}, oKeyInfo?: { type?: string, }): any;

        /**
            * Attaches custom data to an `Element` or retrieves attached data.
         * 
         * Usage: `data("myKey", myData)` Attaches `myData` (which can be any JS data type, e.g. a number, a string, an object, or a function) to this element, under the given key "myKey". If the key already exists,the value will be updated.
         * 
         * `data("myKey", myData, writeToDom)` Attaches `myData` to this element, under the given key "myKey" and (if `writeToDom` is true) writes key and value to the HTML. If the key already exists,the value will be updated. While `oValue` can be any JS data type to be attached, it must be a string to be also written to DOM. The key must also be a valid HTML attribute name (it must conform to `sap.ui.core.ID` and may contain no colon) and may not start with "sap-ui". When written to HTML, the key is prefixed with "data-".
         * 
         * `data("myKey")` Retrieves whatever data has been attached to this element (using the key "myKey") before
         * 
         * `data("myKey", null)` Removes whatever data has been attached to this element (using the key "myKey") before
         * 
         * `data(null)` Removes all data
         * 
         * `data()` Returns all data, as a map
        */
        public data(): any;

        /**
            * Creates metadata for a given class and attaches it to the constructor and prototype of that class.
         * 
         * After creation, metadata can be retrieved with getMetadata().
         * 
         * The static info can at least contain the following entries:  <li>baseType: {string} fully qualified name of a base class or empty <li>publicMethods: {string} an array of method names that will be visible in the interface proxy returned by {@link #getInterface} 
        */
        public static defineClass(sClassName: string, oStaticInfo: { baseType: string, publicMethods: {}, }, FNMetaImpl?: (() => any)): Metadata;

        /**
            * Creates metadata for a UI Element by extending the Object Metadata.
        */
        public static defineClass(sClassName: string, oStaticInfo: {}, fnMetaImpl?: (() => any)): {} | Metadata;

        /**
            * Cleans up the resources associated with this element and all its children.
         * 
         * After an element has been destroyed, it can no longer be used in the UI!
         * 
         * Applications should call this method if they don't need the element any longer.
        */
        public destroy(bSuppressInvalidate?: boolean): any;

        /**
            * Destroys all the customData in the aggregation {@link #getCustomData customData}.
        */
        public destroyCustomData(): this;

        /**
            * Destroys all the dependents in the aggregation {@link #getDependents dependents}.
        */
        public destroyDependents(): this;

        /**
            * Destroys the layoutData in the aggregation {@link #getLayoutData layoutData}.
        */
        public destroyLayoutData(): this;

        /**
            * Destroys the tooltip in the aggregation named `tooltip`.
        */
        public destroyTooltip(): this;

        /**
            * Allows the parent of a control to enhance the aria information during rendering.
         * 
         * This function is called by the RenderManager's writeAccessibilityState method for the parent of the currently rendered control - if the parent implements it.
        */
        protected enhanceAccessibilityState(oElement: this, mAriaProps: {}): {};

        /**
            * Cleans up the element instance before destruction.
         * 
         * Applications must not call this hook method directly, it is called by the framework when the element is {@link #destroy destroyed}.
         * 
         * Subclasses of Element should override this hook to implement any necessary cleanup.
        */
        protected exit(): any;

        /**
            * Creates a new subclass of class sap.ui.core.Element with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Searches and returns an array of child elements and controls which are referenced within an aggregation or aggregations of child elements/controls. This can be either done recursive or not.
         * 
         * ** Take care: this operation might be expensive. **
        */
        public findElements(bRecursive: boolean): {};

        /**
            * Fires the given event and notifies all listeners. Listeners must not change the content of the event.
        */
        protected fireEvent(sEventId: string, mParameters: {}): this;

        /**
            * Sets the focus to the stored focus DOM reference
        */
        public focus(): any;

        /**
            * Gets content of aggregation {@link #getCustomData customData}.
         * 
         * Custom Data, a data structure like a map containing arbitrary key value pairs.
        */
        public getCustomData(): {};

        /**
            * Gets content of aggregation {@link #getDependents dependents}.
         * 
         * Dependents are not rendered, but their databinding context and lifecycle are bound to the aggregating Element.
        */
        public getDependents(): {};

        /**
            * Returns the best suitable DOM Element that represents this UI5 Element. By default the DOM Element with the same ID as this Element is returned. Subclasses should override this method if the lookup via id is not sufficient.
         * 
         * Note that such a DOM Element does not necessarily exist in all cases. Some elements or controls might not have a DOM representation at all (e.g. a naive FlowLayout) while others might not have one due to their current state (e.g. an initial, not yet rendered control).
         * 
         * If an ID suffix is given, the ID of this Element is concatenated with the suffix (separated by a single dash) and the DOM node with that compound ID will be returned. This matches the UI5 naming convention for named inner DOM nodes of a control.
        */
        protected getDomRef(sSuffix?: string): any;

        /**
            * Get the context binding object for a specific model name.
         * 
         * ** Note: ** to be compatible with future versions of this API, you must not use the following model names:  * `null` * empty string `""` * string literals `"null"` or `"undefined"`  Omitting the model name (or using the value `undefined`) is explicitly allowed and refers to the default model.
        */
        public getElementBinding(sModelName?: string): ContextBinding;

        /**
            * Returns the DOM Element that should get the focus.
         * 
         * To be overwritten by the specific control method.
        */
        protected getFocusDomRef(): any;

        /**
            * Returns an object representing the serialized focus information To be overwritten by the specific control method
        */
        protected getFocusInfo(): {};

        /**
            
        */
        public getInterface(): any | Interface;

        /**
            * Returns the public interface of the object.
        */
        public getInterface(): Interface;

        /**
            * Gets content of aggregation {@link #getLayoutData layoutData}.
         * 
         * Defines the layout constraints for this control when it is used inside a Layout. LayoutData classes are typed classes and must match the embedding Layout. See VariantLayoutData for aggregating multiple alternative LayoutData instances to a single Element.
        */
        public getLayoutData(): LayoutData;

        /**
            * Returns a metadata object for class sap.ui.base.EventProvider.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the tooltip for this element if any or an undefined value. The tooltip can either be a simple string or a subclass of {@link sap.ui.core.TooltipBase}.
         * 
         * Callers that are only interested in tooltips of type string (e.g. to render them as a `title` attribute), should call the convenience method {@link #getTooltip_AsString} instead. If they want to get a tooltip text no matter where it comes from (be it a string tooltip or the text from a TooltipBase instance) then they could call {@link #getTooltip_Text} instead.
        */
        public getTooltip(): string | TooltipBase;

        /**
            * Returns the tooltip for this element but only if it is a simple string. Otherwise an undefined value is returned.
        */
        public getTooltip_AsString(): string;

        /**
            * Returns the main text for the current tooltip or undefined if there is no such text. If the tooltip is an object derived from sap.ui.core.Tooltip, then the text property of that object is returned. Otherwise the object itself is returned (either a string or undefined or null).
        */
        public getTooltip_Text(): string;

        /**
            * Checks for the provided `sap.ui.core.CustomData` in the aggregation {@link #getCustomData customData}. and returns its index if found or -1 otherwise.
        */
        public indexOfCustomData(oCustomData: CustomData): number;

        /**
            * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getDependents dependents}. and returns its index if found or -1 otherwise.
        */
        public indexOfDependent(oDependent: this): number;

        /**
            * Initializes the element instance after creation.
         * 
         * Applications must not call this hook method directly, it is called by the framework while the constructor of an element is executed.
         * 
         * Subclasses of Element should override this hook to implement any necessary initialization.
        */
        protected init(): any;

        /**
            * Inserts a customData into the aggregation {@link #getCustomData customData}.
        */
        public insertCustomData(oCustomData: CustomData, iIndex: number): this;

        /**
            * Inserts a dependent into the aggregation {@link #getDependents dependents}.
        */
        public insertDependent(oDependent: this, iIndex: number): this;

        /**
            * This function either calls set[sPropertyName] or get[sPropertyName] with the specified property name depending if an `oValue` is provided or not.
        */
        public prop(sPropertyName: string, oValue?: any): any | this;

        /**
            * Removes all the controls from the aggregation {@link #getCustomData customData}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllCustomData(): {};

        /**
            * Removes all the controls from the aggregation {@link #getDependents dependents}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllDependents(): {};

        /**
            * Removes a customData from the aggregation {@link #getCustomData customData}.
        */
        public removeCustomData(vCustomData: number | string | CustomData): CustomData;

        /**
            * Removes a dependent from the aggregation {@link #getDependents dependents}.
        */
        public removeDependent(vDependent: number | string | this): this;

        /**
            * Removes the given delegate from this element.
         * 
         * This method will remove all registrations of the given delegate, not only one.
        */
        public removeEventDelegate(oDelegate: {}): this;

        /**
            * This triggers immediate rerendering of its parent and thus of itself and its children.
         *  As `sap.ui.core.Element` "bubbles up" the rerender, changes to child-`Elements` will also result in immediate rerendering of the whole sub tree.
        */
        protected rerender(): any;

        /**
            * Sets the {@link sap.ui.core.LayoutData} defining the layout constraints for this control when it is used inside a layout.
        */
        public setLayoutData(oLayoutData: LayoutData): any;

        /**
            * Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
         * 
         * If a new tooltip is set, any previously set tooltip is deactivated.
        */
        public setTooltip(vTooltip: string | TooltipBase): any;

        /**
            * Returns a simple string representation of this element.
         * 
         * Mainly useful for tracing purposes.
        */
        public toString(): string;

        /**
            * Removes the defined binding context of this object, all bindings will now resolve relative to the parent context again.
        */
        public unbindElement(sModelName: string): ManagedObject;

    }
}