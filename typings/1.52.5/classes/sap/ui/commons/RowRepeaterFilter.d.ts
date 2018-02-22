declare module 'sap/ui/commons/RowRepeaterFilter' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IRowRepeaterFilterSettings extends IElementSettings {
        text?: string;
        icon?: string;
        filters?: {};
    }

    /**
    
    */
    export class RowRepeaterFilter extends Element {

        /**
            * Constructor for a new RowRepeaterFilter.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IRowRepeaterFilterSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.RowRepeaterFilter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getFilters filters}.
         * 
         * The set of filter objects.
        */
        public getFilters(): {};

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * The filter icon if needed for display.
        */
        public getIcon(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.RowRepeaterFilter.
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
            * Gets current value of property {@link #getText text}.
         * 
         * The filter title if needed for display.
        */
        public getText(): string;

        /**
            * Sets a new value for property {@link #getFilters filters}.
         * 
         * The set of filter objects.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFilters(oFilters: {}): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * The filter icon if needed for display.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: string): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The filter title if needed for display.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

    }
}