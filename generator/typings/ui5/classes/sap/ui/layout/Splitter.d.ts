declare module 'sap/ui/layout/Splitter' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISplitterSettings extends IControlSettings {
        orientation?: sap.ui.core.Orientation;
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class Splitter extends Control {

        /**
            * Constructor for a new Splitter.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISplitterSettings);


        /**
            * Adds some contentArea to the aggregation {@link #getContentAreas contentAreas}.
        */
        public addContentArea(oContentArea: Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.layout.Splitter`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.layout.Splitter` itself.
         * 
         * Event is fired when contents are resized.
        */
        attachResize<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the splitter control. The splitter control can also be accessed by calling getSource() on the event. */
            id: string, /* * An array of values representing the old (pixel-)sizes of the splitter contents */
            oldSizes: {}, /* * An array of values representing the new (pixel-)sizes of the splitter contents */
            newSizes: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.layout.Splitter`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.layout.Splitter` itself.
         * 
         * Event is fired when contents are resized.
        */
        attachResize<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the splitter control. The splitter control can also be accessed by calling getSource() on the event. */
            id: string, /* * An array of values representing the old (pixel-)sizes of the splitter contents */
            oldSizes: {}, /* * An array of values representing the new (pixel-)sizes of the splitter contents */
            newSizes: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the contentAreas in the aggregation {@link #getContentAreas contentAreas}.
        */
        public destroyContentAreas(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:resize resize} event of this `sap.ui.layout.Splitter`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachResize(fnFunction: (() => any), oListener: {}): this;

        /**
            * Disables the resize handler for this control, this leads to an automatic resize of the contents whenever the control changes its size. The resize handler is enabled in every control instance by default. For performance reasons this behavior can be disabled by calling disableAutoResize()
        */
        protected disableAutoResize(bTemporarily?: boolean): any;

        /**
            * Disables the resizing of the Splitter contents via keyboard. This changes the Splitter bars to non-focussable elements.
        */
        protected disableKeyboardSupport(): any;

        /**
            * Disables recalculation and resize of the splitter contents while dragging the splitter bar. This means that the contents are resized only once after moving the splitter bar.
        */
        protected disableLiveResize(): any;

        /**
            * Enables the resize handler for this control, this leads to an automatic resize of the contents whenever the control changes its size. The resize handler is enabled in every control instance by default. For performance reasons this behavior can be disabled by calling disableAutoResize()
        */
        protected enableAutoResize(bTemporarily?: boolean): any;

        /**
            * Enables the resizing of the Splitter contents via keyboard. This makes the Splitter bars focussable elements.
        */
        protected enableKeyboardSupport(): any;

        /**
            * Enables recalculation and resize of the splitter contents while dragging the splitter bar. This means that the contents are resized several times per second when moving the splitter bar.
        */
        protected enableLiveResize(): any;

        /**
            * Creates a new subclass of class sap.ui.layout.Splitter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:resize resize} to attached listeners.
        */
        protected fireResize(mParameters?: { id?: string, oldSizes?: {}, newSizes?: {}, }): this;

        /**
            * Returns the current actual content sizes as pixel value - these values can change with every resize.
        */
        protected getCalculatedSizes(): {};

        /**
            * Gets content of aggregation {@link #getContentAreas contentAreas}.
         * 
         * The content areas to be split. The control will show n-1 splitter bars between n controls in this aggregation.
        */
        public getContentAreas(): {};

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The height of the control
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.layout.Splitter.
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
            * Gets current value of property {@link #getOrientation orientation}.
         * 
         * Whether to split the contents horizontally (default) or vertically.
         * 
         * Default value is `Horizontal`.
        */
        public getOrientation(): sap.ui.core.Orientation;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width of the control
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContentAreas contentAreas}. and returns its index if found or -1 otherwise.
        */
        public indexOfContentArea(oContentArea: Control): number;

        /**
            * Inserts a contentArea into the aggregation {@link #getContentAreas contentAreas}.
        */
        public insertContentArea(oContentArea: Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContentAreas contentAreas}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContentAreas(): {};

        /**
            * Removes a contentArea from the aggregation {@link #getContentAreas contentAreas}.
        */
        public removeContentArea(vContentArea: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The height of the control
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getOrientation orientation}.
         * 
         * Whether to split the contents horizontally (default) or vertically.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Horizontal`.
        */
        public setOrientation(sOrientation: sap.ui.core.Orientation): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The width of the control
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * This method triggers a resize on the Splitter - meaning it forces the Splitter to recalculate all sizes. This method should only be used in rare cases, for example when the CSS that defines the sizes of the splitter bars changes without triggering a rerendering of the splitter.
        */
        public triggerResize(forceDirectly?: boolean): any;

    }
}