declare module 'sap/ui/commons/Image' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IImageSettings extends IControlSettings {
        src?: sap.ui.core.URI;
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        decorative?: boolean;
        alt?: string;
        useMap?: string;
    }

    /**
    
    */
    export class Image extends Control {

        /**
            * Constructor for a new Image.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IImageSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.Image`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Image` itself.
         * 
         * Event is fired when the user clicks on the control.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.Image`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Image` itself.
         * 
         * Event is fired when the user clicks on the control.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.commons.Image`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.Image with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getAlt alt}.
         * 
         * The alternative text that is displayed in case the Image is not available, or cannot be displayed. If the image is set to decorative this property is ignored.
        */
        public getAlt(): string;

        /**
            * Gets current value of property {@link #getDecorative decorative}.
         * 
         * A decorative image is included for design reasons. Accessibility tools will ignore decorative images. Note: If the Image has an image map (useMap is set), this property will be overridden (the image will not be rendered as decorative). A decorative image has no ALT attribute, so the Alt property is ignored if the image is decorative.
         * 
         * Default value is `true`.
        */
        public getDecorative(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the overall size is maintained then, considering the aspect ratio.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.commons.Image.
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
            * Gets current value of property {@link #getSrc src}.
         * 
         * Relative or absolute path to URL where the image file is stored.
        */
        public getSrc(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getUseMap useMap}.
         * 
         * The name of the image map that defines the clickable areas
        */
        public getUseMap(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the overall size is maintained then, considering the aspect ratio.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getAlt alt}.
         * 
         * The alternative text that is displayed in case the Image is not available, or cannot be displayed. If the image is set to decorative this property is ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAlt(sAlt: string): this;

        /**
            * Sets a new value for property {@link #getDecorative decorative}.
         * 
         * A decorative image is included for design reasons. Accessibility tools will ignore decorative images. Note: If the Image has an image map (useMap is set), this property will be overridden (the image will not be rendered as decorative). A decorative image has no ALT attribute, so the Alt property is ignored if the image is decorative.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setDecorative(bDecorative: boolean): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the overall size is maintained then, considering the aspect ratio.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getSrc src}.
         * 
         * Relative or absolute path to URL where the image file is stored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSrc(sSrc: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getUseMap useMap}.
         * 
         * The name of the image map that defines the clickable areas
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setUseMap(sUseMap: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * When the empty value is kept, the original size is not changed. It is also possible to make settings for width or height only, the overall size is maintained then, considering the aspect ratio.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}