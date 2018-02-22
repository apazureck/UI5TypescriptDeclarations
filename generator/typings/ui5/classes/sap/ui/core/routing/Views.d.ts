declare module 'sap/ui/core/routing/Views' {
    import { Event } from 'sap/ui/base/Event';
    import { View } from 'sap/ui/core/mvc/View';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface IViewsSettings extends IEventProviderSettings {
    }

    export class Views extends EventProvider {


        /**
            * Attach event-handler `fnFunction` to the 'created' event of this `sap.ui.core.routing.Views`.
         * 
        */
        attachCreated<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * the instance of the created view. */
            view: View, /* * The view options passed to {@link sap.ui.view} */
            viewOptions: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'created' event of this `sap.ui.core.routing.Views`.
         * 
        */
        attachCreated<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * the instance of the created view. */
            view: View, /* * The view options passed to {@link sap.ui.view} */
            viewOptions: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detach event-handler `fnFunction` from the 'created' event of this `sap.ui.core.routing.Views`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachCreated(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.core.routing.Views with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fire event created to attached listeners.
        */
        protected fireCreated(mArguments?: {}): this;

        /**
            * Returns a metadata object for class sap.ui.core.routing.Views.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a cached view, for a given name. If it does not exist yet, it will create the view with the provided options. If you provide a viewId, it will be prefixed with the viewId of the component.
        */
        public getView(oOptions: { viewName: string, }): any;

        /**
            * Adds or overwrites a view in the cache of the Views instance. The viewName serves as a key for caching.
         * 
         * If the second parameter is set to null or undefined, the previous cache view under the same name isn't managed by the Views instance. The lifecycle (for example the destroy of the view) of the view instance should be maintained by additional code.
        */
        public setView(sViewName: string, oView: View | any | any): this;

    }
}