declare module 'sap/m/FacetFilterItem' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ListItemBase, IListItemBaseSettings } from 'sap/m/ListItemBase';

    export interface IFacetFilterItemSettings extends IListItemBaseSettings {
        key?: string;
        text?: string;
        count?: number;
    }

    /**
    
    */
    export class FacetFilterItem extends ListItemBase {

        /**
            * Constructor for a new `FacetFilterItem`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFacetFilterItemSettings);


        /**
            * Creates a new subclass of class sap.m.FacetFilterItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getCount count}.
         * 
         * Defines the number of objects that match this item in the target data set.
        */
        public getCount(): number;

        /**
            * Gets current value of property {@link #getKey key}.
         * 
         * Can be used as input for subsequent actions.
        */
        public getKey(): string;

        /**
            * Returns a metadata object for class sap.m.FacetFilterItem.
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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Determines the text to be displayed for the item.
        */
        public getText(): string;

        /**
            * Sets a new value for property {@link #getCount count}.
         * 
         * Defines the number of objects that match this item in the target data set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setCount(iCount: number): this;

        /**
            * Sets a new value for property {@link #getKey key}.
         * 
         * Can be used as input for subsequent actions.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setKey(sKey: string): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Determines the text to be displayed for the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

    }
}