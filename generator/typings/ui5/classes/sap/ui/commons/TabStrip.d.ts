declare module 'sap/ui/commons/TabStrip' {
    import { Event } from 'sap/ui/base/Event';
    import { Tab } from 'sap/ui/commons/Tab';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITabStripSettings extends IControlSettings {
        height?: sap.ui.core.CSSSize;
        width?: sap.ui.core.CSSSize;
        selectedIndex?: number;
        enableTabReordering?: boolean;
    }

    /**
    
    */
    export class TabStrip extends Control {

        /**
            * Constructor for a new TabStrip.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITabStripSettings);


        /**
            * Adds some tab to the aggregation {@link #getTabs tabs}.
        */
        public addTab(oTab: Tab): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.commons.TabStrip`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TabStrip` itself.
         * 
         * Fires when the user closes a tab.
        */
        attachClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The index of the closed tab. */
            index: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.commons.TabStrip`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TabStrip` itself.
         * 
         * Fires when the user closes a tab.
        */
        attachClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The index of the closed tab. */
            index: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.TabStrip`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TabStrip` itself.
         * 
         * Fires when the user selects a tab.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The index of the selected tab. */
            index: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.TabStrip`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TabStrip` itself.
         * 
         * Fires when the user selects a tab.
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The index of the selected tab. */
            index: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Closes a tab (if the tab is selected, the next one will be selected; if it's the last tab, the previous one will be selected).
         * 
         * This method should be called if the close event is fired. It can not be called automatically because the consumer might need to run some logic before the tab is closed.
        */
        public closeTab(iIndex: number): any;

        /**
            * Creates a Tab and adds it to the TabStrip.
        */
        public createTab(sText: string, oContent: Control): Tab;

        /**
            * Destroys all the tabs in the aggregation {@link #getTabs tabs}.
        */
        public destroyTabs(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.commons.TabStrip`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.commons.TabStrip`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.TabStrip with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:close close} to attached listeners.
        */
        protected fireClose(mParameters?: { index?: number, }): this;

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { index?: number, }): this;

        /**
            * Gets current value of property {@link #getEnableTabReordering enableTabReordering}.
         * 
         * Specifies whether tab reordering is enabled.
         * 
         * Default value is `false`.
        */
        public getEnableTabReordering(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Specifies the height of the tab bar and content area.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.commons.TabStrip.
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
            * Gets current value of property {@link #getSelectedIndex selectedIndex}.
         * 
         * Specifies the index of the currently selected tab.
         * 
         * Default value is `0`.
        */
        public getSelectedIndex(): number;

        /**
            * Gets content of aggregation {@link #getTabs tabs}.
         * 
         * The tabs contained in the TabStrip.
        */
        public getTabs(): {};

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Specifies the width of the bar and content area.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.commons.Tab` in the aggregation {@link #getTabs tabs}. and returns its index if found or -1 otherwise.
        */
        public indexOfTab(oTab: Tab): number;

        /**
            * Inserts a tab into the aggregation {@link #getTabs tabs}.
        */
        public insertTab(oTab: Tab, iIndex: number): this;

        /**
            * Called before the rendering of the control is started.
        */
        protected onBeforeRendering(): any;

        /**
            * Function is called before the rendering of the control is started.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should override this hook to implement any necessary actions before the rendering.
        */
        protected onBeforeRendering(): any;

        /**
            * Removes all the controls from the aggregation {@link #getTabs tabs}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllTabs(): {};

        /**
            * Removes a tab from the aggregation {@link #getTabs tabs}.
        */
        public removeTab(vTab: number | string | Tab): Tab;

        /**
            * Sets whether tab reordering is enabled.
        */
        public setEnableTabReordering(bValue: boolean): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Specifies the height of the tab bar and content area.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getSelectedIndex selectedIndex}.
         * 
         * Specifies the index of the currently selected tab.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setSelectedIndex(iSelectedIndex: number): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Specifies the width of the bar and content area.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}