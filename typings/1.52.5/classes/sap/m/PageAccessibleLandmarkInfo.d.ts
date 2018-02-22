declare module 'sap/m/PageAccessibleLandmarkInfo' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IPageAccessibleLandmarkInfoSettings extends IElementSettings {
        rootRole?: sap.ui.core.AccessibleLandmarkRole;
        rootLabel?: string;
        contentRole?: sap.ui.core.AccessibleLandmarkRole;
        contentLabel?: string;
        headerRole?: sap.ui.core.AccessibleLandmarkRole;
        headerLabel?: string;
        subHeaderRole?: sap.ui.core.AccessibleLandmarkRole;
        subHeaderLabel?: string;
        footerRole?: sap.ui.core.AccessibleLandmarkRole;
        footerLabel?: string;
    }

    /**
    
    */
    export class PageAccessibleLandmarkInfo extends Element {

        /**
            * Constructor for a new `sap.m.PageAccessibleLandmarkInfo` element.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IPageAccessibleLandmarkInfoSettings);


        /**
            * Creates a new subclass of class sap.m.PageAccessibleLandmarkInfo with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getContentLabel contentLabel}.
         * 
         * Texts which describes the landmark of the content container of the corresponding `sap.m.Page` control.
         * 
         * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), a predefined text is used.
        */
        public getContentLabel(): string;

        /**
            * Gets current value of property {@link #getContentRole contentRole}.
         * 
         * Landmark role of the content container of the corresponding `sap.m.Page` control.
         * 
         * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
         * 
         * Default value is `Main`.
        */
        public getContentRole(): sap.ui.core.AccessibleLandmarkRole;

        /**
            * Gets current value of property {@link #getFooterLabel footerLabel}.
         * 
         * Texts which describes the landmark of the header container of the corresponding `sap.m.Page` control.
         * 
         * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), a predefined text is used.
        */
        public getFooterLabel(): string;

        /**
            * Gets current value of property {@link #getFooterRole footerRole}.
         * 
         * Landmark role of the footer container of the corresponding `sap.m.Page` control.
         * 
         * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
         * 
         * Default value is `Region`.
        */
        public getFooterRole(): sap.ui.core.AccessibleLandmarkRole;

        /**
            * Gets current value of property {@link #getHeaderLabel headerLabel}.
         * 
         * Texts which describes the landmark of the header container of the corresponding `sap.m.Page` control.
         * 
         * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), a predefined text is used.
        */
        public getHeaderLabel(): string;

        /**
            * Gets current value of property {@link #getHeaderRole headerRole}.
         * 
         * Landmark role of the header container of the corresponding `sap.m.Page` control.
         * 
         * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
         * 
         * Default value is `Region`.
        */
        public getHeaderRole(): sap.ui.core.AccessibleLandmarkRole;

        /**
            * Returns a metadata object for class sap.m.PageAccessibleLandmarkInfo.
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
            * Gets current value of property {@link #getRootLabel rootLabel}.
         * 
         * Texts which describes the landmark of the root container of the corresponding `sap.m.Page` control.
         * 
         * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), a predefined text is used.
        */
        public getRootLabel(): string;

        /**
            * Gets current value of property {@link #getRootRole rootRole}.
         * 
         * Landmark role of the root container of the corresponding `sap.m.Page` control.
         * 
         * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
         * 
         * Default value is `Region`.
        */
        public getRootRole(): sap.ui.core.AccessibleLandmarkRole;

        /**
            * Gets current value of property {@link #getSubHeaderLabel subHeaderLabel}.
         * 
         * Texts which describes the landmark of the subheader container of the corresponding `sap.m.Page` control.
         * 
         * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), a predefined text is used.
        */
        public getSubHeaderLabel(): string;

        /**
            * Gets current value of property {@link #getSubHeaderRole subHeaderRole}.
         * 
         * Landmark role of the subheader container of the corresponding `sap.m.Page` control.
         * 
         * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
         * 
         * Default value is `None`.
        */
        public getSubHeaderRole(): sap.ui.core.AccessibleLandmarkRole;

        /**
            * Sets a new value for property {@link #getContentLabel contentLabel}.
         * 
         * Texts which describes the landmark of the content container of the corresponding `sap.m.Page` control.
         * 
         * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), a predefined text is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContentLabel(sContentLabel: string): this;

        /**
            * Sets a new value for property {@link #getContentRole contentRole}.
         * 
         * Landmark role of the content container of the corresponding `sap.m.Page` control.
         * 
         * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Main`.
        */
        public setContentRole(sContentRole: sap.ui.core.AccessibleLandmarkRole): this;

        /**
            * Sets a new value for property {@link #getFooterLabel footerLabel}.
         * 
         * Texts which describes the landmark of the header container of the corresponding `sap.m.Page` control.
         * 
         * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), a predefined text is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFooterLabel(sFooterLabel: string): this;

        /**
            * Sets a new value for property {@link #getFooterRole footerRole}.
         * 
         * Landmark role of the footer container of the corresponding `sap.m.Page` control.
         * 
         * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Region`.
        */
        public setFooterRole(sFooterRole: sap.ui.core.AccessibleLandmarkRole): this;

        /**
            * Sets a new value for property {@link #getHeaderLabel headerLabel}.
         * 
         * Texts which describes the landmark of the header container of the corresponding `sap.m.Page` control.
         * 
         * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), a predefined text is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeaderLabel(sHeaderLabel: string): this;

        /**
            * Sets a new value for property {@link #getHeaderRole headerRole}.
         * 
         * Landmark role of the header container of the corresponding `sap.m.Page` control.
         * 
         * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Region`.
        */
        public setHeaderRole(sHeaderRole: sap.ui.core.AccessibleLandmarkRole): this;

        /**
            * Sets a new value for property {@link #getRootLabel rootLabel}.
         * 
         * Texts which describes the landmark of the root container of the corresponding `sap.m.Page` control.
         * 
         * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), a predefined text is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setRootLabel(sRootLabel: string): this;

        /**
            * Sets a new value for property {@link #getRootRole rootRole}.
         * 
         * Landmark role of the root container of the corresponding `sap.m.Page` control.
         * 
         * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Region`.
        */
        public setRootRole(sRootRole: sap.ui.core.AccessibleLandmarkRole): this;

        /**
            * Sets a new value for property {@link #getSubHeaderLabel subHeaderLabel}.
         * 
         * Texts which describes the landmark of the subheader container of the corresponding `sap.m.Page` control.
         * 
         * If not set (and a landmark different than `sap.ui.core.AccessibleLandmarkRole.None` is defined), a predefined text is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSubHeaderLabel(sSubHeaderLabel: string): this;

        /**
            * Sets a new value for property {@link #getSubHeaderRole subHeaderRole}.
         * 
         * Landmark role of the subheader container of the corresponding `sap.m.Page` control.
         * 
         * If set to `sap.ui.core.AccessibleLandmarkRole.None`, no landmark will be added to the container.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setSubHeaderRole(sSubHeaderRole: sap.ui.core.AccessibleLandmarkRole): this;

    }
}