declare module 'sap/ui/commons/Carousel' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ICarouselSettings extends IControlSettings {
        orientation?: sap.ui.commons.enums.Orientation;
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        defaultItemHeight?: number;
        defaultItemWidth?: number;
        animationDuration?: number;
        visibleItems?: number;
        handleSize?: number;
        firstVisibleIndex?: number;
    }

    /**
    
    */
    export class Carousel extends Control {

        /**
            * Constructor for a new Carousel.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ICarouselSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Binds aggregation {@link #getContent content} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindContent(oBindingInfo: {}): this;

        /**
            * Calculates and sets the size of the carousel, its items and its buttons
        */
        public calculateAndSetSize(): any;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.Carousel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getAnimationDuration animationDuration}.
         * 
         * Duration for animation when navigating through the contents of the Carousel
         * 
         * Default value is `500`.
        */
        public getAnimationDuration(): number;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Controls which are displayed inside the Carousel
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getDefaultItemHeight defaultItemHeight}.
         * 
         * Default height of the item in a carousel if no height can be determined
         * 
         * Default value is `150`.
        */
        public getDefaultItemHeight(): number;

        /**
            * Gets current value of property {@link #getDefaultItemWidth defaultItemWidth}.
         * 
         * Default width of the item in a carousel if no height can be determined
         * 
         * Default value is `150`.
        */
        public getDefaultItemWidth(): number;

        /**
            * Gets current value of property {@link #getFirstVisibleIndex firstVisibleIndex}.
         * 
         * The index of the element in the content aggreation which is displayed first on rendering
         * 
         * Default value is `0`.
        */
        public getFirstVisibleIndex(): number;

        /**
            * Returns the focused DOM element
        */
        protected getFocusDomRef(): any;

        /**
            * Returns the DOM Element that should get the focus.
         * 
         * To be overwritten by the specific control method.
        */
        protected getFocusDomRef(): any;

        /**
            * Gets current value of property {@link #getHandleSize handleSize}.
         * 
         * Determines the size of the handle in pixels. (Height for vertical carousel, width for horizontal carousel)
         * 
         * Default value is `22`.
        */
        public getHandleSize(): number;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Determines the height of the Carousel
        */
        public getHeight(): sap.ui.core.CSSSize;

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
            * Returns a metadata object for class sap.ui.commons.Carousel.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getOrientation orientation}.
         * 
         * Determines the orientation of the Carousel. Can be either "horizontal" or "vertical"
         * 
         * Default value is `horizontal`.
        */
        public getOrientation(): sap.ui.commons.enums.Orientation;

        /**
            * Gets current value of property {@link #getVisibleItems visibleItems}.
         * 
         * If defined, the carousel displays the number of items defined. Items will be resized to fit the area.
        */
        public getVisibleItems(): number;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Determines the width of the Carousel
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * If the device supports touch gestures and left swipe is triggered shows the next carousel item
        */
        public onswipeleft(oEvent: jQuery.Event): any;

        /**
            * If the device supports touch gestures and right swipe is triggered shows the previous carousel item
        */
        public onswiperight(oEvent: jQuery.Event): any;

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
            * Sets a new value for property {@link #getAnimationDuration animationDuration}.
         * 
         * Duration for animation when navigating through the contents of the Carousel
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `500`.
        */
        public setAnimationDuration(iAnimationDuration: number): this;

        /**
            * Sets a new value for property {@link #getDefaultItemHeight defaultItemHeight}.
         * 
         * Default height of the item in a carousel if no height can be determined
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `150`.
        */
        public setDefaultItemHeight(iDefaultItemHeight: number): this;

        /**
            * Sets a new value for property {@link #getDefaultItemWidth defaultItemWidth}.
         * 
         * Default width of the item in a carousel if no height can be determined
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `150`.
        */
        public setDefaultItemWidth(iDefaultItemWidth: number): this;

        /**
            * Setter for property `firstVisibleIndex`.
         * 
         * Default value is `0`
        */
        public setFirstVisibleIndex(iFirstVisibleIndex: number): this;

        /**
            * Sets a new value for property {@link #getHandleSize handleSize}.
         * 
         * Determines the size of the handle in pixels. (Height for vertical carousel, width for horizontal carousel)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `22`.
        */
        public setHandleSize(iHandleSize: number): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Determines the height of the Carousel
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getOrientation orientation}.
         * 
         * Determines the orientation of the Carousel. Can be either "horizontal" or "vertical"
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `horizontal`.
        */
        public setOrientation(sOrientation: sap.ui.commons.enums.Orientation): this;

        /**
            * Sets a new value for property {@link #getVisibleItems visibleItems}.
         * 
         * If defined, the carousel displays the number of items defined. Items will be resized to fit the area.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setVisibleItems(iVisibleItems: number): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Determines the width of the Carousel
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Shows the element with the specified Id. This can be only used after the component is rendered.
        */
        public showElementWithId(sElementId: string): any;

        /**
            * Shows the next item in carousel. This can be only used after the component is rendered.
        */
        public showNext(): any;

        /**
            * Shows the previous item in carousel. This can be only used after the component is rendered.
        */
        public showPrevious(): any;

        /**
            * Unbinds aggregation {@link #getContent content} from model data.
        */
        public unbindContent(): this;

    }
}