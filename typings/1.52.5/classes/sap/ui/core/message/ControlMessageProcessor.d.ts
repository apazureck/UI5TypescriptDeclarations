declare module 'sap/ui/core/message/ControlMessageProcessor' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { MessageProcessor, IMessageProcessorSettings } from 'sap/ui/core/message/MessageProcessor';

    export interface IControlMessageProcessorSettings extends IMessageProcessorSettings {
    }

    /**
    
    */
    export class ControlMessageProcessor extends MessageProcessor {


        /**
            * Check Messages and update controls with messages
        */
        protected checkMessages(): any;

        /**
            * Creates a new subclass of class sap.ui.core.message.ControlMessageProcessor with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.message.MessageProcessor.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.message.ControlMessageProcessor.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Set Messages to check
        */
        public setMessages(vMessages: any): any;

        /**
            * Implement in inheriting classes
        */
        public setMessages(vMessages: any): any;

    }
}