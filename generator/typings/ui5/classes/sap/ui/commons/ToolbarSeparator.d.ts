declare module 'sap/ui/commons/ToolbarSeparator' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IToolbarSeparatorSettings extends IElementSettings {
        displayVisualSeparator?: boolean;
        design?: sap.ui.commons.ToolbarSeparatorDesign;
    }

    /**
    
    */
    export class ToolbarSeparator extends Element {

        /**
            * Constructor for a new ToolbarSeparator.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IToolbarSeparatorSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.ToolbarSeparator with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * Design of the Separator.
        */
        public getDesign(): sap.ui.commons.ToolbarSeparatorDesign;

        /**
            * Gets current value of property {@link #getDisplayVisualSeparator displayVisualSeparator}.
         * 
         * When set to false, there is no visual indication of separation by a vertical line but by a wider space.
         * 
         * Default value is `true`.
        */
        public getDisplayVisualSeparator(): boolean;

        /**
            * Returns a metadata object for class sap.ui.commons.ToolbarSeparator.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

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
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Design of the Separator.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDesign(sDesign: sap.ui.commons.ToolbarSeparatorDesign): this;

        /**
            * Sets a new value for property {@link #getDisplayVisualSeparator displayVisualSeparator}.
         * 
         * When set to false, there is no visual indication of separation by a vertical line but by a wider space.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setDisplayVisualSeparator(bDisplayVisualSeparator: boolean): this;

    }
}