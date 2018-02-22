declare module 'sap/ui/ux3/Feed' {
    import { Event } from 'sap/ui/base/Event';
    import { FeedChunk } from 'sap/ui/ux3/FeedChunk';
    import { MenuItemBase } from 'sap/ui/unified/MenuItemBase';
    import { ListItem } from 'sap/ui/core/ListItem';
    import { MenuItem } from 'sap/ui/commons/MenuItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IFeedSettings extends IControlSettings {
        feederThumbnailSrc?: sap.ui.core.URI;
        feederSender?: string;
        live?: boolean;
        title?: string;
    }

    /**
    
    */
    export class Feed extends Control {

        /**
            * Constructor for a new Feed.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFeedSettings);


        /**
            * Adds some chunk to the aggregation {@link #getChunks chunks}.
        */
        public addChunk(oChunk: FeedChunk): this;

        /**
            * Adds some filterItem to the aggregation {@link #getFilterItems filterItems}.
        */
        public addFilterItem(oFilterItem: ListItem): this;

        /**
            * Adds some toolsMenuItem to the aggregation {@link #getToolsMenuItems toolsMenuItems}.
        */
        public addToolsMenuItem(oToolsMenuItem: MenuItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:chunkAdded chunkAdded} event of this `sap.ui.ux3.Feed`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         * 
         * Event is fired when a new chunk is added
        */
        attachChunkAdded<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * New chunk */
            chunk: FeedChunk,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:chunkAdded chunkAdded} event of this `sap.ui.ux3.Feed`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         * 
         * Event is fired when a new chunk is added
        */
        attachChunkAdded<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * New chunk */
            chunk: FeedChunk,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filterChange filterChange} event of this `sap.ui.ux3.Feed`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         * 
         * Event is fired when the filter is changed
        */
        attachFilterChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new/changed value of the filter */
            newValue: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filterChange filterChange} event of this `sap.ui.ux3.Feed`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         * 
         * Event is fired when the filter is changed
        */
        attachFilterChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new/changed value of the filter */
            newValue: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Feed`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         * 
         * Event is fired when the search function on SearchField is triggered
        */
        attachSearch<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The search query */
            query: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Feed`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         * 
         * Event is fired when the search function on SearchField is triggered
        */
        attachSearch<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The search query */
            query: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleLive toggleLive} event of this `sap.ui.ux3.Feed`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         * 
         * Event is fired when the live mode has changed
        */
        attachToggleLive<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current live indicator */
            live: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleLive toggleLive} event of this `sap.ui.ux3.Feed`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         * 
         * Event is fired when the live mode has changed
        */
        attachToggleLive<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current live indicator */
            live: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toolsItemSelected toolsItemSelected} event of this `sap.ui.ux3.Feed`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         * 
         * Event is fired when an item from the tools MenuButton was selected
        */
        attachToolsItemSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The Id of the selected item */
            itemId: string, /* * The selected item */
            item: MenuItemBase,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toolsItemSelected toolsItemSelected} event of this `sap.ui.ux3.Feed`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Feed` itself.
         * 
         * Event is fired when an item from the tools MenuButton was selected
        */
        attachToolsItemSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The Id of the selected item */
            itemId: string, /* * The selected item */
            item: MenuItemBase,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getChunks chunks} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindChunks(oBindingInfo: {}): this;

        /**
            * Binds aggregation {@link #getFilterItems filterItems} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindFilterItems(oBindingInfo: {}): this;

        /**
            * Binds aggregation {@link #getToolsMenuItems toolsMenuItems} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindToolsMenuItems(oBindingInfo: {}): this;

        /**
            * Destroys all the chunks in the aggregation {@link #getChunks chunks}.
        */
        public destroyChunks(): this;

        /**
            * Destroys all the filterItems in the aggregation {@link #getFilterItems filterItems}.
        */
        public destroyFilterItems(): this;

        /**
            * Destroys all the toolsMenuItems in the aggregation {@link #getToolsMenuItems toolsMenuItems}.
        */
        public destroyToolsMenuItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:chunkAdded chunkAdded} event of this `sap.ui.ux3.Feed`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChunkAdded(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:filterChange filterChange} event of this `sap.ui.ux3.Feed`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFilterChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.ux3.Feed`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSearch(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:toggleLive toggleLive} event of this `sap.ui.ux3.Feed`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachToggleLive(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:toolsItemSelected toolsItemSelected} event of this `sap.ui.ux3.Feed`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachToolsItemSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.Feed with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:chunkAdded chunkAdded} to attached listeners.
        */
        protected fireChunkAdded(mParameters?: { chunk?: FeedChunk, }): this;

        /**
            * Fires event {@link #event:filterChange filterChange} to attached listeners.
        */
        protected fireFilterChange(mParameters?: { newValue?: string, }): this;

        /**
            * Fires event {@link #event:search search} to attached listeners.
        */
        protected fireSearch(mParameters?: { query?: string, }): this;

        /**
            * Fires event {@link #event:toggleLive toggleLive} to attached listeners.
        */
        protected fireToggleLive(mParameters?: { live?: boolean, }): this;

        /**
            * Fires event {@link #event:toolsItemSelected toolsItemSelected} to attached listeners.
        */
        protected fireToolsItemSelected(mParameters?: { itemId?: string, item?: MenuItemBase, }): this;

        /**
            * Gets content of aggregation {@link #getChunks chunks}.
         * 
         * The chunks
        */
        public getChunks(): {};

        /**
            * Gets current value of property {@link #getFeederSender feederSender}.
         * 
         * The sender of the feeder
        */
        public getFeederSender(): string;

        /**
            * Gets current value of property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
         * 
         * The path to the thumbnail image used for the feeder
        */
        public getFeederThumbnailSrc(): sap.ui.core.URI;

        /**
            * Gets content of aggregation {@link #getFilterItems filterItems}.
         * 
         * Items of the filter
        */
        public getFilterItems(): {};

        /**
            * Gets current value of property {@link #getLive live}.
         * 
         * Specifies whether the feed shall be in live mode
         * 
         * Default value is `true`.
        */
        public getLive(): boolean;

        /**
            * Returns a metadata object for class sap.ui.ux3.Feed.
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
            * Gets current value of property {@link #getTitle title}.
         * 
         * Title text of the Feed. If no text is entered "FEED" is displayed.
        */
        public getTitle(): string;

        /**
            * Gets content of aggregation {@link #getToolsMenuItems toolsMenuItems}.
         * 
         * MenuItems to open when the tool button is clicked by the user
        */
        public getToolsMenuItems(): {};

        /**
            * Checks for the provided `sap.ui.ux3.FeedChunk` in the aggregation {@link #getChunks chunks}. and returns its index if found or -1 otherwise.
        */
        public indexOfChunk(oChunk: FeedChunk): number;

        /**
            * Checks for the provided `sap.ui.core.ListItem` in the aggregation {@link #getFilterItems filterItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfFilterItem(oFilterItem: ListItem): number;

        /**
            * Checks for the provided `sap.ui.commons.MenuItem` in the aggregation {@link #getToolsMenuItems toolsMenuItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfToolsMenuItem(oToolsMenuItem: MenuItem): number;

        /**
            * Inserts a chunk into the aggregation {@link #getChunks chunks}.
        */
        public insertChunk(oChunk: FeedChunk, iIndex: number): this;

        /**
            * Inserts a filterItem into the aggregation {@link #getFilterItems filterItems}.
        */
        public insertFilterItem(oFilterItem: ListItem, iIndex: number): this;

        /**
            * Inserts a toolsMenuItem into the aggregation {@link #getToolsMenuItems toolsMenuItems}.
        */
        public insertToolsMenuItem(oToolsMenuItem: MenuItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getChunks chunks}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllChunks(): {};

        /**
            * Removes all the controls from the aggregation {@link #getFilterItems filterItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllFilterItems(): {};

        /**
            * Removes all the controls from the aggregation {@link #getToolsMenuItems toolsMenuItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllToolsMenuItems(): {};

        /**
            * Removes a chunk from the aggregation {@link #getChunks chunks}.
        */
        public removeChunk(vChunk: number | string | FeedChunk): FeedChunk;

        /**
            * Removes a filterItem from the aggregation {@link #getFilterItems filterItems}.
        */
        public removeFilterItem(vFilterItem: number | string | ListItem): ListItem;

        /**
            * Removes a toolsMenuItem from the aggregation {@link #getToolsMenuItems toolsMenuItems}.
        */
        public removeToolsMenuItem(vToolsMenuItem: number | string | MenuItem): MenuItem;

        /**
            * Sets a new value for property {@link #getFeederSender feederSender}.
         * 
         * The sender of the feeder
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFeederSender(sFeederSender: string): this;

        /**
            * Sets a new value for property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
         * 
         * The path to the thumbnail image used for the feeder
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFeederThumbnailSrc(sFeederThumbnailSrc: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getLive live}.
         * 
         * Specifies whether the feed shall be in live mode
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setLive(bLive: boolean): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Title text of the Feed. If no text is entered "FEED" is displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Unbinds aggregation {@link #getChunks chunks} from model data.
        */
        public unbindChunks(): this;

        /**
            * Unbinds aggregation {@link #getFilterItems filterItems} from model data.
        */
        public unbindFilterItems(): this;

        /**
            * Unbinds aggregation {@link #getToolsMenuItems toolsMenuItems} from model data.
        */
        public unbindToolsMenuItems(): this;

    }
}