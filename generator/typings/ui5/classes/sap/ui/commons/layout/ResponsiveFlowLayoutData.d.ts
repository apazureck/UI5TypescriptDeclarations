declare module 'sap/ui/commons/layout/ResponsiveFlowLayoutData' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ResponsiveFlowLayoutData as ResponsiveFlowLayoutDataBase, IResponsiveFlowLayoutDataSettings as IResponsiveFlowLayoutDataBaseSettings } from 'sap/ui/layout/ResponsiveFlowLayoutData';

    export interface IResponsiveFlowLayoutDataSettings extends IResponsiveFlowLayoutDataBaseSettings {
    }

    /**
    
    */
    export class ResponsiveFlowLayoutData extends ResponsiveFlowLayoutDataBase {

        /**
            * Constructor for a new layout/ResponsiveFlowLayoutData.
        */
        public constructor(sId: string, mSettings: IResponsiveFlowLayoutDataSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.layout.ResponsiveFlowLayoutData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.layout.ResponsiveFlowLayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Getter for property `margin`. This property prevents any margin of the element if set to false
         * 
         * Default value is `true`
        */
        public getMargin(): boolean;

        /**
            * Returns a metadata object for class sap.ui.commons.layout.ResponsiveFlowLayoutData.
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
            * Setter for property `margin`.
         * 
         * Default value is `true`
        */
        public setMargin(bMargin: boolean): this;

    }
}