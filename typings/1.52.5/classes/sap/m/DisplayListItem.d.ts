declare module 'sap/m/DisplayListItem' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ListItemBase, IListItemBaseSettings } from 'sap/m/ListItemBase';

    export interface IDisplayListItemSettings extends IListItemBaseSettings {
        label?: string;
        value?: string;
        valueTextDirection?: sap.ui.core.TextDirection;
    }

    /**
    
    */
    export class DisplayListItem extends ListItemBase {

        /**
            * Constructor for a new DisplayListItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDisplayListItemSettings);


        /**
            * Creates a new subclass of class sap.m.DisplayListItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getLabel label}.
         * 
         * Defines the label of the list item.
        */
        public getLabel(): string;

        /**
            * Returns a metadata object for class sap.m.DisplayListItem.
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
            * Gets current value of property {@link #getValue value}.
         * 
         * Defines the value of the list item.
        */
        public getValue(): string;

        /**
            * Gets current value of property {@link #getValueTextDirection valueTextDirection}.
         * 
         * Defines the `value` text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getValueTextDirection(): sap.ui.core.TextDirection;

        /**
            * Sets a new value for property {@link #getLabel label}.
         * 
         * Defines the label of the list item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLabel(sLabel: string): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Defines the value of the list item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValue(sValue: string): this;

        /**
            * Sets a new value for property {@link #getValueTextDirection valueTextDirection}.
         * 
         * Defines the `value` text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setValueTextDirection(sValueTextDirection: sap.ui.core.TextDirection): this;

    }
}