declare module 'sap/uxap/BreadCrumbs' {
    import { Link } from 'sap/m/Link';
    import { Text } from 'sap/m/Text';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IBreadCrumbsSettings extends IControlSettings {
        showCurrentLocation?: boolean;
    }

    /**
    
    */
    export class BreadCrumbs extends Control {

        /**
            * Constructor for a new BreadCrumbs.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IBreadCrumbsSettings);


        /**
            * Adds some link to the aggregation {@link #getLinks links}.
        */
        public addLink(oLink: Link): this;

        /**
            * Destroys the currentLocation in the aggregation {@link #getCurrentLocation currentLocation}.
        */
        public destroyCurrentLocation(): this;

        /**
            * Destroys all the links in the aggregation {@link #getLinks links}.
        */
        public destroyLinks(): this;

        /**
            * Creates a new subclass of class sap.uxap.BreadCrumbs with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getCurrentLocation currentLocation}.
         * 
         * The current/last element in the BreadCrumbs path.
        */
        public getCurrentLocation(): Text;

        /**
            * Gets content of aggregation {@link #getLinks links}.
         * 
         * A list of all the active link elements in the BreadCrumbs control.
        */
        public getLinks(): {};

        /**
            * Returns a metadata object for class sap.uxap.BreadCrumbs.
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
            * Gets current value of property {@link #getShowCurrentLocation showCurrentLocation}.
         * 
         * Sets the visibility of the current/last element in the BreadCrumbs path.
         * 
         * Default value is `true`.
        */
        public getShowCurrentLocation(): boolean;

        /**
            * Checks for the provided `sap.m.Link` in the aggregation {@link #getLinks links}. and returns its index if found or -1 otherwise.
        */
        public indexOfLink(oLink: Link): number;

        /**
            * Inserts a link into the aggregation {@link #getLinks links}.
        */
        public insertLink(oLink: Link, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getLinks links}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllLinks(): {};

        /**
            * Removes a link from the aggregation {@link #getLinks links}.
        */
        public removeLink(vLink: number | string | Link): Link;

        /**
            * Sets the aggregated {@link #getCurrentLocation currentLocation}.
        */
        public setCurrentLocation(oCurrentLocation: Text): this;

        /**
            * Sets a new value for property {@link #getShowCurrentLocation showCurrentLocation}.
         * 
         * Sets the visibility of the current/last element in the BreadCrumbs path.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowCurrentLocation(bShowCurrentLocation: boolean): this;

    }
}