declare module 'sap/ui/test/matchers/BindingPath' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control } from 'sap/ui/core/Control';
    import { Matcher, IMatcherSettings } from 'sap/ui/test/matchers/Matcher';

    export interface IBindingPathSettings extends IMatcherSettings {
        path?: string;
        modelName?: string;
    }

    /**
    
    */
    export class BindingPath extends Matcher {


        /**
            * Creates a new subclass of class sap.ui.test.matchers.BindingPath with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.test.matchers.Matcher.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.test.matchers.BindingPath.
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
            * Gets current value of property {@link #getModelName modelName}.
         * 
         * The name of the binding model that is used for matching.
        */
        public getModelName(): string;

        /**
            * Gets current value of property {@link #getPath path}.
         * 
         * The value of the binding path that is used for matching.
        */
        public getPath(): string;

        /**
            * Checks if the control has a binding context that matches the path
        */
        protected isMatching(oControl: Control): boolean;

        /**
            * Checks if the matcher is matching - will get an instance of sap.ui.core.Control as parameter.
         * 
         * Should be overwritten by subclasses
        */
        protected isMatching(oControl: Control): boolean;

        /**
            * Sets a new value for property {@link #getModelName modelName}.
         * 
         * The name of the binding model that is used for matching.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setModelName(sModelName: string): this;

        /**
            * Sets a new value for property {@link #getPath path}.
         * 
         * The value of the binding path that is used for matching.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPath(sPath: string): this;

    }
}