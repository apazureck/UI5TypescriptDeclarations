declare module 'sap/ui/layout/SplitterLayoutData' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { LayoutData, ILayoutDataSettings } from 'sap/ui/core/LayoutData';

    export interface ISplitterLayoutDataSettings extends ILayoutDataSettings {
        resizable?: boolean;
        size?: sap.ui.core.CSSSize;
        minSize?: number;
    }

    /**
    
    */
    export class SplitterLayoutData extends LayoutData {

        /**
            * Constructor for a new SplitterLayoutData.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISplitterLayoutDataSettings);


        /**
            * Creates a new subclass of class sap.ui.layout.SplitterLayoutData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
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
            * Returns a metadata object for class sap.ui.layout.SplitterLayoutData.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getMinSize minSize}.
         * 
         * Sets the minimum size of the splitter content in px.
         * 
         * Default value is `0`.
        */
        public getMinSize(): number;

        /**
            * Gets current value of property {@link #getResizable resizable}.
         * 
         * Determines whether the control in the splitter can be resized or not.
         * 
         * Default value is `true`.
        */
        public getResizable(): boolean;

        /**
            * Gets current value of property {@link #getSize size}.
         * 
         * Sets the size of the splitter content.
         * 
         * Default value is `auto`.
        */
        public getSize(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getMinSize minSize}.
         * 
         * Sets the minimum size of the splitter content in px.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMinSize(iMinSize: number): this;

        /**
            * Sets a new value for property {@link #getResizable resizable}.
         * 
         * Determines whether the control in the splitter can be resized or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setResizable(bResizable: boolean): this;

        /**
            * Sets a new value for property {@link #getSize size}.
         * 
         * Sets the size of the splitter content.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setSize(sSize: sap.ui.core.CSSSize): this;

    }
}