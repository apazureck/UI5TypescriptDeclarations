declare module 'sap/tnt/ToolHeader' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { OverflowToolbar, IOverflowToolbarSettings } from 'sap/m/OverflowToolbar';

    export interface IToolHeaderSettings extends IOverflowToolbarSettings {
    }

    /**
    
    */
    export class ToolHeader extends OverflowToolbar {

        /**
            * Constructor for a new ToolHeader.
        */
        public constructor(sId: string, mSettings: IToolHeaderSettings);


        /**
            * Creates a new subclass of class sap.tnt.ToolHeader with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.OverflowToolbar.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.tnt.ToolHeader.
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