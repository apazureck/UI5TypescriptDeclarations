declare module 'sap/m/TimePicker' {
    import { Event } from 'sap/ui/base/Event';
    import { MaskInputRule } from 'sap/m/MaskInputRule';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { TooltipBase } from 'sap/ui/core/TooltipBase';
    import { DateTimeField, IDateTimeFieldSettings } from 'sap/m/DateTimeField';

    export interface ITimePickerSettings extends IDateTimeFieldSettings {
        localeId?: string;
        title?: string;
        minutesStep?: number;
        secondsStep?: number;
        placeholderSymbol?: string;
        mask?: string;
    }

    /**
    
    */
    export class TimePicker extends DateTimeField {

        /**
            * Constructor for a new `TimePicker`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITimePickerSettings);


        /**
            * Adds some rule to the aggregation {@link #getRules rules}.
        */
        public addRule(oRule: MaskInputRule): this;

        /**
            * Destroys all the rules in the aggregation {@link #getRules rules}.
        */
        public destroyRules(): this;

        /**
            * Creates a new subclass of class sap.m.TimePicker with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.DateTimeField.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires change event to attached listeners.
         * 
         * Expects following event parameters:  * value parameter of type `string` - the new value of the input * valid parameter of type `boolean` - indicator for a valid time 
        */
        protected fireChange(mArguments?: any): this;

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { value?: string, }): this;

        /**
            * Fires the change event for the listeners
        */
        protected fireChangeEvent(sValue: string, oParams?: {}): any;

        /**
            
        */
        protected getAccessibilityInfo(): any | {};

        /**
            * This function (if available on the concrete control) provides the current accessibility state of the control.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should implement this hook to provide any necessary accessibility information:
         * 
         * `MyControl.prototype.getAccessibilityInfo = function() {
         *    return {
         *      role: "textbox",      // String which represents the WAI-ARIA role which is implemented by the control.
         *      type: "date input",   // String which represents the control type (Must be a translated text). Might correlate with
         *                            // the role.
         *      description: "value", // String which describes the most relevant control state (e.g. the inputs value). Must be a
         *                            // translated text.
         *                            // Note: The type and the enabled/editable state must not be handled here.
         *      focusable: true,      // Boolean which describes whether the control can get the focus.
         *      enabled: true,        // Boolean which describes whether the control is enabled. If not relevant it must not be set or
         *                            // `null` can be provided.
         *      editable: true,       // Boolean which describes whether the control is editable. If not relevant it must not be set or
         *                            // `null` can be provided.
         *      children: []          // Aggregations of the given control (e.g. when the control is a layout). Primitive aggregations will be ignored.
         *                            // Note: Children should only be provided when it is helpful to understand the accessibility context
         *                            //       (e.g. a form control must not provide details of its internals (fields, labels, ...) but a
         *                            //       layout should).
         *    };
         * };`
         * 
         * Note: The returned object provides the accessibility state of the control at the point in time when this function is called.
        */
        protected getAccessibilityInfo(): {};

        /**
            
        */
        protected getAccessibilityInfo(): {} | any;

        /**
            * Holds a reference to a JavaScript Date Object. The `value` (string) property will be set according to it. Alternatively, if the `value` and `valueFormat` pair properties are supplied instead, the `dateValue` will be instantiated according to the parsed `value`.
        */
        public getDateValue(): {};

        /**
            * Determines the format, displayed in the input field and the picker sliders.
         * 
         * The default value is the browser's medium time format locale setting {@link sap.ui.core.LocaleData#getTimePattern}. If data binding with type {@link sap.ui.model.type.Time} or {@link sap.ui.model.odata.type.Time} is used for the `value` property, the `displayFormat` property is ignored as the information is provided from the binding itself.
        */
        public getDisplayFormat(): string;

        /**
            * Gets current value of property {@link #getLocaleId localeId}.
         * 
         * Defines the locale used to parse string values representing time.
         * 
         * Determines the locale, used to interpret the string, supplied by the `value` property. Example: AM in the string "09:04 AM" is locale (language) dependent. The format comes from the browser language settings if not set explicitly. Used in combination with 12 hour `valueFormat` containing 'a', which stands for day period string. Default value is taken from browser's locale setting.
        */
        public getLocaleId(): string;

        /**
            * Gets current value of property {@link #getMask mask}.
         * 
         * Mask defined by its characters type (respectively, by its length). You should consider the following important facts: 1. The mask characters normally correspond to an existing rule (one rule per unique char). Characters which don't, are considered immutable characters (for example, the mask '2099', where '9' corresponds to a rule for digits, has the characters '2' and '0' as immutable). 2. Adding a rule corresponding to the `placeholderSymbol` is not recommended and would lead to an unpredictable behavior. 3. You can use the special escape character '^' called "Caret" prepending a rule character to make it immutable. Use the double escape '^^' if you want to make use of the escape character as an immutable one.
        */
        public getMask(): string;

        /**
            * Returns a metadata object for class sap.m.TimePicker.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Gets current value of property {@link #getMinutesStep minutesStep}.
         * 
         * Sets the minutes slider step. The minutes slider is populated only by multiples of the step.
         * 
         * Default value is `1`.
        */
        public getMinutesStep(): number;

        /**
            * Gets current value of property {@link #getPlaceholderSymbol placeholderSymbol}.
         * 
         * Defines a placeholder symbol. Shown at the position where there is no user input yet.
         * 
         * Default value is `_`.
        */
        public getPlaceholderSymbol(): string;

        /**
            * Gets content of aggregation {@link #getRules rules}.
         * 
         * A list of validation rules (one rule per mask character).
        */
        public getRules(): {};

        /**
            * Gets current value of property {@link #getSecondsStep secondsStep}.
         * 
         * Sets the seconds slider step. The seconds slider is populated only by multiples of the step.
         * 
         * Default value is `1`.
        */
        public getSecondsStep(): number;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Displays the text of the general picker label and is read by screen readers. It is visible only on phone.
        */
        public getTitle(): string;

        /**
            * Determines the format of the value property.
         * 
         * The default value is the browser's medium time format locale setting {@link sap.ui.core.LocaleData#getTimePattern}. If data binding with type {@link sap.ui.model.type.Time} or {@link sap.ui.model.odata.type.Time} is used for the `value` property, the `valueFormat` property is ignored as the information is provided from the binding itself.
        */
        public getValueFormat(): string;

        /**
            * Checks for the provided `sap.m.MaskInputRule` in the aggregation {@link #getRules rules}. and returns its index if found or -1 otherwise.
        */
        public indexOfRule(oRule: MaskInputRule): number;

        /**
            * Initializes the control.
        */
        protected init(): any;

        /**
            * Initializes the element instance after creation.
         * 
         * Applications must not call this hook method directly, it is called by the framework while the constructor of an element is executed.
         * 
         * Subclasses of Element should override this hook to implement any necessary initialization.
        */
        protected init(): any;

        /**
            * Inserts a rule into the aggregation {@link #getRules rules}.
        */
        public insertRule(oRule: MaskInputRule, iIndex: number): this;

        /**
            * Called after the picker closes.
        */
        public onAfterClose(): any;

        /**
            * Called after the picker appears.
        */
        public onAfterOpen(): any;

        /**
            * Called before the picker appears.
        */
        public onBeforeOpen(): any;

        /**
            * Removes all the controls from the aggregation {@link #getRules rules}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllRules(): {};

        /**
            * Removes a rule from the aggregation {@link #getRules rules}.
        */
        public removeRule(vRule: number | string | MaskInputRule): MaskInputRule;

        /**
            * Sets the locale of the control.
         * 
         * Used for parsing and formatting the time values in languages different than English. Necessary for translation and auto-complete of the day periods, such as AM and PM.
        */
        public setLocaleId(sLocaleId: string): this;

        /**
            * Sets a new value for property {@link #getMask mask}.
         * 
         * Mask defined by its characters type (respectively, by its length). You should consider the following important facts: 1. The mask characters normally correspond to an existing rule (one rule per unique char). Characters which don't, are considered immutable characters (for example, the mask '2099', where '9' corresponds to a rule for digits, has the characters '2' and '0' as immutable). 2. Adding a rule corresponding to the `placeholderSymbol` is not recommended and would lead to an unpredictable behavior. 3. You can use the special escape character '^' called "Caret" prepending a rule character to make it immutable. Use the double escape '^^' if you want to make use of the escape character as an immutable one.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMask(sMask: string): this;

        /**
            * Sets the minutes slider step.
        */
        public setMinutesStep(step: number): any;

        /**
            * Sets a new value for property {@link #getPlaceholderSymbol placeholderSymbol}.
         * 
         * Defines a placeholder symbol. Shown at the position where there is no user input yet.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `_`.
        */
        public setPlaceholderSymbol(sPlaceholderSymbol: string): this;

        /**
            * Sets the seconds slider step.
        */
        public setSecondsStep(step: number): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Displays the text of the general picker label and is read by screen readers. It is visible only on phone.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
         * 
         * If a new tooltip is set, any previously set tooltip is deactivated.
        */
        public setTooltip(vTooltip: string | TooltipBase): any;

        /**
            * Sets tooltip of the control.
        */
        public setTooltip(vTooltip: string | TooltipBase): this;

    }
}