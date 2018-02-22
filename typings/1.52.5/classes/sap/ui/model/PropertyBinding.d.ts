declare module 'sap/ui/model/PropertyBinding' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Type } from 'sap/ui/model/Type';
    import { Model } from 'sap/ui/model/Model';
    import { Context } from 'sap/ui/model/Context';
    import { Binding, IBindingSettings } from 'sap/ui/model/Binding';

    export interface IPropertyBindingSettings extends IBindingSettings {
    }

    /**
    
    */
    export class PropertyBinding extends Binding {

        /**
            * Constructor for PropertyBinding
        */
        public constructor(oModel: Model, sPath: string, oContext: Context, mParameters: {});


        /**
            * Creates a new subclass of class sap.ui.model.PropertyBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Binding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the binding mode
        */
        public getBindingMode(): sap.ui.model.BindingMode;

        /**
            * Returns the current external value of the bound target which is formatted via a type or formatter function.
        */
        public getExternalValue(): {};

        /**
            * Returns the formatter function
        */
        public getFormatter(): (() => any);

        /**
            * Returns the related JavaScript primitive value of the bound target which is parsed by the {@link sap.ui.model.SimpleType#getModelFormat model format} of this binding's type. If this binding doesn't have a type, the original value which is stored in the model is returned.
         * 
         * This method will be used when it's included in a {@link sap.ui.model.CompositeBinding CompositeBinding} and the CompositeBinding needs to have the related JavaScript primitive values for its type or formatter.
        */
        public getInternalValue(): {};

        /**
            * Returns a metadata object for class sap.ui.model.PropertyBinding.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the type if any for the binding.
        */
        public getType(): Type;

        /**
            * Returns the current value of the bound target
        */
        public getValue(): {};

        /**
            * Resumes the binding update. Change events will be fired again.
         * 
         * When the binding is resumed and the control value was changed in the meantime, the control value will be set to the current value from the model and a change event will be fired.
        */
        public resume(): any;

        /**
            * Sets the binding mode
        */
        protected setBindingMode(sBindingMode: sap.ui.model.BindingMode): any;

        /**
            * Sets the value for this binding. The value is parsed and validated against its type and then set to the binding. A model implementation should check if the current default binding mode permits setting the binding value and if so set the new value also in the model.
        */
        public setExternalValue(oValue: {}): any;

        /**
            * Sets the optional formatter function for the binding.
        */
        public setFormatter(fnFormatter: (() => any)): any;

        /**
            * Sets the value for this binding with the related JavaScript primitive type. The value is formatted with the {@link sap.ui.model.SimpleType#getModelFormat model format} and validated against its type and then set to the model.
        */
        public setInternalValue(oValue: {}): any;

        /**
            * Sets the optional type and internal type for the binding. The type and internal type are used to do the parsing/formatting correctly. The internal type is the property type of the element which the value is formatted to.
        */
        public setType(oType: Type, sInternalType: string): any;

        /**
            * Sets the value for this binding. A model implementation should check if the current default binding mode permits setting the binding value and if so set the new value also in the model.
        */
        public setValue(oValue: {}): any;

    }
}