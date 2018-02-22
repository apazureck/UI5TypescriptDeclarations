declare module 'sap/ui/ux3/ThingViewer' {
    import { Event } from 'sap/ui/base/Event';
    import { NavigationItem } from 'sap/ui/ux3/NavigationItem';
    import { ThingGroup } from 'sap/ui/ux3/ThingGroup';
    import { ActionBar } from 'sap/ui/ux3/ActionBar';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IThingViewerSettings extends IControlSettings {
        title?: string;
        type?: string;
        icon?: sap.ui.core.URI;
        subtitle?: string;
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        headerType?: sap.ui.ux3.ThingViewerHeaderType;
    }

    /**
    
    */
    export class ThingViewer extends Control {

        /**
            * Constructor for a new ThingViewer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IThingViewerSettings);


        /**
            * Adds some facet to the aggregation {@link #getFacets facets}.
        */
        public addFacet(oFacet: NavigationItem): this;

        /**
            * Adds some facetContent to the aggregation {@link #getFacetContent facetContent}.
        */
        public addFacetContent(oFacetContent: ThingGroup): this;

        /**
            * Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}.
        */
        public addHeaderContent(oHeaderContent: ThingGroup): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingViewer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ThingViewer` itself.
         * 
         * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected.
        */
        attachFacetSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of selected NavigationItem */
            id: string, /* * The selected NavigationItem */
            item: NavigationItem, /* * Key of selected NavigationItem */
            key: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingViewer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ThingViewer` itself.
         * 
         * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected.
        */
        attachFacetSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of selected NavigationItem */
            id: string, /* * The selected NavigationItem */
            item: NavigationItem, /* * Key of selected NavigationItem */
            key: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys the actionBar in the aggregation {@link #getActionBar actionBar}.
        */
        public destroyActionBar(): this;

        /**
            * Destroys all the facetContent in the aggregation {@link #getFacetContent facetContent}.
        */
        public destroyFacetContent(): this;

        /**
            * Destroys all the facets in the aggregation {@link #getFacets facets}.
        */
        public destroyFacets(): this;

        /**
            * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
        */
        public destroyHeaderContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingViewer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFacetSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.ThingViewer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:facetSelected facetSelected} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireFacetSelected(mParameters?: { id?: string, item?: NavigationItem, key?: string, }): boolean;

        /**
            * Gets content of aggregation {@link #getActionBar actionBar}.
         * 
         * An ActionBar can be given
        */
        public getActionBar(): ActionBar;

        /**
            * Gets content of aggregation {@link #getFacetContent facetContent}.
         * 
         * ThingGroups for content of the selected facet
        */
        public getFacetContent(): {};

        /**
            * Gets content of aggregation {@link #getFacets facets}.
         * 
         * Thing Inspector facets
        */
        public getFacets(): {};

        /**
            * Gets content of aggregation {@link #getHeaderContent headerContent}.
         * 
         * ThingGroups for the header content
        */
        public getHeaderContent(): {};

        /**
            * Gets current value of property {@link #getHeaderType headerType}.
         * 
         * Defines which header type should be used.
         * 
         * Default value is `Standard`.
        */
        public getHeaderType(): sap.ui.ux3.ThingViewerHeaderType;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Height of the ThingViewer
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Thing Icon Url
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.ux3.ThingViewer.
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
            * ID of the element which is the current target of the association {@link #getSelectedFacet selectedFacet}, or `null`.
        */
        public getSelectedFacet(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getSubtitle subtitle}.
         * 
         * Subtitle of the Thing Inspector
        */
        public getSubtitle(): string;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Title of the Thing Inspector
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Thing type
        */
        public getType(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of the ThingViewer
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getFacets facets}. and returns its index if found or -1 otherwise.
        */
        public indexOfFacet(oFacet: NavigationItem): number;

        /**
            * Checks for the provided `sap.ui.ux3.ThingGroup` in the aggregation {@link #getFacetContent facetContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfFacetContent(oFacetContent: ThingGroup): number;

        /**
            * Checks for the provided `sap.ui.ux3.ThingGroup` in the aggregation {@link #getHeaderContent headerContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfHeaderContent(oHeaderContent: ThingGroup): number;

        /**
            * Inserts a facet into the aggregation {@link #getFacets facets}.
        */
        public insertFacet(oFacet: NavigationItem, iIndex: number): this;

        /**
            * Inserts a facetContent into the aggregation {@link #getFacetContent facetContent}.
        */
        public insertFacetContent(oFacetContent: ThingGroup, iIndex: number): this;

        /**
            * Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}.
        */
        public insertHeaderContent(oHeaderContent: ThingGroup, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getFacetContent facetContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllFacetContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getFacets facets}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllFacets(): {};

        /**
            * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllHeaderContent(): {};

        /**
            * Removes a facet from the aggregation {@link #getFacets facets}.
        */
        public removeFacet(vFacet: number | string | NavigationItem): NavigationItem;

        /**
            * Removes a facetContent from the aggregation {@link #getFacetContent facetContent}.
        */
        public removeFacetContent(vFacetContent: number | string | ThingGroup): ThingGroup;

        /**
            * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
        */
        public removeHeaderContent(vHeaderContent: number | string | ThingGroup): ThingGroup;

        /**
            * Sets the aggregated {@link #getActionBar actionBar}.
        */
        public setActionBar(oActionBar: ActionBar): this;

        /**
            * Sets a new value for property {@link #getHeaderType headerType}.
         * 
         * Defines which header type should be used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setHeaderType(sHeaderType: sap.ui.ux3.ThingViewerHeaderType): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Height of the ThingViewer
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Thing Icon Url
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets the associated {@link #getSelectedFacet selectedFacet}.
        */
        public setSelectedFacet(oSelectedFacet: sap.ui.core.ID | NavigationItem): this;

        /**
            * Sets a new value for property {@link #getSubtitle subtitle}.
         * 
         * Subtitle of the Thing Inspector
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSubtitle(sSubtitle: string): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Title of the Thing Inspector
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Thing type
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setType(sType: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of the ThingViewer
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}