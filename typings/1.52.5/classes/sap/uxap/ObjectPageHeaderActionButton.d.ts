declare module 'sap/uxap/ObjectPageHeaderActionButton' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Button, IButtonSettings } from 'sap/m/Button';

    export interface IObjectPageHeaderActionButtonSettings extends IButtonSettings {
        hideText?: boolean;
        hideIcon?: boolean;
        importance?: sap.uxap.Importance;
    }

    /**
    
    */
    export class ObjectPageHeaderActionButton extends Button {

        /**
            * Constructor for a new ObjectPageHeaderActionButton.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IObjectPageHeaderActionButtonSettings);


        /**
            * Creates a new subclass of class sap.uxap.ObjectPageHeaderActionButton with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Button.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getHideIcon hideIcon}.
         * 
         * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
         * 
         * Default value is `false`.
        */
        public getHideIcon(): boolean;

        /**
            * Gets current value of property {@link #getHideText hideText}.
         * 
         * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
         * 
         * Default value is `true`.
        */
        public getHideText(): boolean;

        /**
            * Gets current value of property {@link #getImportance importance}.
         * 
         * Determines the order in which the button overflows.
         * 
         * Default value is `High`.
        */
        public getImportance(): sap.uxap.Importance;

        /**
            * Returns a metadata object for class sap.uxap.ObjectPageHeaderActionButton.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Sets a new value for property {@link #getHideIcon hideIcon}.
         * 
         * Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setHideIcon(bHideIcon: boolean): this;

        /**
            * Sets a new value for property {@link #getHideText hideText}.
         * 
         * Hide the button text when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setHideText(bHideText: boolean): this;

        /**
            * Sets a new value for property {@link #getImportance importance}.
         * 
         * Determines the order in which the button overflows.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `High`.
        */
        public setImportance(sImportance: sap.uxap.Importance): this;

    }
}