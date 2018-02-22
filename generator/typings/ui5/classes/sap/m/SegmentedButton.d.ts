declare module 'sap/m/SegmentedButton' {
    import { Event } from 'sap/ui/base/Event';
    import { Button } from 'sap/m/Button';
    import { SegmentedButtonItem } from 'sap/m/SegmentedButtonItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISegmentedButtonSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        enabled?: boolean;
        selectedKey?: string;
    }

    /**
    
    */
    export class SegmentedButton extends Control {

        /**
            * Constructor for a new `SegmentedButton`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISegmentedButtonSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some button to the aggregation {@link #getButtons buttons}.
        */
        public addButton(oButton: Button): this;

        /**
            * Adds item to `items` aggregation.
        */
        public addItem(oItem: SegmentedButtonItem): any;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.SegmentedButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SegmentedButton` itself.
         * 
         * Fires when the user selects a button, which returns the ID and button object.
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Reference to the button, that has been selected. */
            button: Button, /* * ID of the button, which has been selected. */
            id: string, /* * Key of the button, which has been selected. This property is only filled when the control is initiated with the items aggregation. */
            key: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.SegmentedButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SegmentedButton` itself.
         * 
         * Fires when the user selects a button, which returns the ID and button object.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Reference to the button, that has been selected. */
            button: Button, /* * ID of the button, which has been selected. */
            id: string, /* * Key of the button, which has been selected. This property is only filled when the control is initiated with the items aggregation. */
            key: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.SegmentedButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SegmentedButton` itself.
         * 
         * Fires when the user selects an item, which returns the item object.
        */
        attachSelectionChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Reference to the item, that has been selected. */
            item: SegmentedButtonItem,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.SegmentedButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SegmentedButton` itself.
         * 
         * Fires when the user selects an item, which returns the item object.
        */
        attachSelectionChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Reference to the item, that has been selected. */
            item: SegmentedButtonItem,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getItems items} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItems(oBindingInfo: {}): this;

        /**
            * Binds property {@link #getSelectedKey selectedKey} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description of the possible properties of `oBindingInfo`
        */
        public bindSelectedKey(oBindingInfo: {}): this;

        /**
            * Adds a Button with a text as title, a URI for an icon, enabled and textDirection. Only one is allowed.
        */
        public createButton(sText: string, sURI: sap.ui.core.URI, bEnabled: boolean, sTextDirection?: sap.ui.core.TextDirection): Button;

        /**
            * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
        */
        public destroyButtons(): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.m.SegmentedButton`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of this `sap.m.SegmentedButton`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelectionChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.SegmentedButton with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { button?: Button, id?: string, key?: string, }): this;

        /**
            * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
        */
        protected fireSelectionChange(mParameters?: { item?: SegmentedButtonItem, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets content of aggregation {@link #getButtons buttons}.
         * 
         * The buttons of the SegmentedButton control. The items set in this aggregation are used as an interface for the buttons displayed by the control. Only the properties ID, icon, text, enabled and textDirections of the Button control are evaluated. Setting other properties of the button will have no effect. Alternatively, you can use the createButton method to add buttons.
        */
        public getButtons(): {};

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Disables all the buttons in the SegmentedButton control. When disabled all the buttons look grey and you cannot focus or click on them.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Aggregation of items to be displayed. The items set in this aggregation are used as an interface for the buttons displayed by the control. The "items" and "buttons" aggregations should NOT be used simultaneously as it causes the control to work incorrectly.
        */
        public getItems(): {};

        /**
            * Returns a metadata object for class sap.m.SegmentedButton.
        */
        public static getMetadata(): Metadata | any | {};

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
            * ID of the element which is the current target of the association {@link #getSelectedButton selectedButton}, or `null`.
        */
        public getSelectedButton(): sap.ui.core.ID;

        /**
            * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem}, or `null`.
        */
        public getSelectedItem(): sap.ui.core.ID;

        /**
            * Gets the `selectedKey` and is usable only when the control is initiated with the `items` aggregation.
        */
        public getSelectedKey(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the width of the SegmentedButton control. If not set, it uses the minimum required width to make all buttons inside of the same size (based on the biggest button).
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.m.Button` in the aggregation {@link #getButtons buttons}. and returns its index if found or -1 otherwise.
        */
        public indexOfButton(oButton: Button): number;

        /**
            * Checks for the provided `sap.m.SegmentedButtonItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: SegmentedButtonItem): number;

        /**
            * Inserts a button into the aggregation {@link #getButtons buttons}.
        */
        public insertButton(oButton: Button, iIndex: number): this;

        /**
            * Inserts item into `items` aggregation.
        */
        public insertItem(oItem: SegmentedButtonItem, iIndex: number): any;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getButtons buttons}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllButtons(): {};

        /**
            * Removes all items from `items` aggregation
        */
        public removeAllItems(bSuppressInvalidate?: boolean): any;

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a button from the aggregation {@link #getButtons buttons}.
        */
        public removeButton(vButton: number | string | Button): Button;

        /**
            * Removes an item from `items` aggregation.
        */
        public removeItem(oItem: SegmentedButtonItem): any;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Disables all the buttons in the SegmentedButton control. When disabled all the buttons look grey and you cannot focus or click on them.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Setter for association `selectedButton`.
        */
        public setSelectedButton(vButton: string | Button | any | any): this;

        /**
            * Setter for association `selectedItem`.
        */
        public setSelectedItem(vItem: any): this;

        /**
            * Sets the `selectedKey` and is usable only when the control is initiated with the `items` aggregation.
        */
        public setSelectedKey(sKey: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the width of the SegmentedButton control. If not set, it uses the minimum required width to make all buttons inside of the same size (based on the biggest button).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

        /**
            * Unbinds property {@link #getSelectedKey selectedKey} from model data.
        */
        public unbindSelectedKey(): this;

    }
}