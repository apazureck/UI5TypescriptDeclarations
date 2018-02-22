declare module 'sap/m/BusyDialog' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { TooltipBase } from 'sap/ui/core/TooltipBase';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IBusyDialogSettings extends IControlSettings {
        text?: string;
        title?: string;
        customIcon?: sap.ui.core.URI;
        customIconRotationSpeed?: number;
        customIconDensityAware?: boolean;
        customIconWidth?: sap.ui.core.CSSSize;
        customIconHeight?: sap.ui.core.CSSSize;
        cancelButtonText?: string;
        showCancelButton?: boolean;
    }

    /**
    
    */
    export class BusyDialog extends Control {

        /**
            * Constructor for a new BusyDialog.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IBusyDialogSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.m.BusyDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.BusyDialog` itself.
         * 
         * Fires when the busy dialog is closed.
        */
        attachClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Indicates if the close events are triggered by a user, pressing a cancel button or because the operation was terminated. This parameter is set to true if the close event is fired by user interaction. */
            cancelPressed: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.m.BusyDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.BusyDialog` itself.
         * 
         * Fires when the busy dialog is closed.
        */
        attachClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Indicates if the close events are triggered by a user, pressing a cancel button or because the operation was terminated. This parameter is set to true if the close event is fired by user interaction. */
            cancelPressed: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Closes the BusyDialog.
        */
        public close(isClosedFromUserInteraction: boolean): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.m.BusyDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.BusyDialog with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:close close} to attached listeners.
        */
        protected fireClose(mParameters?: { cancelPressed?: boolean, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getCancelButtonText cancelButtonText}.
         * 
         * The text of the cancel button. The default text is "Cancel" (translated to the respective language).
         * 
         * Default value is ``.
        */
        public getCancelButtonText(): string;

        /**
            * Gets current value of property {@link #getCustomIcon customIcon}.
         * 
         * Icon, used from the BusyIndicator. This icon is invisible in iOS platform and it is density aware. You can use the density convention (@2, @1.5, etc.) to provide higher resolution image for higher density screens.
         * 
         * Default value is ``.
        */
        public getCustomIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getCustomIconDensityAware customIconDensityAware}.
         * 
         * If this is set to `false`, the source image will be loaded directly without attempting to fetch the density perfect image for high density devices. By default, this is set to `true` but then one or more requests are sent trying to get the density perfect version of the image.
         * 
         * If bandwidth is the key for the application, set this value to `false`.
         * 
         * Default value is `true`.
        */
        public getCustomIconDensityAware(): boolean;

        /**
            * Gets current value of property {@link #getCustomIconHeight customIconHeight}.
         * 
         * Height of the provided icon with default value "44px".
         * 
         * Default value is `44px`.
        */
        public getCustomIconHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getCustomIconRotationSpeed customIconRotationSpeed}.
         * 
         * Defines the rotation speed of the given image. If GIF file is used, the speed has to be set to 0. The value is in milliseconds.
         * 
         * Default value is `1000`.
        */
        public getCustomIconRotationSpeed(): number;

        /**
            * Gets current value of property {@link #getCustomIconWidth customIconWidth}.
         * 
         * Width of the provided icon with default value "44px".
         * 
         * Default value is `44px`.
        */
        public getCustomIconWidth(): sap.ui.core.CSSSize;

        /**
            * Gets the DOM reference for the BusyDialog.
        */
        protected getDomRef(): this;

        /**
            * Returns the best suitable DOM Element that represents this UI5 Element. By default the DOM Element with the same ID as this Element is returned. Subclasses should override this method if the lookup via id is not sufficient.
         * 
         * Note that such a DOM Element does not necessarily exist in all cases. Some elements or controls might not have a DOM representation at all (e.g. a naive FlowLayout) while others might not have one due to their current state (e.g. an initial, not yet rendered control).
         * 
         * If an ID suffix is given, the ID of this Element is concatenated with the suffix (separated by a single dash) and the DOM node with that compound ID will be returned. This matches the UI5 naming convention for named inner DOM nodes of a control.
        */
        protected getDomRef(sSuffix?: string): any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

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
            * Returns a metadata object for class sap.m.BusyDialog.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getShowCancelButton showCancelButton}.
         * 
         * Indicates if the cancel button will be rendered inside the busy dialog. The default value is set to `false`.
         * 
         * Default value is `false`.
        */
        public getShowCancelButton(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Optional text displayed inside the dialog.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Sets the title of the BusyDialog. The default value is an empty string.
         * 
         * Default value is ``.
        */
        public getTitle(): string;

        /**
            * Returns the tooltip for this element if any or an undefined value. The tooltip can either be a simple string or a subclass of {@link sap.ui.core.TooltipBase}.
         * 
         * Callers that are only interested in tooltips of type string (e.g. to render them as a `title` attribute), should call the convenience method {@link #getTooltip_AsString} instead. If they want to get a tooltip text no matter where it comes from (be it a string tooltip or the text from a TooltipBase instance) then they could call {@link #getTooltip_Text} instead.
        */
        public getTooltip(): string | TooltipBase;

        /**
            * Gets the tooltip for the BusyDialog.
        */
        public getTooltip(): this;

        /**
            * Opens the BusyDialog.
        */
        public open(): this;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getCancelButtonText cancelButtonText}.
         * 
         * The text of the cancel button. The default text is "Cancel" (translated to the respective language).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setCancelButtonText(sCancelButtonText: string): this;

        /**
            * Shows the text for the cancel button.
        */
        public setCancelButtonText(text: string): this;

        /**
            * Sets custom icon.
        */
        public setCustomIcon(icon: string): this;

        /**
            * Sets a new value for property {@link #getCustomIcon customIcon}.
         * 
         * Icon, used from the BusyIndicator. This icon is invisible in iOS platform and it is density aware. You can use the density convention (@2, @1.5, etc.) to provide higher resolution image for higher density screens.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setCustomIcon(sCustomIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getCustomIconDensityAware customIconDensityAware}.
         * 
         * If this is set to `false`, the source image will be loaded directly without attempting to fetch the density perfect image for high density devices. By default, this is set to `true` but then one or more requests are sent trying to get the density perfect version of the image.
         * 
         * If bandwidth is the key for the application, set this value to `false`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setCustomIconDensityAware(bCustomIconDensityAware: boolean): this;

        /**
            * Sets the density of the custom icon.
        */
        public setCustomIconDensityAware(isDensityAware: boolean): this;

        /**
            * Sets a new value for property {@link #getCustomIconHeight customIconHeight}.
         * 
         * Height of the provided icon with default value "44px".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `44px`.
        */
        public setCustomIconHeight(sCustomIconHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets the height of the custom icon.
        */
        public setCustomIconHeight(height: string): this;

        /**
            * Sets a new value for property {@link #getCustomIconRotationSpeed customIconRotationSpeed}.
         * 
         * Defines the rotation speed of the given image. If GIF file is used, the speed has to be set to 0. The value is in milliseconds.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1000`.
        */
        public setCustomIconRotationSpeed(iCustomIconRotationSpeed: number): this;

        /**
            * Sets the rotation speed of the custom icon.
        */
        public setCustomIconRotationSpeed(speed: number): this;

        /**
            * Sets a new value for property {@link #getCustomIconWidth customIconWidth}.
         * 
         * Width of the provided icon with default value "44px".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `44px`.
        */
        public setCustomIconWidth(sCustomIconWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets the width of the custom icon.
        */
        public setCustomIconWidth(width: string): this;

        /**
            * Shows the cancel button.
        */
        public setShowCancelButton(isCancelButtonShown: boolean): this;

        /**
            * Sets a new value for property {@link #getShowCancelButton showCancelButton}.
         * 
         * Indicates if the cancel button will be rendered inside the busy dialog. The default value is set to `false`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowCancelButton(bShowCancelButton: boolean): this;

        /**
            * Sets the text for the BusyDialog.
        */
        public setText(text: string): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Optional text displayed inside the dialog.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Sets the title of the BusyDialog. The default value is an empty string.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets the title for the BusyDialog.
        */
        public setTitle(title: string): this;

        /**
            * Sets the tooltip for the BusyDialog.
        */
        public setTooltip(tooltip: string): this;

        /**
            * Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
         * 
         * If a new tooltip is set, any previously set tooltip is deactivated.
        */
        public setTooltip(vTooltip: string | TooltipBase): any;

    }
}