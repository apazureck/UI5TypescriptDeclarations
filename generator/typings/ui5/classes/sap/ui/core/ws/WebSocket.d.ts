declare module 'sap/ui/core/ws/WebSocket' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Interface } from 'sap/ui/base/Interface';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface IWebSocketSettings extends IEventProviderSettings {
    }

    /**
    
    */
    export class WebSocket extends EventProvider {

        /**
            * Creates a new WebSocket connection.
        */
        public constructor(sUrl: string, aProtocols: any[]);


        /**
            * Attach event-handler `fnFunction` to the 'close' event of this `sap.ui.core.ws.WebSocket`.<br>
        */
        attachClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Close code provided by the server. */
            code: string, /* * Reason from server for closing the connection. */
            reason: string, /* * Indicates whether the connection was cleanly closed or not. */
            wasClean: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'close' event of this `sap.ui.core.ws.WebSocket`.<br>
        */
        attachClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Close code provided by the server. */
            code: string, /* * Reason from server for closing the connection. */
            reason: string, /* * Indicates whether the connection was cleanly closed or not. */
            wasClean: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'error' event of this `sap.ui.core.ws.WebSocket`.<br>
        */
        attachError<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'error' event of this `sap.ui.core.ws.WebSocket`.<br>
        */
        attachError<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'message' event of this `sap.ui.core.ws.WebSocket`.<br>
        */
        attachMessage<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Received data from the server. */
            data: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'message' event of this `sap.ui.core.ws.WebSocket`.<br>
        */
        attachMessage<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Received data from the server. */
            data: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'open' event of this `sap.ui.core.ws.WebSocket`.<br>
        */
        attachOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'open' event of this `sap.ui.core.ws.WebSocket`.<br>
        */
        attachOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Closes the connection.
        */
        public close(iCode?: number, sReason?: string): this;

        /**
            * Detach event-handler `fnFunction` from the 'close' event of this `sap.ui.core.ws.WebSocket`.<br>
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the 'error' event of this `sap.ui.core.ws.WebSocket`.<br>
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachError(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the 'message' event of this `sap.ui.core.ws.WebSocket`.<br>
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachMessage(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the 'open' event of this `sap.ui.core.ws.WebSocket`.<br>
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.core.ws.WebSocket with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fire event 'close' to attached listeners.
        */
        protected fireClose(mArguments?: { code?: string, reason?: string, wasClean?: string, }): this;

        /**
            * Fire event 'error' to attached listeners.
        */
        protected fireError(mArguments?: {}): this;

        /**
            * Fire event 'message' to attached listeners.
        */
        protected fireMessage(mArguments?: { data?: string, }): this;

        /**
            * Fire event 'open' to attached listeners.
        */
        protected fireOpen(mArguments?: {}): this;

        /**
            
        */
        public getInterface(): any | Interface;

        /**
            * Returns the public interface of the object.
        */
        public getInterface(): Interface;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.ws.WebSocket.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Getter for the protocol selected by the server once the connection is open.
        */
        public getProtocol(): string;

        /**
            * Getter for WebSocket readyState.
        */
        public getReadyState(): sap.ui.core.ws.ReadyState;

        /**
            * Sends a message.<br> <br> If the connection is not yet opened, the message will be queued and sent when the connection is established.
        */
        public send(sMessage: string): this;

    }
}