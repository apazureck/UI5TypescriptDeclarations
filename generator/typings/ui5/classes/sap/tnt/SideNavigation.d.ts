declare module 'sap/tnt/SideNavigation' {
    import { Event } from 'sap/ui/base/Event';
    import { Item } from 'sap/ui/core/Item';
    import { NavigationList } from 'sap/tnt/NavigationList';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { NavigationListItem } from 'sap/tnt/NavigationListItem';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISideNavigationSettings extends IControlSettings {
        expanded?: boolean;
    }

    /**
    
    */
    export class SideNavigation extends Control {

        /**
            * Constructor for a new SideNavigation.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISideNavigationSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.SideNavigation`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.tnt.SideNavigation` itself.
         * 
         * Fired when an item is selected.
        */
        attachItemSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            item: Item,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.tnt.SideNavigation`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.tnt.SideNavigation` itself.
         * 
         * Fired when an item is selected.
        */
        attachItemSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            item: Item,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getItem item} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItem(oBindingInfo: {}): this;

        /**
            * Destroys the fixedItem in the aggregation {@link #getFixedItem fixedItem}.
        */
        public destroyFixedItem(): this;

        /**
            * Destroys the footer in the aggregation {@link #getFooter footer}.
        */
        public destroyFooter(): this;

        /**
            * Destroys the item in the aggregation {@link #getItem item}.
        */
        public destroyItem(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.tnt.SideNavigation`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.tnt.SideNavigation with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
        */
        protected fireItemSelect(mParameters?: { item?: Item, }): this;

        /**
            * Gets current value of property {@link #getExpanded expanded}.
         * 
         * Specifies if the control is expanded.
         * 
         * Default value is `true`.
        */
        public getExpanded(): boolean;

        /**
            * Gets content of aggregation {@link #getFixedItem fixedItem}.
         * 
         * Defines the content inside the fixed part.
        */
        public getFixedItem(): NavigationList;

        /**
            * Gets content of aggregation {@link #getFooter footer}.
         * 
         * Defines the content inside the footer.
        */
        public getFooter(): NavigationList;

        /**
            * Gets content of aggregation {@link #getItem item}.
         * 
         * Defines the content inside the flexible part.
        */
        public getItem(): NavigationList;

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
            * Returns a metadata object for class sap.tnt.SideNavigation.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem}, or `null`.
        */
        public getSelectedItem(): sap.ui.core.ID;

        /**
            * Sets if the control is in expanded or collapsed mode.
        */
        public static setExpanded(isExpanded: boolean): SideNavigation;

        /**
            * Sets a new value for property {@link #getExpanded expanded}.
         * 
         * Specifies if the control is expanded.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setExpanded(bExpanded: boolean): this;

        /**
            * Sets the aggregated {@link #getFixedItem fixedItem}.
        */
        public setFixedItem(oFixedItem: NavigationList): this;

        /**
            * Sets the aggregated {@link #getFooter footer}.
        */
        public setFooter(oFooter: NavigationList): this;

        /**
            * Sets the aggregated {@link #getItem item}.
        */
        public setItem(oItem: NavigationList): this;

        /**
            * Sets the association for selectedItem
        */
        public setSelectedItem(selectedItem: string | NavigationListItem, suppressInvalidate: boolean): this | any;

        /**
            * Unbinds aggregation {@link #getItem item} from model data.
        */
        public unbindItem(): this;

    }
}