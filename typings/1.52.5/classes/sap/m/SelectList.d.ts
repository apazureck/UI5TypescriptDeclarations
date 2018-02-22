declare module 'sap/m/SelectList' {
    import { Event } from 'sap/ui/base/Event';
    import { Item } from 'sap/ui/core/Item';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISelectListSettings extends IControlSettings {
        enabled?: boolean;
        width?: sap.ui.core.CSSSize;
        maxWidth?: sap.ui.core.CSSSize;
        selectedKey?: string;
        selectedItemId?: string;
        showSecondaryValues?: boolean;
        keyboardNavigationMode?: sap.m.SelectListKeyboardNavigationMode;
    }

    /**
    
    */
    export class SelectList extends Control {

        /**
            * Constructor for a new `sap.m.SelectList`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISelectListSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: Item): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemPress itemPress} event of this `sap.m.SelectList`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectList` itself.
         * 
         * This event is fired when an item is pressed.
        */
        attachItemPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The pressed item. */
            item: Item,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemPress itemPress} event of this `sap.m.SelectList`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectList` itself.
         * 
         * This event is fired when an item is pressed.
        */
        attachItemPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The pressed item. */
            item: Item,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.SelectList`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectList` itself.
         * 
         * This event is fired when the selection has changed.
         * 
         * ** Note: ** The selection can be changed by pressing a non-selected item or via keyboard and after the enter or space key is pressed.
        */
        attachSelectionChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            selectedItem: Item,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.SelectList`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectList` itself.
         * 
         * This event is fired when the selection has changed.
         * 
         * ** Note: ** The selection can be changed by pressing a non-selected item or via keyboard and after the enter or space key is pressed.
        */
        attachSelectionChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            selectedItem: Item,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getItems items} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItems(oBindingInfo: {}): this;

        /**
            * Clear the selection.
        */
        protected clearSelection(): any;

        /**
            * Destroys all the items in the aggregation named `items`.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemPress itemPress} event of this `sap.m.SelectList`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of this `sap.m.SelectList`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelectionChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.SelectList with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:itemPress itemPress} to attached listeners.
        */
        protected fireItemPress(mParameters?: { item?: Item, }): this;

        /**
            * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
        */
        protected fireSelectionChange(mParameters?: { selectedItem?: Item, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Retrieves the default selected item from the aggregation named `items`.
        */
        protected getDefaultSelectedItem(aItems?: {}): Item | any;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Indicates whether the user can change the selection.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets the enabled items from the aggregation named `items`.
        */
        public getEnabledItems(aItems?: {}): {};

        /**
            * Gets the first item from the aggregation named `items`.
        */
        public getFirstItem(): Item | any;

        /**
            * Gets the item from the aggregation named `items` at the given 0-based index.
        */
        public getItemAt(iIndex: number): Item | any;

        /**
            * Gets the item with the given key from the aggregation named `items`.
         * 
         * ** Note: ** If duplicate keys exists, the first item matching the key is returned.
        */
        public getItemByKey(sKey: string): Item | any;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Defines the items contained within this control.
        */
        public getItems(): {};

        /**
            * Gets current value of property {@link #getKeyboardNavigationMode keyboardNavigationMode}.
         * 
         * Defines the keyboard navigation mode.
         * 
         * ** Note: ** The `sap.m.SelectListKeyboardNavigationMode.None` enumeration value, is only intended for use in some composite controls that handles keyboard navigation by themselves.
         * 
         * Default value is `Delimited`.
        */
        public getKeyboardNavigationMode(): sap.m.SelectListKeyboardNavigationMode;

        /**
            * Gets the enabled items from the aggregation named `items`.
        */
        public getLastItem(): Item | any;

        /**
            * Gets current value of property {@link #getMaxWidth maxWidth}.
         * 
         * Sets the maximum width of the control.
         * 
         * Default value is `100%`.
        */
        public getMaxWidth(): sap.ui.core.CSSSize;

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
            * Returns a metadata object for class sap.m.SelectList.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Gets current value of property {@link #getWidth width}.
         * 
         * Sets the width of the control.
         * 
         * Default value is `auto`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: Item): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: Item, iIndex: number): this;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the items in the aggregation named `items`. Additionally unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an item from the aggregation named `items`.
        */
        public removeItem(vItem: number | string | Item): Item;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Indicates whether the user can change the selection.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getKeyboardNavigationMode keyboardNavigationMode}.
         * 
         * Defines the keyboard navigation mode.
         * 
         * ** Note: ** The `sap.m.SelectListKeyboardNavigationMode.None` enumeration value, is only intended for use in some composite controls that handles keyboard navigation by themselves.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Delimited`.
        */
        public setKeyboardNavigationMode(sKeyboardNavigationMode: sap.m.SelectListKeyboardNavigationMode): this;

        /**
            * Sets a new value for property {@link #getMaxWidth maxWidth}.
         * 
         * Sets the maximum width of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setMaxWidth(sMaxWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets the `selectedItem` association.
        */
        public setSelectedItem(vItem: string | Item | any): this;

        /**
            * Sets property `selectedItemId`.
         * 
         * Default value is an empty string `""` or `undefined`.
        */
        public setSelectedItemId(vItem: string | any): this;

        /**
            * Sets property `selectedKey`.
         * 
         * Default value is an empty string `""` or `undefined`.
        */
        public setSelectedKey(sKey: string): this;

        /**
            * Updates and synchronizes `selectedItem` association, `selectedItemId` and `selectedKey` properties.
        */
        protected setSelection(vItem: string | Item | any): any;

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
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Sets the width of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }
}