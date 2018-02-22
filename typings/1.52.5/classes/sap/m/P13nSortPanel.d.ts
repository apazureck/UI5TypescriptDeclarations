declare module 'sap/m/P13nSortPanel' {
    import { Event } from 'sap/ui/base/Event';
    import { P13nSortItem } from 'sap/m/P13nSortItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { P13nPanel, IP13nPanelSettings } from 'sap/m/P13nPanel';

    export interface IP13nSortPanelSettings extends IP13nPanelSettings {
        containerQuery?: boolean;
        layoutMode?: string;
    }

    /**
    
    */
    export class P13nSortPanel extends P13nPanel {

        /**
            * Constructor for a new P13nSortPanel.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IP13nSortPanelSettings);


        /**
            * Adds some sortItem to the aggregation {@link #getSortItems sortItems}.
        */
        public addSortItem(oSortItem: P13nSortItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:addSortItem addSortItem} event of this `sap.m.P13nSortPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nSortPanel` itself.
         * 
         * event raised when a SortItem was added
        */
        attachAddSortItem<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:addSortItem addSortItem} event of this `sap.m.P13nSortPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nSortPanel` itself.
         * 
         * event raised when a SortItem was added
        */
        attachAddSortItem<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:removeSortItem removeSortItem} event of this `sap.m.P13nSortPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nSortPanel` itself.
         * 
         * event raised when a SortItem was removed
        */
        attachRemoveSortItem<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:removeSortItem removeSortItem} event of this `sap.m.P13nSortPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nSortPanel` itself.
         * 
         * event raised when a SortItem was removed
        */
        attachRemoveSortItem<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:updateSortItem updateSortItem} event of this `sap.m.P13nSortPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nSortPanel` itself.
         * 
         * event raised when a SortItem was updated
        */
        attachUpdateSortItem<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:updateSortItem updateSortItem} event of this `sap.m.P13nSortPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nSortPanel` itself.
         * 
         * event raised when a SortItem was updated
        */
        attachUpdateSortItem<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getSortItems sortItems} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindSortItems(oBindingInfo: {}): this;

        /**
            * Destroys all the sortItems in the aggregation {@link #getSortItems sortItems}.
        */
        public destroySortItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:addSortItem addSortItem} event of this `sap.m.P13nSortPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAddSortItem(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:removeSortItem removeSortItem} event of this `sap.m.P13nSortPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachRemoveSortItem(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:updateSortItem updateSortItem} event of this `sap.m.P13nSortPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUpdateSortItem(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.P13nSortPanel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.P13nPanel.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:addSortItem addSortItem} to attached listeners.
        */
        protected fireAddSortItem(mParameters?: {}): this;

        /**
            * Fires event {@link #event:removeSortItem removeSortItem} to attached listeners.
        */
        protected fireRemoveSortItem(mParameters?: {}): this;

        /**
            * Fires event {@link #event:updateSortItem updateSortItem} to attached listeners.
        */
        protected fireUpdateSortItem(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getContainerQuery containerQuery}.
         * 
         * defines if the mediaQuery or a ContainerResize will be used for layout update. When the ConditionPanel is used on a dialog the property should be set to true!
         * 
         * Default value is `false`.
        */
        public getContainerQuery(): boolean;

        /**
            * Gets current value of property {@link #getLayoutMode layoutMode}.
         * 
         * can be used to control the layout behavior. Default is "" which will automatically change the layout. With "Desktop", "Table" or "Phone" you can set a fixed layout.
        */
        public getLayoutMode(): string;

        /**
            * Returns a metadata object for class sap.m.P13nSortPanel.
        */
        public static getMetadata(): Metadata | any | {};

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
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets content of aggregation {@link #getSortItems sortItems}.
         * 
         * defined Sort Items
        */
        public getSortItems(): {};

        /**
            * Checks for the provided `sap.m.P13nSortItem` in the aggregation {@link #getSortItems sortItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfSortItem(oSortItem: P13nSortItem): number;

        /**
            * Inserts a sortItem into the aggregation {@link #getSortItems sortItems}.
        */
        public insertSortItem(oSortItem: P13nSortItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getSortItems sortItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSortItems(): {};

        /**
            * removes all invalid sort conditions.
        */
        public removeInvalidConditions(): any;

        /**
            * Removes a sortItem from the aggregation {@link #getSortItems sortItems}.
        */
        public removeSortItem(vSortItem: number | string | P13nSortItem): P13nSortItem;

        /**
            * removes all errors/warning states from of all sort conditions.
        */
        public removeValidationErrors(): any;

        /**
            * Sets a new value for property {@link #getContainerQuery containerQuery}.
         * 
         * defines if the mediaQuery or a ContainerResize will be used for layout update. When the ConditionPanel is used on a dialog the property should be set to true!
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setContainerQuery(bContainerQuery: boolean): this;

        /**
            * Sets a new value for property {@link #getLayoutMode layoutMode}.
         * 
         * can be used to control the layout behavior. Default is "" which will automatically change the layout. With "Desktop", "Table" or "Phone" you can set a fixed layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLayoutMode(sLayoutMode: string): this;

        /**
            * setter for the supported operations array
        */
        public setOperations(aOperations: any[]): this;

        /**
            * Unbinds aggregation {@link #getSortItems sortItems} from model data.
        */
        public unbindSortItems(): this;

        /**
            * check if the entered/modified conditions are correct, marks invalid fields yellow (Warning state) and opens a popup message dialog to give the user the feedback that some values are wrong or missing.
        */
        public validateConditions(): boolean;

    }
}