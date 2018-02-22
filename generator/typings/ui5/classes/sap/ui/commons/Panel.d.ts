declare module 'sap/ui/commons/Panel' {
    import { Button } from 'sap/ui/commons/Button';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Title } from 'sap/ui/core/Title';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IPanelSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        enabled?: boolean;
        scrollLeft?: number;
        scrollTop?: number;
        applyContentPadding?: boolean;
        collapsed?: boolean;
        areaDesign?: sap.ui.commons.enums.AreaDesign;
        borderDesign?: sap.ui.commons.enums.BorderDesign;
        showCollapseIcon?: boolean;
        text?: string;
    }

    /**
    
    */
    export class Panel extends Control {

        /**
            * Constructor for a new Panel.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IPanelSettings);


        /**
            * Adds some button to the aggregation {@link #getButtons buttons}.
        */
        public addButton(oButton: Button): this;

        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
        */
        public destroyButtons(): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys the title in the aggregation {@link #getTitle title}.
        */
        public destroyTitle(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.Panel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getApplyContentPadding applyContentPadding}.
         * 
         * Determines whether the Panel will have padding. Padding is theme-dependent.
         * 
         * Default value is `true`.
        */
        public getApplyContentPadding(): boolean;

        /**
            * Gets current value of property {@link #getAreaDesign areaDesign}.
         * 
         * Determines the background color. Note that color settings are theme-dependent.
         * 
         * Default value is `Fill`.
        */
        public getAreaDesign(): sap.ui.commons.enums.AreaDesign;

        /**
            * Gets current value of property {@link #getBorderDesign borderDesign}.
         * 
         * Determines if the Panel can have a box as border. Note that displaying borders is theme-dependent.
         * 
         * Default value is `Box`.
        */
        public getBorderDesign(): sap.ui.commons.enums.BorderDesign;

        /**
            * Gets content of aggregation {@link #getButtons buttons}.
         * 
         * The buttons that shall be displayed in the Panel header
        */
        public getButtons(): {};

        /**
            * Gets current value of property {@link #getCollapsed collapsed}.
         * 
         * Determines whether the Panel will be initially collapsed. When it is initially collapsed, the contents are not rendered. A collapsed Panel consumes less space than an expanded one.
         * 
         * Default value is `false`.
        */
        public getCollapsed(): boolean;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Aggregates the controls that are contained in the Panel. It is recommended to use a layout control as single direct child. When the Panel dimensions are set, the child control may have width and height of 100%. When the dimensions are not set, the child defines the size of the Panel.
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Represents the state of the of the Panel (enabled or disabled)
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            
        */
        protected getFocusInfo(): any | {};

        /**
            * Returns an object representing the serialized focus information To be overwritten by the specific control method
        */
        protected getFocusInfo(): {};

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Determines the height of the Panel in CSS size. Per default, the height for the Panel is automatically adjusted to the content. Dimension allows to explicitly specify the height.
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
            * Returns a metadata object for class sap.ui.commons.Panel.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the scroll position of the panel in pixels from the left. Returns 0 if not rendered yet. Also internally updates the control property.
        */
        public getScrollLeft(): number;

        /**
            * Returns the scroll position of the panel in pixels from the top. Returns 0 if not rendered yet. Also internally updates the control property.
        */
        public getScrollTop(): number;

        /**
            * Gets current value of property {@link #getShowCollapseIcon showCollapseIcon}.
         * 
         * Determines whether the Panel will have an icon for collapsing/expanding, or not.
         * 
         * Default value is `true`.
        */
        public getShowCollapseIcon(): boolean;

        /**
            * Returns the text that is rendered in the Panel header. If a Title control was used it returns the text of the Title control.
        */
        public getText(): string;

        /**
            * Gets content of aggregation {@link #getTitle title}.
         * 
         * Aggregates the title element of the Panel. For text titles only, you alternatively could use setText() which also creates a title in the background.
        */
        public getTitle(): Title;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Determines the width of the Panel in CSS size.
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.commons.Button` in the aggregation {@link #getButtons buttons}. and returns its index if found or -1 otherwise.
        */
        public indexOfButton(oButton: Button): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Inserts a button into the aggregation {@link #getButtons buttons}.
        */
        public insertButton(oButton: Button, iIndex: number): this;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getButtons buttons}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllButtons(): {};

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes a button from the aggregation {@link #getButtons buttons}.
        */
        public removeButton(vButton: number | string | Button): Button;

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Property setter for the padding
        */
        public setApplyContentPadding(bPadding: boolean): this;

        /**
            * Sets a new value for property {@link #getAreaDesign areaDesign}.
         * 
         * Determines the background color. Note that color settings are theme-dependent.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Fill`.
        */
        public setAreaDesign(sAreaDesign: sap.ui.commons.enums.AreaDesign): this;

        /**
            * Sets a new value for property {@link #getBorderDesign borderDesign}.
         * 
         * Determines if the Panel can have a box as border. Note that displaying borders is theme-dependent.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Box`.
        */
        public setBorderDesign(sBorderDesign: sap.ui.commons.enums.BorderDesign): this;

        /**
            * Property setter for the "collapsed" state
        */
        public setCollapsed(bCollapsed: boolean): this;

        /**
            * Sets the dimensions of the panel.
        */
        public setDimensions(sWidth: sap.ui.core.CSSSize, sHeight: sap.ui.core.CSSSize): this;

        /**
            * Property setter for the "enabled" state
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets the height of the panel.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets the scroll position of the panel in pixels from the left.
        */
        public setScrollLeft(iPosition: number): this;

        /**
            * Sets the scrolls position of the panel in pixels from the top.
        */
        public setScrollTop(iPosition: number): this;

        /**
            * Sets a new value for property {@link #getShowCollapseIcon showCollapseIcon}.
         * 
         * Determines whether the Panel will have an icon for collapsing/expanding, or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowCollapseIcon(bShowCollapseIcon: boolean): this;

        /**
            * Sets the text that will be rendered in the Panel header.
        */
        public setText(sText: string): this;

        /**
            * Sets a Tille control that will be rendered in the Panel header.
        */
        public setTitle(oTitle: Title): this;

        /**
            * Sets the width of the panel.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}