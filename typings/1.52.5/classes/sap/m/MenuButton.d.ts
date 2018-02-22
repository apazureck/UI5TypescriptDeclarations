declare module 'sap/m/MenuButton' {
    import { Event } from 'sap/ui/base/Event';
    import { Menu } from 'sap/m/Menu';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { TooltipBase } from 'sap/ui/core/TooltipBase';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IMenuButtonSettings extends IControlSettings {
        text?: string;
        type?: sap.m.ButtonType;
        width?: sap.ui.core.CSSSize;
        enabled?: boolean;
        icon?: sap.ui.core.URI;
        activeIcon?: sap.ui.core.URI;
        iconDensityAware?: boolean;
        textDirection?: sap.ui.core.TextDirection;
        buttonMode?: sap.m.MenuButtonMode;
        useDefaultActionOnly?: boolean;
    }

    /**
    
    */
    export class MenuButton extends Control {

        /**
            * Constructor for a new MenuButton.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMenuButtonSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:defaultAction defaultAction} event of this `sap.m.MenuButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MenuButton` itself.
         * 
         * Fired when the `buttonMode` is set to `Split` and the user presses the main button unless `useDefaultActionOnly` is set to `false` and another action from the menu has been selected previously.
        */
        attachDefaultAction<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:defaultAction defaultAction} event of this `sap.m.MenuButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MenuButton` itself.
         * 
         * Fired when the `buttonMode` is set to `Split` and the user presses the main button unless `useDefaultActionOnly` is set to `false` and another action from the menu has been selected previously.
        */
        attachDefaultAction<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys the menu in the aggregation {@link #getMenu menu}.
        */
        public destroyMenu(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:defaultAction defaultAction} event of this `sap.m.MenuButton`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDefaultAction(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.MenuButton with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:defaultAction defaultAction} to attached listeners.
        */
        protected fireDefaultAction(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getActiveIcon activeIcon}.
         * 
         * The source property of an alternative icon for the active (pressed) state of the button. Both active and default icon properties should be defined and of the same type - image or icon font. If the `icon` property is not set or has a different type, the active icon is not displayed.
        */
        public getActiveIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getButtonMode buttonMode}.
         * 
         * Defines whether the `MenuButton` is set to `Regular` or `Split` mode.
         * 
         * Default value is `Regular`.
        */
        public getButtonMode(): sap.m.MenuButtonMode;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Boolean property to enable the control (default is `true`). 
         * ** Note: ** Depending on custom settings, the buttons that are disabled have other colors than the enabled ones.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Defines the icon to be displayed as a graphical element within the button. It can be an image or an icon from the icon font.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconDensityAware iconDensityAware}.
         * 
         * When set to `true` (default), one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server. If only one version of image is provided, set this value to `false` to avoid the attempt of fetching density perfect image.
         * 
         * Default value is `true`.
        */
        public getIconDensityAware(): boolean;

        /**
            * Gets content of aggregation {@link #getMenu menu}.
         * 
         * Defines the menu that opens for this button.
        */
        public getMenu(): Menu;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

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
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.m.MenuButton.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Defines the text of the `MenuButton`. 
         * ** Note: ** In `Split` `buttonMode` with `useDefaultActionOnly` set to `false`, the text is changed to display the last selected item's text, while in `Regular` `buttonMode` the text stays unchanged.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Specifies the element's text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Defines the type of the `MenuButton` (for example, Default, Accept, Reject, Back, etc.)
         * 
         * Default value is `Default`.
        */
        public getType(): sap.m.ButtonType;

        /**
            * Gets current value of property {@link #getUseDefaultActionOnly useDefaultActionOnly}.
         * 
         * Controls whether the default action handler is invoked always or it is invoked only until a menu item is selected. Usable only if `buttonMode` is set to `Split`.
         * 
         * Default value is `false`.
        */
        public getUseDefaultActionOnly(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the width of the `MenuButton`. 
         * ** Note: **As per visual design this width can be maximum of 12rem (192px).
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Initializes the control.
        */
        protected init(): any;

        /**
            * Initializes the element instance after creation.
         * 
         * Applications must not call this hook method directly, it is called by the framework while the constructor of an element is executed.
         * 
         * Subclasses of Element should override this hook to implement any necessary initialization.
        */
        protected init(): any;

        /**
            * Sets a new value for property {@link #getActiveIcon activeIcon}.
         * 
         * The source property of an alternative icon for the active (pressed) state of the button. Both active and default icon properties should be defined and of the same type - image or icon font. If the `icon` property is not set or has a different type, the active icon is not displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setActiveIcon(sActiveIcon: sap.ui.core.URI): this;

        /**
            * Sets the `buttonMode` of the control.
        */
        public setButtonMode(sMode: sap.m.MenuButtonMode): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Boolean property to enable the control (default is `true`). 
         * ** Note: ** Depending on custom settings, the buttons that are disabled have other colors than the enabled ones.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Defines the icon to be displayed as a graphical element within the button. It can be an image or an icon from the icon font.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconDensityAware iconDensityAware}.
         * 
         * When set to `true` (default), one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server. If only one version of image is provided, set this value to `false` to avoid the attempt of fetching density perfect image.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconDensityAware(bIconDensityAware: boolean): this;

        /**
            * Sets the aggregated {@link #getMenu menu}.
        */
        public setMenu(oMenu: Menu): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Defines the text of the `MenuButton`. 
         * ** Note: ** In `Split` `buttonMode` with `useDefaultActionOnly` set to `false`, the text is changed to display the last selected item's text, while in `Regular` `buttonMode` the text stays unchanged.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Specifies the element's text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
         * 
         * If a new tooltip is set, any previously set tooltip is deactivated.
        */
        public setTooltip(vTooltip: string | TooltipBase): any;

        /**
            * Sets the tooltip for the `MenuButton`. Can either be an instance of a TooltipBase subclass or a simple string.
        */
        public setTooltip(vTooltip: TooltipBase): any;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Defines the type of the `MenuButton` (for example, Default, Accept, Reject, Back, etc.)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Default`.
        */
        public setType(sType: sap.m.ButtonType): this;

        /**
            * Sets a new value for property {@link #getUseDefaultActionOnly useDefaultActionOnly}.
         * 
         * Controls whether the default action handler is invoked always or it is invoked only until a menu item is selected. Usable only if `buttonMode` is set to `Split`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setUseDefaultActionOnly(bUseDefaultActionOnly: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the width of the `MenuButton`. 
         * ** Note: **As per visual design this width can be maximum of 12rem (192px).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}