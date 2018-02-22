declare module 'sap/m/LightBoxItem' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface ILightBoxItemSettings extends IElementSettings {
        imageSrc?: sap.ui.core.URI;
        alt?: string;
        title?: string;
        subtitle?: string;
    }

    /**
    
    */
    export class LightBoxItem extends Element {

        /**
            * Constructor for a new LightBoxItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ILightBoxItemSettings);


        /**
            * Creates a new subclass of class sap.m.LightBoxItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getAlt alt}.
         * 
         * Alt value for the image
         * 
         * Default value is ``.
        */
        public getAlt(): string;

        /**
            * Gets current value of property {@link #getImageSrc imageSrc}.
         * 
         * Source for the image. This property is mandatory. If not set the popup will not open
         * 
         * Default value is ``.
        */
        public getImageSrc(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.m.LightBoxItem.
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
            * Gets current value of property {@link #getSubtitle subtitle}.
         * 
         * Subtitle text for the image
         * 
         * Default value is ``.
        */
        public getSubtitle(): string;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Title text for the image. This property is mandatory.
         * 
         * Default value is ``.
        */
        public getTitle(): string;

        /**
            * Sets the alt text of the image.
        */
        public setAlt(alt: string): this;

        /**
            * Sets the source of the image.
        */
        public setImageSrc(sImageSrc: sap.ui.core.URI): this;

        /**
            * Sets the subtitle of the image.
        */
        public setSubtitle(subtitleText: string): this;

        /**
            * Sets the title of the image.
        */
        public setTitle(title: string): this;

    }
}