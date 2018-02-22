declare module 'sap/ui/core/message/MessageProcessor' {
    import { ListBinding } from 'sap/ui/model/ListBinding';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface IMessageProcessorSettings extends IEventProviderSettings {
    }

    /**
    
    */
    export class MessageProcessor extends EventProvider {


        /**
            * Attach event-handler `fnFunction` to the 'messageChange' event of this `sap.ui.core.message.MessageProcessor`.
         * 
        */
        public attachMessageChange(fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attach event-handler `fnFunction` to the 'messageChange' event of this `sap.ui.core.message.MessageProcessor`.
         * 
        */
        public attachMessageChange(oData: {}, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Implement in inheriting classes
        */
        public checkMessage(): ListBinding;

        /**
            * Destroys the MessageProcessor Instance
        */
        public destroy(): any;

        /**
            * Detach event-handler `fnFunction` from the 'sap.ui.core.message.MessageProcessor' event of this `sap.ui.core.message.MessageProcessor`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachMessageChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.core.message.MessageProcessor with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fire event messageChange to attached listeners.
        */
        protected fireMessageChange(mArguments?: {}): this;

        /**
            * Returns the ID of the MessageProcessor instance
        */
        public getId(): string;

        /**
            * Returns a metadata object for class sap.ui.core.message.MessageProcessor.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Implement in inheriting classes
        */
        public setMessages(vMessages: any): any;

    }
}