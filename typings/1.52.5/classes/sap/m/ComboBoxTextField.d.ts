declare module 'sap/m/ComboBoxTextField' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { InputBase, IInputBaseSettings } from 'sap/m/InputBase';

    export interface IComboBoxTextFieldSettings extends IInputBaseSettings {
        maxWidth?: sap.ui.core.CSSSize;
        showButton?: boolean;
    }

    /**
    
    */
    export class ComboBoxTextField extends InputBase {

        /**
            * Constructor for a new `sap.m.ComboBoxTextField`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IComboBoxTextFieldSettings);


        /**
            * Creates a new subclass of class sap.m.ComboBoxTextField with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.InputBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getMaxWidth maxWidth}.
         * 
         * Sets the maximum width of the text field.
         * 
         * Default value is `100%`.
        */
        public getMaxWidth(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.m.ComboBoxTextField.
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
            * Gets current value of property {@link #getShowButton showButton}.
         * 
         * Indicates whether the dropdown downward-facing arrow button is shown.
         * 
         * Default value is `true`.
        */
        public getShowButton(): boolean;

        /**
            * Gets the `value`.
         * 
         * Default value is an empty string.
        */
        public getValue(): string;

        /**
            * Sets a new value for property {@link #getMaxWidth maxWidth}.
         * 
         * Sets the maximum width of the text field.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setMaxWidth(sMaxWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getShowButton showButton}.
         * 
         * Indicates whether the dropdown downward-facing arrow button is shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowButton(bShowButton: boolean): this;

    }
}