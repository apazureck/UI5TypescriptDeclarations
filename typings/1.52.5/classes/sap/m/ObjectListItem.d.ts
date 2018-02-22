declare module 'sap/m/ObjectListItem' {
    import { ObjectAttribute } from 'sap/m/ObjectAttribute';
    import { ObjectMarker } from 'sap/m/ObjectMarker';
    import { ObjectStatus } from 'sap/m/ObjectStatus';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ListItemBase, IListItemBaseSettings } from 'sap/m/ListItemBase';

    export interface IObjectListItemSettings extends IListItemBaseSettings {
        title?: string;
        number?: string;
        numberUnit?: string;
        intro?: string;
        icon?: sap.ui.core.URI;
        activeIcon?: sap.ui.core.URI;
        iconDensityAware?: boolean;
        markFavorite?: boolean;
        markFlagged?: boolean;
        showMarkers?: boolean;
        numberState?: sap.ui.core.ValueState;
        titleTextDirection?: sap.ui.core.TextDirection;
        introTextDirection?: sap.ui.core.TextDirection;
        numberTextDirection?: sap.ui.core.TextDirection;
        markLocked?: boolean;
    }

    /**
    
    */
    export class ObjectListItem extends ListItemBase {

        /**
            * Constructor for a new ObjectListItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IObjectListItemSettings);


        /**
            * Adds some attribute to the aggregation {@link #getAttributes attributes}.
        */
        public addAttribute(oAttribute: ObjectAttribute): this;

        /**
            * Adds some marker to the aggregation {@link #getMarkers markers}.
        */
        public addMarker(oMarker: ObjectMarker): this;

        /**
            * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
        */
        public destroyAttributes(): this;

        /**
            * Destroys the firstStatus in the aggregation {@link #getFirstStatus firstStatus}.
        */
        public destroyFirstStatus(): this;

        /**
            * Destroys all the markers in the aggregation {@link #getMarkers markers}.
        */
        public destroyMarkers(): this;

        /**
            * Destroys the secondStatus in the aggregation {@link #getSecondStatus secondStatus}.
        */
        public destroySecondStatus(): this;

        /**
            * Creates a new subclass of class sap.m.ObjectListItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getActiveIcon activeIcon}.
         * 
         * Icon displayed when the ObjectListItem is active.
        */
        public getActiveIcon(): sap.ui.core.URI;

        /**
            * Gets content of aggregation {@link #getAttributes attributes}.
         * 
         * List of attributes displayed below the title to the left of the status fields.
        */
        public getAttributes(): {};

        /**
            * Gets content of aggregation {@link #getFirstStatus firstStatus}.
         * 
         * First status text field displayed on the right side of the attributes.
        */
        public getFirstStatus(): ObjectStatus;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * ObjectListItem icon displayed to the left of the title.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image (in case this version of image doesn't exist on the server).
         * 
         * If bandwidth is key for the application, set this value to false.
         * 
         * Default value is `true`.
        */
        public getIconDensityAware(): boolean;

        /**
            * Gets current value of property {@link #getIntro intro}.
         * 
         * Defines the introductory text for the ObjectListItem.
        */
        public getIntro(): string;

        /**
            * Gets current value of property {@link #getIntroTextDirection introTextDirection}.
         * 
         * Determines the text direction of the item intro. Available options for the intro direction are LTR (left-to-right) and RTL (right-to-left). By default the item intro inherits the text direction from its parent.
         * 
         * Default value is `Inherit`.
        */
        public getIntroTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets content of aggregation {@link #getMarkers markers}.
         * 
         * List of markers (icon and/or text) that can be displayed for the `ObjectListItems`, such as favorite and flagged.<br><br> ** Note: ** You should use either this aggregation or the already deprecated properties - `markFlagged`, `markFavorite`, and `markLocked`. Using both can lead to unexpected results.
        */
        public getMarkers(): {};

        /**
            * Gets current value of property {@link #getMarkFavorite markFavorite}.
         * 
         * Sets the favorite state for the ObjectListItem.<br><br> ** Note: ** As this property is deprecated, we recommend you use the `markers` aggregation - add `sap.m.ObjectMarker` with type `sap.m.ObjectMarkerType.Favorite`. You should use either this property or the `markers` aggregation, using both may lead to unpredicted behavior.<br><br>
        */
        public getMarkFavorite(): boolean;

        /**
            * Gets current value of property {@link #getMarkFlagged markFlagged}.
         * 
         * Sets the flagged state for the ObjectListItem.<br><br> ** Note: ** As this property is deprecated, we recommend you use the `markers` aggregation - add `sap.m.ObjectMarker` with type `sap.m.ObjectMarkerType.Flagged`. You should use either this property or the `markers` aggregation, using both may lead to unpredicted behavior.<br><br>
        */
        public getMarkFlagged(): boolean;

        /**
            * Gets current value of property {@link #getMarkLocked markLocked}.
         * 
         * Sets the locked state of the ObjectListItem.<br><br> ** Note: ** As this property is deprecated, we recommend you use the `markers` aggregation - add `sap.m.ObjectMarker` with type `sap.m.ObjectMarkerType.Locked`. You should use either this property or the `markers` aggregation, using both may lead to unpredicted behavior.<br><br>
         * 
         * Default value is `false`.
        */
        public getMarkLocked(): boolean;

        /**
            * Returns a metadata object for class sap.m.ObjectListItem.
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
            * Gets current value of property {@link #getNumber number}.
         * 
         * Defines the ObjectListItem number.
        */
        public getNumber(): string;

        /**
            * Gets current value of property {@link #getNumberState numberState}.
         * 
         * Defines the ObjectListItem number and numberUnit value state.
         * 
         * Default value is `None`.
        */
        public getNumberState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getNumberTextDirection numberTextDirection}.
         * 
         * Determines the text direction of the item number. Available options for the number direction are LTR (left-to-right) and RTL (right-to-left). By default the item number inherits the text direction from its parent.
         * 
         * Default value is `Inherit`.
        */
        public getNumberTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getNumberUnit numberUnit}.
         * 
         * Defines the number units qualifier of the ObjectListItem.
        */
        public getNumberUnit(): string;

        /**
            * Gets content of aggregation {@link #getSecondStatus secondStatus}.
         * 
         * Second status text field displayed on the right side of the attributes.
        */
        public getSecondStatus(): ObjectStatus;

        /**
            * Gets current value of property {@link #getShowMarkers showMarkers}.
         * 
         * If set to true, the ObjectListItem can be marked with icons such as favorite and flag.<br><br> ** Note: ** This property is valid only if you are using the already deprecated properties - `markFlagged`, `markFavorite`, and `markLocked`. If you are using the `markers` aggregation, the visibility of the markers depends on what is set in the aggregation itself.<br><br>
        */
        public getShowMarkers(): boolean;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the ObjectListItem title.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getTitleTextDirection titleTextDirection}.
         * 
         * Determines the text direction of the item title. Available options for the title direction are LTR (left-to-right) and RTL (right-to-left). By default the item title inherits the text direction from its parent.
         * 
         * Default value is `Inherit`.
        */
        public getTitleTextDirection(): sap.ui.core.TextDirection;

        /**
            * Checks for the provided `sap.m.ObjectAttribute` in the aggregation {@link #getAttributes attributes}. and returns its index if found or -1 otherwise.
        */
        public indexOfAttribute(oAttribute: ObjectAttribute): number;

        /**
            * Checks for the provided `sap.m.ObjectMarker` in the aggregation {@link #getMarkers markers}. and returns its index if found or -1 otherwise.
        */
        public indexOfMarker(oMarker: ObjectMarker): number;

        /**
            * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
        */
        public insertAttribute(oAttribute: ObjectAttribute, iIndex: number): this;

        /**
            * Inserts a marker into the aggregation {@link #getMarkers markers}.
        */
        public insertMarker(oMarker: ObjectMarker, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getAttributes attributes}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllAttributes(): {};

        /**
            * Removes all the controls from the aggregation {@link #getMarkers markers}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllMarkers(): {};

        /**
            * Removes a attribute from the aggregation {@link #getAttributes attributes}.
        */
        public removeAttribute(vAttribute: number | string | ObjectAttribute): ObjectAttribute;

        /**
            * Removes a marker from the aggregation {@link #getMarkers markers}.
        */
        public removeMarker(vMarker: number | string | ObjectMarker): ObjectMarker;

        /**
            * Sets a new value for property {@link #getActiveIcon activeIcon}.
         * 
         * Icon displayed when the ObjectListItem is active.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setActiveIcon(sActiveIcon: sap.ui.core.URI): this;

        /**
            * Sets the aggregated {@link #getFirstStatus firstStatus}.
        */
        public setFirstStatus(oFirstStatus: ObjectStatus): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * ObjectListItem icon displayed to the left of the title.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image (in case this version of image doesn't exist on the server).
         * 
         * If bandwidth is key for the application, set this value to false.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconDensityAware(bIconDensityAware: boolean): this;

        /**
            * Sets a new value for property {@link #getIntro intro}.
         * 
         * Defines the introductory text for the ObjectListItem.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIntro(sIntro: string): this;

        /**
            * Sets a new value for property {@link #getIntroTextDirection introTextDirection}.
         * 
         * Determines the text direction of the item intro. Available options for the intro direction are LTR (left-to-right) and RTL (right-to-left). By default the item intro inherits the text direction from its parent.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setIntroTextDirection(sIntroTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets the visibility value of the Favorite marker.
        */
        public setMarkFavorite(bMarked: boolean): this;

        /**
            * Sets the visibility value of the Flagged marker.
        */
        public setMarkFlagged(bMarked: boolean): this;

        /**
            * Sets the visibility value of the Favorite marker.
        */
        public setMarkLocked(bMarked: boolean): this;

        /**
            * Sets a new value for property {@link #getNumber number}.
         * 
         * Defines the ObjectListItem number.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNumber(sNumber: string): this;

        /**
            * Sets a new value for property {@link #getNumberState numberState}.
         * 
         * Defines the ObjectListItem number and numberUnit value state.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setNumberState(sNumberState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getNumberTextDirection numberTextDirection}.
         * 
         * Determines the text direction of the item number. Available options for the number direction are LTR (left-to-right) and RTL (right-to-left). By default the item number inherits the text direction from its parent.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setNumberTextDirection(sNumberTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getNumberUnit numberUnit}.
         * 
         * Defines the number units qualifier of the ObjectListItem.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNumberUnit(sNumberUnit: string): this;

        /**
            * Sets the aggregated {@link #getSecondStatus secondStatus}.
        */
        public setSecondStatus(oSecondStatus: ObjectStatus): this;

        /**
            * Sets the visibility value of the Flagged and Favorite markers.
        */
        public setShowMarkers(bMarked: boolean): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Defines the ObjectListItem title.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getTitleTextDirection titleTextDirection}.
         * 
         * Determines the text direction of the item title. Available options for the title direction are LTR (left-to-right) and RTL (right-to-left). By default the item title inherits the text direction from its parent.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTitleTextDirection(sTitleTextDirection: sap.ui.core.TextDirection): this;

    }
}