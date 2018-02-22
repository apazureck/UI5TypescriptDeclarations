declare module 'sap/ui/commons/TextArea' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { TextField, ITextFieldSettings } from 'sap/ui/commons/TextField';

    export interface ITextAreaSettings extends ITextFieldSettings {
        height?: sap.ui.core.CSSSize;
        cols?: number;
        rows?: number;
        wrapping?: sap.ui.core.Wrapping;
        cursorPos?: number;
        explanation?: string;
        labeledBy?: string;
    }

    /**
    
    */
    export class TextArea extends TextField {

        /**
            * Constructor for a new TextArea.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITextAreaSettings);


        /**
            * Creates a new subclass of class sap.ui.commons.TextArea with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.TextField.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getCols cols}.
         * 
         * Number of Columns. Cols means number of characters per row. This proprty is only used if Width is not used.
        */
        public getCols(): number;

        /**
            * Gets current value of property {@link #getCursorPos cursorPos}.
         * 
         * Position of cursor, e.g., to let the user re-start typing at the same position as before the server roundtrip
        */
        public getCursorPos(): number;

        /**
            * Gets current value of property {@link #getExplanation explanation}.
         * 
         * text which appears, in case quick-help is switched on
        */
        public getExplanation(): string;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Height of text field. When it is set (CSS-size such as % or px), this is the exact size.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getLabeledBy labeledBy}.
         * 
         * ID of label control
        */
        public getLabeledBy(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.TextArea.
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
            * Gets current value of property {@link #getRows rows}.
         * 
         * Number of Rows. This proprty is only used if Height is not used.
        */
        public getRows(): number;

        /**
            * Gets current value of property {@link #getWrapping wrapping}.
         * 
         * Text wrapping. Possible values are: Soft, Hard, Off.
        */
        public getWrapping(): sap.ui.core.Wrapping;

        /**
            * Sets a new value for property {@link #getCols cols}.
         * 
         * Number of Columns. Cols means number of characters per row. This proprty is only used if Width is not used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setCols(iCols: number): this;

        /**
            * Property setter for the cursor position
        */
        public setCursorPos(iCursorPos: number): this;

        /**
            * Sets a new value for property {@link #getExplanation explanation}.
         * 
         * text which appears, in case quick-help is switched on
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setExplanation(sExplanation: string): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Height of text field. When it is set (CSS-size such as % or px), this is the exact size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getLabeledBy labeledBy}.
         * 
         * ID of label control
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLabeledBy(sLabeledBy: string): this;

        /**
            * Property setter for MaxLength
        */
        public setMaxLength(iMaxLength: number): this;

        /**
            * Sets a new value for property {@link #getRows rows}.
         * 
         * Number of Rows. This proprty is only used if Height is not used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setRows(iRows: number): this;

        /**
            * Sets a new value for property {@link #getWrapping wrapping}.
         * 
         * Text wrapping. Possible values are: Soft, Hard, Off.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWrapping(sWrapping: sap.ui.core.Wrapping): this;

    }
}