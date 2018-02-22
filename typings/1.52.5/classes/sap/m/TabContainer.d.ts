declare module 'sap/m/TabContainer' {
    import { Event } from 'sap/ui/base/Event';
    import { TabContainerItem } from 'sap/m/TabContainerItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITabContainerSettings extends IControlSettings {
        showAddNewButton?: boolean;
    }

    /**
    
    */
    export class TabContainer extends Control {

        /**
            * Constructor for a new `TabContainer`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITabContainerSettings);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: TabContainerItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:addNewButtonPress addNewButtonPress} event of this `sap.m.TabContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TabContainer` itself.
         * 
         * Fired when the * Add New Tab * button is pressed.
        */
        attachAddNewButtonPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:addNewButtonPress addNewButtonPress} event of this `sap.m.TabContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TabContainer` itself.
         * 
         * Fired when the * Add New Tab * button is pressed.
        */
        attachAddNewButtonPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemClose itemClose} event of this `sap.m.TabContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TabContainer` itself.
         * 
         * Fired when an item is closed.
        */
        attachItemClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item to be closed. */
            item: TabContainerItem,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemClose itemClose} event of this `sap.m.TabContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TabContainer` itself.
         * 
         * Fired when an item is closed.
        */
        attachItemClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item to be closed. */
            item: TabContainerItem,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.m.TabContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TabContainer` itself.
         * 
         * Fired when an item is pressed.
        */
        attachItemSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            item: TabContainerItem,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.m.TabContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TabContainer` itself.
         * 
         * Fired when an item is pressed.
        */
        attachItemSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            item: TabContainerItem,
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
            * Detaches event handler `fnFunction` from the {@link #event:addNewButtonPress addNewButtonPress} event of this `sap.m.TabContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAddNewButtonPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemClose itemClose} event of this `sap.m.TabContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.m.TabContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.TabContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:addNewButtonPress addNewButtonPress} to attached listeners.
        */
        protected fireAddNewButtonPress(mParameters?: {}): this;

        /**
            * Fires event {@link #event:itemClose itemClose} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireItemClose(mParameters?: { item?: TabContainerItem, }): boolean;

        /**
            * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireItemSelect(mParameters?: { item?: TabContainerItem, }): boolean;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * The items displayed in the `TabContainer`.
        */
        public getItems(): {};

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
            * Returns a metadata object for class sap.m.TabContainer.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem}, or `null`.
        */
        public getSelectedItem(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getShowAddNewButton showAddNewButton}.
         * 
         * Defines whether an * Add New Tab * button is displayed in the `TabStrip`.
         * 
         * Default value is `false`.
        */
        public getShowAddNewButton(): boolean;

        /**
            * Checks for the provided `sap.m.TabContainerItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: TabContainerItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: TabContainerItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes an item from the aggregation named `items`.
        */
        public removeItem(vItem: number | string | TabContainerItem): TabContainerItem;

        /**
            * Sets the associated {@link #getSelectedItem selectedItem}.
        */
        public setSelectedItem(oSelectedItem: sap.ui.core.ID | TabContainerItem): this;

        /**
            * Sets a new value for property {@link #getShowAddNewButton showAddNewButton}.
         * 
         * Defines whether an * Add New Tab * button is displayed in the `TabStrip`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowAddNewButton(bShowAddNewButton: boolean): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }
}