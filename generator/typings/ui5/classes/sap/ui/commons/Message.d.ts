declare module 'sap/ui/commons/Message' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IMessageSettings extends IControlSettings {
        type?: sap.ui.commons.MessageType;
        text?: string;
        associatedElementId?: string;
        design?: string;
    }

    /**
    
    */
    export class Message extends Control {

        /**
            * Constructor for a new Message.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMessageSettings);


        /**
            * Registers a callback function to be invoked if long text Details are to be made available.
         * 
         * This callback function will be supplied the corresponding Message "id", and should return the (simple) HTML string to be displayed within the Message Details Dialog.
         * 
         * E.g.: myMessage.bindDetails(getDetails); function getDetails(sId) {... return htmlString;}
        */
        public bindDetails(fnCallBack: (() => any)): any;

        /**
            * Creates a new subclass of class sap.ui.commons.Message with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getAssociatedElementId associatedElementId}.
         * 
         * Associated UI element ID. (Optional) For navigation to error field.
        */
        public getAssociatedElementId(): string;

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * Internal attribute, used to force the display of the "short" or the "long" text only.
        */
        public getDesign(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.Message.
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
            * Gets current value of property {@link #getText text}.
         * 
         * Message short text. (Mandatory)
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * "Success", or "Warning", or "Error" messages. (Mandatory)
        */
        public getType(): sap.ui.commons.MessageType;

        /**
            * Sets a new value for property {@link #getAssociatedElementId associatedElementId}.
         * 
         * Associated UI element ID. (Optional) For navigation to error field.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAssociatedElementId(sAssociatedElementId: string): this;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Internal attribute, used to force the display of the "short" or the "long" text only.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDesign(sDesign: string): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Message short text. (Mandatory)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * "Success", or "Warning", or "Error" messages. (Mandatory)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setType(sType: sap.ui.commons.MessageType): this;

    }
}