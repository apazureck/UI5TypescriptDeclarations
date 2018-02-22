declare module 'sap/m/IconTabFilter' {
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { RenderManager } from 'sap/ui/core/RenderManager';
    import { Item, IItemSettings } from 'sap/ui/core/Item';

    export interface IIconTabFilterSettings extends IItemSettings {
        count?: string;
        showAll?: boolean;
        icon?: sap.ui.core.URI;
        iconColor?: sap.ui.core.IconColor;
        iconDensityAware?: boolean;
        visible?: boolean;
        design?: sap.m.IconTabFilterDesign;
    }

    /**
    
    */
    export class IconTabFilter extends Item {

        /**
            * Constructor for a new IconTabFilter.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IIconTabFilterSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.m.IconTabFilter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content displayed for this item (optional).
         * 
         * If this content is set, it is displayed instead of the general content inside the IconTabBar.
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getCount count}.
         * 
         * Represents the "count" text, which is displayed in the tab filter.
         * 
         * Default value is ``.
        */
        public getCount(): string;

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * Specifies whether the icon and the texts are placed vertically or horizontally.
         * 
         * Default value is `Vertical`.
        */
        public getDesign(): sap.m.IconTabFilterDesign;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Specifies the icon to be displayed for the tab filter.
         * 
         * Default value is ``.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconColor iconColor}.
         * 
         * Specifies the icon color.
         * 
         * If an icon font is used, the color can be chosen from the icon colors (sap.ui.core.IconColor). Possible semantic colors are: Neutral, Positive, Critical, Negative. Instead of the semantic icon color the brand color can be used, this is named Default. Semantic colors and brand colors should not be mixed up inside one IconTabBar.
         * 
         * Default value is `Default`.
        */
        public getIconColor(): sap.ui.core.IconColor;

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
            * Returns a metadata object for class sap.m.IconTabFilter.
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
            * Gets current value of property {@link #getShowAll showAll}.
         * 
         * Enables special visualization for disabled filter (show all items).
         * 
         * Default value is `false`.
        */
        public getShowAll(): boolean;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Specifies whether the tab filter is rendered.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Renders this item in the IconTabHeader.
        */
        protected render(rm: RenderManager, visibleIndex: number, visibleItemsCount: number): any;

        /**
            * Renders this item in the IconTabSelectList.
        */
        protected renderInSelectList(rm: RenderManager, selectList: sap.m.IconTabBarSelectList, visibleIndex: number, visibleItemsCount: number): any;

        /**
            * Sets a new value for property {@link #getCount count}.
         * 
         * Represents the "count" text, which is displayed in the tab filter.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setCount(sCount: string): this;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Specifies whether the icon and the texts are placed vertically or horizontally.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Vertical`.
        */
        public setDesign(sDesign: sap.m.IconTabFilterDesign): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Specifies the icon to be displayed for the tab filter.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconColor iconColor}.
         * 
         * Specifies the icon color.
         * 
         * If an icon font is used, the color can be chosen from the icon colors (sap.ui.core.IconColor). Possible semantic colors are: Neutral, Positive, Critical, Negative. Instead of the semantic icon color the brand color can be used, this is named Default. Semantic colors and brand colors should not be mixed up inside one IconTabBar.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Default`.
        */
        public setIconColor(sIconColor: sap.ui.core.IconColor): this;

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
            * Sets a new value for property {@link #getShowAll showAll}.
         * 
         * Enables special visualization for disabled filter (show all items).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowAll(bShowAll: boolean): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Specifies whether the tab filter is rendered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }
}