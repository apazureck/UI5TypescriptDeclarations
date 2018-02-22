declare module 'sap/ui/unified/MenuItem' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { MenuItemBase, IMenuItemBaseSettings } from 'sap/ui/unified/MenuItemBase';

    export interface IMenuItemSettings extends IMenuItemBaseSettings {
        text?: string;
        icon?: sap.ui.core.URI;
    }

    /**
    
    */
    export class MenuItem extends MenuItemBase {

        /**
            * Constructor for a new MenuItem element.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMenuItemSettings);


        /**
            * Creates a new subclass of class sap.ui.unified.MenuItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.MenuItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be displayed on the item.
         * 
         * Default value is ``.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.unified.MenuItem.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

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
            * Gets current value of property {@link #getText text}.
         * 
         * Defines the text which should be displayed on the item.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be displayed on the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Defines the text which should be displayed on the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

    }
}