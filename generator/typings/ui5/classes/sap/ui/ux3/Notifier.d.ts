declare module 'sap/ui/ux3/Notifier' {
    import { Event } from 'sap/ui/base/Event';
    import { Message } from 'sap/ui/core/Message';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface INotifierSettings extends IElementSettings {
        icon?: sap.ui.core.URI;
        title?: string;
    }

    /**
    
    */
    export class Notifier extends Element {

        /**
            * Constructor for a new Notifier.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: INotifierSettings);


        /**
            * Adds some message to the aggregation {@link #getMessages messages}.
        */
        public addMessage(oMessage: Message): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:messageSelected messageSelected} event of this `sap.ui.ux3.Notifier`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Notifier` itself.
         * 
         * Event is fired when a message of the notifiers was selected.
        */
        attachMessageSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The message that was selected */
            message: Message, /* * The notifier that contains the selected message */
            notifier: Notifier,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:messageSelected messageSelected} event of this `sap.ui.ux3.Notifier`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Notifier` itself.
         * 
         * Event is fired when a message of the notifiers was selected.
        */
        attachMessageSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The message that was selected */
            message: Message, /* * The notifier that contains the selected message */
            notifier: Notifier,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the messages in the aggregation {@link #getMessages messages}.
        */
        public destroyMessages(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:messageSelected messageSelected} event of this `sap.ui.ux3.Notifier`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachMessageSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.Notifier with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:messageSelected messageSelected} to attached listeners.
        */
        protected fireMessageSelected(mParameters?: { message?: Message, notifier?: Notifier, }): this;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Icon of the control that should be displayed within the corresponding bar
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets content of aggregation {@link #getMessages messages}.
         * 
         * Messages of this notifier.
        */
        public getMessages(): {};

        /**
            * Returns a metadata object for class sap.ui.ux3.Notifier.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the title that should be displayed within the opening popup
        */
        public getTitle(): string;

        /**
            * This method checks if the notifier has any items.
        */
        public hasItems(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Message` in the aggregation {@link #getMessages messages}. and returns its index if found or -1 otherwise.
        */
        public indexOfMessage(oMessage: Message): number;

        /**
            * Inserts a message into the aggregation {@link #getMessages messages}.
        */
        public insertMessage(oMessage: Message, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getMessages messages}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllMessages(): {};

        /**
            * Removes a message from the aggregation {@link #getMessages messages}.
        */
        public removeMessage(vMessage: number | string | Message): Message;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Icon of the control that should be displayed within the corresponding bar
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Defines the title that should be displayed within the opening popup
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

    }
}