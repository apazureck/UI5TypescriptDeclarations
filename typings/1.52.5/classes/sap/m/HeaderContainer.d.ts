declare module 'sap/m/HeaderContainer' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IHeaderContainerSettings extends IControlSettings {
        scrollStep?: number;
        scrollTime?: number;
        showDividers?: boolean;
        orientation?: sap.ui.core.Orientation;
        backgroundDesign?: sap.m.BackgroundDesign;
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class HeaderContainer extends Control {

        /**
            * Constructor for the new HeaderContainer control.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IHeaderContainerSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.m.HeaderContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Specifies the background color of the content. The visualization of the different options depends on the used theme.
         * 
         * Default value is `Transparent`.
        */
        public getBackgroundDesign(): sap.m.BackgroundDesign;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Content to add to HeaderContainer.
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The height of the whole HeaderContainer. If not specified, it is rendered as 'auto' in horizontal orientation and as '100%' in vertical orientation.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.m.HeaderContainer.
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
            * Gets current value of property {@link #getOrientation orientation}.
         * 
         * The orientation of the HeaderContainer. There are two orientation modes: horizontal and vertical. In horizontal mode the content controls are displayed next to each other, in vertical mode the content controls are displayed on top of each other.
         * 
         * Default value is `Horizontal`.
        */
        public getOrientation(): sap.ui.core.Orientation;

        /**
            * Gets current value of property {@link #getScrollStep scrollStep}.
         * 
         * Number of pixels to scroll when the user chooses Next or Previous buttons. Relevant only for desktop.
         * 
         * Default value is `300`.
        */
        public getScrollStep(): number;

        /**
            * Gets current value of property {@link #getScrollTime scrollTime}.
         * 
         * Scroll animation time in milliseconds.
         * 
         * Default value is `500`.
        */
        public getScrollTime(): number;

        /**
            * Gets current value of property {@link #getShowDividers showDividers}.
         * 
         * If set to true, it shows dividers between the different content controls.
         * 
         * Default value is `true`.
        */
        public getShowDividers(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width of the whole HeaderContainer. If not specified, it is rendered as '100%' in horizontal orientation and as 'auto' in vertical orientation.
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
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Specifies the background color of the content. The visualization of the different options depends on the used theme.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Transparent`.
        */
        public setBackgroundDesign(sBackgroundDesign: sap.m.BackgroundDesign): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The height of the whole HeaderContainer. If not specified, it is rendered as 'auto' in horizontal orientation and as '100%' in vertical orientation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getOrientation orientation}.
         * 
         * The orientation of the HeaderContainer. There are two orientation modes: horizontal and vertical. In horizontal mode the content controls are displayed next to each other, in vertical mode the content controls are displayed on top of each other.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Horizontal`.
        */
        public setOrientation(sOrientation: sap.ui.core.Orientation): this;

        /**
            * Sets a new value for property {@link #getScrollStep scrollStep}.
         * 
         * Number of pixels to scroll when the user chooses Next or Previous buttons. Relevant only for desktop.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `300`.
        */
        public setScrollStep(iScrollStep: number): this;

        /**
            * Sets a new value for property {@link #getScrollTime scrollTime}.
         * 
         * Scroll animation time in milliseconds.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `500`.
        */
        public setScrollTime(iScrollTime: number): this;

        /**
            * Sets a new value for property {@link #getShowDividers showDividers}.
         * 
         * If set to true, it shows dividers between the different content controls.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowDividers(bShowDividers: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The width of the whole HeaderContainer. If not specified, it is rendered as '100%' in horizontal orientation and as 'auto' in vertical orientation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}