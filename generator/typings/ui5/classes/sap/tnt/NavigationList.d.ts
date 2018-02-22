declare module 'sap/tnt/NavigationList' {
    import { Event } from 'sap/ui/base/Event';
    import { Item } from 'sap/ui/core/Item';
    import { NavigationListItem } from 'sap/tnt/NavigationListItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface INavigationListSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        expanded?: boolean;
    }

    /**
    
    */
    export class NavigationList extends Control {

        /**
            * Constructor for a new NavigationList.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: INavigationListSettings);


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
        public addItem(oItem: NavigationListItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.NavigationList`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.tnt.NavigationList` itself.
         * 
         * Fired when an item is selected.
        */
        attachItemSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            item: Item,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.NavigationList`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.tnt.NavigationList` itself.
         * 
         * Fired when an item is selected.
        */
        attachItemSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            item: Item,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.tnt.NavigationList`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.tnt.NavigationList with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
        */
        protected fireItemSelect(mParameters?: { item?: Item, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getExpanded expanded}.
         * 
         * Specifies if the control is in expanded or collapsed mode.
         * 
         * Default value is `true`.
        */
        public getExpanded(): boolean;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * The items displayed in the list.
        */
        public getItems(): {};

        /**
            * Returns a metadata object for class sap.tnt.NavigationList.
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
            * Gets the currently selected `NavigationListItem`.
        */
        public getSelectedItem(): NavigationListItem | any;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Specifies the width of the control.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.tnt.NavigationListItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: NavigationListItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: NavigationListItem, iIndex: number): this;

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
        public removeItem(vItem: number | string | NavigationListItem): NavigationListItem;

        /**
            * Sets a new value for property {@link #getExpanded expanded}.
         * 
         * Specifies if the control is in expanded or collapsed mode.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setExpanded(bExpanded: boolean): this;

        /**
            * Sets the association for selectedItem. Set `null` to deselect.
        */
        public setSelectedItem(selectedItem: string | NavigationListItem, suppressInvalidate: boolean): this | any;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Specifies the width of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}