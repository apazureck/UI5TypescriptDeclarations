declare module 'sap/ui/core/util/ExportColumn' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ExportCell } from 'sap/ui/core/util/ExportCell';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface IExportColumnSettings extends IManagedObjectSettings {
        name?: string;
    }

    /**
    
    */
    export class ExportColumn extends ManagedObject {

        /**
            * Constructor for a new ExportCell.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IExportColumnSettings);


        /**
            * Destroys the template in the aggregation {@link #getTemplate template}.
        */
        public destroyTemplate(): this;

        /**
            * Creates a new subclass of class sap.ui.core.util.ExportColumn with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.util.ExportColumn.
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
         * Column name.
        */
        public getName(): string;

        /**
            * Gets content of aggregation {@link #getTemplate template}.
         * 
         * Cell template for column.
        */
        public getTemplate(): ExportCell;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * Column name.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setName(sName: string): this;

        /**
            * Sets the aggregated {@link #getTemplate template}.
        */
        public setTemplate(oTemplate: ExportCell): this;

    }
}