declare module 'sap/ui/commons/ResponsiveContainerRange' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control } from 'sap/ui/core/Control';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IResponsiveContainerRangeSettings extends IElementSettings {
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        key?: string;
    }

    /**
    
    */
    export class ResponsiveContainerRange extends Element {

        /**
            * Constructor for a new ResponsiveContainerRange.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IResponsiveContainerRangeSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.ResponsiveContainerRange with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * ID of the element which is the current target of the association {@link #getContent content}, or `null`.
        */
        public getContent(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The minimal height for this range to be displayed.
         * 
         * Default value is ``.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getKey key}.
         * 
         * A key which can be used to identify the range (optional).
         * 
         * Default value is ``.
        */
        public getKey(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.ResponsiveContainerRange.
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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The minimal width for this range to be displayed.
         * 
         * Default value is ``.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets the associated {@link #getContent content}.
        */
        public setContent(oContent: sap.ui.core.ID | Control): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The minimal height for this range to be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getKey key}.
         * 
         * A key which can be used to identify the range (optional).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setKey(sKey: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The minimal width for this range to be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}