declare module 'sap/ui/model/SelectionModel' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface ISelectionModelSettings extends IEventProviderSettings {
    }

    export class SelectionModel extends EventProvider {


        /**
            * Changes the selection to be the union of the current selection and the range between `iFromIndex` and `iToIndex` inclusive. If `iFromIndex` is smaller than `iToIndex`, both parameters are swapped.
         * 
         * In `SINGLE_SELECTION` selection mode, this is equivalent to calling `setSelectionInterval`, and only the second index is used.
         * 
         * If this call results in a change to the current selection or lead selection, then a `SelectionChanged` event is fired.
        */
        public addSelectionInterval(iFromIndex: number, iToIndex: number): this;

        /**
            * Attach event-handler `fnFunction` to the 'selectionChanged' event of this `sap.ui.model.SelectionModel`.
         * 
        */
        public attachSelectionChanged(oData: {}, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attach event-handler `fnFunction` to the 'selectionChanged' event of this `sap.ui.model.SelectionModel`.
         * 
        */
        public attachSelectionChanged(fnFunction: (() => any), oListener?: {}): this;

        /**
            * Change the selection to the empty set and clears the lead selection.
         * 
         * If this call results in a change to the current selection or lead selection, then a `SelectionChanged` event is fired.
        */
        public clearSelection(): this;

        /**
            * Detach event-handler `fnFunction` from the 'selectionChanged' event of this `sap.ui.model.SelectionModel`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachSelectionChanged(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.model.SelectionModel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fire event 'selectionChanged' to attached listeners.
         * 
         * Expects following event parameters:  * 'leadIndex' of type `int` Lead selection index. * 'rowIndices' of type `int[]` Other selected indices (if available) 
        */
        protected fireSelectionChanged(mArguments: { leadIndex: number, rowIndices?: {}, }): this;

        /**
            * Return the second index argument from the most recent call to setSelectionInterval(), addSelectionInterval() or removeSelectionInterval().
        */
        public getLeadSelectedIndex(): number;

        /**
            * Returns a metadata object for class sap.ui.model.SelectionModel.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the selected indices as array.
        */
        public getSelectedIndices(): {};

        /**
            * Returns the current selection mode.
        */
        public getSelectionMode(): number;

        /**
            * Returns true if the specified index is selected.
        */
        public isSelectedIndex(iIndex: number): boolean;

        /**
            * Moves all selected indices starting at the position `iStartIndex` `iMove` items.
         * 
         * This can be used if new items are inserted to the item set and you want to keep the selection. To handle a deletion of items use `sliceSelectionInterval`.
         * 
         * If this call results in a change to the current selection or lead selection, then a `SelectionChanged` event is fired.
        */
        public moveSelectionInterval(iStartIndex: number, iMove: number): this;

        /**
            * Changes the selection to be the set difference of the current selection and the indices between `iFromIndex` and `iToIndex` inclusive. If `iFromIndex` is smaller than `iToIndex`, both parameters are swapped.
         * 
         * If the range of removed selection indices includes the current lead selection, then the lead selection will be unset (set to -1).
         * 
         * If this call results in a change to the current selection or lead selection, then a `SelectionChanged` event is fired.
        */
        public removeSelectionInterval(iFromIndex: number, iToIndex: number): this;

        /**
            * Selects all rows up to the `iToIndex</iToIndex>.
         * 
         * If this call results in a change to the current selection, then a `SelectionChanged` event is fired.
        */
        public selectAll(iToIndex: number): this;

        /**
            * Changes the selection to be equal to the range `iFromIndex` and `iToIndex` inclusive. If `iFromIndex` is smaller than `iToIndex`, both parameters are swapped.
         * 
         * In `SINGLE_SELECTION` selection mode, only `iToIndex</iToIndex> is used.
         * 
         * If this call results in a change to the current selection, then a `SelectionChanged` event is fired.
        */
        public setSelectionInterval(iFromIndex: number, iToIndex: number): this;

        /**
            * Sets the selection mode. The following list describes the accepted selection modes:  <li>`sap.ui.model.SelectionModel.SINGLE_SELECTION` - Only one list index can be selected at a time. In this mode, `setSelectionInterval` and `addSelectionInterval` are equivalent, both replacing the current selection with the index represented by the second argument (the "lead"). <li>`sap.ui.model.SelectionModel.MULTI_SELECTION` - In this mode, there's no restriction on what can be selected. 
        */
        public setSelectionMode(iSelectionMode: number): any;

        /**
            * Slices a the indices between the two indices from the selection. If `iFromIndex` is smaller than `iToIndex`, both parameters are swapped.
         * 
         * If the range of removed selection indices includes the current lead selection, then the lead selection will be unset (set to -1).
         * 
         * If this call results in a change to the current selection or lead selection, then a `SelectionChanged` event is fired.
        */
        public sliceSelectionInterval(iFromIndex: number, iToIndex: number): this;

    }
}