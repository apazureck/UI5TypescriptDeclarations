declare module 'sap/m/NumericContent' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface INumericContentSettings extends IControlSettings {
        animateTextChange?: boolean;
        formatterValue?: boolean;
        icon?: sap.ui.core.URI;
        iconDescription?: string;
        indicator?: sap.m.DeviationIndicator;
        nullifyValue?: boolean;
        scale?: string;
        size?: sap.m.Size;
        truncateValueTo?: number;
        value?: string;
        valueColor?: sap.m.ValueColor;
        width?: sap.ui.core.CSSSize;
        withMargin?: boolean;
        state?: sap.m.LoadState;
    }

    /**
    
    */
    export class NumericContent extends Control {

        /**
            * Constructor for a new sap.m.GenericTile control.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: INumericContentSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.NumericContent`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.NumericContent` itself.
         * 
         * The event is fired when the user chooses the numeric content.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.NumericContent`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.NumericContent` itself.
         * 
         * The event is fired when the user chooses the numeric content.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.NumericContent`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.NumericContent with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getAnimateTextChange animateTextChange}.
         * 
         * If set to true, the change of the value will be animated.
         * 
         * Default value is `true`.
        */
        public getAnimateTextChange(): boolean;

        /**
            * Gets current value of property {@link #getFormatterValue formatterValue}.
         * 
         * If set to true, the value parameter contains a numeric value and scale. If set to false (default), the value parameter contains a numeric value only.
         * 
         * Default value is `false`.
        */
        public getFormatterValue(): boolean;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * The icon to be displayed as a graphical element within the control. This can be an image or an icon from the icon font.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconDescription iconDescription}.
         * 
         * Description of an icon that is used in the tooltip.
        */
        public getIconDescription(): string;

        /**
            * Gets current value of property {@link #getIndicator indicator}.
         * 
         * The indicator arrow that shows value deviation.
         * 
         * Default value is `None`.
        */
        public getIndicator(): sap.m.DeviationIndicator;

        /**
            * Returns a metadata object for class sap.m.NumericContent.
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
            * Gets current value of property {@link #getNullifyValue nullifyValue}.
         * 
         * If set to true, the omitted value property is set to 0.
         * 
         * Default value is `true`.
        */
        public getNullifyValue(): boolean;

        /**
            * Gets current value of property {@link #getScale scale}.
         * 
         * The scaling prefix. Financial characters can be used for currencies and counters. The SI prefixes can be used for units. If the scaling prefix contains more than three characters, only the first three characters are displayed.
        */
        public getScale(): string;

        /**
            * Gets current value of property {@link #getSize size}.
         * 
         * Updates the size of the control. If not set, then the default size is applied based on the device tile.
         * 
         * Default value is `Auto`.
        */
        public getSize(): sap.m.Size;

        /**
            * Gets current value of property {@link #getState state}.
         * 
         * Indicates the load status.
         * 
         * Default value is `Loaded`.
        */
        public getState(): sap.m.LoadState;

        /**
            * Gets current value of property {@link #getTruncateValueTo truncateValueTo}.
         * 
         * The number of characters of the `value` property to display.
         * 
         * Default value is `4`.
        */
        public getTruncateValueTo(): number;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * The actual value.
        */
        public getValue(): string;

        /**
            * Gets current value of property {@link #getValueColor valueColor}.
         * 
         * The semantic color of the value.
         * 
         * Default value is `Neutral`.
        */
        public getValueColor(): sap.m.ValueColor;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width of the control. If it is not set, the size of the control is defined by the 'size' property.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getWithMargin withMargin}.
         * 
         * If the value is set to false, the content is adjusted to the whole size of the control.
         * 
         * Default value is `true`.
        */
        public getWithMargin(): boolean;

        /**
            * Sets a new value for property {@link #getAnimateTextChange animateTextChange}.
         * 
         * If set to true, the change of the value will be animated.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setAnimateTextChange(bAnimateTextChange: boolean): this;

        /**
            * Sets a new value for property {@link #getFormatterValue formatterValue}.
         * 
         * If set to true, the value parameter contains a numeric value and scale. If set to false (default), the value parameter contains a numeric value only.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFormatterValue(bFormatterValue: boolean): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * The icon to be displayed as a graphical element within the control. This can be an image or an icon from the icon font.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconDescription iconDescription}.
         * 
         * Description of an icon that is used in the tooltip.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconDescription(sIconDescription: string): this;

        /**
            * Sets a new value for property {@link #getIndicator indicator}.
         * 
         * The indicator arrow that shows value deviation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setIndicator(sIndicator: sap.m.DeviationIndicator): this;

        /**
            * Sets a new value for property {@link #getNullifyValue nullifyValue}.
         * 
         * If set to true, the omitted value property is set to 0.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setNullifyValue(bNullifyValue: boolean): this;

        /**
            * Sets a new value for property {@link #getScale scale}.
         * 
         * The scaling prefix. Financial characters can be used for currencies and counters. The SI prefixes can be used for units. If the scaling prefix contains more than three characters, only the first three characters are displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setScale(sScale: string): this;

        /**
            * Sets a new value for property {@link #getSize size}.
         * 
         * Updates the size of the control. If not set, then the default size is applied based on the device tile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setSize(sSize: sap.m.Size): this;

        /**
            * Sets a new value for property {@link #getState state}.
         * 
         * Indicates the load status.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Loaded`.
        */
        public setState(sState: sap.m.LoadState): this;

        /**
            * Sets a new value for property {@link #getTruncateValueTo truncateValueTo}.
         * 
         * The number of characters of the `value` property to display.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `4`.
        */
        public setTruncateValueTo(iTruncateValueTo: number): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * The actual value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValue(sValue: string): this;

        /**
            * Sets a new value for property {@link #getValueColor valueColor}.
         * 
         * The semantic color of the value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Neutral`.
        */
        public setValueColor(sValueColor: sap.m.ValueColor): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The width of the control. If it is not set, the size of the control is defined by the 'size' property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWithMargin withMargin}.
         * 
         * If the value is set to false, the content is adjusted to the whole size of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setWithMargin(bWithMargin: boolean): this;

    }
}