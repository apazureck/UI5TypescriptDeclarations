declare module 'sap/ui/model/odata/type/DateTime' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { DateTimeBase, IDateTimeBaseSettings } from 'sap/ui/model/odata/type/DateTimeBase';

    export interface IDateTimeSettings extends IDateTimeBaseSettings {
    }

    /**
    
    */
    export class DateTime extends DateTimeBase {

        /**
            * Constructor for a primitive type `Edm.DateTime`.
        */
        public constructor(oFormatOptions: {}, oConstraints: { nullable?: boolean | string, displayFormat?: string, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.type.DateTime with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.odata.type.DateTimeBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.odata.type.DateTime.
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

    }
}