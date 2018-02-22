declare module 'sap/m/TextArea' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { InputBase, IInputBaseSettings } from 'sap/m/InputBase';

    export interface ITextAreaSettings extends IInputBaseSettings {
        rows?: number;
        cols?: number;
        height?: sap.ui.core.CSSSize;
        maxLength?: number;
        showExceededText?: boolean;
        wrapping?: sap.ui.core.Wrapping;
        valueLiveUpdate?: boolean;
        growing?: boolean;
        growingMaxLines?: number;
    }

    /**
    
    */
    export class TextArea extends InputBase {

        /**
            * Constructor for a new TextArea.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITextAreaSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.m.TextArea`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TextArea` itself.
         * 
         * Is fired whenever the user has modified the text shown on the text area.
        */
        attachLiveChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new <code>value</code> of the control. */
            value: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.m.TextArea`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TextArea` itself.
         * 
         * Is fired whenever the user has modified the text shown on the text area.
        */
        attachLiveChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new <code>value</code> of the control. */
            value: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.m.TextArea`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLiveChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.TextArea with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.InputBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:liveChange liveChange} to attached listeners.
        */
        protected fireLiveChange(mParameters?: { value?: string, }): this;

        /**
            * Gets current value of property {@link #getCols cols}.
         * 
         * Defines the visible width of the control, in average character widths. ** Note: ** The `width` property wins over the `cols` property, if both are set.
         * 
         * Default value is `20`.
        */
        public getCols(): number;

        /**
            * Gets current value of property {@link #getGrowing growing}.
         * 
         * Indicates the ability of the control to automatically grow and shrink dynamically with its content. ** Note: ** The `height` property is ignored, if this property set to `true`.
         * 
         * Default value is `false`.
        */
        public getGrowing(): boolean;

        /**
            * Gets current value of property {@link #getGrowingMaxLines growingMaxLines}.
         * 
         * Defines the maximum number of lines that the control can grow.
         * 
         * Default value is `0`.
        */
        public getGrowingMaxLines(): number;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Defines the height of the control.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getMaxLength maxLength}.
         * 
         * Defines the maximum number of characters that the `value` can be.
         * 
         * Default value is `0`.
        */
        public getMaxLength(): number;

        /**
            * Returns a metadata object for class sap.m.TextArea.
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
         * Defines the number of visible text lines for the control. ** Note: ** The `height` property wins over the `rows` property, if both are set.
         * 
         * Default value is `2`.
        */
        public getRows(): number;

        /**
            * Gets current value of property {@link #getShowExceededText showExceededText}.
         * 
         * Determines whether the characters, exceeding the maximum allowed character count, are visible in the input field.
         * 
         * If set to `false` the user is not allowed to enter more characters than what is set in the `maxLength` property. If set to `true` the characters exceeding the `maxLength` value are selected on paste and the counter below the input field displays their number.
         * 
         * Default value is `false`.
        */
        public getShowExceededText(): boolean;

        /**
            * Gets current value of property {@link #getValueLiveUpdate valueLiveUpdate}.
         * 
         * Indicates when the `value` property gets updated with the user changes. Setting it to `true` updates the `value` property whenever the user has modified the text shown on the text area.
         * 
         * Default value is `false`.
        */
        public getValueLiveUpdate(): boolean;

        /**
            * Gets current value of property {@link #getWrapping wrapping}.
         * 
         * Indicates how the control wraps the text, e.g. `Soft`, `Hard`, `Off`.
         * 
         * Default value is `None`.
        */
        public getWrapping(): sap.ui.core.Wrapping;

        /**
            * Sets a new value for property {@link #getCols cols}.
         * 
         * Defines the visible width of the control, in average character widths. ** Note: ** The `width` property wins over the `cols` property, if both are set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `20`.
        */
        public setCols(iCols: number): this;

        /**
            * Sets a new value for property {@link #getGrowing growing}.
         * 
         * Indicates the ability of the control to automatically grow and shrink dynamically with its content. ** Note: ** The `height` property is ignored, if this property set to `true`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setGrowing(bGrowing: boolean): this;

        /**
            * Sets a new value for property {@link #getGrowingMaxLines growingMaxLines}.
         * 
         * Defines the maximum number of lines that the control can grow.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setGrowingMaxLines(iGrowingMaxLines: number): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Defines the height of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getMaxLength maxLength}.
         * 
         * Defines the maximum number of characters that the `value` can be.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMaxLength(iMaxLength: number): this;

        /**
            * Sets a new value for property {@link #getRows rows}.
         * 
         * Defines the number of visible text lines for the control. ** Note: ** The `height` property wins over the `rows` property, if both are set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `2`.
        */
        public setRows(iRows: number): this;

        /**
            * Sets a new value for property {@link #getShowExceededText showExceededText}.
         * 
         * Determines whether the characters, exceeding the maximum allowed character count, are visible in the input field.
         * 
         * If set to `false` the user is not allowed to enter more characters than what is set in the `maxLength` property. If set to `true` the characters exceeding the `maxLength` value are selected on paste and the counter below the input field displays their number.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowExceededText(bShowExceededText: boolean): this;

        /**
            * Sets a new value for property {@link #getValueLiveUpdate valueLiveUpdate}.
         * 
         * Indicates when the `value` property gets updated with the user changes. Setting it to `true` updates the `value` property whenever the user has modified the text shown on the text area.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setValueLiveUpdate(bValueLiveUpdate: boolean): this;

        /**
            * Sets a new value for property {@link #getWrapping wrapping}.
         * 
         * Indicates how the control wraps the text, e.g. `Soft`, `Hard`, `Off`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setWrapping(sWrapping: sap.ui.core.Wrapping): this;

    }
}