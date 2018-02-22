declare module 'sap/m/P13nGroupPanel' {
    import { Event } from 'sap/ui/base/Event';
    import { P13nGroupItem } from 'sap/m/P13nGroupItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { P13nPanel, IP13nPanelSettings } from 'sap/m/P13nPanel';

    export interface IP13nGroupPanelSettings extends IP13nPanelSettings {
        maxGroups?: string;
        containerQuery?: boolean;
        layoutMode?: string;
    }

    /**
    
    */
    export class P13nGroupPanel extends P13nPanel {

        /**
            * Constructor for a new P13nGroupPanel.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IP13nGroupPanelSettings);


        /**
            * Adds some groupItem to the aggregation {@link #getGroupItems groupItems}.
        */
        public addGroupItem(oGroupItem: P13nGroupItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:addGroupItem addGroupItem} event of this `sap.m.P13nGroupPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nGroupPanel` itself.
         * 
         * Event raised if a `GroupItem` has been added.
        */
        attachAddGroupItem<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:addGroupItem addGroupItem} event of this `sap.m.P13nGroupPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nGroupPanel` itself.
         * 
         * Event raised if a `GroupItem` has been added.
        */
        attachAddGroupItem<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:removeGroupItem removeGroupItem} event of this `sap.m.P13nGroupPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nGroupPanel` itself.
         * 
         * Event raised if a `GroupItem` has been removed.
        */
        attachRemoveGroupItem<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:removeGroupItem removeGroupItem} event of this `sap.m.P13nGroupPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nGroupPanel` itself.
         * 
         * Event raised if a `GroupItem` has been removed.
        */
        attachRemoveGroupItem<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:updateGroupItem updateGroupItem} event of this `sap.m.P13nGroupPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nGroupPanel` itself.
         * 
         * Event raised if a `GroupItem` has been updated.
        */
        attachUpdateGroupItem<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:updateGroupItem updateGroupItem} event of this `sap.m.P13nGroupPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nGroupPanel` itself.
         * 
         * Event raised if a `GroupItem` has been updated.
        */
        attachUpdateGroupItem<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getGroupItems groupItems} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindGroupItems(oBindingInfo: {}): this;

        /**
            * Destroys all the groupItems in the aggregation {@link #getGroupItems groupItems}.
        */
        public destroyGroupItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:addGroupItem addGroupItem} event of this `sap.m.P13nGroupPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAddGroupItem(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:removeGroupItem removeGroupItem} event of this `sap.m.P13nGroupPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachRemoveGroupItem(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:updateGroupItem updateGroupItem} event of this `sap.m.P13nGroupPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUpdateGroupItem(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.P13nGroupPanel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.P13nPanel.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:addGroupItem addGroupItem} to attached listeners.
        */
        protected fireAddGroupItem(mParameters?: {}): this;

        /**
            * Fires event {@link #event:removeGroupItem removeGroupItem} to attached listeners.
        */
        protected fireRemoveGroupItem(mParameters?: {}): this;

        /**
            * Fires event {@link #event:updateGroupItem updateGroupItem} to attached listeners.
        */
        protected fireUpdateGroupItem(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getContainerQuery containerQuery}.
         * 
         * Defines if `mediaQuery` or `ContainerResize` is used for a layout update. If `ConditionPanel` is used in a dialog, the property must be set to true.
         * 
         * Default value is `false`.
        */
        public getContainerQuery(): boolean;

        /**
            * Gets content of aggregation {@link #getGroupItems groupItems}.
         * 
         * Defined group items.
        */
        public getGroupItems(): {};

        /**
            * Gets current value of property {@link #getLayoutMode layoutMode}.
         * 
         * Can be used to control the layout behavior. Default is "" which will automatically change the layout. With "Desktop", "Table" or "Phone" you can set a fixed layout.
        */
        public getLayoutMode(): string;

        /**
            * Gets current value of property {@link #getMaxGroups maxGroups}.
         * 
         * Defines the maximum number of groups.
         * 
         * Default value is `-1`.
        */
        public getMaxGroups(): string;

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
            * Returns a metadata object for class sap.m.P13nGroupPanel.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Checks for the provided `sap.m.P13nGroupItem` in the aggregation {@link #getGroupItems groupItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfGroupItem(oGroupItem: P13nGroupItem): number;

        /**
            * Inserts a groupItem into the aggregation {@link #getGroupItems groupItems}.
        */
        public insertGroupItem(oGroupItem: P13nGroupItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getGroupItems groupItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllGroupItems(): {};

        /**
            * Removes a groupItem from the aggregation {@link #getGroupItems groupItems}.
        */
        public removeGroupItem(vGroupItem: number | string | P13nGroupItem): P13nGroupItem;

        /**
            * Removes all invalid group conditions.
        */
        public removeInvalidConditions(): any;

        /**
            * Removes all errors/warning states from of all group conditions.
        */
        public removeValidationErrors(): any;

        /**
            * Sets a new value for property {@link #getContainerQuery containerQuery}.
         * 
         * Defines if `mediaQuery` or `ContainerResize` is used for a layout update. If `ConditionPanel` is used in a dialog, the property must be set to true.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setContainerQuery(bContainerQuery: boolean): this;

        /**
            * Sets a new value for property {@link #getLayoutMode layoutMode}.
         * 
         * Can be used to control the layout behavior. Default is "" which will automatically change the layout. With "Desktop", "Table" or "Phone" you can set a fixed layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLayoutMode(sLayoutMode: string): this;

        /**
            * Sets a new value for property {@link #getMaxGroups maxGroups}.
         * 
         * Defines the maximum number of groups.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setMaxGroups(sMaxGroups: string): this;

        /**
            * Setter for the supported operations array.
        */
        public setOperations(aOperations: any[]): any;

        /**
            * Unbinds aggregation {@link #getGroupItems groupItems} from model data.
        */
        public unbindGroupItems(): this;

        /**
            * Checks if the entered or modified conditions are correct, marks invalid fields yellow (Warning) and opens a popup message dialog to let the user know that some values are not correct or missing.
        */
        public validateConditions(): boolean;

    }
}