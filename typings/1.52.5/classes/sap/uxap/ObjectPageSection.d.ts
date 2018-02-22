declare module 'sap/uxap/ObjectPageSection' {
    import { ObjectPageSubSection } from 'sap/uxap/ObjectPageSubSection';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ObjectPageSectionBase, IObjectPageSectionBaseSettings } from 'sap/uxap/ObjectPageSectionBase';

    export interface IObjectPageSectionSettings extends IObjectPageSectionBaseSettings {
        showTitle?: boolean;
        titleUppercase?: boolean;
    }

    /**
    
    */
    export class ObjectPageSection extends ObjectPageSectionBase {

        /**
            * Constructor for a new ObjectPageSection.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IObjectPageSectionSettings);


        /**
            * Adds some subSection to the aggregation {@link #getSubSections subSections}.
        */
        public addSubSection(oSubSection: ObjectPageSubSection): this;

        /**
            * Destroys all the subSections in the aggregation {@link #getSubSections subSections}.
        */
        public destroySubSections(): this;

        /**
            * Creates a new subclass of class sap.uxap.ObjectPageSection with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.uxap.ObjectPageSection.
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
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * ID of the element which is the current target of the association {@link #getSelectedSubSection selectedSubSection}, or `null`.
        */
        public getSelectedSubSection(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getShowTitle showTitle}.
         * 
         * Determines whether to display the Section title or not.
         * 
         * Default value is `true`.
        */
        public getShowTitle(): boolean;

        /**
            * Gets content of aggregation {@link #getSubSections subSections}.
         * 
         * The list of Subsections.
        */
        public getSubSections(): {};

        /**
            * Gets current value of property {@link #getTitleUppercase titleUppercase}.
         * 
         * Determines whether the Section title is displayed in upper case.
         * 
         * Default value is `true`.
        */
        public getTitleUppercase(): boolean;

        /**
            * Checks for the provided `sap.uxap.ObjectPageSubSection` in the aggregation {@link #getSubSections subSections}. and returns its index if found or -1 otherwise.
        */
        public indexOfSubSection(oSubSection: ObjectPageSubSection): number;

        /**
            * Inserts a subSection into the aggregation {@link #getSubSections subSections}.
        */
        public insertSubSection(oSubSection: ObjectPageSubSection, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getSubSections subSections}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSubSections(): {};

        /**
            * Removes a subSection from the aggregation {@link #getSubSections subSections}.
        */
        public removeSubSection(vSubSection: number | string | ObjectPageSubSection): ObjectPageSubSection;

        /**
            * Sets the associated {@link #getSelectedSubSection selectedSubSection}.
        */
        public setSelectedSubSection(oSelectedSubSection: sap.ui.core.ID | ObjectPageSubSection): this;

        /**
            * Sets a new value for property {@link #getShowTitle showTitle}.
         * 
         * Determines whether to display the Section title or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowTitle(bShowTitle: boolean): this;

        /**
            * Sets a new value for property {@link #getTitleUppercase titleUppercase}.
         * 
         * Determines whether the Section title is displayed in upper case.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setTitleUppercase(bTitleUppercase: boolean): this;

    }
}