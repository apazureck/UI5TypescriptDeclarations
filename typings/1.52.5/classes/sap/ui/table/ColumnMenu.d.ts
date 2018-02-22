declare module 'sap/ui/table/ColumnMenu' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Menu, IMenuSettings } from 'sap/ui/unified/Menu';

    export interface IColumnMenuSettings extends IMenuSettings {
    }

    /**
    
    */
    export class ColumnMenu extends Menu {

        /**
            * Constructor for a new ColumnMenu.
         * 
         * ** Note: ** Applications must not use or change the default `sap.ui.table.ColumnMenu` of a column in any way or create own instances of `sap.ui.table.ColumnMenu`. To add a custom menu to a column, use the aggregation `menu` with a new instance of `sap.ui.unified.Menu`.
        */
        public constructor(sId: string, mSettings: IColumnMenuSettings);


        /**
            * Creates a new subclass of class sap.ui.table.ColumnMenu with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.Menu.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.table.ColumnMenu.
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

    }
}