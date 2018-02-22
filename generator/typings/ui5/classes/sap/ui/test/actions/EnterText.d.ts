declare module 'sap/ui/test/actions/EnterText' {
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Action, IActionSettings } from 'sap/ui/test/actions/Action';

    export interface IEnterTextSettings extends IActionSettings {
        text?: string;
        clearTextFirst?: boolean;
    }

    export class EnterText extends Action {


        /**
            * Sets focus on given control and triggers Multiple keyboard events on it, one event for every character in the text. Logs an error if control has no focusable dom ref or is not visible.
        */
        protected executeOn(oControl: Control): any;

        /**
            * Checks if the matcher is matching - will get an instance of sap.ui.core.Control as parameter Should be overwritten by subclasses
        */
        protected executeOn(element: Control): any;

        /**
            * Creates a new subclass of class sap.ui.test.actions.EnterText with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.test.actions.Action.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getClearTextFirst clearTextFirst}.
         * 
         * Default value is `true`.
        */
        public getClearTextFirst(): boolean;

        /**
            * Returns a metadata object for class sap.ui.test.actions.EnterText.
        */
        public static getMetadata(): Metadata | any;

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
            * Gets current value of property {@link #getText text}.
         * 
         * The Text that is going to be typed to the control. If you are entering an empty string, the value will be cleared.
        */
        public getText(): string;

        /**
            * Sets a new value for property {@link #getClearTextFirst clearTextFirst}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setClearTextFirst(bClearTextFirst: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The Text that is going to be typed to the control. If you are entering an empty string, the value will be cleared.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

    }
}