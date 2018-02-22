declare module 'sap/ui/commons/layout/BorderLayout' {
    import { BorderLayoutArea } from 'sap/ui/commons/layout/BorderLayoutArea';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IBorderLayoutSettings extends IControlSettings {
        rtl?: boolean;
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class BorderLayout extends Control {

        /**
            * Constructor for a new layout/BorderLayout.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IBorderLayoutSettings);


        /**
            * Adds controls to the specified area.
        */
        public addContent(sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes): this;

        /**
            * Creates the specified area and adds the given controls to it. Returns the created area.
        */
        public createArea(sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes, oContent: Control): BorderLayoutArea;

        /**
            * Destroys the begin in the aggregation {@link #getBegin begin}.
        */
        public destroyBegin(): this;

        /**
            * Destroys the bottom in the aggregation {@link #getBottom bottom}.
        */
        public destroyBottom(): this;

        /**
            * Destroys the center in the aggregation {@link #getCenter center}.
        */
        public destroyCenter(): this;

        /**
            * Destroys the content of the specified area.
        */
        public destroyContent(sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes): this;

        /**
            * Destroys the end in the aggregation {@link #getEnd end}.
        */
        public destroyEnd(): this;

        /**
            * Destroys the top in the aggregation {@link #getTop top}.
        */
        public destroyTop(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.layout.BorderLayout with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the area of the given type. If the area does not exist, it will be created when create is set to true.
        */
        public getArea(sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes, bCreate: boolean): BorderLayoutArea;

        /**
            * Returns the object of the specified area. If the area does not exist, the area will be created and returned.
        */
        public getAreaById(sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes): BorderLayoutArea;

        /**
            * Returns a JSON-like object that contains all property values of the requested area.
        */
        public getAreaData(sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes): {};

        /**
            * Gets content of aggregation {@link #getBegin begin}.
         * 
         * Represents the Begin area
        */
        public getBegin(): BorderLayoutArea;

        /**
            * Gets content of aggregation {@link #getBottom bottom}.
         * 
         * Represents the Bottom area
        */
        public getBottom(): BorderLayoutArea;

        /**
            * Gets content of aggregation {@link #getCenter center}.
         * 
         * Represents the Center area
        */
        public getCenter(): BorderLayoutArea;

        /**
            * Returns all controls inside the specified area inside an array.
        */
        public getContent(sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes): {};

        /**
            * Gets content of aggregation {@link #getEnd end}.
         * 
         * Represents the End area
        */
        public getEnd(): BorderLayoutArea;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Defines the overall height of the layout
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.commons.layout.BorderLayout.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Gets current value of property {@link #getRtl rtl}.
         * 
         * The RTL setting swaps the areas Begin and End. Since version 1.5.2, this property is deprecated and ignored as it conflicts with the central configuration for the page.
         * 
         * Default value is `false`.
        */
        public getRtl(): boolean;

        /**
            * Gets content of aggregation {@link #getTop top}.
         * 
         * Represents the Top area
        */
        public getTop(): BorderLayoutArea;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the overall width of the layout
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Determines the index of a given content control.
        */
        public indexOfContent(sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes, oContent: Control): number;

        /**
            * Inserts controls to an area at a given index.
        */
        public insertContent(sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes, iIndex: number): this;

        /**
            * Removes all content from an area.
        */
        public removeAllContent(sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes): this;

        /**
            * Removes the content with the given index from an area.
        */
        public removeContent(oAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes, vElement: any): this;

        /**
            * Sets the properties of the specified area with the given values.
        */
        public setAreaData(sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes, oData: {}): this;

        /**
            * Sets the aggregated {@link #getBegin begin}.
        */
        public setBegin(oBegin: BorderLayoutArea): this;

        /**
            * Sets the aggregated {@link #getBottom bottom}.
        */
        public setBottom(oBottom: BorderLayoutArea): this;

        /**
            * Sets the aggregated {@link #getCenter center}.
        */
        public setCenter(oCenter: BorderLayoutArea): this;

        /**
            * Sets the aggregated {@link #getEnd end}.
        */
        public setEnd(oEnd: BorderLayoutArea): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Defines the overall height of the layout
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getRtl rtl}.
         * 
         * The RTL setting swaps the areas Begin and End. Since version 1.5.2, this property is deprecated and ignored as it conflicts with the central configuration for the page.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setRtl(bRtl: boolean): this;

        /**
            * Sets the aggregated {@link #getTop top}.
        */
        public setTop(oTop: BorderLayoutArea): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the overall width of the layout
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}