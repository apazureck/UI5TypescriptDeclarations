declare module 'sap/ui/core/ws/SapPcpWebSocket' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { WebSocket, IWebSocketSettings } from 'sap/ui/core/ws/WebSocket';

    export interface ISapPcpWebSocketSettings extends IWebSocketSettings {
    }

    /**
    
    */
    export class SapPcpWebSocket extends WebSocket {

        /**
            * Creates a new WebSocket connection and uses the pcp-protocol for communication.
        */
        public constructor(sUrl: string, aProtocols: any[]);


        /**
            * Creates a new subclass of class sap.ui.core.ws.SapPcpWebSocket with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.ws.WebSocket.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fire event 'message' to attached listeners.
        */
        protected fireMessage(mArguments?: { data?: string, pcpFields?: string, }): this;

        /**
            * Fire event 'message' to attached listeners.
        */
        protected fireMessage(mArguments?: { data?: string, }): this;

        /**
            * Returns a metadata object for class sap.ui.core.ws.SapPcpWebSocket.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Sends a message and optional pcp-header-fields using the pcp-protocol.<br> <br> If the connection is not yet opened, the message will be queued and sent when the connection is established.
        */
        public send(message: string | any | any, oPcpFields?: {}): this;

    }
}