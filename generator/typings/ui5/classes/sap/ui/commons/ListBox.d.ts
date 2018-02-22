declare module 'sap/ui/commons/ListBox' {
    import { Event } from 'sap/ui/base/Event';
    import { Item } from 'sap/ui/core/Item';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IListBoxSettings extends IControlSettings {
        editable?: boolean;
        enabled?: boolean;
        allowMultiSelect?: boolean;
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        scrollTop?: number;
        displayIcons?: boolean;
        displaySecondaryValues?: boolean;
        valueTextAlign?: sap.ui.core.TextAlign;
        secondaryValueTextAlign?: sap.ui.core.TextAlign;
        minWidth?: sap.ui.core.CSSSize;
        maxWidth?: sap.ui.core.CSSSize;
        visibleItems?: number;
    }

    /**
    
    */
    export class ListBox extends Control {

        /**
            * Constructor for a new ListBox.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IListBoxSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: Item): this;

        /**
            * Adds the given index to current selection. When multiple selection is disabled, this replaces the current selection. When the given index is invalid, the call is ignored.
        */
        public addSelectedIndex(iSelectedIndex: number): this;

        /**
            * Adds the given indices to selection. Any invalid indices are ignored.
        */
        public addSelectedIndices(aSelectedIndices: {}): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.ListBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.ListBox` itself.
         * 
         * Event is fired when selection is changed by user interaction.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ID of the ListBox which triggered the event. */
            id: string, /* * The currently selected index of the ListBox. In the case of multiple selection, this is exactly one of the selected indices - the one whose selection has triggered the selection change. To get all currently selected indices, use selectedIndices. */
            selectedIndex: number, /* * The currently selected item of the ListBox. In the case of multiple selection, this is exactly one of the selected items - the one whose selection has triggered the selection change. */
            selectedItem: Item, /* * Array containing the indices which are selected. */
            selectedIndices: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.ListBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.ListBox` itself.
         * 
         * Event is fired when selection is changed by user interaction.
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ID of the ListBox which triggered the event. */
            id: string, /* * The currently selected index of the ListBox. In the case of multiple selection, this is exactly one of the selected indices - the one whose selection has triggered the selection change. To get all currently selected indices, use selectedIndices. */
            selectedIndex: number, /* * The currently selected item of the ListBox. In the case of multiple selection, this is exactly one of the selected items - the one whose selection has triggered the selection change. */
            selectedItem: Item, /* * Array containing the indices which are selected. */
            selectedIndices: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Removes complete selection.
        */
        public clearSelection(): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.commons.ListBox`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.ListBox with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { id?: string, selectedIndex?: number, selectedItem?: Item, selectedIndices?: {}, }): this;

        /**
            * Gets current value of property {@link #getAllowMultiSelect allowMultiSelect}.
         * 
         * Determines whether multiple selection is allowed.
         * 
         * Default value is `false`.
        */
        public getAllowMultiSelect(): boolean;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getDisplayIcons displayIcons}.
         * 
         * Determines whether the icons of the list items shall also be displayed. Enabling icons requires some space to be reserved for them. Displaying icons can also influence the width and height of a single item, which affects the overall height of the ListBox when defined in number of items. Note that the number of icons that can be displayed in the ListBox depends on the size of the icons themselves and of the total ListBox height.
         * 
         * Default value is `false`.
        */
        public getDisplayIcons(): boolean;

        /**
            * Gets current value of property {@link #getDisplaySecondaryValues displaySecondaryValues}.
         * 
         * Determines whether the text values from the additionalText property (see sap.ui.core.ListItems) shall be displayed.
         * 
         * Default value is `false`.
        */
        public getDisplaySecondaryValues(): boolean;

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Determines whether the ListBox is interactive or not. Can be used to disable interaction with mouse or keyboard.
         * 
         * Default value is `true`.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Determines whether the ListBox is enabled or not. Can be used to disable interaction with mouse or keyboard. Disabled controls have another color display depending on custom settings.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Control height as common CSS-size (px or % as unit, for example). The setting overrides any definitions made for the setVisibleItems() method.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Aggregation of items to be displayed. Must be either of type sap.ui.core.ListItem or sap.ui.core.SeparatorItem.
        */
        public getItems(): {};

        /**
            * Gets current value of property {@link #getMaxWidth maxWidth}.
         * 
         * Determines the maximum width of the ListBox. If not set, there is no maximum width.
        */
        public getMaxWidth(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.commons.ListBox.
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
            * Gets current value of property {@link #getMinWidth minWidth}.
         * 
         * Determines the minimum width of the ListBox. If not set, there is no minimum width.
        */
        public getMinWidth(): sap.ui.core.CSSSize;

        /**
            * Returns how many pixels the ListBox contents are currently scrolled down.
        */
        public getScrollTop(): number;

        /**
            * Gets current value of property {@link #getSecondaryValueTextAlign secondaryValueTextAlign}.
         * 
         * Determines the text alignment in the secondary ListBox text column (if available).
         * 
         * Default value is `Begin`.
        */
        public getSecondaryValueTextAlign(): sap.ui.core.TextAlign;

        /**
            * Zero-based index of selected item. Index value for no selection is -1. When multiple selection is enabled and multiple items are selected, the method returns the first selected item.
        */
        public getSelectedIndex(): number;

        /**
            * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
        */
        public getSelectedIndices(): {};

        /**
            * Returns selected item. When no item is selected, "null" is returned. When multi-selection is enabled and multiple items are selected, only the first selected item is returned.
        */
        public getSelectedItem(): Item;

        /**
            * Returns an array containing the selected items. In the case of no selection, an empty array is returned.
        */
        public getSelectedItems(): {};

        /**
            * Returns the keys of the selected items in an array. If a selected item does not have a key, the respective array entry will be undefined.
        */
        public getSelectedKeys(): {};

        /**
            * Gets current value of property {@link #getValueTextAlign valueTextAlign}.
         * 
         * Determines the text alignment in the primary ListBox column.
         * 
         * Default value is `Begin`.
        */
        public getValueTextAlign(): sap.ui.core.TextAlign;

        /**
            * Returns the number of visible items.
        */
        public getVisibleItems(): number;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Control width as common CSS-size (px or % as unit, for example).
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
            * Returns whether the given index is selected.
        */
        public isIndexSelected(iIndex: number): boolean;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

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
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | Item): Item;

        /**
            * Removes the given index from this selection. When the index is invalid or not selected, the call is ignored.
        */
        public removeSelectedIndex(iIndex: number): this;

        /**
            * If the ListBox has a scroll bar because the number of items is larger than the number of visible items, this method scrolls to the item with the given index. If there are enough items, this item will then appear at the topmost visible position in the ListBox. If bLazy is true, it only scrolls as far as required to make the item visible. Setting the scrollTop property and calling scrollToIndex are two operations influencing the same "physical" property, so the last call "wins".
        */
        public scrollToIndex(iIndex: number, bLazy: boolean): this;

        /**
            * Sets a new value for property {@link #getAllowMultiSelect allowMultiSelect}.
         * 
         * Determines whether multiple selection is allowed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAllowMultiSelect(bAllowMultiSelect: boolean): this;

        /**
            * Sets a new value for property {@link #getDisplayIcons displayIcons}.
         * 
         * Determines whether the icons of the list items shall also be displayed. Enabling icons requires some space to be reserved for them. Displaying icons can also influence the width and height of a single item, which affects the overall height of the ListBox when defined in number of items. Note that the number of icons that can be displayed in the ListBox depends on the size of the icons themselves and of the total ListBox height.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDisplayIcons(bDisplayIcons: boolean): this;

        /**
            * Sets a new value for property {@link #getDisplaySecondaryValues displaySecondaryValues}.
         * 
         * Determines whether the text values from the additionalText property (see sap.ui.core.ListItems) shall be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDisplaySecondaryValues(bDisplaySecondaryValues: boolean): this;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Determines whether the ListBox is interactive or not. Can be used to disable interaction with mouse or keyboard.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Determines whether the ListBox is enabled or not. Can be used to disable interaction with mouse or keyboard. Disabled controls have another color display depending on custom settings.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets the height of this ListBox in CSS units.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Allows setting the list items as array for this instance of ListBox.
        */
        public setItems(aItems: {}, bDestroyItems: boolean): this;

        /**
            * Sets a new value for property {@link #getMaxWidth maxWidth}.
         * 
         * Determines the maximum width of the ListBox. If not set, there is no maximum width.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxWidth(sMaxWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getMinWidth minWidth}.
         * 
         * Determines the minimum width of the ListBox. If not set, there is no minimum width.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMinWidth(sMinWidth: sap.ui.core.CSSSize): this;

        /**
            * Positions the ListBox contents so that they are scrolled-down by the given number of pixels.
        */
        public setScrollTop(iScrollTop: number): this;

        /**
            * Sets a new value for property {@link #getSecondaryValueTextAlign secondaryValueTextAlign}.
         * 
         * Determines the text alignment in the secondary ListBox text column (if available).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Begin`.
        */
        public setSecondaryValueTextAlign(sSecondaryValueTextAlign: sap.ui.core.TextAlign): this;

        /**
            * Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.
        */
        public setSelectedIndex(iSelectedIndex: number): this;

        /**
            * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection". When multiple selection is disabled and multiple items are given, the selection is set to the index of the first valid index in the given array. Any invalid indices are ignored. The previous selection is in any case replaced.
        */
        public setSelectedIndices(aSelectedIndices: {}): this;

        /**
            * Keys of the items to be selected, wrapped in an array. An empty array means no selection. When multiple selection is disabled, and multiple keys are given, the selection is set to the item with the first valid key in the given array. Any invalid keys are ignored. The previous selection is replaced in any case.
        */
        public setSelectedKeys(aSelectedKeys: {}): this;

        /**
            * Sets a new value for property {@link #getValueTextAlign valueTextAlign}.
         * 
         * Determines the text alignment in the primary ListBox column.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Begin`.
        */
        public setValueTextAlign(sValueTextAlign: sap.ui.core.TextAlign): this;

        /**
            * Makes the ListBox render with a height that allows it to display exactly the given number of items.
        */
        public setVisibleItems(iItemCount: number): this;

        /**
            * Sets the width of this ListBox in CSS units.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}