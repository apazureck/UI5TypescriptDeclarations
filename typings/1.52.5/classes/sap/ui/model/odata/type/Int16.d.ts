declare module 'sap/ui/model/odata/type/Int16' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Int, IIntSettings } from 'sap/ui/model/odata/type/Int';

    export interface IInt16Settings extends IIntSettings {
    }

    /**
    
    */
    export class Int16 extends Int {

        /**
            * Constructor for a primitive type `Edm.Int16`.
        */
        public constructor(oFormatOptions: {}, oConstraints: { nullable?: boolean | string, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.Int16 with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.odata.type.Int.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.Int16.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the type's name.
        */
        public getName(): string;

        /**
            * Returns the type's supported range as object with properties `minimum` and `maximum`.
        */
        protected getRange(): {};

    }
}