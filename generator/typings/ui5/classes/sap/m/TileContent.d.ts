declare module 'sap/m/TileContent' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITileContentSettings extends IControlSettings {
        footer?: string;
        footerColor?: sap.m.ValueColor;
        size?: sap.m.Size;
        unit?: string;
        disabled?: boolean;
        frameType?: sap.m.FrameType;
    }

    /**
    
    */
    export class TileContent extends Control {

        /**
            * Constructor for a new sap.m.TileContent control.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITileContentSettings);


        /**
            * Binds aggregation {@link #getContent content} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindContent(oBindingInfo: {}): this;

        /**
            * Destroys the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.m.TileContent with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The switchable view that depends on the tile type.
        */
        public getContent(): Control;

        /**
            * Gets current value of property {@link #getDisabled disabled}.
         * 
         * Disables control if true.
         * 
         * Default value is `false`.
        */
        public getDisabled(): boolean;

        /**
            * Gets current value of property {@link #getFooter footer}.
         * 
         * The footer text of the tile.
        */
        public getFooter(): string;

        /**
            * Gets current value of property {@link #getFooterColor footerColor}.
         * 
         * The semantic color of the footer.
         * 
         * Default value is `Neutral`.
        */
        public getFooterColor(): sap.m.ValueColor;

        /**
            * Gets current value of property {@link #getFrameType frameType}.
         * 
         * Frame types: 1x1, 2x1, and auto.
         * 
         * Default value is `Auto`.
        */
        public getFrameType(): sap.m.FrameType;

        /**
            * Returns a metadata object for class sap.m.TileContent.
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
            * Gets current value of property {@link #getSize size}.
         * 
         * Updates the size of the tile. If it is not set, then the default size is applied based on the device tile.
         * 
         * Default value is `Auto`.
        */
        public getSize(): sap.m.Size;

        /**
            * Gets current value of property {@link #getUnit unit}.
         * 
         * The percent sign, the currency symbol, or the unit of measure.
        */
        public getUnit(): string;

        /**
            * Sets the aggregated {@link #getContent content}.
        */
        public setContent(oContent: Control): this;

        /**
            * Sets a new value for property {@link #getDisabled disabled}.
         * 
         * Disables control if true.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDisabled(bDisabled: boolean): this;

        /**
            * Sets a new value for property {@link #getFooter footer}.
         * 
         * The footer text of the tile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFooter(sFooter: string): this;

        /**
            * Sets a new value for property {@link #getFooterColor footerColor}.
         * 
         * The semantic color of the footer.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Neutral`.
        */
        public setFooterColor(sFooterColor: sap.m.ValueColor): this;

        /**
            * Sets a new value for property {@link #getFrameType frameType}.
         * 
         * Frame types: 1x1, 2x1, and auto.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setFrameType(sFrameType: sap.m.FrameType): this;

        /**
            * Setter for protected property to enable or disable content rendering. This function does not invalidate the control.
        */
        protected setRenderContent(value: boolean): this;

        /**
            * Setter for protected property to enable or disable footer rendering. This function does not invalidate the control.
        */
        protected setRenderFooter(value: boolean): this;

        /**
            * Sets a new value for property {@link #getSize size}.
         * 
         * Updates the size of the tile. If it is not set, then the default size is applied based on the device tile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setSize(sSize: sap.m.Size): this;

        /**
            * Sets a new value for property {@link #getUnit unit}.
         * 
         * The percent sign, the currency symbol, or the unit of measure.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setUnit(sUnit: string): this;

        /**
            * Unbinds aggregation {@link #getContent content} from model data.
        */
        public unbindContent(): this;

    }
}