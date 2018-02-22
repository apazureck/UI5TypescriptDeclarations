declare module 'sap/ui/core/message/MessageParser' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { MessageProcessor } from 'sap/ui/core/message/MessageProcessor';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IMessageParserSettings extends IObjectSettings {
    }

    /**
    
    */
    export class MessageParser extends Object {


        /**
            * Creates a new subclass of class sap.ui.core.message.MessageParser with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.message.MessageParser.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the registered processor on which the events for message handling can be fired
        */
        protected getProcessor(): MessageProcessor;

        /**
            * Abstract parse method must be implemented in the inheriting class.
        */
        public parse(): any;

        /**
            * This method is used by the model to register itself as MessageProcessor for this parser
        */
        protected setProcessor(oProcessor: MessageProcessor): this;

    }
}