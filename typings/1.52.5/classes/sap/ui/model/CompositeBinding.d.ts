declare module 'sap/ui/model/CompositeBinding' {
    import { DataState } from 'sap/ui/model/DataState';

    import { Event } from 'sap/ui/base/Event';

    import { Metadata } from 'sap/ui/base/Metadata';
    import { CompositeType } from 'sap/ui/model/CompositeType';
    import { Type } from 'sap/ui/model/Type';
    import { PropertyBinding, IPropertyBindingSettings } from 'sap/ui/model/PropertyBinding';

    export interface ICompositeBindingSettings extends IPropertyBindingSettings {
    }

    /**
    
    */
    export class CompositeBinding extends PropertyBinding {


        /**
            * Attach event-handler `fnFunction` to the 'AggregatedDataStateChange' event of this `sap.ui.model.CompositeBinding`. The AggregatedDataStateChange event is fired asynchronously, meaning that the datastate object given as parameter of the event contains all changes that were applied to the datastate in the running thread.
        */
        attachAggregatedDataStateChange(fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attach event-handler `fnFunction` to the 'AggregatedDataStateChange' event of this `sap.ui.model.Binding`.
         * 
        */
        attachAggregatedDataStateChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The DataState object of the binding. */
            dataState?: DataState,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the '_change' event of this `sap.ui.model.CompositeBinding`.
         * 
        */
        attachChange(fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attach event-handler `fnFunction` to the 'change' event of this `sap.ui.model.Model`.
         * 
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A string stating the reason for the data change. Can be any string and new values can be added in the future. */
            reason?: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'DataStateChange' event of this `sap.ui.model.Binding`.
         * 
        */
        attachDataStateChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The DataState object of the binding. */
            dataState?: DataState,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'DataStateChange' event of this `sap.ui.model.CompositeBinding`.
         * 
        */
        attachDataStateChange(fnFunction: (() => any), oListener?: {}): this;

        /**
            * Detach event-handler `fnFunction` from the 'AggregatedDataStateChange' event of this `sap.ui.model.CompositeBinding`.
         * 
        */
        protected detachAggregatedDataStateChange(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Detach event-handler `fnFunction` from the '_change' event of this `sap.ui.model.CompositeBinding`.
         * 
        */
        public detachChange(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Detach event-handler `fnFunction` from the 'change' event of this `sap.ui.model.Model`.
         * 
        */
        public detachChange(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Detach event-handler `fnFunction` from the 'DataStateChange' event of this `sap.ui.model.CompositeBinding`.
         * 
        */
        protected detachDataStateChange(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Creates a new subclass of class sap.ui.model.CompositeBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.PropertyBinding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the property bindings contained in this composite binding.
        */
        public getBindings(): any[];

        /**
            * Returns the current external value of the bound target which is formatted via a type or formatter function.
        */
        public getExternalValue(): {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.model.CompositeBinding.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the raw values of the property bindings in an array.
        */
        public getValue(): {};

        /**
            * Initialize the binding. The message should be called when creating a binding. The default implementation calls checkUpdate(true). Prevent checkUpdate to be triggered while initializing nestend bindings, it is sufficient to call checkUpdate when all nested bindings are initialized.
        */
        protected initialize(): any;

        /**
            * Suspends the binding update. No change events will be fired.
         * 
         * A refresh call with bForceUpdate set to true will also update the binding and fire a change in suspended mode. Special operations on bindings, which require updates to work properly (as paging or filtering in list bindings) will also update and cause a change event although the binding is suspended.
        */
        public resume(): any;

        /**
            * Sets the external value of a composite binding. If no CompositeType is assigned to the binding, the default implementation assumes a space separated list of values. This will cause the setValue to be called for each nested binding, except for undefined values in the array.
        */
        public setExternalValue(oValue: {}): any;

        /**
            * Sets the optional type and internal type for the binding. The type and internal type are used to do the parsing/formatting correctly. The internal type is the property type of the element which the value is formatted to.
        */
        public setType(oType: CompositeType, sInternalType: string): any;

        /**
            * Sets the optional type and internal type for the binding. The type and internal type are used to do the parsing/formatting correctly. The internal type is the property type of the element which the value is formatted to.
        */
        public setType(oType: Type, sInternalType: string): any;

        /**
            * Sets the values. This will cause the setValue to be called for each nested binding, except for undefined values in the array.
        */
        public setValue(aValues: any[]): any;

        /**
            * Sets the value for this binding. A model implementation should check if the current default binding mode permits setting the binding value and if so set the new value also in the model.
        */
        public setValue(oValue: {}): any;

        /**
            * Suspends the binding update. No change events will be fired.
         * 
         * A refresh call with bForceUpdate set to true will also update the binding and fire a change in suspended mode. Special operations on bindings, which require updates to work properly (as paging or filtering in list bindings) will also update and cause a change event although the binding is suspended.
        */
        public suspend(): any;

        /**
            * Determines if the property bindings in the composite binding should be updated by calling updateRequired on all property bindings with the specified model.
        */
        protected updateRequired(oModel: {}): boolean;

    }
}