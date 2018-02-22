declare module 'sap/ui/commons/Title' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Title as TitleBase, ITitleSettings as ITitleBaseSettings } from 'sap/ui/core/Title';

    export interface ITitleSettings extends ITitleBaseSettings {
    }

    /**
    
    */
    export class Title extends TitleBase {

        /**
            * Constructor for a new Title.
        */
        public constructor(sId: string, mSettings: ITitleSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.Title with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Title.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Getter for property `level`. Defines the level of the title. If set to auto the level of the title is chosen by the control rendering the title.
         * 
         * Currently not all controls using the Title.control supporting this property.
         * 
         * Default value is `Auto`
        */
        public getLevel(): sap.ui.core.TitleLevel;

        /**
            * Returns a metadata object for class sap.ui.commons.Title.
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
            * Setter for property `level`.
         * 
         * Default value is `Auto`
        */
        public setLevel(oLevel: sap.ui.core.TitleLevel): this;

    }
}