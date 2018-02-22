declare module 'sap/m/QuickViewPage' {
    import { QuickViewGroup } from 'sap/m/QuickViewGroup';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IQuickViewPageSettings extends IControlSettings {
        pageId?: string;
        header?: string;
        title?: string;
        titleUrl?: string;
        crossAppNavCallback?: {};
        description?: string;
        icon?: string;
    }

    /**
    
    */
    export class QuickViewPage extends Control {

        /**
            * Constructor for a new QuickViewPage.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IQuickViewPageSettings);


        /**
            * Adds some group to the aggregation {@link #getGroups groups}.
        */
        public addGroup(oGroup: QuickViewGroup): this;

        /**
            * Binds aggregation {@link #getGroups groups} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindGroups(oBindingInfo: {}): this;

        /**
            * Destroys all the groups in the aggregation {@link #getGroups groups}.
        */
        public destroyGroups(): this;

        /**
            * Creates a new subclass of class sap.m.QuickViewPage with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getCrossAppNavCallback crossAppNavCallback}.
         * 
         * Specifies the application which provides target and param configuration for cross-application navigation from the 'page header'.
        */
        public getCrossAppNavCallback(): {};

        /**
            * Gets current value of property {@link #getDescription description}.
         * 
         * Specifies the text displayed under the header of the content section
         * 
         * Default value is ``.
        */
        public getDescription(): string;

        /**
            * Gets content of aggregation {@link #getGroups groups}.
         * 
         * QuickViewGroup consists of a title (optional) and an entity of group elements.
        */
        public getGroups(): {};

        /**
            * Gets current value of property {@link #getHeader header}.
         * 
         * Specifies the text displayed in the header of the control.
         * 
         * Default value is ``.
        */
        public getHeader(): string;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Specifies the URL of the icon displayed under the header of the page
         * 
         * Default value is ``.
        */
        public getIcon(): string;

        /**
            * Returns a metadata object for class sap.m.QuickViewPage.
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
            * Gets current value of property {@link #getPageId pageId}.
         * 
         * Page id
         * 
         * Default value is ``.
        */
        public getPageId(): string;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Specifies the text displayed in the header of the content section of the control.
         * 
         * Default value is ``.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getTitleUrl titleUrl}.
         * 
         * Specifies the URL which opens when the title or the thumbnail is clicked.
         * 
         * Default value is ``.
        */
        public getTitleUrl(): string;

        /**
            * Checks for the provided `sap.m.QuickViewGroup` in the aggregation {@link #getGroups groups}. and returns its index if found or -1 otherwise.
        */
        public indexOfGroup(oGroup: QuickViewGroup): number;

        /**
            * Inserts a group into the aggregation {@link #getGroups groups}.
        */
        public insertGroup(oGroup: QuickViewGroup, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getGroups groups}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllGroups(): {};

        /**
            * Removes a group from the aggregation {@link #getGroups groups}.
        */
        public removeGroup(vGroup: number | string | QuickViewGroup): QuickViewGroup;

        /**
            * Sets a new value for property {@link #getCrossAppNavCallback crossAppNavCallback}.
         * 
         * Specifies the application which provides target and param configuration for cross-application navigation from the 'page header'.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setCrossAppNavCallback(oCrossAppNavCallback: {}): this;

        /**
            * Sets a new value for property {@link #getDescription description}.
         * 
         * Specifies the text displayed under the header of the content section
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setDescription(sDescription: string): this;

        /**
            * Sets a new value for property {@link #getHeader header}.
         * 
         * Specifies the text displayed in the header of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setHeader(sHeader: string): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Specifies the URL of the icon displayed under the header of the page
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIcon(sIcon: string): this;

        /**
            * Sets a new value for property {@link #getPageId pageId}.
         * 
         * Page id
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setPageId(sPageId: string): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Specifies the text displayed in the header of the content section of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getTitleUrl titleUrl}.
         * 
         * Specifies the URL which opens when the title or the thumbnail is clicked.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setTitleUrl(sTitleUrl: string): this;

        /**
            * Unbinds aggregation {@link #getGroups groups} from model data.
        */
        public unbindGroups(): this;

    }
}