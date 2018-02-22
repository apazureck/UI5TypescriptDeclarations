declare module 'sap/m/IconTabSeparator' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { RenderManager } from 'sap/ui/core/RenderManager';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IIconTabSeparatorSettings extends IElementSettings {
        icon?: sap.ui.core.URI;
        visible?: boolean;
        iconDensityAware?: boolean;
    }

    /**
    
    */
    export class IconTabSeparator extends Element {

        /**
            * Constructor for a new IconTabSeparator.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IIconTabSeparatorSettings);


        /**
            * Creates a new subclass of class sap.m.IconTabSeparator with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * The icon to display for this separator. If no icon is given, a separator line is used instead.
         * 
         * Default value is ``.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconDensityAware iconDensityAware}.
         * 
         * If set to true, it sends one or more requests, trying to get the density perfect version of the image if this version of the image doesn't exist on the server. Default value is set to true.
         * 
         * If bandwidth is key for the application, set this value to false.
         * 
         * Default value is `true`.
        */
        public getIconDensityAware(): boolean;

        /**
            * Returns a metadata object for class sap.m.IconTabSeparator.
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
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Specifies whether the separator is rendered.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Renders the item in the IconTabHeader.
        */
        protected render(rm: RenderManager): any;

        /**
            * Renders this item in the IconTabSelectList.
        */
        protected renderInSelectList(rm: RenderManager, selectList: sap.m.IconTabBarSelectList): any;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * The icon to display for this separator. If no icon is given, a separator line is used instead.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconDensityAware iconDensityAware}.
         * 
         * If set to true, it sends one or more requests, trying to get the density perfect version of the image if this version of the image doesn't exist on the server. Default value is set to true.
         * 
         * If bandwidth is key for the application, set this value to false.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconDensityAware(bIconDensityAware: boolean): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Specifies whether the separator is rendered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }
}