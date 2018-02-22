declare module 'sap/m/FacetFilter' {
    import { Event } from 'sap/ui/base/Event';
    import { FacetFilterList } from 'sap/m/FacetFilterList';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IFacetFilterSettings extends IControlSettings {
        showPersonalization?: boolean;
        type?: sap.m.FacetFilterType;
        liveSearch?: boolean;
        showSummaryBar?: boolean;
        showReset?: boolean;
        showPopoverOKButton?: boolean;
    }

    /**
    
    */
    export class FacetFilter extends Control {

        /**
            * Constructor for a new `FacetFilter`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFacetFilterSettings);


        /**
            * Adds some list to the aggregation {@link #getLists lists}.
        */
        public addList(oList: FacetFilterList): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.m.FacetFilter`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FacetFilter` itself.
         * 
         * Fired when the user confirms filter selection.
        */
        attachConfirm<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.m.FacetFilter`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FacetFilter` itself.
         * 
         * Fired when the user confirms filter selection.
        */
        attachConfirm<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:reset reset} event of this `sap.m.FacetFilter`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FacetFilter` itself.
         * 
         * Fired when the Reset button is pressed to inform that all FacetFilterLists need to be reset.
        */
        attachReset<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:reset reset} event of this `sap.m.FacetFilter`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FacetFilter` itself.
         * 
         * Fired when the Reset button is pressed to inform that all FacetFilterLists need to be reset.
        */
        attachReset<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the lists in the aggregation {@link #getLists lists}.
        */
        public destroyLists(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:confirm confirm} event of this `sap.m.FacetFilter`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachConfirm(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:reset reset} event of this `sap.m.FacetFilter`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachReset(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.FacetFilter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:confirm confirm} to attached listeners.
        */
        protected fireConfirm(mParameters?: {}): this;

        /**
            * Fires event {@link #event:reset reset} to attached listeners.
        */
        protected fireReset(mParameters?: {}): this;

        /**
            * Gets content of aggregation {@link #getLists lists}.
         * 
         * Collection of FacetFilterList controls.
        */
        public getLists(): {};

        /**
            * Gets current value of property {@link #getLiveSearch liveSearch}.
         * 
         * Enables/disables live search in the search field of all `sap.m.FacetFilterList` instances.
         * 
         * Default value is `true`.
        */
        public getLiveSearch(): boolean;

        /**
            * Returns a metadata object for class sap.m.FacetFilter.
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
            * Gets current value of property {@link #getShowPersonalization showPersonalization}.
         * 
         * If set to `true` and the FacetFilter type is `Simple`, then the Add Facet icon will be displayed and each facet button will also have a Facet Remove icon displayed beside it, allowing the user to deactivate the facet.
         * 
         * Default value is `false`.
        */
        public getShowPersonalization(): boolean;

        /**
            * Gets current value of property {@link #getShowPopoverOKButton showPopoverOKButton}.
         * 
         * If set to `true`, an OK button is displayed for every FacetFilterList popover. This button allows the user to close the popover from within the popover instead of having to click outside of it.
         * 
         * Default value is `false`.
        */
        public getShowPopoverOKButton(): boolean;

        /**
            * Gets current value of property {@link #getShowReset showReset}.
         * 
         * Shows/hides the FacetFilter Reset button.
         * 
         * Default value is `true`.
        */
        public getShowReset(): boolean;

        /**
            * Gets current value of property {@link #getShowSummaryBar showSummaryBar}.
         * 
         * Shows the summary bar instead of the FacetFilter buttons bar when set to `true`.
         * 
         * Default value is `false`.
        */
        public getShowSummaryBar(): boolean;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Defines the default appearance of the FacetFilter on the device. Possible values are `Simple` (default) and `Light`.
         * 
         * Default value is `Simple`.
        */
        public getType(): sap.m.FacetFilterType;

        /**
            * Checks for the provided `sap.m.FacetFilterList` in the aggregation {@link #getLists lists}. and returns its index if found or -1 otherwise.
        */
        public indexOfList(oList: FacetFilterList): number;

        /**
            * Inserts a list into the aggregation {@link #getLists lists}.
        */
        public insertList(oList: FacetFilterList, iIndex: number): this;

        /**
            * Opens the FacetFilter dialog.
        */
        public openFilterDialog(): this;

        /**
            * Removes all the controls from the aggregation {@link #getLists lists}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllLists(): {};

        /**
            * Removes a list from the aggregation {@link #getLists lists}.
        */
        public removeList(vList: number | string | FacetFilterList): FacetFilterList;

        /**
            * Sets a new value for property {@link #getLiveSearch liveSearch}.
         * 
         * Enables/disables live search in the search field of all `sap.m.FacetFilterList` instances.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setLiveSearch(bLiveSearch: boolean): this;

        /**
            * Sets a new value for property {@link #getShowPersonalization showPersonalization}.
         * 
         * If set to `true` and the FacetFilter type is `Simple`, then the Add Facet icon will be displayed and each facet button will also have a Facet Remove icon displayed beside it, allowing the user to deactivate the facet.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowPersonalization(bShowPersonalization: boolean): this;

        /**
            * Sets a new value for property {@link #getShowPopoverOKButton showPopoverOKButton}.
         * 
         * If set to `true`, an OK button is displayed for every FacetFilterList popover. This button allows the user to close the popover from within the popover instead of having to click outside of it.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowPopoverOKButton(bShowPopoverOKButton: boolean): this;

        /**
            * Sets a new value for property {@link #getShowReset showReset}.
         * 
         * Shows/hides the FacetFilter Reset button.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowReset(bShowReset: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSummaryBar showSummaryBar}.
         * 
         * Shows the summary bar instead of the FacetFilter buttons bar when set to `true`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowSummaryBar(bShowSummaryBar: boolean): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Defines the default appearance of the FacetFilter on the device. Possible values are `Simple` (default) and `Light`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Simple`.
        */
        public setType(sType: sap.m.FacetFilterType): this;

    }
}