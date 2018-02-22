declare module 'sap/m/semantic/GroupSelect' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { SemanticSelect, ISemanticSelectSettings } from 'sap/m/semantic/SemanticSelect';

    export interface IGroupSelectSettings extends ISemanticSelectSettings {
    }

    /**
    
    */
    export class GroupSelect extends SemanticSelect {

        /**
            * Constructor for a new GroupSelect.
        */
        public constructor(sId: string, mSettings: IGroupSelectSettings);


        /**
            * Creates a new subclass of class sap.m.semantic.GroupSelect with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.semantic.SemanticSelect.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.m.semantic.GroupSelect.
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