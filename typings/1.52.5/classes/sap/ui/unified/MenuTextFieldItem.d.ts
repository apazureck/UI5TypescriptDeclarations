declare module 'sap/ui/unified/MenuTextFieldItem' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Menu } from 'sap/ui/unified/Menu';
    import { MenuItemBase, IMenuItemBaseSettings } from 'sap/ui/unified/MenuItemBase';

    export interface IMenuTextFieldItemSettings extends IMenuItemBaseSettings {
        label?: string;
        icon?: sap.ui.core.URI;
        value?: string;
        valueState?: sap.ui.core.ValueState;
    }

    /**
    
    */
    export class MenuTextFieldItem extends MenuItemBase {

        /**
            * Constructor for a new MenuTextFieldItem element.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMenuTextFieldItemSettings);


        /**
            * The aggregation `submenu` (inherited from parent class) is not supported for this type of menu item.
        */
        public destroySubmenu(): this;

        /**
            * Creates a new subclass of class sap.ui.unified.MenuTextFieldItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.MenuItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be displayed on the item.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getLabel label}.
         * 
         * Defines the label of the text field of the item.
        */
        public getLabel(): string;

        /**
            * Returns a metadata object for class sap.ui.unified.MenuTextFieldItem.
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
            * The aggregation `submenu` (inherited from parent class) is not supported for this type of menu item.
        */
        public getSubmenu(): Menu;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Defines the value of the text field of the item.
        */
        public getValue(): string;

        /**
            * Gets current value of property {@link #getValueState valueState}.
         * 
         * Defines the value state of the text field of the item. This allows you to visualize e.g. warnings or errors.
         * 
         * Default value is `None`.
        */
        public getValueState(): sap.ui.core.ValueState;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be displayed on the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getLabel label}.
         * 
         * Defines the label of the text field of the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLabel(sLabel: string): this;

        /**
            * The aggregation `submenu` (inherited from parent class) is not supported for this type of menu item.
        */
        public setSubmenu(oMenu: Menu): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Defines the value of the text field of the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValue(sValue: string): this;

        /**
            * Sets a new value for property {@link #getValueState valueState}.
         * 
         * Defines the value state of the text field of the item. This allows you to visualize e.g. warnings or errors.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setValueState(sValueState: sap.ui.core.ValueState): this;

    }
}