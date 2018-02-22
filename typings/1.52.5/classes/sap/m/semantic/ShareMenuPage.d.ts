declare module 'sap/m/semantic/ShareMenuPage' {
    import { Button } from 'sap/m/Button';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { SemanticPage, ISemanticPageSettings } from 'sap/m/semantic/SemanticPage';

    export interface IShareMenuPageSettings extends ISemanticPageSettings {
    }

    /**
    
    */
    export class ShareMenuPage extends SemanticPage {

        /**
            * Constructor for a new ShareMenuPage
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IShareMenuPageSettings);


        /**
            * Adds some customShareMenuContent to the aggregation {@link #getCustomShareMenuContent customShareMenuContent}.
        */
        public addCustomShareMenuContent(oCustomShareMenuContent: Button): this;

        /**
            * Destroys all the customShareMenuContent in the aggregation {@link #getCustomShareMenuContent customShareMenuContent}.
        */
        public destroyCustomShareMenuContent(): this;

        /**
            * Creates a new subclass of class sap.m.semantic.ShareMenuPage with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.semantic.SemanticPage.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getCustomShareMenuContent customShareMenuContent}.
         * 
         * Custom share menu buttons
        */
        public getCustomShareMenuContent(): {};

        /**
            * Returns a metadata object for class sap.m.semantic.ShareMenuPage.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Checks for the provided `sap.m.Button` in the aggregation {@link #getCustomShareMenuContent customShareMenuContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfCustomShareMenuContent(oCustomShareMenuContent: Button): number;

        /**
            * Inserts a customShareMenuContent into the aggregation {@link #getCustomShareMenuContent customShareMenuContent}.
        */
        public insertCustomShareMenuContent(oCustomShareMenuContent: Button, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getCustomShareMenuContent customShareMenuContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllCustomShareMenuContent(): {};

        /**
            * Removes a customShareMenuContent from the aggregation {@link #getCustomShareMenuContent customShareMenuContent}.
        */
        public removeCustomShareMenuContent(vCustomShareMenuContent: number | string | Button): Button;

    }
}