declare module 'sap/ui/base/ManagedObject' {
    import { Event } from 'sap/ui/base/Event';
    import { Type } from 'sap/ui/model/Type';
    import { Sorter } from 'sap/ui/model/Sorter';
    import { Binding } from 'sap/ui/model/Binding';
    import { Context } from 'sap/ui/model/Context';
    import { Model } from 'sap/ui/model/Model';
    import { ContextBinding } from 'sap/ui/model/ContextBinding';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface IManagedObjectSettings extends IEventProviderSettings {
    }

    /**
    
    */
    export class ManagedObject extends EventProvider {

        /**
            * Constructs and initializes a managed object with the given `sId` and settings.
         * 
         * If the optional `mSettings` are given, they must be a simple object that defines values for properties, aggregations, associations or events keyed by their name.
         * 
         * ** Valid Names and Value Ranges: **
         * 
         * The property (key) names supported in the object literal are exactly the (case sensitive) names documented in the JSDoc for the properties, aggregations, associations and events of the current class and its base classes. Note that for 0..n aggregations and associations this name usually is the plural name, whereas it is the singular name in case of 0..1 relations.
         * 
         * If a key name is ambiguous for a specific managed object class (e.g. a property has the same name as an event), then this method prefers property, aggregation, association and event in that order. To resolve such ambiguities, the keys can be prefixed with `aggregation:`, `association:` or `event:` (such keys containing a colon (':') must be quoted to be valid Javascript).
         * 
         * The possible values for a setting depend on its kind:  <li>for simple properties, the value has to match the documented type of the property (no type conversion occurs) <li>for 0..1 aggregations, the value has to be an instance of the aggregated type <li>for 0..n aggregations, the value has to be an array of instances of the aggregated type or a single instance <li>for 0..1 associations, an instance of the associated type or an id (string) is accepted <li>for 0..n associations, an array of instances of the associated type or of IDs is accepted <li>for events either a function (event handler) is accepted or an array of length 2 where the first element is a function and the 2nd element is an object to invoke the method on. 
         * 
         * Each subclass should document the name and type of its supported settings in its constructor documentation.
         * 
         * Example usage: `new Dialog({
         *    title: "Some title text",            // property of type "string"
         *    showHeader: true,                    // property of type "boolean"
         *    endButton: new Button(...),          // 0..1 aggregation
         *    content: [                           // 0..n aggregation
         *       new Input(...),
         *       new Input(...)
         *    ],
         *    afterClose: function(oEvent) { ... } // event handler function
         * });`
         * 
         * Instead of static values and object instances, data binding expressions can be used, either embedded in a string or as a binding info object as described in {@link #bindProperty} or {@link #bindAggregation}.
         * 
         * Example usage: `new Dialog({
         *    title: "{/title}",       // embedded binding expression, points to a string property in the data model
         *    ...
         *    content: {               // binding info object
         *       path : "/inputItems", // points to a collection in the data model
         *       template : new Input(...)
         *    }
         * });`
         * 
         * Note that when setting string values, any curly braces in those values need to be escaped, so they are not interpreted as binding expressions. Use {@link #escapeSettingsValue} to do so.
         * 
         * Besides the settings documented below, ManagedObject itself supports the following special settings:  * `id : * sap.ui.core.ID *` an ID for the new instance. Some subclasses (Element, Component) require the id to be unique in a specific scope (e.g. an Element Id must be unique across all Elements, a Component id must be unique across all Components). <li>`models : * object *` a map of {@link sap.ui.model.Model} instances keyed by their model name (alias). Each entry with key * k * in this object has the same effect as a call `this.setModel(models[k], k);`. * `bindingContexts : * object *` a map of {@link sap.ui.model.Context} instances keyed by their model name. Each entry with key * k * in this object has the same effect as a call `this.setBindingContext(bindingContexts[k], k);` * `objectBindings : * object *` a map of binding paths keyed by the corresponding model name. Each entry with key * k * in this object has the same effect as a call `this.bindObject(objectBindings[k], k);` * `metadataContexts : * object *` an array of single binding contexts keyed by the corresponding model or context name. The purpose of the `metadataContexts` special setting is to deduce as much information as possible from the binding context of the control in order to be able to predefine certain standard properties like e.g. * visible, enabled, tooltip,... *
         * 
         * The structure is an array of single contexts, where a single context is a map containing the following keys: <ul> <li>`path: * string (mandatory) *` The path to the corresponding model property or object, e.g. '/Customers/Name'. A path can also be relative, e.g. 'Name' * `model: * string (optional) *` The name of the model, in case there is no name then the undefined model is taken * `name: * string (optional) *` A name for the context to used in templating phase * `kind: * string (optional) *` The kind of the adapter, either `field` for single properties or `object` for structured contexts. <li>`adapter: * string (optional) *` The path to an interpretion class that dilivers control relevant data depending on the context, e.g. enabled, visible. If not supplied the OData meta data is interpreted.  The syntax for providing the `metadataContexts` is as follows: `{SINGLE_CONTEXT1},...,{SINGLE_CONTEXTn}` or for simplicity in case there is only one context `{SINGLE_CONTEXT}`.
         * 
         * Examples for such metadataContexts are:  * `{/Customers/Name}` a single part with an absolute path to the property * Name * of the * Customers * entity set in the default model * `{path: 'Customers/Name', model:'json'}` a single part with an absolute path to the property * Name * of the * Customers * entity set in a named model * `{parts: [{path: 'Customers/Name'},{path: 'editable', model: 'viewModel'}]}` a combination of to single binding contexts, one context from the default model and one from the viewModel </li> </ul>
        */
        public constructor(sId: string, mSettings: IManagedObjectSettings, oScope: {});


