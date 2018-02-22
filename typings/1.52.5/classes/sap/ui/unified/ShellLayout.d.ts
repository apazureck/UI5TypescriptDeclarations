declare module 'sap/ui/unified/ShellLayout' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IShellLayoutSettings extends IControlSettings {
        showPane?: boolean;
        headerHiding?: boolean;
        headerVisible?: boolean;
    }

    /**
    
    */
    export class ShellLayout extends Control {

        /**
            * Constructor for a new ShellLayout.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IShellLayoutSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Adds some paneContent to the aggregation {@link #getPaneContent paneContent}.
        */
        public addPaneContent(oPaneContent: Control): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys the header in the aggregation {@link #getHeader header}.
        */
        public destroyHeader(): this;

        /**
            * Destroys all the paneContent in the aggregation {@link #getPaneContent paneContent}.
        */
        public destroyPaneContent(): this;

        /**
            * Creates a new subclass of class sap.ui.unified.ShellLayout with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content to appear in the main canvas.
        */
        public getContent(): {};

        /**
            * Gets content of aggregation {@link #getHeader header}.
         * 
         * The control to appear in the header area.
        */
        public getHeader(): Control;

        /**
            * Gets current value of property {@link #getHeaderHiding headerHiding}.
         * 
         * Whether the header can be hidden (manually or automatically). This feature is only available when touch events are supported.
         * 
         * Default value is `false`.
        */
        public getHeaderHiding(): boolean;

        /**
            * Gets current value of property {@link #getHeaderVisible headerVisible}.
         * 
         * If set to false, no header (and no items, search, ...) is shown.
         * 
         * Default value is `true`.
        */
        public getHeaderVisible(): boolean;

        /**
            * Returns a metadata object for class sap.ui.unified.ShellLayout.
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
            * Gets content of aggregation {@link #getPaneContent paneContent}.
         * 
         * The content to appear in the pane area.
        */
        public getPaneContent(): {};

        /**
            * Gets current value of property {@link #getShowPane showPane}.
         * 
         * Shows / Hides the side pane.
         * 
         * Default value is `false`.
        */
        public getShowPane(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getPaneContent paneContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfPaneContent(oPaneContent: Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Inserts a paneContent into the aggregation {@link #getPaneContent paneContent}.
        */
        public insertPaneContent(oPaneContent: Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getPaneContent paneContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllPaneContent(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Removes a paneContent from the aggregation {@link #getPaneContent paneContent}.
        */
        public removePaneContent(vPaneContent: number | string | Control): Control;

        /**
            * Sets the aggregated {@link #getHeader header}.
        */
        public setHeader(oHeader: Control): this;

        /**
            * Sets a new value for property {@link #getHeaderHiding headerHiding}.
         * 
         * Whether the header can be hidden (manually or automatically). This feature is only available when touch events are supported.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setHeaderHiding(bHeaderHiding: boolean): this;

        /**
            * Sets a new value for property {@link #getHeaderVisible headerVisible}.
         * 
         * If set to false, no header (and no items, search, ...) is shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setHeaderVisible(bHeaderVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getShowPane showPane}.
         * 
         * Shows / Hides the side pane.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowPane(bShowPane: boolean): this;

    }
}