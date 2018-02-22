declare module 'sap/ui/commons/Button' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IButtonSettings extends IControlSettings {
        text?: string;
        enabled?: boolean;
        width?: sap.ui.core.CSSSize;
        helpId?: string;
        icon?: sap.ui.core.URI;
        iconHovered?: sap.ui.core.URI;
        iconSelected?: sap.ui.core.URI;
        iconFirst?: boolean;
        height?: sap.ui.core.CSSSize;
        styled?: boolean;
        lite?: boolean;
        style?: sap.ui.commons.ButtonStyle;
    }

    /**
    
    */
    export class Button extends Control {

        /**
            * Constructor for a new Button.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IButtonSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.Button`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Button` itself.
         * 
         * Event is fired when the user presses the control.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.Button`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Button` itself.
         * 
         * Event is fired when the user presses the control.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.commons.Button`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.Button with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Puts the focus to the button.
        */
        public focus(): any;

        /**
            
        */
        protected getAccessibilityInfo(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Boolean property to enable the control (default is true). Buttons that are disabled have other colors than enabled ones, depending on custom settings.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Specifies the button height. If this property is set, the height which is specified by the underlying theme is not used any longer.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getHelpId helpId}.
         * 
         * Unique identifier used for help service
         * 
         * Default value is ``.
        */
        public getHelpId(): string;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Icon to be displayed as graphical element within the button. This can be a URI to an image or an icon font URI.
         * 
         * Default value is ``.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconFirst iconFirst}.
         * 
         * If set to true (default), the display sequence is 1. icon 2. control text .
         * 
         * Default value is `true`.
        */
        public getIconFirst(): boolean;

        /**
            * Gets current value of property {@link #getIconHovered iconHovered}.
         * 
         * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon was specified). If not specified the base icon is used. If an icon font icon is used, this property is ignored.
         * 
         * Default value is ``.
        */
        public getIconHovered(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconSelected iconSelected}.
         * 
         * Icon to be displayed as graphical element within the button when it is selected (only if also a base icon was specified). If not specified the base or hovered icon is used. If an icon font icon is used, this property is ignored.
         * 
         * Default value is ``.
        */
        public getIconSelected(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getLite lite}.
         * 
         * The button is rendered as lite button.
         * 
         * Default value is `false`.
        */
        public getLite(): boolean;

        /**
            * Returns a metadata object for class sap.ui.commons.Button.
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
            * Gets current value of property {@link #getStyle style}.
         * 
         * Style of the button. (e.g. emphasized)
         * 
         * Default value is `Default`.
        */
        public getStyle(): sap.ui.commons.ButtonStyle;

        /**
            * Gets current value of property {@link #getStyled styled}.
         * 
         * Indicates if the button is styled. If not it is rendered as native HTML-button. In this case a custom styling can be added usig addStyleClass.
         * 
         * Default value is `true`.
        */
        public getStyled(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Button text displayed at runtime.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Control width as common CSS-size (px or % as unit, for example)
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Boolean property to enable the control (default is true). Buttons that are disabled have other colors than enabled ones, depending on custom settings.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Specifies the button height. If this property is set, the height which is specified by the underlying theme is not used any longer.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getHelpId helpId}.
         * 
         * Unique identifier used for help service
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setHelpId(sHelpId: string): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Icon to be displayed as graphical element within the button. This can be a URI to an image or an icon font URI.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconFirst iconFirst}.
         * 
         * If set to true (default), the display sequence is 1. icon 2. control text .
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconFirst(bIconFirst: boolean): this;

        /**
            * Sets a new value for property {@link #getIconHovered iconHovered}.
         * 
         * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon was specified). If not specified the base icon is used. If an icon font icon is used, this property is ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIconHovered(sIconHovered: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconSelected iconSelected}.
         * 
         * Icon to be displayed as graphical element within the button when it is selected (only if also a base icon was specified). If not specified the base or hovered icon is used. If an icon font icon is used, this property is ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIconSelected(sIconSelected: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getLite lite}.
         * 
         * The button is rendered as lite button.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setLite(bLite: boolean): this;

        /**
            * Sets a new value for property {@link #getStyle style}.
         * 
         * Style of the button. (e.g. emphasized)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Default`.
        */
        public setStyle(sStyle: sap.ui.commons.ButtonStyle): this;

        /**
            * Sets a new value for property {@link #getStyled styled}.
         * 
         * Indicates if the button is styled. If not it is rendered as native HTML-button. In this case a custom styling can be added usig addStyleClass.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setStyled(bStyled: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Button text displayed at runtime.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Control width as common CSS-size (px or % as unit, for example)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}