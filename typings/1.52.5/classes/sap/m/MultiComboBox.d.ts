declare module 'sap/m/MultiComboBox' {
    import { Event } from 'sap/ui/base/Event';
    import { Item } from 'sap/ui/core/Item';
    import { List } from 'sap/m/List';
    import { Popover } from 'sap/m/Popover';
    import { Dialog } from 'sap/m/Dialog';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ComboBoxBase, IComboBoxBaseSettings } from 'sap/m/ComboBoxBase';

    export interface IMultiComboBoxSettings extends IComboBoxBaseSettings {
        selectedKeys?: string[];
    }

    /**
    
    */
    export class MultiComboBox extends ComboBoxBase {

        /**
            * Constructor for a new MultiComboBox.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMultiComboBoxSettings);


        /**
            * Adds some item `oItem` to the association named `selectedItems`.
        */
        public addSelectedItem(oItem: Item): this;

        /**
            * Adds selected items. Only items with valid keys are added as selected.
        */
        public addSelectedKeys(aKeys: {}): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.MultiComboBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiComboBox` itself.
         * 
         * Event is fired when selection of an item is changed. Note: please do not use the "change" event inherited from sap.m.InputBase
        */
        attachSelectionChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Item which selection is changed */
            changedItem: Item, /* * Selection state: true if item is selected, false if item is not selected */
            selected: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.MultiComboBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiComboBox` itself.
         * 
         * Event is fired when selection of an item is changed. Note: please do not use the "change" event inherited from sap.m.InputBase
        */
        attachSelectionChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Item which selection is changed */
            changedItem: Item, /* * Selection state: true if item is selected, false if item is not selected */
            selected: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionFinish selectionFinish} event of this `sap.m.MultiComboBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiComboBox` itself.
         * 
         * Event is fired when user has finished a selection of items in a list box and list box has been closed.
        */
        attachSelectionFinish<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected items which are selected after list box has been closed. */
            selectedItems: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionFinish selectionFinish} event of this `sap.m.MultiComboBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MultiComboBox` itself.
         * 
         * Event is fired when user has finished a selection of items in a list box and list box has been closed.
        */
        attachSelectionFinish<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected items which are selected after list box has been closed. */
            selectedItems: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Clear the selection.
        */
        protected clearSelection(): any;

        /**
            * Create an instance type of `sap.m.List`.
        */
        protected createList(): List;

        /**
            * Creates a picker. To be overwritten by subclasses.
        */
        protected createPicker(sPickerType: string): Popover | Dialog;

        /**
            * Destroys all the items in the aggregation named `items`.
        */
        public destroyItems(): this;

        /**
            * Destroys all the items in the aggregation named `items`.
        */


        /**
            * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of this `sap.m.MultiComboBox`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelectionChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:selectionFinish selectionFinish} event of this `sap.m.MultiComboBox`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelectionFinish(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.MultiComboBox with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ComboBoxBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
        */
        protected fireSelectionChange(mParameters?: { changedItem?: Item, selected?: boolean, }): this;

        /**
            * Fires event {@link #event:selectionFinish selectionFinish} to attached listeners.
        */
        protected fireSelectionFinish(mParameters?: { selectedItems?: {}, }): this;

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
            * Gets the enabled items from the aggregation named `items`.
        */
        public getEnabledItems(aItems?: {}): {};

        /**
            * Gets the item with the given key from the aggregation named `items`.<br> ** Note: ** If duplicate keys exist, the first item matching the key is returned.
        */
        public getItemByKey(sKey: string): Item;

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
            * Returns a metadata object for class sap.m.MultiComboBox.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Retrieves the selected item objects from the association named `selectedItems`.
        */
        public getSelectedItems(): {};

        /**
            * Gets current value of property {@link #getSelectedKeys selectedKeys}.
         * 
         * Keys of the selected items. If the key has no corresponding item, no changes will apply. If duplicate keys exists the first item matching the key is used.
         * 
         * Default value is `[]`.
        */
        public getSelectedKeys(): {};

        /**
            * Inserts an item into the aggregation named `items`.
        */
        public insertItem(oItem: Item, iIndex: number): this;

        /**
            * This hook method is called after the MultiComboBox's Pop-up is rendered.
        */
        protected onAfterRenderingPicker(): any;

        /**
            * This hook method is called before the MultiComboBox's Pop-up is rendered.
        */
        protected onBeforeRenderingPicker(): any;

        /**
            * Removes all the items in the aggregation named `items`.
        */
        public removeAllItems(): {};

        /**
            * Removes all the controls in the association named {@link #getSelectedItems selectedItems}.
        */
        public removeAllSelectedItems(): {};

        /**
            * Removes an item from the aggregation named `items`.
        */
        public removeItem(oItem: number | string | Item): Item;

        /**
            * Removes an selectedItem from the association named {@link #getSelectedItems selectedItems}.
        */
        public removeSelectedItem(vSelectedItem: number | sap.ui.core.ID | Item): sap.ui.core.ID;

        /**
            * Removes selected items. Only items with valid keys are removed.
        */
        public removeSelectedKeys(aKeys: {}): this;

        /**
            * Setter for association `selectedItems`.
        */
        public setSelectedItems(aItems: {} | {} | any): this;

        /**
            * Sets a new value for property {@link #getSelectedKeys selectedKeys}.
         * 
         * Keys of the selected items. If the key has no corresponding item, no changes will apply. If duplicate keys exists the first item matching the key is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `[]`.
        */
        public setSelectedKeys(sSelectedKeys: {}): this;

    }
}