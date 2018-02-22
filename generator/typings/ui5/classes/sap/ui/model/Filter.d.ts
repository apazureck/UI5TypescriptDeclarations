declare module 'sap/ui/model/Filter' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IFilterSettings extends IObjectSettings {
    }

    /**
    
    */
    export class Filter extends Object {

        /**
            * Constructor for Filter.
         * 
         * You either pass a single object literal with the filter parameters or use the individual constructor arguments. No matter which variant is used, only certain combinations of parameters are supported (the following list uses the names from the object literal):  * A `path`, `operator` and one or two values (`value1`, `value2`), depending on the operator * A `path` and a custom filter function `test` * An array of other filters named `filters` and a Boolean flag `and` that specifies whether to combine the filters with an AND (`true`) or an OR (`false`) operator.  An error will be logged to the console if an invalid combination of parameters is provided. Please note that a model implementation may not support a custom filter function, e.g. if the model does not perform client side filtering. It also depends on the model implementation if the filtering is case sensitive or not. See particular model documentation for details.
         * 
         * The filter operators `Any` and `All` are only supported in V4 OData models. When creating a filter instance with these filter operators, the argument `variable` only accepts a string identifier and `condition` needs to be another filter instance.
        */
        public constructor(vFilterInfo: { path: string, test: (() => any), comparator: (() => any), operator: sap.ui.model.FilterOperator, value1: {}, value2?: {}, variable?: string, condition?: Filter, filters: {}, and: boolean, }, vOperator: sap.ui.model.FilterOperator | (() => any) | boolean, vValue1: any, vValue2: any);


        /**
            * Compares two values
         * 
         * This is the default comparator function used for clientside filtering, if no custom comparator is given in the constructor. It does compare just by using equal/less than/greater than with automatic type casting, except for null values, which are neither less or greater, and string values where localeCompare is used.
         * 
         * The comparator method returns -1, 0, 1 for comparable values and NaN for non-comparable values.
        */
        public static defaultComparator(a: any, b: any): number;

        /**
            * Creates a new subclass of class sap.ui.model.Filter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.Filter.
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