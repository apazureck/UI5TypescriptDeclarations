declare module 'sap/m/ToggleButton' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Button, IButtonSettings } from 'sap/m/Button';

    export interface IToggleButtonSettings extends IButtonSettings {
        pressed?: boolean;
    }

    /**
    
    */
    export class ToggleButton extends Button {

        /**
            * Constructor for a new `ToggleButton`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IToggleButtonSettings);


        /**
            * Creates a new subclass of class sap.m.ToggleButton with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Button.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            
        */
        protected getAccessibilityInfo(): {};

        /**
            * Returns a metadata object for class sap.m.ToggleButton.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Gets current value of property {@link #getPressed pressed}.
         * 
         * The property is “true” when the control is toggled. The default state of this property is "false".
         * 
         * Default value is `false`.
        */
        public getPressed(): boolean;

        /**
            * Sets a new value for property {@link #getPressed pressed}.
         * 
         * The property is “true” when the control is toggled. The default state of this property is "false".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setPressed(bPressed: boolean): this;

    }
}