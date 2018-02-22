declare module 'sap/ui/ux3/ThingInspector' {
    import { Event } from 'sap/ui/base/Event';
    import { ThingAction } from 'sap/ui/ux3/ThingAction';
    import { NavigationItem } from 'sap/ui/ux3/NavigationItem';
    import { ThingGroup } from 'sap/ui/ux3/ThingGroup';
    import { ActionBar } from 'sap/ui/ux3/ActionBar';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Overlay, IOverlaySettings } from 'sap/ui/ux3/Overlay';

    export interface IThingInspectorSettings extends IOverlaySettings {
        firstTitle?: string;
        type?: string;
        icon?: sap.ui.core.URI;
        secondTitle?: string;
        followState?: sap.ui.ux3.FollowActionState;
        flagState?: boolean;
        favoriteState?: boolean;
        favoriteActionEnabled?: boolean;
        updateActionEnabled?: boolean;
        followActionEnabled?: boolean;
        flagActionEnabled?: boolean;
        headerType?: sap.ui.ux3.ThingViewerHeaderType;
    }

    /**
    
    */
    export class ThingInspector extends Overlay {

        /**
            * Constructor for a new ThingInspector.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IThingInspectorSettings);


        /**
            * Adds some action to the aggregation {@link #getActions actions}.
        */
        public addAction(oAction: ThingAction): this;

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
            * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this `sap.ui.ux3.ThingInspector`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
         * 
         * Further thing related Action selected
        */
        attachActionSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of selected ThingAction */
            id: string, /* * Selected ThingAction */
            action: ThingAction,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this `sap.ui.ux3.ThingInspector`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
         * 
         * Further thing related Action selected
        */
        attachActionSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of selected ThingAction */
            id: string, /* * Selected ThingAction */
            action: ThingAction,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingInspector`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
         * 
         * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected.
        */
        attachFacetSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of selected NavigationItem */
            id: string, /* * The selected NavigationItem */
            item: NavigationItem, /* * Key of selected NavigationItem */
            key: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingInspector`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
         * 
         * Event for facet selection. The application is responsible for displaying the correct content for the selected one. The ThingInspector will currently always mark the first facet as selected.
        */
        attachFacetSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of selected NavigationItem */
            id: string, /* * The selected NavigationItem */
            item: NavigationItem, /* * Key of selected NavigationItem */
            key: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ThingInspector`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
         * 
         * Fired when a new feed entry is submitted.
        */
        attachFeedSubmit<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Feed text */
            text: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ThingInspector`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ThingInspector` itself.
         * 
         * Fired when a new feed entry is submitted.
        */
        attachFeedSubmit<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Feed text */
            text: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys the actionBar in the aggregation {@link #getActionBar actionBar}.
        */
        public destroyActionBar(): this;

        /**
            * Destroys all the actions in the aggregation {@link #getActions actions}.
        */
        public destroyActions(): this;

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
            * Detaches event handler `fnFunction` from the {@link #event:actionSelected actionSelected} event of this `sap.ui.ux3.ThingInspector`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachActionSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:facetSelected facetSelected} event of this `sap.ui.ux3.ThingInspector`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFacetSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ThingInspector`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFeedSubmit(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.ThingInspector with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.ux3.Overlay.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:actionSelected actionSelected} to attached listeners.
        */
        protected fireActionSelected(mParameters?: { id?: string, action?: ThingAction, }): this;

        /**
            * Fires event {@link #event:facetSelected facetSelected} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireFacetSelected(mParameters?: { id?: string, item?: NavigationItem, key?: string, }): boolean;

        /**
            * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
        */
        protected fireFeedSubmit(mParameters?: { text?: string, }): this;

        /**
            * Gets content of aggregation {@link #getActionBar actionBar}.
         * 
         * ActionBar. If no actionBar is set a default ActionBar will be created.
        */
        public getActionBar(): ActionBar;

        /**
            * Gets content of aggregation {@link #getActions actions}.
         * 
         * Actions of a Thing
        */
        public getActions(): {};

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
            * Gets current value of property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
         * 
         * Favorite action enabled/disabled. If disabled the action will be invisible.
         * 
         * Default value is `true`.
        */
        public getFavoriteActionEnabled(): boolean;

        /**
            * Gets current value of property {@link #getFavoriteState favoriteState}.
         * 
         * State Of favorite Action
         * 
         * Default value is `false`.
        */
        public getFavoriteState(): boolean;

        /**
            * Gets current value of property {@link #getFirstTitle firstTitle}.
         * 
         * First Line of the Thing Inspector Title
        */
        public getFirstTitle(): string;

        /**
            * Gets current value of property {@link #getFlagActionEnabled flagActionEnabled}.
         * 
         * Flag action enabled/disabled. If disabled the action will be invisible.
         * 
         * Default value is `true`.
        */
        public getFlagActionEnabled(): boolean;

        /**
            * Gets current value of property {@link #getFlagState flagState}.
         * 
         * State of Flag Action
         * 
         * Default value is `false`.
        */
        public getFlagState(): boolean;

        /**
            * Gets current value of property {@link #getFollowActionEnabled followActionEnabled}.
         * 
         * Follow action enabled/disabled. If disabled the action will be invisible.
         * 
         * Default value is `true`.
        */
        public getFollowActionEnabled(): boolean;

        /**
            * Gets current value of property {@link #getFollowState followState}.
         * 
         * Follow State of a Thing
         * 
         * Default value is `Default`.
        */
        public getFollowState(): sap.ui.ux3.FollowActionState;

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
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Thing Icon Url
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.ux3.ThingInspector.
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
            * Gets current value of property {@link #getSecondTitle secondTitle}.
         * 
         * Second Line of the Thing Inspector Title
        */
        public getSecondTitle(): string;

        /**
            * ID of the element which is the current target of the association {@link #getSelectedFacet selectedFacet}, or `null`.
        */
        public getSelectedFacet(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Thing type
        */
        public getType(): string;

        /**
            * Gets current value of property {@link #getUpdateActionEnabled updateActionEnabled}.
         * 
         * Update action enabled/disabled. If disabled the action will be invisible.
         * 
         * Default value is `true`.
        */
        public getUpdateActionEnabled(): boolean;

        /**
            * Checks for the provided `sap.ui.ux3.ThingAction` in the aggregation {@link #getActions actions}. and returns its index if found or -1 otherwise.
        */
        public indexOfAction(oAction: ThingAction): number;

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
            * Inserts a action into the aggregation {@link #getActions actions}.
        */
        public insertAction(oAction: ThingAction, iIndex: number): this;

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
            * Opens this instance of ThingIspector
        */
        public open(initialFocusId?: string): any;

        /**
            * Removes a action from the aggregation {@link #getActions actions}.
        */
        public removeAction(vAction: number | string | ThingAction): ThingAction;

        /**
            * Removes all the controls from the aggregation {@link #getActions actions}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllActions(): {};

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
            * Sets a new value for property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
         * 
         * Favorite action enabled/disabled. If disabled the action will be invisible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setFavoriteActionEnabled(bFavoriteActionEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getFavoriteState favoriteState}.
         * 
         * State Of favorite Action
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFavoriteState(bFavoriteState: boolean): this;

        /**
            * Sets a new value for property {@link #getFirstTitle firstTitle}.
         * 
         * First Line of the Thing Inspector Title
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFirstTitle(sFirstTitle: string): this;

        /**
            * Sets a new value for property {@link #getFlagActionEnabled flagActionEnabled}.
         * 
         * Flag action enabled/disabled. If disabled the action will be invisible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setFlagActionEnabled(bFlagActionEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getFlagState flagState}.
         * 
         * State of Flag Action
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFlagState(bFlagState: boolean): this;

        /**
            * Sets a new value for property {@link #getFollowActionEnabled followActionEnabled}.
         * 
         * Follow action enabled/disabled. If disabled the action will be invisible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setFollowActionEnabled(bFollowActionEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getFollowState followState}.
         * 
         * Follow State of a Thing
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Default`.
        */
        public setFollowState(sFollowState: sap.ui.ux3.FollowActionState): this;

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
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Thing Icon Url
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getSecondTitle secondTitle}.
         * 
         * Second Line of the Thing Inspector Title
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSecondTitle(sSecondTitle: string): this;

        /**
            * Sets the associated {@link #getSelectedFacet selectedFacet}.
        */
        public setSelectedFacet(oSelectedFacet: sap.ui.core.ID | NavigationItem): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Thing type
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setType(sType: string): this;

        /**
            * Sets a new value for property {@link #getUpdateActionEnabled updateActionEnabled}.
         * 
         * Update action enabled/disabled. If disabled the action will be invisible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setUpdateActionEnabled(bUpdateActionEnabled: boolean): this;

    }
}