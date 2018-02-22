declare module 'sap/uxap/ObjectPageSubSection' {
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { BlockBase } from 'sap/uxap/BlockBase';
    import { ObjectPageSectionBase, IObjectPageSectionBaseSettings } from 'sap/uxap/ObjectPageSectionBase';

    export interface IObjectPageSubSectionSettings extends IObjectPageSectionBaseSettings {
        mode?: sap.uxap.ObjectPageSubSectionMode;
        titleUppercase?: boolean;
    }

    /**
    
    */
    export class ObjectPageSubSection extends ObjectPageSectionBase {

        /**
            * Constructor for a new ObjectPageSubSection.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IObjectPageSubSectionSettings);


        /**
            * Adds some action to the aggregation {@link #getActions actions}.
        */
        public addAction(oAction: Control): this;

        /**
            * Adds some block to the aggregation {@link #getBlocks blocks}.
        */
        public addBlock(oBlock: Control): this;

        /**
            * Adds some moreBlock to the aggregation {@link #getMoreBlocks moreBlocks}.
        */
        public addMoreBlock(oMoreBlock: Control): this;

        /**
            * Destroys all the actions in the aggregation {@link #getActions actions}.
        */
        public destroyActions(): this;

        /**
            * Destroys all the blocks in the aggregation {@link #getBlocks blocks}.
        */
        public destroyBlocks(): this;

        /**
            * Destroys all the moreBlocks in the aggregation {@link #getMoreBlocks moreBlocks}.
        */
        public destroyMoreBlocks(): this;

        /**
            * Creates a new subclass of class sap.uxap.ObjectPageSubSection with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getActions actions}.
         * 
         * Actions available for this Subsection
        */
        public getActions(): {};

        /**
            * Gets content of aggregation {@link #getBlocks blocks}.
         * 
         * Controls to be displayed in the subsection
        */
        public getBlocks(): {};

        /**
            * Returns a metadata object for class sap.uxap.ObjectPageSubSection.
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
            * Gets current value of property {@link #getMode mode}.
         * 
         * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.
         * 
         * Default value is `Collapsed`.
        */
        public getMode(): sap.uxap.ObjectPageSubSectionMode;

        /**
            * Gets content of aggregation {@link #getMoreBlocks moreBlocks}.
         * 
         * Additional controls to display when the Show more / See all / (...) button is pressed
        */
        public getMoreBlocks(): {};

        /**
            * Gets current value of property {@link #getTitleUppercase titleUppercase}.
         * 
         * Determines whether the Subsection title is displayed in upper case.
         * 
         * Default value is `false`.
        */
        public getTitleUppercase(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getActions actions}. and returns its index if found or -1 otherwise.
        */
        public indexOfAction(oAction: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getBlocks blocks}. and returns its index if found or -1 otherwise.
        */
        public indexOfBlock(oBlock: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMoreBlocks moreBlocks}. and returns its index if found or -1 otherwise.
        */
        public indexOfMoreBlock(oMoreBlock: Control): number;

        /**
            * Inserts a action into the aggregation {@link #getActions actions}.
        */
        public insertAction(oAction: Control, iIndex: number): this;

        /**
            * Adds a `BlockBase` instance to the `blocks` aggregation.
         * 
         * ** Note: ** The `insertBlock` method is not supported by design. If used, it works as an `addBlock`, adding a single block to the end of the `blocks` aggregation.
        */
        public insertBlock(oObject: BlockBase, iIndex: number): this;

        /**
            * Adds a `BlockBase` instance to the `moreBlocks` aggregation.
         * 
         * ** Note: ** The `insertMoreBlock` method is not supported by design. If used, it works as an `addMoreBlock`, adding a single block to the end of the `moreBlocks` aggregation.
        */
        public insertMoreBlock(oObject: BlockBase, iIndex: number): this;

        /**
            * Removes a action from the aggregation {@link #getActions actions}.
        */
        public removeAction(vAction: number | string | Control): Control;

        /**
            * Removes all the controls from the aggregation {@link #getActions actions}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllActions(): {};

        /**
            * Removes all the controls from the aggregation {@link #getBlocks blocks}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllBlocks(): {};

        /**
            * Removes all the controls from the aggregation {@link #getMoreBlocks moreBlocks}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllMoreBlocks(): {};

        /**
            * Removes a block from the aggregation {@link #getBlocks blocks}.
        */
        public removeBlock(vBlock: number | string | Control): Control;

        /**
            * Removes a moreBlock from the aggregation {@link #getMoreBlocks moreBlocks}.
        */
        public removeMoreBlock(vMoreBlock: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getMode mode}.
         * 
         * A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Collapsed`.
        */
        public setMode(sMode: sap.uxap.ObjectPageSubSectionMode): this;

        /**
            * Sets a new value for property {@link #getTitleUppercase titleUppercase}.
         * 
         * Determines whether the Subsection title is displayed in upper case.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setTitleUppercase(bTitleUppercase: boolean): this;

    }
}