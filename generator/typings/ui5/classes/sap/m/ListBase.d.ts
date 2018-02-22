declare module 'sap/m/ListBase' {
    import { Event } from 'sap/ui/base/Event';
    import { ListItemBase } from 'sap/m/ListItemBase';
    import { Toolbar } from 'sap/m/Toolbar';
    import { ItemNavigation } from 'sap/ui/core/delegate/ItemNavigation';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IListBaseSettings extends IControlSettings {
        inset?: boolean;
        headerText?: string;
        headerDesign?: sap.m.ListHeaderDesign;
        footerText?: string;
        mode?: sap.m.ListMode;
        width?: sap.ui.core.CSSSize;
        includeItemInSelection?: boolean;
        showUnread?: boolean;
        noDataText?: string;
        showNoData?: boolean;
        enableBusyIndicator?: boolean;
        modeAnimationOn?: boolean;
        showSeparators?: sap.m.ListSeparators;
        swipeDirection?: sap.m.SwipeDirection;
        growing?: boolean;
        growingThreshold?: number;
        growingTriggerText?: string;
        growingScrollToLoad?: boolean;
        growingDirection?: sap.m.ListGrowingDirection;
        rememberSelections?: boolean;
        keyboardMode?: sap.m.ListKeyboardMode;
    }

    /**
    
    */
    export class ListBase extends Control {

        /**
            * Constructor for a new ListBase.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IListBaseSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: ListItemBase): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:delete delete} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires when delete icon is pressed by user.
        */
        attachDelete<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item which fired the delete event. */
            listItem: ListItemBase,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:delete delete} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires when delete icon is pressed by user.
        */
        attachDelete<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item which fired the delete event. */
            listItem: ListItemBase,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:growingFinished growingFinished} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires after the new growing chunk has been fetched from the model and processed by the control.
        */
        attachGrowingFinished<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Actual number of items. */
            actual: number, /* * Total number of items. */
            total: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:growingFinished growingFinished} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires after the new growing chunk has been fetched from the model and processed by the control.
        */
        attachGrowingFinished<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Actual number of items. */
            actual: number, /* * Total number of items. */
            total: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:growingStarted growingStarted} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires before the new growing chunk is requested from the model.
        */
        attachGrowingStarted<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Actual number of items. */
            actual: number, /* * Total number of items. */
            total: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:growingStarted growingStarted} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires before the new growing chunk is requested from the model.
        */
        attachGrowingStarted<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Actual number of items. */
            actual: number, /* * Total number of items. */
            total: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemPress itemPress} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires when an item is pressed unless the item's `type` property is `Inactive`.
        */
        attachItemPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item which fired the pressed event. */
            listItem: ListItemBase, /* * The control which caused the press event within the container. */
            srcControl: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemPress itemPress} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires when an item is pressed unless the item's `type` property is `Inactive`.
        */
        attachItemPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item which fired the pressed event. */
            listItem: ListItemBase, /* * The control which caused the press event within the container. */
            srcControl: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires when selection is changed via user interaction. In `MultiSelect` mode, this event is also fired on deselection.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item which fired the select event. */
            listItem: ListItemBase,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires when selection is changed via user interaction. In `MultiSelect` mode, this event is also fired on deselection.
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item which fired the select event. */
            listItem: ListItemBase,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires when selection is changed via user interaction inside the control.
        */
        attachSelectionChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item whose selection has changed. In <code>MultiSelect</code> mode, only the up-most selected item is returned. This parameter can be used for single-selection modes. */
            listItem: ListItemBase, /* * Array of items whose selection has changed. This parameter can be used for <code>MultiSelect</code> mode. */
            listItems: {}, /* * Indicates whether the <code>listItem</code> parameter is selected or not. */
            selected: boolean, /* * Indicates whether the select all action is triggered or not. */
            selectAll: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires when selection is changed via user interaction inside the control.
        */
        attachSelectionChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item whose selection has changed. In <code>MultiSelect</code> mode, only the up-most selected item is returned. This parameter can be used for single-selection modes. */
            listItem: ListItemBase, /* * Array of items whose selection has changed. This parameter can be used for <code>MultiSelect</code> mode. */
            listItems: {}, /* * Indicates whether the <code>listItem</code> parameter is selected or not. */
            selected: boolean, /* * Indicates whether the select all action is triggered or not. */
            selectAll: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:swipe swipe} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires after user's swipe action and before the `swipeContent` is shown. On the `swipe` event handler, `swipeContent` can be changed according to the swiped item. Calling the `preventDefault` method of the event cancels the swipe action.
        */
        attachSwipe<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item which fired the swipe. */
            listItem: ListItemBase, /* * Aggregated <code>swipeContent</code> control that is shown on the right hand side of the item. */
            swipeContent: Control, /* * Holds which control caused the swipe event within the item. */
            srcControl: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:swipe swipe} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires after user's swipe action and before the `swipeContent` is shown. On the `swipe` event handler, `swipeContent` can be changed according to the swiped item. Calling the `preventDefault` method of the event cancels the swipe action.
        */
        attachSwipe<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item which fired the swipe. */
            listItem: ListItemBase, /* * Aggregated <code>swipeContent</code> control that is shown on the right hand side of the item. */
            swipeContent: Control, /* * Holds which control caused the swipe event within the item. */
            srcControl: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:updateFinished updateFinished} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires after `items` binding is updated and processed by the control.
        */
        attachUpdateFinished<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The reason of the update, e.g. Binding, Filter, Sort, Growing, Change, Refresh, Context. */
            reason: string, /* * Actual number of items. */
            actual: number, /* * The total count of bound items. This can be used if the <code>growing</code> property is set to <code>true</code>. */
            total: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:updateFinished updateFinished} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires after `items` binding is updated and processed by the control.
        */
        attachUpdateFinished<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The reason of the update, e.g. Binding, Filter, Sort, Growing, Change, Refresh, Context. */
            reason: string, /* * Actual number of items. */
            actual: number, /* * The total count of bound items. This can be used if the <code>growing</code> property is set to <code>true</code>. */
            total: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:updateStarted updateStarted} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires before `items` binding is updated (e.g. sorting, filtering)
         * 
         * ** Note: ** Event handler should not invalidate the control.
        */
        attachUpdateStarted<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The reason of the update, e.g. Binding, Filter, Sort, Growing, Change, Refresh, Context. */
            reason: string, /* * Actual number of items. */
            actual: number, /* * The total count of bound items. This can be used if the <code>growing</code> property is set to <code>true</code>. */
            total: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:updateStarted updateStarted} event of this `sap.m.ListBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ListBase` itself.
         * 
         * Fires before `items` binding is updated (e.g. sorting, filtering)
         * 
         * ** Note: ** Event handler should not invalidate the control.
        */
        attachUpdateStarted<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The reason of the update, e.g. Binding, Filter, Sort, Growing, Change, Refresh, Context. */
            reason: string, /* * Actual number of items. */
            actual: number, /* * The total count of bound items. This can be used if the <code>growing</code> property is set to <code>true</code>. */
            total: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getItems items} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItems(oBindingInfo: {}): this;

        /**
            * Destroys the headerToolbar in the aggregation {@link #getHeaderToolbar headerToolbar}.
        */
        public destroyHeaderToolbar(): this;

        /**
            * Destroys the infoToolbar in the aggregation {@link #getInfoToolbar infoToolbar}.
        */
        public destroyInfoToolbar(): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Destroys the swipeContent in the aggregation {@link #getSwipeContent swipeContent}.
        */
        public destroySwipeContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:delete delete} event of this `sap.m.ListBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDelete(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:growingFinished growingFinished} event of this `sap.m.ListBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachGrowingFinished(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:growingStarted growingStarted} event of this `sap.m.ListBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachGrowingStarted(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemPress itemPress} event of this `sap.m.ListBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.m.ListBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of this `sap.m.ListBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelectionChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:swipe swipe} event of this `sap.m.ListBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSwipe(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:updateFinished updateFinished} event of this `sap.m.ListBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUpdateFinished(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:updateStarted updateStarted} event of this `sap.m.ListBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUpdateStarted(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.ListBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:delete delete} to attached listeners.
        */
        protected fireDelete(mParameters?: { listItem?: ListItemBase, }): this;

        /**
            * Fires event {@link #event:growingFinished growingFinished} to attached listeners.
        */
        protected fireGrowingFinished(mParameters?: { actual?: number, total?: number, }): this;

        /**
            * Fires event {@link #event:growingStarted growingStarted} to attached listeners.
        */
        protected fireGrowingStarted(mParameters?: { actual?: number, total?: number, }): this;

        /**
            * Fires event {@link #event:itemPress itemPress} to attached listeners.
        */
        protected fireItemPress(mParameters?: { listItem?: ListItemBase, srcControl?: Control, }): this;

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { listItem?: ListItemBase, }): this;

        /**
            * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
        */
        protected fireSelectionChange(mParameters?: { listItem?: ListItemBase, listItems?: {}, selected?: boolean, selectAll?: boolean, }): this;

        /**
            * Fires event {@link #event:swipe swipe} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireSwipe(mParameters?: { listItem?: ListItemBase, swipeContent?: Control, srcControl?: Control, }): boolean;

        /**
            * Fires event {@link #event:updateFinished updateFinished} to attached listeners.
        */
        protected fireUpdateFinished(mParameters?: { reason?: string, actual?: number, total?: number, }): this;

        /**
            * Fires event {@link #event:updateStarted updateStarted} to attached listeners.
        */
        protected fireUpdateStarted(mParameters?: { reason?: string, actual?: number, total?: number, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getEnableBusyIndicator enableBusyIndicator}.
         * 
         * When this property is set to `true`, the control will automatically display a busy indicator when it detects that data is being loaded. This busy indicator blocks the interaction with the items until data loading is finished. By default, the busy indicator will be shown after one second. This behavior can be customized by setting the `busyIndicatorDelay` property.
         * 
         * Default value is `true`.
        */
        public getEnableBusyIndicator(): boolean;

        /**
            * Gets current value of property {@link #getFooterText footerText}.
         * 
         * Defines the footer text that appears in the control.
        */
        public getFooterText(): string;

        /**
            * Gets current value of property {@link #getGrowing growing}.
         * 
         * If set to `true`, enables the growing feature of the control to load more items by requesting from the model. ** Note: **: This feature only works when an `items` aggregation is bound. Growing must not be used together with two-way binding.
         * 
         * Default value is `false`.
        */
        public getGrowing(): boolean;

        /**
            * Gets current value of property {@link #getGrowingDirection growingDirection}.
         * 
         * Defines the direction of the growing feature. If set to `Downwards` the user has to scroll down to load more items or the growing button is displayed at the bottom. If set to `Upwards` the user has to scroll up to load more items or the growing button is displayed at the top.
         * 
         * Default value is `Downwards`.
        */
        public getGrowingDirection(): sap.m.ListGrowingDirection;

        /**
            * Returns growing information as object with "actual" and "total" keys. Note: This function returns "null" if "growing" feature is disabled.
        */
        public getGrowingInfo(): {};

        /**
            * Gets current value of property {@link #getGrowingScrollToLoad growingScrollToLoad}.
         * 
         * If set to true, the user can scroll down/up to load more items. Otherwise a growing button is displayed at the bottom/top of the control. ** Note: ** This property can only be used if the `growing` property is set to `true` and only if there is one instance of `sap.m.List` or `sap.m.Table` inside the scrollable scroll container (e.g `sap.m.Page`).
         * 
         * Default value is `false`.
        */
        public getGrowingScrollToLoad(): boolean;

        /**
            * Gets current value of property {@link #getGrowingThreshold growingThreshold}.
         * 
         * Defines the number of items to be requested from the model for each grow. This property can only be used if the `growing` property is set to `true`.
         * 
         * Default value is `20`.
        */
        public getGrowingThreshold(): number;

        /**
            * Gets current value of property {@link #getGrowingTriggerText growingTriggerText}.
         * 
         * Defines the text displayed on the growing button. The default is a translated text ("More") coming from the message bundle. This property can only be used if the `growing` property is set to `true`.
        */
        public getGrowingTriggerText(): string;

        /**
            * Gets current value of property {@link #getHeaderDesign headerDesign}.
         * 
         * Defines the header style of the control. Possible values are `Standard` and `Plain`.
         * 
         * Default value is `Standard`.
        */
        public getHeaderDesign(): sap.m.ListHeaderDesign;

        /**
            * Gets current value of property {@link #getHeaderText headerText}.
         * 
         * Defines the header text that appears in the control. ** Note: ** If `headerToolbar` aggregation is set, then this property is ignored.
        */
        public getHeaderText(): string;

        /**
            * Gets content of aggregation {@link #getHeaderToolbar headerToolbar}.
         * 
         * The header area can be used as a toolbar to add extra controls for user interactions. ** Note: ** When set, this overwrites the `headerText` property.
        */
        public getHeaderToolbar(): Toolbar;

        /**
            * Gets current value of property {@link #getIncludeItemInSelection includeItemInSelection}.
         * 
         * Defines whether the items are selectable by clicking on the item itself (`true`) rather than having to set the selection control first. ** Note: ** The `SingleSelectMaster` mode also provides this functionality by default.
         * 
         * Default value is `false`.
        */
        public getIncludeItemInSelection(): boolean;

        /**
            * Gets content of aggregation {@link #getInfoToolbar infoToolbar}.
         * 
         * A toolbar that is placed below the header to show extra information to the user.
        */
        public getInfoToolbar(): Toolbar;

        /**
            * Gets current value of property {@link #getInset inset}.
         * 
         * Defines the indentation of the container. Setting it to `true` indents the list.
         * 
         * Default value is `false`.
        */
        public getInset(): boolean;

        /**
            * Returns ItemNavigation for controls uses List
        */
        protected getItemNavigation(): ItemNavigation | any;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Defines the items contained within this control.
        */
        public getItems(): {};

        /**
            * Gets current value of property {@link #getKeyboardMode keyboardMode}.
         * 
         * Defines keyboard handling behavior of the control.
         * 
         * Default value is `Navigation`.
        */
        public getKeyboardMode(): sap.m.ListKeyboardMode;

        /**
            * Returns the last list mode, the mode that is rendered This can be used to detect mode changes during rendering
        */
        protected getLastMode(): any;

        /**
            * Returns a metadata object for class sap.m.ListBase.
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
            * Gets current value of property {@link #getMode mode}.
         * 
         * Defines the mode of the control (e.g. `None`, `SingleSelect`, `MultiSelect`, `Delete`).
         * 
         * Default value is `None`.
        */
        public getMode(): sap.m.ListMode;

        /**
            * Gets current value of property {@link #getModeAnimationOn modeAnimationOn}.
         * 
         * Defines if animations will be shown while switching between modes.
         * 
         * Default value is `true`.
        */
        public getModeAnimationOn(): boolean;

        /**
            * Gets current value of property {@link #getNoDataText noDataText}.
         * 
         * This text is displayed when the control contains no items.
        */
        public getNoDataText(): string;

        /**
            * Gets current value of property {@link #getRememberSelections rememberSelections}.
         * 
         * If set to true, this control remembers and retains the selection of the items after a binding update has been performed (e.g. sorting, filtering). ** Note: ** This feature works only if two-way data binding for the `selected` property of the item is not used. It also needs to be turned off if the binding context of the item does not always point to the same entry in the model, for example, if the order of the data in the `JSONModel` is changed.
         * 
         * Default value is `true`.
        */
        public getRememberSelections(): boolean;

        /**
            * Returns the binding contexts of the selected items. Note: This method returns an empty array if no databinding is used.
        */
        public getSelectedContexts(bAll: boolean): {};

        /**
            * Returns selected list item. When no item is selected, "null" is returned. When "multi-selection" is enabled and multiple items are selected, only the up-most selected item is returned.
        */
        public getSelectedItem(): ListItemBase;

        /**
            * Returns an array containing the selected list items. If no items are selected, an empty array is returned.
        */
        public getSelectedItems(): {};

        /**
            * Gets current value of property {@link #getShowNoData showNoData}.
         * 
         * Defines whether or not the text specified in the `noDataText` property is displayed.
         * 
         * Default value is `true`.
        */
        public getShowNoData(): boolean;

        /**
            * Gets current value of property {@link #getShowSeparators showSeparators}.
         * 
         * Defines which item separator style will be used.
         * 
         * Default value is `All`.
        */
        public getShowSeparators(): sap.m.ListSeparators;

        /**
            * Gets current value of property {@link #getShowUnread showUnread}.
         * 
         * Activates the unread indicator for all items, if set to `true`.
         * 
         * Default value is `false`.
        */
        public getShowUnread(): boolean;

        /**
            * Gets content of aggregation {@link #getSwipeContent swipeContent}.
         * 
         * User can swipe to bring in this control on the right hand side of an item. ** Note: ** For non-touch devices, this functionality is ignored.
        */
        public getSwipeContent(): Control;

        /**
            * Gets current value of property {@link #getSwipeDirection swipeDirection}.
         * 
         * Defines the direction of the swipe movement (e.g LeftToRight, RightToLeft, Both) to display the control defined in the `swipeContent` aggregation.
         * 
         * Default value is `Both`.
        */
        public getSwipeDirection(): sap.m.SwipeDirection;

        /**
            * Returns swiped list item. When no item is swiped, "null" is returned.
        */
        public getSwipedItem(): ListItemBase;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Sets the width of the control.
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.m.ListItemBase` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: ListItemBase): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: ListItemBase, iIndex: number): this;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | ListItemBase): ListItemBase;

        /**
            * Removes visible selections of the current selection mode.
        */
        public removeSelections(bAll: boolean): this;

        /**
            * Select all items in "MultiSelection" mode.
        */
        public selectAll(): this;

        /**
            * Sets a new value for property {@link #getEnableBusyIndicator enableBusyIndicator}.
         * 
         * When this property is set to `true`, the control will automatically display a busy indicator when it detects that data is being loaded. This busy indicator blocks the interaction with the items until data loading is finished. By default, the busy indicator will be shown after one second. This behavior can be customized by setting the `busyIndicatorDelay` property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableBusyIndicator(bEnableBusyIndicator: boolean): this;

        /**
            * Sets a new value for property {@link #getFooterText footerText}.
         * 
         * Defines the footer text that appears in the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFooterText(sFooterText: string): this;

        /**
            * Sets a new value for property {@link #getGrowing growing}.
         * 
         * If set to `true`, enables the growing feature of the control to load more items by requesting from the model. ** Note: **: This feature only works when an `items` aggregation is bound. Growing must not be used together with two-way binding.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setGrowing(bGrowing: boolean): this;

        /**
            * Sets a new value for property {@link #getGrowingDirection growingDirection}.
         * 
         * Defines the direction of the growing feature. If set to `Downwards` the user has to scroll down to load more items or the growing button is displayed at the bottom. If set to `Upwards` the user has to scroll up to load more items or the growing button is displayed at the top.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Downwards`.
        */
        public setGrowingDirection(sGrowingDirection: sap.m.ListGrowingDirection): this;

        /**
            * Sets a new value for property {@link #getGrowingScrollToLoad growingScrollToLoad}.
         * 
         * If set to true, the user can scroll down/up to load more items. Otherwise a growing button is displayed at the bottom/top of the control. ** Note: ** This property can only be used if the `growing` property is set to `true` and only if there is one instance of `sap.m.List` or `sap.m.Table` inside the scrollable scroll container (e.g `sap.m.Page`).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setGrowingScrollToLoad(bGrowingScrollToLoad: boolean): this;

        /**
            * Sets a new value for property {@link #getGrowingThreshold growingThreshold}.
         * 
         * Defines the number of items to be requested from the model for each grow. This property can only be used if the `growing` property is set to `true`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `20`.
        */
        public setGrowingThreshold(iGrowingThreshold: number): this;

        /**
            * Sets a new value for property {@link #getGrowingTriggerText growingTriggerText}.
         * 
         * Defines the text displayed on the growing button. The default is a translated text ("More") coming from the message bundle. This property can only be used if the `growing` property is set to `true`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setGrowingTriggerText(sGrowingTriggerText: string): this;

        /**
            * Sets a new value for property {@link #getHeaderDesign headerDesign}.
         * 
         * Defines the header style of the control. Possible values are `Standard` and `Plain`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setHeaderDesign(sHeaderDesign: sap.m.ListHeaderDesign): this;

        /**
            * Sets a new value for property {@link #getHeaderText headerText}.
         * 
         * Defines the header text that appears in the control. ** Note: ** If `headerToolbar` aggregation is set, then this property is ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeaderText(sHeaderText: string): this;

        /**
            * Sets the aggregated {@link #getHeaderToolbar headerToolbar}.
        */
        public setHeaderToolbar(oHeaderToolbar: Toolbar): this;

        /**
            * Sets a new value for property {@link #getIncludeItemInSelection includeItemInSelection}.
         * 
         * Defines whether the items are selectable by clicking on the item itself (`true`) rather than having to set the selection control first. ** Note: ** The `SingleSelectMaster` mode also provides this functionality by default.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setIncludeItemInSelection(bIncludeItemInSelection: boolean): this;

        /**
            * Sets the aggregated {@link #getInfoToolbar infoToolbar}.
        */
        public setInfoToolbar(oInfoToolbar: Toolbar): this;

        /**
            * Sets a new value for property {@link #getInset inset}.
         * 
         * Defines the indentation of the container. Setting it to `true` indents the list.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setInset(bInset: boolean): this;

        /**
            * Sets a new value for property {@link #getKeyboardMode keyboardMode}.
         * 
         * Defines keyboard handling behavior of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Navigation`.
        */
        public setKeyboardMode(sKeyboardMode: sap.m.ListKeyboardMode): this;

        /**
            * Sets a new value for property {@link #getMode mode}.
         * 
         * Defines the mode of the control (e.g. `None`, `SingleSelect`, `MultiSelect`, `Delete`).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setMode(sMode: sap.m.ListMode): this;

        /**
            * Sets a new value for property {@link #getModeAnimationOn modeAnimationOn}.
         * 
         * Defines if animations will be shown while switching between modes.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setModeAnimationOn(bModeAnimationOn: boolean): this;

        /**
            * Sets a new value for property {@link #getNoDataText noDataText}.
         * 
         * This text is displayed when the control contains no items.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNoDataText(sNoDataText: string): this;

        /**
            * Sets a new value for property {@link #getRememberSelections rememberSelections}.
         * 
         * If set to true, this control remembers and retains the selection of the items after a binding update has been performed (e.g. sorting, filtering). ** Note: ** This feature works only if two-way data binding for the `selected` property of the item is not used. It also needs to be turned off if the binding context of the item does not always point to the same entry in the model, for example, if the order of the data in the `JSONModel` is changed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setRememberSelections(bRememberSelections: boolean): this;

        /**
            * Selects or deselects the given list item.
        */
        public setSelectedItem(oListItem: ListItemBase, bSelect: boolean): this;

        /**
            * Sets a list item to be selected by id. In single mode the method removes the previous selection.
        */
        public setSelectedItemById(sId: string, bSelect: boolean): this;

        /**
            * Sets a new value for property {@link #getShowNoData showNoData}.
         * 
         * Defines whether or not the text specified in the `noDataText` property is displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowNoData(bShowNoData: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSeparators showSeparators}.
         * 
         * Defines which item separator style will be used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `All`.
        */
        public setShowSeparators(sShowSeparators: sap.m.ListSeparators): this;

        /**
            * Sets a new value for property {@link #getShowUnread showUnread}.
         * 
         * Activates the unread indicator for all items, if set to `true`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowUnread(bShowUnread: boolean): this;

        /**
            * Sets the aggregated {@link #getSwipeContent swipeContent}.
        */
        public setSwipeContent(oSwipeContent: Control): this;

        /**
            * Sets a new value for property {@link #getSwipeDirection swipeDirection}.
         * 
         * Defines the direction of the swipe movement (e.g LeftToRight, RightToLeft, Both) to display the control defined in the `swipeContent` aggregation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Both`.
        */
        public setSwipeDirection(sSwipeDirection: sap.m.SwipeDirection): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Sets the width of the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * After swipeContent is shown, user can interact with this control(e.g Tap). After interaction is done, you can/should use this method to hide swipeContent from screen. Note: If users try to tap inside of the list but outside of the swipeContent then control hides automatically.
        */
        public swipeOut(oCallback: any): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }
}