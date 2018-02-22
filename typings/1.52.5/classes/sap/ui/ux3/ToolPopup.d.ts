declare module 'sap/ui/ux3/ToolPopup' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IToolPopupSettings extends IControlSettings {
        title?: string;
        icon?: sap.ui.core.URI;
        iconHover?: sap.ui.core.URI;
        iconSelected?: sap.ui.core.URI;
        modal?: boolean;
        inverted?: boolean;
        autoClose?: boolean;
        maxHeight?: sap.ui.core.CSSSize;
        maxWidth?: sap.ui.core.CSSSize;
        openDuration?: number;
        closeDuration?: number;
    }

    /**
    
    */
    export class ToolPopup extends Control {

        /**
            * Constructor for a new ToolPopup.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IToolPopupSettings);


        /**
            * Adds some button to the aggregation {@link #getButtons buttons}.
        */
        public addButton(oButton: Control): this;

        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Adds an ID to the Popup that should be focusable as well when using `autoclose`. Chaining is only possible if a valid type (string) is given.
        */
        public addFocusableArea(sID?: string): any;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         * 
         * Event is fired when the popup closes because the user pressed Escape or the ToolPopup Button in the Shell. This is called before the closing animation.
        */
        attachClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         * 
         * Event is fired when the popup closes because the user pressed Escape or the ToolPopup Button in the Shell. This is called before the closing animation.
        */
        attachClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         * 
         * This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close, regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call.
        */
        attachClosed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         * 
         * This event is fired after the ToolPopup has finished its closing animation. It is called for EVERY close, regardless of whether the user has triggered the close or whether the ToolPopup was closed via API call.
        */
        attachClosed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:enter enter} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         * 
         * Event is fired whenever the user clicks the Enter or the Enter key inside the pop up
        */
        attachEnter<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The onsapenter event, received by the pop up */
            originalEvent: {}, /* * The control that was focused when the user pressed the Enter key (may be null) */
            originalSrcControl: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:enter enter} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         * 
         * Event is fired whenever the user clicks the Enter or the Enter key inside the pop up
        */
        attachEnter<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The onsapenter event, received by the pop up */
            originalEvent: {}, /* * The control that was focused when the user pressed the Enter key (may be null) */
            originalSrcControl: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:iconChanged iconChanged} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         * 
         * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup). To be used by other controls which want to update the icon in their UI.
        */
        attachIconChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:iconChanged iconChanged} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         * 
         * Event is fired when one of the icon properties is modified (Note: The icon is not rendered by the ToolPopup). To be used by other controls which want to update the icon in their UI.
        */
        attachIconChanged<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         * 
         * Event is fired when the popup opens
        */
        attachOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         * 
         * Event is fired when the popup opens
        */
        attachOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         * 
         * Event is being fired after the ToolPopup has been opened.
        */
        attachOpened<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ToolPopup` itself.
         * 
         * Event is being fired after the ToolPopup has been opened.
        */
        attachOpened<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Closes the pop up. Can be called by the Shell when the pop up's button is clicked again; or by the application when the interaction in the pop up has been completed or canceled.
        */
        public close(bPreventRestoreFocus: boolean): this;

        /**
            * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
        */
        public destroyButtons(): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClosed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:enter enter} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachEnter(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:iconChanged iconChanged} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachIconChanged(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:open open} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:opened opened} event of this `sap.ui.ux3.ToolPopup`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachOpened(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.ToolPopup with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:close close} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireClose(mParameters?: {}): boolean;

        /**
            * Fires event {@link #event:closed closed} to attached listeners.
        */
        protected fireClosed(mParameters?: {}): this;

        /**
            * Fires event {@link #event:enter enter} to attached listeners.
        */
        protected fireEnter(mParameters?: { originalEvent?: {}, originalSrcControl?: Control, }): this;

        /**
            * Fires event {@link #event:iconChanged iconChanged} to attached listeners.
        */
        protected fireIconChanged(mParameters?: {}): this;

        /**
            * Fires event {@link #event:open open} to attached listeners.
        */
        protected fireOpen(mParameters?: {}): this;

        /**
            * Fires event {@link #event:opened opened} to attached listeners.
        */
        protected fireOpened(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getAutoClose autoClose}.
         * 
         * Determines whether the ToolPopup will auto close when it loses focus. If the user e.g. clicks outside of the ToolPopup it will be closed. Please don't use "modal" and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose" won't be used.
         * 
         * Default value is `false`.
        */
        public getAutoClose(): boolean;

        /**
            * Gets content of aggregation {@link #getButtons buttons}.
         * 
         * Defines the buttons to appear in the popup
        */
        public getButtons(): {};

        /**
            * Gets current value of property {@link #getCloseDuration closeDuration}.
         * 
         * Time in milliseconds for the close animation.
         * 
         * Default value is `400`.
        */
        public getCloseDuration(): number;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Defines the content of the popup
        */
        public getContent(): {};

        /**
            * ID of the element which is the current target of the association {@link #getDefaultButton defaultButton}, or `null`.
        */
        public getDefaultButton(): sap.ui.core.ID;

        /**
            * Indicates whether the ToolPopup is currently enabled or not.
         * 
         * Applications can't control the enabled state via a property. A ToolPopup is implicitly enabled depending on its `openState`. Descendant controls that honor the enabled state of their ancestors will appear disabled after the ToolPopup is closed.
         * 
         * Since 1.13.1. Whether a dialog is regarded as "enabled" during the state transitions (OPENING, CLOSING) is not fully decided. Currently, it is enabled during the OPENING phase and disabled during the CLOSING phase. The only potential change would be to treat the OPENING phase as disabled as well. Applications should be prepared to receive events from "enabled" controls after they called open() on the dialog until close() is called on it. If the mentioned potential change should happen, the dialog will become enabled only after the transition to OPEN. Events from "enabled" children then can still only arrive between open() and close(), so applications that obey the previous rule should continue to work. Only end users or code that explicitly triggers pseudo user events would notice a difference. <br> A second aspect that might change is the visual behavior of the content: during the CLOSING phase it 'looks' enabled but in fact it is already disabled. This avoids unnecessary redraws for content that becomes hidden soon. Should this show to be confusing for end users, it might be changed.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * This property is relevant for Shell use: The URL to the icon displayed in the tool area which is used to open the ToolPopup. The recommended size is 32x32px, including some transparent border. Therefore, the content will cover about 20x20px.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconHover iconHover}.
         * 
         * This property is relevant for Shell use: The URL to the icon in hover state, displayed in the tool area which is used to open the popup.
        */
        public getIconHover(): sap.ui.core.URI;

        /**
            * ID of the element which is the current target of the association {@link #getInitialFocus initialFocus}, or `null`.
        */
        public getInitialFocus(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getInverted inverted}.
         * 
         * Specifies whether the ToolPopup has a dark or bright background. If set to true the background and borders will be dark. If false they will be bright. This property only has an effect for the GoldReflection-theme.
         * 
         * Default value is `true`.
        */
        public getInverted(): boolean;

        /**
            * Gets current value of property {@link #getMaxHeight maxHeight}.
         * 
         * Forces a maximum height of the ToolPopup in pixels. If the ToolPopup content is higher than the ToolPopup, the content will be scrollable.
        */
        public getMaxHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getMaxWidth maxWidth}.
         * 
         * Forces a maximum width of the ToolPopup in pixels.
        */
        public getMaxWidth(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.ux3.ToolPopup.
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
         * Specifies whether the popup is modal and blocks any user-interaction with controls in the background. Changing this property while the ToolPopup is open will not have any effect. Please don't use "modal" and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose" won't be used.
         * 
         * Default value is `false`.
        */
        public getModal(): boolean;

        /**
            * Gets current value of property {@link #getOpenDuration openDuration}.
         * 
         * Time in milliseconds for the open animation.
         * 
         * Default value is `400`.
        */
        public getOpenDuration(): number;

        /**
            * ID of the element which is the current target of the association {@link #getOpener opener}, or `null`.
        */
        public getOpener(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Determines the title displayed in the pop up window
        */
        public getTitle(): string;

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
            * Indicates whether the pop up is currently open
        */
        public isOpen(): boolean;

        /**
            * Opens the ToolPopup. It is checked which control wants to open the ToolPopup. The Shell was previously set as parent so the corresponding parent element is used to set the correct position of the ToolPopup. If another control (i.e. a button) opens the ToolPopup, the control must be previously set as `opener` via `setOpener` to the ToolPopup. Corresponding to this opener the position of the ToolPopup will be set. It's also possible to set the position above, below or left from the opener. This can be done via the possible parameters `my` and `at`. These parameters refers to work the same way as they do of sap.ui.core.Popup.open.
        */
        public open(my?: sap.ui.core.Popup.Dock, at?: sap.ui.core.Popup.Dock): this;

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
            * Removes an ID to the Popup that should be focusable as well when using `autoclose`. Chaining is only possible if a valid type (string) is given.
        */
        public removeFocusableArea(sID?: string): any;

        /**
            * Sets a new value for property {@link #getAutoClose autoClose}.
         * 
         * Determines whether the ToolPopup will auto close when it loses focus. If the user e.g. clicks outside of the ToolPopup it will be closed. Please don't use "modal" and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose" won't be used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAutoClose(bAutoClose: boolean): this;

        /**
            * This is just a forward to the Popup's function (sap.ui.core.Popup.setAutoCloseAreas) with the same functionality.
        */
        public setAutoCloseAreas(aAutoCloseAreas: {}): any;

        /**
            * Sets a new value for property {@link #getCloseDuration closeDuration}.
         * 
         * Time in milliseconds for the close animation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `400`.
        */
        public setCloseDuration(iCloseDuration: number): this;

        /**
            * Sets the associated {@link #getDefaultButton defaultButton}.
        */
        public setDefaultButton(oDefaultButton: sap.ui.core.ID | Control): this;

        /**
            * Sets the associated {@link #getInitialFocus initialFocus}.
        */
        public setInitialFocus(oInitialFocus: sap.ui.core.ID | Control): this;

        /**
            * Sets a new value for property {@link #getInverted inverted}.
         * 
         * Specifies whether the ToolPopup has a dark or bright background. If set to true the background and borders will be dark. If false they will be bright. This property only has an effect for the GoldReflection-theme.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setInverted(bInverted: boolean): this;

        /**
            * Sets a new value for property {@link #getMaxHeight maxHeight}.
         * 
         * Forces a maximum height of the ToolPopup in pixels. If the ToolPopup content is higher than the ToolPopup, the content will be scrollable.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxHeight(sMaxHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getModal modal}.
         * 
         * Specifies whether the popup is modal and blocks any user-interaction with controls in the background. Changing this property while the ToolPopup is open will not have any effect. Please don't use "modal" and "autoclose" at the same time. In this case a warning will be prompted to the console and "autoclose" won't be used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setModal(bModal: boolean): this;

        /**
            * Sets a new value for property {@link #getOpenDuration openDuration}.
         * 
         * Time in milliseconds for the open animation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `400`.
        */
        public setOpenDuration(iOpenDuration: number): this;

        /**
            * Sets the associated {@link #getOpener opener}.
        */
        public setOpener(oOpener: sap.ui.core.ID | Control): this;

        /**
            * Sets the position of the pop up, the same parameters as for sap.ui.core.Popup can be used.
        */
        public setPosition(): any;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Determines the title displayed in the pop up window
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

    }
}