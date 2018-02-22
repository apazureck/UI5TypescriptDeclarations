declare module 'sap/ui/core/LocalBusyIndicator' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ILocalBusyIndicatorSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class LocalBusyIndicator extends Control {

        /**
            * Constructor for a new LocalBusyIndicator.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ILocalBusyIndicatorSettings);


        /**
            * Creates a new subclass of class sap.ui.core.LocalBusyIndicator with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * This property is the height of the control that has to be covered. With this height the position of the animation can be properly set.
         * 
         * Default value is `100px`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.core.LocalBusyIndicator.
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
            * Gets current value of property {@link #getWidth width}.
         * 
         * This property is the width of the control that has to be covered. With this width the position of the animation can be properly set.
         * 
         * Default value is `100px`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * This property is the height of the control that has to be covered. With this height the position of the animation can be properly set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100px`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * This property is the width of the control that has to be covered. With this width the position of the animation can be properly set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100px`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}