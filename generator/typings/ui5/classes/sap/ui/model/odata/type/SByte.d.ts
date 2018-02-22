declare module 'sap/ui/model/odata/type/SByte' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Int, IIntSettings } from 'sap/ui/model/odata/type/Int';

    export interface ISByteSettings extends IIntSettings {
    }

    /**
    
    */
    export class SByte extends Int {

        /**
            * Constructor for a primitive type `Edm.SByte`.
        */
        public constructor(oFormatOptions: {}, oConstraints: { nullable?: boolean | string, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.SByte with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.odata.type.Int.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.SByte.
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