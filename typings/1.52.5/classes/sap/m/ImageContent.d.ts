declare module 'sap/m/ImageContent' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IImageContentSettings extends IControlSettings {
        src?: sap.ui.core.URI;
        description?: string;
    }

    /**
    
    */
    export class ImageContent extends Control {

        /**
            * Constructor for a new sap.m.ImageContent control.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IImageContentSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.ImageContent`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ImageContent` itself.
         * 
         * The event is triggered when the image content is pressed.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.ImageContent`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ImageContent` itself.
         * 
         * The event is triggered when the image content is pressed.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.ImageContent`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.ImageContent with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getDescription description}.
         * 
         * Description of image. This text is used to provide ScreenReader information.
        */
        public getDescription(): string;

        /**
            * Returns a metadata object for class sap.m.ImageContent.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Gets current value of property {@link #getSrc src}.
         * 
         * The image to be displayed as a graphical element within the imageContent. This can be an image or an icon from the icon font.
        */
        public getSrc(): sap.ui.core.URI;

        /**
            * Sets a new value for property {@link #getDescription description}.
         * 
         * Description of image. This text is used to provide ScreenReader information.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDescription(sDescription: string): this;

        /**
            * Sets a new value for property {@link #getSrc src}.
         * 
         * The image to be displayed as a graphical element within the imageContent. This can be an image or an icon from the icon font.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSrc(sSrc: sap.ui.core.URI): this;

    }
}