        /**
            * Hook method to let descendants of ManagedObject know when propagated contextual settings have changed
        */
        private _onContextualSettingsChanged(): any;

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
            * Adds some object with the ID `sId` to the association identified by `sAssociationName` and marks this ManagedObject as changed.
         * 
         * This method does not avoid duplicates.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically add an object to an association. Use the concrete method add* XYZ * for association 'XYZ' or the generic {@link #applySettings} instead.
        */
        protected addAssociation(sAssociationName: string, sId: string | this, bSuppressInvalidate?: boolean): this;

        /**
            * Adds a listener function that will be called during each propagation step on every control
        */
        private addPropagationListener(listener: (() => any)): this;

        /**
            * Sets all the properties, aggregations, associations and event handlers as given in the object literal `mSettings`. If a property, aggregation, etc. is not listed in `mSettings`, then its value is not changed by this method.
         * 
         * For properties and 0..1 aggregations/associations, any given setting overwrites the current value. For 0..n aggregations, the given values are appended; event listeners are registered in addition to existing ones.
         * 
         * For the possible keys and values in `mSettings` see the general documentation in {@link sap.ui.base.ManagedObject} or the specific documentation of the constructor of the concrete managed object class.
        */
        public applySettings(mSettings: {}, oScope?: {}): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:formatError formatError} event of this `sap.ui.base.ManagedObject`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.
         * 
         * Fired when a new value for a bound property should have been propagated from the model, but formatting the value failed with an exception.
        */
        attachFormatError<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ManagedObject instance whose property should have received the model update. */
            element: ManagedObject, /* * Name of the property for which the binding should have been updated. */
            property: string, /* * Data type used in the binding (if any). */
            type: Type, /* * New value (model representation) as propagated from the model. */
            newValue: any, /* * Old value (external representation) as previously stored in the ManagedObject. */
            oldValue: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:formatError formatError} event of this `sap.ui.base.ManagedObject`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.
         * 
         * Fired when a new value for a bound property should have been propagated from the model, but formatting the value failed with an exception.
        */
        attachFormatError<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ManagedObject instance whose property should have received the model update. */
            element: ManagedObject, /* * Name of the property for which the binding should have been updated. */
            property: string, /* * Data type used in the binding (if any). */
            type: Type, /* * New value (model representation) as propagated from the model. */
            newValue: any, /* * Old value (external representation) as previously stored in the ManagedObject. */
            oldValue: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:modelContextChange modelContextChange} event of this `sap.ui.base.ManagedObject`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.
         * 
         * Fired when models or contexts are changed on this object (either by calling setModel/setBindingContext or due to propagation)
        */
        attachModelContextChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:modelContextChange modelContextChange} event of this `sap.ui.base.ManagedObject`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.
         * 
         * Fired when models or contexts are changed on this object (either by calling setModel/setBindingContext or due to propagation)
        */
        attachModelContextChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:parseError parseError} event of this `sap.ui.base.ManagedObject`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.
         * 
         * Fired when a new value for a bound property should have been propagated to the model, but parsing the value failed with an exception.
        */
        attachParseError<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ManagedObject instance whose property initiated the model update. */
            element: ManagedObject, /* * Name of the property for which the bound model property should have been been updated. */
            property: string, /* * Data type used in the binding. */
            type: Type, /* * New value (external representation) as parsed by the binding. */
            newValue: any, /* * Old value (external representation) as previously stored in the ManagedObject. */
            oldValue: any, /* * Localized message describing the parse error */
            message: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:parseError parseError} event of this `sap.ui.base.ManagedObject`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.
         * 
         * Fired when a new value for a bound property should have been propagated to the model, but parsing the value failed with an exception.
        */
        attachParseError<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ManagedObject instance whose property initiated the model update. */
            element: ManagedObject, /* * Name of the property for which the bound model property should have been been updated. */
            property: string, /* * Data type used in the binding. */
            type: Type, /* * New value (external representation) as parsed by the binding. */
            newValue: any, /* * Old value (external representation) as previously stored in the ManagedObject. */
            oldValue: any, /* * Localized message describing the parse error */
            message: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:validationError validationError} event of this `sap.ui.base.ManagedObject`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.
         * 
         * Fired when a new value for a bound property should have been propagated to the model, but validating the value failed with an exception.
        */
        attachValidationError<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ManagedObject instance whose property initiated the model update. */
            element: ManagedObject, /* * Name of the property for which the bound model property should have been been updated. */
            property: string, /* * Data type used in the binding. */
            type: Type, /* * New value (external representation) as parsed and validated by the binding. */
            newValue: any, /* * Old value (external representation) as previously stored in the ManagedObject. */
            oldValue: any, /* * Localized message describing the validation issues */
            message: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:validationError validationError} event of this `sap.ui.base.ManagedObject`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.
         * 
         * Fired when a new value for a bound property should have been propagated to the model, but validating the value failed with an exception.
        */
        attachValidationError<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ManagedObject instance whose property initiated the model update. */
            element: ManagedObject, /* * Name of the property for which the bound model property should have been been updated. */
            property: string, /* * Data type used in the binding. */
            type: Type, /* * New value (external representation) as parsed and validated by the binding. */
            newValue: any, /* * Old value (external representation) as previously stored in the ManagedObject. */
            oldValue: any, /* * Localized message describing the validation issues */
            message: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:validationSuccess validationSuccess} event of this `sap.ui.base.ManagedObject`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.
         * 
         * Fired after a new value for a bound property has been propagated to the model. Only fired, when the binding uses a data type.
        */
        attachValidationSuccess<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ManagedObject instance whose property initiated the model update. */
            element: ManagedObject, /* * Name of the property for which the bound model property has been updated. */
            property: string, /* * Data type used in the binding. */
            type: Type, /* * New value (external representation) as propagated to the model.
 * 
 * <b>Note: </b>the model might modify (normalize) the value again and this modification will be stored in the ManagedObject. The 'newValue' parameter of this event contains the value <b>before</b> such a normalization. */
            newValue: any, /* * Old value (external representation) as previously stored in the ManagedObject. */
            oldValue: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:validationSuccess validationSuccess} event of this `sap.ui.base.ManagedObject`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.base.ManagedObject` itself.
         * 
         * Fired after a new value for a bound property has been propagated to the model. Only fired, when the binding uses a data type.
        */
        attachValidationSuccess<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ManagedObject instance whose property initiated the model update. */
            element: ManagedObject, /* * Name of the property for which the bound model property has been updated. */
            property: string, /* * Data type used in the binding. */
            type: Type, /* * New value (external representation) as propagated to the model.
 * 
 * <b>Note: </b>the model might modify (normalize) the value again and this modification will be stored in the ManagedObject. The 'newValue' parameter of this event contains the value <b>before</b> such a normalization. */
            newValue: any, /* * Old value (external representation) as previously stored in the ManagedObject. */
            oldValue: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Bind an aggregation to the model.
         * 
         * The bound aggregation will use the given template, clone it for each item which exists in the bound list and set the appropriate binding context. This is a generic method which can be used to bind any aggregation to the model. A managed object may flag aggregations in the metamodel with bindable="bindable" to get typed bind* Something * methods for those aggregations.
        */
        public bindAggregation(sName: string, oBindingInfo: { path: string, template: ManagedObject, templateShareable?: boolean, factory: (() => any), startIndex: number, length: number, sorter?: Sorter | {}, filters?: {}, key: string | (() => any), parameters?: {}, groupHeaderFactory?: (() => any), }): this;

        /**
            * Bind the object to the referenced entity in the model, which is used as the binding context to resolve bound properties or aggregations of the object itself and all of its children relatively to the given path.
        */
        public bindContext(sPath: string): this;

        /**
            * Bind the object to the referenced entity in the model, which is used as the binding context to resolve bound properties or aggregations of the object itself and all of its children relatively to the given path. If a relative binding path is used, this will be applied whenever the parent context changes. There is no difference between {@link sap.ui.core.Element#bindElement} and {@link sap.ui.base.ManagedObject#bindObject}.
        */
        public bindObject(vPath: { path: string, parameters?: {}, model?: string, events?: {}, }, mParameters?: {}): this;

        /**
            * Binds a property to the model.
         * 
         * The Setter for the given property will be called with the value retrieved from the data model. When the binding mode is `OneTime`, the property will be set only once. When it is `OneWay`, the property will be updated whenever the corresponding data in the model changes. In mode `TwoWay`, changes to the property (not originating in the model) will be reported back to the model (typical use case: user interaction changes the value of a control).
         * 
         * This is a generic method which can be used to bind any property to the model. A managed object may flag any property in its metadata with `bindable="bindable"` to additionally provide named methods to bind and unbind the corresponding property.
         * 
         * ** Composite Binding **<br> A composite property binding which combines data from multiple model paths can be declared using the `parts` parameter instead of `path`. The `formatter` function or a {@link sap.ui.model.CompositeType composite type} then can be used to combine the parts, Properties with a composite binding are also known as "calculated fields".
         * 
         * Example: `oTxt.bindValue({
         *     parts: [
         *       {path: "/firstName", type: "sap.ui.model.type.String"},
         *       {path: "myModel2>/lastName"}
         *     ]
         *   });`
         * 
         * Note that a composite binding will be forced into mode `OneWay` when one of the binding parts is not in mode `TwoWay`.
         * 
         * ** Formatter Functions **<br> When a formatter function is specified for the binding or for a binding part, it will be called with the value of the bound model property. After setting the initial property value, the formatter function will only be called again when the bound model property changes (simple property binding) or when at least one of the bound model properties changes (formatter function of a composite binding). Note that a binding only monitors the bound model data for changes. Dependencies of the formatter implementation to other model data is not known to the binding and changes won't be detected.
         * 
         * When the formatter for a property binding (simple or composite) is called, the managed object will be given as `this` context. For formatters of binding parts in a composite binding, this is not the case.
        */
        public bindProperty(sName: string, oBindingInfo: { path: string, model?: string, formatter?: (() => any), useRawValues?: boolean, useInternalValues?: boolean, type?: Type | string, targetType?: string, formatOptions?: {}, constraints?: {}, mode?: sap.ui.model.BindingMode, parameters?: {}, parts?: {}, }): this;

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
            * Creates a new ManagedObject from the given data.
         * 
         * If `vData` is a managed object already, that object is returned. If `vData` is an object (literal), then a new object is created with `vData` as settings. The type of the object is either determined by a property of name `Type` (capital 'T') in the `vData` or by a property `type` (lower case 't') in the `oKeyInfo` object. In both cases, the type can be specified by name (dot separated name of the class) or by the constructor function of the class.
        */
        public static create(vData: ManagedObject | {}, oKeyInfo?: {}, oScope?: {}): any;

        /**
            * Cleans up the resources associated with this object and all its aggregated children.
         * 
         * After an object has been destroyed, it can no longer be used in!
         * 
         * Applications should call this method if they don't need the object any longer.
        */
        public destroy(bSuppressInvalidate?: boolean): any;

        /**
            * Destroys (all) the managed object(s) in the aggregation named `sAggregationName` and empties the aggregation. If the aggregation did contain any object, this ManagedObject is marked as changed.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically destroy all objects in an aggregation. Use the concrete method destroy* XYZ * for aggregation 'XYZ' instead.
        */
        protected destroyAggregation(sAggregationName: string, bSuppressInvalidate?: boolean): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:formatError formatError} event of this `sap.ui.base.ManagedObject`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFormatError(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:modelContextChange modelContextChange} event of this `sap.ui.base.ManagedObject`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachModelContextChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:parseError parseError} event of this `sap.ui.base.ManagedObject`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachParseError(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:validationError validationError} event of this `sap.ui.base.ManagedObject`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachValidationError(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:validationSuccess validationSuccess} event of this `sap.ui.base.ManagedObject`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachValidationSuccess(fnFunction: (() => any), oListener: {}): this;

        /**
            * Escapes the given value so it can be used in the constructor's settings object. Should be used when property values are initialized with static string values which could contain binding characters (curly braces).
        */
        public static escapeSettingsValue(vValue: any): any;

        /**
            * Defines a new subclass of ManagedObject with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` can contain the same information that {@link sap.ui.base.Object.extend} already accepts, plus the following new properties in the 'metadata' object literal:
         * 
         *  * `library : * string *` * `properties : * object *` * `defaultProperty : * string *` * `aggregations : * object *` * `defaultAggregation : * string *` * `associations : * object *` * `events : * object *` * `specialSettings : * object *`// this one is still experimental and not for public usage! 
         * 
         * Each of these properties is explained in more detail lateron.
         * 
         * Example: `ManagedObect.extend('sap.mylib.MyClass', {
         *   metadata : {
         *     library: 'sap.mylib',
         *     properties : {
         *       value: 'string',
         *       width: 'sap.ui.core.CSSSize',
         *       height: { type: 'sap.ui.core.CSSSize', defaultValue: '100%' }
         *     },
         *     defaultProperty : 'value',
         *     aggregations : {
         *       header : { type: 'sap.mylib.FancyHeader', multiple : false }
         *       items : 'sap.ui.core.Control'
         *     },
         *     defaultAggregation : 'items',
         *     associations : {
         *       initiallyFocused : { type: 'sap.ui.core.Control' }
         *     },
         *     events: {
         *       beforeOpen : {
         *         parameters : {
         *           opener : { type: 'sap.ui.core.Control' }
         *         }
         *       }
         *     },
         *   },
         * 
         *   init: function() {
         *   }
         * 
         * }); // end of 'extend' call`
         * 
         * Detailed explanation of properties<br>
         * 
         * ** 'library' ** : * string *<br> Name of the library that the new subclass should belong to. If the subclass is a control or element, it will automatically register with that library so that authoring tools can discover it. By convention, the name of the subclass should have the library name as a prefix, e.g. 'sap.ui.commons.Panel' belongs to library 'sap.ui.commons'.
         * 
         * ** 'properties' ** : * object *<br> An object literal whose properties each define a new managed property in the ManagedObject subclass. The value can either be a simple string which then will be assumed to be the type of the new property or it can be an object literal with the following properties  * `type: * string *` type of the new property. Must either be one of the built-in types 'string', 'boolean', 'int', 'float', 'object' or 'any', or a type created and registered with {@link sap.ui.base.DataType.createType} or an array type based on one of the previous types. * `group:* string *` a semantic grouping of the properties, intended to be used in design time tools. Allowed values are (case sensitive): Accessibility, Appearance, Behavior, Data, Designtime, Dimension, Identification, Misc * `defaultValue: * any *` the default value for the property or null if there is no defaultValue. * `bindable: * boolean|string *` (either can be omitted or set to the boolean value `true` or the magic string 'bindable') If set to `true` or 'bindable', additional named methods `bind* Name *` and `unbind* Name *` are generated as convenience. Despite its name, setting this flag is not mandatory to make the managed property bindable. The generic methods {@link #bindProperty} and {@link #unbindProperty} can always be used.  Property names should use camelCase notation, start with a lowercase letter and only use characters from the set [a-zA-Z0-9_$]. If an aggregation in the literal is preceded by a JSDoc comment (doclet) and if the UI5 plugin and template are used for JSDoc3 generation, the doclet will be used as generic documentation of the aggregation.
         * 
         * For each public property 'foo', the following methods will be created by the "extend" method and will be added to the prototype of the subclass:  <li>getFoo() - returns the current value of property 'foo'. Internally calls {@link #getProperty} <li>setFoo(v) - sets 'v' as the new value of property 'foo'. Internally calls {@link #setProperty} <li>bindFoo(c) - (only if property was defined to be 'bindable'): convenience function that wraps {@link #bindProperty} <li>unbindFoo() - (only if property was defined to be 'bindable'): convenience function that wraps {@link #unbindProperty} 
         * 
         * ** 'defaultProperty' ** : * string *<br> When specified, the default property must match the name of one of the properties defined for the new subclass (either own or inherited). The named property can be used to identify the main property to be used for bound data. E.g. the value property of a field control.
         * 
         * ** 'aggregations' ** : * object *<br> An object literal whose properties each define a new aggregation in the ManagedObject subclass. The value can either be a simple string which then will be assumed to be the type of the new aggregation or it can be an object literal with the following properties  * `type: * string *` type of the new aggregation. must be the full global name of a ManagedObject subclass (in dot notation, e.g. 'sap.m.Button') * `[multiple]: * boolean *` whether the aggregation is a 0..1 (false) or a 0..n aggregation (true), defaults to true * `[singularName]: * string *`. Singular name for 0..n aggregations. For 0..n aggregations the name by convention should be the plural name. Methods affecting multiple objects in an aggregation will use the plural name (e.g. getItems(), whereas methods that deal with a single object will use the singular name (e.g. addItem). The framework knows a set of common rules for building plural form of English nouns and uses these rules to determine a singular name on its own. if that name is wrong, a singluarName can be specified with this property. * [visibility]: * string *` either 'hidden' or 'public', defaults to 'public'. Aggregations that belong to the API of a class must be 'public' whereas 'hidden' aggregations typically are used for the implementation of composite classes (e.g. composite controls) * `bindable: * boolean|string *` (either can be omitted or set to the boolean value `true` or the magic string 'bindable') If set to `true` or 'bindable', additional named methods `bind* Name *` and `unbind* Name *` are generated as convenience. Despite its name, setting this flag is not mandatory to make the managed aggregation bindable. The generic methods {@link #bindAggregation} and {@link #unbindAggregation} can always be used.  Aggregation names should use camelCase notation, start with a lowercase letter and only use characters from the set [a-zA-Z0-9_$]. The name for a hidden aggregations might start with an underscore. If an aggregation in the literal is preceded by a JSDoc comment (doclet) and if the UI5 plugin and template are used for JSDoc3 generation, the doclet will be used as generic documentation of the aggregation.
         * 
         * For each public aggregation 'item' of cardinality 0..1, the following methods will be created by the "extend" method and will be added to the prototype of the subclass:  * getItem() - returns the current value of aggregation 'item'. Internally calls {@link #getAggregation} with a default value of `undefined` * setItem(o) - sets 'o' as the new aggregated object in aggregation 'item'. Internally calls {@link #setAggregation} * destroyItem(o) - destroy a currently aggregated object in aggregation 'item' and clears the aggregation. Internally calls {@link #destroyAggregation} * bindItem(c) - (only if aggregation was defined to be 'bindable'): convenience function that wraps {@link #bindAggregation} * unbindItem() - (only if aggregation was defined to be 'bindable'): convenience function that wraps {@link #unbindAggregation}  For a public aggregation 'items' of cardinality 0..n, the following methods will be created:  * getItems() - returns an array with the objects contained in aggregation 'items'. Internally calls {@link #getAggregation} with a default value of `[]` * addItem(o) - adds an object as last element in the aggregation 'items'. Internally calls {@link #addAggregation} * insertItem(o,p) - inserts an object into the aggregation 'items'. Internally calls {@link #insertAggregation} * removeItem(v) - removes an object from the aggregation 'items'. Internally calls {@link #removeAggregation} * removeItems() - removes all object from the aggregation 'items'. Internally calls {@link #removeAllAggregation} * destroyItems() - destroy all currently aggregated objects in aggregation 'items' and clears the aggregation. Internally calls {@link #destroyAggregation} * bindItems(c) - (only if aggregation was defined to be 'bindable'): convenience function that wraps {@link #bindAggregation} * unbindItems() - (only if aggregation was defined to be 'bindable'): convenience function that wraps {@link #unbindAggregation}  For private or hidden aggregations, no methods are generated.
         * 
         * ** 'defaultAggregation' ** : * string *<br> When specified, the default aggregation must match the name of one of the aggregations defined for the new subclass (either own or inherited). The named aggregation will be used in contexts where no aggregation is specified. E,g. when an object in an XMLView embeds other objects without naming an aggregation, as in the following example: `&lt;!-- assuming the defaultAggregation for Dialog is 'content' -->
         *  &lt;Dialog>
         *    &lt;Text/>
         *    &lt;Button/>
         *  &lt;/Dialog>`
         * 
         * ** 'associations' ** : * object *<br> An object literal whose properties each define a new association of the ManagedObject subclass. The value can either be a simple string which then will be assumed to be the type of the new association or it can be an object literal with the following properties  * `type: * string *` type of the new association * `multiple: * boolean *` whether the association is a 0..1 (false) or a 0..n association (true), defaults to false(1) for associations * `[singularName]: * string *`. Singular name for 0..n associations. For 0..n associations the name by convention should be the plural name. Methods affecting multiple objects in an association will use the plural name (e.g. getItems(), whereas methods that deal with a single object will use the singular name (e.g. addItem). The framework knows a set of common rules for building plural form of English nouns and uses these rules to determine a singular name on its own. if that name is wrong, a singluarName can be specified with this property.  Association names should use camelCase notation, start with a lowercase letter and only use characters from the set [a-zA-Z0-9_$]. If an association in the literal is preceded by a JSDoc comment (doclet) and if the UI5 plugin and template are used for JSDoc3 generation, the doclet will be used as generic documentation of the association.
         * 
         * For each association 'ref' of cardinality 0..1, the following methods will be created by the "extend" method and will be added to the prototype of the subclass:  * getRef() - returns the current value of association 'item'. Internally calls {@link #getAssociation} with a default value of `undefined` * setRef(o) - sets 'o' as the new associated object in association 'item'. Internally calls {@link #setAssociation}  For a public association 'refs' of cardinality 0..n, the following methods will be created:  * getRefs() - returns an array with the objects contained in association 'items'. Internally calls {@link #getAssociation} with a default value of `[]` * addRef(o) - adds an object as last element in the association 'items'. Internally calls {@link #addAssociation} * removeRef(v) - removes an object from the association 'items'. Internally calls {@link #removeAssociation} * removeAllRefs() - removes all objects from the association 'items'. Internally calls {@link #removeAllAssociation} 
         * 
         * ** 'events' ** : * object *<br> An object literal whose properties each define a new event of the ManagedObject subclass. The value can either be a simple string which then will be assumed to be the type of the new association or it can be an object literal with the following properties  * `allowPreventDefault: * boolean *` whether the event allows to prevented the default behavior of the event source * `parameters: * object *` an object literal that describes the parameters of this event.  Event names should use camelCase notation, start with a lowercase letter and only use characters from the set [a-zA-Z0-9_$]. If an event in the literal is preceded by a JSDoc comment (doclet) and if the UI5 plugin and template are used for JSDoc3 generation, the doclet will be used as generic documentation of the event.
         * 
         * For each event 'Some' the following methods will be created by the "extend" method and will be added to the prototype of the subclass:  * attachSome(fn,o) - registers a listener for the event. Internally calls {@link #attachEvent} * detachSome(fn,o) - deregisters a listener for the event. Internally calls {@link #detachEvent} * fireSome() - fire the event. Internally calls {@link #fireEvent} 
         * 
         * ** 'specialSettings' ** : * object *<br> Special settings are an experimental feature and MUST NOT BE USED by controls or applications outside of the sap.ui.core project.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Searches and returns all aggregated objects that pass the given check function.
         * 
         * When the search is done recursively (`bRecursive === true`), it will be executed depth-first and ancestors will be added to the result array before their descendants.
         * 
         * If no check function is given, all aggregated objects will pass the check and be added to the result array.
         * 
         * ** Take care: this operation might be expensive. **
        */
        public findAggregatedObjects(bRecursive: boolean, fnCondition?: boolean): {};

        /**
            * Fires event {@link #event:formatError formatError} to attached listeners.
        */
        protected fireFormatError(mParameters?: { element?: ManagedObject, property?: string, type?: Type, newValue?: any, oldValue?: any, }): this;

        /**
            * Fires event {@link #event:modelContextChange modelContextChange} to attached listeners.
        */
        protected fireModelContextChange(mParameters?: {}): this;

        /**
            * Fires event {@link #event:parseError parseError} to attached listeners.
        */
        protected fireParseError(mParameters?: { element?: ManagedObject, property?: string, type?: Type, newValue?: any, oldValue?: any, message?: string, }): this;

        /**
            * Fires event {@link #event:validationError validationError} to attached listeners.
        */
        protected fireValidationError(mParameters?: { element?: ManagedObject, property?: string, type?: Type, newValue?: any, oldValue?: any, message?: string, }): this;

        /**
            * Fires event {@link #event:validationSuccess validationSuccess} to attached listeners.
        */
        protected fireValidationSuccess(mParameters?: { element?: ManagedObject, property?: string, type?: Type, newValue?: any, oldValue?: any, }): this;

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
            * Returns the content of the association with the given name.
         * 
         * For associations of cardinality 0..1, a single string with the ID of an associated object is returned (if any). For cardinality 0..n, an array with the IDs of the associated objects is returned.
         * 
         * If the association does not contain any objects(s), the given `oDefaultForCreation` is set as new value of the association and returned to the caller. The only supported values for `oDefaultForCreation` are `null` and `undefined` in the case of cardinality 0..1 and `null`, `undefined` or an empty array (`[]`) in case of cardinality 0..n. If the argument is omitted, `null` is used independently from the cardinality.
         * 
         * ** Note: ** the need to specify a default value and the fact that it is stored as new value of a so far empty association is recognized as a shortcoming of this API but can no longer be changed for compatibility reasons.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically retrieve the content of an association. Use the concrete method get* XYZ * for association 'XYZ' instead.
        */
        protected getAssociation(sAssociationName: string, oDefaultForCreation: {}): string | {};

        /**
            * Get the binding object for a specific aggregation/property
        */
        public getBinding(sName: string): Binding;

        /**
            * Get the binding context of this object for the given model name.
         * 
         * If the object does not have a binding context set on itself and has no own model set, it will use the first binding context defined in its parent hierarchy.
         * 
         * ** Note: ** to be compatible with future versions of this API, you must not use the following model names:  * `null` * empty string `""` * string literals `"null"` or `"undefined"`  Omitting the model name (or using the value `undefined`) is explicitly allowed and refers to the default model.
         * 
         * ** Note: ** A ManagedObject inherits binding contexts from the Core only when it is a descendant of a UIArea.
        */
        public getBindingContext(sModelName?: string): Context;

        /**
            * Returns the binding infos for the given property or aggregation. The binding info contains information about path, binding object, format options, sorter, filter etc. for the property or aggregation. As the binding object is only created when the model becomes available, the binding property may be undefined.
        */
        protected getBindingInfo(sName: string): {};

        /**
            * Get the binding path for a specific aggregation/property
        */
        protected getBindingPath(sName: string): string;

        /**
            * Returns the parent managed object as new eventing parent to enable control event bubbling or `null` if this object hasn't been added to a parent yet.
        */
        protected getEventingParent(): this;

        /**
            * Returns the object's Id.
        */
        public getId(): string;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the metadata for the ManagedObject class.
        */
        public static getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.base.EventProvider.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Get the model to be used for data bindings with the given model name. If the object does not have a model set on itself, it will use the first model defined in its parent hierarchy.
         * 
         * The name can be omitted to reference the default model or it must be a non-empty string.
         * 
         * ** Note: ** to be compatible with future versions of this API, you must not use the following model names:  * `null` * empty string `""` * string literals `"null"` or `"undefined"`  Omitting the model name (or using the value `undefined`) is explicitly allowed and refers to the default model.
        */
        public getModel(sName?: string | any): Model;

        /**
            * Get the object binding object for a specific model.
         * 
         * ** Note: ** to be compatible with future versions of this API, you must not use the following model names:  * `null` * empty string `""` * string literals `"null"` or `"undefined"`  Omitting the model name (or using the value `undefined`) is explicitly allowed and refers to the default model.
        */
        public getObjectBinding(sModelName?: string): ContextBinding;

        /**
            * Returns the origin info for the value of the given property.
         * 
         * The origin info might contain additional information for translatable texts. The bookkeeping of this information is not active by default and must be activated by configuration. Even then, it might not be present for all properties and their values depending on where the value came form.
        */
        public getOriginInfo(sPropertyName: string): {};

        /**
            * Returns the parent managed object or `null` if this object hasn't been added to a parent yet.
         * 
         * The parent returned by this method is the technical parent used for data binding, invalidation, rendering etc. It might differ from the object on which the application originally added this object (the so called 'API parent'): some composite controls internally use hidden controls or containers to store their children. This method will return the innermost container that technically contains this object as a child.
         * 
         * ** Example: **
         * 
         * Assume that a `Dialog` internally uses a (hidden) `VerticalLayout` to store its content:
         * 
         * `Dialog (API parent)
         *    \__ VerticalLayout (hidden composite part)
         *       \__ Text (API child)`
         * 
         * If you add some content by calling the `Dialog.prototype.addContent` API, this will lead to the following observations:
         * 
         * `oDialog.addContent(oText);
         *   console.log(oText.getParent() === oDialog);  // false
         *   console.log(oText.getParent() instanceof VerticalLayout); // true
         *   console.log(oText.getParent().getParent() === oDialog); // true now, but might fail with later versions`
         * 
         * Technically, from API perspective, `oText` is added as a child to `Dialog`. But internally, the `Dialog` adds the child to the hidden `VerticalLayout` container. If you now call the `getParent` method of the child, you will get the internal `VerticalLayout` object and not the `Dialog` API parent.
         * 
         * ** Note: ** The internal (hidden) structure of a composite control is not fixed and may be changed (see also our "Compatibility Rules"). Therefore, you should ** never ** rely on a specific structure or object being returned by `getParent`.
         * 
         * ** Note: ** There is no API to determine the original API parent.
        */
        public getParent(): this;

        /**
            * get propagation listeners
        */
        private getPropagationListeners(): any[];

        /**
            * Returns the value for the property with the given `sPropertyName`.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically retrieve the value of a property. Use the concrete method get* XYZ * for property 'XYZ' instead.
        */
        protected getProperty(sPropertyName: string): any;

        /**
            * Check if any model is set to the ManagedObject or to one of its parents (including UIArea and Core).
         * 
         * ** Note: ** A ManagedObject inherits models from the Core only when it is a descendant of a UIArea.
        */
        public hasModel(): boolean;

        /**
            * Searches for the provided ManagedObject in the named aggregation and returns its 0-based index if found, or -1 otherwise. Returns -2 if the given named aggregation is of cardinality 0..1 and doesn't reference the given object.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically determine the position of an object in an aggregation. Use the concrete method indexOf* XYZ * for aggregation 'XYZ' instead.
        */
        protected indexOfAggregation(sAggregationName: string, oObject: this): number;

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
            * This triggers rerendering of itself and its children.
         *  As `sap.ui.base.ManagedObject` "bubbles up" the invalidate, changes to child-`Elements` will also result in rerendering of the whole sub tree.
        */
        protected invalidate(): any;

        /**
            * Find out whether a property or aggregation is bound
        */
        public isBound(sName: string): boolean;

        /**
            * Returns whether rerendering is currently suppressed on this ManagedObject
        */
        protected isInvalidateSuppressed(): any;

        /**
            * Returns whether the given property value is initial and has not been explicitly set or bound. Even after setting the default value or setting null/undefined (which also causes the default value to be set), the property is no longer initial. A property can be reset to initial state by calling `resetProperty(sPropertyName)`.
        */
        protected isPropertyInitial(sPropertyName: string): boolean;

        /**
            * This method is used internally and should only be overridden by a tree managed object which utilizes the tree binding. In this case and if the aggregation is a tree node the overridden method should then return true. If true is returned the tree binding will be used instead of the list binding.
        */
        protected isTreeBinding(sName: string): boolean;

        /**
            * Generic method which is called, whenever messages for this object exists.
        */
        protected propagateMessages(sName: string, aMessages: any[]): any;

        /**
            * Generic method which can be called, when an aggregation needs to be refreshed. This method does not make any change on the aggregation, but just calls the `getContexts` method of the binding to trigger fetching of new data.
         * 
         * Subclasses should call this method only in the implementation of a named refresh method and for no other purposes. The framework might change the conditions under which the method is called and the method implementation might rely on those conditions.
        */
        protected refreshAggregation(sName: string): any;

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
            * Removes all the objects in the 0..n-association named `sAssociationName` and returns an array with their IDs. This ManagedObject is marked as changed, if the association contained any objects.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically remove all object from an association. Use the concrete method removeAll* XYZ * for association 'XYZ' instead.
        */
        protected removeAllAssociation(sAssociationName: string, bSuppressInvalidate?: boolean): any[];

        /**
            * Removes a `ManagedObject` from the association named `sAssociationName`.
         * 
         * If an object is removed, the ID of that object is returned and this `ManagedObject` is marked as changed. Otherwise `null` is returned.
         * 
         * If the same object was added multiple times to the same association, only a single occurrence of it will be removed by this method. If the object is not found or if the parameter can't be interpreted neither as a `ManagedObject` (or ID) nor as an index in the association, nothing will be removed. The same is true if an index is given and if that index is out of range for the association.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically remove an object from an association. Use the concrete method remove* XYZ * for association 'XYZ' instead.
        */
        protected removeAssociation(sAssociationName: string, vObject: number | string | this, bSuppressInvalidate?: boolean): string | any;

        /**
            * remove a propagation listener
        */
        private removePropagationListener(listener: (() => any)): this;

        /**
            * Resets the given property to the default value and also restores the "initial" state (like it has never been set).
        */
        protected resetProperty(sPropertyName: string): this;

        /**
            * Activates the given ID and settings preprocessors, executes the given function and restores the previously active preprocessors.
         * 
         * When a preprocessor is not defined in `oPreprocessors`, then the currently active preprocessor is temporarily deactivated while `fn` is executed.
         * 
         * See the `_fnIdPreprocessor` and `_fnSettingsPreprocessor` members in this class for a detailed description of the preprocessors.
         * 
         * This method is intended for internal use in the sap/ui/base and sap/ui/core packages only.
        */
        private static runWithPreprocessors(fn: (() => any), oPreprocessors?: { id?: (() => any), settings?: (() => any), }, oThisArg?: {}): any;

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
            * Sets the associated object for the given managed association of cardinality '0..1' and marks this ManagedObject as changed.
         * 
         * The associated object can either be given by itself or by its id. If `null` or `undefined` is given, the association is cleared.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically set an object in an association. Use the concrete method set* XYZ * for association 'XYZ' or the generic {@link #applySettings} instead.
        */
        protected setAssociation(sAssociationName: string, sId: string | this, bSuppressInvalidate?: boolean): this;

        /**
            * Set the binding context for this ManagedObject for the model with the given name.
         * 
         * ** Note: ** to be compatible with future versions of this API, you must not use the following model names:  * `null` * empty string `""` * string literals `"null"` or `"undefined"`  Omitting the model name (or using the value `undefined`) is explicitly allowed and refers to the default model.
         * 
         * ** Note: ** A ManagedObject inherits binding contexts from the Core only when it is a descendant of a UIArea.
        */
        public setBindingContext(oContext: Context, sModelName?: string): this;

        /**
            * Sets or unsets a model for the given model name for this ManagedObject.
         * 
         * The `sName` must either be `undefined` (or omitted) or a non-empty string. When the name is omitted, the default model is set/unset. To be compatible with future versions of this API, you must not use the following model names:  * `null` * empty string `""` * string literals `"null"` or `"undefined"` 
         * 
         * When `oModel` is `null` or `undefined`, a previously set model with that name is removed from this ManagedObject. If an ancestor (parent, UIArea or Core) has a model with that name, this ManagedObject will immediately inherit that model from its ancestor.
         * 
         * All local bindings that depend on the given model name are updated (created if the model references became complete now; updated, if any model reference has changed; removed if the model references became incomplete now).
         * 
         * Any change (new model, removed model, inherited model) is also applied to all aggregated descendants as long as a descendant doesn't have its own model set for the given name.
         * 
         * ** Note: ** By design, it is not possible to hide an inherited model by setting a `null` or `undefined` model. Applications can set an empty model to achieve the same.
         * 
         * ** Note: ** A ManagedObject inherits models from the Core only when it is a descendant of a UIArea.
        */
        public setModel(oModel: Model, sName?: string): this;

        /**
            * Sets the given value for the given property after validating and normalizing it, marks this object as changed.
         * 
         * If the value is not valid with regard to the declared data type of the property, an Error is thrown. In case `null` or `undefined` is passed, the default value for this property is used (see {@link #validateProperty}). To fully reset the property to initial state, use {@link #resetProperty} instead. If the validated and normalized `oValue` equals the current value of the property, the internal state of this object is not changed (apart from the result of {@link #isPropertyInitial}). If the value changes, it is stored internally and the {@link #invalidate} method is called on this object. In the case of TwoWay databinding, the bound model is informed about the property change.
         * 
         * Note that ManagedObject only implements a single level of change tracking: if a first call to setProperty recognizes a change, 'invalidate' is called. If another call to setProperty reverts that change, invalidate() will be called again, the new status is not recognized as being 'clean' again.
         * 
         * ** Note: ** This method is a low level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically set a property. Use the concrete method set* XYZ * for property 'XYZ' or the generic {@link #applySettings} instead.
        */
        protected setProperty(sPropertyName: string, oValue: any, bSuppressInvalidate?: boolean): this;

        /**
            * Returns a simple string representation of this managed object.
         * 
         * Mainly useful for tracing purposes.
        */
        public toString(): string;

        /**
            * Unbind the aggregation from the model
        */
        public unbindAggregation(sName: string, bSuppressReset: boolean): this;

        /**
            * Removes the defined binding context of this object, all bindings will now resolve relative to the parent context again.
        */
        public unbindContext(sModelName?: string): this;

        /**
            * Removes the defined binding context of this object, all bindings will now resolve relative to the parent context again.
        */
        public unbindObject(sModelName?: string): this;

        /**
            * Unbind the property from the model
        */
        public unbindProperty(sName: string, bSuppressReset: boolean): this;

        /**
            * Generic method which is called whenever an aggregation binding has changed.
         * 
         * Depending on the type of the list binding and on additional configuration, this method either destroys all elements in the aggregation `sName` and recreates them anew or tries to reuse as many existing objects as possible. It is up to the method which strategy it uses.
         * 
         * In case a managed object needs special handling for an aggregation binding, it can create a named update method (e.g. `update* Rows *` for an aggregation `rows`) which then will be called by the framework instead of this generic method.
         * 
         * Subclasses should call this method only in the implementation of such a named update method and for no other purposes. The framework might change the conditions under which the method is called and the method implementation might rely on those conditions.
        */
        protected updateAggregation(sName: string): any;

        /**
            * Checks whether the given value is of the proper type for the given aggregation name.
         * 
         * This method is already called by {@link #setAggregation}, {@link #addAggregation} and {@link #insertAggregation}. In many cases, subclasses of ManagedObject don't need to call it again in their mutator methods.
        */
        protected validateAggregation(sAggregationName: string, oObject: this | any, bMultiple: boolean): this | any;

        /**
            * Checks whether the given value is of the proper type for the given property name.
         * 
         * In case `null` or `undefined` is passed, the default value for this property is used as value. If no default value is defined for the property, the default value of the type of the property is used.
         * 
         * If the property has a data type that is an instance of sap.ui.base.DataType and if a `normalize` function is defined for that type, that function will be called with the resulting value as only argument. The result of the function call is then used instead of the raw value.
         * 
         * This method is called by {@link #setProperty}. In many cases, subclasses of ManagedObject don't need to call it themselves.
        */
        protected validateProperty(sPropertyName: string, oValue: any): any;

    }
}