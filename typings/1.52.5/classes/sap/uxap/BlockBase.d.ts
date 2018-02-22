declare module 'sap/uxap/BlockBase' {
    import { ModelMapping } from 'sap/uxap/ModelMapping';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IBlockBaseSettings extends IControlSettings {
        mode?: string;
        visible?: boolean;
        columnLayout?: sap.uxap.BlockBaseColumnLayout;
        formAdjustment?: sap.uxap.BlockBaseFormAdjustment;
        showSubSectionMore?: boolean;
    }

    /**
    
    */
    export class BlockBase extends Control {

        /**
            * Constructor for a new BlockBase.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IBlockBaseSettings);


        /**
            * Adds some mapping to the aggregation {@link #getMappings mappings}.
        */
        public addMapping(oMapping: ModelMapping): this;

        /**
            * Destroys all the mappings in the aggregation {@link #getMappings mappings}.
        */
        public destroyMappings(): this;

        /**
            * Creates a new subclass of class sap.uxap.BlockBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getColumnLayout columnLayout}.
         * 
         * Determines on how columns the layout will be rendered. Allowed values are integers from 1 to 4 and "auto".
         * 
         * Default value is `auto`.
        */
        public getColumnLayout(): sap.uxap.BlockBaseColumnLayout;

        /**
            * Gets current value of property {@link #getFormAdjustment formAdjustment}.
         * 
         * Determines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns" and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of inner forms will be made and the form will keep its original column count.
         * 
         * Default value is `BlockColumns`.
        */
        public getFormAdjustment(): sap.uxap.BlockBaseFormAdjustment;

        /**
            * Gets content of aggregation {@link #getMappings mappings}.
         * 
         * Map external UI5 model and internal Block model
        */
        public getMappings(): {};

        /**
            * Returns a metadata object for class sap.uxap.BlockBase.
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
         * Determines the mode of the block. When block is used inside ObjectPage this mode is inherited my the SubSection. The mode of the block is changed when SubSection mode changes.
        */
        public getMode(): string;

        /**
            * ID of the element which is the current target of the association {@link #getSelectedView selectedView}, or `null`.
        */
        public getSelectedView(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getShowSubSectionMore showSubSectionMore}.
         * 
         * Determines whether the show more button should be shown.
         * 
         * ** Note: ** The property will take effect if the `BlockBase` is inside <ObjectPageSubSection` and would be ignored in case the `BlockBase` is nested inside another `BlockBase`.
         * 
         * Default value is `false`.
        */
        public getShowSubSectionMore(): boolean;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Determines the visibility of the block.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Checks for the provided `sap.uxap.ModelMapping` in the aggregation {@link #getMappings mappings}. and returns its index if found or -1 otherwise.
        */
        public indexOfMapping(oMapping: ModelMapping): number;

        /**
            * Inserts a mapping into the aggregation {@link #getMappings mappings}.
        */
        public insertMapping(oMapping: ModelMapping, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getMappings mappings}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllMappings(): {};

        /**
            * Removes a mapping from the aggregation {@link #getMappings mappings}.
        */
        public removeMapping(vMapping: number | string | ModelMapping): ModelMapping;

        /**
            * Set the column layout for this particular block.
        */
        public setColumnLayout(sLayout: string): any;

        /**
            * Sets a new value for property {@link #getFormAdjustment formAdjustment}.
         * 
         * Determines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns" and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of inner forms will be made and the form will keep its original column count.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `BlockColumns`.
        */
        public setFormAdjustment(sFormAdjustment: sap.uxap.BlockBaseFormAdjustment): this;

        /**
            * Set the view mode for this particular block.
        */
        public setMode(sMode: string): any;

        /**
            * Sets the associated {@link #getSelectedView selectedView}.
        */
        public setSelectedView(oSelectedView: sap.ui.core.ID | Control): this;

        /**
            * Sets a new value for property {@link #getShowSubSectionMore showSubSectionMore}.
         * 
         * Determines whether the show more button should be shown.
         * 
         * ** Note: ** The property will take effect if the `BlockBase` is inside <ObjectPageSubSection` and would be ignored in case the `BlockBase` is nested inside another `BlockBase`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowSubSectionMore(bShowSubSectionMore: boolean): this;

        /**
            * Setter for the visibility of the block.
        */
        public setVisible(): this;

    }
}