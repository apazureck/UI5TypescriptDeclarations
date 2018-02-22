declare module 'sap/m/IconTabBar' {
    import { Event } from 'sap/ui/base/Event';
    import { IconTabFilter } from 'sap/m/IconTabFilter';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ManagedObject } from 'sap/ui/base/ManagedObject';
    import { Sorter } from 'sap/ui/model/Sorter';
    import { Binding } from 'sap/ui/model/Binding';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IIconTabBarSettings extends IControlSettings {
        showSelection?: boolean;
        expandable?: boolean;
        expanded?: boolean;
        selectedKey?: string;
        upperCase?: boolean;
        stretchContentHeight?: boolean;
        applyContentPadding?: boolean;
        backgroundDesign?: sap.m.BackgroundDesign;
        headerMode?: sap.m.IconTabHeaderMode;
        showOverflowSelectList?: boolean;
        headerBackgroundDesign?: sap.m.BackgroundDesign;
        enableTabReordering?: boolean;
    }

    /**
    
    */
    export class IconTabBar extends Control {

        /**
            * Constructor for a new IconTabBar.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IIconTabBarSettings);


        /**
            * Adds aggregation.
        */
        protected addAggregation(sAggregationName: string, oObject: {}, bSuppressInvalidate: boolean): this;

        /**
            * Adds some entity `oObject` to the aggregation identified by `sAggregationName`.
         * 
         * If the given object is not valid with regard to the aggregation (if it is not an instance of the type specified for that aggregation) or when the method is called for an aggregation of cardinality 0..1, then an Error is thrown (see {@link #validateAggregation}.
         * 
         * If the aggregation already has content, the new object will be added after the current content. If the new object was already contained in the aggregation, it will be moved to the end.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically add an object to an aggregation. Use the concrete method add* XYZ * for aggregation 'XYZ' or the generic {@link #applySettings} instead.
        */
        protected addAggregation(sAggregationName: string, oObject: this, bSuppressInvalidate?: boolean): this;

        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: sap.m.IconTab): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:expand expand} event of this `sap.m.IconTabBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.IconTabBar` itself.
         * 
         * Indicates that the tab will expand or collapse.
        */
        attachExpand<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * If the tab will expand, this is true. */
            expand: boolean, /* * If the tab will collapse, this is true. */
            collapse: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:expand expand} event of this `sap.m.IconTabBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.IconTabBar` itself.
         * 
         * Indicates that the tab will expand or collapse.
        */
        attachExpand<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * If the tab will expand, this is true. */
            expand: boolean, /* * If the tab will collapse, this is true. */
            collapse: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.IconTabBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.IconTabBar` itself.
         * 
         * Fires when an item is selected.
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item */
            item: IconTabFilter, /* * The key of the selected item */
            key: string, /* * The selected item */
            selectedItem: IconTabFilter, /* * The key of the selected item */
            selectedKey: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.IconTabBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.IconTabBar` itself.
         * 
         * Fires when an item is selected.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item */
            item: IconTabFilter, /* * The key of the selected item */
            key: string, /* * The selected item */
            selectedItem: IconTabFilter, /* * The key of the selected item */
            selectedKey: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Bind an aggregation to the model.
         * 
         * The bound aggregation will use the given template, clone it for each item which exists in the bound list and set the appropriate binding context. This is a generic method which can be used to bind any aggregation to the model. A managed object may flag aggregations in the metamodel with bindable="bindable" to get typed bind* Something * methods for those aggregations.
        */
        public bindAggregation(sName: string, oBindingInfo: { path: string, template: ManagedObject, templateShareable?: boolean, factory: (() => any), startIndex: number, length: number, sorter?: Sorter | {}, filters?: {}, key: string | (() => any), parameters?: {}, groupHeaderFactory?: (() => any), }): this;

        /**
            * Forwards aggregations with the name of items to the internal list.
        */
        public bindAggregation(sAggregationName: string, oBindingInfo: {}): this;

        /**
            * Clones the IconTabBar.
        */
        protected clone(): this;

        /**
            * Clones a tree of objects starting with the object on which clone is called first (root object).
         * 
         * The IDs within the newly created clone tree are derived from the original IDs by appending the given `sIdSuffix` (if no suffix is given, one will be created; it will be unique across multiple clone calls).
         * 
         * The `oOptions` configuration object can have the following properties:  * The boolean value `cloneChildren` specifies whether associations/aggregations will be cloned * The boolean value `cloneBindings` specifies if bindings will be cloned 
         * 
         * For each cloned object the following settings are cloned based on the metadata of the object and the defined options:  * all properties that are not bound. If `cloneBinding` is `false`, even these properties will be cloned; the values are used by reference, they are not cloned * all aggregated objects that are not bound. If `cloneBinding` is `false`, even the ones that are bound will be cloned; they are all cloned recursively using the same `sIdSuffix` * all associated controls; when an association points to an object inside the cloned object tree, then the cloned association will be modified to that it points to the clone of the target object. When the association points to a managed object outside of the cloned object tree, then its target won't be changed. * all models set via `setModel()`; used by reference * all property and aggregation bindings (if `cloneBindings` is `true`); the pure binding information (path, model name) is cloned, but all other information like template control or factory function, data type or formatter function are copied by reference. The bindings themselves are created anew as they are specific for the combination (object, property, model). As a result, any later changes to a binding of the original object are not reflected in the clone, but changes to e.g the type or template etc. are. 
         * 
         * Each clone is created by first collecting the above mentioned settings and then creating a new instance with the normal constructor function. As a result, any side effects of mutator methods (`setProperty` etc.) or init hooks are repeated during clone creation. There is no need to override `clone()` just to reproduce these internal settings!
         * 
         * Custom controls however can override `clone()` to implement additional clone steps. They usually will first call `clone()` on the super class and then modify the returned clone accordingly.
         * 
         * Applications ** must never provide ** the second parameter `aLocaleIds`. It is determined automatically for the root object (and its non-existence also serves as an indicator for the root object). Specifying it will break the implementation of `clone()`.
        */
        protected clone(sIdSuffix?: string, aLocalIds?: {}, oOptions?: {}, cloneChildren?: boolean, cloneBindings?: boolean): this;

        /**
            * Destroys aggregation.
        */
        protected destroyAggregation(sAggregationName: string, bSuppressInvalidate: boolean): this;

        /**
            * Destroys (all) the managed object(s) in the aggregation named `sAggregationName` and empties the aggregation. If the aggregation did contain any object, this ManagedObject is marked as changed.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically destroy all objects in an aggregation. Use the concrete method destroy* XYZ * for aggregation 'XYZ' instead.
        */
        protected destroyAggregation(sAggregationName: string, bSuppressInvalidate?: boolean): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:expand expand} event of this `sap.m.IconTabBar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachExpand(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.m.IconTabBar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.IconTabBar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:expand expand} to attached listeners.
        */
        protected fireExpand(mParameters?: { expand?: boolean, collapse?: boolean, }): this;

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { item?: IconTabFilter, key?: string, selectedItem?: IconTabFilter, selectedKey?: string, }): this;

        /**
            * Gets aggregations.
        */
        protected getAggregation(sAggregationName: string, oDefaultForCreation: {}): this;

        /**
            * Returns the aggregated object(s) for the named aggregation of this ManagedObject.
         * 
         * If the aggregation does not contain any objects(s), the given `oDefaultForCreation` (or `null`) is set as new value of the aggregation and returned to the caller.
         * 
         * ** Note: ** the need to specify a default value and the fact that it is stored as new value of a so far empty aggregation is recognized as a shortcoming of this API but can no longer be changed for compatibility reasons.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically read the content of an aggregation. Use the concrete method get* XYZ * for aggregation 'XYZ' instead.
        */
        protected getAggregation(sAggregationName: string, oDefaultForCreation: this | any[]): this | any[];

        /**
            * Gets current value of property {@link #getApplyContentPadding applyContentPadding}.
         * 
         * Determines whether the IconTabBar content fits to the full area. The paddings are removed if it's set to false.
         * 
         * Default value is `true`.
        */
        public getApplyContentPadding(): boolean;

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Specifies the background color of the IconTabBar.
         * 
         * Depending on the theme, you can change the state of the background color to "Solid", "Translucent", or "Transparent". Default is "Solid".
         * 
         * Default value is `Solid`.
        */
        public getBackgroundDesign(): sap.m.BackgroundDesign;

        /**
            * Gets binding.
        */
        public getBinding(sAggregationName: string): any | Binding;

        /**
            * Get the binding object for a specific aggregation/property
        */
        public getBinding(sName: string): Binding;

        /**
            * Gets binding information.
        */
        protected getBindingInfo(sAggregationName: string): any | {};

        /**
            * Returns the binding infos for the given property or aggregation. The binding info contains information about path, binding object, format options, sorter, filter etc. for the property or aggregation. As the binding object is only created when the model becomes available, the binding property may be undefined.
        */
        protected getBindingInfo(sName: string): {};

        /**
            * Get the binding path for a specific aggregation/property
        */
        protected getBindingPath(sName: string): string;

        /**
            * Gets binding path.
        */
        protected getBindingPath(sAggregationName: string): any | string;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Represents the contents displayed below the IconTabBar. If there are multiple contents, they are rendered after each other. The developer has to manage to display the right one or use the content aggregation inside the IconTabFilter (which will be displayed instead if it is set).
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getEnableTabReordering enableTabReordering}.
         * 
         * Specifies whether tab reordering is enabled. Relevant only for desktop devices.
         * 
         * Default value is `false`.
        */
        public getEnableTabReordering(): boolean;

        /**
            * Gets current value of property {@link #getExpandable expandable}.
         * 
         * Defines if the tabs are collapsible and expandable.
         * 
         * Default value is `true`.
        */
        public getExpandable(): boolean;

        /**
            * Gets current value of property {@link #getExpanded expanded}.
         * 
         * Indicates if the actual tab content is expanded or not.
         * 
         * Default value is `true`.
        */
        public getExpanded(): boolean;

        /**
            * Gets current value of property {@link #getHeaderBackgroundDesign headerBackgroundDesign}.
         * 
         * Specifies the background color of the header.
         * 
         * Depending on the theme, you can change the state of the background color to "Solid", "Translucent", or "Transparent". Default is "Solid".
         * 
         * Default value is `Solid`.
        */
        public getHeaderBackgroundDesign(): sap.m.BackgroundDesign;

        /**
            * Gets current value of property {@link #getHeaderMode headerMode}.
         * 
         * Specifies the header mode. ** Note: ** The Inline mode works only if no icons are set.
         * 
         * Default value is `Standard`.
        */
        public getHeaderMode(): sap.m.IconTabHeaderMode;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * The items displayed in the IconTabBar.
        */
        public getItems(): {};

        /**
            * Returns a metadata object for class sap.m.IconTabBar.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Gets current value of property {@link #getSelectedKey selectedKey}.
         * 
         * Key of the selected tab item.
         * 
         * If the key has no corresponding aggregated item, no changes will apply. If duplicate keys exists the first item matching the key is used.
        */
        public getSelectedKey(): string;

        /**
            * Reflector for the internal header's selectedKey property.
        */
        public getSelectedKey(): string;

        /**
            * Gets current value of property {@link #getShowOverflowSelectList showOverflowSelectList}.
         * 
         * Specifies if the overflow select list is displayed.
         * 
         * The overflow select list represents a list, where all tab filters are displayed, so the user can select specific tab filter easier.
         * 
         * Default value is `false`.
        */
        public getShowOverflowSelectList(): boolean;

        /**
            * Gets current value of property {@link #getShowSelection showSelection}.
         * 
         * Defines whether the current selection should be visualized.
         * 
         * Default value is `true`.
        */
        public getShowSelection(): boolean;

        /**
            * Gets current value of property {@link #getStretchContentHeight stretchContentHeight}.
         * 
         * Determines whether the IconTabBar height is stretched to the maximum possible height of its parent container. As a prerequisite, the height of the parent container must be defined as a fixed value.
         * 
         * Default value is `false`.
        */
        public getStretchContentHeight(): boolean;

        /**
            * Gets current value of property {@link #getUpperCase upperCase}.
         * 
         * Determines whether the text of the icon tab filter (not the count) is displayed in uppercase.
         * 
         * Default value is `false`.
        */
        public getUpperCase(): boolean;

        /**
            * Searches for the provided ManagedObject in the named aggregation and returns its 0-based index if found, or -1 otherwise. Returns -2 if the given named aggregation is of cardinality 0..1 and doesn't reference the given object.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically determine the position of an object in an aggregation. Use the concrete method indexOf* XYZ * for aggregation 'XYZ' instead.
        */
        protected indexOfAggregation(sAggregationName: string, oObject: this): number;

        /**
            * Gets the index of aggregation.
        */
        protected indexOfAggregation(sAggregationName: string, oObject: {}): any | number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Checks for the provided `sap.m.IconTab` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: sap.m.IconTab): number;

        /**
            * Inserts managed object `oObject` to the aggregation named `sAggregationName` at position `iIndex`.
         * 
         * If the given object is not valid with regard to the aggregation (if it is not an instance of the type specified for that aggregation) or when the method is called for an aggregation of cardinality 0..1, then an Error is thrown (see {@link #validateAggregation}.
         * 
         * If the given index is out of range with respect to the current content of the aggregation, it is clipped to that range (0 for iIndex < 0, n for iIndex > n).
         * 
         * Please note that this method does not work as expected when an object is added that is already part of the aggregation. In order to change the index of an object inside an aggregation, first remove it, then insert it again.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically insert an object into an aggregation. Use the concrete method insert* XYZ * for aggregation 'XYZ' instead.
        */
        protected insertAggregation(sAggregationName: string, oObject: this, iIndex: number, bSuppressInvalidate?: boolean): this;

        /**
            * Inserts aggregation.
        */
        protected insertAggregation(sAggregationName: string, oObject: {}, iIndex: number, bSuppressInvalidate: boolean): this;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: sap.m.IconTab, iIndex: number): this;

        /**
            * Removes an object from the aggregation named `sAggregationName` with cardinality 0..n.
         * 
         * The removed object is not destroyed nor is it marked as changed.
         * 
         * If the given object is found in the aggregation, it is removed, it's parent relationship is unset and this ManagedObject is marked as changed. The removed object is returned as result of this method. If the object could not be found, `undefined` is returned.
         * 
         * This method must only be called for aggregations of cardinality 0..n. The only way to remove objects from a 0..1 aggregation is to set a `null` value for them.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically remove an object from an aggregation. Use the concrete method remove* XYZ * for aggregation 'XYZ' instead.
        */
        protected removeAggregation(sAggregationName: string, vObject: number | string | this, bSuppressInvalidate?: boolean): this;

        /**
            * Removes aggregation.
        */
        protected removeAggregation(sAggregationName: string, oObject: {}, bSuppressInvalidate: boolean): this;

        /**
            * Removes all aggregations.
        */
        protected removeAllAggregation(sAggregationName: string, bSuppressInvalidate: boolean): any | any[];

        /**
            * Removes all objects from the 0..n-aggregation named `sAggregationName`.
         * 
         * The removed objects are not destroyed nor are they marked as changed.
         * 
         * Additionally, it clears the parent relationship of all removed objects, marks this ManagedObject as changed and returns an array with the removed objects.
         * 
         * If the aggregation did not contain any objects, an empty array is returned and this ManagedObject is not marked as changed.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically remove all objects from an aggregation. Use the concrete method removeAll* XYZ * for aggregation 'XYZ' instead.
        */
        protected removeAllAggregation(sAggregationName: string, bSuppressInvalidate?: boolean): any[];

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | sap.m.IconTab): sap.m.IconTab;

        /**
            * Sets a new object in the named 0..1 aggregation of this ManagedObject and marks this ManagedObject as changed.
         * 
         * If the given object is not valid with regard to the aggregation (if it is not an instance of the type specified for that aggregation) or when the method is called for an aggregation of cardinality 0..n, then an Error is thrown (see {@link #validateAggregation}.
         * 
         * If the new object is the same as the currently aggregated object, then the internal state is not modified and this ManagedObject is not marked as changed.
         * 
         * If the given object is different, the parent of a previously aggregated object is cleared (it must have been this ManagedObject before), the parent of the given object is set to this ManagedObject and {@link #invalidate} is called for this object.
         * 
         * Note that this method does neither return nor destroy the previously aggregated object. This behavior is inherited by named set methods (see below) in subclasses. To avoid memory leaks, applications therefore should first get the aggregated object, keep a reference to it or destroy it, depending on their needs, and only then set a new object.
         * 
         * Note that ManagedObject only implements a single level of change tracking: if a first call to setAggregation recognizes a change, 'invalidate' is called. If another call to setAggregation reverts that change, invalidate() will be called again, the new status is not recognized as being 'clean' again.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically set an object in an aggregation. Use the concrete method set* XYZ * for aggregation 'XYZ' or the generic {@link #applySettings} instead.
        */
        protected setAggregation(sAggregationName: string, oObject: {}, bSuppressInvalidate?: boolean): this;

        /**
            * Sets aggregations.
        */
        protected setAggregation(sAggregationName: string, oObject: {}, bSuppressInvalidate: boolean): this;

        /**
            * Sets a new value for property {@link #getApplyContentPadding applyContentPadding}.
         * 
         * Determines whether the IconTabBar content fits to the full area. The paddings are removed if it's set to false.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setApplyContentPadding(bApplyContentPadding: boolean): this;

        /**
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Specifies the background color of the IconTabBar.
         * 
         * Depending on the theme, you can change the state of the background color to "Solid", "Translucent", or "Transparent". Default is "Solid".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Solid`.
        */
        public setBackgroundDesign(sBackgroundDesign: sap.m.BackgroundDesign): this;

        /**
            * Sets a new value for property {@link #getEnableTabReordering enableTabReordering}.
         * 
         * Specifies whether tab reordering is enabled. Relevant only for desktop devices.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableTabReordering(bEnableTabReordering: boolean): this;

        /**
            * Sets the enableTabReordering property.
        */
        public setEnableTabReordering(value: boolean): this;

        /**
            * Sets a new value for property {@link #getExpandable expandable}.
         * 
         * Defines if the tabs are collapsible and expandable.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setExpandable(bExpandable: boolean): this;

        /**
            * Sets the tabs as collapsible and expandable without re-rendering the control.
        */
        public setExpandable(bExpandable: boolean): this;

        /**
            * Sets a new value for property {@link #getExpanded expanded}.
         * 
         * Indicates if the actual tab content is expanded or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setExpanded(bExpanded: boolean): this;

        /**
            * Sets the tab content as expanded.
        */
        public setExpanded(bExpanded: boolean): this;

        /**
            * Sets the header background design.
        */
        public setHeaderBackgroundDesign(headerBackgroundDesign: sap.m.BackgroundDesign): this;

        /**
            * Sets a new value for property {@link #getHeaderBackgroundDesign headerBackgroundDesign}.
         * 
         * Specifies the background color of the header.
         * 
         * Depending on the theme, you can change the state of the background color to "Solid", "Translucent", or "Transparent". Default is "Solid".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Solid`.
        */
        public setHeaderBackgroundDesign(sHeaderBackgroundDesign: sap.m.BackgroundDesign): this;

        /**
            * Sets a new value for property {@link #getHeaderMode headerMode}.
         * 
         * Specifies the header mode. ** Note: ** The Inline mode works only if no icons are set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setHeaderMode(sHeaderMode: sap.m.IconTabHeaderMode): this;

        /**
            * Sets the header mode.
        */
        public setHeaderMode(mode: sap.m.IconTabHeaderMode): this;

        /**
            * Sets a new value for property {@link #getSelectedKey selectedKey}.
         * 
         * Key of the selected tab item.
         * 
         * If the key has no corresponding aggregated item, no changes will apply. If duplicate keys exists the first item matching the key is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSelectedKey(sSelectedKey: string): this;

        /**
            * Sets the showOverflowSelectList property.
        */
        public setShowOverflowSelectList(value: boolean): this;

        /**
            * Sets a new value for property {@link #getShowOverflowSelectList showOverflowSelectList}.
         * 
         * Specifies if the overflow select list is displayed.
         * 
         * The overflow select list represents a list, where all tab filters are displayed, so the user can select specific tab filter easier.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowOverflowSelectList(bShowOverflowSelectList: boolean): this;

        /**
            * Reflector for the internal header's showSelection property.
        */
        public setShowSelection(bValue: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSelection showSelection}.
         * 
         * Defines whether the current selection should be visualized.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowSelection(bShowSelection: boolean): this;

        /**
            * Sets a new value for property {@link #getStretchContentHeight stretchContentHeight}.
         * 
         * Determines whether the IconTabBar height is stretched to the maximum possible height of its parent container. As a prerequisite, the height of the parent container must be defined as a fixed value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setStretchContentHeight(bStretchContentHeight: boolean): this;

        /**
            * Sets a new value for property {@link #getUpperCase upperCase}.
         * 
         * Determines whether the text of the icon tab filter (not the count) is displayed in uppercase.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setUpperCase(bUpperCase: boolean): this;

        /**
            * Validates aggregations.
        */
        protected validateAggregation(sAggregationName: string, oObject: {}, bMultiple: boolean): this;

        /**
            * Checks whether the given value is of the proper type for the given aggregation name.
         * 
         * This method is already called by {@link #setAggregation}, {@link #addAggregation} and {@link #insertAggregation}. In many cases, subclasses of ManagedObject don't need to call it again in their mutator methods.
        */
        protected validateAggregation(sAggregationName: string, oObject: this | any, bMultiple: boolean): this | any;

    }
}