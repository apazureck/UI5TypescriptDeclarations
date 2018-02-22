declare module 'sap/ui/ux3/NavigationBar' {
    import { Event } from 'sap/ui/base/Event';
    import { NavigationItem } from 'sap/ui/ux3/NavigationItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface INavigationBarSettings extends IControlSettings {
        toplevelVariant?: boolean;
        overflowItemsToUpperCase?: boolean;
    }

    /**
    
    */
    export class NavigationBar extends Control {

        /**
            * Constructor for a new NavigationBar.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: INavigationBarSettings);


        /**
            * Adds some associatedItem into the association {@link #getAssociatedItems associatedItems}.
        */
        public addAssociatedItem(vAssociatedItem: sap.ui.core.ID | NavigationItem): this;

        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: NavigationItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.NavigationBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.NavigationBar` itself.
         * 
         * Event is fired when an item is selected by the user
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the newly selected NavigationItem. */
            itemId: string, /* * The newly selected NavigationItem. */
            item: NavigationItem,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.ux3.NavigationBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.NavigationBar` itself.
         * 
         * Event is fired when an item is selected by the user
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the newly selected NavigationItem. */
            itemId: string, /* * The newly selected NavigationItem. */
            item: NavigationItem,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.ux3.NavigationBar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.NavigationBar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:select select} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireSelect(mParameters?: { itemId?: string, item?: NavigationItem, }): boolean;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAssociatedItems associatedItems}.
        */
        public getAssociatedItems(): {};

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * If the navigation items need to have a different parent than the NavigationBar, alternatively the associatedItems association can be used. The NavigationBar follows the approach to use the items aggregation. If this aggregation is empty, associatedItems is used.
        */
        public getItems(): {};

        /**
            * Returns a metadata object for class sap.ui.ux3.NavigationBar.
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
            * Gets current value of property {@link #getOverflowItemsToUpperCase overflowItemsToUpperCase}.
         * 
         * Sets the appearance of the menu items in the overflow menu to uppercase
         * 
         * Default value is `false`.
        */
        public getOverflowItemsToUpperCase(): boolean;

        /**
            * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem}, or `null`.
        */
        public getSelectedItem(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getToplevelVariant toplevelVariant}.
         * 
         * Defines whether the navigation bar shall have top-level appearance
         * 
         * Default value is `false`.
        */
        public getToplevelVariant(): boolean;

        /**
            * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: NavigationItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: NavigationItem, iIndex: number): this;

        /**
            * Returns whether there is a selectedItem set which is actually present in the items aggregation; or, if the aggregation is empty, in the associatedItems association.
        */
        public isSelectedItemValid(): boolean;

        /**
            * Removes all the controls in the association named {@link #getAssociatedItems associatedItems}.
        */
        public removeAllAssociatedItems(): {};

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes an associatedItem from the association named {@link #getAssociatedItems associatedItems}.
        */
        public removeAssociatedItem(vAssociatedItem: number | sap.ui.core.ID | NavigationItem): sap.ui.core.ID;

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | NavigationItem): NavigationItem;

        /**
            * Replaces the currently associated items with the ones in the given array
        */
        public setAssociatedItems(aItems: {}): this;

        /**
            * Sets a new value for property {@link #getOverflowItemsToUpperCase overflowItemsToUpperCase}.
         * 
         * Sets the appearance of the menu items in the overflow menu to uppercase
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setOverflowItemsToUpperCase(bOverflowItemsToUpperCase: boolean): this;

        /**
            * Sets the associated {@link #getSelectedItem selectedItem}.
        */
        public setSelectedItem(oSelectedItem: sap.ui.core.ID | NavigationItem): this;

        /**
            * Sets a new value for property {@link #getToplevelVariant toplevelVariant}.
         * 
         * Defines whether the navigation bar shall have top-level appearance
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setToplevelVariant(bToplevelVariant: boolean): this;

    }
}