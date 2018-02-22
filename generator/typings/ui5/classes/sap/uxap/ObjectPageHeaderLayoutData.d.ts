declare module 'sap/uxap/ObjectPageHeaderLayoutData' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { LayoutData, ILayoutDataSettings } from 'sap/ui/core/LayoutData';

    export interface IObjectPageHeaderLayoutDataSettings extends ILayoutDataSettings {
        visibleS?: boolean;
        visibleM?: boolean;
        visibleL?: boolean;
        showSeparatorBefore?: boolean;
        showSeparatorAfter?: boolean;
        width?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class ObjectPageHeaderLayoutData extends LayoutData {

        /**
            * Constructor for a new ObjectPageHeaderLayoutData.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IObjectPageHeaderLayoutDataSettings);


        /**
            * Creates a new subclass of class sap.uxap.ObjectPageHeaderLayoutData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Returns a metadata object for class sap.uxap.ObjectPageHeaderLayoutData.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getShowSeparatorAfter showSeparatorAfter}.
         * 
         * If this property is set the control will display a separator after it.
         * 
         * Default value is `false`.
        */
        public getShowSeparatorAfter(): boolean;

        /**
            * Gets current value of property {@link #getShowSeparatorBefore showSeparatorBefore}.
         * 
         * If this property is set the control will display a separator before it.
         * 
         * Default value is `false`.
        */
        public getShowSeparatorBefore(): boolean;

        /**
            * Gets current value of property {@link #getVisibleL visibleL}.
         * 
         * If this property is set the control will be visible (or not) in a large sized layout.
         * 
         * Default value is `true`.
        */
        public getVisibleL(): boolean;

        /**
            * Gets current value of property {@link #getVisibleM visibleM}.
         * 
         * If this property is set the control will be visible (or not) in a medium sized layout.
         * 
         * Default value is `true`.
        */
        public getVisibleM(): boolean;

        /**
            * Gets current value of property {@link #getVisibleS visibleS}.
         * 
         * If this property is set the control will be visible (or not) in a small sized layout.
         * 
         * Default value is `true`.
        */
        public getVisibleS(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * If this property is set the control will take the provided size.
         * 
         * Default value is `auto`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getShowSeparatorAfter showSeparatorAfter}.
         * 
         * If this property is set the control will display a separator after it.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowSeparatorAfter(bShowSeparatorAfter: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSeparatorBefore showSeparatorBefore}.
         * 
         * If this property is set the control will display a separator before it.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowSeparatorBefore(bShowSeparatorBefore: boolean): this;

        /**
            * Sets a new value for property {@link #getVisibleL visibleL}.
         * 
         * If this property is set the control will be visible (or not) in a large sized layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleL(bVisibleL: boolean): this;

        /**
            * Sets a new value for property {@link #getVisibleM visibleM}.
         * 
         * If this property is set the control will be visible (or not) in a medium sized layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleM(bVisibleM: boolean): this;

        /**
            * Sets a new value for property {@link #getVisibleS visibleS}.
         * 
         * If this property is set the control will be visible (or not) in a small sized layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleS(bVisibleS: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * If this property is set the control will take the provided size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}