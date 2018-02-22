declare module 'sap/m/StandardListItem' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ListItemBase, IListItemBaseSettings } from 'sap/m/ListItemBase';

    export interface IStandardListItemSettings extends IListItemBaseSettings {
        title?: string;
        description?: string;
        icon?: sap.ui.core.URI;
        iconInset?: boolean;
        iconDensityAware?: boolean;
        activeIcon?: sap.ui.core.URI;
        info?: string;
        infoState?: sap.ui.core.ValueState;
        adaptTitleSize?: boolean;
        titleTextDirection?: sap.ui.core.TextDirection;
        infoTextDirection?: sap.ui.core.TextDirection;
    }

    /**
    
    */
    export class StandardListItem extends ListItemBase {

        /**
            * Constructor for a new StandardListItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IStandardListItemSettings);


        /**
            * Creates a new subclass of class sap.m.StandardListItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getActiveIcon activeIcon}.
         * 
         * Defines the icon that is shown while the list item is pressed.
        */
        public getActiveIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getAdaptTitleSize adaptTitleSize}.
         * 
         * By default, the title size adapts to the available space and gets bigger if the description is empty. If you have list items with and without descriptions, this results in titles with different sizes. In this case, it can be better to switch the size adaption off by setting this property to `false`.
         * 
         * Default value is `true`.
        */
        public getAdaptTitleSize(): boolean;

        /**
            * Gets current value of property {@link #getDescription description}.
         * 
         * Defines the additional information for the title. ** Note: ** This is only visible when the `title` property is not empty.
        */
        public getDescription(): string;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Defines the list item icon.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, one or more requests are sent to get the density perfect version of the icon if the given version of the icon doesn't exist on the server. ** Note: ** If bandwidth is a key factor for the application, set this value to `false`.
         * 
         * Default value is `true`.
        */
        public getIconDensityAware(): boolean;

        /**
            * Gets current value of property {@link #getIconInset iconInset}.
         * 
         * Defines the indentation of the icon. If set to `false`, the icon will not be shown as embedded. Instead it will take the full height of the list item.
         * 
         * Default value is `true`.
        */
        public getIconInset(): boolean;

        /**
            * Gets current value of property {@link #getInfo info}.
         * 
         * Defines an additional information text.
        */
        public getInfo(): string;

        /**
            * Gets current value of property {@link #getInfoState infoState}.
         * 
         * Defines the state of the information text, e.g. `Error`, `Warning`, `Success`.
         * 
         * Default value is `None`.
        */
        public getInfoState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getInfoTextDirection infoTextDirection}.
         * 
         * Defines the `info` directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getInfoTextDirection(): sap.ui.core.TextDirection;

        /**
            * Returns a metadata object for class sap.m.StandardListItem.
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
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the title of the list item.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getTitleTextDirection titleTextDirection}.
         * 
         * Defines the `title` text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getTitleTextDirection(): sap.ui.core.TextDirection;

        /**
            * Sets a new value for property {@link #getActiveIcon activeIcon}.
         * 
         * Defines the icon that is shown while the list item is pressed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setActiveIcon(sActiveIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getAdaptTitleSize adaptTitleSize}.
         * 
         * By default, the title size adapts to the available space and gets bigger if the description is empty. If you have list items with and without descriptions, this results in titles with different sizes. In this case, it can be better to switch the size adaption off by setting this property to `false`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setAdaptTitleSize(bAdaptTitleSize: boolean): this;

        /**
            * Sets a new value for property {@link #getDescription description}.
         * 
         * Defines the additional information for the title. ** Note: ** This is only visible when the `title` property is not empty.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDescription(sDescription: string): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Defines the list item icon.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, one or more requests are sent to get the density perfect version of the icon if the given version of the icon doesn't exist on the server. ** Note: ** If bandwidth is a key factor for the application, set this value to `false`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconDensityAware(bIconDensityAware: boolean): this;

        /**
            * Sets a new value for property {@link #getIconInset iconInset}.
         * 
         * Defines the indentation of the icon. If set to `false`, the icon will not be shown as embedded. Instead it will take the full height of the list item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconInset(bIconInset: boolean): this;

        /**
            * Sets a new value for property {@link #getInfo info}.
         * 
         * Defines an additional information text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setInfo(sInfo: string): this;

        /**
            * Sets a new value for property {@link #getInfoState infoState}.
         * 
         * Defines the state of the information text, e.g. `Error`, `Warning`, `Success`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setInfoState(sInfoState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getInfoTextDirection infoTextDirection}.
         * 
         * Defines the `info` directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setInfoTextDirection(sInfoTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Defines the title of the list item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getTitleTextDirection titleTextDirection}.
         * 
         * Defines the `title` text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTitleTextDirection(sTitleTextDirection: sap.ui.core.TextDirection): this;

    }
}