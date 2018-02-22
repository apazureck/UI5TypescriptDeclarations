declare module 'sap/ui/core/routing/Target' {
    import { Event } from 'sap/ui/base/Event';
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Views } from 'sap/ui/core/routing/Views';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface ITargetSettings extends IEventProviderSettings {
    }

    export class Target extends EventProvider {

        /**
            * Provides a convenient way for placing views into the correct containers of your application.
         *  The main benefit of Targets is lazy loading: you do not have to create the views until you really need them.
         *  ** Don't call this constructor directly **, use {@link sap.ui.core.routing.Targets} instead, it will create instances of a Target.
         *  If you are using the mobile library, please use the {@link sap.m.routing.Targets} constructor, please read the documentation there.
         * 
        */
        public constructor(oOptions: {}, oViews: Views, oParent: Target);


        /**
            * This function is called between the target view is loaded and the view is added to the container.
         * 
         * This function can be used for applying modification on the view or the container to make the rerendering occur together with the later aggregation change.
        */
        protected _beforePlacingViewIntoContainer(mArguments: { container: Control, view: Control, data?: {}, }): any;

        /**
            * Attach event-handler `fnFunction` to the 'display' event of this `sap.ui.core.routing.Target`.
         * 
        */
        attachDisplay<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The view that got displayed. */
            view: {}, /* * The control that now contains the view in the controlAggregation */
            control: {}, /* * The options object passed to the constructor {@link sap.ui.core.routing.Target#constructor} */
            config: {}, /* * The data passed into the {@link sap.ui.core.routing.Target#display} function */
            data: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'display' event of this `sap.ui.core.routing.Target`.
         * 
        */
        attachDisplay<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The view that got displayed. */
            view: {}, /* * The control that now contains the view in the controlAggregation */
            control: {}, /* * The options object passed to the constructor {@link sap.ui.core.routing.Target#constructor} */
            config: {}, /* * The data passed into the {@link sap.ui.core.routing.Target#display} function */
            data: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys the target, will be called by {@link sap.m.routing.Targets} don't call this directly.
        */
        public destroy(): this;

        /**
            * Destructor method for objects
        */
        public destroy(): any;

        /**
            * Detach event-handler `fnFunction` from the 'display' event of this `sap.ui.core.routing.Target`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachDisplay(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a view and puts it in an aggregation of a control that has been defined in the {@link sap.ui.core.routing.Target#constructor}.
        */
        public display(vData?: any): any;

        /**
            * Creates a new subclass of class sap.ui.core.routing.Target with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fire event created to attached listeners.
        */
        protected fireDisplay(mArguments?: {}): this;

        /**
            * Returns a metadata object for class sap.ui.core.routing.Target.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

    }
}