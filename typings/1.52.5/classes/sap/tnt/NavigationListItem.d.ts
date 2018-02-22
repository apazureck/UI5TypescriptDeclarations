declare module 'sap/tnt/NavigationListItem' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Item, IItemSettings } from 'sap/ui/core/Item';

    export interface INavigationListItemSettings extends IItemSettings {
        icon?: sap.ui.core.URI;
        expanded?: boolean;
        hasExpander?: boolean;
        visible?: boolean;
    }

    /**
    
    */
    export class NavigationListItem extends Item {

        /**
            * Constructor for a new NavigationListItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: INavigationListItemSettings);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: this): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.tnt.NavigationListItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.tnt.NavigationListItem` itself.
         * 
         * Fired when this item is selected.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            item: Item,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.tnt.NavigationListItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.tnt.NavigationListItem` itself.
         * 
         * Fired when this item is selected.
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            item: Item,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.tnt.NavigationListItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.tnt.NavigationListItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { item?: Item, }): this;

        /**
            * Gets current value of property {@link #getExpanded expanded}.
         * 
         * Specifies if the item is expanded.
         * 
         * Default value is `true`.
        */
        public getExpanded(): boolean;

        /**
            * Gets current value of property {@link #getHasExpander hasExpander}.
         * 
         * Specifies if the item has an expander.
         * 
         * Default value is `true`.
        */
        public getHasExpander(): boolean;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Specifies the icon for the item.
         * 
         * Default value is ``.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * The sub items.
        */
        public getItems(): {};

        /**
            * Returns a metadata object for class sap.tnt.NavigationListItem.
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
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Specifies if the item should be shown.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Checks for the provided `sap.tnt.NavigationListItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: this): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: this, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | this): this;

        /**
            * Sets a new value for property {@link #getExpanded expanded}.
         * 
         * Specifies if the item is expanded.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setExpanded(bExpanded: boolean): this;

        /**
            * Sets a new value for property {@link #getHasExpander hasExpander}.
         * 
         * Specifies if the item has an expander.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setHasExpander(bHasExpander: boolean): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Specifies the icon for the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Specifies if the item should be shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }
}