declare module 'sap/m/SplitApp' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { SplitContainer, ISplitContainerSettings } from 'sap/m/SplitContainer';

    export interface ISplitAppSettings extends ISplitContainerSettings {
        homeIcon?: any;
    }

    /**
    
    */
    export class SplitApp extends SplitContainer {

        /**
            * Constructor for a new SplitApp.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISplitAppSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:orientationChange orientationChange} event of this `sap.m.SplitApp`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitApp` itself.
         * 
         * Fires when orientation (portrait/landscape) is changed.
        */
        attachOrientationChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Returns true if the device is in landscape mode. */
            landscape: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:orientationChange orientationChange} event of this `sap.m.SplitApp`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitApp` itself.
         * 
         * Fires when orientation (portrait/landscape) is changed.
        */
        attachOrientationChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Returns true if the device is in landscape mode. */
            landscape: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:orientationChange orientationChange} event of this `sap.m.SplitApp`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachOrientationChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.SplitApp with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.SplitContainer.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:orientationChange orientationChange} to attached listeners.
        */
        protected fireOrientationChange(mParameters?: { landscape?: boolean, }): this;

        /**
            * Gets current value of property {@link #getHomeIcon homeIcon}.
         * 
         * Represents the icon to be displayed on the home screen of iOS devices after the user does "add to home screen". Note that only the first attempt to set the homeIcon is executed, subsequent settings are ignored. The icon must be in PNG format. The property can either store the URL of one single icon or an object holding icon URLs for the different required sizes. Note that if single icon is used for all devices, when scaled, its quality can regress. A desktop icon (used for bookmarks and overriding the favicon) can also be configured. This requires an object to be given and the "icon" property of this object then defines the desktop bookmark icon. For this icon, PNG is not supported by Internet Explorer. The ICO format is supported by all browsers. ICO is also preferred for this desktop icon setting as the file can contain different images for different resolutions.
         * 
         * One example is:
         * 
         * app.setHomeIcon({ 'phone':'phone-icon.png', 'phone@2':'phone-retina.png', 'tablet':'tablet-icon.png', 'tablet@2':'tablet-retina.png', 'icon':'desktop.ico' });
         * 
         * The image size is 57/114 px for the phone and 72/144 px for the tablet. If an object is given but one of the sizes is not given, the largest given icon will be used for this size.
         * 
         * On Android, these icons may or may not be used by the device. Chances can be improved by adding glare effect, rounded corners, setting the file name to end with "-precomposed.png", and setting the homeIconPrecomposed property to true.
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
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns a metadata object for class sap.m.SplitApp.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Sets a new value for property {@link #getHomeIcon homeIcon}.
         * 
         * Represents the icon to be displayed on the home screen of iOS devices after the user does "add to home screen". Note that only the first attempt to set the homeIcon is executed, subsequent settings are ignored. The icon must be in PNG format. The property can either store the URL of one single icon or an object holding icon URLs for the different required sizes. Note that if single icon is used for all devices, when scaled, its quality can regress. A desktop icon (used for bookmarks and overriding the favicon) can also be configured. This requires an object to be given and the "icon" property of this object then defines the desktop bookmark icon. For this icon, PNG is not supported by Internet Explorer. The ICO format is supported by all browsers. ICO is also preferred for this desktop icon setting as the file can contain different images for different resolutions.
         * 
         * One example is:
         * 
         * app.setHomeIcon({ 'phone':'phone-icon.png', 'phone@2':'phone-retina.png', 'tablet':'tablet-icon.png', 'tablet@2':'tablet-retina.png', 'icon':'desktop.ico' });
         * 
         * The image size is 57/114 px for the phone and 72/144 px for the tablet. If an object is given but one of the sizes is not given, the largest given icon will be used for this size.
         * 
         * On Android, these icons may or may not be used by the device. Chances can be improved by adding glare effect, rounded corners, setting the file name to end with "-precomposed.png", and setting the homeIconPrecomposed property to true.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHomeIcon(oHomeIcon: any): this;

    }
}