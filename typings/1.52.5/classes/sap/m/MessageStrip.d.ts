declare module 'sap/m/MessageStrip' {
    import { Event } from 'sap/ui/base/Event';
    import { Link } from 'sap/m/Link';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IMessageStripSettings extends IControlSettings {
        text?: string;
        type?: sap.ui.core.MessageType;
        customIcon?: sap.ui.core.URI;
        showIcon?: boolean;
        showCloseButton?: boolean;
        enableFormattedText?: boolean;
    }

    /**
    
    */
    export class MessageStrip extends Control {

        /**
            * Constructor for a new MessageStrip.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMessageStripSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.m.MessageStrip`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessageStrip` itself.
         * 
         * This event will be fired after the container is closed.
        */
        attachClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.m.MessageStrip`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessageStrip` itself.
         * 
         * This event will be fired after the container is closed.
        */
        attachClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Closes the MessageStrip. This method sets the visible property of the MessageStrip to false. The MessageStrip can be shown again by setting the visible property to true.
        */
        public close(): any;

        /**
            * Destroys the link in the aggregation {@link #getLink link}.
        */
        public destroyLink(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.m.MessageStrip`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.MessageStrip with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:close close} to attached listeners.
        */
        protected fireClose(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getCustomIcon customIcon}.
         * 
         * Determines a custom icon which is displayed. If none is set, the default icon for this message type is used.
         * 
         * Default value is ``.
        */
        public getCustomIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getEnableFormattedText enableFormattedText}.
         * 
         * Determines the limited collection of HTML elements passed to the `text` property should be evaluated.
         * 
         * ** Note: ** If this property is set to true the string passed to `text` property can evaluate the following list of limited HTML elements. All other HTML elements and their nested content will not be rendered by the control:  * `a` * `em` * `strong` * `u` 
         * 
         * Default value is `false`.
        */
        public getEnableFormattedText(): boolean;

        /**
            * Gets content of aggregation {@link #getLink link}.
         * 
         * Adds an sap.m.Link control which will be displayed at the end of the message.
        */
        public getLink(): Link;

        /**
            * Returns a metadata object for class sap.m.MessageStrip.
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
            * Gets current value of property {@link #getShowCloseButton showCloseButton}.
         * 
         * Determines if the message has a close button in the upper right corner.
         * 
         * Default value is `false`.
        */
        public getShowCloseButton(): boolean;

        /**
            * Gets current value of property {@link #getShowIcon showIcon}.
         * 
         * Determines if an icon is displayed for the message.
         * 
         * Default value is `false`.
        */
        public getShowIcon(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Determines the text of the message.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Determines the type of messages that are displayed in the MessageStrip. Possible values are: Information (default), Success, Warning, Error. If None is passed, the value is set to Information and a warning is displayed in the console.
         * 
         * Default value is `Information`.
        */
        public getType(): sap.ui.core.MessageType;

        /**
            * Sets a new value for property {@link #getCustomIcon customIcon}.
         * 
         * Determines a custom icon which is displayed. If none is set, the default icon for this message type is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setCustomIcon(sCustomIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getEnableFormattedText enableFormattedText}.
         * 
         * Determines the limited collection of HTML elements passed to the `text` property should be evaluated.
         * 
         * ** Note: ** If this property is set to true the string passed to `text` property can evaluate the following list of limited HTML elements. All other HTML elements and their nested content will not be rendered by the control:  * `a` * `em` * `strong` * `u` 
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableFormattedText(bEnableFormattedText: boolean): this;

        /**
            * Sets the aggregated {@link #getLink link}.
        */
        public setLink(oLink: Link): this;

        /**
            * Sets a new value for property {@link #getShowCloseButton showCloseButton}.
         * 
         * Determines if the message has a close button in the upper right corner.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowCloseButton(bShowCloseButton: boolean): this;

        /**
            * Sets a new value for property {@link #getShowIcon showIcon}.
         * 
         * Determines if an icon is displayed for the message.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowIcon(bShowIcon: boolean): this;

        /**
            * Setter for property text. Default value is empty/undefined
        */
        public setText(sText: string): this;

        /**
            * Setter for property type. Default value is sap.ui.core.MessageType.Information
        */
        public setType(sType: sap.ui.core.MessageType): this;

    }
}