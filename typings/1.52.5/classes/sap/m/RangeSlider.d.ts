declare module 'sap/m/RangeSlider' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Slider, ISliderSettings } from 'sap/m/Slider';

    export interface IRangeSliderSettings extends ISliderSettings {
        value2?: number;
        range?: number;
    }

    /**
    
    */
    export class RangeSlider extends Slider {

        /**
            * Constructor for a new `RangeSlider`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IRangeSliderSettings);


        /**
            * Creates a new subclass of class sap.m.RangeSlider with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Slider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.m.RangeSlider.
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
            * Gets current value of property {@link #getRange range}.
         * 
         * Determines the currently selected range on the slider.
         * 
         * If the value is lower/higher than the allowed minimum/maximum, a warning message will be output to the console.
         * 
         * Default value is `0,100`.
        */
        public getRange(): {};

        /**
            * Gets current value of property {@link #getValue2 value2}.
         * 
         * Current second value of the slider. (Position of the second handle.)
         * 
         * ** Note: ** If the value is not in the valid range (between `min` and `max`) it will be changed to be in the valid range. If it is smaller than `value` it will be set to the same value.
         * 
         * Default value is `100`.
        */
        public getValue2(): number;

        /**
            * Sets a new value for property {@link #getRange range}.
         * 
         * Determines the currently selected range on the slider.
         * 
         * If the value is lower/higher than the allowed minimum/maximum, a warning message will be output to the console.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0,100`.
        */
        public setRange(sRange: {}): this;

        /**
            * Sets a new value for property {@link #getValue2 value2}.
         * 
         * Current second value of the slider. (Position of the second handle.)
         * 
         * ** Note: ** If the value is not in the valid range (between `min` and `max`) it will be changed to be in the valid range. If it is smaller than `value` it will be set to the same value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100`.
        */
        public setValue2(fValue2: number): this;

    }
}