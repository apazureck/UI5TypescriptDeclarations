declare module 'sap/ui/ux3/Feeder' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IFeederSettings extends IControlSettings {
        thumbnailSrc?: sap.ui.core.URI;
        text?: string;
        type?: sap.ui.ux3.FeederType;
        placeholderText?: string;
    }

    /**
    
    */
    export class Feeder extends Control {

        /**
            * Constructor for a new Feeder.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFeederSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:submit submit} event of this `sap.ui.ux3.Feeder`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Feeder` itself.
         * 
         * Event is fired when the entered text is submitted
        */
        attachSubmit<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The text that is submitted */
            text: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:submit submit} event of this `sap.ui.ux3.Feeder`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Feeder` itself.
         * 
         * Event is fired when the entered text is submitted
        */
        attachSubmit<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The text that is submitted */
            text: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:submit submit} event of this `sap.ui.ux3.Feeder`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSubmit(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.Feeder with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:submit submit} to attached listeners.
        */
        protected fireSubmit(mParameters?: { text?: string, }): this;

        /**
            * Returns a metadata object for class sap.ui.ux3.Feeder.
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
            * Gets current value of property {@link #getPlaceholderText placeholderText}.
         * 
         * This property could be used for costum placeholder. If it is not set, the default text is used.
        */
        public getPlaceholderText(): string;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * The text for the Feeder. @References are supported.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getThumbnailSrc thumbnailSrc}.
         * 
         * URL to the thumb nail image This property is optional if the feeder is a sub-control of a feed or a feedChunk control. In this case the value of the feed or feddChunk control is used if it's not set. So it must be only set once on the feed or feedChunk control.
        */
        public getThumbnailSrc(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Type and size of the Feeder
         * 
         * Default value is `Large`.
        */
        public getType(): sap.ui.ux3.FeederType;

        /**
            * Sets a new value for property {@link #getPlaceholderText placeholderText}.
         * 
         * This property could be used for costum placeholder. If it is not set, the default text is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPlaceholderText(sPlaceholderText: string): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The text for the Feeder. @References are supported.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getThumbnailSrc thumbnailSrc}.
         * 
         * URL to the thumb nail image This property is optional if the feeder is a sub-control of a feed or a feedChunk control. In this case the value of the feed or feddChunk control is used if it's not set. So it must be only set once on the feed or feedChunk control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setThumbnailSrc(sThumbnailSrc: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Type and size of the Feeder
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Large`.
        */
        public setType(sType: sap.ui.ux3.FeederType): this;

    }
}