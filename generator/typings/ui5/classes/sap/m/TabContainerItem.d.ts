declare module 'sap/m/TabContainerItem' {
    import { Event } from 'sap/ui/base/Event';
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface ITabContainerItemSettings extends IElementSettings {
        name?: string;
        key?: string;
        modified?: boolean;
    }

    /**
    
    */
    export class TabContainerItem extends Element {

        /**
            * Constructor for a new `TabContainerItem`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITabContainerItemSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemPropertyChanged itemPropertyChanged} event of this `sap.m.TabContainerItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TabContainerItem` itself.
         * 
         * Sends information that some of the properties have changed.
        */
        attachItemPropertyChanged<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item changed. */
            itemChanged: TabContainerItem, /* * The key of the property. */
            propertyKey: string, /* * The value of the property. */
            propertyValue: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemPropertyChanged itemPropertyChanged} event of this `sap.m.TabContainerItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TabContainerItem` itself.
         * 
         * Sends information that some of the properties have changed.
        */
        attachItemPropertyChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item changed. */
            itemChanged: TabContainerItem, /* * The key of the property. */
            propertyKey: string, /* * The value of the property. */
            propertyValue: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemPropertyChanged itemPropertyChanged} event of this `sap.m.TabContainerItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemPropertyChanged(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.TabContainerItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:itemPropertyChanged itemPropertyChanged} to attached listeners.
        */
        protected fireItemPropertyChanged(mParameters?: { itemChanged?: TabContainerItem, propertyKey?: string, propertyValue?: any, }): this;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content displayed for this item.
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getKey key}.
         * 
         * Determines the name of the item. Can be used as input for subsequent actions.
        */
        public getKey(): string;

        /**
            * Returns a metadata object for class sap.m.TabContainerItem.
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
            * Gets current value of property {@link #getModified modified}.
         * 
         * Shows if a control is edited (default is false). Items that are marked as modified have a * symbol to indicate that they haven't been saved.
         * 
         * Default value is `false`.
        */
        public getModified(): boolean;

        /**
            * Gets current value of property {@link #getName name}.
         * 
         * Determines the text to be displayed for the item.
         * 
         * Default value is ``.
        */
        public getName(): string;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getKey key}.
         * 
         * Determines the name of the item. Can be used as input for subsequent actions.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setKey(sKey: string): this;

        /**
            * Sets a new value for property {@link #getModified modified}.
         * 
         * Shows if a control is edited (default is false). Items that are marked as modified have a * symbol to indicate that they haven't been saved.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setModified(bModified: boolean): this;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * Determines the text to be displayed for the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setName(sName: string): this;

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
            * Overwrites the method in order to suppress invalidation for some properties.
        */
        protected setProperty(sName: string, vValue: boolean | string | {}, bSuppressInvalidation: boolean): this;

    }
}