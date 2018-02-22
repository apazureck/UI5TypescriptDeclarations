declare module 'sap/ui/commons/layout/BorderLayoutArea' {
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IBorderLayoutAreaSettings extends IElementSettings {
        areaId?: sap.ui.commons.layout.BorderLayoutAreaTypes;
        overflowX?: string;
        overflowY?: string;
        contentAlign?: string;
        size?: sap.ui.core.CSSSize;
        visible?: boolean;
    }

    /**
    
    */
    export class BorderLayoutArea extends Element {

        /**
            * Constructor for a new layout/BorderLayoutArea.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IBorderLayoutAreaSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.layout.BorderLayoutArea with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getAreaId areaId}.
         * 
         * Defines which area the element represents: top, begin, center, end, bottom
         * 
         * Default value is `top`.
        */
        public getAreaId(): sap.ui.commons.layout.BorderLayoutAreaTypes;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Controls within the area
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getContentAlign contentAlign}.
         * 
         * The content alignment as CSS value
         * 
         * Default value is `left`.
        */
        public getContentAlign(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.layout.BorderLayoutArea.
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
            * Gets current value of property {@link #getOverflowX overflowX}.
         * 
         * The overflow mode of the area in horizontal direction as CSS value
         * 
         * Default value is `auto`.
        */
        public getOverflowX(): string;

        /**
            * Gets current value of property {@link #getOverflowY overflowY}.
         * 
         * The overflow mode of the area in vertical direction as CSS value
         * 
         * Default value is `auto`.
        */
        public getOverflowY(): string;

        /**
            * Gets current value of property {@link #getSize size}.
         * 
         * Defines the height or the width. Is not used when the area element is in Center.
         * 
         * Default value is `100px`.
        */
        public getSize(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Invisible controls are not rendered
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getAreaId areaId}.
         * 
         * Defines which area the element represents: top, begin, center, end, bottom
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `top`.
        */
        public setAreaId(sAreaId: sap.ui.commons.layout.BorderLayoutAreaTypes): this;

        /**
            * Sets a new value for property {@link #getContentAlign contentAlign}.
         * 
         * The content alignment as CSS value
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `left`.
        */
        public setContentAlign(sContentAlign: string): this;

        /**
            * Sets a new value for property {@link #getOverflowX overflowX}.
         * 
         * The overflow mode of the area in horizontal direction as CSS value
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setOverflowX(sOverflowX: string): this;

        /**
            * Sets a new value for property {@link #getOverflowY overflowY}.
         * 
         * The overflow mode of the area in vertical direction as CSS value
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setOverflowY(sOverflowY: string): this;

        /**
            * Sets a new value for property {@link #getSize size}.
         * 
         * Defines the height or the width. Is not used when the area element is in Center.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100px`.
        */
        public setSize(sSize: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Invisible controls are not rendered
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }
}