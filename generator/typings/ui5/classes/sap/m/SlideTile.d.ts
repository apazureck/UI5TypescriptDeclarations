declare module 'sap/m/SlideTile' {
    import { Event } from 'sap/ui/base/Event';
    import { GenericTile } from 'sap/m/GenericTile';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISlideTileSettings extends IControlSettings {
        displayTime?: number;
        transitionTime?: number;
        scope?: sap.m.GenericTileScope;
    }

    /**
    
    */
    export class SlideTile extends Control {

        /**
            * Constructor for a new sap.m.SlideTile control.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISlideTileSettings);


        /**
            * Adds some tile to the aggregation {@link #getTiles tiles}.
        */
        public addTile(oTile: GenericTile): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.SlideTile`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SlideTile` itself.
         * 
         * The event is fired when the user chooses the tile. The event is available only in Actions scope.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current scope the SlideTile was in when the event occurred. */
            scope: sap.m.GenericTileScope, /* * The action that was pressed on the tile. In the Actions scope, the available actions are Press and Remove. */
            action: string, /* * The Element's DOM Element. In Actions scope the domRef points to the DOM Element of the remove button (if pressed) or the more icon. */
            domRef: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.SlideTile`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SlideTile` itself.
         * 
         * The event is fired when the user chooses the tile. The event is available only in Actions scope.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current scope the SlideTile was in when the event occurred. */
            scope: sap.m.GenericTileScope, /* * The action that was pressed on the tile. In the Actions scope, the available actions are Press and Remove. */
            action: string, /* * The Element's DOM Element. In Actions scope the domRef points to the DOM Element of the remove button (if pressed) or the more icon. */
            domRef: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getTiles tiles} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindTiles(oBindingInfo: {}): this;

        /**
            * Destroys all the tiles in the aggregation {@link #getTiles tiles}.
        */
        public destroyTiles(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.SlideTile`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.SlideTile with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: { scope?: sap.m.GenericTileScope, action?: string, domRef?: any, }): this;

        /**
            * Gets current value of property {@link #getDisplayTime displayTime}.
         * 
         * The time of the slide display in milliseconds.
         * 
         * Default value is `5000`.
        */
        public getDisplayTime(): number;

        /**
            * Returns a metadata object for class sap.m.SlideTile.
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
            * Gets current value of property {@link #getScope scope}.
         * 
         * Changes the visualization in order to enable additional actions with the SlideTile control.
         * 
         * Default value is `Display`.
        */
        public getScope(): sap.m.GenericTileScope;

        /**
            * Gets content of aggregation {@link #getTiles tiles}.
         * 
         * The set of Generic Tiles to be shown in the control.
        */
        public getTiles(): {};

        /**
            * Gets current value of property {@link #getTransitionTime transitionTime}.
         * 
         * The time of the slide changing in milliseconds.
         * 
         * Default value is `500`.
        */
        public getTransitionTime(): number;

        /**
            * Checks for the provided `sap.m.GenericTile` in the aggregation {@link #getTiles tiles}. and returns its index if found or -1 otherwise.
        */
        public indexOfTile(oTile: GenericTile): number;

        /**
            * Inserts a tile into the aggregation {@link #getTiles tiles}.
        */
        public insertTile(oTile: GenericTile, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getTiles tiles}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllTiles(): {};

        /**
            * Removes a tile from the aggregation {@link #getTiles tiles}.
        */
        public removeTile(vTile: number | string | GenericTile): GenericTile;

        /**
            * Sets a new value for property {@link #getDisplayTime displayTime}.
         * 
         * The time of the slide display in milliseconds.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `5000`.
        */
        public setDisplayTime(iDisplayTime: number): this;

        /**
            * Sets a new value for property {@link #getScope scope}.
         * 
         * Changes the visualization in order to enable additional actions with the SlideTile control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Display`.
        */
        public setScope(sScope: sap.m.GenericTileScope): this;

        /**
            * Sets a new value for property {@link #getTransitionTime transitionTime}.
         * 
         * The time of the slide changing in milliseconds.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `500`.
        */
        public setTransitionTime(iTransitionTime: number): this;

        /**
            * Unbinds aggregation {@link #getTiles tiles} from model data.
        */
        public unbindTiles(): this;

    }
}