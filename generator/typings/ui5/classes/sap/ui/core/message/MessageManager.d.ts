declare module 'sap/ui/core/message/MessageManager' {
    import { Message } from 'sap/ui/core/message/Message';
    import { MessageModel } from 'sap/ui/model/message/MessageModel';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { MessageProcessor } from 'sap/ui/core/message/MessageProcessor';
    import { ManagedObject } from 'sap/ui/base/ManagedObject';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface IMessageManagerSettings extends IEventProviderSettings {
    }

    export class MessageManager extends EventProvider {


        /**
            * Add messages to MessageManager
        */
        public addMessages(vMessages: Message | {}): any;

        /**
            * destroy MessageManager
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.core.message.MessageManager with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Get the MessageModel
        */
        public getMessageModel(): MessageModel;

        /**
            * Returns a metadata object for class sap.ui.core.message.MessageManager.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Register MessageProcessor
        */
        public registerMessageProcessor(oProcessor: MessageProcessor): any;

        /**
            * Register ManagedObject: Validation and Parse errors are handled by the MessageManager for this object
        */
        public registerObject(oObject: ManagedObject, bHandleValidation: boolean): any;

        /**
            * Remove all messages
        */
        public removeAllMessages(): any;

        /**
            * Remove given Messages
        */
        public removeMessages(vMessages: Message | {}): any;

        /**
            * Deregister MessageProcessor
        */
        public unregisterMessageProcessor(oProcessor: MessageProcessor): any;

        /**
            * Unregister ManagedObject
        */
        public unregisterObject(oObject: ManagedObject): any;

    }
}