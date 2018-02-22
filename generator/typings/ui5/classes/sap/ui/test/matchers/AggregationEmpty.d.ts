declare module 'sap/ui/test/matchers/AggregationEmpty' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control } from 'sap/ui/core/Control';
    import { Matcher, IMatcherSettings } from 'sap/ui/test/matchers/Matcher';

    export interface IAggregationEmptySettings extends IMatcherSettings {
        name?: string;
    }

    /**
    
    */
    export class AggregationEmpty extends Matcher {


        /**
            * Creates a new subclass of class sap.ui.test.matchers.AggregationEmpty with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.test.matchers.Matcher.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.test.matchers.AggregationEmpty.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Gets current value of property {@link #getName name}.
         * 
         * The name of the aggregation that is used for matching.
        */
        public getName(): string;

        /**
            * Checks if the control has an empty aggregation.
        */
        protected isMatching(oControl: Control): boolean;

        /**
            * Checks if the matcher is matching - will get an instance of sap.ui.core.Control as parameter.
         * 
         * Should be overwritten by subclasses
        */
        protected isMatching(oControl: Control): boolean;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * The name of the aggregation that is used for matching.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setName(sName: string): this;

    }
}