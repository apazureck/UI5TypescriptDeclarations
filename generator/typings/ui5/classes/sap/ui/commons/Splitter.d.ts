declare module 'sap/ui/commons/Splitter' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISplitterSettings extends IControlSettings {
        splitterOrientation?: sap.ui.core.Orientation;
        splitterPosition?: sap.ui.core.Percentage;
        minSizeFirstPane?: sap.ui.core.Percentage;
        minSizeSecondPane?: sap.ui.core.Percentage;
        width?: sap.ui.commons.SplitterSize;
        height?: sap.ui.commons.SplitterSize;
        showScrollBars?: boolean;
        splitterBarVisible?: boolean;
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
            * Adds some firstPaneContent to the aggregation {@link #getFirstPaneContent firstPaneContent}.
        */
        public addFirstPaneContent(oFirstPaneContent: Control): this;

        /**
            * Adds some secondPaneContent to the aggregation {@link #getSecondPaneContent secondPaneContent}.
        */
        public addSecondPaneContent(oSecondPaneContent: Control): this;

        /**
            * Destroys all the firstPaneContent in the aggregation {@link #getFirstPaneContent firstPaneContent}.
        */
        public destroyFirstPaneContent(): this;

        /**
            * Destroys all the secondPaneContent in the aggregation {@link #getSecondPaneContent secondPaneContent}.
        */
        public destroySecondPaneContent(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.Splitter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getFirstPaneContent firstPaneContent}.
         * 
         * Controls inside the first pane. These are the left ones in case of defining a vertical splitter, and the top ones in case of using the horizontal splitter.
        */
        public getFirstPaneContent(): {};

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The height of the split area in px or in %
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.commons.SplitterSize;

        /**
            * Returns a metadata object for class sap.ui.commons.Splitter.
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
            * Gets current value of property {@link #getMinSizeFirstPane minSizeFirstPane}.
         * 
         * The minimum size (width for vertical splitter or height for horizontal splitter) of the first Pane
         * 
         * Default value is `0%`.
        */
        public getMinSizeFirstPane(): sap.ui.core.Percentage;

        /**
            * Gets current value of property {@link #getMinSizeSecondPane minSizeSecondPane}.
         * 
         * The minimum size (width for vertical splitter or height for horizontal splitter) of the second Pane
         * 
         * Default value is `0%`.
        */
        public getMinSizeSecondPane(): sap.ui.core.Percentage;

        /**
            * Gets content of aggregation {@link #getSecondPaneContent secondPaneContent}.
         * 
         * Controls inside the second pane. These are the right ones in case of defining a vertical splitter, and the bottom ones in case of using the horizontal splitter.
        */
        public getSecondPaneContent(): {};

        /**
            * Gets current value of property {@link #getShowScrollBars showScrollBars}.
         * 
         * Specifies if the browser should display scroll bars or simply cut the content of a splitter pane when the content does not fit into its pane.
         * 
         * Default value is `true`.
        */
        public getShowScrollBars(): boolean;

        /**
            * Gets current value of property {@link #getSplitterBarVisible splitterBarVisible}.
         * 
         * set the splitter bar to be visible or not.
         * 
         * Default value is `true`.
        */
        public getSplitterBarVisible(): boolean;

        /**
            * Gets current value of property {@link #getSplitterOrientation splitterOrientation}.
         * 
         * The splitter can have horizontal or vertical orientation.
         * 
         * Default value is `Vertical`.
        */
        public getSplitterOrientation(): sap.ui.core.Orientation;

        /**
            * Gets current value of property {@link #getSplitterPosition splitterPosition}.
         * 
         * Position of splitter bar in percentage. The default value means that the splitter is positioned in the middle of the area that is available for the splitter.
         * 
         * Default value is `50%`.
        */
        public getSplitterPosition(): sap.ui.core.Percentage;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width of the split area in px or in %
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.commons.SplitterSize;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getFirstPaneContent firstPaneContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfFirstPaneContent(oFirstPaneContent: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getSecondPaneContent secondPaneContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfSecondPaneContent(oSecondPaneContent: Control): number;

        /**
            * Inserts a firstPaneContent into the aggregation {@link #getFirstPaneContent firstPaneContent}.
        */
        public insertFirstPaneContent(oFirstPaneContent: Control, iIndex: number): this;

        /**
            * Inserts a secondPaneContent into the aggregation {@link #getSecondPaneContent secondPaneContent}.
        */
        public insertSecondPaneContent(oSecondPaneContent: Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getFirstPaneContent firstPaneContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllFirstPaneContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getSecondPaneContent secondPaneContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSecondPaneContent(): {};

        /**
            * Removes a firstPaneContent from the aggregation {@link #getFirstPaneContent firstPaneContent}.
        */
        public removeFirstPaneContent(vFirstPaneContent: number | string | Control): Control;

        /**
            * Removes a secondPaneContent from the aggregation {@link #getSecondPaneContent secondPaneContent}.
        */
        public removeSecondPaneContent(vSecondPaneContent: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The height of the split area in px or in %
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.commons.SplitterSize): this;

        /**
            * Sets a new value for property {@link #getMinSizeFirstPane minSizeFirstPane}.
         * 
         * The minimum size (width for vertical splitter or height for horizontal splitter) of the first Pane
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0%`.
        */
        public setMinSizeFirstPane(sMinSizeFirstPane: sap.ui.core.Percentage): this;

        /**
            * Sets a new value for property {@link #getMinSizeSecondPane minSizeSecondPane}.
         * 
         * The minimum size (width for vertical splitter or height for horizontal splitter) of the second Pane
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0%`.
        */
        public setMinSizeSecondPane(sMinSizeSecondPane: sap.ui.core.Percentage): this;

        /**
            * Sets a new value for property {@link #getShowScrollBars showScrollBars}.
         * 
         * Specifies if the browser should display scroll bars or simply cut the content of a splitter pane when the content does not fit into its pane.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowScrollBars(bShowScrollBars: boolean): this;

        /**
            * Sets a new value for property {@link #getSplitterBarVisible splitterBarVisible}.
         * 
         * set the splitter bar to be visible or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setSplitterBarVisible(bSplitterBarVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getSplitterOrientation splitterOrientation}.
         * 
         * The splitter can have horizontal or vertical orientation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Vertical`.
        */
        public setSplitterOrientation(sSplitterOrientation: sap.ui.core.Orientation): this;

        /**
            * Sets a new value for property {@link #getSplitterPosition splitterPosition}.
         * 
         * Position of splitter bar in percentage. The default value means that the splitter is positioned in the middle of the area that is available for the splitter.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `50%`.
        */
        public setSplitterPosition(sSplitterPosition: sap.ui.core.Percentage): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The width of the split area in px or in %
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.commons.SplitterSize): this;

    }
}