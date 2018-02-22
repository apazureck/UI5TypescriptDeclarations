declare module 'sap/ui/layout/PaneContainer' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ManagedObject } from 'sap/ui/base/ManagedObject';
    import { LayoutData } from 'sap/ui/core/LayoutData';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IPaneContainerSettings extends IElementSettings {
        orientation?: sap.ui.core.Orientation;
    }

    /**
    
    */
    export class PaneContainer extends Element {

        /**
            * Constructor for a new PaneContainer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IPaneContainerSettings);


        /**
            * Adds some pane to the aggregation {@link #getPanes panes}.
        */
        public addPane(oPane: Element): this;

        /**
            * Destroys all the panes in the aggregation {@link #getPanes panes}.
        */
        public destroyPanes(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.PaneContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

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
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.layout.PaneContainer.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getOrientation orientation}.
         * 
         * The orientation of the Splitter
         * 
         * Default value is `Horizontal`.
        */
        public getOrientation(): sap.ui.core.Orientation;

        /**
            * Gets content of aggregation {@link #getPanes panes}.
         * 
         * The Pane that will be shown when there is no suitable pane for ResponsiveSplitter's current width.
        */
        public getPanes(): {};

        /**
            * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getPanes panes}. and returns its index if found or -1 otherwise.
        */
        public indexOfPane(oPane: Element): number;

        /**
            * Pane insertion
        */
        public insertPane(oObject: any, iIndex: any): ManagedObject;

        /**
            * Removes all the controls from the aggregation {@link #getPanes panes}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllPanes(): {};

        /**
            * Pane removal
        */
        public removePane(oObject: any): ManagedObject;

        /**
            * Setter for property layoutData.
        */
        public setLayoutData(oLayoutData: LayoutData): this;

        /**
            * Sets the {@link sap.ui.core.LayoutData} defining the layout constraints for this control when it is used inside a layout.
        */
        public setLayoutData(oLayoutData: LayoutData): any;

        /**
            * Setter for property orientation. Default value is sap.ui.core.Orientation.Horizontal
        */
        public setOrientation(sOrientation: sap.ui.core.Orientation): this;

    }
}