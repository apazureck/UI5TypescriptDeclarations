declare module 'sap/ui/commons/Dialog' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Button } from 'sap/ui/commons/Button';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IDialogSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        scrollLeft?: number;
        scrollTop?: number;
        title?: string;
        applyContentPadding?: boolean;
        showCloseButton?: boolean;
        resizable?: boolean;
        minWidth?: sap.ui.core.CSSSize;
        minHeight?: sap.ui.core.CSSSize;
        maxWidth?: sap.ui.core.CSSSize;
        maxHeight?: sap.ui.core.CSSSize;
        contentBorderDesign?: sap.ui.commons.enums.BorderDesign;
        modal?: boolean;
        accessibleRole?: sap.ui.core.AccessibleRole;
        keepInWindow?: boolean;
        autoClose?: boolean;
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
            * Adds some button to the aggregation {@link #getButtons buttons}.
        */
        public addButton(oButton: Control): this;

        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.commons.Dialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Dialog` itself.
         * 
         * Event is fired when the dialog has been closed (after closing-animation etc.). Event parameters provide information about last position and last size.
        */
        attachClosed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The width of the dialog when closed */
            width: number, /* * The height of the dialog when closed */
            height: number, /* * The top position of the dialog when closed */
            top: number, /* * The left position of the dialog when closed */
            left: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.commons.Dialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Dialog` itself.
         * 
         * Event is fired when the dialog has been closed (after closing-animation etc.). Event parameters provide information about last position and last size.
        */
        attachClosed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The width of the dialog when closed */
            width: number, /* * The height of the dialog when closed */
            height: number, /* * The top position of the dialog when closed */
            top: number, /* * The left position of the dialog when closed */
            left: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Closes the dialog control instance.
        */
        public close(): any;

        /**
            * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
        */
        public destroyButtons(): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.commons.Dialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClosed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.Dialog with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:closed closed} to attached listeners.
        */
        protected fireClosed(mParameters?: { width?: number, height?: number, top?: number, left?: number, }): this;

        /**
            * Gets current value of property {@link #getAccessibleRole accessibleRole}.
         * 
         * The ARIA role for the control. E.g. for alert-style Dialogs this can be set to "AlertDialog".
         * 
         * Default value is `Dialog`.
        */
        public getAccessibleRole(): sap.ui.core.AccessibleRole;

        /**
            * Gets current value of property {@link #getApplyContentPadding applyContentPadding}.
         * 
         * Padding is theme-dependent. When set to "false", the content extends to the dialog borders.
         * 
         * Default value is `true`.
        */
        public getApplyContentPadding(): boolean;

        /**
            * Gets current value of property {@link #getAutoClose autoClose}.
         * 
         * If this property is set to true the Dialog will close if the Dialog loses its focus
         * 
         * Default value is `false`.
        */
        public getAutoClose(): boolean;

        /**
            * Gets content of aggregation {@link #getButtons buttons}.
         * 
         * Aggregation of the buttons to display at the bottom of the dialog, for example OK and Cancel. Association defaultButton can be used for one of the defined buttons.
        */
        public getButtons(): {};

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Aggregation of the content of the dialog (one or more controls).
         * 
         * Warning: when content is added with width given as a percentage, the Dialog itself should have a width set.
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getContentBorderDesign contentBorderDesign}.
         * 
         * Specifies the border design. Border design is theme dependent.
         * 
         * Default value is `None`.
        */
        public getContentBorderDesign(): sap.ui.commons.enums.BorderDesign;

        /**
            * ID of the element which is the current target of the association {@link #getDefaultButton defaultButton}, or `null`.
        */
        public getDefaultButton(): sap.ui.core.ID;

        /**
            * Determines whether the dialog is currently enabled or not.
         * 
         * Applications can't control the enabled state via a property. A dialog is implicitly enabled depending on its `openState`. Descendant controls that honor the enabled state of their ancestors will appear disabled after the dialog is closed.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Outer height of dialog window. When not set and not constrained by one of the height parameters (minHeight/maxHeight), the window size is automatically adapted to the content.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * ID of the element which is the current target of the association {@link #getInitialFocus initialFocus}, or `null`.
        */
        public getInitialFocus(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getKeepInWindow keepInWindow}.
         * 
         * Specifies whether Dialog movement should be restricted to the visible area of the window. This only affects drag&drop movements by the user. This doesn't affect modal dialogs -> modal dialogs always stay in the window.
         * 
         * Default value is `false`.
        */
        public getKeepInWindow(): boolean;

        /**
            * Gets current value of property {@link #getMaxHeight maxHeight}.
         * 
         * Maximum outer height of the dialog window. If set, neither the user nor some layout settings can make the window larger.
        */
        public getMaxHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getMaxWidth maxWidth}.
         * 
         * Maximum outer width of the dialog window. If set, neither the user nor some layout settings can make the window larger.
        */
        public getMaxWidth(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.commons.Dialog.
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
            * Gets current value of property {@link #getMinHeight minHeight}.
         * 
         * Minimum outer height of the dialog window. When set, neither the user nor some layout settings can make the window smaller.
        */
        public getMinHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getMinWidth minWidth}.
         * 
         * Minimum outer width of the dialog window. When set, neither the user nor some layout settings can make the window smaller.
        */
        public getMinWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getModal modal}.
         * 
         * Specifies whether the dialog should be modal, or not. In case of `true` the focus is kept inside the dialog.
         * 
         * Default value is `false`.
        */
        public getModal(): boolean;

        /**
            * Indicates whether the Dialog is currently open, closed, or transitioning between these states.
        */
        public getOpenState(): sap.ui.core.OpenState;

        /**
            * Gets current value of property {@link #getResizable resizable}.
         * 
         * Specifies whether the dialog window can be resized by the user. The dialog frame contains the visual symbol.
         * 
         * Default value is `true`.
        */
        public getResizable(): boolean;

        /**
            * Gets current value of property {@link #getScrollLeft scrollLeft}.
         * 
         * Scroll position from left to right. "0" means leftmost position.
         * 
         * Default value is `0`.
        */
        public getScrollLeft(): number;

        /**
            * Gets current value of property {@link #getScrollTop scrollTop}.
         * 
         * Scroll position from top to bottom. "0" means topmost position.
         * 
         * Default value is `0`.
        */
        public getScrollTop(): number;

        /**
            * Gets current value of property {@link #getShowCloseButton showCloseButton}.
         * 
         * Displays a close button in the title bar.
         * 
         * Default value is `true`.
        */
        public getShowCloseButton(): boolean;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Dialog title displayed in the header.
         * 
         * Default value is ``.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Outer width of dialog window. When not set and not constrained by one of the width parameters (minWidth/maxWidth), the window size is automatically adapted to the content.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getButtons buttons}. and returns its index if found or -1 otherwise.
        */
        public indexOfButton(oButton: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Inserts a button into the aggregation {@link #getButtons buttons}.
        */
        public insertButton(oButton: Control, iIndex: number): this;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Indicates whether the Dialog is open (this includes opening and closing animations). For more detailed information about the current state check Dialog.getOpenState().
        */
        public isOpen(): boolean;

        /**
            * Opens the dialog control instance.
        */
        public open(): any;

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
        public removeButton(vButton: number | string | Control): Control;

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getAccessibleRole accessibleRole}.
         * 
         * The ARIA role for the control. E.g. for alert-style Dialogs this can be set to "AlertDialog".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Dialog`.
        */
        public setAccessibleRole(sAccessibleRole: sap.ui.core.AccessibleRole): this;

        /**
            * Sets a new value for property {@link #getApplyContentPadding applyContentPadding}.
         * 
         * Padding is theme-dependent. When set to "false", the content extends to the dialog borders.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setApplyContentPadding(bApplyContentPadding: boolean): this;

        /**
            * Sets a new value for property {@link #getAutoClose autoClose}.
         * 
         * If this property is set to true the Dialog will close if the Dialog loses its focus
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAutoClose(bAutoClose: boolean): this;

        /**
            * Sets a new value for property {@link #getContentBorderDesign contentBorderDesign}.
         * 
         * Specifies the border design. Border design is theme dependent.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setContentBorderDesign(sContentBorderDesign: sap.ui.commons.enums.BorderDesign): this;

        /**
            * Sets the associated {@link #getDefaultButton defaultButton}.
        */
        public setDefaultButton(oDefaultButton: sap.ui.core.ID | Button): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Outer height of dialog window. When not set and not constrained by one of the height parameters (minHeight/maxHeight), the window size is automatically adapted to the content.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets the associated {@link #getInitialFocus initialFocus}.
        */
        public setInitialFocus(oInitialFocus: sap.ui.core.ID | Control): this;

        /**
            * Sets a new value for property {@link #getKeepInWindow keepInWindow}.
         * 
         * Specifies whether Dialog movement should be restricted to the visible area of the window. This only affects drag&drop movements by the user. This doesn't affect modal dialogs -> modal dialogs always stay in the window.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setKeepInWindow(bKeepInWindow: boolean): this;

        /**
            * Sets a new value for property {@link #getMaxHeight maxHeight}.
         * 
         * Maximum outer height of the dialog window. If set, neither the user nor some layout settings can make the window larger.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxHeight(sMaxHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getMaxWidth maxWidth}.
         * 
         * Maximum outer width of the dialog window. If set, neither the user nor some layout settings can make the window larger.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxWidth(sMaxWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getMinHeight minHeight}.
         * 
         * Minimum outer height of the dialog window. When set, neither the user nor some layout settings can make the window smaller.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMinHeight(sMinHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getMinWidth minWidth}.
         * 
         * Minimum outer width of the dialog window. When set, neither the user nor some layout settings can make the window smaller.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMinWidth(sMinWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getModal modal}.
         * 
         * Specifies whether the dialog should be modal, or not. In case of `true` the focus is kept inside the dialog.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setModal(bModal: boolean): this;

        /**
            * Sets a new value for property {@link #getResizable resizable}.
         * 
         * Specifies whether the dialog window can be resized by the user. The dialog frame contains the visual symbol.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setResizable(bResizable: boolean): this;

        /**
            * Sets a new value for property {@link #getScrollLeft scrollLeft}.
         * 
         * Scroll position from left to right. "0" means leftmost position.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setScrollLeft(iScrollLeft: number): this;

        /**
            * Sets a new value for property {@link #getScrollTop scrollTop}.
         * 
         * Scroll position from top to bottom. "0" means topmost position.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setScrollTop(iScrollTop: number): this;

        /**
            * Sets a new value for property {@link #getShowCloseButton showCloseButton}.
         * 
         * Displays a close button in the title bar.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowCloseButton(bShowCloseButton: boolean): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Dialog title displayed in the header.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Outer width of dialog window. When not set and not constrained by one of the width parameters (minWidth/maxWidth), the window size is automatically adapted to the content.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}