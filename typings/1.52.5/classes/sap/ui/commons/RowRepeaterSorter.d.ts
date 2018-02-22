declare module 'sap/ui/commons/RowRepeaterSorter' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IRowRepeaterSorterSettings extends IElementSettings {
        text?: string;
        icon?: string;
        sorter?: {};
    }

    /**
    
    */
    export class RowRepeaterSorter extends Element {

        /**
            * Constructor for a new RowRepeaterSorter.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IRowRepeaterSorterSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.RowRepeaterSorter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * The sorter icon if needed for display.
        */
        public getIcon(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.RowRepeaterSorter.
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
            * Gets current value of property {@link #getSorter sorter}.
         * 
         * The sorter object.
        */
        public getSorter(): {};

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * The sorter title if needed for display.
        */
        public getText(): string;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * The sorter icon if needed for display.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: string): this;

        /**
            * Sets a new value for property {@link #getSorter sorter}.
         * 
         * The sorter object.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSorter(oSorter: {}): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The sorter title if needed for display.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

    }
}