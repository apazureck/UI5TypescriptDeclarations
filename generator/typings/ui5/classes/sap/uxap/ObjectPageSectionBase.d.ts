declare module 'sap/uxap/ObjectPageSectionBase' {
    import { Button } from 'sap/m/Button';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IObjectPageSectionBaseSettings extends IControlSettings {
        title?: string;
        titleLevel?: sap.ui.core.TitleLevel;
        visible?: boolean;
        importance?: sap.uxap.Importance;
    }

    /**
    
    */
    export class ObjectPageSectionBase extends Control {

        /**
            * Constructor for a new ObjectPageSectionBase.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IObjectPageSectionBaseSettings);


        /**
            * Explicitly ask to connect to the UI5 model tree
        */
        public connectToModels(): any;

        /**
            * Destroys the customAnchorBarButton in the aggregation {@link #getCustomAnchorBarButton customAnchorBarButton}.
        */
        public destroyCustomAnchorBarButton(): this;

        /**
            * Creates a new subclass of class sap.uxap.ObjectPageSectionBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getCustomAnchorBarButton customAnchorBarButton}.
         * 
         * The custom button that will provide a link to the section in the ObjectPageLayout anchor bar. This button will be used as a custom template to be into the ObjectPageLayout anchorBar area, therefore property changes happening on this button template after the first rendering won't affect the actual button copy used in the anchorBar.
         * 
         * If you want to change some of the button properties, you would need to bind them to a model.
        */
        public getCustomAnchorBarButton(): Button;

        /**
            * Gets current value of property {@link #getImportance importance}.
         * 
         * Determines whether the section will be hidden on low resolutions.
         * 
         * Default value is `High`.
        */
        public getImportance(): sap.uxap.Importance;

        /**
            * Returns a metadata object for class sap.uxap.ObjectPageSectionBase.
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
            * Gets current value of property {@link #getTitle title}.
         * 
         * Section Title
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getTitleLevel titleLevel}.
         * 
         * Determines the ARIA level of the `ObjectPageSectionBase` title. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.
         * 
         * <br>** Note: ** Defining a `titleLevel` will add `aria-level` attribute from 1 to 6, instead of changing the `ObjectPageSectionBase` title HTML tag from H1 to H6. <br>For example: if `titleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the `ObjectPageSectionBase` title.
         * 
         * Default value is `Auto`.
        */
        public getTitleLevel(): sap.ui.core.TitleLevel;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Invisible ObjectPageSectionBase are not rendered
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Sets the aggregated {@link #getCustomAnchorBarButton customAnchorBarButton}.
        */
        public setCustomAnchorBarButton(oCustomAnchorBarButton: Button): this;

        /**
            * Sets a new value for property {@link #getImportance importance}.
         * 
         * Determines whether the section will be hidden on low resolutions.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `High`.
        */
        public setImportance(sImportance: sap.uxap.Importance): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Section Title
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getTitleLevel titleLevel}.
         * 
         * Determines the ARIA level of the `ObjectPageSectionBase` title. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.
         * 
         * <br>** Note: ** Defining a `titleLevel` will add `aria-level` attribute from 1 to 6, instead of changing the `ObjectPageSectionBase` title HTML tag from H1 to H6. <br>For example: if `titleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the `ObjectPageSectionBase` title.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setTitleLevel(sTitleLevel: sap.ui.core.TitleLevel): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Invisible ObjectPageSectionBase are not rendered
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }
}