declare module 'sap/ui/demokit/HexagonButtonGroup' {
    import { HexagonButton } from 'sap/ui/demokit/HexagonButton';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IHexagonButtonGroupSettings extends IControlSettings {
        colspan?: number;
    }

    /**
    
    */
    export class HexagonButtonGroup extends Control {

        /**
            * Constructor for a new HexagonButtonGroup.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IHexagonButtonGroupSettings);


        /**
            * Adds some button to the aggregation {@link #getButtons buttons}.
        */
        public addButton(oButton: HexagonButton): this;

        /**
            * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
        */
        public destroyButtons(): this;

        /**
            * Creates a new subclass of class sap.ui.demokit.HexagonButtonGroup with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getButtons buttons}.
         * 
         * The buttons to layout in a grid
        */
        public getButtons(): {};

        /**
            * Gets current value of property {@link #getColspan colspan}.
         * 
         * How many buttons might be placed in the same row of the grid
         * 
         * Default value is `3`.
        */
        public getColspan(): number;

        /**
            * Returns a metadata object for class sap.ui.demokit.HexagonButtonGroup.
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
            * Checks for the provided `sap.ui.demokit.HexagonButton` in the aggregation {@link #getButtons buttons}. and returns its index if found or -1 otherwise.
        */
        public indexOfButton(oButton: HexagonButton): number;

        /**
            * Inserts a button into the aggregation {@link #getButtons buttons}.
        */
        public insertButton(oButton: HexagonButton, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getButtons buttons}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllButtons(): {};

        /**
            * Removes a button from the aggregation {@link #getButtons buttons}.
        */
        public removeButton(vButton: number | string | HexagonButton): HexagonButton;

        /**
            * Sets a new value for property {@link #getColspan colspan}.
         * 
         * How many buttons might be placed in the same row of the grid
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `3`.
        */
        public setColspan(iColspan: number): this;

    }
}