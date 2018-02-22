declare module 'sap/ui/layout/ResponsiveFlowLayoutData' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { LayoutData, ILayoutDataSettings } from 'sap/ui/core/LayoutData';

    export interface IResponsiveFlowLayoutDataSettings extends ILayoutDataSettings {
        minWidth?: number;
        weight?: number;
        linebreak?: boolean;
        margin?: boolean;
        linebreakable?: boolean;
    }

    /**
    
    */
    export class ResponsiveFlowLayoutData extends LayoutData {

        /**
            * Constructor for a new ResponsiveFlowLayoutData.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IResponsiveFlowLayoutDataSettings);


        /**
            * Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayoutData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getLinebreak linebreak}.
         * 
         * If this property is set, the control in which the LayoutData is added, will always cause a line break within the ResponsiveFlowLayout.
         * 
         * Default value is `false`.
        */
        public getLinebreak(): boolean;

        /**
            * Gets current value of property {@link #getLinebreakable linebreakable}.
         * 
         * Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the previous element.
         * 
         * Default value is `true`.
        */
        public getLinebreakable(): boolean;

        /**
            * Gets current value of property {@link #getMargin margin}.
         * 
         * Prevents any margin of the element if set to false.
         * 
         * Default value is `true`.
        */
        public getMargin(): boolean;

        /**
            * Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayoutData.
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
            * Gets current value of property {@link #getMinWidth minWidth}.
         * 
         * Defines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to this value.
         * 
         * Default value is `100`.
        */
        public getMinWidth(): number;

        /**
            * Gets current value of property {@link #getWeight weight}.
         * 
         * Defines the weight of the element, that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.
         * 
         * Default value is `1`.
        */
        public getWeight(): number;

        /**
            * Sets a new value for property {@link #getLinebreak linebreak}.
         * 
         * If this property is set, the control in which the LayoutData is added, will always cause a line break within the ResponsiveFlowLayout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setLinebreak(bLinebreak: boolean): this;

        /**
            * Sets a new value for property {@link #getLinebreakable linebreakable}.
         * 
         * Shows if an element can be wrapped into a new row. If this value is set to false, the min-width will be set to 0 and the wrapping is up to the previous element.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setLinebreakable(bLinebreakable: boolean): this;

        /**
            * Sets a new value for property {@link #getMargin margin}.
         * 
         * Prevents any margin of the element if set to false.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setMargin(bMargin: boolean): this;

        /**
            * Sets a new value for property {@link #getMinWidth minWidth}.
         * 
         * Defines the minimal size in px of a ResponsiveFlowLayout element. The element will be shrunk down to this value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100`.
        */
        public setMinWidth(iMinWidth: number): this;

        /**
            * Sets a new value for property {@link #getWeight weight}.
         * 
         * Defines the weight of the element, that influences the resulting width. If there are several elements within a row of the ResponsiveFlowLayout, each element could have another weight. The bigger the weight of a single element, the wider it will be stretched, i.e. a bigger weight results in a larger width.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setWeight(iWeight: number): this;

    }
}