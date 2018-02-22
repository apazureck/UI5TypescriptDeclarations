declare module 'sap/ui/core/routing/Route' {
    import { Event } from 'sap/ui/base/Event';
    import { Router } from 'sap/ui/core/routing/Router';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface IRouteSettings extends IEventProviderSettings {
    }

    export class Route extends EventProvider {

        /**
            * Instantiates an SAPUI5 Route
        */
        public constructor(The: Router, oConfig: { name: string, pattern?: string, greedy?: boolean, parent?: string, target?: string | {}, view?: string, viewType?: string, viewPath?: string, targetParent?: string, targetControl?: string, targetAggregation?: string, clearTarget?: boolean, subroutes?: {}, }, oParent: Route);


        /**
            * Attach event-handler `fnFunction` to the 'beforeMatched' event of this `sap.ui.core.routing.Route`.
         * 
        */
        attachBeforeMatched<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of the route */
            name: string, /* * A key-value pair object which contains the arguments defined in the route resolved with the corresponding information from the current URL hash */
            arguments: {}, /* * The configuration object of the route */
            config: {}, /* * The nested route instance of this route. The event is fired on this route because the pattern in the nested route is matched with the current URL hash. This parameter can be used to decide whether the current route is matched because of its nested child route. For more information about nested child route please refer to the documentation of oConfig.parent in {@link sap.ui.core.routing.Route#constructor} */
            nestedRoute?: Route,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'beforeMatched' event of this `sap.ui.core.routing.Route`.
         * 
        */
        attachBeforeMatched<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of the route */
            name: string, /* * A key-value pair object which contains the arguments defined in the route resolved with the corresponding information from the current URL hash */
            arguments: {}, /* * The configuration object of the route */
            config: {}, /* * The nested route instance of this route. The event is fired on this route because the pattern in the nested route is matched with the current URL hash. This parameter can be used to decide whether the current route is matched because of its nested child route. For more information about nested child route please refer to the documentation of oConfig.parent in {@link sap.ui.core.routing.Route#constructor} */
            nestedRoute?: Route,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'matched' event of this `sap.ui.core.routing.Route`.
         * 
        */
        attachMatched<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of the route */
            name: string, /* * A key-value pair object which contains the arguments defined in the route resolved with the corresponding information from the current URL hash */
            arguments: {}, /* * The configuration object of the route */
            config: {}, /* * The nested route instance of this route. The event is fired on this route because the pattern in the nested route is matched with the current URL hash. This parameter can be used to decide whether the current route is matched because of its nested child route. For more information about nested child route please refer to the documentation of oConfig.parent in {@link sap.ui.core.routing.Route#constructor} */
            nestedRoute?: Route,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'matched' event of this `sap.ui.core.routing.Route`.
         * 
        */
        attachMatched<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of the route */
            name: string, /* * A key-value pair object which contains the arguments defined in the route resolved with the corresponding information from the current URL hash */
            arguments: {}, /* * The configuration object of the route */
            config: {}, /* * The nested route instance of this route. The event is fired on this route because the pattern in the nested route is matched with the current URL hash. This parameter can be used to decide whether the current route is matched because of its nested child route. For more information about nested child route please refer to the documentation of oConfig.parent in {@link sap.ui.core.routing.Route#constructor} */
            nestedRoute?: Route,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'patternMatched' event of this `sap.ui.core.routing.Route`.
         * 
        */
        attachPatternMatched<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of the route */
            name: string, /* * A key-value pair object which contains the arguments defined in the route resolved with the corresponding information from the current URL hash */
            arguments: {}, /* * The configuration object of the route */
            config: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'patternMatched' event of this `sap.ui.core.routing.Route`.
         * 
        */
        attachPatternMatched<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of the route */
            name: string, /* * A key-value pair object which contains the arguments defined in the route resolved with the corresponding information from the current URL hash */
            arguments: {}, /* * The configuration object of the route */
            config: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys a route
        */
        public destroy(): this;

        /**
            * Destructor method for objects
        */
        public destroy(): any;

        /**
            * Detach event-handler `fnFunction` from the 'beforeMatched' event of this `sap.ui.core.routing.Route`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachBeforeMatched(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the 'matched' event of this `sap.ui.core.routing.Route`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachMatched(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the 'patternMatched' event of this `sap.ui.core.routing.Route`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachPatternMatched(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.core.routing.Route with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fire event beforeMatched to attached listeners.
        */
        protected fireBeforeMatched(mArguments?: {}): Router;

        /**
            * Returns a metadata object for class sap.ui.core.routing.Route.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Return the pattern of the route. If there are multiple patterns, the first pattern is returned
        */
        public getPattern(): string;

        /**
            * Returns the URL for the route and replaces the placeholders with the values in oParameters
        */
        public getURL(oParameters: {}): string;

    }
}