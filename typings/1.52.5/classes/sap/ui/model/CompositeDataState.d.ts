declare module 'sap/ui/model/CompositeDataState' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { DataState, IDataStateSettings } from 'sap/ui/model/DataState';

    export interface ICompositeDataStateSettings extends IDataStateSettings {
    }

    /**
    
    */
    export class CompositeDataState extends DataState {


        /**
            * Returns or sets whether the data state is changed. As long as changed was not set to false the data state is dirty and the corresponding binding will fire data state change events.
        */
        protected changed(bNewState?: boolean): boolean;

        /**
            * Creates a new subclass of class sap.ui.model.CompositeDataState with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.DataState.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the changes of the data state in a map that the control can use in the `refreshDataState` method. The changed property's name is the key in the map. Each element in the map contains an object of below structure. `{
         *        oldValue : The old value of the property,
         *        value    : The new value of the property
         *    }` The map only contains the changed properties.
        */
        public getChanges(): any;

        /**
            * Sets an array of control state messages.
        */
        public getControlMessages(): DataState | {};

        /**
            * Returns the array of state messages of the control or undefined.
        */
        public getControlMessages(): {};

        /**
            * Returns an array of the properties set on the inner datastates
        */
        protected getInternalProperty(): any;

        /**
            * Returns the dirty value of a binding that was rejected by a type validation. This value was of an incorrect type and could not be applied to the model. If the value was not rejected it will return null. In this case the current model value can be accessed using the `getValue` method.
        */
        public getInvalidValue(): any;

        /**
            * Returns the array of all state messages or null. This combines the model and control messages.
        */
        public getMessages(): {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.model.CompositeDataState.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the array of state messages of the model or undefined
        */
        public getModelMessages(): {};

        /**
            * Returns whether the data state is dirty in the UI control. A data state is dirty in the UI control if the entered value did not yet pass the type validation.
        */
        public isControlDirty(): boolean;

        /**
            * Returns whether the data state is dirty. A data state is dirty if the value was changed but is not yet confirmed by a server or the entered value did not yet pass the type validation.
        */
        public isDirty(): boolean;

        /**
            * Returns whether the data state is in laundering. If data is send to the server the data state becomes laundering until the data was accepted or rejected.
        */
        public isLaundering(): boolean;

    }
}