declare module 'sap/m/TileContainer' {
    import { Event } from 'sap/ui/base/Event';
    import { Tile } from 'sap/m/Tile';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITileContainerSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        editable?: boolean;
        allowAdd?: boolean;
    }

    /**
    
    */
    export class TileContainer extends Control {

        /**
            * Constructor for a new TileContainer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITileContainerSettings);


        /**
            * Adds a Tile to the end of the tiles collection.
        */
        public addTile(oTile: Tile): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tileAdd tileAdd} event of this `sap.m.TileContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TileContainer` itself.
         * 
         * Fires when a Tile is added.
        */
        attachTileAdd<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tileAdd tileAdd} event of this `sap.m.TileContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TileContainer` itself.
         * 
         * Fires when a Tile is added.
        */
        attachTileAdd<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tileDelete tileDelete} event of this `sap.m.TileContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TileContainer` itself.
         * 
         * Fires if a Tile is deleted in Edit mode.
        */
        attachTileDelete<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The deleted Tile. */
            tile: Tile,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tileDelete tileDelete} event of this `sap.m.TileContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TileContainer` itself.
         * 
         * Fires if a Tile is deleted in Edit mode.
        */
        attachTileDelete<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The deleted Tile. */
            tile: Tile,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tileMove tileMove} event of this `sap.m.TileContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TileContainer` itself.
         * 
         * Fires if a Tile is moved.
        */
        attachTileMove<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The Tile that has been moved. */
            tile: Tile, /* * The new index of the Tile in the tiles aggregation. */
            newIndex: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tileMove tileMove} event of this `sap.m.TileContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TileContainer` itself.
         * 
         * Fires if a Tile is moved.
        */
        attachTileMove<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The Tile that has been moved. */
            tile: Tile, /* * The new index of the Tile in the tiles aggregation. */
            newIndex: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Deletes a Tile.
        */
        public deleteTile(oTile: Tile): this;

        /**
            * Destroys all the tiles in the aggregation {@link #getTiles tiles}.
        */
        public destroyTiles(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:tileAdd tileAdd} event of this `sap.m.TileContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTileAdd(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:tileDelete tileDelete} event of this `sap.m.TileContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTileDelete(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:tileMove tileMove} event of this `sap.m.TileContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTileMove(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.TileContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:tileAdd tileAdd} to attached listeners.
        */
        protected fireTileAdd(mParameters?: {}): this;

        /**
            * Fires event {@link #event:tileDelete tileDelete} to attached listeners.
        */
        protected fireTileDelete(mParameters?: { tile?: Tile, }): this;

        /**
            * Fires event {@link #event:tileMove tileMove} to attached listeners.
        */
        protected fireTileMove(mParameters?: { tile?: Tile, newIndex?: number, }): this;

        /**
            * Gets current value of property {@link #getAllowAdd allowAdd}.
         * 
         * Determines whether the user is allowed to add Tiles in Edit mode (editable = true).
        */
        public getAllowAdd(): boolean;

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Determines whether the TileContainer is editable so you can move, delete or add tiles.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Defines the height of the TileContainer in px.
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.core.CSSSize;

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
            * Returns a metadata object for class sap.m.TileContainer.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the index of the first Tile visible in the current page.
        */
        public getPageFirstTileIndex(): number;

        /**
            * Gets content of aggregation {@link #getTiles tiles}.
         * 
         * The Tiles to be displayed by the TileContainer.
        */
        public getTiles(): {};

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the width of the TileContainer in px.
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.m.Tile` in the aggregation {@link #getTiles tiles}. and returns its index if found or -1 otherwise.
        */
        public indexOfTile(oTile: Tile): number;

        /**
            * Inserts a Tile to the given index.
        */
        public insertTile(oTile: Tile, iIndex: number): this;

        /**
            * Moves a given Tile to the given index.
        */
        public moveTile(vTile: Tile, iNewIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getTiles tiles}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllTiles(): {};

        /**
            * Removes a tile from the aggregation {@link #getTiles tiles}.
        */
        public removeTile(vTile: number | string | Tile): Tile;

        /**
            * Scrolls to the page where the given Tile or tile index is included. Optionally this can be done animated or not. With IE9 the scroll is never animated.
        */
        public scrollIntoView(vTile: Tile | number, bAnimated: boolean, aVisibleTiles: any): any;

        /**
            * Scrolls one page to the left.
        */
        public scrollLeft(): any;

        /**
            * Scrolls one page to the right.
        */
        public scrollRight(): any;

        /**
            * Sets a new value for property {@link #getAllowAdd allowAdd}.
         * 
         * Determines whether the user is allowed to add Tiles in Edit mode (editable = true).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAllowAdd(bAllowAdd: boolean): this;

        /**
            * Sets the editable property to the TileContainer, allowing to move icons. This is currently also set with a long tap.
        */
        public setEditable(bValue: boolean): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Defines the height of the TileContainer in px.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the width of the TileContainer in px.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}