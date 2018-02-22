declare module 'sap/m/MaskInputRule' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IMaskInputRuleSettings extends IElementSettings {
        maskFormatSymbol?: string;
        regex?: string;
    }

    /**
    
    */
    export class MaskInputRule extends Element {

        /**
            * Constructor for a new MaskInputRule.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMaskInputRuleSettings);


        /**
            * Creates a new subclass of class sap.m.MaskInputRule with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getMaskFormatSymbol maskFormatSymbol}.
         * 
         * Defines the symbol used in the mask format which will accept a certain range of characters.
         * 
         * Default value is `*`.
        */
        public getMaskFormatSymbol(): string;

        /**
            * Returns a metadata object for class sap.m.MaskInputRule.
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
            * Gets current value of property {@link #getRegex regex}.
         * 
         * Defines the allowed characters as a regular expression.
         * 
         * Default value is `[a-zA-Z0-9]`.
        */
        public getRegex(): string;

        /**
            * Sets a new value for property {@link #getMaskFormatSymbol maskFormatSymbol}.
         * 
         * Defines the symbol used in the mask format which will accept a certain range of characters.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `*`.
        */
        public setMaskFormatSymbol(sMaskFormatSymbol: string): this;

        /**
            * Sets a new value for property {@link #getRegex regex}.
         * 
         * Defines the allowed characters as a regular expression.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `[a-zA-Z0-9]`.
        */
        public setRegex(sRegex: string): this;

    }
}