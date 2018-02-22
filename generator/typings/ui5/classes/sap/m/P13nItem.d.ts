declare module 'sap/m/P13nItem' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Item, IItemSettings } from 'sap/ui/core/Item';

    export interface IP13nItemSettings extends IItemSettings {
        columnKey?: string;
        text?: string;
        visible?: boolean;
        type?: string;
        precision?: string;
        formatSettings?: {};
        scale?: string;
        maxLength?: string;
        width?: string;
        isDefault?: boolean;
        values?: string[];
        role?: string;
        aggregationRole?: string;
        href?: string;
        target?: string;
        press?: {};
    }

    /**
    
    */
    export class P13nItem extends Item {

        /**
            * Constructor for a new P13nItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IP13nItemSettings);


        /**
            * Creates a new subclass of class sap.m.P13nItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getAggregationRole aggregationRole}.
         * 
         * Defines aggregation role
        */
        public getAggregationRole(): string;

        /**
            * Gets current value of property {@link #getColumnKey columnKey}.
         * 
         * Can be used as input for subsequent actions.
        */
        public getColumnKey(): string;

        /**
            * Gets current value of property {@link #getFormatSettings formatSettings}.
         * 
         * A JSON object containing the formatSettings which will be used to pass additional type/format settings for the entered value. if type==time or date or datetime the object will be used for the DateFormatter, TimeFormatter or DateTimeFormatter
         * 
         * * Below you can find a brief example *
         * 
         * ``
         * {
         * 		UTC: false,
         * 		style: "medium" //"short" or "long"
         * }
         * ``
        */
        public getFormatSettings(): {};

        /**
            * Gets current value of property {@link #getHref href}.
         * 
         * Defines href of a link.
        */
        public getHref(): string;

        /**
            * Gets current value of property {@link #getIsDefault isDefault}.
         * 
         * the column with isDefault==true will be used as the selected column item on the conditionPanel
         * 
         * Default value is `false`.
        */
        public getIsDefault(): boolean;

        /**
            * Gets current value of property {@link #getMaxLength maxLength}.
         * 
         * specifies the number of characters which can be entered in the value fields of the condition panel
        */
        public getMaxLength(): string;

        /**
            * Returns a metadata object for class sap.m.P13nItem.
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
            * Gets current value of property {@link #getPrecision precision}.
         * 
         * if type==numeric the precision will be used to format the entered value (maxIntegerDigits of the used Formatter)
        */
        public getPrecision(): string;

        /**
            * Gets current value of property {@link #getPress press}.
         * 
         * Defines press handler of a link.
        */
        public getPress(): {};

        /**
            * Gets current value of property {@link #getRole role}.
         * 
         * Defines role. The role is reflected in the manner how the dimension will influence the chart layout.
        */
        public getRole(): string;

        /**
            * Gets current value of property {@link #getScale scale}.
         * 
         * if type==numeric the scale will be used to format the entered value (maxFractionDigits of the used Formatter)
        */
        public getScale(): string;

        /**
            * Gets current value of property {@link #getTarget target}.
         * 
         * Defines target of a link.
        */
        public getTarget(): string;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * The text to be displayed for the item.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * data type of the column (text, numeric or date is supported)
         * 
         * Default value is `text`.
        */
        public getType(): string;

        /**
            * Gets current value of property {@link #getValues values}.
         * 
         * the array of values for type bool. e.g. ["", "Off", "On"]. The first entry can be empty (used to blank the value field). Next value represent the false value, last entry the true value.
        */
        public getValues(): {};

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Defines visibility of column
        */
        public getVisible(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines column width
        */
        public getWidth(): string;

        /**
            * Sets a new value for property {@link #getAggregationRole aggregationRole}.
         * 
         * Defines aggregation role
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAggregationRole(sAggregationRole: string): this;

        /**
            * Sets a new value for property {@link #getColumnKey columnKey}.
         * 
         * Can be used as input for subsequent actions.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColumnKey(sColumnKey: string): this;

        /**
            * Sets a new value for property {@link #getFormatSettings formatSettings}.
         * 
         * A JSON object containing the formatSettings which will be used to pass additional type/format settings for the entered value. if type==time or date or datetime the object will be used for the DateFormatter, TimeFormatter or DateTimeFormatter
         * 
         * * Below you can find a brief example *
         * 
         * ``
         * {
         * 		UTC: false,
         * 		style: "medium" //"short" or "long"
         * }
         * ``
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFormatSettings(oFormatSettings: {}): this;

        /**
            * Sets a new value for property {@link #getHref href}.
         * 
         * Defines href of a link.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHref(sHref: string): this;

        /**
            * Sets a new value for property {@link #getIsDefault isDefault}.
         * 
         * the column with isDefault==true will be used as the selected column item on the conditionPanel
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setIsDefault(bIsDefault: boolean): this;

        /**
            * Sets a new value for property {@link #getMaxLength maxLength}.
         * 
         * specifies the number of characters which can be entered in the value fields of the condition panel
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxLength(sMaxLength: string): this;

        /**
            * Sets a new value for property {@link #getPrecision precision}.
         * 
         * if type==numeric the precision will be used to format the entered value (maxIntegerDigits of the used Formatter)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPrecision(sPrecision: string): this;

        /**
            * Sets a new value for property {@link #getPress press}.
         * 
         * Defines press handler of a link.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPress(oPress: {}): this;

        /**
            * Sets a new value for property {@link #getRole role}.
         * 
         * Defines role. The role is reflected in the manner how the dimension will influence the chart layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setRole(sRole: string): this;

        /**
            * Sets a new value for property {@link #getScale scale}.
         * 
         * if type==numeric the scale will be used to format the entered value (maxFractionDigits of the used Formatter)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setScale(sScale: string): this;

        /**
            * Sets a new value for property {@link #getTarget target}.
         * 
         * Defines target of a link.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTarget(sTarget: string): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The text to be displayed for the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * data type of the column (text, numeric or date is supported)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `text`.
        */
        public setType(sType: string): this;

        /**
            * Sets a new value for property {@link #getValues values}.
         * 
         * the array of values for type bool. e.g. ["", "Off", "On"]. The first entry can be empty (used to blank the value field). Next value represent the false value, last entry the true value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValues(sValues: {}): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Defines visibility of column
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setVisible(bVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines column width
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: string): this;

    }
}