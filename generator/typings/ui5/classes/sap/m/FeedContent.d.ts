declare module 'sap/m/FeedContent' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IFeedContentSettings extends IControlSettings {
        size?: sap.m.Size;
        contentText?: string;
        subheader?: string;
        value?: string;
        valueColor?: sap.m.ValueColor;
        truncateValueTo?: number;
    }

    /**
    
    */
    export class FeedContent extends Control {

        /**
            * Constructor for a new sap.m.FeedContent control.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFeedContentSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.FeedContent`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FeedContent` itself.
         * 
         * The event is triggered when the feed content is pressed.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.FeedContent`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FeedContent` itself.
         * 
         * The event is triggered when the feed content is pressed.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.FeedContent`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.FeedContent with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getContentText contentText}.
         * 
         * The content text.
        */
        public getContentText(): string;

        /**
            * Returns a metadata object for class sap.m.FeedContent.
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
            * Gets current value of property {@link #getSize size}.
         * 
         * Updates the size of the chart. If not set then the default size is applied based on the device tile.
         * 
         * Default value is `Auto`.
        */
        public getSize(): sap.m.Size;

        /**
            * Gets current value of property {@link #getSubheader subheader}.
         * 
         * The subheader.
        */
        public getSubheader(): string;

        /**
            * Gets current value of property {@link #getTruncateValueTo truncateValueTo}.
         * 
         * The number of characters to display for the value property.
         * 
         * Default value is `4`.
        */
        public getTruncateValueTo(): number;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * The actual value.
        */
        public getValue(): string;

        /**
            * Gets current value of property {@link #getValueColor valueColor}.
         * 
         * The semantic color of the value.
        */
        public getValueColor(): sap.m.ValueColor;

        /**
            * Sets a new value for property {@link #getContentText contentText}.
         * 
         * The content text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContentText(sContentText: string): this;

        /**
            * Sets a new value for property {@link #getSize size}.
         * 
         * Updates the size of the chart. If not set then the default size is applied based on the device tile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setSize(sSize: sap.m.Size): this;

        /**
            * Sets a new value for property {@link #getSubheader subheader}.
         * 
         * The subheader.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSubheader(sSubheader: string): this;

        /**
            * Sets a new value for property {@link #getTruncateValueTo truncateValueTo}.
         * 
         * The number of characters to display for the value property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `4`.
        */
        public setTruncateValueTo(iTruncateValueTo: number): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * The actual value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValue(sValue: string): this;

        /**
            * Sets a new value for property {@link #getValueColor valueColor}.
         * 
         * The semantic color of the value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValueColor(sValueColor: sap.m.ValueColor): this;

    }
}