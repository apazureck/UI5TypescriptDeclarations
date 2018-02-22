declare module 'sap/ui/commons/Area' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IAreaSettings extends IElementSettings {
        shape?: string;
        coords?: string;
        href?: sap.ui.core.URI;
        alt?: string;
    }

    /**
    
    */
    export class Area extends Element {

        /**
            * Constructor for a new Area.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IAreaSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.Area with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getAlt alt}.
         * 
         * Alternative text that is displayed in the case the image is not available
        */
        public getAlt(): string;

        /**
            * Gets current value of property {@link #getCoords coords}.
         * 
         * Coordinates of the area
        */
        public getCoords(): string;

        /**
            * Gets current value of property {@link #getHref href}.
         * 
         * Hyper link that is executed when the area is clicked
        */
        public getHref(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.commons.Area.
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
            * Gets current value of property {@link #getShape shape}.
         * 
         * The value is a string and can be 'rect' for rectangle, 'poly' for poligon, 'circle', or default.
        */
        public getShape(): string;

        /**
            * Sets a new value for property {@link #getAlt alt}.
         * 
         * Alternative text that is displayed in the case the image is not available
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAlt(sAlt: string): this;

        /**
            * Sets a new value for property {@link #getCoords coords}.
         * 
         * Coordinates of the area
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setCoords(sCoords: string): this;

        /**
            * Sets a new value for property {@link #getHref href}.
         * 
         * Hyper link that is executed when the area is clicked
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHref(sHref: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getShape shape}.
         * 
         * The value is a string and can be 'rect' for rectangle, 'poly' for poligon, 'circle', or default.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setShape(sShape: string): this;

    }
}