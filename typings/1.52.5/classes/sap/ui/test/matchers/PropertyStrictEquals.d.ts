declare module 'sap/ui/test/matchers/PropertyStrictEquals' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control } from 'sap/ui/core/Control';
    import { Matcher, IMatcherSettings } from 'sap/ui/test/matchers/Matcher';

    export interface IPropertyStrictEqualsSettings extends IMatcherSettings {
        name?: string;
        value?: any;
    }

    /**
    
    */
    export class PropertyStrictEquals extends Matcher {


        /**
            * Creates a new subclass of class sap.ui.test.matchers.PropertyStrictEquals with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.test.matchers.Matcher.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.test.matchers.PropertyStrictEquals.
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
         * The Name of the property that is used for matching.
        */
        public getName(): string;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * The value of the property that is used for matching.
        */
        public getValue(): any;

        /**
            * Checks if the control has a property that matches the value
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
         * The Name of the property that is used for matching.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setName(sName: string): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * The value of the property that is used for matching.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValue(oValue: any): this;

    }
}