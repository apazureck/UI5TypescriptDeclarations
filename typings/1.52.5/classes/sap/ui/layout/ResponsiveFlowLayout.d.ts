declare module 'sap/ui/layout/ResponsiveFlowLayout' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IResponsiveFlowLayoutSettings extends IControlSettings {
        responsive?: boolean;
    }

    /**
    
    */
    export class ResponsiveFlowLayout extends Control {

        /**
            * Constructor for a new ResponsiveFlowLayout.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IResponsiveFlowLayoutSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds content. This function needs to be overridden to prevent any rendering while some content is still being added.
        */
        public addContent(oContent: Control): any;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.ResponsiveFlowLayout with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Added content that should be positioned. Every content item should have a ResponsiveFlowLayoutData attached, or otherwise, the default values are used.
        */
        public getContent(): {};

        /**
            * Returns a metadata object for class sap.ui.layout.ResponsiveFlowLayout.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getResponsive responsive}.
         * 
         * If set to false, all added controls will keep their width, or otherwise, the controls will be stretched to the possible width of a row.
         * 
         * Default value is `true`.
        */
        public getResponsive(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Inserts content. This function needs to be overridden to prevent any rendering while some content is still being added.
        */
        public insertContent(oContent: Control, iIndex: number): any;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes content. This function needs to be overridden to prevent any rendering while some content is still being added.
        */
        public removeContent(oContent: number | string | Control): any;

        /**
            * Sets a new value for property {@link #getResponsive responsive}.
         * 
         * If set to false, all added controls will keep their width, or otherwise, the controls will be stretched to the possible width of a row.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setResponsive(bResponsive: boolean): this;

    }
}