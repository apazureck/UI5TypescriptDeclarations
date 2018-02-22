declare module 'sap/ui/model/type/DateTime' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Date, IDateSettings } from 'sap/ui/model/type/Date';

    export interface IDateTimeSettings extends IDateSettings {
    }

    /**
    
    */
    export class DateTime extends Date {

        /**
            * Constructor for a DateTime type.
        */
        public constructor(oFormatOptions: { source?: {}, }, oConstraints: {});


        /**
            * Creates a new subclass of class sap.ui.model.type.DateTime with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.type.Date.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.type.DateTime.
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