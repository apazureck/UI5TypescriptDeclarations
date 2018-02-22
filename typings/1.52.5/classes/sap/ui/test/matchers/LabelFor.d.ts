declare module 'sap/ui/test/matchers/LabelFor' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control } from 'sap/ui/core/Control';
    import { Matcher, IMatcherSettings } from 'sap/ui/test/matchers/Matcher';

    export interface ILabelForSettings extends IMatcherSettings {
        text?: string;
        modelName?: string;
        key?: string;
        parameters?: any;
        propertyName?: string;
    }

    /**
    
    */
    export class LabelFor extends Matcher {


        /**
            * Creates a new subclass of class sap.ui.test.matchers.LabelFor with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.test.matchers.Matcher.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getKey key}.
         * 
         * The key of the I18N text in the containing {@link jQuery.sap.util.ResourceBundle}.
        */
        public getKey(): string;

        /**
            * Returns a metadata object for class sap.ui.test.matchers.LabelFor.
        */
        public static getMetadata(): Metadata | any;

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
            * Gets current value of property {@link #getModelName modelName}.
         * 
         * The name of the {@link sap.ui.model.resource.ResourceModel} assigned to the control.
         * 
         * Default value is `i18n`.
        */
        public getModelName(): string;

        /**
            * Gets current value of property {@link #getParameters parameters}.
         * 
         * The parameters for replacing the placeholders of the I18N text. See {@link jQuery.sap.util.ResourceBundle#getText}.
        */
        public getParameters(): any;

        /**
            * Gets current value of property {@link #getPropertyName propertyName}.
         * 
         * The name of the control property to match the I18N text with.
         * 
         * Default value is `text`.
        */
        public getPropertyName(): string;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * The text of the {@link sap.m.Label} which have the labelFor property.
        */
        public getText(): string;

        /**
            * Checks for control with labelFor property annotating other control
        */
        protected isMatching(oControl: Control): boolean;

        /**
            * Checks if the matcher is matching - will get an instance of sap.ui.core.Control as parameter.
         * 
         * Should be overwritten by subclasses
        */
        protected isMatching(oControl: Control): boolean;

        /**
            * Sets a new value for property {@link #getKey key}.
         * 
         * The key of the I18N text in the containing {@link jQuery.sap.util.ResourceBundle}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setKey(sKey: string): this;

        /**
            * Sets a new value for property {@link #getModelName modelName}.
         * 
         * The name of the {@link sap.ui.model.resource.ResourceModel} assigned to the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `i18n`.
        */
        public setModelName(sModelName: string): this;

        /**
            * Sets a new value for property {@link #getParameters parameters}.
         * 
         * The parameters for replacing the placeholders of the I18N text. See {@link jQuery.sap.util.ResourceBundle#getText}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setParameters(oParameters: any): this;

        /**
            * Sets a new value for property {@link #getPropertyName propertyName}.
         * 
         * The name of the control property to match the I18N text with.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `text`.
        */
        public setPropertyName(sPropertyName: string): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The text of the {@link sap.m.Label} which have the labelFor property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

    }
}