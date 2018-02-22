declare module 'sap/m/NotificationListBase' {
    import { Event } from 'sap/ui/base/Event';
    import { Image } from 'sap/m/Image';
    import { Control } from 'sap/ui/core/Control';
    import { Text } from 'sap/m/Text';
    import { OverflowToolbar } from 'sap/m/OverflowToolbar';
    import { Button } from 'sap/m/Button';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ManagedObject } from 'sap/ui/base/ManagedObject';
    import { Sorter } from 'sap/ui/model/Sorter';
    import { Binding } from 'sap/ui/model/Binding';
    import { ListItemBase, IListItemBaseSettings } from 'sap/m/ListItemBase';

    export interface INotificationListBaseSettings extends IListItemBaseSettings {
        priority?: sap.ui.core.Priority;
        title?: string;
        datetime?: string;
        showButtons?: boolean;
        showCloseButton?: boolean;
        authorName?: string;
        authorPicture?: sap.ui.core.URI;
    }

    /**
    
    */
    export class NotificationListBase extends ListItemBase {

        /**
            * Constructor for a new NotificationListBase.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: INotificationListBaseSettings);


        /**
            * Returns the sap.m.Image or the sap.ui.core.Control used in the NotificationListBase's author picture.
        */
        protected _getAuthorImage(): Image | Control;

        /**
            * Returns the sap.m.Text control used in the NotificationListBase's author name.
        */
        protected _getAuthorName(): Text;

        /**
            * Returns the sap.m.Text control used in the NotificationListBase's header title.
        */
        protected _getDateTimeText(): Text;

        /**
            * Returns the sap.m.Text control used in the NotificationListBase's header title.
        */
        protected _getHeaderTitle(): Text;

        /**
            * Returns the sap.m.OverflowToolbar control used in the NotificationListBase.
        */
        protected _getToolbar(): OverflowToolbar;

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
        protected addAggregation(aggregationName: string, object: {}, suppressInvalidate: boolean): this;

        /**
            * Adds some button to the aggregation {@link #getButtons buttons}.
        */
        public addButton(oButton: Button): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.m.NotificationListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.NotificationListBase` itself.
         * 
         * Fired when the close button of the notification is pressed.<br>** Note: ** Pressing the close button doesn't destroy the notification automatically.
        */
        attachClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.m.NotificationListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.NotificationListBase` itself.
         * 
         * Fired when the close button of the notification is pressed.<br>** Note: ** Pressing the close button doesn't destroy the notification automatically.
        */
        attachClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation.
        */
        public bindAggregation(aggregationName: string, bindingInfo: {}): this;

        /**
            * Bind an aggregation to the model.
         * 
         * The bound aggregation will use the given template, clone it for each item which exists in the bound list and set the appropriate binding context. This is a generic method which can be used to bind any aggregation to the model. A managed object may flag aggregations in the metamodel with bindable="bindable" to get typed bind* Something * methods for those aggregations.
        */
        public bindAggregation(sName: string, oBindingInfo: { path: string, template: ManagedObject, templateShareable?: boolean, factory: (() => any), startIndex: number, length: number, sorter?: Sorter | {}, filters?: {}, key: string | (() => any), parameters?: {}, groupHeaderFactory?: (() => any), }): this;

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
            * Clones the NotificationListBase.
        */
        protected clone(): this;

        /**
            * Closes the NotificationListBase.
        */
        public close(): any;

        /**
            * Destroys (all) the managed object(s) in the aggregation named `sAggregationName` and empties the aggregation. If the aggregation did contain any object, this ManagedObject is marked as changed.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically destroy all objects in an aggregation. Use the concrete method destroy* XYZ * for aggregation 'XYZ' instead.
        */
        protected destroyAggregation(sAggregationName: string, bSuppressInvalidate?: boolean): this;

        /**
            * Destroys aggregation.
        */
        protected destroyAggregation(aggregationName: string, suppressInvalidate: boolean): this;

        /**
            * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
        */
        public destroyButtons(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.m.NotificationListBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.NotificationListBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:close close} to attached listeners.
        */
        protected fireClose(mParameters?: {}): this;

        /**
            * Gets aggregation.
        */
        protected getAggregation(aggregationName: string, defaultObjectToBeCreated: {}): this;

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
            * Gets current value of property {@link #getAuthorName authorName}.
         * 
         * Determines the notification group's author name.
         * 
         * Default value is ``.
        */
        public getAuthorName(): string;

        /**
            * Gets current value of property {@link #getAuthorPicture authorPicture}.
         * 
         * Determines the URL of the notification group's author picture.
        */
        public getAuthorPicture(): sap.ui.core.URI;

        /**
            * Get the binding object for a specific aggregation/property
        */
        public getBinding(sName: string): Binding;

        /**
            * Gets binding.
        */
        public getBinding(aggregationName: string): any | Binding;

        /**
            * Returns the binding infos for the given property or aggregation. The binding info contains information about path, binding object, format options, sorter, filter etc. for the property or aggregation. As the binding object is only created when the model becomes available, the binding property may be undefined.
        */
        protected getBindingInfo(sName: string): {};

        /**
            * Gets binding information.
        */
        protected getBindingInfo(aggregationName: string): any | {};

        /**
            * Get the binding path for a specific aggregation/property
        */
        protected getBindingPath(sName: string): string;

        /**
            * Gets the binding path.
        */
        protected getBindingPath(aggregationName: string): any | string;

        /**
            * Gets content of aggregation {@link #getButtons buttons}.
         * 
         * Action buttons.
        */
        public getButtons(): {};

        /**
            * Gets current value of property {@link #getDatetime datetime}.
         * 
         * Determines the due date of the NotificationListItem.
         * 
         * Default value is ``.
        */
        public getDatetime(): string;

        /**
            * Returns a metadata object for class sap.m.NotificationListBase.
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
            * Gets current value of property {@link #getPriority priority}.
         * 
         * Determines the priority of the Notification.
         * 
         * Default value is `None`.
        */
        public getPriority(): sap.ui.core.Priority;

        /**
            * Gets current value of property {@link #getShowButtons showButtons}.
         * 
         * Determines the action buttons visibility.
         * 
         * Default value is `true`.
        */
        public getShowButtons(): boolean;

        /**
            * Gets current value of property {@link #getShowCloseButton showCloseButton}.
         * 
         * Determines the visibility of the close button.
         * 
         * Default value is `true`.
        */
        public getShowCloseButton(): boolean;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Determines the title of the NotificationListBase item.
         * 
         * Default value is ``.
        */
        public getTitle(): string;

        /**
            * Searches for the provided ManagedObject in the named aggregation and returns its 0-based index if found, or -1 otherwise. Returns -2 if the given named aggregation is of cardinality 0..1 and doesn't reference the given object.
         * 
         * ** Note: ** This method is a low-level API as described in <a href="#lowlevelapi">the class documentation</a>. Applications or frameworks must not use this method to generically determine the position of an object in an aggregation. Use the concrete method indexOf* XYZ * for aggregation 'XYZ' instead.
        */
        protected indexOfAggregation(sAggregationName: string, oObject: this): number;

        /**
            * Gets index of an aggregation.
        */
        protected indexOfAggregation(aggregationName: string, object: {}): any | number;

        /**
            * Checks for the provided `sap.m.Button` in the aggregation {@link #getButtons buttons}. and returns its index if found or -1 otherwise.
        */
        public indexOfButton(oButton: Button): number;

        /**
            * Sets initial values of the control.
        */
        protected init(): any;

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
        protected insertAggregation(aggregationName: string, object: {}, index: number, suppressInvalidate: boolean): this;

        /**
            * Inserts a button into the aggregation {@link #getButtons buttons}.
        */
        public insertButton(oButton: Button, iIndex: number): this;

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
        protected removeAggregation(aggregationName: string, object: {}, suppressInvalidate: boolean): this;

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
            * Removes all aggregations.
        */
        protected removeAllAggregation(aggregationName: string, suppressInvalidate: boolean): any | any[];

        /**
            * Removes all the controls from the aggregation {@link #getButtons buttons}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllButtons(): {};

        /**
            * Removes a button from the aggregation {@link #getButtons buttons}.
        */
        public removeButton(vButton: number | string | Button): Button;

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
        protected setAggregation(aggregationName: string, object: {}, suppressInvalidate: boolean): this;

        /**
            * Sets a new value for property {@link #getAuthorName authorName}.
         * 
         * Determines the notification group's author name.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setAuthorName(sAuthorName: string): this;

        /**
            * Overwrites the authorName property.
        */
        public setAuthorName(authorName: string): string;

        /**
            * Sets a new value for property {@link #getAuthorPicture authorPicture}.
         * 
         * Determines the URL of the notification group's author picture.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAuthorPicture(sAuthorPicture: sap.ui.core.URI): this;

        /**
            * Overwrites the setter for the datetime property.
        */
        public setDatetime(dateTime: string): this;

        /**
            * Sets a new value for property {@link #getDatetime datetime}.
         * 
         * Determines the due date of the NotificationListItem.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setDatetime(sDatetime: string): this;

        /**
            * Sets a new value for property {@link #getPriority priority}.
         * 
         * Determines the priority of the Notification.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setPriority(sPriority: sap.ui.core.Priority): this;

        /**
            * Sets a new value for property {@link #getShowButtons showButtons}.
         * 
         * Determines the action buttons visibility.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowButtons(bShowButtons: boolean): this;

        /**
            * Sets a new value for property {@link #getShowCloseButton showCloseButton}.
         * 
         * Determines the visibility of the close button.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowCloseButton(bShowCloseButton: boolean): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Determines the title of the NotificationListBase item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setTitle(sTitle: string): this;

        /**
            * Overwrites the setter of the title property.
        */
        public setTitle(title: string): this;

        /**
            * Validates aggregation.
        */
        protected validateAggregation(aggregationName: string, object: {}, multiple: boolean): this;

        /**
            * Checks whether the given value is of the proper type for the given aggregation name.
         * 
         * This method is already called by {@link #setAggregation}, {@link #addAggregation} and {@link #insertAggregation}. In many cases, subclasses of ManagedObject don't need to call it again in their mutator methods.
        */
        protected validateAggregation(sAggregationName: string, oObject: this | any, bMultiple: boolean): this | any;

    }
}