declare module 'sap/m/Shell' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IShellSettings extends IControlSettings {
        title?: string;
        logo?: sap.ui.core.URI;
        showLogout?: boolean;
        headerRightText?: string;
        appWidthLimited?: boolean;
        backgroundColor?: sap.ui.core.CSSColor;
        backgroundImage?: sap.ui.core.URI;
        backgroundRepeat?: boolean;
        backgroundOpacity?: number;
        homeIcon?: {};
        titleLevel?: sap.ui.core.TitleLevel;
    }

    /**
    
    */
    export class Shell extends Control {

        /**
            * Constructor for a new Shell.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IShellSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:logout logout} event of this `sap.m.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Shell` itself.
         * 
         * Fires when the user presses the logout button/link.
        */
        attachLogout<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:logout logout} event of this `sap.m.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Shell` itself.
         * 
         * Fires when the user presses the logout button/link.
        */
        attachLogout<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys the app in the aggregation {@link #getApp app}.
        */
        public destroyApp(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:logout logout} event of this `sap.m.Shell`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLogout(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Shell with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:logout logout} to attached listeners.
        */
        protected fireLogout(mParameters?: {}): this;

        /**
            * Gets content of aggregation {@link #getApp app}.
         * 
         * A Shell contains an App or a SplitApp (they may be wrapped in a View). Other control types are not allowed.
        */
        public getApp(): Control;

        /**
            * Gets current value of property {@link #getAppWidthLimited appWidthLimited}.
         * 
         * Determines whether the width of the content (the aggregated App) should be limited or extended to the full screen width.
         * 
         * Default value is `true`.
        */
        public getAppWidthLimited(): boolean;

        /**
            * Gets current value of property {@link #getBackgroundColor backgroundColor}.
         * 
         * Defines the background color of the Shell. If set, this color will override the default background defined by the theme. This should only be set when really required. Any configured background image will be placed above this colored background. Use the backgroundRepeat property to define whether this image should be stretched to cover the complete Shell or whether it should be tiled.
        */
        public getBackgroundColor(): sap.ui.core.CSSColor;

        /**
            * Gets current value of property {@link #getBackgroundImage backgroundImage}.
         * 
         * Defines the background image of the Shell. If set, this image will override the default background defined by the theme. This should only be set when really required. This background image will be placed above any color set for the background. Use the backgroundRepeat property to define whether this image should be stretched to cover the complete Shell or whether it should be tiled.
        */
        public getBackgroundImage(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getBackgroundOpacity backgroundOpacity}.
         * 
         * Defines the opacity of the background image. The opacity can be set between 0 (fully transparent) and 1 (fully opaque). This can be used to improve readability of the Shell content by making the background image partly transparent.
         * 
         * Default value is `1`.
        */
        public getBackgroundOpacity(): number;

        /**
            * Gets current value of property {@link #getBackgroundRepeat backgroundRepeat}.
         * 
         * Determines whether the background image (if configured) should be proportionally stretched to cover the whole Shell (false, default) or whether it should be tiled (true).
         * 
         * Default value is `false`.
        */
        public getBackgroundRepeat(): boolean;

        /**
            * Gets current value of property {@link #getHeaderRightText headerRightText}.
         * 
         * Defines texts, such as the name of the logged-in user, which should be displayed on the right side of the header (if there is enough space to display the header at all - this only happens on very tall screens (1568px height), otherwise, it is always hidden).
        */
        public getHeaderRightText(): string;

        /**
            * Gets current value of property {@link #getHomeIcon homeIcon}.
         * 
         * Sets the icon used for the mobile device home screen and the icon to be used for bookmarks by desktop browsers.
         * 
         * This property should be only set once, and as early as possible. Subsequent calls replace the previous icon settings and may lead to different behavior depending on the browser.
         * 
         * Different image sizes for device home screen need to be given as PNG images, an ICO file needs to be given as desktop browser bookmark icon (other file formats may not work in all browsers). The `precomposed` flag defines whether there is already a glow effect contained in the home screen images (or whether iOS should add such an effect). The given structure could look like this: { 'phone':'phone-icon_57x57.png', 'phone@2':'phone-retina_114x114.png', 'tablet':'tablet-icon_72x72.png', 'tablet@2':'tablet-retina_144x144.png', 'precomposed':true, 'favicon':'favicon.ico' }
         * 
         * See jQuery.sap.setIcons() for full documentation.
        */
        public getHomeIcon(): {};

        /**
            * Gets current value of property {@link #getLogo logo}.
         * 
         * Defines the logo to be displayed next to the App when the screen is sufficiently large.
        */
        public getLogo(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.m.Shell.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Gets current value of property {@link #getShowLogout showLogout}.
         * 
         * Determines whether the Logout button should be displayed. Currently, this only happens on very tall screens (1568px height), otherwise, it is always hidden.
         * 
         * Default value is `true`.
        */
        public getShowLogout(): boolean;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the application title, which may or may not be displayed outside the actual application, depending on the available screen size.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getTitleLevel titleLevel}.
         * 
         * Defines the semantic level of the title.
         * 
         * This information is used by assistive technologies, such as screen readers to create a hierarchical site map for faster navigation. Depending on this setting an HTML h1-h6 element is used.
         * 
         * Default value is `H1`.
        */
        public getTitleLevel(): sap.ui.core.TitleLevel;

        /**
            * Sets the aggregated {@link #getApp app}.
        */
        public setApp(oApp: Control): this;

        /**
            * Sets a new value for property {@link #getAppWidthLimited appWidthLimited}.
         * 
         * Determines whether the width of the content (the aggregated App) should be limited or extended to the full screen width.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setAppWidthLimited(bAppWidthLimited: boolean): this;

        /**
            * Sets a new value for property {@link #getBackgroundColor backgroundColor}.
         * 
         * Defines the background color of the Shell. If set, this color will override the default background defined by the theme. This should only be set when really required. Any configured background image will be placed above this colored background. Use the backgroundRepeat property to define whether this image should be stretched to cover the complete Shell or whether it should be tiled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBackgroundColor(sBackgroundColor: sap.ui.core.CSSColor): this;

        /**
            * Sets a new value for property {@link #getBackgroundImage backgroundImage}.
         * 
         * Defines the background image of the Shell. If set, this image will override the default background defined by the theme. This should only be set when really required. This background image will be placed above any color set for the background. Use the backgroundRepeat property to define whether this image should be stretched to cover the complete Shell or whether it should be tiled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBackgroundImage(sBackgroundImage: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getBackgroundOpacity backgroundOpacity}.
         * 
         * Defines the opacity of the background image. The opacity can be set between 0 (fully transparent) and 1 (fully opaque). This can be used to improve readability of the Shell content by making the background image partly transparent.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setBackgroundOpacity(fBackgroundOpacity: number): this;

        /**
            * Sets a new value for property {@link #getBackgroundRepeat backgroundRepeat}.
         * 
         * Determines whether the background image (if configured) should be proportionally stretched to cover the whole Shell (false, default) or whether it should be tiled (true).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setBackgroundRepeat(bBackgroundRepeat: boolean): this;

        /**
            * Sets a new value for property {@link #getHeaderRightText headerRightText}.
         * 
         * Defines texts, such as the name of the logged-in user, which should be displayed on the right side of the header (if there is enough space to display the header at all - this only happens on very tall screens (1568px height), otherwise, it is always hidden).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeaderRightText(sHeaderRightText: string): this;

        /**
            * Sets a new value for property {@link #getHomeIcon homeIcon}.
         * 
         * Sets the icon used for the mobile device home screen and the icon to be used for bookmarks by desktop browsers.
         * 
         * This property should be only set once, and as early as possible. Subsequent calls replace the previous icon settings and may lead to different behavior depending on the browser.
         * 
         * Different image sizes for device home screen need to be given as PNG images, an ICO file needs to be given as desktop browser bookmark icon (other file formats may not work in all browsers). The `precomposed` flag defines whether there is already a glow effect contained in the home screen images (or whether iOS should add such an effect). The given structure could look like this: { 'phone':'phone-icon_57x57.png', 'phone@2':'phone-retina_114x114.png', 'tablet':'tablet-icon_72x72.png', 'tablet@2':'tablet-retina_144x144.png', 'precomposed':true, 'favicon':'favicon.ico' }
         * 
         * See jQuery.sap.setIcons() for full documentation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHomeIcon(oHomeIcon: {}): this;

        /**
            * Sets a new value for property {@link #getLogo logo}.
         * 
         * Defines the logo to be displayed next to the App when the screen is sufficiently large.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLogo(sLogo: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getShowLogout showLogout}.
         * 
         * Determines whether the Logout button should be displayed. Currently, this only happens on very tall screens (1568px height), otherwise, it is always hidden.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowLogout(bShowLogout: boolean): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Defines the application title, which may or may not be displayed outside the actual application, depending on the available screen size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getTitleLevel titleLevel}.
         * 
         * Defines the semantic level of the title.
         * 
         * This information is used by assistive technologies, such as screen readers to create a hierarchical site map for faster navigation. Depending on this setting an HTML h1-h6 element is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `H1`.
        */
        public setTitleLevel(sTitleLevel: sap.ui.core.TitleLevel): this;

    }
}