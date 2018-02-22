declare module 'sap/ui/core/InvisibleText' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { TooltipBase } from 'sap/ui/core/TooltipBase';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IInvisibleTextSettings extends IControlSettings {
        text?: string;
    }

    /**
    
    */
    export class InvisibleText extends Control {

        /**
            * Constructor for a new InvisibleText.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IInvisibleTextSettings);


        /**
            * Creates a new subclass of class sap.ui.core.InvisibleText with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.InvisibleText.
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
            * Gets current value of property {@link #getText text}.
         * 
         * The text of the InvisibleText.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            
        */
        public setBusy(): this;

        /**
            
        */
        public setBusyIndicatorDelay(): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The text of the InvisibleText.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

        /**
            
        */
        public setTooltip(): this;

        /**
            * Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
         * 
         * If a new tooltip is set, any previously set tooltip is deactivated.
        */
        public setTooltip(vTooltip: string | TooltipBase): any;

        /**
            
        */
        public setVisible(): this;

        /**
            * Adds `this` control into the static, hidden area UI area container.
        */
        public toStatic(): this;

    }
}