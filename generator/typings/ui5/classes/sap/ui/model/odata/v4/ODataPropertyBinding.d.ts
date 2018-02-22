declare module 'sap/ui/model/odata/v4/ODataPropertyBinding' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Type } from 'sap/ui/model/Type';
    import { ODataModel } from 'sap/ui/model/odata/v4/ODataModel';
    import { Context } from 'sap/ui/model/Context';
    import { PropertyBinding, IPropertyBindingSettings } from 'sap/ui/model/PropertyBinding';

    export interface IODataPropertyBindingSettings extends IPropertyBindingSettings {
    }

    /**
    
    */
    export class ODataPropertyBinding extends PropertyBinding {

        /**
            * Do ** NOT ** call this private constructor, but rather use {@link sap.ui.model.odata.v4.ODataModel#bindProperty} instead!
        */
        public constructor(oModel: ODataModel, sPath: string, oContext: Context, mParameters: {});


        /**
            * Destroys the object. The object must not be used anymore after this function was called.
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.model.odata.v4.ODataPropertyBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.PropertyBinding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.odata.v4.ODataPropertyBinding.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the current value of the bound target
        */
        public getValue(): {};

        /**
            * Returns the current value.
        */
        public getValue(): any | {};

        /**
            * Determines which type of value list exists for this property.
        */
        public getValueListType(): sap.ui.model.odata.v4.ValueListType;

        /**
            * Returns `true` if this binding or its dependent bindings have pending changes, meaning updates that have not yet been successfully sent to the server.
        */
        public hasPendingChanges(): boolean;

        /**
            * Method not supported
        */
        public isInitial(): any | boolean;

        /**
            * Returns whether the binding is initial, which means it did not get an initial value yet
        */
        public isInitial(): boolean;

        /**
            * Refreshes the binding, check whether the model data has been changed and fire change event if this is the case. For server side models this should refetch the data from the server. To update a control, even if no data has been changed, e.g. to reset a control after failed validation, please use the parameter bForceUpdate.
        */
        public refresh(bForceUpdate: boolean): any;

        /**
            * Refreshes the binding. Prompts the model to retrieve data from the server using the given group ID and notifies the control that new data is available.
         * 
         * Refresh is supported for bindings which are not relative to a {@link sap.ui.model.odata.v4.Context}.
         * 
         * Note: When calling {@link #refresh} multiple times, the result of the request triggered by the last call determines the binding's data; it is ** independent ** of the order of calls to {@link sap.ui.model.odata.v4.ODataModel#submitBatch} with the given group ID.
         * 
         * If there are pending changes, an error is thrown. Use {@link #hasPendingChanges} to check if there are pending changes. If there are changes, call {@link sap.ui.model.odata.v4.ODataModel#submitBatch} to submit the changes or {@link sap.ui.model.odata.v4.ODataModel#resetChanges} to reset the changes before calling {@link #refresh}.
        */
        public refresh(sGroupId?: string): any;

        /**
            * Requests information to retrieve a value list for this property.
        */
        public requestValueListInfo(): any;

        /**
            * Determines which type of value list exists for this property.
        */
        public requestValueListType(): any;

        /**
            * Resets all pending changes of this binding, see {@link #hasPendingChanges}. Resets also invalid user input.
        */
        public resetChanges(): any;

        /**
            * Method not supported
        */
        public resume(): any;

        /**
            * Sets the optional type and internal type for this binding; used for formatting and parsing. Fires a change event if the type has changed.
        */
        public setType(oType: Type, sInternalType: string): any;

        /**
            * Sets the new current value and updates the cache.
        */
        public setValue(vValue: any, sGroupId?: string): any;

        /**
            * Method not supported
        */
        public suspend(): any;

        /**
            * Returns a string representation of this object including the binding path. If the binding is relative, the parent path is also given, separated by a '|'.
        */
        public toString(): string;

    }
}