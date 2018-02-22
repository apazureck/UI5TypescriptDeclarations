declare module 'sap/ui/core/routing/Targets' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Target } from 'sap/ui/core/routing/Target';
    import { Views } from 'sap/ui/core/routing/Views';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface ITargetsSettings extends IEventProviderSettings {
    }

    export class Targets extends EventProvider {


        /**
            * Creates a target by using the given name and options. If there's already a target with the same name exists, the existing target is kept from being overwritten and an error log will be written to the development console.
        */
        public addTarget(sName: string, oTarget: {}): this;

        /**
            * Attach event-handler `fnFunction` to the 'display' event of this `sap.ui.core.routing.Targets`.
         * 
        */
        attachDisplay<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The view that got displayed. */
            view: {}, /* * The control that now contains the view in the controlAggregation */
            control: {}, /* * The options object passed to the constructor {@link sap.ui.core.routing.Targets#constructor} */
            config: {}, /* * The name of the target firing the event */
            name: {}, /* * The data passed into the {@link sap.ui.core.routing.Targets#display} function */
            data: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'display' event of this `sap.ui.core.routing.Targets`.
         * 
        */
        attachDisplay<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The view that got displayed. */
            view: {}, /* * The control that now contains the view in the controlAggregation */
            control: {}, /* * The options object passed to the constructor {@link sap.ui.core.routing.Targets#constructor} */
            config: {}, /* * The name of the target firing the event */
            name: {}, /* * The data passed into the {@link sap.ui.core.routing.Targets#display} function */
            data: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'titleChanged' event of this `sap.ui.core.routing.Targets`.
         * 
        */
        attachTitleChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current displayed title */
            title: string, /* * The name of the displayed target */
            name: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'titleChanged' event of this `sap.ui.core.routing.Targets`.
         * 
        */
        attachTitleChanged<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current displayed title */
            title: string, /* * The name of the displayed target */
            name: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys the targets instance and all created targets. Does not destroy the views instance passed to the constructor. It has to be destroyed separately.
        */
        public destroy(): this;

        /**
            * Destructor method for objects
        */
        public destroy(): any;

        /**
            * Detach event-handler `fnFunction` from the 'display' event of this `sap.ui.core.routing.Targets`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachDisplay(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the 'titleChanged' event of this `sap.ui.core.routing.Targets`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachTitleChanged(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a view and puts it in an aggregation of the specified control.
        */
        public display(vTargets: string | {}, oData?: {}, sTitleTarget?: string): this | any;

        /**
            * Creates a new subclass of class sap.ui.core.routing.Targets with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fire event created to attached listeners.
        */
        public fireDisplay(mArguments?: {}): this;

        /**
            * Returns a metadata object for class sap.ui.core.routing.Targets.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a target by its name (if you pass myTarget: { view: "myView" }) in the config myTarget is the name.
        */
        public getTarget(vName: string | {}): Target | any | {};

        /**
            * Returns the views instance passed to the constructor
        */
        public getViews(): Views;

    }
}