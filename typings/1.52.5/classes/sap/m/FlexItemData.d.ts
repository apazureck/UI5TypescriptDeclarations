declare module 'sap/m/FlexItemData' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { LayoutData, ILayoutDataSettings } from 'sap/ui/core/LayoutData';

    export interface IFlexItemDataSettings extends ILayoutDataSettings {
        alignSelf?: sap.m.FlexAlignSelf;
        order?: number;
        growFactor?: number;
        shrinkFactor?: number;
        baseSize?: sap.ui.core.CSSSize;
        minHeight?: sap.ui.core.CSSSize;
        maxHeight?: sap.ui.core.CSSSize;
        minWidth?: sap.ui.core.CSSSize;
        maxWidth?: sap.ui.core.CSSSize;
        styleClass?: string;
        backgroundDesign?: sap.m.BackgroundDesign;
    }

    /**
    
    */
    export class FlexItemData extends LayoutData {

        /**
            * Constructor for a new `sap.m.FlexItemData`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFlexItemDataSettings);


        /**
            * Creates a new subclass of class sap.m.FlexItemData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getAlignSelf alignSelf}.
         * 
         * Determines cross-axis alignment of individual element (not currently supported in Internet Explorer).
         * 
         * Default value is `Auto`.
        */
        public getAlignSelf(): sap.m.FlexAlignSelf;

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Defines the background style of the flex item.
         * 
         * Default value is `Transparent`.
        */
        public getBackgroundDesign(): sap.m.BackgroundDesign;

        /**
            * Gets current value of property {@link #getBaseSize baseSize}.
         * 
         * The base size is the initial main size of the item for the flex algorithm. If set to "auto", this will be the computed size of the item.
         * 
         * Default value is `auto`.
        */
        public getBaseSize(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getGrowFactor growFactor}.
         * 
         * Determines the flexibility of the flex item when allocatable space is remaining.
         * 
         * Default value is `0`.
        */
        public getGrowFactor(): number;

        /**
            * Gets current value of property {@link #getMaxHeight maxHeight}.
         * 
         * The maximum height of the flex item.
         * 
         * Default value is ``.
        */
        public getMaxHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getMaxWidth maxWidth}.
         * 
         * The maximum height of the flex item.
         * 
         * Default value is ``.
        */
        public getMaxWidth(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.m.FlexItemData.
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
            * Gets current value of property {@link #getMinHeight minHeight}.
         * 
         * The minimum height of the flex item.
         * 
         * Default value is `auto`.
        */
        public getMinHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getMinWidth minWidth}.
         * 
         * The minimum height of the flex item.
         * 
         * Default value is `auto`.
        */
        public getMinWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getOrder order}.
         * 
         * Determines the display order of flex items independent of their source code order.
         * 
         * Default value is `0`.
        */
        public getOrder(): number;

        /**
            * Gets current value of property {@link #getShrinkFactor shrinkFactor}.
         * 
         * The shrink factor determines how much the flex item will shrink relative to the rest of the flex items in the flex container when negative free space is distributed.
         * 
         * Default value is `1`.
        */
        public getShrinkFactor(): number;

        /**
            * Gets current value of property {@link #getStyleClass styleClass}.
         * 
         * The style class will be applied to the flex item and can be used for CSS selectors.
         * 
         * Default value is ``.
        */
        public getStyleClass(): string;

        /**
            * Sets the `alignSelf` property.
        */
        public setAlignSelf(sValue: string): this;

        /**
            * Sets a new value for property {@link #getAlignSelf alignSelf}.
         * 
         * Determines cross-axis alignment of individual element (not currently supported in Internet Explorer).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setAlignSelf(sAlignSelf: sap.m.FlexAlignSelf): this;

        /**
            * Sets background design for flex items.
        */
        public setBackgroundDesign(sValue: string): this;

        /**
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Defines the background style of the flex item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Transparent`.
        */
        public setBackgroundDesign(sBackgroundDesign: sap.m.BackgroundDesign): this;

        /**
            * Sets a new value for property {@link #getBaseSize baseSize}.
         * 
         * The base size is the initial main size of the item for the flex algorithm. If set to "auto", this will be the computed size of the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setBaseSize(sBaseSize: sap.ui.core.CSSSize): this;

        /**
            * Sets the base size for flex items.
        */
        public setBaseSize(sValue: string): this;

        /**
            * Sets a new value for property {@link #getGrowFactor growFactor}.
         * 
         * Determines the flexibility of the flex item when allocatable space is remaining.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setGrowFactor(fGrowFactor: number): this;

        /**
            * Sets the `growFactor` property.
        */
        public setGrowFactor(sValue: string): this;

        /**
            * Sets a new value for property {@link #getMaxHeight maxHeight}.
         * 
         * The maximum height of the flex item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setMaxHeight(sMaxHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets maximum height.
        */
        public setMaxHeight(sValue: string): this;

        /**
            * Sets maximum width.
        */
        public setMaxWidth(sValue: string): this;

        /**
            * Sets a new value for property {@link #getMaxWidth maxWidth}.
         * 
         * The maximum height of the flex item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setMaxWidth(sMaxWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getMinHeight minHeight}.
         * 
         * The minimum height of the flex item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setMinHeight(sMinHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets minimum height.
        */
        public setMinHeight(sValue: string): this;

        /**
            * Sets minimum width.
        */
        public setMinWidth(sValue: string): this;

        /**
            * Sets a new value for property {@link #getMinWidth minWidth}.
         * 
         * The minimum height of the flex item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setMinWidth(sMinWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets the order.
        */
        public setOrder(sValue: string): this;

        /**
            * Sets a new value for property {@link #getOrder order}.
         * 
         * Determines the display order of flex items independent of their source code order.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setOrder(iOrder: number): this;

        /**
            * Sets a new value for property {@link #getShrinkFactor shrinkFactor}.
         * 
         * The shrink factor determines how much the flex item will shrink relative to the rest of the flex items in the flex container when negative free space is distributed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setShrinkFactor(fShrinkFactor: number): this;

        /**
            * Sets the `shrinkFactor` property.
        */
        public setShrinkFactor(sValue: string): this;

        /**
            * Sets a new value for property {@link #getStyleClass styleClass}.
         * 
         * The style class will be applied to the flex item and can be used for CSS selectors.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setStyleClass(sStyleClass: string): this;

        /**
            * Sets style class.
        */
        public setStyleClass(sValue: string): this;

    }
}