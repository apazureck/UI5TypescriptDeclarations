declare module 'sap/m/MultiEditField' {
    import { Event } from 'sap/ui/base/Event';
    import { Item } from 'sap/ui/core/Item';
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { XMLComposite, IXMLCompositeSettings } from 'sap/ui/core/XMLComposite';

    export interface IMultiEditFieldSettings extends IXMLCompositeSettings {
        selectedItem?: Item;
        showValueHelp?: boolean;
        nullable?: boolean;
        required?: boolean;
    }

    /**
    
    */
    export class MultiEditField extends XMLComposite {

        /**
            * Constructor for MultiEditField
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMultiEditFieldSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: Item): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.MultiEditField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiEditField` itself.
         * 
         * This event is fired when the item of items aggregation in the selection field is changed.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            selectedItem: Item,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.MultiEditField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiEditField` itself.
         * 
         * This event is fired when the item of items aggregation in the selection field is changed.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            selectedItem: Item,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getItems items} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItems(oBindingInfo: {}): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.m.MultiEditField`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.MultiEditField with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.XMLComposite.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { selectedItem?: Item, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * The field is not adjusted by the Form control to meet the cell's width
        */
        protected getFormDoNotAdjustWidth(): boolean;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * The items that should be displayed after the predefined special items in the selection field.
        */
        public getItems(): {};

        /**
            * Returns a metadata object for class sap.m.MultiEditField.
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
            * Gets current value of property {@link #getNullable nullable}.
         * 
         * Defines whether the 'Leave blank' item should be available in the selection field.
         * 
         * Default value is `true`.
        */
        public getNullable(): boolean;

        /**
            * Gets current value of property {@link #getRequired required}.
         * 
         * Defines whether the 'Label' is required for the selection field.
         * 
         * Default value is `false`.
        */
        public getRequired(): boolean;

        /**
            * Gets current value of property {@link #getSelectedItem selectedItem}.
         * 
         * The selected item from `items` aggregation. This can be `null` if no valid item or special item is selected.
        */
        public getSelectedItem(): Item;

        /**
            * Gets current value of property {@link #getShowValueHelp showValueHelp}.
         * 
         * Defines whether the 'Select new value' item should be available in the selection field. Please note that upon selecting this item, the previously selected item is restored. As a consequence, the `selectedItem` property never contains this item.
         * 
         * Default value is `true`.
        */
        public getShowValueHelp(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: Item): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: Item, iIndex: number): this;

        /**
            * Checks if the 'Leave blank' item is selected.
        */
        public isBlankSelected(): boolean;

        /**
            * Checks if the 'Keep existing value' item is selected.
        */
        public isKeepExistingSelected(): boolean;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | Item): Item;

        /**
            * Sets the previously selected item as the currently selected item of the internal select control.
        */
        protected resetSelection(): any;

        /**
            * Sets a new value for property {@link #getNullable nullable}.
         * 
         * Defines whether the 'Leave blank' item should be available in the selection field.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setNullable(bNullable: boolean): this;

        /**
            * Sets a new value for property {@link #getRequired required}.
         * 
         * Defines whether the 'Label' is required for the selection field.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setRequired(bRequired: boolean): this;

        /**
            * Sets a new value for property {@link #getSelectedItem selectedItem}.
         * 
         * The selected item from `items` aggregation. This can be `null` if no valid item or special item is selected.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSelectedItem(sSelectedItem: Item): this;

        /**
            * Sets a new value for property {@link #getShowValueHelp showValueHelp}.
         * 
         * Defines whether the 'Select new value' item should be available in the selection field. Please note that upon selecting this item, the previously selected item is restored. As a consequence, the `selectedItem` property never contains this item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowValueHelp(bShowValueHelp: boolean): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }
}