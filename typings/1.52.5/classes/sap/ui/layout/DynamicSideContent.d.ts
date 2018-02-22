declare module 'sap/ui/layout/DynamicSideContent' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IDynamicSideContentSettings extends IControlSettings {
        showSideContent?: boolean;
        showMainContent?: boolean;
        sideContentVisibility?: sap.ui.layout.SideContentVisibility;
        sideContentFallDown?: sap.ui.layout.SideContentFallDown;
        equalSplit?: boolean;
        containerQuery?: boolean;
        sideContentPosition?: sap.ui.layout.SideContentPosition;
    }

    /**
    
    */
    export class DynamicSideContent extends Control {

        /**
            * Constructor for a new `DynamicSideContent`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDynamicSideContentSettings);


        /**
            * Adds a control to the main content area. Only the main content part in the aggregation is re-rendered.
        */
        public addMainContent(oControl: {}): this;

        /**
            * Adds a control to the side content area. Only the side content part in the aggregation is re-rendered.
        */
        public addSideContent(oControl: {}): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:breakpointChanged breakpointChanged} event of this `sap.ui.layout.DynamicSideContent`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.layout.DynamicSideContent` itself.
         * 
         * Fires when the current breakpoint has been changed.
        */
        attachBreakpointChanged<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { currentBreakpoint: string, }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:breakpointChanged breakpointChanged} event of this `sap.ui.layout.DynamicSideContent`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.layout.DynamicSideContent` itself.
         * 
         * Fires when the current breakpoint has been changed.
        */
        attachBreakpointChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { currentBreakpoint: string, }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the mainContent in the aggregation {@link #getMainContent mainContent}.
        */
        public destroyMainContent(): this;

        /**
            * Destroys all the sideContent in the aggregation {@link #getSideContent sideContent}.
        */
        public destroySideContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:breakpointChanged breakpointChanged} event of this `sap.ui.layout.DynamicSideContent`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBreakpointChanged(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.layout.DynamicSideContent with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:breakpointChanged breakpointChanged} to attached listeners.
        */
        protected fireBreakpointChanged(mParameters?: { currentBreakpoint?: string, }): this;

        /**
            * Gets current value of property {@link #getContainerQuery containerQuery}.
         * 
         * If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding the control, defines the current range.
         * 
         * Default value is `false`.
        */
        public getContainerQuery(): boolean;

        /**
            * Returns the breakpoint for the current state of the control.
        */
        public getCurrentBreakpoint(): string;

        /**
            * Gets current value of property {@link #getEqualSplit equalSplit}.
         * 
         * Defines whether the control is in equal split mode. In this mode, the side and the main content take 50:50 percent of the container on all screen sizes except for phone, where the main and side contents are switching visibility using the toggle method.
         * 
         * Default value is `false`.
        */
        public getEqualSplit(): boolean;

        /**
            * Gets content of aggregation {@link #getMainContent mainContent}.
         * 
         * Main content controls.
        */
        public getMainContent(): {};

        /**
            * Returns a metadata object for class sap.ui.layout.DynamicSideContent.
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
            * Gets the value of showMainContent property.
        */
        public getShowMainContent(): boolean;

        /**
            * Gets the value of showSideContent property.
        */
        public getShowSideContent(): boolean;

        /**
            * Gets content of aggregation {@link #getSideContent sideContent}.
         * 
         * Side content controls.
        */
        public getSideContent(): {};

        /**
            * Gets current value of property {@link #getSideContentFallDown sideContentFallDown}.
         * 
         * Determines on which breakpoints the side content falls down below the main content.
         * 
         * Default value is `OnMinimumWidth`.
        */
        public getSideContentFallDown(): sap.ui.layout.SideContentFallDown;

        /**
            * Gets current value of property {@link #getSideContentPosition sideContentPosition}.
         * 
         * Determines whether the side content is on the left or on the right side of the main content.
         * 
         * Default value is `End`.
        */
        public getSideContentPosition(): sap.ui.layout.SideContentPosition;

        /**
            * Gets current value of property {@link #getSideContentVisibility sideContentVisibility}.
         * 
         * Determines on which breakpoints the side content is visible.
         * 
         * Default value is `ShowAboveS`.
        */
        public getSideContentVisibility(): sap.ui.layout.SideContentVisibility;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMainContent mainContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfMainContent(oMainContent: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getSideContent sideContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfSideContent(oSideContent: Control): number;

        /**
            * Inserts a mainContent into the aggregation {@link #getMainContent mainContent}.
        */
        public insertMainContent(oMainContent: Control, iIndex: number): this;

        /**
            * Inserts a sideContent into the aggregation {@link #getSideContent sideContent}.
        */
        public insertSideContent(oSideContent: Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getMainContent mainContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllMainContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getSideContent sideContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSideContent(): {};

        /**
            * Removes a mainContent from the aggregation {@link #getMainContent mainContent}.
        */
        public removeMainContent(vMainContent: number | string | Control): Control;

        /**
            * Removes a sideContent from the aggregation {@link #getSideContent sideContent}.
        */
        public removeSideContent(vSideContent: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getContainerQuery containerQuery}.
         * 
         * If set to TRUE, then not the media Query (device screen size) but the size of the container, surrounding the control, defines the current range.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setContainerQuery(bContainerQuery: boolean): this;

        /**
            * Sets or unsets the page in equalSplit mode.
        */
        public setEqualSplit(bState?: boolean): this;

        /**
            * Sets the showMainContent property.
        */
        public setShowMainContent(bVisible: boolean, bSuppressVisualUpdate: boolean): this;

        /**
            * Sets the showSideContent property.
        */
        public setShowSideContent(bVisible: boolean, bSuppressVisualUpdate: boolean): this;

        /**
            * Sets a new value for property {@link #getSideContentFallDown sideContentFallDown}.
         * 
         * Determines on which breakpoints the side content falls down below the main content.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `OnMinimumWidth`.
        */
        public setSideContentFallDown(sSideContentFallDown: sap.ui.layout.SideContentFallDown): this;

        /**
            * Sets a new value for property {@link #getSideContentPosition sideContentPosition}.
         * 
         * Determines whether the side content is on the left or on the right side of the main content.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `End`.
        */
        public setSideContentPosition(sSideContentPosition: sap.ui.layout.SideContentPosition): this;

        /**
            * Sets the sideContentVisibility property.
        */
        public setSideContentVisibility(sVisibility: sap.ui.layout.SideContentVisibility, bSuppressVisualUpdate: boolean): this;

        /**
            * Used for the toggle button functionality. When the control is on a phone screen size only, one control area is visible. This helper method is used to implement a button/switch for changing between the main and side content areas. Only works if the current breakpoint is "S".
        */
        public toggle(): this;

    }
}