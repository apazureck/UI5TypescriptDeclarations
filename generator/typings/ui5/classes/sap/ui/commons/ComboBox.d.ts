declare module 'sap/ui/commons/ComboBox' {
    import { Event } from 'sap/ui/base/Event';
    import { ListItem } from 'sap/ui/core/ListItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ListBox } from 'sap/ui/commons/ListBox';
    import { TextField, ITextFieldSettings } from 'sap/ui/commons/TextField';

    export interface IComboBoxSettings extends ITextFieldSettings {
        maxPopupItems?: number;
        displaySecondaryValues?: boolean;
        selectedKey?: string;
        selectedItemId?: string;
    }

    /**
    
    */
    export class ComboBox extends TextField {

        /**
            * Constructor for a new ComboBox.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IComboBoxSettings);


        /**
            * Compares the previous value with the current value and fires the "Change" event if the ComboBox is editable and the value has changed or whether the value has been changed e.g. via up/down or auto-complete feature
        */
        protected _checkChange(oEvent: jQuery.Event, bImmediate?: boolean): any;

        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: ListItem): this;

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
            * Creates a new subclass of class sap.ui.commons.ComboBox with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fire event change to attached listeners.
         * 
         * Expects following event parameters:  * 'newValue' of type `string` The new / changed value of the textfield. * 'selectedItem' of type `sap.ui.core.ListItem` selected item 
        */
        protected fireChange(mArguments?: any): this;

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { newValue?: string, }): this;

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
            * Gets current value of property {@link #getDisplaySecondaryValues displaySecondaryValues}.
         * 
         * Indicates whether the `additionalText` property that is available for `sap.ui.core.ListItem` shall be displayed in the list.
         * 
         * Default value is `false`.
        */
        public getDisplaySecondaryValues(): boolean;

        /**
            * Returns the DomRef which represents the icon for value help. Could be overwritten in child-classes
        */
        protected getF4ButtonDomRef(): any;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * `ListItems` (see `sap.ui.core.ListBox`) that shall be displayed in the list.
        */
        public getItems(): {};

        /**
            * ID of the element which is the current target of the association {@link #getListBox listBox}, or `null`.
        */
        public getListBox(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getMaxPopupItems maxPopupItems}.
         * 
         * Defines the number of items that shall be displayed at once. If the overall number of items is higher than this setting, a scrollbar is provided.
         * 
         * Default value is `10`.
        */
        public getMaxPopupItems(): number;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.commons.ComboBox.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Gets current value of property {@link #getSelectedItemId selectedItemId}.
         * 
         * Id of the selected item. If the value has no corresponding item, the `selectedItemId` is empty.
         * 
         * If the `selectedItemId` is set to a not existing item, it will not be changed.
        */
        public getSelectedItemId(): string;

        /**
            * Gets current value of property {@link #getSelectedKey selectedKey}.
         * 
         * Key of the selected item.
         * 
         * If the value has no corresponding item the key is empty.
         * 
         * If duplicate keys exists the first item matching the key is used.
         * 
         * If the key is set to a not existing value it will not be changed.
        */
        public getSelectedKey(): string;

        /**
            * Checks for the provided `sap.ui.core.ListItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: ListItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: ListItem, iIndex: number): this;

        /**
            * Handle sapenter pseudo events on the control
        */
        protected onsapenter(oEvent: jQuery.Event): any;

        /**
            * Handle sapescape pseudo events on the control
        */
        protected onsapescape(oEvent: jQuery.Event): any;

        /**
            * Handle saphide pseudo events on the control
        */
        protected onsaphide(oEvent: jQuery.Event): any;

        /**
            * Handle sapnextmodifiers pseudo events on the control if in toolbar prevent item navigation if popup is opened.
        */
        protected onsapnextmodifiers(oEvent: jQuery.Event): any;

        /**
            * Handle sapshow pseudo events on the control
        */
        protected onsapshow(oEvent: jQuery.Event): any;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | ListItem): ListItem;

        /**
            * Sets a new value for property {@link #getDisplaySecondaryValues displaySecondaryValues}.
         * 
         * Indicates whether the `additionalText` property that is available for `sap.ui.core.ListItem` shall be displayed in the list.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDisplaySecondaryValues(bDisplaySecondaryValues: boolean): this;

        /**
            * Sets the associated {@link #getListBox listBox}.
        */
        public setListBox(oListBox: sap.ui.core.ID | ListBox): this;

        /**
            * Sets a new value for property {@link #getMaxPopupItems maxPopupItems}.
         * 
         * Defines the number of items that shall be displayed at once. If the overall number of items is higher than this setting, a scrollbar is provided.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `10`.
        */
        public setMaxPopupItems(iMaxPopupItems: number): this;

        /**
            * Sets a new value for property {@link #getSelectedItemId selectedItemId}.
         * 
         * Id of the selected item. If the value has no corresponding item, the `selectedItemId` is empty.
         * 
         * If the `selectedItemId` is set to a not existing item, it will not be changed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSelectedItemId(sSelectedItemId: string): this;

        /**
            * Sets a new value for property {@link #getSelectedKey selectedKey}.
         * 
         * Key of the selected item.
         * 
         * If the value has no corresponding item the key is empty.
         * 
         * If duplicate keys exists the first item matching the key is used.
         * 
         * If the key is set to a not existing value it will not be changed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSelectedKey(sSelectedKey: string): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }
}