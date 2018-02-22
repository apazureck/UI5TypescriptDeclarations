declare module 'sap/ui/core/EventBus' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IEventBusSettings extends IObjectSettings {
    }

    /**
    
    */
    export class EventBus extends Object {


        /**
            * Cleans up the internal structures and removes all event handlers.
         * 
         * The object must not be used anymore after destroy was called.
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.core.EventBus with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.EventBus.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Fires an event using the specified settings and notifies all attached event handlers.
        */
        public publish(sChannelId: string, sEventId: string, oData?: {}): any;

        /**
            * Fires an event using the specified settings and notifies all attached event handlers.
        */
        public publish(sEventId: string, oData?: {}): any;

        /**
            * Attaches an event handler to the event with the given identifier on the given event channel.
        */
        public subscribe(sEventId: string, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attaches an event handler to the event with the given identifier on the given event channel.
        */
        public subscribe(sChannelId: string, sEventId: string, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attaches an event handler, called one time only, to the event with the given identifier on the given event channel.
         * 
         * When the event occurs, the handler function is called and the handler registration is automatically removed afterwards.
        */
        public subscribeOnce(sEventId: string, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attaches an event handler, called one time only, to the event with the given identifier on the given event channel.
         * 
         * When the event occurs, the handler function is called and the handler registration is automatically removed afterwards.
        */
        public subscribeOnce(sChannelId: string, sEventId: string, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Removes a previously subscribed event handler from the event with the given identifier on the given event channel.
         * 
         * The passed parameters must match those used for registration with {@link #subscribe } beforehand!
        */
        public unsubscribe(sEventId: string, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Removes a previously subscribed event handler from the event with the given identifier on the given event channel.
         * 
         * The passed parameters must match those used for registration with {@link #subscribe } beforehand!
        */
        public unsubscribe(sChannelId: string, sEventId: string, fnFunction: (() => any), oListener?: {}): this;

    }
}