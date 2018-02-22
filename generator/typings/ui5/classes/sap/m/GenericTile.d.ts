declare module 'sap/m/GenericTile' {
    import { Event } from 'sap/ui/base/Event';
    import { TileContent } from 'sap/m/TileContent';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IGenericTileSettings extends IControlSettings {
        mode?: sap.m.GenericTileMode;
        header?: string;
        subheader?: string;
        failedText?: string;
        size?: sap.m.Size;
        frameType?: sap.m.FrameType;
        backgroundImage?: sap.ui.core.URI;
        headerImage?: sap.ui.core.URI;
        state?: sap.m.LoadState;
        imageDescription?: string;
        scope?: sap.m.GenericTileScope;
        ariaLabel?: string;
    }

    /**
    
    */
    export class GenericTile extends Control {

        /**
            * Constructor for a new sap.m.GenericTile control.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IGenericTileSettings);


        /**
            * Adds some tileContent to the aggregation {@link #getTileContent tileContent}.
        */
        public addTileContent(oTileContent: TileContent): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.GenericTile`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.GenericTile` itself.
         * 
         * The event is triggered when the user presses the tile.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current scope the GenericTile was in when the event occurred. */
            scope: sap.m.GenericTileScope, /* * The action that was pressed on the tile. In the Actions scope, the available actions are Press and Remove. In Display scope, the parameter value is only Press. */
            action: string, /* * The pressed DOM Element pointing to the GenericTile's DOM Element in Display scope. In Actions scope it points to the more icon, when the tile is pressed, or to the DOM Element of the remove button, when the remove button is pressed. */
            domRef: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.GenericTile`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.GenericTile` itself.
         * 
         * The event is triggered when the user presses the tile.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current scope the GenericTile was in when the event occurred. */
            scope: sap.m.GenericTileScope, /* * The action that was pressed on the tile. In the Actions scope, the available actions are Press and Remove. In Display scope, the parameter value is only Press. */
            action: string, /* * The pressed DOM Element pointing to the GenericTile's DOM Element in Display scope. In Actions scope it points to the more icon, when the tile is pressed, or to the DOM Element of the remove button, when the remove button is pressed. */
            domRef: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getTileContent tileContent} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindTileContent(oBindingInfo: {}): this;

        /**
            * Destroys the icon in the aggregation {@link #getIcon icon}.
        */
        public destroyIcon(): this;

        /**
            * Destroys all the tileContent in the aggregation {@link #getTileContent tileContent}.
        */
        public destroyTileContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.GenericTile`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.GenericTile with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: { scope?: sap.m.GenericTileScope, action?: string, domRef?: any, }): this;

        /**
            * Gets current value of property {@link #getAriaLabel ariaLabel}.
         * 
         * Additional description for aria-label. The aria-label is rendered before the standard aria-label.
        */
        public getAriaLabel(): string;

        /**
            * Gets current value of property {@link #getBackgroundImage backgroundImage}.
         * 
         * The URI of the background image.
        */
        public getBackgroundImage(): sap.ui.core.URI;

        /**
            * Provides an interface to the tile's layout information consistent in all modes and content densities.
        */
        protected getBoundingRects(): {};

        /**
            * Gets current value of property {@link #getFailedText failedText}.
         * 
         * The message that appears when the control is in the Failed state.
        */
        public getFailedText(): string;

        /**
            * Gets current value of property {@link #getFrameType frameType}.
         * 
         * The frame type: OneByOne or TwoByOne. Set to OneByOne as default if no property is defined or set to Auto by the app.
         * 
         * Default value is `OneByOne`.
        */
        public getFrameType(): sap.m.FrameType;

        /**
            * Gets current value of property {@link #getHeader header}.
         * 
         * The header of the tile.
        */
        public getHeader(): string;

        /**
            * Gets current value of property {@link #getHeaderImage headerImage}.
         * 
         * The image to be displayed as a graphical element within the header. This can be an image or an icon from the icon font.
        */
        public getHeaderImage(): sap.ui.core.URI;

        /**
            * Gets content of aggregation {@link #getIcon icon}.
         * 
         * An icon or image to be displayed in the control. This aggregation is deprecated since version 1.36.0, to display an icon or image use sap.m.ImageContent control instead.
        */
        public getIcon(): Control;

        /**
            * Gets current value of property {@link #getImageDescription imageDescription}.
         * 
         * Description of a header image that is used in the tooltip.
        */
        public getImageDescription(): string;

        /**
            * Returns a metadata object for class sap.m.GenericTile.
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
         * The mode of the GenericTile.
         * 
         * Default value is `ContentMode`.
        */
        public getMode(): sap.m.GenericTileMode;

        /**
            * Gets current value of property {@link #getScope scope}.
         * 
         * Changes the visualization in order to enable additional actions with the Generic Tile.
         * 
         * Default value is `Display`.
        */
        public getScope(): sap.m.GenericTileScope;

        /**
            * Gets current value of property {@link #getSize size}.
         * 
         * The size of the tile. If not set, then the default size is applied based on the device.
         * 
         * Default value is `Auto`.
        */
        public getSize(): sap.m.Size;

        /**
            * Gets current value of property {@link #getState state}.
         * 
         * The load status.
         * 
         * Default value is `Loaded`.
        */
        public getState(): sap.m.LoadState;

        /**
            * Gets current value of property {@link #getSubheader subheader}.
         * 
         * The subheader of the tile.
        */
        public getSubheader(): string;

        /**
            * Gets content of aggregation {@link #getTileContent tileContent}.
         * 
         * The content of the tile.
        */
        public getTileContent(): {};

        /**
            * Checks for the provided `sap.m.TileContent` in the aggregation {@link #getTileContent tileContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfTileContent(oTileContent: TileContent): number;

        /**
            * Inserts a tileContent into the aggregation {@link #getTileContent tileContent}.
        */
        public insertTileContent(oTileContent: TileContent, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getTileContent tileContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllTileContent(): {};

        /**
            * Removes a tileContent from the aggregation {@link #getTileContent tileContent}.
        */
        public removeTileContent(vTileContent: number | string | TileContent): TileContent;

        /**
            * Sets a new value for property {@link #getAriaLabel ariaLabel}.
         * 
         * Additional description for aria-label. The aria-label is rendered before the standard aria-label.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAriaLabel(sAriaLabel: string): this;

        /**
            * Sets a new value for property {@link #getBackgroundImage backgroundImage}.
         * 
         * The URI of the background image.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBackgroundImage(sBackgroundImage: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getFailedText failedText}.
         * 
         * The message that appears when the control is in the Failed state.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFailedText(sFailedText: string): this;

        /**
            * Sets a new value for property {@link #getFrameType frameType}.
         * 
         * The frame type: OneByOne or TwoByOne. Set to OneByOne as default if no property is defined or set to Auto by the app.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `OneByOne`.
        */
        public setFrameType(sFrameType: sap.m.FrameType): this;

        /**
            * Sets a new value for property {@link #getHeader header}.
         * 
         * The header of the tile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeader(sHeader: string): this;

        /**
            * Sets a new value for property {@link #getHeaderImage headerImage}.
         * 
         * The image to be displayed as a graphical element within the header. This can be an image or an icon from the icon font.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeaderImage(sHeaderImage: sap.ui.core.URI): this;

        /**
            * Sets the aggregated {@link #getIcon icon}.
        */
        public setIcon(oIcon: Control): this;

        /**
            * Sets a new value for property {@link #getImageDescription imageDescription}.
         * 
         * Description of a header image that is used in the tooltip.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setImageDescription(sImageDescription: string): this;

        /**
            * Sets a new value for property {@link #getMode mode}.
         * 
         * The mode of the GenericTile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `ContentMode`.
        */
        public setMode(sMode: sap.m.GenericTileMode): this;

        /**
            * Provides an interface to switch on or off the tile's press event. Used in SlideTile for Actions scope.
        */
        protected setPressEnabled(value: boolean): any;

        /**
            * Sets a new value for property {@link #getScope scope}.
         * 
         * Changes the visualization in order to enable additional actions with the Generic Tile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Display`.
        */
        public setScope(sScope: sap.m.GenericTileScope): this;

        /**
            * Sets a new value for property {@link #getSize size}.
         * 
         * The size of the tile. If not set, then the default size is applied based on the device.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setSize(sSize: sap.m.Size): this;

        /**
            * Sets a new value for property {@link #getState state}.
         * 
         * The load status.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Loaded`.
        */
        public setState(sState: sap.m.LoadState): this;

        /**
            * Sets a new value for property {@link #getSubheader subheader}.
         * 
         * The subheader of the tile.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSubheader(sSubheader: string): this;

        /**
            * Shows the actions scope view of GenericTile without changing the scope. Used in SlideTile for Actions scope.
        */
        protected showActionsView(value: boolean): any;

        /**
            * Unbinds aggregation {@link #getTileContent tileContent} from model data.
        */
        public unbindTileContent(): this;

    }
}