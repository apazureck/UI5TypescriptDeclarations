declare module 'sap/ui/layout/BlockLayout' {
    import { BlockLayoutRow } from 'sap/ui/layout/BlockLayoutRow';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IBlockLayoutSettings extends IControlSettings {
        background?: sap.ui.layout.BlockBackgroundType;
    }

    /**
    
    */
    export class BlockLayout extends Control {

        /**
            * Constructor for a new BlockLayout.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IBlockLayoutSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: BlockLayoutRow): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.BlockLayout with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getBackground background}.
         * 
         * Determines the background used for the Layout
         * 
         * Default value is `Default`.
        */
        public getBackground(): sap.ui.layout.BlockBackgroundType;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The Rows to be included in the content of the control
        */
        public getContent(): {};

        /**
            * Returns a metadata object for class sap.ui.layout.BlockLayout.
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
            * Checks for the provided `sap.ui.layout.BlockLayoutRow` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: BlockLayoutRow): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: BlockLayoutRow, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | BlockLayoutRow): BlockLayoutRow;

        /**
            * Changes background type
        */
        public setBackground(sNewBackground: string): this;

    }
}