declare module 'sap/ui/ux3/NavigationItem' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Item, IItemSettings } from 'sap/ui/core/Item';

    export interface INavigationItemSettings extends IItemSettings {
        visible?: boolean;
        href?: sap.ui.core.URI;
    }

    /**
    
    */
    export class NavigationItem extends Item {

        /**
            * Constructor for a new NavigationItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: INavigationItemSettings);


        /**
            * Adds some subItem to the aggregation {@link #getSubItems subItems}.
        */
        public addSubItem(oSubItem: this): this;

        /**
            * Destroys all the subItems in the aggregation {@link #getSubItems subItems}.
        */
        public destroySubItems(): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.NavigationItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getHref href}.
         * 
         * Defines the link target URL. This property is optional and should only be set when required! The use of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems, but also to allow right-click and then "open in new tab" or "open in new window". As long as href is not set, an empty window will open and stay blank. But when href is set, the new window/tab will load this URL and it is the application's responsibility to display what the user expects (e.g. the Shell, with the respective NavigationItem being selected).
        */
        public getHref(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.ux3.NavigationItem.
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
            * Gets content of aggregation {@link #getSubItems subItems}.
         * 
         * Any NavigationItems on the next hierarchy level connected to this NavigationItem
        */
        public getSubItems(): {};

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Whether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it is the application's responsibility to make sure it is not the currently selected one - or to select another one in this case.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getSubItems subItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfSubItem(oSubItem: this): number;

        /**
            * Inserts a subItem into the aggregation {@link #getSubItems subItems}.
        */
        public insertSubItem(oSubItem: this, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getSubItems subItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSubItems(): {};

        /**
            * Removes a subItem from the aggregation {@link #getSubItems subItems}.
        */
        public removeSubItem(vSubItem: number | string | this): this;

        /**
            * Sets a new value for property {@link #getHref href}.
         * 
         * Defines the link target URL. This property is optional and should only be set when required! The use of the href property is to not only allow users to navigate in-place by left-clicking NavigationItems, but also to allow right-click and then "open in new tab" or "open in new window". As long as href is not set, an empty window will open and stay blank. But when href is set, the new window/tab will load this URL and it is the application's responsibility to display what the user expects (e.g. the Shell, with the respective NavigationItem being selected).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHref(sHref: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Whether the NavigationItem is currently visible. When making NavigationItems invisible at runtime it is the application's responsibility to make sure it is not the currently selected one - or to select another one in this case.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }
}