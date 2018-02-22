declare module 'sap/ui/commons/MessageList' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IMessageListSettings extends IControlSettings {
        visible?: boolean;
        anchorId?: string;
        maxListed?: string;
    }

    /**
    
    */
    export class MessageList extends Control {

        /**
            * Constructor for a new MessageList.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMessageListSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.MessageList with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getAnchorId anchorId}.
         * 
         * ID of the anchor under which the MessageList will render.
        */
        public getAnchorId(): string;

        /**
            * Gets current value of property {@link #getMaxListed maxListed}.
         * 
         * Maximum number of messages being display in the List before a scrollbar appears. Value '0' means no limit.
         * 
         * Default value is `7`.
        */
        public getMaxListed(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.MessageList.
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
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Specifies whether or not the MessageList is visible. Invisible controls are not rendered.
         * 
         * Default value is `false`.
        */
        public getVisible(): boolean;

        /**
            * Sets a new value for property {@link #getAnchorId anchorId}.
         * 
         * ID of the anchor under which the MessageList will render.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAnchorId(sAnchorId: string): this;

        /**
            * Sets a new value for property {@link #getMaxListed maxListed}.
         * 
         * Maximum number of messages being display in the List before a scrollbar appears. Value '0' means no limit.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `7`.
        */
        public setMaxListed(sMaxListed: string): this;

        /**
            * Sets the list of Messages to be displayed and re-renders this Control if it is visible.
        */
        public setMessages(aMessages: {}): any;

        /**
            * Setter for property `visible`.
         * 
         * Default value is `true`
         * 
         * The default implementation of function "setVisible()" is overwritten in order to invoke the open() and close() of the MessageList Popup.
        */
        public setVisible(bVisible: boolean): this;

    }
}