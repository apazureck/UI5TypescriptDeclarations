declare module 'sap/m/ComboBoxBase' {
    import { Event } from 'sap/ui/base/Event';
    import { Item } from 'sap/ui/core/Item';
    import { Popover } from 'sap/m/Popover';
    import { Dialog } from 'sap/m/Dialog';
    import { Bar } from 'sap/m/Bar';
    import { ComboBox } from 'sap/m/ComboBox';
    import { SelectList } from 'sap/m/SelectList';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Input } from 'sap/m/Input';
    import { ComboBoxTextField, IComboBoxTextFieldSettings } from 'sap/m/ComboBoxTextField';

    export interface IComboBoxBaseSettings extends IComboBoxTextFieldSettings {
    }

    /**
    
    */
    export class ComboBoxBase extends ComboBoxTextField {

        /**
            * Constructor for a new `sap.m.ComboBoxBase`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IComboBoxBaseSettings);


        /**
            * Adds an item to the aggregation named `items`.
        */
        public addItem(oItem: Item): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:loadItems loadItems} event of this `sap.m.ComboBoxBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ComboBoxBase` itself.
         * 
         * This event is fired when the end user clicks the combo box button to open the dropdown list and the data used to display items is not already loaded. Alternatively, it is fired after the user moves the cursor to the combo box text field and perform an action that requires data to be loaded. For example, pressing F4 to open the dropdown list or typing something in the text field fires the event.
         * 
         * ** Note: ** Use this feature in performance critical scenarios only. Loading the data lazily (on demand) to defer initialization has several implications for the end user experience. For example, the busy indicator has to be shown while the items are being loaded and assistive technology software also has to announce the state changes (which may be confusing for some screen reader users).
         * 
         * ** Note **: Currently the `sap.m.MultiComboBox` does not support this event.
        */
        attachLoadItems<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:loadItems loadItems} event of this `sap.m.ComboBoxBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ComboBoxBase` itself.
         * 
         * This event is fired when the end user clicks the combo box button to open the dropdown list and the data used to display items is not already loaded. Alternatively, it is fired after the user moves the cursor to the combo box text field and perform an action that requires data to be loaded. For example, pressing F4 to open the dropdown list or typing something in the text field fires the event.
         * 
         * ** Note: ** Use this feature in performance critical scenarios only. Loading the data lazily (on demand) to defer initialization has several implications for the end user experience. For example, the busy indicator has to be shown while the items are being loaded and assistive technology software also has to announce the state changes (which may be confusing for some screen reader users).
         * 
         * ** Note **: Currently the `sap.m.MultiComboBox` does not support this event.
        */
        attachLoadItems<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getItems items} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItems(oBindingInfo: {}): this;

        /**
            * Clears the selection. To be overwritten by subclasses.
        */
        protected clearSelection(): any;

        /**
            * Closes the control's picker popup.
        */
        public close(): this;

        /**
            * Creates a picker popup container where the selection should take place. To be overwritten by subclasses.
        */
        protected createPicker(sPickerType: string): Popover | Dialog;

        /**
            * Creates an instance of `sap.m.Bar`.
        */
        protected createPickerHeader(): Bar;

        /**
            * Destroys all the items in the aggregation named `items`.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:loadItems loadItems} event of this `sap.m.ComboBoxBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLoadItems(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.ComboBoxBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ComboBoxTextField.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:loadItems loadItems} to attached listeners.
        */
        protected fireLoadItems(mParameters?: {}): this;

        /**
            * Gets the enabled items from the aggregation named `items`.
        */
        public getEnabledItems(aItems?: {}): {};

        /**
            * Gets the first item from the aggregation named `items`.
        */
        public getFirstItem(): Item;

        /**
            * Gets the item from the aggregation named `items` at the given 0-based index.
        */
        public getItemAt(iIndex: number): Item;

        /**
            * Gets the item with the given key from the aggregation named `items`.
         * 
         * ** Note: ** If duplicate keys exist, the first item matching the key is returned.
        */
        public getItemByKey(sKey: string): Item;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Defines the items contained within this control.
        */
        public getItems(): {};

        /**
            * Gets the last item from the aggregation named `items`.
        */
        public getLastItem(): Item;

        /**
            * Gets the `list`.
        */
        protected getList(): SelectList;

        /**
            * Returns a metadata object for class sap.m.ComboBoxBase.
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
            * Gets the control's picker popup.
        */
        protected getPicker(): Dialog | Popover | any;

        /**
            * Gets the ID of the hidden label
        */
        protected getPickerInvisibleTextId(): string;

        /**
            * Gets the control's input from the picker.
        */
        protected getPickerTextField(): ComboBoxTextField | Input | any;

        /**
            * Gets the property `_sPickerType`
        */
        protected getPickerType(): string;

        /**
            * Determines whether the control has content or not.
        */
        protected hasContent(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: Item): number;

        /**
            * Inserts an item into the aggregation named `items`.
        */
        public insertItem(oItem: Item, iIndex: number): this;

        /**
            * Indicates whether the control's picker popup is open.
        */
        public isOpen(): boolean;

        /**
            * Opens the control's picker popup.
        */
        protected open(): this;

        /**
            * Removes all the controls in the aggregation named `items`. Additionally unregisters them from the hosting UIArea and clears the selection.
        */
        public removeAllItems(): {};

        /**
            * Removes an item from the aggregation named `items`.
        */
        public removeItem(vItem: number | string | Item): Item;

        /**
            * Sets the property `_sPickerType`.
        */
        protected setPickerType(sPickerType: string): any;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }
}