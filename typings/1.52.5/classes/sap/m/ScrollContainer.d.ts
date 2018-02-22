declare module 'sap/m/ScrollContainer' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element } from 'sap/ui/core/Element';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IScrollContainerSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        horizontal?: boolean;
        vertical?: boolean;
        focusable?: boolean;
    }

    /**
    
    */
    export class ScrollContainer extends Control {

        /**
            * Constructor for a new ScrollContainer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IScrollContainerSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.m.ScrollContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content of the ScrollContainer.
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getFocusable focusable}.
         * 
         * Whether the scroll container can be focused.
         * 
         * Note that it should be set to "true" when there are no focusable elements inside or when keyboard interaction requires an additional tab stop on the container.
         * 
         * Default value is `false`.
        */
        public getFocusable(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The height of the ScrollContainer. By default the height equals the content height. If only horizontal scrolling is used, do not set the height or make sure the height is always larger than the height of the content.
         * 
         * Note that when a percentage is given, for the height to work as expected, the height of the surrounding container must be defined.
         * 
         * Default value is `auto`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getHorizontal horizontal}.
         * 
         * Whether horizontal scrolling should be possible.
         * 
         * Default value is `true`.
        */
        public getHorizontal(): boolean;

        /**
            * Returns a metadata object for class sap.m.ScrollContainer.
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
            * Gets current value of property {@link #getVertical vertical}.
         * 
         * Whether vertical scrolling should be possible.
         * 
         * Note that this is off by default because typically a Page is used as fullscreen element which can handle vertical scrolling. If this is not the case and vertical scrolling is required, this flag needs to be set to "true". Important: it is not supported to have nested controls that both enable scrolling into the same dimension.
         * 
         * Default value is `false`.
        */
        public getVertical(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width of the ScrollContainer. If not set, it consumes the complete available width, behaving like normal HTML block elements. If only vertical scrolling is enabled, make sure the content always fits or wraps.
         * 
         * Default value is `auto`.
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
            * Scrolls to the given position. When called while the control is not rendered (yet), the scrolling position is still applied, but there is no animation.
        */
        public scrollTo(x: number, y: number, time: number): this;

        /**
            * Scrolls to an element(DOM or sap.ui.core.Element) within the page if the element is rendered.
        */
        public scrollToElement(element: any | Element, time?: number): this;

        /**
            * Sets a new value for property {@link #getFocusable focusable}.
         * 
         * Whether the scroll container can be focused.
         * 
         * Note that it should be set to "true" when there are no focusable elements inside or when keyboard interaction requires an additional tab stop on the container.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFocusable(bFocusable: boolean): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The height of the ScrollContainer. By default the height equals the content height. If only horizontal scrolling is used, do not set the height or make sure the height is always larger than the height of the content.
         * 
         * Note that when a percentage is given, for the height to work as expected, the height of the surrounding container must be defined.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getHorizontal horizontal}.
         * 
         * Whether horizontal scrolling should be possible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setHorizontal(bHorizontal: boolean): this;

        /**
            * Sets a new value for property {@link #getVertical vertical}.
         * 
         * Whether vertical scrolling should be possible.
         * 
         * Note that this is off by default because typically a Page is used as fullscreen element which can handle vertical scrolling. If this is not the case and vertical scrolling is required, this flag needs to be set to "true". Important: it is not supported to have nested controls that both enable scrolling into the same dimension.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setVertical(bVertical: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The width of the ScrollContainer. If not set, it consumes the complete available width, behaving like normal HTML block elements. If only vertical scrolling is enabled, make sure the content always fits or wraps.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}