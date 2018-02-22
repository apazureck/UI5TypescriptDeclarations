declare module 'sap/m/SelectionDetails' {
    import { Event } from 'sap/ui/base/Event';
    import { Item } from 'sap/ui/core/Item';
    import { SelectionDetailsItem } from 'sap/m/SelectionDetailsItem';
    import { Interface } from 'sap/ui/base/Interface';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISelectionDetailsSettings extends IControlSettings {
    }

    /**
    
    */
    export class SelectionDetails extends Control {

        /**
            * Constructor for a new SelectionDetails.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISelectionDetailsSettings);


        /**
            * Adds some action to the aggregation {@link #getActions actions}.
        */
        public addAction(oAction: Item): this;

        /**
            * Adds some actionGroup to the aggregation {@link #getActionGroups actionGroups}.
        */
        public addActionGroup(oActionGroup: Item): this;

        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: SelectionDetailsItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:actionPress actionPress} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered when a custom action is pressed.
        */
        attachActionPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The action that has to be processed once the action has been pressed */
            action: Item, /* * If the action is pressed on one of the {@link sap.m.SelectionDetailsItem items}, the parameter contains a reference to the pressed {@link sap.m.SelectionDetailsItem item}. If a custom action or action group of the SelectionDetails popover is pressed, this parameter refers to all {@link sap.m.SelectionDetailsItem items} */
            items: SelectionDetailsItem, /* * The action level of action buttons. The available levels are Item, List and Group */
            level: sap.m.SelectionDetailsActionLevel,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:actionPress actionPress} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered when a custom action is pressed.
        */
        attachActionPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The action that has to be processed once the action has been pressed */
            action: Item, /* * If the action is pressed on one of the {@link sap.m.SelectionDetailsItem items}, the parameter contains a reference to the pressed {@link sap.m.SelectionDetailsItem item}. If a custom action or action group of the SelectionDetails popover is pressed, this parameter refers to all {@link sap.m.SelectionDetailsItem items} */
            items: SelectionDetailsItem, /* * The action level of action buttons. The available levels are Item, List and Group */
            level: sap.m.SelectionDetailsActionLevel,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered before the popover is closed.
        */
        attachBeforeClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered before the popover is closed.
        */
        attachBeforeClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered before the popover is open.
        */
        attachBeforeOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered before the popover is open.
        */
        attachBeforeOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered after a list item of {@link sap.m.SelectionDetailsItem} is pressed.
        */
        attachNavigate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item on which the action has been pressed. Can be null in case a navigation was done without item context, e.g. action press. */
            item: SelectionDetailsItem, /* * Direction of the triggered navigation, possible values are "to" and "back". */
            direction: string, /* * The content of the currently viewed page that was previously added via {@link sap.m.SelectionDetails#navTo}. This contains the content of the page before the navigation was triggered. Can be null in case of first event triggering. */
            content: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.m.SelectionDetails`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SelectionDetails` itself.
         * 
         * Event is triggered after a list item of {@link sap.m.SelectionDetailsItem} is pressed.
        */
        attachNavigate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item on which the action has been pressed. Can be null in case a navigation was done without item context, e.g. action press. */
            item: SelectionDetailsItem, /* * Direction of the triggered navigation, possible values are "to" and "back". */
            direction: string, /* * The content of the currently viewed page that was previously added via {@link sap.m.SelectionDetails#navTo}. This contains the content of the page before the navigation was triggered. Can be null in case of first event triggering. */
            content: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches an event handler to the given listener to react to user selection interaction.
        */
        protected attachSelectionHandler(eventId: string, listener: {}): this;

        /**
            * Binds aggregation {@link #getItems items} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItems(oBindingInfo: {}): this;

        /**
            * Destroys all the actionGroups in the aggregation {@link #getActionGroups actionGroups}.
        */
        public destroyActionGroups(): this;

        /**
            * Destroys all the actions in the aggregation {@link #getActions actions}.
        */
        public destroyActions(): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:actionPress actionPress} event of this `sap.m.SelectionDetails`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachActionPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeClose beforeClose} event of this `sap.m.SelectionDetails`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeOpen beforeOpen} event of this `sap.m.SelectionDetails`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:navigate navigate} event of this `sap.m.SelectionDetails`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachNavigate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches the event which was attached by `attachSelectionHandler`.
        */
        protected detachSelectionHandler(): this;

        /**
            * Creates a new subclass of class sap.m.SelectionDetails with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:actionPress actionPress} to attached listeners.
        */
        protected fireActionPress(mParameters?: { action?: Item, items?: SelectionDetailsItem, level?: sap.m.SelectionDetailsActionLevel, }): this;

        /**
            * Fires event {@link #event:beforeClose beforeClose} to attached listeners.
        */
        protected fireBeforeClose(mParameters?: {}): this;

        /**
            * Fires event {@link #event:beforeOpen beforeOpen} to attached listeners.
        */
        protected fireBeforeOpen(mParameters?: {}): this;

        /**
            * Fires event {@link #event:navigate navigate} to attached listeners.
        */
        protected fireNavigate(mParameters?: { item?: SelectionDetailsItem, direction?: string, content?: Control, }): this;

        /**
            * Gets content of aggregation {@link #getActionGroups actionGroups}.
         * 
         * Contains actions that are rendered as a dedicated {@link sap.m.StandardListItem item}. In case an action group is pressed, a navigation should be triggered via `navTo` method. A maximum of 5 actionGroups is displayed inside the popover, though more can be added to the aggregation.
        */
        public getActionGroups(): {};

        /**
            * Gets content of aggregation {@link #getActions actions}.
         * 
         * Contains custom actions shown in the responsive toolbar below items on the first page.
        */
        public getActions(): {};

        /**
            * Returns the public facade of the SelectionDetails control for non inner framework usages.
        */
        protected getFacade(): Interface;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Contains {@link sap.m.SelectionDetailsItem items} that are displayed on the first page.
        */
        public getItems(): {};

        /**
            * Returns a metadata object for class sap.m.SelectionDetails.
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
            * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getActions actions}. and returns its index if found or -1 otherwise.
        */
        public indexOfAction(oAction: Item): number;

        /**
            * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getActionGroups actionGroups}. and returns its index if found or -1 otherwise.
        */
        public indexOfActionGroup(oActionGroup: Item): number;

        /**
            * Checks for the provided `sap.m.SelectionDetailsItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: SelectionDetailsItem): number;

        /**
            * Inserts a action into the aggregation {@link #getActions actions}.
        */
        public insertAction(oAction: Item, iIndex: number): this;

        /**
            * Inserts a actionGroup into the aggregation {@link #getActionGroups actionGroups}.
        */
        public insertActionGroup(oActionGroup: Item, iIndex: number): this;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: SelectionDetailsItem, iIndex: number): this;

        /**
            * Method to register the factory function that creates the SelectionDetailsItems. The factory function is called for every selected entry separately with three parameters. First parameter is the display data array for each item out of the selection. Second parameter is the data array for each item out of the selection. Third parameter is the binding context for each item in the selection. This is undefined if no binding is used. Fourth parameter is `oData`. Can be undefined.
        */
        protected registerSelectionDetailsItemFactory(data: any, factory: (() => any)): this;

        /**
            * Removes a action from the aggregation {@link #getActions actions}.
        */
        public removeAction(vAction: number | string | Item): Item;

        /**
            * Removes a actionGroup from the aggregation {@link #getActionGroups actionGroups}.
        */
        public removeActionGroup(vActionGroup: number | string | Item): Item;

        /**
            * Removes all the controls from the aggregation {@link #getActionGroups actionGroups}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllActionGroups(): {};

        /**
            * Removes all the controls from the aggregation {@link #getActions actions}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllActions(): {};

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | SelectionDetailsItem): SelectionDetailsItem;

        /**
            * Sets the popover to modal or non-modal based on the given parameter. This only takes effect on desktop or tablet. Please see the documentation {@link sap.m.ResponsivePopover#modal}.
        */
        protected setPopoverModal(modal: boolean): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }
}