declare module 'sap/ui/core/util/ExportCell' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IExportCellSettings extends IElementSettings {
        content?: string;
    }

    /**
    
    */
    export class ExportCell extends Element {

        /**
            * Constructor for a new ExportCell.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IExportCellSettings);


        /**
            * Creates a new subclass of class sap.ui.core.util.ExportCell with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getContent content}.
         * 
         * Cell content.
        */
        public getContent(): string;

        /**
            * Returns a metadata object for class sap.ui.core.util.ExportCell.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Sets a new value for property {@link #getContent content}.
         * 
         * Cell content.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContent(sContent: string): this;

    }
}