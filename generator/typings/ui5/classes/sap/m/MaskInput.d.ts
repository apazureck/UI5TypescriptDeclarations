declare module 'sap/m/MaskInput' {
    import { MaskInputRule } from 'sap/m/MaskInputRule';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { InputBase, IInputBaseSettings } from 'sap/m/InputBase';

    export interface IMaskInputSettings extends IInputBaseSettings {
        placeholderSymbol?: string;
        mask?: string;
    }

    /**
    
    */
    export class MaskInput extends InputBase {

        /**
            * Constructor for a new MaskInput.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMaskInputSettings);


        /**
            * Adds some rule to the aggregation {@link #getRules rules}.
        */
        public addRule(oRule: MaskInputRule): this;

        /**
            * Destroys all the rules in the aggregation {@link #getRules rules}.
        */
        public destroyRules(): this;

        /**
            * Creates a new subclass of class sap.m.MaskInput with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.InputBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getMask mask}.
         * 
         * Mask defined by its characters type (respectively, by its length). You should consider the following important facts: 1. The mask characters normally correspond to an existing rule (one rule per unique char). Characters which don't, are considered immutable characters (for example, the mask '2099', where '9' corresponds to a rule for digits, has the characters '2' and '0' as immutable). 2. Adding a rule corresponding to the `placeholderSymbol` is not recommended and would lead to an unpredictable behavior. 3. You can use the special escape character '^' called "Caret" prepending a rule character to make it immutable. Use the double escape '^^' if you want to make use of the escape character as an immutable one.
        */
        public getMask(): string;

        /**
            * Returns a metadata object for class sap.m.MaskInput.
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
            * Checks for the provided `sap.m.MaskInputRule` in the aggregation {@link #getRules rules}. and returns its index if found or -1 otherwise.
        */
        public indexOfRule(oRule: MaskInputRule): number;

        /**
            * Inserts a rule into the aggregation {@link #getRules rules}.
        */
        public insertRule(oRule: MaskInputRule, iIndex: number): this;

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
            * Sets a new value for property {@link #getMask mask}.
         * 
         * Mask defined by its characters type (respectively, by its length). You should consider the following important facts: 1. The mask characters normally correspond to an existing rule (one rule per unique char). Characters which don't, are considered immutable characters (for example, the mask '2099', where '9' corresponds to a rule for digits, has the characters '2' and '0' as immutable). 2. Adding a rule corresponding to the `placeholderSymbol` is not recommended and would lead to an unpredictable behavior. 3. You can use the special escape character '^' called "Caret" prepending a rule character to make it immutable. Use the double escape '^^' if you want to make use of the escape character as an immutable one.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMask(sMask: string): this;

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

    }
}