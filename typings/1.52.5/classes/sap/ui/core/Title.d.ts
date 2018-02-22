declare module 'sap/ui/core/Title' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface ITitleSettings extends IElementSettings {
        text?: string;
        icon?: sap.ui.core.URI;
        level?: sap.ui.core.TitleLevel;
        emphasized?: boolean;
    }

    /**
    
    */
    export class Title extends Element {

        /**
            * Constructor for a new Title.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITitleSettings);


        /**
            * Creates a new subclass of class sap.ui.core.Title with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getEmphasized emphasized}.
         * 
         * If set the title is displayed emphasized. This feature is nor supported by all controls using the Title.control.
         * 
         * Default value is `false`.
        */
        public getEmphasized(): boolean;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Defines the URL for icon display
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getLevel level}.
         * 
         * Defines the level of the title. If set to auto the level of the title is chosen by the control rendering the title.
         * 
         * Currently not all controls using the Title.control supporting this property.
         * 
         * Default value is `Auto`.
        */
        public getLevel(): sap.ui.core.TitleLevel;

        /**
            * Returns a metadata object for class sap.ui.core.Title.
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
            * Gets current value of property {@link #getText text}.
         * 
         * Defines the title text
        */
        public getText(): string;

        /**
            * Sets a new value for property {@link #getEmphasized emphasized}.
         * 
         * If set the title is displayed emphasized. This feature is nor supported by all controls using the Title.control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEmphasized(bEmphasized: boolean): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Defines the URL for icon display
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getLevel level}.
         * 
         * Defines the level of the title. If set to auto the level of the title is chosen by the control rendering the title.
         * 
         * Currently not all controls using the Title.control supporting this property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setLevel(sLevel: sap.ui.core.TitleLevel): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Defines the title text
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

    }
}