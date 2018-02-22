declare module 'sap/m/ToolbarLayoutData' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { LayoutData, ILayoutDataSettings } from 'sap/ui/core/LayoutData';

    export interface IToolbarLayoutDataSettings extends ILayoutDataSettings {
        shrinkable?: boolean;
        minWidth?: sap.ui.core.CSSSize;
        maxWidth?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class ToolbarLayoutData extends LayoutData {

        /**
            * Constructor for a new `ToolbarLayoutData`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IToolbarLayoutDataSettings);


        /**
            * Creates a new subclass of class sap.m.ToolbarLayoutData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getMaxWidth maxWidth}.
         * 
         * Sets the maximum width of the toolbar item.
        */
        public getMaxWidth(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.m.ToolbarLayoutData.
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
            * Gets current value of property {@link #getMinWidth minWidth}.
         * 
         * Sets the minimum width of the toolbar item.
        */
        public getMinWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getShrinkable shrinkable}.
         * 
         * Determines whether the control, when in a toolbar, is shrinkable or not. For controls with fixed width (100px, 5rem, etc...) this property is ignored.
         * 
         * Note: Nested layout controls should not be shrinkable.
         * 
         * Default value is `false`.
        */
        public getShrinkable(): boolean;

        /**
            * Sets a new value for property {@link #getMaxWidth maxWidth}.
         * 
         * Sets the maximum width of the toolbar item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxWidth(sMaxWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getMinWidth minWidth}.
         * 
         * Sets the minimum width of the toolbar item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMinWidth(sMinWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getShrinkable shrinkable}.
         * 
         * Determines whether the control, when in a toolbar, is shrinkable or not. For controls with fixed width (100px, 5rem, etc...) this property is ignored.
         * 
         * Note: Nested layout controls should not be shrinkable.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShrinkable(bShrinkable: boolean): this;

    }
}