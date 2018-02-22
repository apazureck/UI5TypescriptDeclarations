declare module 'sap/uxap/ObjectPageHeader' {
    import { Event } from 'sap/ui/base/Event';
    import { Link } from 'sap/m/Link';
    import { Breadcrumbs } from 'sap/m/Breadcrumbs';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Bar } from 'sap/m/Bar';
    import { Button } from 'sap/m/Button';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IObjectPageHeaderSettings extends IControlSettings {
        objectImageURI?: string;
        objectImageAlt?: string;
        objectImageDensityAware?: boolean;
        objectTitle?: string;
        objectSubtitle?: string;
        objectImageShape?: sap.uxap.ObjectPageHeaderPictureShape;
        isObjectIconAlwaysVisible?: boolean;
        isObjectTitleAlwaysVisible?: boolean;
        isObjectSubtitleAlwaysVisible?: boolean;
        isActionAreaAlwaysVisible?: boolean;
        headerDesign?: sap.uxap.ObjectPageHeaderDesign;
        showTitleSelector?: boolean;
        markFavorite?: boolean;
        markFlagged?: boolean;
        showMarkers?: boolean;
        markLocked?: boolean;
        showPlaceholder?: boolean;
        markChanges?: boolean;
    }

    /**
    
    */
    export class ObjectPageHeader extends Control {

        /**
            * Constructor for a new ObjectPageHeader.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IObjectPageHeaderSettings);


        /**
            * Adds some action to the aggregation {@link #getActions actions}.
        */
        public addAction(oAction: Control): this;

        /**
            * Adds some breadCrumbLink to the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
        */
        public addBreadCrumbLink(oBreadCrumbLink: Link): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:markChangesPress markChangesPress} event of this `sap.uxap.ObjectPageHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
         * 
         * The event is fired when the unsaved changes button is pressed
        */
        attachMarkChangesPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * DOM reference of the changed item's icon to be used for positioning. */
            domRef: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:markChangesPress markChangesPress} event of this `sap.uxap.ObjectPageHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
         * 
         * The event is fired when the unsaved changes button is pressed
        */
        attachMarkChangesPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * DOM reference of the changed item's icon to be used for positioning. */
            domRef: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:markLockedPress markLockedPress} event of this `sap.uxap.ObjectPageHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
         * 
         * The event is fired when the Locked button is pressed
        */
        attachMarkLockedPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * DOM reference of the lock item's icon to be used for positioning. */
            domRef: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:markLockedPress markLockedPress} event of this `sap.uxap.ObjectPageHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
         * 
         * The event is fired when the Locked button is pressed
        */
        attachMarkLockedPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * DOM reference of the lock item's icon to be used for positioning. */
            domRef: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:titleSelectorPress titleSelectorPress} event of this `sap.uxap.ObjectPageHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
         * 
         * The event is fired when the objectPage header title selector (down-arrow) is pressed
        */
        attachTitleSelectorPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * DOM reference of the title item's icon to be used for positioning. */
            domRef: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:titleSelectorPress titleSelectorPress} event of this `sap.uxap.ObjectPageHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.uxap.ObjectPageHeader` itself.
         * 
         * The event is fired when the objectPage header title selector (down-arrow) is pressed
        */
        attachTitleSelectorPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * DOM reference of the title item's icon to be used for positioning. */
            domRef: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the actions in the aggregation {@link #getActions actions}.
        */
        public destroyActions(): this;

        /**
            * Destroys the breadcrumbs in the aggregation {@link #getBreadcrumbs breadcrumbs}.
        */
        public destroyBreadcrumbs(): this;

        /**
            * Destroys all the breadCrumbsLinks in the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
        */
        public destroyBreadCrumbsLinks(): this;

        /**
            * Destroys the navigationBar in the aggregation {@link #getNavigationBar navigationBar}.
        */
        public destroyNavigationBar(): this;

        /**
            * Destroys the sideContentButton in the aggregation {@link #getSideContentButton sideContentButton}.
        */
        public destroySideContentButton(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:markChangesPress markChangesPress} event of this `sap.uxap.ObjectPageHeader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachMarkChangesPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:markLockedPress markLockedPress} event of this `sap.uxap.ObjectPageHeader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachMarkLockedPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:titleSelectorPress titleSelectorPress} event of this `sap.uxap.ObjectPageHeader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTitleSelectorPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.uxap.ObjectPageHeader with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:markChangesPress markChangesPress} to attached listeners.
        */
        protected fireMarkChangesPress(mParameters?: { domRef?: string, }): this;

        /**
            * Fires event {@link #event:markLockedPress markLockedPress} to attached listeners.
        */
        protected fireMarkLockedPress(mParameters?: { domRef?: string, }): this;

        /**
            * Fires event {@link #event:titleSelectorPress titleSelectorPress} to attached listeners.
        */
        protected fireTitleSelectorPress(mParameters?: { domRef?: string, }): this;

        /**
            * Gets content of aggregation {@link #getActions actions}.
         * 
         * List of actions that will be displayed in the header. You can use ObjectPageHeaderActionButton controls to achieve a different visual representation of the action buttons in the action bar and the action sheet (overflow menu). You can use ObjectPageHeaderLayoutData to display a visual separator.
        */
        public getActions(): {};

        /**
            * Gets content of aggregation {@link #getBreadcrumbs breadcrumbs}.
         * 
         * The breadcrumbs displayed in the `ObjectPageHeader`. If this aggregation is set, the `breadCrumbsLinks` aggregation is omitted.
        */
        public getBreadcrumbs(): Breadcrumbs;

        /**
            * Gets content of aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
         * 
         * A list of all the active link elements in the BreadCrumbs control.
        */
        public getBreadCrumbsLinks(): {};

        /**
            * Gets current value of property {@link #getHeaderDesign headerDesign}.
         * 
         * Determines the design of the header - Light or Dark. ** Note: **This property is deprecated. It will continue to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
         * 
         * Default value is `Light`.
        */
        public getHeaderDesign(): sap.uxap.ObjectPageHeaderDesign;

        /**
            * Gets current value of property {@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible}.
         * 
         * Determines whether the action buttons should always be visible or visible only when the header is snapped.
         * 
         * Default value is `true`.
        */
        public getIsActionAreaAlwaysVisible(): boolean;

        /**
            * Gets current value of property {@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible}.
         * 
         * Determines whether the icon should always be visible or visible only when the header is snapped.
         * 
         * Default value is `false`.
        */
        public getIsObjectIconAlwaysVisible(): boolean;

        /**
            * Gets current value of property {@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible}.
         * 
         * Determines whether the subtitle should always be visible or visible only when the header is snapped.
         * 
         * Default value is `true`.
        */
        public getIsObjectSubtitleAlwaysVisible(): boolean;

        /**
            * Gets current value of property {@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible}.
         * 
         * Determines whether the title should always be visible or visible only when the header is snapped.
         * 
         * Default value is `true`.
        */
        public getIsObjectTitleAlwaysVisible(): boolean;

        /**
            * Gets current value of property {@link #getMarkChanges markChanges}.
         * 
         * Marks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together with the markLocked state. If both are set to true, only the locked state will be displayed.
         * 
         * Default value is `false`.
        */
        public getMarkChanges(): boolean;

        /**
            * Gets current value of property {@link #getMarkFavorite markFavorite}.
         * 
         * Set the favorite state to true or false. The showMarkers property must be true for this property to take effect.
         * 
         * Default value is `false`.
        */
        public getMarkFavorite(): boolean;

        /**
            * Gets current value of property {@link #getMarkFlagged markFlagged}.
         * 
         * Set the flagged state to true or false. The showMarkers property must be true for this property to take effect.
         * 
         * Default value is `false`.
        */
        public getMarkFlagged(): boolean;

        /**
            * Gets current value of property {@link #getMarkLocked markLocked}.
         * 
         * Set the locked state of the objectPageHeader.
         * 
         * Default value is `false`.
        */
        public getMarkLocked(): boolean;

        /**
            * Returns a metadata object for class sap.uxap.ObjectPageHeader.
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
            * Gets content of aggregation {@link #getNavigationBar navigationBar}.
         * 
         * An instance of sap.m.Bar to be embedded in the header
        */
        public getNavigationBar(): Bar;

        /**
            * Gets current value of property {@link #getObjectImageAlt objectImageAlt}.
         * 
         * The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property
         * 
         * Default value is ``.
        */
        public getObjectImageAlt(): string;

        /**
            * Gets current value of property {@link #getObjectImageDensityAware objectImageDensityAware}.
         * 
         * The value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for more details on densityAware.
         * 
         * Default value is `false`.
        */
        public getObjectImageDensityAware(): boolean;

        /**
            * Gets current value of property {@link #getObjectImageShape objectImageShape}.
         * 
         * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
         * 
         * Default value is `Square`.
        */
        public getObjectImageShape(): sap.uxap.ObjectPageHeaderPictureShape;

        /**
            * Gets current value of property {@link #getObjectImageURI objectImageURI}.
         * 
         * The URL of the image, representing the business object
        */
        public getObjectImageURI(): string;

        /**
            * Gets current value of property {@link #getObjectSubtitle objectSubtitle}.
         * 
         * The description of the object
        */
        public getObjectSubtitle(): string;

        /**
            * Gets current value of property {@link #getObjectTitle objectTitle}.
         * 
         * The title of the object
        */
        public getObjectTitle(): string;

        /**
            * Gets current value of property {@link #getShowMarkers showMarkers}.
         * 
         * Indicates if object page header title supports showing markers such as flagged and favorite.
         * 
         * Default value is `false`.
        */
        public getShowMarkers(): boolean;

        /**
            * Gets current value of property {@link #getShowPlaceholder showPlaceholder}.
         * 
         * Enables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.
         * 
         * Default value is `false`.
        */
        public getShowPlaceholder(): boolean;

        /**
            * Gets current value of property {@link #getShowTitleSelector showTitleSelector}.
         * 
         * When set to true, the selector arrow icon/image is shown and can be pressed.
         * 
         * Default value is `false`.
        */
        public getShowTitleSelector(): boolean;

        /**
            * Gets content of aggregation {@link #getSideContentButton sideContentButton}.
         * 
         * A button that is used for opening the side content of the page or some additional content.
        */
        public getSideContentButton(): Button;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getActions actions}. and returns its index if found or -1 otherwise.
        */
        public indexOfAction(oAction: Control): number;

        /**
            * Checks for the provided `sap.m.Link` in the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}. and returns its index if found or -1 otherwise.
        */
        public indexOfBreadCrumbLink(oBreadCrumbLink: Link): number;

        /**
            * Inserts a action into the aggregation {@link #getActions actions}.
        */
        public insertAction(oAction: Control, iIndex: number): this;

        /**
            * Inserts a breadCrumbLink into the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
        */
        public insertBreadCrumbLink(oBreadCrumbLink: Link, iIndex: number): this;

        /**
            * Removes a action from the aggregation {@link #getActions actions}.
        */
        public removeAction(vAction: number | string | Control): Control;

        /**
            * Removes all the controls from the aggregation {@link #getActions actions}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllActions(): {};

        /**
            * Removes all the controls from the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllBreadCrumbsLinks(): {};

        /**
            * Removes a breadCrumbLink from the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.
        */
        public removeBreadCrumbLink(vBreadCrumbLink: number | string | Link): Link;

        /**
            * Sets the aggregated {@link #getBreadcrumbs breadcrumbs}.
        */
        public setBreadcrumbs(oBreadcrumbs: Breadcrumbs): this;

        /**
            * Sets a new value for property {@link #getHeaderDesign headerDesign}.
         * 
         * Determines the design of the header - Light or Dark. ** Note: **This property is deprecated. It will continue to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Light`.
        */
        public setHeaderDesign(sHeaderDesign: sap.uxap.ObjectPageHeaderDesign): this;

        /**
            * Sets a new value for property {@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible}.
         * 
         * Determines whether the action buttons should always be visible or visible only when the header is snapped.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIsActionAreaAlwaysVisible(bIsActionAreaAlwaysVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible}.
         * 
         * Determines whether the icon should always be visible or visible only when the header is snapped.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setIsObjectIconAlwaysVisible(bIsObjectIconAlwaysVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible}.
         * 
         * Determines whether the subtitle should always be visible or visible only when the header is snapped.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIsObjectSubtitleAlwaysVisible(bIsObjectSubtitleAlwaysVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible}.
         * 
         * Determines whether the title should always be visible or visible only when the header is snapped.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIsObjectTitleAlwaysVisible(bIsObjectTitleAlwaysVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getMarkChanges markChanges}.
         * 
         * Marks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together with the markLocked state. If both are set to true, only the locked state will be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setMarkChanges(bMarkChanges: boolean): this;

        /**
            * Sets a new value for property {@link #getMarkFavorite markFavorite}.
         * 
         * Set the favorite state to true or false. The showMarkers property must be true for this property to take effect.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setMarkFavorite(bMarkFavorite: boolean): this;

        /**
            * Sets a new value for property {@link #getMarkFlagged markFlagged}.
         * 
         * Set the flagged state to true or false. The showMarkers property must be true for this property to take effect.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setMarkFlagged(bMarkFlagged: boolean): this;

        /**
            * Sets a new value for property {@link #getMarkLocked markLocked}.
         * 
         * Set the locked state of the objectPageHeader.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setMarkLocked(bMarkLocked: boolean): this;

        /**
            * Sets the aggregated {@link #getNavigationBar navigationBar}.
        */
        public setNavigationBar(oNavigationBar: Bar): this;

        /**
            * Sets a new value for property {@link #getObjectImageAlt objectImageAlt}.
         * 
         * The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setObjectImageAlt(sObjectImageAlt: string): this;

        /**
            * Sets a new value for property {@link #getObjectImageDensityAware objectImageDensityAware}.
         * 
         * The value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for more details on densityAware.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setObjectImageDensityAware(bObjectImageDensityAware: boolean): this;

        /**
            * Sets a new value for property {@link #getObjectImageShape objectImageShape}.
         * 
         * Determines whether the picture should be displayed in a square or with a circle-shaped mask.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Square`.
        */
        public setObjectImageShape(sObjectImageShape: sap.uxap.ObjectPageHeaderPictureShape): this;

        /**
            * Sets a new value for property {@link #getObjectImageURI objectImageURI}.
         * 
         * The URL of the image, representing the business object
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setObjectImageURI(sObjectImageURI: string): this;

        /**
            * Sets a new value for property {@link #getObjectSubtitle objectSubtitle}.
         * 
         * The description of the object
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setObjectSubtitle(sObjectSubtitle: string): this;

        /**
            * Sets a new value for property {@link #getObjectTitle objectTitle}.
         * 
         * The title of the object
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setObjectTitle(sObjectTitle: string): this;

        /**
            * Sets a new value for property {@link #getShowMarkers showMarkers}.
         * 
         * Indicates if object page header title supports showing markers such as flagged and favorite.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowMarkers(bShowMarkers: boolean): this;

        /**
            * Sets a new value for property {@link #getShowPlaceholder showPlaceholder}.
         * 
         * Enables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowPlaceholder(bShowPlaceholder: boolean): this;

        /**
            * Sets a new value for property {@link #getShowTitleSelector showTitleSelector}.
         * 
         * When set to true, the selector arrow icon/image is shown and can be pressed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowTitleSelector(bShowTitleSelector: boolean): this;

        /**
            * Sets the aggregated {@link #getSideContentButton sideContentButton}.
        */
        public setSideContentButton(oSideContentButton: Button): this;

    }
}