declare module 'sap/m/ComboBox' {
    import { Event } from 'sap/ui/base/Event';
    import { Item } from 'sap/ui/core/Item';
    import { Popover } from 'sap/m/Popover';
    import { Dialog } from 'sap/m/Dialog';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ComboBoxBase, IComboBoxBaseSettings } from 'sap/m/ComboBoxBase';

    export interface IComboBoxSettings extends IComboBoxBaseSettings {
        selectedKey?: string;
        selectedItemId?: string;
        showSecondaryValues?: boolean;
        filterSecondaryValues?: boolean;
    }

    /**
    
    */
    export class ComboBox extends ComboBoxBase {

        /**
            * Constructor for a new ComboBox.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IComboBoxSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.ComboBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ComboBox` itself.
         * 
         * This event is fired when the value in the text input field is changed in combination with one of the following actions:
         * 
         *  * The focus leaves the text input field * The * Enter * key is pressed 
         * 
         * In addition, this event is also fired when an item in the list is selected.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new <code>value</code> of the <code>control</code> */
            value: string, /* * Indicates whether the change event was caused by selecting an item in the list */
            itemPressed: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.ComboBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ComboBox` itself.
         * 
         * This event is fired when the value in the text input field is changed in combination with one of the following actions:
         * 
         *  * The focus leaves the text input field * The * Enter * key is pressed 
         * 
         * In addition, this event is also fired when an item in the list is selected.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new <code>value</code> of the <code>control</code> */
            value: string, /* * Indicates whether the change event was caused by selecting an item in the list */
            itemPressed: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.ComboBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ComboBox` itself.
         * 
         * This event is fired when the user types something that matches with an item in the list; it is also fired when the user presses on a list item, or when navigating via keyboard.
        */
        attachSelectionChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            selectedItem: Item,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.ComboBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ComboBox` itself.
         * 
         * This event is fired when the user types something that matches with an item in the list; it is also fired when the user presses on a list item, or when navigating via keyboard.
        */
        attachSelectionChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            selectedItem: Item,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Creates a picker popup container where the selection should take place.
         * 
         * To be overwritten by subclasses.
        */
        protected createPicker(sPickerType: string): Popover | Dialog;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.m.ComboBox`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of this `sap.m.ComboBox`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelectionChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.ComboBox with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ComboBoxBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { value?: string, itemPressed?: boolean, }): this;

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { value?: string, }): this;

        /**
            * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
        */
        protected fireSelectionChange(mParameters?: { selectedItem?: Item, }): this;

        /**
            * Gets the default selected item from the aggregation named `items`.
        */
        protected getDefaultSelectedItem(): any;

        /**
            * Gets current value of property {@link #getFilterSecondaryValues filterSecondaryValues}.
         * 
         * Indicates whether the filter should check in both the `text` and the `additionalText` property of the {@link sap.ui.core.ListItem} for the suggestion.
         * 
         * Default value is `false`.
        */
        public getFilterSecondaryValues(): boolean;

        /**
            * Gets aggregation `items`.
         * 
         * ** Note **: This is the default aggregation.
        */
        public getItems(): {};

        /**
            * Returns a metadata object for class sap.m.ComboBox.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Gets the selected item object from the aggregation named `items`.
        */
        public getSelectedItem(): Item | any;

        /**
            * Gets current value of property {@link #getSelectedItemId selectedItemId}.
         * 
         * ID of the selected item.
         * 
         * Default value is ``.
        */
        public getSelectedItemId(): string;

        /**
            * Gets current value of property {@link #getSelectedKey selectedKey}.
         * 
         * Key of the selected item.
         * 
         * ** Note: ** If duplicate keys exist, the first item matching the key is used.
         * 
         * Default value is ``.
        */
        public getSelectedKey(): string;

        /**
            * Gets current value of property {@link #getShowSecondaryValues showSecondaryValues}.
         * 
         * Indicates whether the text values of the `additionalText` property of a {@link sap.ui.core.ListItem} are shown.
         * 
         * Default value is `false`.
        */
        public getShowSecondaryValues(): boolean;

        /**
            * This event handler is called before the picker popup is opened.
        */
        protected onBeforeOpen(): any;

        /**
            * Removes an item from the aggregation named `items`.
        */
        public removeItem(vItem: number | string | Item): Item;

        /**
            * Sets the start and end positions of the current text selection.
        */
        protected selectText(iSelectionStart: number, iSelectionEnd: number): this;

        /**
            * Sets a new value for property {@link #getFilterSecondaryValues filterSecondaryValues}.
         * 
         * Indicates whether the filter should check in both the `text` and the `additionalText` property of the {@link sap.ui.core.ListItem} for the suggestion.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFilterSecondaryValues(bFilterSecondaryValues: boolean): this;

        /**
            * Sets the `selectedItem` association.
         * 
         * Default value is `null`.
        */
        public setSelectedItem(vItem: string | Item | any): this;

        /**
            * Sets the `selectedItemId` property.
         * 
         * Default value is an empty string `""` or `undefined`.
        */
        public setSelectedItemId(vItem: string | any): this;

        /**
            * Sets the `selectedKey` property.
         * 
         * Default value is an empty string `""` or `undefined`.
        */
        public setSelectedKey(sKey: string): this;

        /**
            * Sets a new value for property {@link #getShowSecondaryValues showSecondaryValues}.
         * 
         * Indicates whether the text values of the `additionalText` property of a {@link sap.ui.core.ListItem} are shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowSecondaryValues(bShowSecondaryValues: boolean): this;

        /**
            * Synchronizes the `selectedItem` association and the `selectedItemId` property.
        */
        protected synchronizeSelection(): any;

    }
}