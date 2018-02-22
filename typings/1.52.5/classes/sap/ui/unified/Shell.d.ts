declare module 'sap/ui/unified/Shell' {
    import { Control } from 'sap/ui/core/Control';
    import { ShellHeadItem } from 'sap/ui/unified/ShellHeadItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ShellHeadUserItem } from 'sap/ui/unified/ShellHeadUserItem';
    import { ShellLayout, IShellLayoutSettings } from 'sap/ui/unified/ShellLayout';

    export interface IShellSettings extends IShellLayoutSettings {
        icon?: sap.ui.core.URI;
        showCurtain?: boolean;
        showCurtainPane?: boolean;
        searchVisible?: boolean;
    }

    /**
    
    */
    export class Shell extends ShellLayout {

        /**
            * Constructor for a new Shell.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IShellSettings);


        /**
            * Adds some curtainContent to the aggregation {@link #getCurtainContent curtainContent}.
        */
        public addCurtainContent(oCurtainContent: Control): this;

        /**
            * Adds some curtainPaneContent to the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
        */
        public addCurtainPaneContent(oCurtainPaneContent: Control): this;

        /**
            * Adds some headEndItem to the aggregation {@link #getHeadEndItems headEndItems}.
        */
        public addHeadEndItem(oHeadEndItem: ShellHeadItem): this;

        /**
            * Adds some headItem to the aggregation {@link #getHeadItems headItems}.
        */
        public addHeadItem(oHeadItem: ShellHeadItem): this;

        /**
            * Destroys all the curtainContent in the aggregation {@link #getCurtainContent curtainContent}.
        */
        public destroyCurtainContent(): this;

        /**
            * Destroys all the curtainPaneContent in the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
        */
        public destroyCurtainPaneContent(): this;

        /**
            * Destroys all the headEndItems in the aggregation {@link #getHeadEndItems headEndItems}.
        */
        public destroyHeadEndItems(): this;

        /**
            * Destroys the header in the aggregation named `header`, but only if a custom header is set. The default header can not be destroyed.
        */
        public destroyHeader(): this;

        /**
            * Destroys all the headItems in the aggregation {@link #getHeadItems headItems}.
        */
        public destroyHeadItems(): this;

        /**
            * Destroys the search in the aggregation {@link #getSearch search}.
        */
        public destroySearch(): this;

        /**
            * Destroys the user in the aggregation {@link #getUser user}.
        */
        public destroyUser(): this;

        /**
            * Creates a new subclass of class sap.ui.unified.Shell with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.ShellLayout.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getCurtainContent curtainContent}.
         * 
         * The content to appear in the curtain area.
        */
        public getCurtainContent(): {};

        /**
            * Gets content of aggregation {@link #getCurtainPaneContent curtainPaneContent}.
         * 
         * The content to appear in the pane area of the curtain.
        */
        public getCurtainPaneContent(): {};

        /**
            * Gets content of aggregation {@link #getHeadEndItems headEndItems}.
         * 
         * The buttons shown in the end (right in left-to-right case) of the Shell header. Currently max. 3 visible buttons are supported (when user is set only 1). If a custom header is set this aggregation has no effect.
        */
        public getHeadEndItems(): {};

        /**
            * Gets content of aggregation {@link #getHeadItems headItems}.
         * 
         * The buttons shown in the begin (left in left-to-right case) of the Shell header. Currently max. 3 visible buttons are supported. If a custom header is set this aggregation has no effect.
        */
        public getHeadItems(): {};

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * The application icon. If a custom header is set this property has no effect.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.unified.Shell.
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
            * Gets content of aggregation {@link #getSearch search}.
         * 
         * Experimental (This aggregation might change in future!): The search control which should be displayed in the shell header. If a custom header is set this aggregation has no effect.
        */
        public getSearch(): Control;

        /**
            * Gets current value of property {@link #getSearchVisible searchVisible}.
         * 
         * If set to false, the search area (aggregation 'search') is hidden. If a custom header is set this property has no effect.
         * 
         * Default value is `true`.
        */
        public getSearchVisible(): boolean;

        /**
            * Gets current value of property {@link #getShowCurtain showCurtain}.
         * 
         * Shows / Hides the curtain.
        */
        public getShowCurtain(): boolean;

        /**
            * Gets current value of property {@link #getShowCurtainPane showCurtainPane}.
         * 
         * Shows / Hides the side pane on the curtain.
        */
        public getShowCurtainPane(): boolean;

        /**
            * Gets content of aggregation {@link #getUser user}.
         * 
         * The user item which is rendered in the shell header beside the items. If a custom header is set this aggregation has no effect.
        */
        public getUser(): ShellHeadUserItem;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getCurtainContent curtainContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfCurtainContent(oCurtainContent: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getCurtainPaneContent curtainPaneContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfCurtainPaneContent(oCurtainPaneContent: Control): number;

        /**
            * Checks for the provided `sap.ui.unified.ShellHeadItem` in the aggregation {@link #getHeadEndItems headEndItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfHeadEndItem(oHeadEndItem: ShellHeadItem): number;

        /**
            * Checks for the provided `sap.ui.unified.ShellHeadItem` in the aggregation {@link #getHeadItems headItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfHeadItem(oHeadItem: ShellHeadItem): number;

        /**
            * Inserts a curtainContent into the aggregation {@link #getCurtainContent curtainContent}.
        */
        public insertCurtainContent(oCurtainContent: Control, iIndex: number): this;

        /**
            * Inserts a curtainPaneContent into the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
        */
        public insertCurtainPaneContent(oCurtainPaneContent: Control, iIndex: number): this;

        /**
            * Inserts a headEndItem into the aggregation {@link #getHeadEndItems headEndItems}.
        */
        public insertHeadEndItem(oHeadEndItem: ShellHeadItem, iIndex: number): this;

        /**
            * Inserts a headItem into the aggregation {@link #getHeadItems headItems}.
        */
        public insertHeadItem(oHeadItem: ShellHeadItem, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getCurtainContent curtainContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllCurtainContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllCurtainPaneContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getHeadEndItems headEndItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllHeadEndItems(): {};

        /**
            * Removes all the controls from the aggregation {@link #getHeadItems headItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllHeadItems(): {};

        /**
            * Removes a curtainContent from the aggregation {@link #getCurtainContent curtainContent}.
        */
        public removeCurtainContent(vCurtainContent: number | string | Control): Control;

        /**
            * Removes a curtainPaneContent from the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
        */
        public removeCurtainPaneContent(vCurtainPaneContent: number | string | Control): Control;

        /**
            * Removes a headEndItem from the aggregation {@link #getHeadEndItems headEndItems}.
        */
        public removeHeadEndItem(vHeadEndItem: number | string | ShellHeadItem): ShellHeadItem;

        /**
            * Removes a headItem from the aggregation {@link #getHeadItems headItems}.
        */
        public removeHeadItem(vHeadItem: number | string | ShellHeadItem): ShellHeadItem;

        /**
            * Setter for the aggregated `header`.
        */
        public setHeader(oHeader: Control): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * The application icon. If a custom header is set this property has no effect.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets the aggregated {@link #getSearch search}.
        */
        public setSearch(oSearch: Control): this;

        /**
            * Sets a new value for property {@link #getSearchVisible searchVisible}.
         * 
         * If set to false, the search area (aggregation 'search') is hidden. If a custom header is set this property has no effect.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setSearchVisible(bSearchVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getShowCurtain showCurtain}.
         * 
         * Shows / Hides the curtain.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setShowCurtain(bShowCurtain: boolean): this;

        /**
            * Sets a new value for property {@link #getShowCurtainPane showCurtainPane}.
         * 
         * Shows / Hides the side pane on the curtain.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setShowCurtainPane(bShowCurtainPane: boolean): this;

        /**
            * Sets the aggregated {@link #getUser user}.
        */
        public setUser(oUser: ShellHeadUserItem): this;

    }
}