declare module 'sap/m/ObjectStatus' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IObjectStatusSettings extends IControlSettings {
        title?: string;
        text?: string;
        state?: sap.ui.core.ValueState;
        icon?: sap.ui.core.URI;
        iconDensityAware?: boolean;
        textDirection?: sap.ui.core.TextDirection;
    }

    /**
    
    */
    export class ObjectStatus extends Control {

        /**
            * Constructor for a new ObjectStatus.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IObjectStatusSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Creates a new subclass of class sap.m.ObjectStatus with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            
        */
        protected getAccessibilityInfo(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Icon URI. This may be either an icon font or image path.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If bandwidth is key for the application, set this value to false.
         * 
         * Default value is `true`.
        */
        public getIconDensityAware(): boolean;

        /**
            * Returns a metadata object for class sap.m.ObjectStatus.
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
            * Gets current value of property {@link #getState state}.
         * 
         * Defines the text value state.
         * 
         * Default value is `None`.
        */
        public getState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Defines the ObjectStatus text.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Determines the direction of the text, not including the title. Available options for the text direction are LTR (left-to-right) and RTL (right-to-left). By default the control inherits the text direction from its parent control.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the ObjectStatus title.
        */
        public getTitle(): string;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Icon URI. This may be either an icon font or image path.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If bandwidth is key for the application, set this value to false.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconDensityAware(bIconDensityAware: boolean): this;

        /**
            * Sets a new value for property {@link #getState state}.
         * 
         * Defines the text value state.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setState(sState: sap.ui.core.ValueState): this;

        /**
            * Sets the text. The default value is empty/undefined.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Determines the direction of the text, not including the title. Available options for the text direction are LTR (left-to-right) and RTL (right-to-left). By default the control inherits the text direction from its parent control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets the title. The default value is empty/undefined.
        */
        public setTitle(sTitle: string): this;

    }
}