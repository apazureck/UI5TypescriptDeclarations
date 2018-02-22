declare module 'sap/m/routing/RouteMatchedHandler' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Router } from 'sap/ui/core/routing/Router';


    export interface IRouteMatchedHandlerSettings {
    }

    /**
    
    */
    export class RouteMatchedHandler {

        /**
            * Instantiates a RouteMatchedHandler.
        */
        public constructor(router: Router, closeDialogs: boolean);


        /**
            * Removes the routeMatchedHandler from the Router
        */
        public destroy(): this;

        /**
            * Creates a new subclass of class sap.m.routing.RouteMatchedHandler with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets if a navigation should close dialogs
        */
        public getCloseDialogs(): boolean;

        /**
            * Returns a metadata object for class sap.m.routing.RouteMatchedHandler.
        */
        public static getMetadata(): Metadata;

        /**
            * Sets if a navigation should close dialogs
        */
        public setCloseDialogs(bCloseDialogs: boolean): this;

    }
}