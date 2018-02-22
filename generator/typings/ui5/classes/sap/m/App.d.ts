declare module 'sap/m/App' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { NavContainer, INavContainerSettings } from 'sap/m/NavContainer';

    export interface IAppSettings extends INavContainerSettings {
        homeIcon?: any;
        backgroundColor?: string;
        backgroundImage?: sap.ui.core.URI;
        backgroundRepeat?: boolean;
        backgroundOpacity?: number;
    }

    /**
    
    */
    export class App extends NavContainer {

        /**
            * Constructor for a new `App`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IAppSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:orientationChange orientationChange} event of this `sap.m.App`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.App` itself.
         * 
         * Fired when the orientation (portrait/landscape) of the device is changed.
        */
        attachOrientationChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Whether the device is in landscape orientation. */
            landscape: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:orientationChange orientationChange} event of this `sap.m.App`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.App` itself.
         * 
         * Fired when the orientation (portrait/landscape) of the device is changed.
        */
        attachOrientationChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Whether the device is in landscape orientation. */
            landscape: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:orientationChange orientationChange} event of this `sap.m.App`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachOrientationChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.App with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.NavContainer.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:orientationChange orientationChange} to attached listeners.
        */
        protected fireOrientationChange(mParameters?: { landscape?: boolean, }): this;

        /**
            * Gets current value of property {@link #getBackgroundColor backgroundColor}.
         * 
         * Background color of the App. If set, this color will override the default background defined by the theme. So this should only be set when really required. Any configured background image will be placed above this colored background. But any theme adaptation in the Theme Designer will override this setting. Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete App or whether it should be tiled.
        */
        public getBackgroundColor(): string;

        /**
            * Gets current value of property {@link #getBackgroundImage backgroundImage}.
         * 
         * Background image of the App. If set, this image will override the default background defined by the theme. So this should only be set when really required. This background image will be placed above any color set for the background. But any theme adaptation in the Theme Designer will override this image setting. Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete App or whether it should be tiled.
        */
        public getBackgroundImage(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getBackgroundOpacity backgroundOpacity}.
         * 
         * Opacity of the background image. The opacity can be set between 0 (fully transparent) and 1 fully opaque). This can be used to make the application content better readable by making the background image partly transparent.
         * 
         * Default value is `1`.
        */
        public getBackgroundOpacity(): number;

        /**
            * Gets current value of property {@link #getBackgroundRepeat backgroundRepeat}.
         * 
         * Whether the background image (if configured) should be proportionally stretched to cover the whole App (false) or whether it should be tiled (true).
         * 
         * Default value is `false`.
        */
        public getBackgroundRepeat(): boolean;

        /**
            * Gets current value of property {@link #getHomeIcon homeIcon}.
         * 
         * The icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
         * 
         * Note that only the first attempt to set the homeIcon will be executed, subsequent settings are ignored.
         * 
         * This icon must be in PNG format. The property can either hold the URL of one single icon which is used for all devices (and possibly scaled, which looks not perfect), or an object holding icon URLs for the different required sizes.
         * 
         * A desktop icon (used for bookmarks and overriding the favicon) can also be configured. This requires an object to be given and the "icon" property of this object then defines the desktop bookmark icon. For this icon, PNG is not supported by Internet Explorer. The ICO format is supported by all browsers. ICO is also preferred for this desktop icon setting because the file can contain different images for different resolutions.
         * 
         * One example is:
         * 
         * app.setHomeIcon({ 'phone':'phone-icon.png', 'phone@2':'phone-retina.png', 'tablet':'tablet-icon.png', 'tablet@2':'tablet-retina.png', 'icon':'desktop.ico' });
         * 
         * The respective image sizes are 57/114 px for the phone and 72/144 px for the tablet. If an object is given but one of the sizes is not given, the largest given icon will be used for this size.
         * 
         * On Android these icons may or may not be used by the device. Apparently chances can be improved by adding glare effect and rounded corners, setting the file name so it ends with "-precomposed.png" and setting the "homeIconPrecomposed" property to "true".
        */
        public getHomeIcon(): any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Returns a metadata object for class sap.m.App.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Sets a new value for property {@link #getBackgroundColor backgroundColor}.
         * 
         * Background color of the App. If set, this color will override the default background defined by the theme. So this should only be set when really required. Any configured background image will be placed above this colored background. But any theme adaptation in the Theme Designer will override this setting. Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete App or whether it should be tiled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBackgroundColor(sBackgroundColor: string): this;

        /**
            * Sets a new value for property {@link #getBackgroundImage backgroundImage}.
         * 
         * Background image of the App. If set, this image will override the default background defined by the theme. So this should only be set when really required. This background image will be placed above any color set for the background. But any theme adaptation in the Theme Designer will override this image setting. Use the "backgroundRepeat" property to define whether this image should be stretched to cover the complete App or whether it should be tiled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBackgroundImage(sBackgroundImage: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getBackgroundOpacity backgroundOpacity}.
         * 
         * Opacity of the background image. The opacity can be set between 0 (fully transparent) and 1 fully opaque). This can be used to make the application content better readable by making the background image partly transparent.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setBackgroundOpacity(fBackgroundOpacity: number): this;

        /**
            * Sets a new value for property {@link #getBackgroundRepeat backgroundRepeat}.
         * 
         * Whether the background image (if configured) should be proportionally stretched to cover the whole App (false) or whether it should be tiled (true).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setBackgroundRepeat(bBackgroundRepeat: boolean): this;

        /**
            * Sets a new value for property {@link #getHomeIcon homeIcon}.
         * 
         * The icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
         * 
         * Note that only the first attempt to set the homeIcon will be executed, subsequent settings are ignored.
         * 
         * This icon must be in PNG format. The property can either hold the URL of one single icon which is used for all devices (and possibly scaled, which looks not perfect), or an object holding icon URLs for the different required sizes.
         * 
         * A desktop icon (used for bookmarks and overriding the favicon) can also be configured. This requires an object to be given and the "icon" property of this object then defines the desktop bookmark icon. For this icon, PNG is not supported by Internet Explorer. The ICO format is supported by all browsers. ICO is also preferred for this desktop icon setting because the file can contain different images for different resolutions.
         * 
         * One example is:
         * 
         * app.setHomeIcon({ 'phone':'phone-icon.png', 'phone@2':'phone-retina.png', 'tablet':'tablet-icon.png', 'tablet@2':'tablet-retina.png', 'icon':'desktop.ico' });
         * 
         * The respective image sizes are 57/114 px for the phone and 72/144 px for the tablet. If an object is given but one of the sizes is not given, the largest given icon will be used for this size.
         * 
         * On Android these icons may or may not be used by the device. Apparently chances can be improved by adding glare effect and rounded corners, setting the file name so it ends with "-precomposed.png" and setting the "homeIconPrecomposed" property to "true".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHomeIcon(oHomeIcon: any): this;

    }
}