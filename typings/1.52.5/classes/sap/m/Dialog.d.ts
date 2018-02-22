declare module 'sap/m/Dialog' {
    import { Event } from 'sap/ui/base/Event';
    import { Button } from 'sap/m/Button';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IDialogSettings extends IControlSettings {
        icon?: sap.ui.core.URI;
        title?: string;
        showHeader?: boolean;
        type?: sap.m.DialogType;
        state?: sap.ui.core.ValueState;
        stretchOnPhone?: boolean;
        stretch?: boolean;
        contentWidth?: sap.ui.core.CSSSize;
        contentHeight?: sap.ui.core.CSSSize;
        horizontalScrolling?: boolean;
        verticalScrolling?: boolean;
        resizable?: boolean;
        draggable?: boolean;
        escapeHandler?: any;
    }

    /**
    
    */
    export class Dialog extends Control {

        /**
            * Constructor for a new Dialog.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDialogSettings);


        /**
            * Returns the custom header instance when the customHeader aggregation is set. Otherwise it returns the internal managed header instance. This method can be called within composite controls which use sap.m.Dialog inside.
        */
        protected _getAnyHeader(): any;

        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some button to the aggregation {@link #getButtons buttons}.
        */
        public addButton(oButton: Button): this;

        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterClose afterClose} event of this `sap.m.Dialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Dialog` itself.
         * 
         * This event will be fired after the dialog is closed.
        */
        attachAfterClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null. */
            origin: Button,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterClose afterClose} event of this `sap.m.Dialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Dialog` itself.
         * 
         * This event will be fired after the dialog is closed.
        */
        attachAfterClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null. */
            origin: Button,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.Dialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Dialog` itself.
         * 
         * This event will be fired after the dialog is opened.
        */
        attachAfterOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.Dialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Dialog` itself.
         * 
         * This event will be fired after the dialog is opened.
        */
        attachAfterOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.Dialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Dialog` itself.
         * 
         * This event will be fired before the dialog is closed.
        */
        attachBeforeClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null. */
            origin: Button,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.Dialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Dialog` itself.
         * 
         * This event will be fired before the dialog is closed.
        */
        attachBeforeClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This indicates the trigger of closing the dialog. If dialog is closed by either leftButton or rightButton, the button that closes the dialog is set to this parameter. Otherwise this parameter is set to null. */
            origin: Button,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.Dialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Dialog` itself.
         * 
         * This event will be fired before the dialog is opened.
        */
        attachBeforeOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.Dialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Dialog` itself.
         * 
         * This event will be fired before the dialog is opened.
        */
        attachBeforeOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Close the dialog.
        */
        public close(): any;

        /**
            * Destroys the beginButton in the aggregation {@link #getBeginButton beginButton}.
        */
        public destroyBeginButton(): this;

        /**
            * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
        */
        public destroyButtons(): this;

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
            * Destroys the subHeader in the aggregation {@link #getSubHeader subHeader}.
        */
        public destroySubHeader(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterClose afterClose} event of this `sap.m.Dialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterOpen afterOpen} event of this `sap.m.Dialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeClose beforeClose} event of this `sap.m.Dialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeOpen beforeOpen} event of this `sap.m.Dialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Dialog with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:afterClose afterClose} to attached listeners.
        */
        protected fireAfterClose(mParameters?: { origin?: Button, }): this;

        /**
            * Fires event {@link #event:afterOpen afterOpen} to attached listeners.
        */
        protected fireAfterOpen(mParameters?: {}): this;

        /**
            * Fires event {@link #event:beforeClose beforeClose} to attached listeners.
        */
        protected fireBeforeClose(mParameters?: { origin?: Button, }): this;

        /**
            * Fires event {@link #event:beforeOpen beforeOpen} to attached listeners.
        */
        protected fireBeforeOpen(mParameters?: {}): this;

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
         * The button which is rendered to the left side (right side in RTL mode) of the endButton in the footer area inside the dialog. From UI5 version 1.21.1, there's a new aggregation "buttons" created with which more than 2 buttons can be added to the footer area of dialog. If the new "buttons" aggregation is set, any change made to this aggregation has no effect anymore. When runs on the phone, this button (and the endButton together when set) is (are) rendered at the center of the footer area. When runs on the other platforms, this button (and the endButton together when set) is (are) rendered at the right side (left side in RTL mode) of the footer area.
        */
        public getBeginButton(): Button;

        /**
            * Gets content of aggregation {@link #getButtons buttons}.
         * 
         * Buttons can be added to the footer area of dialog through this aggregation. When this aggregation is set, any change to beginButton and endButton has no effect anymore. Buttons which are inside this aggregation are aligned at the right side (left side in RTL mode) of the footer instead of in the middle of the footer.
        */
        public getButtons(): {};

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content inside the dialog.
         * ** Note: ** When the content of the `Dialog` is comprised of controls that use `position: absolute`, such as `SplitContainer`, the dialog has to have either `stretch: true` or `contentHeight` set.
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getContentHeight contentHeight}.
         * 
         * Preferred height of content in Dialog. If the preferred height is bigger than the available space on screen, it will be overwritten by the maximum available height on screen in order to make sure that dialog isn't cut off.
        */
        public getContentHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getContentWidth contentWidth}.
         * 
         * Preferred width of content in Dialog. This property affects the width of dialog on phone in landscape mode, tablet or desktop, because the dialog has a fixed width on phone in portrait mode. If the preferred width is less than the minimum width of dilaog or more than the available width of the screen, it will be overwritten by the min or max value. The current mininum value of dialog width on tablet is 400px.
        */
        public getContentWidth(): sap.ui.core.CSSSize;

        /**
            * Gets content of aggregation {@link #getCustomHeader customHeader}.
         * 
         * CustomHeader is only supported in some themes. When it's set, the icon, title and showHeader are properties ignored. Only the customHeader is shown as the header of the dialog.
        */
        public getCustomHeader(): sap.m.IBar;

        /**
            * Gets current value of property {@link #getDraggable draggable}.
         * 
         * Indicates whether the dialog is draggable. If this property is set to true, the dialog will be draggable by it's header. This property has a default value false. The Dialog can be draggable only in desktop mode.
         * 
         * Default value is `false`.
        */
        public getDraggable(): boolean;

        /**
            * Gets content of aggregation {@link #getEndButton endButton}.
         * 
         * The button which is rendered to the right side (left side in RTL mode) of the beginButton in the footer area inside the dialog. From UI5 version 1.21.1, there's a new aggregation "buttons" created with which more than 2 buttons can be added to the footer area of dialog. If the new "buttons" aggregation is set, any change made to this aggregation has no effect anymore. When runs on the phone, this button (and the beginButton together when set) is (are) rendered at the center of the footer area. When runs on the other platforms, this button (and the beginButton together when set) is (are) rendered at the right side (left side in RTL mode) of the footer area.
        */
        public getEndButton(): Button;

        /**
            * Gets current value of property {@link #getEscapeHandler escapeHandler}.
         * 
         * This property expects a function with one parameter of type `Promise`. In the function you should call either `resolve()` or `reject()` on the `Promise` object.
         *  The function allows you to define custom behaviour which will be executed when the ESCAPE key is pressed. By default when the ESCAPE key is pressed the Dialog is immediately closed.
        */
        public getEscapeHandler(): any;

        /**
            * Gets current value of property {@link #getHorizontalScrolling horizontalScrolling}.
         * 
         * Indicates if user can scroll horizontally inside dialog when the content is bigger than the content area. Dialog detects if there's sap.m.NavContainer, sap.m.Page, sap.m.ScrollContainer or sap.m.SplitContainer as direct child added to dialog. If there is, dialog will turn off scrolling by setting this property to false automatically ignoring the existing value of this property.
         * 
         * Default value is `true`.
        */
        public getHorizontalScrolling(): boolean;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Icon displayed in the dialog's header. This icon is invisible on the iOS platform and it's density aware. You can use the density convention (@2, @1.5, etc.) to provide higher resolution image for higher density screen.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * ID of the element which is the current target of the association {@link #getInitialFocus initialFocus}, or `null`.
        */
        public getInitialFocus(): sap.ui.core.ID;

        /**
            * ID of the element which is the current target of the association {@link #getLeftButton leftButton}, or `null`.
        */
        public getLeftButton(): sap.ui.core.ID;

        /**
            * Returns a metadata object for class sap.m.Dialog.
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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getResizable resizable}.
         * 
         * Indicates whether the dialog is resizable. the dialog is resizable. If this property is set to true, the dialog will have a resize handler in it's bottom right corner. This property has a default value false. The Dialog can be resizable only in desktop mode.
         * 
         * Default value is `false`.
        */
        public getResizable(): boolean;

        /**
            * ID of the element which is the current target of the association {@link #getRightButton rightButton}, or `null`.
        */
        public getRightButton(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getShowHeader showHeader}.
         * 
         * Determines whether the header is shown inside the dialog. If this property is set to true, the text and icon property are ignored. This property has a default value true.
         * 
         * Default value is `true`.
        */
        public getShowHeader(): boolean;

        /**
            * Gets current value of property {@link #getState state}.
         * 
         * The state affects the icon and the title color. If other than "None" is set, a predefined icon will be added to the dialog. Setting icon property will overwrite the predefined icon. The default value is "None" which doesn't add any icon to the Dialog control. This property is by now only supported by blue crystal theme.
         * 
         * Default value is `None`.
        */
        public getState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getStretch stretch}.
         * 
         * Determines if the dialog will be stretched to full screen. This property is only applicable to standard dialog and message type dialog ignores this property.
         * 
         * Default value is `false`.
        */
        public getStretch(): boolean;

        /**
            * Gets current value of property {@link #getStretchOnPhone stretchOnPhone}.
         * 
         * Determines whether the dialog will displayed on full screen on a phone.
         * 
         * Default value is `false`.
        */
        public getStretchOnPhone(): boolean;

        /**
            * Gets content of aggregation {@link #getSubHeader subHeader}.
         * 
         * When subHeader is assigned to Dialog, it's rendered directly after the main header in Dialog. SubHeader is out of the content area and won't be scrolled when content's size is bigger than the content area's size.
        */
        public getSubHeader(): sap.m.IBar;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Title text appears in the dialog header.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * The type of the dialog. In some themes, the type "message" will limit the dialog's width within 480px on tablet and desktop.
         * 
         * Default value is `Standard`.
        */
        public getType(): sap.m.DialogType;

        /**
            * Gets current value of property {@link #getVerticalScrolling verticalScrolling}.
         * 
         * Indicates if user can scroll vertically inside dialog when the content is bigger than the content area. Dialog detects if there's sap.m.NavContainer, sap.m.Page, sap.m.ScrollContainer or sap.m.SplitContainer as direct child added to dialog. If there is, dialog will turn off scrolling by setting this property to false automatically ignoring the existing value of this property.
         * 
         * Default value is `true`.
        */
        public getVerticalScrolling(): boolean;

        /**
            * Checks for the provided `sap.m.Button` in the aggregation {@link #getButtons buttons}. and returns its index if found or -1 otherwise.
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
            * The method checks if the Dialog is open. It returns true when the Dialog is currently open (this includes opening and closing animations), otherwise it returns false.
        */
        public isOpen(): any;

        /**
            * Open the dialog.
        */
        public open(): any;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

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
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a button from the aggregation {@link #getButtons buttons}.
        */
        public removeButton(vButton: number | string | Button): Button;

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Sets the aggregated {@link #getBeginButton beginButton}.
        */
        public setBeginButton(oBeginButton: Button): this;

        /**
            * Sets a new value for property {@link #getContentHeight contentHeight}.
         * 
         * Preferred height of content in Dialog. If the preferred height is bigger than the available space on screen, it will be overwritten by the maximum available height on screen in order to make sure that dialog isn't cut off.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContentHeight(sContentHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getContentWidth contentWidth}.
         * 
         * Preferred width of content in Dialog. This property affects the width of dialog on phone in landscape mode, tablet or desktop, because the dialog has a fixed width on phone in portrait mode. If the preferred width is less than the minimum width of dilaog or more than the available width of the screen, it will be overwritten by the min or max value. The current mininum value of dialog width on tablet is 400px.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContentWidth(sContentWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets the aggregated {@link #getCustomHeader customHeader}.
        */
        public setCustomHeader(oCustomHeader: sap.m.IBar): this;

        /**
            * Sets a new value for property {@link #getDraggable draggable}.
         * 
         * Indicates whether the dialog is draggable. If this property is set to true, the dialog will be draggable by it's header. This property has a default value false. The Dialog can be draggable only in desktop mode.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDraggable(bDraggable: boolean): this;

        /**
            * Sets the aggregated {@link #getEndButton endButton}.
        */
        public setEndButton(oEndButton: Button): this;

        /**
            * Sets a new value for property {@link #getEscapeHandler escapeHandler}.
         * 
         * This property expects a function with one parameter of type `Promise`. In the function you should call either `resolve()` or `reject()` on the `Promise` object.
         *  The function allows you to define custom behaviour which will be executed when the ESCAPE key is pressed. By default when the ESCAPE key is pressed the Dialog is immediately closed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setEscapeHandler(oEscapeHandler: any): this;

        /**
            * Sets a new value for property {@link #getHorizontalScrolling horizontalScrolling}.
         * 
         * Indicates if user can scroll horizontally inside dialog when the content is bigger than the content area. Dialog detects if there's sap.m.NavContainer, sap.m.Page, sap.m.ScrollContainer or sap.m.SplitContainer as direct child added to dialog. If there is, dialog will turn off scrolling by setting this property to false automatically ignoring the existing value of this property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setHorizontalScrolling(bHorizontalScrolling: boolean): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Icon displayed in the dialog's header. This icon is invisible on the iOS platform and it's density aware. You can use the density convention (@2, @1.5, etc.) to provide higher resolution image for higher density screen.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets the associated {@link #getInitialFocus initialFocus}.
        */
        public setInitialFocus(oInitialFocus: sap.ui.core.ID | Control): this;

        /**
            * Sets the associated {@link #getLeftButton leftButton}.
        */
        public setLeftButton(oLeftButton: sap.ui.core.ID | Button): this;

        /**
            * Sets a new value for property {@link #getResizable resizable}.
         * 
         * Indicates whether the dialog is resizable. the dialog is resizable. If this property is set to true, the dialog will have a resize handler in it's bottom right corner. This property has a default value false. The Dialog can be resizable only in desktop mode.
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
            * Sets a new value for property {@link #getShowHeader showHeader}.
         * 
         * Determines whether the header is shown inside the dialog. If this property is set to true, the text and icon property are ignored. This property has a default value true.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowHeader(bShowHeader: boolean): this;

        /**
            * Sets a new value for property {@link #getState state}.
         * 
         * The state affects the icon and the title color. If other than "None" is set, a predefined icon will be added to the dialog. Setting icon property will overwrite the predefined icon. The default value is "None" which doesn't add any icon to the Dialog control. This property is by now only supported by blue crystal theme.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setState(sState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getStretch stretch}.
         * 
         * Determines if the dialog will be stretched to full screen. This property is only applicable to standard dialog and message type dialog ignores this property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setStretch(bStretch: boolean): this;

        /**
            * Sets a new value for property {@link #getStretchOnPhone stretchOnPhone}.
         * 
         * Determines whether the dialog will displayed on full screen on a phone.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setStretchOnPhone(bStretchOnPhone: boolean): this;

        /**
            * Sets the aggregated {@link #getSubHeader subHeader}.
        */
        public setSubHeader(oSubHeader: sap.m.IBar): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Title text appears in the dialog header.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * The type of the dialog. In some themes, the type "message" will limit the dialog's width within 480px on tablet and desktop.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setType(sType: sap.m.DialogType): this;

        /**
            * Sets a new value for property {@link #getVerticalScrolling verticalScrolling}.
         * 
         * Indicates if user can scroll vertically inside dialog when the content is bigger than the content area. Dialog detects if there's sap.m.NavContainer, sap.m.Page, sap.m.ScrollContainer or sap.m.SplitContainer as direct child added to dialog. If there is, dialog will turn off scrolling by setting this property to false automatically ignoring the existing value of this property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVerticalScrolling(bVerticalScrolling: boolean): this;

    }
}