declare module 'sap/ui/commons/RichTooltip' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { TooltipBase, ITooltipBaseSettings } from 'sap/ui/core/TooltipBase';

    export interface IRichTooltipSettings extends ITooltipBaseSettings {
        title?: string;
        imageSrc?: sap.ui.core.URI;
        valueStateText?: string;
        imageAltText?: string;
    }

    /**
    
    */
    export class RichTooltip extends TooltipBase {

        /**
            * Constructor for a new RichTooltip.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IRichTooltipSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.RichTooltip with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.TooltipBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getImageAltText imageAltText}.
         * 
         * This is the alt text for the image
        */
        public getImageAltText(): string;

        /**
            * Gets current value of property {@link #getImageSrc imageSrc}.
         * 
         * If RichTooltip contains an image, this property is used to define the source path.
        */
        public getImageSrc(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.commons.RichTooltip.
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
         * Tool tip title to be displayed in the header.
        */
        public getTitle(): string;

        /**
            * This returns the previously set text. Since a FormattedTextView is used for rendering and stuff the corresponding property of the FormattedTextView is being read and returned. If no text was set an empty string is being returned.
        */
        public getValueStateText(): string;

        /**
            * Calculates the height of the RichTooltip to set a proper min-height. Additionally the ARIA attributes are set to the corresponding elements.
        */
        protected onAfterRendering(): any;

        /**
            * Sets a new value for property {@link #getImageAltText imageAltText}.
         * 
         * This is the alt text for the image
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setImageAltText(sImageAltText: string): this;

        /**
            * Sets a new value for property {@link #getImageSrc imageSrc}.
         * 
         * If RichTooltip contains an image, this property is used to define the source path.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setImageSrc(sImageSrc: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Tool tip title to be displayed in the header.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * This sets an individual text for the ValueState of the parent element of the RichTooltip.
        */
        public setValueStateText(sText: string): this;

    }
}