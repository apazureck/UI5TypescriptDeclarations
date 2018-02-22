declare module 'sap/ui/commons/MessageToast' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Message } from 'sap/ui/commons/Message';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IMessageToastSettings extends IControlSettings {
        anchorId?: string;
    }

    /**
    
    */
    export class MessageToast extends Control {

        /**
            * Constructor for a new MessageToast.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMessageToastSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:next next} event of this `sap.ui.commons.MessageToast`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.MessageToast` itself.
         * 
         * Fired once the `toast()` method is over, so that the MessageBar can "toast" another message if needed.
        */
        attachNext<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:next next} event of this `sap.ui.commons.MessageToast`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.MessageToast` itself.
         * 
         * Fired once the `toast()` method is over, so that the MessageBar can "toast" another message if needed.
        */
        attachNext<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:next next} event of this `sap.ui.commons.MessageToast`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachNext(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.MessageToast with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:next next} to attached listeners.
        */
        protected fireNext(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getAnchorId anchorId}.
         * 
         * ID of the anchor on top of which the MessageToast is to render.
        */
        public getAnchorId(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.MessageToast.
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
            * Returns the idle state of the control. Returns true if no message is being toasted.
        */
        public isIdle(): boolean;

        /**
            * Sets a new value for property {@link #getAnchorId anchorId}.
         * 
         * ID of the anchor on top of which the MessageToast is to render.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAnchorId(sAnchorId: string): this;

        /**
            * Triggers the toasting of a message, on top of the MessageBar. If no message is supplied, displays the "Multiple new messages..." message.
         * 
         * Receives the list of Messages to be displayed, and re-renders this Control if it is visible.
        */
        public toast(oMessage: Message, sAnchorId: string): any;

    }
}