declare module 'sap/m/Select' {
    import { Event } from 'sap/ui/base/Event';
    import { Item } from 'sap/ui/core/Item';
    import { Popover } from 'sap/m/Popover';
    import { Dialog } from 'sap/m/Dialog';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISelectSettings extends IControlSettings {
        name?: string;
        enabled?: boolean;
        width?: sap.ui.core.CSSSize;
        maxWidth?: sap.ui.core.CSSSize;
        selectedKey?: string;
        selectedItemId?: string;
        icon?: sap.ui.core.URI;
        type?: sap.m.SelectType;
        autoAdjustWidth?: boolean;
        textAlign?: sap.ui.core.TextAlign;
        textDirection?: sap.ui.core.TextDirection;
        valueState?: sap.ui.core.ValueState;
        valueStateText?: string;
        showSecondaryValues?: boolean;
        forceSelection?: boolean;
    }

    /**
    
    */
    export class Select extends Control {

        /**
            * Constructor for a new `sap.m.Select`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISelectSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds an item to the aggregation named `items`.
        */
        public addItem(oItem: Item): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.Select`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Select` itself.
         * 
         * This event is fired when the value in the selection field is changed in combination with one of the following actions:  * The focus leaves the selection field * The * Enter * key is pressed * The item is pressed 
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            selectedItem: Item,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.Select`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Select` itself.
         * 
         * This event is fired when the value in the selection field is changed in combination with one of the following actions:  * The focus leaves the selection field * The * Enter * key is pressed * The item is pressed 
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
            * Closes the control's picker popup.
        */
        public close(): this;

        /**
            * Creates a picker popup container where the selection should take place.
        */
        protected createPicker(sPickerType: string): Popover | Dialog;

        /**
            * Destroys all the items in the aggregation named `items`.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.m.Select`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Select with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { selectedItem?: Item, }): this;

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
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getAutoAdjustWidth autoAdjustWidth}.
         * 
         * Indicates whether the width of the input field is determined by the selected item's content.
         * 
         * Default value is `false`.
        */
        public getAutoAdjustWidth(): boolean;

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
            * Gets current value of property {@link #getForceSelection forceSelection}.
         * 
         * Indicates whether the selection is restricted to one of the items in the list. ** Note: ** We strongly recommend that you always set this property to `false` and bind the `selectedKey` property to the desired value for better interoperability with data binding.
         * 
         * Default value is `true`.
        */
        public getForceSelection(): boolean;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * The URI to the icon that will be displayed only when using the `IconOnly` type.
         * 
         * Default value is ``.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets the item from the aggregation named `items` at the given 0-based index.
        */
        public getItemAt(iIndex: number): Item | any;

        /**
            * Gets the item with the given key from the aggregation named `items`.
         * 
         * ** Note: ** If duplicate keys exist, the first item matching the key is returned.
        */
        public getItemByKey(sKey: string): Item | any;

        /**
            * Gets aggregation `items`.
         * 
         * ** Note **: This is the default aggregation.
        */
        public getItems(): {};

        /**
            * Gets the last item from the aggregation named `items`.
        */
        public getLastItem(): Item | any;

        /**
            * Gets current value of property {@link #getMaxWidth maxWidth}.
         * 
         * Sets the maximum width of the control.
         * 
         * ** Note: ** This property is ignored if the `autoAdjustWidth` property is set to `true`.
         * 
         * Default value is `100%`.
        */
        public getMaxWidth(): sap.ui.core.CSSSize;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.m.Select.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Gets current value of property {@link #getName name}.
         * 
         * The name to be used in the HTML code (for example, for HTML forms that send data to the server via submit).
         * 
         * Default value is ``.
        */
        public getName(): string;

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
            * Gets current value of property {@link #getTextAlign textAlign}.
         * 
         * Sets the horizontal alignment of the text within the input field.
         * 
         * Default value is `Initial`.
        */
        public getTextAlign(): sap.ui.core.TextAlign;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Specifies the direction of the text within the input field with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Type of a select. Possible values `Default`, `IconOnly`.
         * 
         * Default value is `Default`.
        */
        public getType(): sap.m.SelectType;

        /**
            * Gets current value of property {@link #getValueState valueState}.
         * 
         * Visualizes the validation state of the control, e.g. `Error`, `Warning`, `Success`.
         * 
         * Default value is `None`.
        */
        public getValueState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getValueStateText valueStateText}.
         * 
         * Defines the text of the value state message popup. If this is not specified, a default text is shown from the resource bundle.
         * 
         * Default value is ``.
        */
        public getValueStateText(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Sets the width of the field. By default, the field width is automatically adjusted to the size of its content and the default width of the field is calculated based on the widest list item in the dropdown list. If the width defined is smaller than its content, only the field width is changed whereas the dropdown list keeps the width of its content. If the dropdown list is wider than the visual viewport, it is truncated and an ellipsis is displayed for each item. For phones, the width of the dropdown list is always the same as the viewport.
         * 
         * ** Note: ** This property is ignored if the `autoAdjustWidth` property is set to `true`.
         * 
         * Default value is `auto`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: Item): number;

        /**
            * Inserts an item into the aggregation named `items`.
        */
        public insertItem(oItem: Item, iIndex: number): this;

        /**
            * Indicates whether the control's picker popup is opened.
        */
        public isOpen(): boolean;

        /**
            * Open the control's picker popup.
        */
        protected open(): this;

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
            * Sets a new value for property {@link #getAutoAdjustWidth autoAdjustWidth}.
         * 
         * Indicates whether the width of the input field is determined by the selected item's content.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAutoAdjustWidth(bAutoAdjustWidth: boolean): this;

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
            * Sets a new value for property {@link #getForceSelection forceSelection}.
         * 
         * Indicates whether the selection is restricted to one of the items in the list. ** Note: ** We strongly recommend that you always set this property to `false` and bind the `selectedKey` property to the desired value for better interoperability with data binding.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setForceSelection(bForceSelection: boolean): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * The URI to the icon that will be displayed only when using the `IconOnly` type.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getMaxWidth maxWidth}.
         * 
         * Sets the maximum width of the control.
         * 
         * ** Note: ** This property is ignored if the `autoAdjustWidth` property is set to `true`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setMaxWidth(sMaxWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * The name to be used in the HTML code (for example, for HTML forms that send data to the server via submit).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setName(sName: string): this;

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
            * Sets property `selectedKey`.
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
            * Sets a new value for property {@link #getTextAlign textAlign}.
         * 
         * Sets the horizontal alignment of the text within the input field.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Initial`.
        */
        public setTextAlign(sTextAlign: sap.ui.core.TextAlign): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Specifies the direction of the text within the input field with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Type of a select. Possible values `Default`, `IconOnly`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Default`.
        */
        public setType(sType: sap.m.SelectType): this;

        /**
            * Sets a new value for property {@link #getValueState valueState}.
         * 
         * Visualizes the validation state of the control, e.g. `Error`, `Warning`, `Success`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setValueState(sValueState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getValueStateText valueStateText}.
         * 
         * Defines the text of the value state message popup. If this is not specified, a default text is shown from the resource bundle.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setValueStateText(sValueStateText: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Sets the width of the field. By default, the field width is automatically adjusted to the size of its content and the default width of the field is calculated based on the widest list item in the dropdown list. If the width defined is smaller than its content, only the field width is changed whereas the dropdown list keeps the width of its content. If the dropdown list is wider than the visual viewport, it is truncated and an ellipsis is displayed for each item. For phones, the width of the dropdown list is always the same as the viewport.
         * 
         * ** Note: ** This property is ignored if the `autoAdjustWidth` property is set to `true`.
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