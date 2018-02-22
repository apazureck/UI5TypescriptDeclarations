declare module 'sap/ui/ux3/ExactArea' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IExactAreaSettings extends IControlSettings {
        toolbarVisible?: boolean;
    }

    /**
    
    */
    export class ExactArea extends Control {

        /**
            * Constructor for a new ExactArea.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IExactAreaSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Adds some toolbarItem to the aggregation {@link #getToolbarItems toolbarItems}.
        */
        public addToolbarItem(oToolbarItem: sap.ui.commons.ToolbarItem): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys all the toolbarItems in the aggregation {@link #getToolbarItems toolbarItems}.
        */
        public destroyToolbarItems(): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.ExactArea with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Arbitrary child controls of the content area
        */
        public getContent(): {};

        /**
            * Returns a metadata object for class sap.ui.ux3.ExactArea.
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
            * Gets content of aggregation {@link #getToolbarItems toolbarItems}.
         * 
         * Tool bar items which shall be shown in the tool bar.
        */
        public getToolbarItems(): {};

        /**
            * Gets current value of property {@link #getToolbarVisible toolbarVisible}.
         * 
         * Specifies whether the tool bar shall be visible
         * 
         * Default value is `true`.
        */
        public getToolbarVisible(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Checks for the provided `sap.ui.commons.ToolbarItem` in the aggregation {@link #getToolbarItems toolbarItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfToolbarItem(oToolbarItem: sap.ui.commons.ToolbarItem): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Inserts a toolbarItem into the aggregation {@link #getToolbarItems toolbarItems}.
        */
        public insertToolbarItem(oToolbarItem: sap.ui.commons.ToolbarItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getToolbarItems toolbarItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllToolbarItems(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Removes a toolbarItem from the aggregation {@link #getToolbarItems toolbarItems}.
        */
        public removeToolbarItem(vToolbarItem: number | string | sap.ui.commons.ToolbarItem): sap.ui.commons.ToolbarItem;

        /**
            * Sets a new value for property {@link #getToolbarVisible toolbarVisible}.
         * 
         * Specifies whether the tool bar shall be visible
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setToolbarVisible(bToolbarVisible: boolean): this;

    }
}