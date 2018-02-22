declare module 'sap/m/ObjectNumber' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IObjectNumberSettings extends IControlSettings {
        number?: string;
        numberUnit?: string;
        emphasized?: boolean;
        state?: sap.ui.core.ValueState;
        unit?: string;
        textDirection?: sap.ui.core.TextDirection;
        textAlign?: sap.ui.core.TextAlign;
    }

    /**
    
    */
    export class ObjectNumber extends Control {

        /**
            * Constructor for a new ObjectNumber.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IObjectNumberSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Creates a new subclass of class sap.m.ObjectNumber with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Gets current value of property {@link #getEmphasized emphasized}.
         * 
         * Indicates if the object number should appear emphasized.
         * 
         * Default value is `true`.
        */
        public getEmphasized(): boolean;

        /**
            * Returns a metadata object for class sap.m.ObjectNumber.
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
            * Gets current value of property {@link #getNumber number}.
         * 
         * Defines the number field.
        */
        public getNumber(): string;

        /**
            * Gets current value of property {@link #getNumberUnit numberUnit}.
         * 
         * Defines the number units qualifier.
        */
        public getNumberUnit(): string;

        /**
            * Gets current value of property {@link #getState state}.
         * 
         * Determines the object number's value state. Setting this state will cause the number to be rendered in state-specific colors (only blue-crystal theme).
         * 
         * Default value is `None`.
        */
        public getState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getTextAlign textAlign}.
         * 
         * Sets the horizontal alignment of the number and unit.
         * 
         * Default value is `Begin`.
        */
        public getTextAlign(): sap.ui.core.TextAlign;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Available options for the number and unit text direction are LTR(left-to-right) and RTL(right-to-left). By default, the control inherits the text direction from its parent control.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getUnit unit}.
         * 
         * Defines the number units qualifier. If numberUnit and unit are both set, the unit value is used.
        */
        public getUnit(): string;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getEmphasized emphasized}.
         * 
         * Indicates if the object number should appear emphasized.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEmphasized(bEmphasized: boolean): this;

        /**
            * Sets a new value for property {@link #getNumber number}.
         * 
         * Defines the number field.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNumber(sNumber: string): this;

        /**
            * Sets a new value for property {@link #getNumberUnit numberUnit}.
         * 
         * Defines the number units qualifier.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNumberUnit(sNumberUnit: string): this;

        /**
            * Sets the ObjectNumber's value state.
        */
        public setState(sState: sap.ui.core.ValueState): this;

        /**
            * Sets the text alignment of the control without re-rendering the whole ObjectNumber.
        */
        public setTextAlign(sAlign: sap.ui.core.TextAlign): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Available options for the number and unit text direction are LTR(left-to-right) and RTL(right-to-left). By default, the control inherits the text direction from its parent control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getUnit unit}.
         * 
         * Defines the number units qualifier. If numberUnit and unit are both set, the unit value is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setUnit(sUnit: string): this;

    }
}