declare module 'sap/m/Popover' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Button } from 'sap/m/Button';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IPopoverSettings extends IControlSettings {
        placement?: sap.m.PlacementType;
        showHeader?: boolean;
        title?: string;
        modal?: boolean;
        offsetX?: number;
        offsetY?: number;
        showArrow?: boolean;
        contentWidth?: sap.ui.core.CSSSize;
        contentMinWidth?: sap.ui.core.CSSSize;
        contentHeight?: sap.ui.core.CSSSize;
        enableScrolling?: boolean;
        verticalScrolling?: boolean;
        horizontalScrolling?: boolean;
        bounce?: boolean;
        resizable?: boolean;
    }

    /**
    
    */
    export class Popover extends Control {

        /**
            * Constructor for a new Popover.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IPopoverSettings);


        /**
            * Hook called after adjusment of the Popover position.
        */
        protected _afterAdjustPositionAndArrowHook(): any;

        /**
            * If customHeader is set, this will return the customHeaer. Otherwise it creates a header and put the title and buttons if needed inside, and finally return this newly create header.
        */
        protected _getAnyHeader(): {};

        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterClose afterClose} event of this `sap.m.Popover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Popover` itself.
         * 
         * This event will be fired after the popover is closed.
        */
        attachAfterClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This refers to the control which opens the popover. */
            openBy: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterClose afterClose} event of this `sap.m.Popover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Popover` itself.
         * 
         * This event will be fired after the popover is closed.
        */
        attachAfterClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This refers to the control which opens the popover. */
            openBy: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.Popover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Popover` itself.
         * 
         * This event will be fired after the popover is opened.
        */
        attachAfterOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This refers to the control which opens the popover. */
            openBy: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.Popover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Popover` itself.
         * 
         * This event will be fired after the popover is opened.
        */
        attachAfterOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This refers to the control which opens the popover. */
            openBy: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.Popover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Popover` itself.
         * 
         * This event will be fired before the popover is closed.
        */
        attachBeforeClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This refers to the control which opens the popover. */
            openBy: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.Popover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Popover` itself.
         * 
         * This event will be fired before the popover is closed.
        */
        attachBeforeClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This refers to the control which opens the popover. */
            openBy: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.Popover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Popover` itself.
         * 
         * This event will be fired before the popover is opened.
        */
        attachBeforeOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This refers to the control which opens the popover. */
            openBy: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.Popover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Popover` itself.
         * 
         * This event will be fired before the popover is opened.
        */
        attachBeforeOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This refers to the control which opens the popover. */
            openBy: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Closes the popover when it's already opened.
        */
        public close(): this;

        /**
            * Destroys the beginButton in the aggregation {@link #getBeginButton beginButton}.
        */
        public destroyBeginButton(): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys the customHeader in the aggregation {@link #getCustomHeader customHeader}.
        */
        public destroyCustomHeader(): this;

        /**
            * Destroys the endButton in the aggregation {@link #getEndButton endButton}.
        */
        public destroyEndButton(): this;

        /**
            * Destroys the footer in the aggregation {@link #getFooter footer}.
        */
        public destroyFooter(): this;

        /**
            * Destroys the subHeader in the aggregation {@link #getSubHeader subHeader}.
        */
        public destroySubHeader(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterClose afterClose} event of this `sap.m.Popover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterOpen afterOpen} event of this `sap.m.Popover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeClose beforeClose} event of this `sap.m.Popover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeOpen beforeOpen} event of this `sap.m.Popover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Popover with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:afterClose afterClose} to attached listeners.
        */
        protected fireAfterClose(mParameters?: { openBy?: Control, }): this;

        /**
            * Fires event {@link #event:afterOpen afterOpen} to attached listeners.
        */
        protected fireAfterOpen(mParameters?: { openBy?: Control, }): this;

        /**
            * Fires event {@link #event:beforeClose beforeClose} to attached listeners.
        */
        protected fireBeforeClose(mParameters?: { openBy?: Control, }): this;

        /**
            * Fires event {@link #event:beforeOpen beforeOpen} to attached listeners.
        */
        protected fireBeforeOpen(mParameters?: { openBy?: Control, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets content of aggregation {@link #getBeginButton beginButton}.
         * 
         * BeginButton is shown at the left side (right side in RTL mode) inside the header. When showHeader is set to false, the property is ignored.
        */
        public getBeginButton(): Control;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content inside the popover.
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getContentHeight contentHeight}.
         * 
         * Set the height of the content area inside Popover. When controls which adapt their size to the parent control are added directly into Popover, for example sap.m.Page control, a size needs to be specified to the content area of the Popover. Otherwise, Popover control isn't able to display the content in the right way. This values isn't necessary for controls added to Popover directly which can decide their size by themselves, for exmaple sap.m.List, sap.m.Image etc., only needed for controls that adapt their size to the parent control.
        */
        public getContentHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getContentMinWidth contentMinWidth}.
         * 
         * Sets the minimum width of the content area inside popover.
         * 
         * Default value is ``.
        */
        public getContentMinWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getContentWidth contentWidth}.
         * 
         * Set the width of the content area inside Popover. When controls which adapt their size to the parent control are added directly into Popover, for example sap.m.Page control, a size needs to be specified to the content area of the Popover. Otherwise, Popover control isn't able to display the content in the right way. This values isn't necessary for controls added to Popover directly which can decide their size by themselves, for exmaple sap.m.List, sap.m.Image etc., only needed for controls that adapt their size to the parent control.
        */
        public getContentWidth(): sap.ui.core.CSSSize;

        /**
            * Gets content of aggregation {@link #getCustomHeader customHeader}.
         * 
         * Any control that needed to be displayed in the header area. When this is set, the showHeader property is ignored, and only this customHeader is shown on the top of popover.
        */
        public getCustomHeader(): Control;

        /**
            * Gets current value of property {@link #getEnableScrolling enableScrolling}.
         * 
         * This property is deprecated. Please use properties verticalScrolling and horizontalScrolling instead. If you still use this property it will be mapped on the new properties verticalScrolling and horizontalScrolling.
         * 
         * Default value is `true`.
        */
        public getEnableScrolling(): boolean;

        /**
            * Gets content of aggregation {@link #getEndButton endButton}.
         * 
         * EndButton is always shown at the right side (left side in RTL mode) inside the header. When showHeader is set to false, the property is ignored.
        */
        public getEndButton(): Control;

        /**
            * Gets content of aggregation {@link #getFooter footer}.
         * 
         * This is optional footer which is shown on the bottom of the popover.
        */
        public getFooter(): Control;

        /**
            * Gets current value of property {@link #getHorizontalScrolling horizontalScrolling}.
         * 
         * This property indicates if user can scroll horizontally inside popover when the content is bigger than the content area. However, when scrollable control (sap.m.ScrollContainer, sap.m.Page) is in the popover, this property needs to be set to false to disable the scrolling in popover in order to make the scrolling in the child control work properly. Popover detects if there's sap.m.NavContainer, sap.m.Page, or sap.m.ScrollContainer as direct child added to Popover. If there is, Popover will turn off scrolling by setting this property to false automatically ignoring the existing value of this property.
         * 
         * Default value is `true`.
        */
        public getHorizontalScrolling(): boolean;

        /**
            * ID of the element which is the current target of the association {@link #getInitialFocus initialFocus}, or `null`.
        */
        public getInitialFocus(): sap.ui.core.ID;

        /**
            * ID of the element which is the current target of the association {@link #getLeftButton leftButton}, or `null`.
        */
        public getLeftButton(): sap.ui.core.ID;

        /**
            * Returns a metadata object for class sap.m.Popover.
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
            * Gets current value of property {@link #getModal modal}.
         * 
         * If the popover will not be closed when tapping outside the popover. It also blocks any interaction with the background. The default value is false.
         * 
         * Default value is `false`.
        */
        public getModal(): boolean;

        /**
            * Gets current value of property {@link #getOffsetX offsetX}.
         * 
         * The offset for the popover placement in the x axis. It's with unit pixel.
         * 
         * Default value is `0`.
        */
        public getOffsetX(): number;

        /**
            * Gets current value of property {@link #getOffsetY offsetY}.
         * 
         * The offset for the popover placement in the y axis. It's with unit pixel.
         * 
         * Default value is `0`.
        */
        public getOffsetY(): number;

        /**
            * Gets current value of property {@link #getPlacement placement}.
         * 
         * This is the information about on which side will the popover be placed at. Possible values are sap.m.PlacementType.Left, sap.m.PlacementType.Right, sap.m.PlacementType.Top, sap.m.PlacementType.Bottom, sap.m.PlacementType.Horizontal, sap.m.PlacementType.HorizontalPreferredLeft, sap.m.PlacementType.HorizontalPreferredRight, sap.m.PlacementType.Vertical, sap.m.PlacementType.VerticalPreferredTop, sap.m.PlacementType.VerticalPreferredBottom, sap.m.PlacementType.Auto. The default value is sap.m.PlacementType.Right. Setting this property while popover is open won't cause any rerendering of the popover, but it will take effect when it's opened again.
         * 
         * Default value is `Right`.
        */
        public getPlacement(): sap.m.PlacementType;

        /**
            * Gets current value of property {@link #getResizable resizable}.
         * 
         * Whether resize option is enabled.
         * 
         * Default value is `false`.
        */
        public getResizable(): boolean;

        /**
            * ID of the element which is the current target of the association {@link #getRightButton rightButton}, or `null`.
        */
        public getRightButton(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getShowArrow showArrow}.
         * 
         * Whether Popover arrow should be visible
         * 
         * Default value is `true`.
        */
        public getShowArrow(): boolean;

        /**
            * Gets current value of property {@link #getShowHeader showHeader}.
         * 
         * If a header should be shown at the top of the popover.
         * 
         * Default value is `true`.
        */
        public getShowHeader(): boolean;

        /**
            * Gets content of aggregation {@link #getSubHeader subHeader}.
         * 
         * When subHeader is assigned to Popover, it's rendered directly after the main header if there is, or at the beginning of Popover when there's no main header. SubHeader is out of the content area and won't be scrolled when content's size is bigger than the content area's size.
        */
        public getSubHeader(): Control;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Title text appears in the header. This property will be ignored when showHeader is set to false.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getVerticalScrolling verticalScrolling}.
         * 
         * This property indicates if user can scroll vertically inside popover when the content is bigger than the content area. However, when scrollable control (sap.m.ScrollContainer, sap.m.Page) is in the popover, this property needs to be set to false to disable the scrolling in popover in order to make the scrolling in the child control work properly. Popover detects if there's sap.m.NavContainer, sap.m.Page, or sap.m.ScrollContainer as direct child added to Popover. If there is, Popover will turn off scrolling by setting this property to false automatically ignoring the existing value of this property.
         * 
         * Default value is `true`.
        */
        public getVerticalScrolling(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * The method checks if the Popover is open. It returns true when the Popover is currently open (this includes opening and closing animations), otherwise it returns false.
        */
        public isOpen(): boolean;

        /**
            * Opens the Popover and sets the Popover position according to the {@link #getPlacement() placement} property around the `oControl` parameter.
        */
        public openBy(oControl: {}, bSkipInstanceManager: boolean): this;

        /**
            * Calculate outerHeight of the element; used as hook for SVG elements
        */
        protected outerHeight(oElement: any, bIncludeMargin: boolean): any;

        /**
            * Calculate outerWidth of the element; used as hook for SVG elements
        */
        protected outerWidth(oElement: any, bIncludeMargin: boolean): number;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Sets the aggregated {@link #getBeginButton beginButton}.
        */
        public setBeginButton(oBeginButton: Control): this;

        /**
            * Setter for property `bounce`.
         * 
         * Default value is empty
        */
        protected setBounce(bBounce: boolean): this;

        /**
            * Sets a new value for property {@link #getContentHeight contentHeight}.
         * 
         * Set the height of the content area inside Popover. When controls which adapt their size to the parent control are added directly into Popover, for example sap.m.Page control, a size needs to be specified to the content area of the Popover. Otherwise, Popover control isn't able to display the content in the right way. This values isn't necessary for controls added to Popover directly which can decide their size by themselves, for exmaple sap.m.List, sap.m.Image etc., only needed for controls that adapt their size to the parent control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContentHeight(sContentHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getContentMinWidth contentMinWidth}.
         * 
         * Sets the minimum width of the content area inside popover.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setContentMinWidth(sContentMinWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getContentWidth contentWidth}.
         * 
         * Set the width of the content area inside Popover. When controls which adapt their size to the parent control are added directly into Popover, for example sap.m.Page control, a size needs to be specified to the content area of the Popover. Otherwise, Popover control isn't able to display the content in the right way. This values isn't necessary for controls added to Popover directly which can decide their size by themselves, for exmaple sap.m.List, sap.m.Image etc., only needed for controls that adapt their size to the parent control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContentWidth(sContentWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets the aggregated {@link #getCustomHeader customHeader}.
        */
        public setCustomHeader(oCustomHeader: Control): this;

        /**
            * Sets a new value for property {@link #getEnableScrolling enableScrolling}.
         * 
         * This property is deprecated. Please use properties verticalScrolling and horizontalScrolling instead. If you still use this property it will be mapped on the new properties verticalScrolling and horizontalScrolling.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableScrolling(bEnableScrolling: boolean): this;

        /**
            * Sets the aggregated {@link #getEndButton endButton}.
        */
        public setEndButton(oEndButton: Control): this;

        /**
            * The followOf feature closes the Popover when the position of the control that opened the Popover changes by at least 32 pixels (on desktop browsers). This may lead to unwanted closing of the Popover.
         * 
         * This function is for enabling/disabling the followOf feature.
        */
        protected setFollowOf(bValue: boolean): this;

        /**
            * Sets the aggregated {@link #getFooter footer}.
        */
        public setFooter(oFooter: Control): this;

        /**
            * Sets a new value for property {@link #getHorizontalScrolling horizontalScrolling}.
         * 
         * This property indicates if user can scroll horizontally inside popover when the content is bigger than the content area. However, when scrollable control (sap.m.ScrollContainer, sap.m.Page) is in the popover, this property needs to be set to false to disable the scrolling in popover in order to make the scrolling in the child control work properly. Popover detects if there's sap.m.NavContainer, sap.m.Page, or sap.m.ScrollContainer as direct child added to Popover. If there is, Popover will turn off scrolling by setting this property to false automatically ignoring the existing value of this property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setHorizontalScrolling(bHorizontalScrolling: boolean): this;

        /**
            * Sets the associated {@link #getInitialFocus initialFocus}.
        */
        public setInitialFocus(oInitialFocus: sap.ui.core.ID | Control): this;

        /**
            * Sets the associated {@link #getLeftButton leftButton}.
        */
        public setLeftButton(oLeftButton: sap.ui.core.ID | Button): this;

        /**
            * Setter for property `modal`. This overwrites the default setter of the property `modal` to avoid rerendering the whole popover control.
         * 
         * Default value is `false`
        */
        public setModal(bModal: boolean, sModalCSSClass?: string): this;

        /**
            * Sets a new value for property {@link #getOffsetX offsetX}.
         * 
         * The offset for the popover placement in the x axis. It's with unit pixel.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setOffsetX(iOffsetX: number): this;

        /**
            * Sets a new value for property {@link #getOffsetY offsetY}.
         * 
         * The offset for the popover placement in the y axis. It's with unit pixel.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setOffsetY(iOffsetY: number): this;

        /**
            * Set the placement of the Popover.
        */
        public setPlacement(sPlacement: sap.m.PlacementType): this;

        /**
            * Sets a new value for property {@link #getResizable resizable}.
         * 
         * Whether resize option is enabled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setResizable(bResizable: boolean): this;

        /**
            * Sets the associated {@link #getRightButton rightButton}.
        */
        public setRightButton(oRightButton: sap.ui.core.ID | Button): this;

        /**
            * Sets a new value for property {@link #getShowArrow showArrow}.
         * 
         * Whether Popover arrow should be visible
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowArrow(bShowArrow: boolean): this;

        /**
            * Sets a new value for property {@link #getShowHeader showHeader}.
         * 
         * If a header should be shown at the top of the popover.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowHeader(bShowHeader: boolean): this;

        /**
            * Sets the aggregated {@link #getSubHeader subHeader}.
        */
        public setSubHeader(oSubHeader: Control): this;

        /**
            * The setter of the title property.
         * 
         * If you want to show a header in the popover, don't forget to set the {@link #setShowHeader showHeader} property to true.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getVerticalScrolling verticalScrolling}.
         * 
         * This property indicates if user can scroll vertically inside popover when the content is bigger than the content area. However, when scrollable control (sap.m.ScrollContainer, sap.m.Page) is in the popover, this property needs to be set to false to disable the scrolling in popover in order to make the scrolling in the child control work properly. Popover detects if there's sap.m.NavContainer, sap.m.Page, or sap.m.ScrollContainer as direct child added to Popover. If there is, Popover will turn off scrolling by setting this property to false automatically ignoring the existing value of this property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVerticalScrolling(bVerticalScrolling: boolean): this;

    }
}