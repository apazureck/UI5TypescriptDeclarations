declare module 'sap/ui/table/Table' {
    import { Event } from 'sap/ui/base/Event';
    import { Context } from 'sap/ui/model/Context';
    import { Column } from 'sap/ui/table/Column';
    import { DragDropBase } from 'sap/ui/core/dnd/DragDropBase';
    import { Row } from 'sap/ui/table/Row';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { RowAction } from 'sap/ui/table/RowAction';
    import { RowSettings } from 'sap/ui/table/RowSettings';
    import { TooltipBase } from 'sap/ui/core/TooltipBase';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITableSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        rowHeight?: number;
        columnHeaderHeight?: number;
        columnHeaderVisible?: boolean;
        visibleRowCount?: number;
        firstVisibleRow?: number;
        selectionMode?: sap.ui.table.SelectionMode;
        selectionBehavior?: sap.ui.table.SelectionBehavior;
        selectedIndex?: number;
        editable?: boolean;
        navigationMode?: sap.ui.table.NavigationMode;
        threshold?: number;
        enableColumnReordering?: boolean;
        enableGrouping?: boolean;
        showColumnVisibilityMenu?: boolean;
        showNoData?: boolean;
        visibleRowCountMode?: sap.ui.table.VisibleRowCountMode;
        minAutoRowCount?: number;
        fixedColumnCount?: number;
        fixedRowCount?: number;
        fixedBottomRowCount?: number;
        enableColumnFreeze?: boolean;
        enableCellFilter?: boolean;
        showOverlay?: boolean;
        enableSelectAll?: boolean;
        enableCustomFilter?: boolean;
        enableBusyIndicator?: boolean;
        rowActionCount?: number;
        alternateRowColors?: boolean;
    }

    /**
    
    */
    export class Table extends Control {

        /**
            * Constructor for a new Table.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITableSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some column to the aggregation {@link #getColumns columns}.
        */
        public addColumn(oColumn: Column): this;

        /**
            * Adds some dragDropConfig to the aggregation {@link #getDragDropConfig dragDropConfig}.
        */
        public addDragDropConfig(oDragDropConfig: DragDropBase): this;

        /**
            * Adds some extension to the aggregation {@link #getExtension extension}.
        */
        public addExtension(oExtension: Control): this;

        /**
            * Adds some row to the aggregation {@link #getRows rows}.
        */
        public addRow(oRow: Row): this;

        /**
            * Adds the given selection interval to the selection. In case of single selection the "indexTo" value will be used for as selected index.
        */
        public addSelectionInterval(iIndexFrom: number, iIndexTo: number): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:busyStateChanged busyStateChanged} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * This event gets fired when the busy state of the table changes. It should only be used by composite controls.
        */
        attachBusyStateChanged<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:busyStateChanged busyStateChanged} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * This event gets fired when the busy state of the table changes. It should only be used by composite controls.
        */
        attachBusyStateChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cellClick cellClick} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the user clicks a cell of the table (experimental!).
        */
        attachCellClick<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The control of the cell. */
            cellControl: Control, /* * DOM reference of the clicked cell. Can be used to position the context menu. */
            cellDomRef: {}, /* * Row index of the selected cell. */
            rowIndex: number, /* * Column index of the selected cell. This is the index of visible columns and might differ from the index maintained in the column aggregation. */
            columnIndex: number, /* * Column ID of the selected cell. */
            columnId: string, /* * Row binding context of the selected cell. */
            rowBindingContext: Context,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cellClick cellClick} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the user clicks a cell of the table (experimental!).
        */
        attachCellClick<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The control of the cell. */
            cellControl: Control, /* * DOM reference of the clicked cell. Can be used to position the context menu. */
            cellDomRef: {}, /* * Row index of the selected cell. */
            rowIndex: number, /* * Column index of the selected cell. This is the index of visible columns and might differ from the index maintained in the column aggregation. */
            columnIndex: number, /* * Column ID of the selected cell. */
            columnId: string, /* * Row binding context of the selected cell. */
            rowBindingContext: Context,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cellContextmenu cellContextmenu} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the user clicks a cell of the table.
        */
        attachCellContextmenu<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The control of the cell. */
            cellControl: Control, /* * DOM reference of the clicked cell. Can be used to position the context menu. */
            cellDomRef: {}, /* * Row index of the selected cell. */
            rowIndex: number, /* * Column index of the selected cell. This is the index of visible columns and might differ from the index maintained in the column aggregation. */
            columnIndex: number, /* * Column ID of the selected cell. */
            columnId: string, /* * Row binding context of the selected cell. */
            rowBindingContext: Context,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cellContextmenu cellContextmenu} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the user clicks a cell of the table.
        */
        attachCellContextmenu<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The control of the cell. */
            cellControl: Control, /* * DOM reference of the clicked cell. Can be used to position the context menu. */
            cellDomRef: {}, /* * Row index of the selected cell. */
            rowIndex: number, /* * Column index of the selected cell. This is the index of visible columns and might differ from the index maintained in the column aggregation. */
            columnIndex: number, /* * Column ID of the selected cell. */
            columnId: string, /* * Row binding context of the selected cell. */
            rowBindingContext: Context,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:columnFreeze columnFreeze} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when a column of the table should be freezed
        */
        attachColumnFreeze<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * reference to the column to freeze */
            column: Column,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:columnFreeze columnFreeze} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when a column of the table should be freezed
        */
        attachColumnFreeze<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * reference to the column to freeze */
            column: Column,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:columnMove columnMove} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when a table column is moved.
        */
        attachColumnMove<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * moved column. */
            column: Column, /* * new position of the column. */
            newPos: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:columnMove columnMove} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when a table column is moved.
        */
        attachColumnMove<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * moved column. */
            column: Column, /* * new position of the column. */
            newPos: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:columnResize columnResize} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when a table column is resized.
        */
        attachColumnResize<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * resized column. */
            column: Column, /* * new width of the table column as CSS Size definition. */
            width: sap.ui.core.CSSSize,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:columnResize columnResize} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when a table column is resized.
        */
        attachColumnResize<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * resized column. */
            column: Column, /* * new width of the table column as CSS Size definition. */
            width: sap.ui.core.CSSSize,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:columnSelect columnSelect} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when a column of the table has been selected
        */
        attachColumnSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * reference to the selected column */
            column: Column,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:columnSelect columnSelect} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when a column of the table has been selected
        */
        attachColumnSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * reference to the selected column */
            column: Column,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:columnVisibility columnVisibility} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the visibility of a table column is changed.
        */
        attachColumnVisibility<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * affected column. */
            column: Column, /* * new value of the visible property. */
            visible: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:columnVisibility columnVisibility} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the visibility of a table column is changed.
        */
        attachColumnVisibility<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * affected column. */
            column: Column, /* * new value of the visible property. */
            visible: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:customFilter customFilter} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * This event is triggered when the custom filter item of the column menu is pressed. The column on which the event was triggered is passed as parameter.
        */
        attachCustomFilter<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:customFilter customFilter} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * This event is triggered when the custom filter item of the column menu is pressed. The column on which the event was triggered is passed as parameter.
        */
        attachCustomFilter<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filter filter} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the table is filtered.
        */
        attachFilter<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * filtered column. */
            column: Column, /* * filter value. */
            value: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filter filter} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the table is filtered.
        */
        attachFilter<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * filtered column. */
            column: Column, /* * filter value. */
            value: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:firstVisibleRowChanged firstVisibleRowChanged} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * This event gets fired when the first visible row is changed. It should only be used by composite controls. The event even is fired when setFirstVisibleRow is called programmatically.
        */
        attachFirstVisibleRowChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:firstVisibleRowChanged firstVisibleRowChanged} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * This event gets fired when the first visible row is changed. It should only be used by composite controls. The event even is fired when setFirstVisibleRow is called programmatically.
        */
        attachFirstVisibleRowChanged<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:group group} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the table is grouped (experimental!).
        */
        attachGroup<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * grouped column. */
            column: Column,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:group group} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the table is grouped (experimental!).
        */
        attachGroup<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * grouped column. */
            column: Column,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:rowSelectionChange rowSelectionChange} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the row selection of the table has been changed (the event parameters can be used to determine selection changes - to find out the selected rows you should better use the table selection API)
        */
        attachRowSelectionChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * row index which has been clicked so that the selection has been changed (either selected or deselected) */
            rowIndex: number, /* * binding context of the row which has been clicked so that selection has been changed */
            rowContext: {}, /* * array of row indices which selection has been changed (either selected or deselected) */
            rowIndices: {}, /* * indicator if "select all" function is used to select rows */
            selectAll: boolean, /* * indicates that the event was fired due to an explicit user interaction like clicking the row header or using the keyboard (SPACE or ENTER) to select a row or a range of rows. */
            userInteraction: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:rowSelectionChange rowSelectionChange} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the row selection of the table has been changed (the event parameters can be used to determine selection changes - to find out the selected rows you should better use the table selection API)
        */
        attachRowSelectionChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * row index which has been clicked so that the selection has been changed (either selected or deselected) */
            rowIndex: number, /* * binding context of the row which has been clicked so that selection has been changed */
            rowContext: {}, /* * array of row indices which selection has been changed (either selected or deselected) */
            rowIndices: {}, /* * indicator if "select all" function is used to select rows */
            selectAll: boolean, /* * indicates that the event was fired due to an explicit user interaction like clicking the row header or using the keyboard (SPACE or ENTER) to select a row or a range of rows. */
            userInteraction: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:sort sort} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the table is sorted.
        */
        attachSort<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * sorted column. */
            column: Column, /* * Sort Order */
            sortOrder: sap.ui.table.SortOrder, /* * If column was added to sorter this is true. If new sort is started this is set to false */
            columnAdded: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:sort sort} event of this `sap.ui.table.Table`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.Table` itself.
         * 
         * fired when the table is sorted.
        */
        attachSort<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * sorted column. */
            column: Column, /* * Sort Order */
            sortOrder: sap.ui.table.SortOrder, /* * If column was added to sorter this is true. If new sort is started this is set to false */
            columnAdded: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Triggers automatic resizing of a column to the widest content.
        */
        public autoResizeColumn(iColIndex: number): any;

        /**
            * Binds aggregation {@link #getColumns columns} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindColumns(oBindingInfo: {}): this;

        /**
            * Binds aggregation {@link #getRows rows} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindRows(oBindingInfo: {}): this;

        /**
            * Removes complete selection.
        */
        public clearSelection(): this;

        /**
            * Destroys all the columns in the aggregation {@link #getColumns columns}.
        */
        public destroyColumns(): this;

        /**
            * Destroys all the dragDropConfig in the aggregation {@link #getDragDropConfig dragDropConfig}.
        */
        public destroyDragDropConfig(): this;

        /**
            * Destroys all the extension in the aggregation {@link #getExtension extension}.
        */
        public destroyExtension(): this;

        /**
            * Destroys the footer in the aggregation {@link #getFooter footer}.
        */
        public destroyFooter(): this;

        /**
            * Destroys the noData in the aggregation {@link #getNoData noData}.
        */
        public destroyNoData(): this;

        /**
            * Destroys the rowActionTemplate in the aggregation {@link #getRowActionTemplate rowActionTemplate}.
        */
        public destroyRowActionTemplate(): this;

        /**
            * Destroys all the rows in the aggregation {@link #getRows rows}.
        */
        public destroyRows(): this;

        /**
            * Destroys the rowSettingsTemplate in the aggregation {@link #getRowSettingsTemplate rowSettingsTemplate}.
        */
        public destroyRowSettingsTemplate(): this;

        /**
            * Destroys the title in the aggregation {@link #getTitle title}.
        */
        public destroyTitle(): this;

        /**
            * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
        */
        public destroyToolbar(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:busyStateChanged busyStateChanged} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBusyStateChanged(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:cellClick cellClick} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachCellClick(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:cellContextmenu cellContextmenu} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachCellContextmenu(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:columnFreeze columnFreeze} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachColumnFreeze(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:columnMove columnMove} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachColumnMove(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:columnResize columnResize} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachColumnResize(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:columnSelect columnSelect} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachColumnSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:columnVisibility columnVisibility} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachColumnVisibility(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:customFilter customFilter} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachCustomFilter(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:filter filter} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFilter(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:firstVisibleRowChanged firstVisibleRowChanged} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFirstVisibleRowChanged(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:group group} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachGroup(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:rowSelectionChange rowSelectionChange} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachRowSelectionChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:sort sort} event of this `sap.ui.table.Table`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSort(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new {@link sap.ui.core.util.Export} object and fills row/column information from the table if not provided. For the cell content, the column's "sortProperty" will be used (experimental!)
         * 
         * ** Please note: The return value was changed from jQuery Promises to standard ES6 Promises. jQuery specific Promise methods ('done', 'fail', 'always', 'pipe' and 'state') are still available but should not be used. Please use only the standard methods 'then' and 'catch'! **
        */
        public exportData(mSettings?: {}): any;

        /**
            * Creates a new subclass of class sap.ui.table.Table with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Filter the given column by the given value.
        */
        public filter(oColumn: Column, sValue: string): this;

        /**
            * Fires event {@link #event:busyStateChanged busyStateChanged} to attached listeners.
        */
        protected fireBusyStateChanged(mParameters?: {}): this;

        /**
            * Fires event {@link #event:cellClick cellClick} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireCellClick(mParameters?: { cellControl?: Control, cellDomRef?: {}, rowIndex?: number, columnIndex?: number, columnId?: string, rowBindingContext?: Context, }): boolean;

        /**
            * Fires event {@link #event:cellContextmenu cellContextmenu} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireCellContextmenu(mParameters?: { cellControl?: Control, cellDomRef?: {}, rowIndex?: number, columnIndex?: number, columnId?: string, rowBindingContext?: Context, }): boolean;

        /**
            * Fires event {@link #event:columnFreeze columnFreeze} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireColumnFreeze(mParameters?: { column?: Column, }): boolean;

        /**
            * Fires event {@link #event:columnMove columnMove} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireColumnMove(mParameters?: { column?: Column, newPos?: number, }): boolean;

        /**
            * Fires event {@link #event:columnResize columnResize} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireColumnResize(mParameters?: { column?: Column, width?: sap.ui.core.CSSSize, }): boolean;

        /**
            * Fires event {@link #event:columnSelect columnSelect} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireColumnSelect(mParameters?: { column?: Column, }): boolean;

        /**
            * Fires event {@link #event:columnVisibility columnVisibility} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireColumnVisibility(mParameters?: { column?: Column, visible?: boolean, }): boolean;

        /**
            * Fires event {@link #event:customFilter customFilter} to attached listeners.
        */
        protected fireCustomFilter(mParameters?: {}): this;

        /**
            * Fires event {@link #event:filter filter} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireFilter(mParameters?: { column?: Column, value?: string, }): boolean;

        /**
            * Fires event {@link #event:firstVisibleRowChanged firstVisibleRowChanged} to attached listeners.
        */
        protected fireFirstVisibleRowChanged(mParameters?: {}): this;

        /**
            * Fires event {@link #event:group group} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireGroup(mParameters?: { column?: Column, }): boolean;

        /**
            * Fires event {@link #event:rowSelectionChange rowSelectionChange} to attached listeners.
        */
        protected fireRowSelectionChange(mParameters?: { rowIndex?: number, rowContext?: {}, rowIndices?: {}, selectAll?: boolean, userInteraction?: boolean, }): this;

        /**
            * Fires event {@link #event:sort sort} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireSort(mParameters?: { column?: Column, sortOrder?: sap.ui.table.SortOrder, columnAdded?: boolean, }): boolean;

        /**
            * Gets current value of property {@link #getAlternateRowColors alternateRowColors}.
         * 
         * Enables alternating table row colors. Alternate row coloring is not available for the tree mode.
         * 
         * Default value is `false`.
        */
        public getAlternateRowColors(): boolean;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Returns the control inside the cell with the given row index (in the `rows` aggregation) and column index (in the `columns` aggregation or in the list of visible columns only, depending on parameter `bVisibleColumnIndex`).
        */
        protected getCellControl(iRowIndex: number, iColumnIndex: number, bVisibleColumnIndex: boolean): Control;

        /**
            * Gets current value of property {@link #getColumnHeaderHeight columnHeaderHeight}.
         * 
         * Height of the column header of the Table in pixel.
        */
        public getColumnHeaderHeight(): number;

        /**
            * Gets current value of property {@link #getColumnHeaderVisible columnHeaderVisible}.
         * 
         * Flag whether the column header is visible or not.
         * 
         * Default value is `true`.
        */
        public getColumnHeaderVisible(): boolean;

        /**
            * Gets content of aggregation {@link #getColumns columns}.
         * 
         * Columns of the Table
        */
        public getColumns(): {};

        /**
            * Returns the context of a row by its index. Please note that for server-based models like OData, the supplied index might not have been loaded yet. If the context is not available at the client, the binding will trigger a backend request and request this single context. Although this API looks synchronous it may not return a context but load it and fire a change event on the binding.
         * 
         * For server-based models you should consider to only make this API call when the index is within the currently visible scroll area.
        */
        public getContextByIndex(iIndex: number): {};

        /**
            * Gets content of aggregation {@link #getDragDropConfig dragDropConfig}.
         * 
         * Defines the drag-and-drop configuration via {@link sap.ui.core.dnd.DragDropInfo}
         * 
         * The following restrictions apply:  * Drag and drop is not supported on mobile devices and there is no accessible alternative. * Columns cannot be configured to be draggable. * The following rows are not draggable: <ul> <li>Empty rows * Group header rows * Sum rows  </li> <li>Columns cannot be configured to be droppable.</li> <li>The following rows are not droppable:  * The dragged row itself * Empty rows * Group header rows * Sum rows  </li> <li>Texts in draggable rows cannot be selected.</li> <li>The text of input fields in draggable rows can be selected, but not dragged.</li> </ul>
        */
        public getDragDropConfig(): {};

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Flag whether the controls of the Table are editable or not (currently this only controls the background color in certain themes!)
         * 
         * Default value is `true`.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getEnableBusyIndicator enableBusyIndicator}.
         * 
         * If set to `true`, the table changes its busy state, resulting in showing or hiding the busy indicator. The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows. This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved, the table switches back to not busy. The busy state of the table can still be set manually by calling {@link sap.ui.core.Control#setBusy}.
         * 
         * Default value is `false`.
        */
        public getEnableBusyIndicator(): boolean;

        /**
            * Gets current value of property {@link #getEnableCellFilter enableCellFilter}.
         * 
         * Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.
         * 
         * Default value is `false`.
        */
        public getEnableCellFilter(): boolean;

        /**
            * Gets current value of property {@link #getEnableColumnFreeze enableColumnFreeze}.
         * 
         * Flag whether to show or hide the column menu item to freeze or unfreeze a column.
         * 
         * Default value is `false`.
        */
        public getEnableColumnFreeze(): boolean;

        /**
            * Gets current value of property {@link #getEnableColumnReordering enableColumnReordering}.
         * 
         * Flag to enable or disable column reordering
         * 
         * Default value is `true`.
        */
        public getEnableColumnReordering(): boolean;

        /**
            * Gets current value of property {@link #getEnableCustomFilter enableCustomFilter}.
         * 
         * Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a button will be rendered for which' press event (customFilter) you can register an event handler.
         * 
         * Default value is `false`.
        */
        public getEnableCustomFilter(): boolean;

        /**
            * Gets current value of property {@link #getEnableGrouping enableGrouping}.
         * 
         * Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined in the `groupBy` association.
         * 
         * The following restrictions apply:  * Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work with OData models. * The table can only be grouped by ** one ** column at a time. Grouping by another column will remove the current grouping. * If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons). * The column, by which the table is grouped, is not visible. It will become visible again only if the table is grouped by another column or grouping is disabled. 
         * 
         * Default value is `false`.
        */
        public getEnableGrouping(): boolean;

        /**
            * Gets current value of property {@link #getEnableSelectAll enableSelectAll}.
         * 
         * Specifies if a select all button should be displayed in the top left corner. This button is only displayed if the row selector is visible and the selection mode is set to any kind of multi selection.
         * 
         * Default value is `true`.
        */
        public getEnableSelectAll(): boolean;

        /**
            * Gets content of aggregation {@link #getExtension extension}.
         * 
         * Extension section of the Table (if not set it will be hidden)
        */
        public getExtension(): {};

        /**
            * Gets current value of property {@link #getFirstVisibleRow firstVisibleRow}.
         * 
         * First visible row.
         * 
         * Default value is `0`.
        */
        public getFirstVisibleRow(): number;

        /**
            * Gets current value of property {@link #getFixedBottomRowCount fixedBottomRowCount}.
         * 
         * Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.
         * 
         * Default value is `0`.
        */
        public getFixedBottomRowCount(): number;

        /**
            * Gets current value of property {@link #getFixedColumnCount fixedColumnCount}.
         * 
         * Number of columns that are fix on the left. When you use a horizontal scrollbar, only the columns which are not fixed, will scroll. Fixed columns need a defined width for the feature to work. Please note that the aggregated width of all fixed columns must not exceed the table width since there will be no scrollbar for fixed columns.
         * 
         * Default value is `0`.
        */
        public getFixedColumnCount(): number;

        /**
            * Gets current value of property {@link #getFixedRowCount fixedRowCount}.
         * 
         * Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.
         * 
         * Default value is `0`.
        */
        public getFixedRowCount(): number;

        /**
            * Gets content of aggregation {@link #getFooter footer}.
         * 
         * Control or text of footer section of the Table (if not set it will be hidden)
        */
        public getFooter(): Control | string;

        /**
            * ID of the element which is the current target of the association {@link #getGroupBy groupBy}, or `null`.
        */
        public getGroupBy(): sap.ui.core.ID;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

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
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.table.Table.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getMinAutoRowCount minAutoRowCount}.
         * 
         * This property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.
         * 
         * Default value is `5`.
        */
        public getMinAutoRowCount(): number;

        /**
            * Gets current value of property {@link #getNavigationMode navigationMode}.
         * 
         * This property has been deprecated and must not be used anymore, since `Scrollbar` is the only supported option.
         * 
         * Default value is `Scrollbar`.
        */
        public getNavigationMode(): sap.ui.table.NavigationMode;

        /**
            * Gets content of aggregation {@link #getNoData noData}.
         * 
         * The value for the noData aggregation can be either a string value or a control instance. The control is shown, in case there is no data for the Table available. In case of a string value this will simply replace the no data text.
        */
        public getNoData(): Control | string;

        /**
            * Gets current value of property {@link #getRowActionCount rowActionCount}.
         * 
         * Number of row actions made visible which determines the width of the row action column. The values `0`, `1` and `2` are possible.
         * 
         * Default value is `0`.
        */
        public getRowActionCount(): number;

        /**
            * Gets content of aggregation {@link #getRowActionTemplate rowActionTemplate}.
         * 
         * Template for row actions. A template is decoupled from the row or table. Each time the template's properties or aggregations are changed, the template has to be applied again via `setRowActionTemplate` for the changes to take effect.
        */
        public getRowActionTemplate(): RowAction;

        /**
            * Gets current value of property {@link #getRowHeight rowHeight}.
         * 
         * Height of a row of the Table in pixel.
        */
        public getRowHeight(): number;

        /**
            * Gets content of aggregation {@link #getRows rows}.
         * 
         * Rows of the Table
        */
        public getRows(): {};

        /**
            * Gets content of aggregation {@link #getRowSettingsTemplate rowSettingsTemplate}.
         * 
         * Template for row settings. A template is decoupled from the row or table. Each time the template's properties or aggregations are changed, the template has to be applied again via `setRowSettingsTemplate` for the changes to take effect.
        */
        public getRowSettingsTemplate(): RowSettings;

        /**
            * Gets current value of property {@link #getSelectedIndex selectedIndex}.
         * 
         * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the lead selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.
         * 
         * Default value is `-1`.
        */
        public getSelectedIndex(): number;

        /**
            * Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".
        */
        public getSelectedIndices(): any;

        /**
            * Gets current value of property {@link #getSelectionBehavior selectionBehavior}.
         * 
         * Selection behavior of the Table. This property defines whether the row selector is displayed and whether the row, the row selector or both can be clicked to select a row. ** Note: ** Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if `sap.ui.table.SelectionBehavior.RowOnly` is set.
         * 
         * Default value is `RowSelector`.
        */
        public getSelectionBehavior(): sap.ui.table.SelectionBehavior;

        /**
            * Gets current value of property {@link #getSelectionMode selectionMode}.
         * 
         * Selection mode of the Table. This property controls whether single or multiple rows can be selected and how the selection can be extended. It may also influence the visual appearance. When the selection mode is changed, the current selection is removed. ** Note: ** Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if `sap.ui.table.SelectionMode.None` is set.
         * 
         * Default value is `MultiToggle`.
        */
        public getSelectionMode(): sap.ui.table.SelectionMode;

        /**
            * Gets current value of property {@link #getShowColumnVisibilityMenu showColumnVisibilityMenu}.
         * 
         * Flag to show or hide the column visibility menu. This menu will get displayed in each generated column header menu. It allows to show or hide columns
         * 
         * Default value is `false`.
        */
        public getShowColumnVisibilityMenu(): boolean;

        /**
            * Gets current value of property {@link #getShowNoData showNoData}.
         * 
         * Flag whether to show the no data overlay or not once the table is empty. If set to false the table will just show a grid of empty cells
         * 
         * Default value is `true`.
        */
        public getShowNoData(): boolean;

        /**
            * Gets current value of property {@link #getShowOverlay showOverlay}.
         * 
         * Setting this property to true will show an overlay on top of the Table content and users cannot click anymore on the Table content.
         * 
         * Default value is `false`.
        */
        public getShowOverlay(): boolean;

        /**
            * Gets sorted columns in the order of which the sort API at the table or column was called. Sorting on binding level is not reflected here.
        */
        public getSortedColumns(): any;

        /**
            * Gets current value of property {@link #getThreshold threshold}.
         * 
         * The `threshold` defines how many additional (not yet visible records) shall be pre-fetched to enable smooth scrolling. The threshold is always added to the `visibleRowCount`. If the `visibleRowCount` is 10 and the `threshold` is 100, there will be 110 records fetched with the initial load. If the `threshold` is lower than the `visibleRowCount`, the `visibleRowCount` will be used as the `threshold`. If the value is 0 then the thresholding is disabled.
         * 
         * Default value is `100`.
        */
        public getThreshold(): number;

        /**
            * Gets content of aggregation {@link #getTitle title}.
         * 
         * Control or text of title section of the Table (if not set it will be hidden)
        */
        public getTitle(): Control | string;

        /**
            * Gets content of aggregation {@link #getToolbar toolbar}.
         * 
         * Toolbar of the Table (if not set it will be hidden)
        */
        public getToolbar(): sap.ui.core.Toolbar;

        /**
            * Gets current value of property {@link #getVisibleRowCount visibleRowCount}.
         * 
         * Number of visible rows of the table.
         * 
         * Default value is `10`.
        */
        public getVisibleRowCount(): number;

        /**
            * Gets current value of property {@link #getVisibleRowCountMode visibleRowCountMode}.
         * 
         * This defines how the table handles the visible rows in the table. The default behavior is, that a fixed row count is defined. If you change it to auto the visibleRowCount property is changed by the table automatically. It will then adjust its maximum row count to the space it is allowed to cover (limited by the surrounding container) and its minimum row count to the value of the property minAutoRowCount (default value : 5) In manual mode the user can change the visibleRowCount interactively.
         * 
         * Default value is `Fixed`.
        */
        public getVisibleRowCountMode(): sap.ui.table.VisibleRowCountMode;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of the Table.
         * 
         * Default value is `auto`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.table.Column` in the aggregation {@link #getColumns columns}. and returns its index if found or -1 otherwise.
        */
        public indexOfColumn(oColumn: Column): number;

        /**
            * Checks for the provided `sap.ui.core.dnd.DragDropBase` in the aggregation {@link #getDragDropConfig dragDropConfig}. and returns its index if found or -1 otherwise.
        */
        public indexOfDragDropConfig(oDragDropConfig: DragDropBase): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getExtension extension}. and returns its index if found or -1 otherwise.
        */
        public indexOfExtension(oExtension: Control): number;

        /**
            * Checks for the provided `sap.ui.table.Row` in the aggregation {@link #getRows rows}. and returns its index if found or -1 otherwise.
        */
        public indexOfRow(oRow: Row): number;

        /**
            * Inserts a column into the aggregation {@link #getColumns columns}.
        */
        public insertColumn(oColumn: Column, iIndex: number): this;

        /**
            * Inserts a dragDropConfig into the aggregation {@link #getDragDropConfig dragDropConfig}.
        */
        public insertDragDropConfig(oDragDropConfig: DragDropBase, iIndex: number): this;

        /**
            * Inserts a extension into the aggregation {@link #getExtension extension}.
        */
        public insertExtension(oExtension: Control, iIndex: number): this;

        /**
            * Inserts a row into the aggregation {@link #getRows rows}.
        */
        public insertRow(oRow: Row, iIndex: number): this;

        /**
            * Returns whether the given index is selected.
        */
        public isIndexSelected(iIndex: number): boolean;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getColumns columns}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllColumns(): {};

        /**
            * Removes all the controls from the aggregation {@link #getDragDropConfig dragDropConfig}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllDragDropConfig(): {};

        /**
            * Removes all the controls from the aggregation {@link #getExtension extension}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllExtension(): {};

        /**
            * Removes all the controls from the aggregation {@link #getRows rows}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllRows(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a column from the aggregation {@link #getColumns columns}.
        */
        public removeColumn(vColumn: number | string | Column): Column;

        /**
            * Removes a dragDropConfig from the aggregation {@link #getDragDropConfig dragDropConfig}.
        */
        public removeDragDropConfig(vDragDropConfig: number | string | DragDropBase): DragDropBase;

        /**
            * Removes a extension from the aggregation {@link #getExtension extension}.
        */
        public removeExtension(vExtension: number | string | Control): Control;

        /**
            * Removes a row from the aggregation {@link #getRows rows}.
        */
        public removeRow(vRow: number | string | Row): Row;

        /**
            * Removes the given selection interval from the selection. In case of single selection this call removeSelectedIndex with the "indexTo" value.
        */
        public removeSelectionInterval(iIndexFrom: number, iIndexTo: number): this;

        /**
            * Add all rows to the selection. Please note that for server based models like OData the indices which are considered to be selected might not be available at the client yet. Calling getContextByIndex might not return a result but trigger a roundtrip to request this single entity.
        */
        public selectAll(): any;

        /**
            * Sets a new value for property {@link #getAlternateRowColors alternateRowColors}.
         * 
         * Enables alternating table row colors. Alternate row coloring is not available for the tree mode.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAlternateRowColors(bAlternateRowColors: boolean): this;

        /**
            * Sets a new value for property {@link #getColumnHeaderHeight columnHeaderHeight}.
         * 
         * Height of the column header of the Table in pixel.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColumnHeaderHeight(iColumnHeaderHeight: number): this;

        /**
            * Sets a new value for property {@link #getColumnHeaderVisible columnHeaderVisible}.
         * 
         * Flag whether the column header is visible or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setColumnHeaderVisible(bColumnHeaderVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Flag whether the controls of the Table are editable or not (currently this only controls the background color in certain themes!)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableBusyIndicator enableBusyIndicator}.
         * 
         * If set to `true`, the table changes its busy state, resulting in showing or hiding the busy indicator. The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows. This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved, the table switches back to not busy. The busy state of the table can still be set manually by calling {@link sap.ui.core.Control#setBusy}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableBusyIndicator(bEnableBusyIndicator: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableCellFilter enableCellFilter}.
         * 
         * Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableCellFilter(bEnableCellFilter: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableColumnFreeze enableColumnFreeze}.
         * 
         * Flag whether to show or hide the column menu item to freeze or unfreeze a column.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableColumnFreeze(bEnableColumnFreeze: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableColumnReordering enableColumnReordering}.
         * 
         * Flag to enable or disable column reordering
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableColumnReordering(bEnableColumnReordering: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableCustomFilter enableCustomFilter}.
         * 
         * Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a button will be rendered for which' press event (customFilter) you can register an event handler.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableCustomFilter(bEnableCustomFilter: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableGrouping enableGrouping}.
         * 
         * Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined in the `groupBy` association.
         * 
         * The following restrictions apply:  * Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work with OData models. * The table can only be grouped by ** one ** column at a time. Grouping by another column will remove the current grouping. * If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons). * The column, by which the table is grouped, is not visible. It will become visible again only if the table is grouped by another column or grouping is disabled. 
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableGrouping(bEnableGrouping: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableSelectAll enableSelectAll}.
         * 
         * Specifies if a select all button should be displayed in the top left corner. This button is only displayed if the row selector is visible and the selection mode is set to any kind of multi selection.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableSelectAll(bEnableSelectAll: boolean): this;

        /**
            * Sets a new value for property {@link #getFirstVisibleRow firstVisibleRow}.
         * 
         * First visible row.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setFirstVisibleRow(iFirstVisibleRow: number): this;

        /**
            * Sets a new value for property {@link #getFixedBottomRowCount fixedBottomRowCount}.
         * 
         * Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setFixedBottomRowCount(iFixedBottomRowCount: number): this;

        /**
            * Sets a new value for property {@link #getFixedColumnCount fixedColumnCount}.
         * 
         * Number of columns that are fix on the left. When you use a horizontal scrollbar, only the columns which are not fixed, will scroll. Fixed columns need a defined width for the feature to work. Please note that the aggregated width of all fixed columns must not exceed the table width since there will be no scrollbar for fixed columns.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setFixedColumnCount(iFixedColumnCount: number): this;

        /**
            * Sets a new value for property {@link #getFixedRowCount fixedRowCount}.
         * 
         * Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setFixedRowCount(iFixedRowCount: number): this;

        /**
            * Sets the aggregated {@link #getFooter footer}.
        */
        public setFooter(vFooter: Control | string): this;

        /**
            * Sets the associated {@link #getGroupBy groupBy}.
        */
        public setGroupBy(oGroupBy: sap.ui.core.ID | Column): this;

        /**
            * Sets a new value for property {@link #getMinAutoRowCount minAutoRowCount}.
         * 
         * This property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `5`.
        */
        public setMinAutoRowCount(iMinAutoRowCount: number): this;

        /**
            * Sets a new value for property {@link #getNavigationMode navigationMode}.
         * 
         * This property has been deprecated and must not be used anymore, since `Scrollbar` is the only supported option.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Scrollbar`.
        */
        public setNavigationMode(sNavigationMode: sap.ui.table.NavigationMode): this;

        /**
            * Sets the aggregated {@link #getNoData noData}.
        */
        public setNoData(vNoData: Control | string): this;

        /**
            * Sets a new value for property {@link #getRowActionCount rowActionCount}.
         * 
         * Number of row actions made visible which determines the width of the row action column. The values `0`, `1` and `2` are possible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setRowActionCount(iRowActionCount: number): this;

        /**
            * Sets the aggregated {@link #getRowActionTemplate rowActionTemplate}.
        */
        public setRowActionTemplate(oRowActionTemplate: RowAction): this;

        /**
            * Sets a new value for property {@link #getRowHeight rowHeight}.
         * 
         * Height of a row of the Table in pixel.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setRowHeight(iRowHeight: number): this;

        /**
            * Sets the aggregated {@link #getRowSettingsTemplate rowSettingsTemplate}.
        */
        public setRowSettingsTemplate(oRowSettingsTemplate: RowSettings): this;

        /**
            * Sets a new value for property {@link #getSelectedIndex selectedIndex}.
         * 
         * Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the lead selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setSelectedIndex(iSelectedIndex: number): this;

        /**
            * Sets a new value for property {@link #getSelectionBehavior selectionBehavior}.
         * 
         * Selection behavior of the Table. This property defines whether the row selector is displayed and whether the row, the row selector or both can be clicked to select a row. ** Note: ** Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if `sap.ui.table.SelectionBehavior.RowOnly` is set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `RowSelector`.
        */
        public setSelectionBehavior(sSelectionBehavior: sap.ui.table.SelectionBehavior): this;

        /**
            * Sets the given selection interval as selection. In case of single selection the "indexTo" value will be used for as selected index.
        */
        public setSelectionInterval(iIndexFrom: number, iIndexTo: number): this;

        /**
            * Sets the selection mode. The current selection is lost.
        */
        public setSelectionMode(sSelectionMode: string): any;

        /**
            * Sets a new value for property {@link #getShowColumnVisibilityMenu showColumnVisibilityMenu}.
         * 
         * Flag to show or hide the column visibility menu. This menu will get displayed in each generated column header menu. It allows to show or hide columns
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowColumnVisibilityMenu(bShowColumnVisibilityMenu: boolean): this;

        /**
            * Sets a new value for property {@link #getShowNoData showNoData}.
         * 
         * Flag whether to show the no data overlay or not once the table is empty. If set to false the table will just show a grid of empty cells
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowNoData(bShowNoData: boolean): this;

        /**
            * Sets a new value for property {@link #getShowOverlay showOverlay}.
         * 
         * Setting this property to true will show an overlay on top of the Table content and users cannot click anymore on the Table content.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowOverlay(bShowOverlay: boolean): this;

        /**
            * Sets the threshold value, which will be added to all data requests in case the Table is bound against an OData service.
        */
        public setThreshold(): any;

        /**
            * Sets the aggregated {@link #getTitle title}.
        */
        public setTitle(vTitle: Control | string): this;

        /**
            * Sets the aggregated {@link #getToolbar toolbar}.
        */
        public setToolbar(oToolbar: sap.ui.core.Toolbar): this;

        /**
            * Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
         * 
         * If a new tooltip is set, any previously set tooltip is deactivated.
         * 
         * Please note that tooltips are not rendered for the table. The tooltip property will be set but it won't effect the DOM.
        */
        public setTooltip(vTooltip: string | TooltipBase): this;

        /**
            * Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
         * 
         * If a new tooltip is set, any previously set tooltip is deactivated.
        */
        public setTooltip(vTooltip: string | TooltipBase): any;

        /**
            * Sets a new value for property {@link #getVisibleRowCount visibleRowCount}.
         * 
         * Number of visible rows of the table.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `10`.
        */
        public setVisibleRowCount(iVisibleRowCount: number): this;

        /**
            * Sets a new value for property {@link #getVisibleRowCountMode visibleRowCountMode}.
         * 
         * This defines how the table handles the visible rows in the table. The default behavior is, that a fixed row count is defined. If you change it to auto the visibleRowCount property is changed by the table automatically. It will then adjust its maximum row count to the space it is allowed to cover (limited by the surrounding container) and its minimum row count to the value of the property minAutoRowCount (default value : 5) In manual mode the user can change the visibleRowCount interactively.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Fixed`.
        */
        public setVisibleRowCountMode(sVisibleRowCountMode: sap.ui.table.VisibleRowCountMode): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of the Table.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Sorts the given column ascending or descending.
        */
        public sort(oColumn: Column | any, oSortOrder: sap.ui.table.SortOrder, bAdd: boolean): this;

        /**
            * Unbinds aggregation {@link #getColumns columns} from model data.
        */
        public unbindColumns(): this;

        /**
            * Unbinds aggregation {@link #getRows rows} from model data.
        */
        public unbindRows(): this;

    }
}