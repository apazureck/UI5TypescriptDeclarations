declare module 'sap/ui/commons/RowRepeater' {
    import { Event } from 'sap/ui/base/Event';
    import { RowRepeaterFilter } from 'sap/ui/commons/RowRepeaterFilter';
    import { RowRepeaterSorter } from 'sap/ui/commons/RowRepeaterSorter';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Title } from 'sap/ui/core/Title';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IRowRepeaterSettings extends IControlSettings {
        numberOfRows?: number;
        currentPage?: number;
        showMoreSteps?: number;
        fixedRowHeight?: sap.ui.core.CSSSize;
        design?: sap.ui.commons.RowRepeaterDesign;
        threshold?: number;
    }

    /**
    
    */
    export class RowRepeater extends Control {

        /**
            * Constructor for a new RowRepeater.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IRowRepeaterSettings);


        /**
            * Adds some filter to the aggregation {@link #getFilters filters}.
        */
        public addFilter(oFilter: RowRepeaterFilter): this;

        /**
            * Adds some row to the aggregation {@link #getRows rows}.
        */
        public addRow(oRow: Control): this;

        /**
            * Adds some sorter to the aggregation {@link #getSorters sorters}.
        */
        public addSorter(oSorter: RowRepeaterSorter): this;

        /**
            * Applies a filter.
        */
        public applyFilter(sId: string): any;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filter filter} event of this `sap.ui.commons.RowRepeater`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         * 
         * This event is triggered when a filter is set.
        */
        attachFilter<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the filter that has just been applied. */
            filterId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filter filter} event of this `sap.ui.commons.RowRepeater`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         * 
         * This event is triggered when a filter is set.
        */
        attachFilter<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the filter that has just been applied. */
            filterId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:page page} event of this `sap.ui.commons.RowRepeater`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         * 
         * This event is triggered when paging was executed.
        */
        attachPage<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The value of the currentPage property after the change. */
            currentPage: number, /* * The value of the currentPage property before the change. */
            previousPage: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:page page} event of this `sap.ui.commons.RowRepeater`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         * 
         * This event is triggered when paging was executed.
        */
        attachPage<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The value of the currentPage property after the change. */
            currentPage: number, /* * The value of the currentPage property before the change. */
            previousPage: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.commons.RowRepeater`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         * 
         * This event is triggered when the number of rows was changed.
        */
        attachResize<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The value of the numberOfRows property after the change. */
            numberOfRows: number, /* * The value of the numberOfRows property before the change. */
            previousNumberOfRows: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.commons.RowRepeater`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         * 
         * This event is triggered when the number of rows was changed.
        */
        attachResize<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The value of the numberOfRows property after the change. */
            numberOfRows: number, /* * The value of the numberOfRows property before the change. */
            previousNumberOfRows: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:sort sort} event of this `sap.ui.commons.RowRepeater`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         * 
         * This event is triggered when a sorting is applied.
        */
        attachSort<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the sorter that has just been applied. */
            sorterId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:sort sort} event of this `sap.ui.commons.RowRepeater`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RowRepeater` itself.
         * 
         * This event is triggered when a sorting is applied.
        */
        attachSort<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the sorter that has just been applied. */
            sorterId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getRows rows} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindRows(oBindingInfo: {}): this;

        /**
            * Destroys all the filters in the aggregation {@link #getFilters filters}.
        */
        public destroyFilters(): this;

        /**
            * Destroys the noData in the aggregation {@link #getNoData noData}.
        */
        public destroyNoData(): this;

        /**
            * Destroys all the rows in the aggregation {@link #getRows rows}.
        */
        public destroyRows(): this;

        /**
            * Destroys all the sorters in the aggregation {@link #getSorters sorters}.
        */
        public destroySorters(): this;

        /**
            * Destroys the title in the aggregation {@link #getTitle title}.
        */
        public destroyTitle(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:filter filter} event of this `sap.ui.commons.RowRepeater`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFilter(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:page page} event of this `sap.ui.commons.RowRepeater`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPage(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:resize resize} event of this `sap.ui.commons.RowRepeater`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachResize(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:sort sort} event of this `sap.ui.commons.RowRepeater`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSort(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.RowRepeater with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:filter filter} to attached listeners.
        */
        protected fireFilter(mParameters?: { filterId?: string, }): this;

        /**
            * Fires event {@link #event:page page} to attached listeners.
        */
        protected firePage(mParameters?: { currentPage?: number, previousPage?: number, }): this;

        /**
            * Fires event {@link #event:resize resize} to attached listeners.
        */
        protected fireResize(mParameters?: { numberOfRows?: number, previousNumberOfRows?: number, }): this;

        /**
            * Fires event {@link #event:sort sort} to attached listeners.
        */
        protected fireSort(mParameters?: { sorterId?: string, }): this;

        /**
            * Switch to first page.
        */
        public firstPage(): any;

        /**
            * Gets current value of property {@link #getCurrentPage currentPage}.
         * 
         * The index of the page currently displayed. The index starts at 1.
         * 
         * Default value is `1`.
        */
        public getCurrentPage(): number;

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * The visual design of the control.
         * 
         * Default value is `Standard`.
        */
        public getDesign(): sap.ui.commons.RowRepeaterDesign;

        /**
            * Gets content of aggregation {@link #getFilters filters}.
         * 
         * Filters to be provided in toolbar.
        */
        public getFilters(): {};

        /**
            * Gets current value of property {@link #getFixedRowHeight fixedRowHeight}.
         * 
         * Row height adapts to rendered content. If a fixed height is specified the cells have a maximum height and the overflow will be hidden.
         * 
         * Default value is ``.
        */
        public getFixedRowHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.commons.RowRepeater.
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
            * Gets content of aggregation {@link #getNoData noData}.
         * 
         * This control is shown, in case there is no data available to be displayed in the RowRepeater.
        */
        public getNoData(): Control;

        /**
            * Gets current value of property {@link #getNumberOfRows numberOfRows}.
         * 
         * Number of rows displayed.
         * 
         * Default value is `5`.
        */
        public getNumberOfRows(): number;

        /**
            * Gets content of aggregation {@link #getRows rows}.
         * 
         * Rows to be repeated.
        */
        public getRows(): {};

        /**
            * Gets current value of property {@link #getShowMoreSteps showMoreSteps}.
         * 
         * Step size used to increase the numberOfRows value. This feature is only active if value is greater than 0. This will deactivate the paging feature.
         * 
         * Default value is `0`.
        */
        public getShowMoreSteps(): number;

        /**
            * Gets content of aggregation {@link #getSorters sorters}.
         * 
         * Sorters to be provided in secondary toolbar.
        */
        public getSorters(): {};

        /**
            * Gets current value of property {@link #getThreshold threshold}.
         * 
         * Threshold to fetch the next chunk of data. The minimal threshold can be the numberOfRows of the RR.
        */
        public getThreshold(): number;

        /**
            * Gets content of aggregation {@link #getTitle title}.
         * 
         * Title to be displayed in top left corner. Either text or icon.
        */
        public getTitle(): Title;

        /**
            * Switch to specified page.
        */
        public gotoPage(iPageNumber: number): any;

        /**
            * Checks for the provided `sap.ui.commons.RowRepeaterFilter` in the aggregation {@link #getFilters filters}. and returns its index if found or -1 otherwise.
        */
        public indexOfFilter(oFilter: RowRepeaterFilter): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getRows rows}. and returns its index if found or -1 otherwise.
        */
        public indexOfRow(oRow: Control): number;

        /**
            * Checks for the provided `sap.ui.commons.RowRepeaterSorter` in the aggregation {@link #getSorters sorters}. and returns its index if found or -1 otherwise.
        */
        public indexOfSorter(oSorter: RowRepeaterSorter): number;

        /**
            * Inserts a filter into the aggregation {@link #getFilters filters}.
        */
        public insertFilter(oFilter: RowRepeaterFilter, iIndex: number): this;

        /**
            * Inserts a row into the aggregation {@link #getRows rows}.
        */
        public insertRow(oRow: Control, iIndex: number): this;

        /**
            * Inserts a sorter into the aggregation {@link #getSorters sorters}.
        */
        public insertSorter(oSorter: RowRepeaterSorter, iIndex: number): this;

        /**
            * Switch to last page.
        */
        public lastPage(): any;

        /**
            * Switch to next page.
        */
        public nextPage(): any;

        /**
            * Switch to previous page.
        */
        public previousPage(): any;

        /**
            * Removes all the controls from the aggregation {@link #getFilters filters}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllFilters(): {};

        /**
            * Removes all the controls from the aggregation {@link #getRows rows}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllRows(): {};

        /**
            * Removes all the controls from the aggregation {@link #getSorters sorters}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSorters(): {};

        /**
            * Removes a filter from the aggregation {@link #getFilters filters}.
        */
        public removeFilter(vFilter: number | string | RowRepeaterFilter): RowRepeaterFilter;

        /**
            * Removes a row from the aggregation {@link #getRows rows}.
        */
        public removeRow(vRow: number | string | Control): Control;

        /**
            * Removes a sorter from the aggregation {@link #getSorters sorters}.
        */
        public removeSorter(vSorter: number | string | RowRepeaterSorter): RowRepeaterSorter;

        /**
            * Resizes the row repeater by changing the number of displayed rows. This method will only resize the RowRepeater if the property showMoreSteps is set.
        */
        public resize(iNumberOfRows: number): any;

        /**
            * Setter for property `currentPage`.
        */
        public setCurrentPage(iCurrentPage: number): this;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * The visual design of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setDesign(sDesign: sap.ui.commons.RowRepeaterDesign): this;

        /**
            * Sets a new value for property {@link #getFixedRowHeight fixedRowHeight}.
         * 
         * Row height adapts to rendered content. If a fixed height is specified the cells have a maximum height and the overflow will be hidden.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setFixedRowHeight(sFixedRowHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets the aggregated {@link #getNoData noData}.
        */
        public setNoData(oNoData: Control): this;

        /**
            * Setter for property `numberOfRows`.
         * 
         * Default value is `5`
        */
        public setNumberOfRows(iNumberOfRows: number): this;

        /**
            * Override the default behavior of `setShowMoreSteps` to update the paging mode flag. Any change to the paging mode flag will result in the current page being set to the first page.
        */
        public setShowMoreSteps(iShowMoreSteps: number): this;

        /**
            * Sets a new value for property {@link #getThreshold threshold}.
         * 
         * Threshold to fetch the next chunk of data. The minimal threshold can be the numberOfRows of the RR.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setThreshold(iThreshold: number): this;

        /**
            * Sets the aggregated {@link #getTitle title}.
        */
        public setTitle(oTitle: Title): this;

        /**
            * The `triggerShowMore` function increments the number of rows by the value of `showMoreSteps`.
         * 
         * This method will only trigger a showMore if the property showMoreSteps is set.
        */
        public triggerShowMore(): this;

        /**
            * Sort the data.
        */
        public triggerSort(sId: string): any;

        /**
            * Unbinds aggregation {@link #getRows rows} from model data.
        */
        public unbindRows(): this;

    }
}