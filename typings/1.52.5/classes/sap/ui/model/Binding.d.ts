declare module 'sap/ui/model/Binding' {
    import { Event } from 'sap/ui/base/Event';
    import { DataState } from 'sap/ui/model/DataState';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Model } from 'sap/ui/model/Model';
    import { Context } from 'sap/ui/model/Context';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface IBindingSettings extends IEventProviderSettings {
    }

    /**
    
    */
    export class Binding extends EventProvider {

        /**
            * Constructor for Binding class.
        */
        public constructor(oModel: Model, sPath: string, oContext: Context, mParameters: {});


        /**
            * Attach event-handler `fnFunction` to the 'AggregatedDataStateChange' event of this `sap.ui.model.Binding`.
         * 
        */
        attachAggregatedDataStateChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The DataState object of the binding. */
            dataState?: DataState,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'change' event of this `sap.ui.model.Model`.
         * 
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A string stating the reason for the data change. Can be any string and new values can be added in the future. */
            reason?: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'dataReceived' event of this `sap.ui.model.Binding`.
         * 
        */
        attachDataReceived<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The data received. In error cases it will be undefined. */
            data?: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'dataRequested' event of this `sap.ui.model.Binding`.
         * 
        */
        attachDataRequested<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'DataStateChange' event of this `sap.ui.model.Binding`.
         * 
        */
        attachDataStateChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The DataState object of the binding. */
            dataState?: DataState,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach multiple events.
        */
        protected attachEvents(oEvents: { [eventName: string]: () => any }): any;

        /**
            * Attach event-handler `fnFunction` to the 'refresh' event of this `sap.ui.model.Binding`.
         * 
        */
        protected attachRefresh(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Removes all control messages for this binding from the MessageManager in addition to the standard clean-up tasks.
        */
        public destroy(): any;

        /**
            * Detach event-handler `fnFunction` from the 'AggregatedDataStateChange' event of this `sap.ui.model.Binding`.
         * 
        */
        protected detachAggregatedDataStateChange(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Detach event-handler `fnFunction` from the 'change' event of this `sap.ui.model.Model`.
         * 
        */
        public detachChange(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Detach event-handler `fnFunction` from the 'dataReceived' event of this `sap.ui.model.Binding`.
         * 
        */
        public detachDataReceived(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Detach event-handler `fnFunction` from the 'dataRequested' event of this `sap.ui.model.Binding`.
         * 
        */
        public detachDataRequested(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Detach event-handler `fnFunction` from the 'DataStateChange' event of this `sap.ui.model.Binding`.
         * 
        */
        protected detachDataStateChange(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Detach multiple events.
        */
        protected detachEvents(oEvents: { [eventName: string]: () => any }): any;

        /**
            * Detach event-handler `fnFunction` from the 'refresh' event of this `sap.ui.model.Binding`.
         * 
        */
        protected detachRefresh(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Creates a new subclass of class sap.ui.model.Binding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fire event dataReceived to attached listeners. This event may also be fired when an error occured.
        */
        protected fireDataReceived(mArguments: { data?: {}, }): any;

        /**
            * Fire event dataRequested to attached listeners.
        */
        protected fireDataRequested(mArguments: any): any;

        /**
            * Returns a metadata object for class sap.ui.model.Binding.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Initialize the binding. The message should be called when creating a binding. The default implementation calls checkUpdate(true).
        */
        protected initialize(): any;

        /**
            * Returns whether the binding is initial, which means it did not get an initial value yet
        */
        public isInitial(): boolean;

        /**
            * Returns whether the binding is relative, which means it did not start with a /
        */
        public isRelative(): boolean;

        /**
            * Returns true if the binding is suspended or false if not.
        */
        public isSuspended(): boolean;

        /**
            * Refreshes the binding, check whether the model data has been changed and fire change event if this is the case. For server side models this should refetch the data from the server. To update a control, even if no data has been changed, e.g. to reset a control after failed validation, please use the parameter bForceUpdate.
        */
        public refresh(bForceUpdate: boolean): any;

        /**
            * Resumes the binding update. Change events will be fired again.
         * 
         * When the binding is resumed, a change event will be fired immediately, if the data has changed while the binding was suspended. For serverside models, a request to the server will be triggered, if a refresh was requested while the binding was suspended.
        */
        public resume(): any;

        /**
            * Suspends the binding update. No change events will be fired.
         * 
         * A refresh call with bForceUpdate set to true will also update the binding and fire a change in suspended mode. Special operations on bindings, which require updates to work properly (as paging or filtering in list bindings) will also update and cause a change event although the binding is suspended.
        */
        public suspend(): any;

        /**
            * Determines if the binding should be updated by comparing the current model against a specified model.
        */
        protected updateRequired(oModel: {}): boolean;

    }
}