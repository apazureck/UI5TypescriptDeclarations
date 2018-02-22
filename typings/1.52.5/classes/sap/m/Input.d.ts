declare module 'sap/m/Input' {
    import { Event } from 'sap/ui/base/Event';
    import { ListBase } from 'sap/m/ListBase';
    import { Item } from 'sap/ui/core/Item';
    import { ColumnListItem } from 'sap/m/ColumnListItem';
    import { Column } from 'sap/m/Column';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ManagedObject } from 'sap/ui/base/ManagedObject';
    import { Sorter } from 'sap/ui/model/Sorter';
    import { Binding } from 'sap/ui/model/Binding';
    import { InputBase, IInputBaseSettings } from 'sap/m/InputBase';

    export interface IInputSettings extends IInputBaseSettings {
        type?: sap.m.InputType;
        maxLength?: number;
        dateFormat?: string;
        showValueHelp?: boolean;
        showSuggestion?: boolean;
        valueHelpOnly?: boolean;
        filterSuggests?: boolean;
        maxSuggestionWidth?: sap.ui.core.CSSSize;
        startSuggestion?: number;
        showTableSuggestionValueHelp?: boolean;
        description?: string;
        fieldWidth?: sap.ui.core.CSSSize;
        valueLiveUpdate?: boolean;
        selectedKey?: string;
        textFormatMode?: sap.m.InputTextFormatMode;
        textFormatter?: any;
        suggestionRowValidator?: any;
        enableSuggestionsHighlighting?: boolean;
    }

    /**
    
    */
    export class Input extends InputBase {

        /**
            * Constructor for a new `Input`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IInputSettings);


        /**
            * Refreshes delayed items.
        */
        public _refreshItemsDelayed(): any;

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
            * Adds aggregation.
        */
        protected addAggregation(sAggregationName: string, oObject: {}, bSuppressInvalidate: boolean): this;

        /**
            * Adds some suggestionColumn to the aggregation {@link #getSuggestionColumns suggestionColumns}.
        */
        public addSuggestionColumn(oSuggestionColumn: Column): this;

        /**
            * Adds some suggestionItem to the aggregation {@link #getSuggestionItems suggestionItems}.
        */
        public addSuggestionItem(oSuggestionItem: Item): this;

        /**
            * Adds suggestion item.
        */
        public addSuggestionItem(oItem: Item): this;

        /**
            * Adds suggestion row.
        */
        public addSuggestionRow(oItem: Item): this;

        /**
            * Adds some suggestionRow to the aggregation {@link #getSuggestionRows suggestionRows}.
        */
        public addSuggestionRow(oSuggestionRow: ColumnListItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.m.Input`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Input` itself.
         * 
         * This event is fired when the value of the input is changed - e.g. at each keypress
        */
        attachLiveChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new value of the input. */
            value: string, /* * Indicate that ESC key triggered the event. */
            escPressed: boolean, /* * The value of the input before pressing ESC key. */
            previousValue: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.m.Input`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Input` itself.
         * 
         * This event is fired when the value of the input is changed - e.g. at each keypress
        */
        attachLiveChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new value of the input. */
            value: string, /* * Indicate that ESC key triggered the event. */
            escPressed: boolean, /* * The value of the input before pressing ESC key. */
            previousValue: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:submit submit} event of this `sap.m.Input`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Input` itself.
         * 
         * This event is fired when user presses the `Enter` key on the input.
         * 
         * ** Note: ** The event is fired independent of whether there was a change before or not. If a change was performed the event is fired after the change event. The event is also fired when an item of the select list is selected via `Enter`. The event is only fired on an input which allows text input (`editable`, `enabled` and not `valueHelpOnly`).
        */
        attachSubmit<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new value of the input. */
            value: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:submit submit} event of this `sap.m.Input`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Input` itself.
         * 
         * This event is fired when user presses the `Enter` key on the input.
         * 
         * ** Note: ** The event is fired independent of whether there was a change before or not. If a change was performed the event is fired after the change event. The event is also fired when an item of the select list is selected via `Enter`. The event is only fired on an input which allows text input (`editable`, `enabled` and not `valueHelpOnly`).
        */
        attachSubmit<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new value of the input. */
            value: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.m.Input`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Input` itself.
         * 
         * This event is fired when user types in the input and showSuggestion is set to true. Changing the suggestItems aggregation will show the suggestions within a popup.
        */
        attachSuggest<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current value which has been typed in the input. */
            suggestValue: string, /* * The suggestion list is passed to this event for convenience. If you use list-based or tabular suggestions, fill the suggestionList with the items you want to suggest. Otherwise, directly add the suggestions to the "suggestionItems" aggregation of the input control. */
            suggestionColumns: ListBase,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.m.Input`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Input` itself.
         * 
         * This event is fired when user types in the input and showSuggestion is set to true. Changing the suggestItems aggregation will show the suggestions within a popup.
        */
        attachSuggest<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current value which has been typed in the input. */
            suggestValue: string, /* * The suggestion list is passed to this event for convenience. If you use list-based or tabular suggestions, fill the suggestionList with the items you want to suggest. Otherwise, directly add the suggestions to the "suggestionItems" aggregation of the input control. */
            suggestionColumns: ListBase,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:suggestionItemSelected suggestionItemSelected} event of this `sap.m.Input`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Input` itself.
         * 
         * This event is fired when suggestionItem shown in suggestion popup are selected. This event is only fired when showSuggestion is set to true and there are suggestionItems shown in the suggestion popup.
        */
        attachSuggestionItemSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This is the item selected in the suggestion popup for one and two-value suggestions. For tabular suggestions, this value will not be set. */
            selectedItem: Item, /* * This is the row selected in the tabular suggestion popup represented as a ColumnListItem. For one and two-value suggestions, this value will not be set.
 * 
 * Note: The row result function to select a result value for the string is already executed at this time. To pick different value for the input field or to do follow up steps after the item has been selected. */
            selectedRow: ColumnListItem,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:suggestionItemSelected suggestionItemSelected} event of this `sap.m.Input`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Input` itself.
         * 
         * This event is fired when suggestionItem shown in suggestion popup are selected. This event is only fired when showSuggestion is set to true and there are suggestionItems shown in the suggestion popup.
        */
        attachSuggestionItemSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This is the item selected in the suggestion popup for one and two-value suggestions. For tabular suggestions, this value will not be set. */
            selectedItem: Item, /* * This is the row selected in the tabular suggestion popup represented as a ColumnListItem. For one and two-value suggestions, this value will not be set.
 * 
 * Note: The row result function to select a result value for the string is already executed at this time. To pick different value for the input field or to do follow up steps after the item has been selected. */
            selectedRow: ColumnListItem,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:valueHelpRequest valueHelpRequest} event of this `sap.m.Input`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Input` itself.
         * 
         * When the value help indicator is clicked, this event will be fired.
        */
        attachValueHelpRequest<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The event parameter is set to true, when the button at the end of the suggestion table is clicked, otherwise false. It can be used to determine whether the "value help" trigger or the "show all items" trigger has been pressed. */
            fromSuggestions: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:valueHelpRequest valueHelpRequest} event of this `sap.m.Input`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Input` itself.
         * 
         * When the value help indicator is clicked, this event will be fired.
        */
        attachValueHelpRequest<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The event parameter is set to true, when the button at the end of the suggestion table is clicked, otherwise false. It can be used to determine whether the "value help" trigger or the "show all items" trigger has been pressed. */
            fromSuggestions: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Forwards aggregations with the name of items or columns to the internal table.
        */
        public bindAggregation(sAggregationName: string, oBindingInfo: {}): this;

        /**
            * Bind an aggregation to the model.
         * 
         * The bound aggregation will use the given template, clone it for each item which exists in the bound list and set the appropriate binding context. This is a generic method which can be used to bind any aggregation to the model. A managed object may flag aggregations in the metamodel with bindable="bindable" to get typed bind* Something * methods for those aggregations.
        */
        public bindAggregation(sName: string, oBindingInfo: { path: string, template: ManagedObject, templateShareable?: boolean, factory: (() => any), startIndex: number, length: number, sorter?: Sorter | {}, filters?: {}, key: string | (() => any), parameters?: {}, groupHeaderFactory?: (() => any), }): this;

        /**
            * Binds aggregation {@link #getSuggestionColumns suggestionColumns} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindSuggestionColumns(oBindingInfo: {}): this;

        /**
            * Binds aggregation {@link #getSuggestionRows suggestionRows} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindSuggestionRows(oBindingInfo: {}): this;

        /**
            * Cancels any pending suggestions.
        */
        public cancelPendingSuggest(): any;

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
            * Clones input.
        */
        protected clone(): this;

        /**
            * Closes the suggestion list.
        */
        public closeSuggestions(): any;

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
            * Destroys all the suggestionColumns in the aggregation {@link #getSuggestionColumns suggestionColumns}.
        */
        public destroySuggestionColumns(): this;

        /**
            * Destroys all the suggestionItems in the aggregation {@link #getSuggestionItems suggestionItems}.
        */
        public destroySuggestionItems(): this;

        /**
            * Destroys suggestion items.
        */
        public destroySuggestionItems(): this;

        /**
            * Destroys all the suggestionRows in the aggregation {@link #getSuggestionRows suggestionRows}.
        */
        public destroySuggestionRows(): this;

        /**
            * Destroys all suggestion rows.
        */
        public destroySuggestionRows(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.m.Input`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLiveChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:submit submit} event of this `sap.m.Input`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSubmit(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:suggest suggest} event of this `sap.m.Input`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSuggest(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:suggestionItemSelected suggestionItemSelected} event of this `sap.m.Input`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSuggestionItemSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:valueHelpRequest valueHelpRequest} event of this `sap.m.Input`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachValueHelpRequest(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Input with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.InputBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:liveChange liveChange} to attached listeners.
        */
        protected fireLiveChange(mParameters?: { value?: string, escPressed?: boolean, previousValue?: string, }): this;

        /**
            * Fires event {@link #event:submit submit} to attached listeners.
        */
        protected fireSubmit(mParameters?: { value?: string, }): this;

        /**
            * Fires event {@link #event:suggest suggest} to attached listeners.
        */
        protected fireSuggest(mParameters?: { suggestValue?: string, suggestionColumns?: ListBase, }): this;

        /**
            * Fires event {@link #event:suggestionItemSelected suggestionItemSelected} to attached listeners.
        */
        protected fireSuggestionItemSelected(mParameters?: { selectedItem?: Item, selectedRow?: ColumnListItem, }): this;

        /**
            * Fires event {@link #event:valueHelpRequest valueHelpRequest} to attached listeners.
        */
        protected fireValueHelpRequest(mParameters?: { fromSuggestions?: boolean, }): this;

        /**
            * Gets accessibility information for the input.
        */
        protected getAccessibilityInfo(): {} | any;

        /**
            
        */
        protected getAccessibilityInfo(): any | {};

        /**
            * This function (if available on the concrete control) provides the current accessibility state of the control.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should implement this hook to provide any necessary accessibility information:
         * 
         * `MyControl.prototype.getAccessibilityInfo = function() {
         *    return {
         *      role: "textbox",      // String which represents the WAI-ARIA role which is implemented by the control.
         *      type: "date input",   // String which represents the control type (Must be a translated text). Might correlate with
         *                            // the role.
         *      description: "value", // String which describes the most relevant control state (e.g. the inputs value). Must be a
         *                            // translated text.
         *                            // Note: The type and the enabled/editable state must not be handled here.
         *      focusable: true,      // Boolean which describes whether the control can get the focus.
         *      enabled: true,        // Boolean which describes whether the control is enabled. If not relevant it must not be set or
         *                            // `null` can be provided.
         *      editable: true,       // Boolean which describes whether the control is editable. If not relevant it must not be set or
         *                            // `null` can be provided.
         *      children: []          // Aggregations of the given control (e.g. when the control is a layout). Primitive aggregations will be ignored.
         *                            // Note: Children should only be provided when it is helpful to understand the accessibility context
         *                            //       (e.g. a form control must not provide details of its internals (fields, labels, ...) but a
         *                            //       layout should).
         *    };
         * };`
         * 
         * Note: The returned object provides the accessibility state of the control at the point in time when this function is called.
        */
        protected getAccessibilityInfo(): {};

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
            * Gets aggregation.
        */
        protected getAggregation(sAggregationName: string, oDefaultForCreation: {}): this;

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
            * Gets binding path.
        */
        protected getBindingPath(sAggregationName: string): any | string;

        /**
            * Get the binding path for a specific aggregation/property
        */
        protected getBindingPath(sName: string): string;

        /**
            * Gets current value of property {@link #getDateFormat dateFormat}.
         * 
         * Only used if type=date and no datepicker is available. The data is displayed and the user input is parsed according to this format. NOTE: The value property is always of the form RFC 3339 (YYYY-MM-dd).
         * 
         * Default value is `YYYY-MM-dd`.
        */
        public getDateFormat(): string;

        /**
            * Gets current value of property {@link #getDescription description}.
         * 
         * The description is a text after the input field, e.g. units of measurement, currencies.
        */
        public getDescription(): string;

        /**
            * Gets the inner input DOM value.
        */
        protected getDOMValue(): any;

        /**
            * Gets current value of property {@link #getEnableSuggestionsHighlighting enableSuggestionsHighlighting}.
         * 
         * Specifies whether the suggestions highlighting is enabled.
         * 
         * Default value is `true`.
        */
        public getEnableSuggestionsHighlighting(): boolean;

        /**
            * Gets current value of property {@link #getFieldWidth fieldWidth}.
         * 
         * This property only takes effect if the description property is set. It controls the distribution of space between the input field and the description text. The default value is 50% leaving the other 50% for the description.
         * 
         * Default value is `50%`.
        */
        public getFieldWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getFilterSuggests filterSuggests}.
         * 
         * Defines whether to filter the provided suggestions before showing them to the user.
         * 
         * Default value is `true`.
        */
        public getFilterSuggests(): boolean;

        /**
            * Gets current value of property {@link #getMaxLength maxLength}.
         * 
         * Maximum number of characters. Value '0' means the feature is switched off. This parameter is not compatible with the input type `sap.m.InputType.Number`. If the input type is set to `Number`, the `maxLength` value is ignored.
         * 
         * Default value is `0`.
        */
        public getMaxLength(): number;

        /**
            * Gets current value of property {@link #getMaxSuggestionWidth maxSuggestionWidth}.
         * 
         * If set, the value of this parameter will control the horizontal size of the suggestion list to display more data. This allows suggestion lists to be wider than the input field if there is enough space available. By default, the suggestion list is always as wide as the input field. Note: The value will be ignored if the actual width of the input field is larger than the specified parameter value.
        */
        public getMaxSuggestionWidth(): sap.ui.core.CSSSize;

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
            * Returns a metadata object for class sap.m.Input.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem}, or `null`.
        */
        public getSelectedItem(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getSelectedKey selectedKey}.
         * 
         * Defines the key of the selected item.
         * 
         * ** Note: ** If duplicate keys exist, the first item matching the key is used.
         * 
         * Default value is ``.
        */
        public getSelectedKey(): string;

        /**
            * ID of the element which is the current target of the association {@link #getSelectedRow selectedRow}, or `null`.
        */
        public getSelectedRow(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getShowSuggestion showSuggestion}.
         * 
         * If this is set to true, suggest event is fired when user types in the input. Changing the suggestItems aggregation in suggest event listener will show suggestions within a popup. When runs on phone, input will first open a dialog where the input and suggestions are shown. When runs on a tablet, the suggestions are shown in a popup next to the input.
         * 
         * Default value is `false`.
        */
        public getShowSuggestion(): boolean;

        /**
            * Gets current value of property {@link #getShowTableSuggestionValueHelp showTableSuggestionValueHelp}.
         * 
         * For tabular suggestions, this flag will show/hide the button at the end of the suggestion table that triggers the event "valueHelpRequest" when pressed. The default value is true.
         * 
         * NOTE: If suggestions are not tabular or no suggestions are used, the button will not be displayed and this flag is without effect.
         * 
         * Default value is `true`.
        */
        public getShowTableSuggestionValueHelp(): boolean;

        /**
            * Gets current value of property {@link #getShowValueHelp showValueHelp}.
         * 
         * If set to true, a value help indicator will be displayed inside the control. When clicked the event "valueHelpRequest" will be fired.
         * 
         * Default value is `false`.
        */
        public getShowValueHelp(): boolean;

        /**
            * Getter for property `showValueStateMessage`. Whether the value state message should be shown. This property is already available for sap.m.Input since 1.16.0.
         * 
         * Default value is `true`
        */
        public getShowValueStateMessage(): boolean;

        /**
            * Gets current value of property {@link #getStartSuggestion startSuggestion}.
         * 
         * Minimum length of the entered text in input before suggest event is fired. The default value is 1 which means the suggest event is fired after user types in input. When it's set to 0, suggest event is fired when input with no text gets focus.
         * 
         * Default value is `1`.
        */
        public getStartSuggestion(): number;

        /**
            * Gets content of aggregation {@link #getSuggestionColumns suggestionColumns}.
         * 
         * The suggestionColumns and suggestionRows are for tabular input suggestions. This aggregation allows for binding the table columns; for more details see the aggregation "suggestionRows".
        */
        public getSuggestionColumns(): {};

        /**
            * Gets content of aggregation {@link #getSuggestionItems suggestionItems}.
         * 
         * SuggestItems are the items which will be shown in the suggestion popup. Changing this aggregation (by calling addSuggestionItem, insertSuggestionItem, removeSuggestionItem, removeAllSuggestionItems, destroySuggestionItems) after input is rendered will open/close the suggestion popup. o display suggestions with two text values, it is also possible to add sap.ui.core/ListItems as SuggestionItems (since 1.21.1). For the selected ListItem, only the first value is returned to the input field.
        */
        public getSuggestionItems(): {};

        /**
            * Gets content of aggregation {@link #getSuggestionRows suggestionRows}.
         * 
         * The suggestionColumns and suggestionRows are for tabular input suggestions. This aggregation allows for binding the table cells. The items of this aggregation are to be bound directly or to set in the suggest event method. Note: If this aggregation is filled, the aggregation suggestionItems will be ignored.
        */
        public getSuggestionRows(): {};

        /**
            * Gets current value of property {@link #getSuggestionRowValidator suggestionRowValidator}.
         * 
         * Defines the validation callback function called when a suggestion row gets selected.
         * 
         * Default value is ``.
        */
        public getSuggestionRowValidator(): any;

        /**
            * Gets current value of property {@link #getTextFormatMode textFormatMode}.
         * 
         * Defines the display text format mode.
         * 
         * Default value is `Value`.
        */
        public getTextFormatMode(): sap.m.InputTextFormatMode;

        /**
            * Gets current value of property {@link #getTextFormatter textFormatter}.
         * 
         * Defines the display text formatter function.
         * 
         * Default value is ``.
        */
        public getTextFormatter(): any;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * HTML type of the internal `input` tag (e.g. Text, Number, Email, Phone). The particular effect of this property differs depending on the browser and the current language settings, especially for the type Number.<br> This parameter is intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.<br> Only the default value `sap.m.InputType.Text` may be used in combination with data model formats. `sap.ui.model` defines extended formats that are mostly incompatible with normal HTML representations for numbers and dates.
         * 
         * Default value is `Text`.
        */
        public getType(): sap.m.InputType;

        /**
            * Gets the input value.
        */
        public getValue(): string;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Defines the value of the control.
        */
        public getValue(): string;

        /**
            * Gets current value of property {@link #getValueHelpOnly valueHelpOnly}.
         * 
         * If set to true, direct text input is disabled and the control will trigger the event "valueHelpRequest" for all user interactions. The properties "showValueHelp", "editable", and "enabled" must be set to true, otherwise the property will have no effect
         * 
         * Default value is `false`.
        */
        public getValueHelpOnly(): boolean;

        /**
            * Gets current value of property {@link #getValueLiveUpdate valueLiveUpdate}.
         * 
         * Indicates when the value gets updated with the user changes: At each keystroke (true) or first when the user presses enter or tabs out (false).
         * 
         * Default value is `false`.
        */
        public getValueLiveUpdate(): boolean;

        /**
            * Getter for property `valueStateText`. The text which is shown in the value state message popup. If not specfied a default text is shown. This property is already available for sap.m.Input since 1.16.0.
         * 
         * Default value is empty/`undefined`
        */
        public getValueStateText(): string;

        /**
            * Checks for the provided `sap.m.Column` in the aggregation {@link #getSuggestionColumns suggestionColumns}. and returns its index if found or -1 otherwise.
        */
        public indexOfSuggestionColumn(oSuggestionColumn: Column): number;

        /**
            * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getSuggestionItems suggestionItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfSuggestionItem(oSuggestionItem: Item): number;

        /**
            * Checks for the provided `sap.m.ColumnListItem` in the aggregation {@link #getSuggestionRows suggestionRows}. and returns its index if found or -1 otherwise.
        */
        public indexOfSuggestionRow(oSuggestionRow: ColumnListItem): number;

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
            * Inserts a suggestionColumn into the aggregation {@link #getSuggestionColumns suggestionColumns}.
        */
        public insertSuggestionColumn(oSuggestionColumn: Column, iIndex: number): this;

        /**
            * Inserts a suggestionItem into the aggregation {@link #getSuggestionItems suggestionItems}.
        */
        public insertSuggestionItem(oSuggestionItem: Item, iIndex: number): this;

        /**
            * Inserts suggestion item.
        */
        public insertSuggestionItem(oItem: Item, iIndex: number): this;

        /**
            * Inserts suggestion row.
        */
        public insertSuggestionRow(oItem: Item, iIndex: number): this;

        /**
            * Inserts a suggestionRow into the aggregation {@link #getSuggestionRows suggestionRows}.
        */
        public insertSuggestionRow(oSuggestionRow: ColumnListItem, iIndex: number): this;

        /**
            * Invalidates the control.
        */
        protected invalidate(): any;

        /**
            * Event handler for the onFocusIn event.
        */
        public onfocusin(oEvent: jQuery.Event): any;

        /**
            * Event handler for user input.
        */
        public oninput(oEvent: jQuery.Event): any;

        /**
            * Keyboard handler for the onMouseDown event.
        */
        public onmousedown(oEvent: jQuery.Event): any;

        /**
            * Keyboard handler for down arrow key.
        */
        public onsapdown(oEvent: jQuery.Event): any;

        /**
            * Keyboard handler for end key.
        */
        public onsapend(oEvent: jQuery.Event): any;

        /**
            * Keyboard handler for enter key.
        */
        public onsapenter(oEvent: jQuery.Event): any;

        /**
            * Keyboard handler for escape key.
        */
        public onsapescape(oEvent: jQuery.Event): any;

        /**
            * Keyboard handler for the onFocusLeave event.
        */
        public onsapfocusleave(oEvent: jQuery.Event): any;

        /**
            * Keyboard handler for home key.
        */
        public onsaphome(oEvent: jQuery.Event): any;

        /**
            * Keyboard handler for page down key.
        */
        public onsappagedown(oEvent: jQuery.Event): any;

        /**
            * Keyboard handler for page up key.
        */
        public onsappageup(oEvent: jQuery.Event): any;

        /**
            * Keyboard handler for up arrow key.
        */
        public onsapup(oEvent: jQuery.Event): any;

        /**
            * Removes aggregation.
        */
        protected removeAggregation(sAggregationName: string, oObject: {}, bSuppressInvalidate: boolean): this;

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
            * Removes all the controls from the aggregation {@link #getSuggestionColumns suggestionColumns}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSuggestionColumns(): {};

        /**
            * Removes all the controls from the aggregation {@link #getSuggestionItems suggestionItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSuggestionItems(): {};

        /**
            * Removes all suggestion items.
        */
        public removeAllSuggestionItems(): boolean;

        /**
            * Removes all suggestion rows.
        */
        public removeAllSuggestionRows(): boolean;

        /**
            * Removes all the controls from the aggregation {@link #getSuggestionRows suggestionRows}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSuggestionRows(): {};

        /**
            * Removes a suggestionColumn from the aggregation {@link #getSuggestionColumns suggestionColumns}.
        */
        public removeSuggestionColumn(vSuggestionColumn: number | string | Column): Column;

        /**
            * Removes suggestion item.
        */
        public removeSuggestionItem(oItem: Item): boolean;

        /**
            * Removes a suggestionItem from the aggregation {@link #getSuggestionItems suggestionItems}.
        */
        public removeSuggestionItem(vSuggestionItem: number | string | Item): Item;

        /**
            * Removes suggestion row.
        */
        public removeSuggestionRow(oItem: Item): boolean;

        /**
            * Removes a suggestionRow from the aggregation {@link #getSuggestionRows suggestionRows}.
        */
        public removeSuggestionRow(vSuggestionRow: number | string | ColumnListItem): ColumnListItem;

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
            * Sets aggregation.
        */
        protected setAggregation(sAggregationName: string, oObject: string, bSuppressInvalidate: string): this;

        /**
            * Sets a new value for property {@link #getDateFormat dateFormat}.
         * 
         * Only used if type=date and no datepicker is available. The data is displayed and the user input is parsed according to this format. NOTE: The value property is always of the form RFC 3339 (YYYY-MM-dd).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `YYYY-MM-dd`.
        */
        public setDateFormat(sDateFormat: string): this;

        /**
            * Sets a new value for property {@link #getDescription description}.
         * 
         * The description is a text after the input field, e.g. units of measurement, currencies.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDescription(sDescription: string): this;

        /**
            * Sets the inner input DOM value.
        */
        protected setDOMValue(value: string): any;

        /**
            * Sets a new value for property {@link #getEnableSuggestionsHighlighting enableSuggestionsHighlighting}.
         * 
         * Specifies whether the suggestions highlighting is enabled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableSuggestionsHighlighting(bEnableSuggestionsHighlighting: boolean): this;

        /**
            * Sets a new value for property {@link #getFieldWidth fieldWidth}.
         * 
         * This property only takes effect if the description property is set. It controls the distribution of space between the input field and the description text. The default value is 50% leaving the other 50% for the description.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `50%`.
        */
        public setFieldWidth(sFieldWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getFilterSuggests filterSuggests}.
         * 
         * Defines whether to filter the provided suggestions before showing them to the user.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setFilterSuggests(bFilterSuggests: boolean): this;

        /**
            * Sets a new value for property {@link #getMaxLength maxLength}.
         * 
         * Maximum number of characters. Value '0' means the feature is switched off. This parameter is not compatible with the input type `sap.m.InputType.Number`. If the input type is set to `Number`, the `maxLength` value is ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMaxLength(iMaxLength: number): this;

        /**
            * Sets a new value for property {@link #getMaxSuggestionWidth maxSuggestionWidth}.
         * 
         * If set, the value of this parameter will control the horizontal size of the suggestion list to display more data. This allows suggestion lists to be wider than the input field if there is enough space available. By default, the suggestion list is always as wide as the input field. Note: The value will be ignored if the actual width of the input field is larger than the specified parameter value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxSuggestionWidth(sMaxSuggestionWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a custom result filter function for tabular suggestions to select the text that is passed to the input field. Default is to check whether the first cell with a "text" property begins with the typed value. For one value and two-value suggestions this callback function is not called.
        */
        public setRowResultFunction(fnFilter: (() => any)): this;

        /**
            * Sets the associated {@link #getSelectedItem selectedItem}.
        */
        public setSelectedItem(oSelectedItem: sap.ui.core.ID | Item): this;

        /**
            * Sets a new value for property {@link #getSelectedKey selectedKey}.
         * 
         * Defines the key of the selected item.
         * 
         * ** Note: ** If duplicate keys exist, the first item matching the key is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setSelectedKey(sSelectedKey: string): this;

        /**
            * Sets the associated {@link #getSelectedRow selectedRow}.
        */
        public setSelectedRow(oSelectedRow: sap.ui.core.ID | ColumnListItem): this;

        /**
            * Shows suggestions.
        */
        public setShowSuggestion(bValue: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSuggestion showSuggestion}.
         * 
         * If this is set to true, suggest event is fired when user types in the input. Changing the suggestItems aggregation in suggest event listener will show suggestions within a popup. When runs on phone, input will first open a dialog where the input and suggestions are shown. When runs on a tablet, the suggestions are shown in a popup next to the input.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowSuggestion(bShowSuggestion: boolean): this;

        /**
            * Sets a new value for property {@link #getShowTableSuggestionValueHelp showTableSuggestionValueHelp}.
         * 
         * For tabular suggestions, this flag will show/hide the button at the end of the suggestion table that triggers the event "valueHelpRequest" when pressed. The default value is true.
         * 
         * NOTE: If suggestions are not tabular or no suggestions are used, the button will not be displayed and this flag is without effect.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowTableSuggestionValueHelp(bShowTableSuggestionValueHelp: boolean): this;

        /**
            * Shows value help suggestions in table.
        */
        public setShowTableSuggestionValueHelp(bValue: boolean): this;

        /**
            * Shows the value help.
        */
        public setShowValueHelp(bShowValueHelp: boolean): this;

        /**
            * Sets a new value for property {@link #getShowValueHelp showValueHelp}.
         * 
         * If set to true, a value help indicator will be displayed inside the control. When clicked the event "valueHelpRequest" will be fired.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowValueHelp(bShowValueHelp: boolean): this;

        /**
            * Setter for property `showValueStateMessage`.
         * 
         * Default value is `true`
        */
        public setShowValueStateMessage(bShowValueStateMessage: boolean): this;

        /**
            * Sets a new value for property {@link #getStartSuggestion startSuggestion}.
         * 
         * Minimum length of the entered text in input before suggest event is fired. The default value is 1 which means the suggest event is fired after user types in input. When it's set to 0, suggest event is fired when input with no text gets focus.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setStartSuggestion(iStartSuggestion: number): this;

        /**
            * Sets a new value for property {@link #getSuggestionRowValidator suggestionRowValidator}.
         * 
         * Defines the validation callback function called when a suggestion row gets selected.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setSuggestionRowValidator(oSuggestionRowValidator: any): this;

        /**
            * Sets a new value for property {@link #getTextFormatMode textFormatMode}.
         * 
         * Defines the display text format mode.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Value`.
        */
        public setTextFormatMode(sTextFormatMode: sap.m.InputTextFormatMode): this;

        /**
            * Sets a new value for property {@link #getTextFormatter textFormatter}.
         * 
         * Defines the display text formatter function.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setTextFormatter(oTextFormatter: any): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * HTML type of the internal `input` tag (e.g. Text, Number, Email, Phone). The particular effect of this property differs depending on the browser and the current language settings, especially for the type Number.<br> This parameter is intended to be used with touch devices that use different soft keyboard layouts depending on the given input type.<br> Only the default value `sap.m.InputType.Text` may be used in combination with data model formats. `sap.ui.model` defines extended formats that are mostly incompatible with normal HTML representations for numbers and dates.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Text`.
        */
        public setType(sType: sap.m.InputType): this;

        /**
            * Setter for property `value`.
         * 
         * Default value is empty/`undefined`.
        */
        public setValue(sValue: string): this;

        /**
            * Sets a new value for property {@link #getValueHelpOnly valueHelpOnly}.
         * 
         * If set to true, direct text input is disabled and the control will trigger the event "valueHelpRequest" for all user interactions. The properties "showValueHelp", "editable", and "enabled" must be set to true, otherwise the property will have no effect
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setValueHelpOnly(bValueHelpOnly: boolean): this;

        /**
            * Sets the value help.
        */
        public setValueHelpOnly(bValueHelpOnly: boolean): this;

        /**
            * Sets a new value for property {@link #getValueLiveUpdate valueLiveUpdate}.
         * 
         * Indicates when the value gets updated with the user changes: At each keystroke (true) or first when the user presses enter or tabs out (false).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setValueLiveUpdate(bValueLiveUpdate: boolean): this;

        /**
            * Setter for property `valueStateText`.
         * 
         * Default value is empty/`undefined`
        */
        public setValueStateText(sValueStateText: string): this;

        /**
            * Forwards aggregations with the name of items or columns to the internal table.
        */
        public unbindAggregation(sAggregationName: string): this;

        /**
            * Unbinds aggregation {@link #getSuggestionColumns suggestionColumns} from model data.
        */
        public unbindSuggestionColumns(): this;

        /**
            * Unbinds aggregation {@link #getSuggestionRows suggestionRows} from model data.
        */
        public unbindSuggestionRows(): this;

        /**
            * Updates the inner input field.
        */
        protected updateInputField(): any;

        /**
            * Update suggestion items.
        */
        public updateSuggestionItems(): this;

        /**
            * Checks whether the given value is of the proper type for the given aggregation name.
         * 
         * This method is already called by {@link #setAggregation}, {@link #addAggregation} and {@link #insertAggregation}. In many cases, subclasses of ManagedObject don't need to call it again in their mutator methods.
        */
        protected validateAggregation(sAggregationName: string, oObject: this | any, bMultiple: boolean): this | any;

        /**
            * Validates aggregation.
        */
        protected validateAggregation(sAggregationName: string, oObject: {}, bMultiple: boolean): this;

    }
}