declare module 'sap/ui/model/Type' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface ITypeSettings extends IObjectSettings {
    }

    /**
    
    */
    export class Type extends Object {


        /**
            * Creates a new subclass of class sap.ui.model.Type with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.Type.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the name of this type.
        */
        public getName(): string;

        /**
            * Returns a simple string representation of this type.
         * 
         * Mainly useful for tracing purposes.
        */
        public toString(): string;

    }
}