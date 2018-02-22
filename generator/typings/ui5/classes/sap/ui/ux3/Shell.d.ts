declare module 'sap/ui/ux3/Shell' {
    import { Event } from 'sap/ui/base/Event';
    import { Item } from 'sap/ui/core/Item';
    import { NavigationItem } from 'sap/ui/ux3/NavigationItem';
    import { ToolPopup } from 'sap/ui/ux3/ToolPopup';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { NotificationBar } from 'sap/ui/ux3/NotificationBar';
    import { SearchField } from 'sap/ui/commons/SearchField';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IShellSettings extends IControlSettings {
        appTitle?: string;
        appIcon?: sap.ui.core.URI;
        appIconTooltip?: string;
        showLogoutButton?: boolean;
        logoutButtonTooltip?: string;
        showSearchTool?: boolean;
        showInspectorTool?: boolean;
        showFeederTool?: boolean;
        showTools?: boolean;
        showPane?: boolean;
        headerType?: sap.ui.ux3.ShellHeaderType;
        designType?: sap.ui.ux3.ShellDesignType;
        paneWidth?: number;
        applyContentPadding?: boolean;
        fullHeightContent?: boolean;
        allowOverlayHeaderAccess?: boolean;
    }

    /**
    
    */
    export class Shell extends Control {

        /**
            * Constructor for a new Shell.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IShellSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Adds some headerItem to the aggregation {@link #getHeaderItems headerItems}.
        */
        public addHeaderItem(oHeaderItem: Control): this;

        /**
            * Adds some paneBarItem to the aggregation {@link #getPaneBarItems paneBarItems}.
        */
        public addPaneBarItem(oPaneBarItem: Item): this;

        /**
            * Adds some paneContent to the aggregation {@link #getPaneContent paneContent}.
        */
        public addPaneContent(oPaneContent: Control): this;

        /**
            * Adds some toolPopup to the aggregation {@link #getToolPopups toolPopups}.
        */
        public addToolPopup(oToolPopup: ToolPopup): this;

        /**
            * Adds some worksetItem to the aggregation {@link #getWorksetItems worksetItems}.
        */
        public addWorksetItem(oWorksetItem: NavigationItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         * 
         * Fired when a new feed entry is submitted.
        */
        attachFeedSubmit<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         * 
         * Fired when a new feed entry is submitted.
        */
        attachFeedSubmit<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:logout logout} event of this `sap.ui.ux3.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         * 
         * Fired when the user clicks the "Log-off" button
        */
        attachLogout<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:logout logout} event of this `sap.ui.ux3.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         * 
         * Fired when the user clicks the "Log-off" button
        */
        attachLogout<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:paneBarItemSelected paneBarItemSelected} event of this `sap.ui.ux3.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         * 
         * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled with UI elements.
        */
        attachPaneBarItemSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the selected PaneBarItem. */
            id: string, /* * The selected Item */
            item: Item, /* * The key of the selected Item (or null if there is no key) */
            key: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:paneBarItemSelected paneBarItemSelected} event of this `sap.ui.ux3.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         * 
         * An item in the right-hand-side pane bar has been selected, the pane is now visible and can be filled with UI elements.
        */
        attachPaneBarItemSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the selected PaneBarItem. */
            id: string, /* * The selected Item */
            item: Item, /* * The key of the selected Item (or null if there is no key) */
            key: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:paneClosed paneClosed} event of this `sap.ui.ux3.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         * 
         * Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling setShowPane(false), if and only if the pane was opened before.
        */
        attachPaneClosed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The id of the PaneBarItem to which the closed pane belonged. */
            id: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:paneClosed paneClosed} event of this `sap.ui.ux3.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         * 
         * Fired after a side pane of the shell is closed. It is also fired, when an open pane is closed by calling setShowPane(false), if and only if the pane was opened before.
        */
        attachPaneClosed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The id of the PaneBarItem to which the closed pane belonged. */
            id: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         * 
         * Fired when search has been triggered.
        */
        attachSearch<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         * 
         * Fired when search has been triggered.
        */
        attachSearch<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:worksetItemSelected worksetItemSelected} event of this `sap.ui.ux3.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         * 
         * Fired when a workset item was selected by the user. The application may populate the sub-items of the given workset item in the event handler, but this must happen synchronously. If this is done, the application is responsible for displaying the correct content for the selected one of the newly created sub-items. The Shell will currently always mark the first sub-item as selected.
        */
        attachWorksetItemSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The id of the workset item that has been newly selected by the user. If a top-level item has been clicked which has sub-items, the ID of the currently active sub-item (/leaf) is given. */
            id: string, /* * The selected NavigationItem */
            item: NavigationItem, /* * The key of the selected NavigationItem (or null if there is no key) */
            key: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:worksetItemSelected worksetItemSelected} event of this `sap.ui.ux3.Shell`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Shell` itself.
         * 
         * Fired when a workset item was selected by the user. The application may populate the sub-items of the given workset item in the event handler, but this must happen synchronously. If this is done, the application is responsible for displaying the correct content for the selected one of the newly created sub-items. The Shell will currently always mark the first sub-item as selected.
        */
        attachWorksetItemSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The id of the workset item that has been newly selected by the user. If a top-level item has been clicked which has sub-items, the ID of the currently active sub-item (/leaf) is given. */
            id: string, /* * The selected NavigationItem */
            item: NavigationItem, /* * The key of the selected NavigationItem (or null if there is no key) */
            key: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Closes the side Pane (if open).
         * 
         * Returns 'this' to allow method chaining.
        */
        public closePane(): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys all the headerItems in the aggregation {@link #getHeaderItems headerItems}.
        */
        public destroyHeaderItems(): this;

        /**
            * Destroys the notificationBar in the aggregation {@link #getNotificationBar notificationBar}.
        */
        public destroyNotificationBar(): this;

        /**
            * Destroys all the paneBarItems in the aggregation {@link #getPaneBarItems paneBarItems}.
        */
        public destroyPaneBarItems(): this;

        /**
            * Destroys all the paneContent in the aggregation {@link #getPaneContent paneContent}.
        */
        public destroyPaneContent(): this;

        /**
            * Destroys all the toolPopups in the aggregation {@link #getToolPopups toolPopups}.
        */
        public destroyToolPopups(): this;

        /**
            * Destroys all the worksetItems in the aggregation {@link #getWorksetItems worksetItems}.
        */
        public destroyWorksetItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.Shell`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFeedSubmit(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:logout logout} event of this `sap.ui.ux3.Shell`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLogout(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:paneBarItemSelected paneBarItemSelected} event of this `sap.ui.ux3.Shell`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPaneBarItemSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:paneClosed paneClosed} event of this `sap.ui.ux3.Shell`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPaneClosed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.ux3.Shell`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSearch(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:worksetItemSelected worksetItemSelected} event of this `sap.ui.ux3.Shell`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachWorksetItemSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.Shell with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
        */
        protected fireFeedSubmit(mParameters?: {}): this;

        /**
            * Fires event {@link #event:logout logout} to attached listeners.
        */
        protected fireLogout(mParameters?: {}): this;

        /**
            * Fires event {@link #event:paneBarItemSelected paneBarItemSelected} to attached listeners.
        */
        protected firePaneBarItemSelected(mParameters?: { id?: string, item?: Item, key?: string, }): this;

        /**
            * Fires event {@link #event:paneClosed paneClosed} to attached listeners.
        */
        protected firePaneClosed(mParameters?: { id?: string, }): this;

        /**
            * Fires event {@link #event:search search} to attached listeners.
        */
        protected fireSearch(mParameters?: {}): this;

        /**
            * Fires event {@link #event:worksetItemSelected worksetItemSelected} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireWorksetItemSelected(mParameters?: { id?: string, item?: NavigationItem, key?: string, }): boolean;

        /**
            * Gets current value of property {@link #getAllowOverlayHeaderAccess allowOverlayHeaderAccess}.
         * 
         * Whether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer or ThingInspector is open.
         * 
         * Default value is `false`.
        */
        public getAllowOverlayHeaderAccess(): boolean;

        /**
            * Gets current value of property {@link #getAppIcon appIcon}.
         * 
         * The URL of the image to appear in the left part of the header, usually a branding image containing a logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first. If the appIcon is set, for accessibility reasons the appIconTooltip must also be set.
        */
        public getAppIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getAppIconTooltip appIconTooltip}.
         * 
         * The tooltip of the application icon in the header
        */
        public getAppIconTooltip(): string;

        /**
            * Gets current value of property {@link #getApplyContentPadding applyContentPadding}.
         * 
         * Whether the Shell content area should have a theme-dependent padding or not.
         * 
         * Default value is `true`.
        */
        public getApplyContentPadding(): boolean;

        /**
            * Gets current value of property {@link #getAppTitle appTitle}.
         * 
         * The application title to appear in the left part of the header, usually a company and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
        */
        public getAppTitle(): string;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content to appear in the main canvas. Each modification of this aggregation leads to a re-rendering of the content area - but not to a re-rendering of the complete Shell.
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getDesignType designType}.
         * 
         * Defines which design type is to be used.
         * 
         * Default value is `Standard`.
        */
        public getDesignType(): sap.ui.ux3.ShellDesignType;

        /**
            * Gets current value of property {@link #getFullHeightContent fullHeightContent}.
         * 
         * If set to true, the content area has a defined height. This means that any content put inside can use "100%" height in CSS and will then consume all available space. However, if content is larger, scrollbars will appear at the content area of the Shell and not on window level.
         * 
         * Default value is `false`.
        */
        public getFullHeightContent(): boolean;

        /**
            * Gets content of aggregation {@link #getHeaderItems headerItems}.
         * 
         * Controls to appear in the header next to the logout button. It is recommended to only use controls of type Button, MenuButton and TextView. The respective UI guidelines need to be enforced on a higher level.
        */
        public getHeaderItems(): {};

        /**
            * Gets current value of property {@link #getHeaderType headerType}.
         * 
         * Defines which header type to be used. Depending on the header type some other functionality might be obsolete.
         * 
         * Default value is `Standard`.
        */
        public getHeaderType(): sap.ui.ux3.ShellHeaderType;

        /**
            * Gets current value of property {@link #getLogoutButtonTooltip logoutButtonTooltip}.
         * 
         * The tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in the current language will be displayed.
        */
        public getLogoutButtonTooltip(): string;

        /**
            * Returns a metadata object for class sap.ui.ux3.Shell.
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
            * Gets content of aggregation {@link #getNotificationBar notificationBar}.
         * 
         * The NotificationBar which should be integrated into the Shell.
        */
        public getNotificationBar(): NotificationBar;

        /**
            * Gets content of aggregation {@link #getPaneBarItems paneBarItems}.
         * 
         * The items to appear in the PaneBar.
        */
        public getPaneBarItems(): {};

        /**
            * Gets content of aggregation {@link #getPaneContent paneContent}.
         * 
         * The content to appear in the pane area.
        */
        public getPaneContent(): {};

        /**
            * Gets current value of property {@link #getPaneWidth paneWidth}.
         * 
         * The width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell reserves the right to define a minimum width (currently 50px).
         * 
         * Default value is `250`.
        */
        public getPaneWidth(): number;

        /**
            * Returns the SearchField control which is used in the Search Tool.
        */
        public getSearchField(): SearchField;

        /**
            * ID of the element which is the current target of the association {@link #getSelectedWorksetItem selectedWorksetItem}, or `null`.
        */
        public getSelectedWorksetItem(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getShowFeederTool showFeederTool}.
         * 
         * Whether the "Feeder" tool should be displayed or not.
         * 
         * Default value is `true`.
        */
        public getShowFeederTool(): boolean;

        /**
            * Gets current value of property {@link #getShowInspectorTool showInspectorTool}.
         * 
         * Whether the "Inspector" tool should be displayed or not.
         * 
         * Default value is `false`.
        */
        public getShowInspectorTool(): boolean;

        /**
            * Gets current value of property {@link #getShowLogoutButton showLogoutButton}.
         * 
         * Whether the Logoff button in the header should be displayed or not.
         * 
         * Default value is `true`.
        */
        public getShowLogoutButton(): boolean;

        /**
            * Gets current value of property {@link #getShowPane showPane}.
         * 
         * Whether the pane bar should be displayed at all or not.
         * 
         * Default value is `true`.
        */
        public getShowPane(): boolean;

        /**
            * Gets current value of property {@link #getShowSearchTool showSearchTool}.
         * 
         * Whether the "Global Search" tool should be displayed or not.
         * 
         * Default value is `true`.
        */
        public getShowSearchTool(): boolean;

        /**
            * Gets current value of property {@link #getShowTools showTools}.
         * 
         * Whether the tool area should be displayed at all or not.
         * 
         * Default value is `true`.
        */
        public getShowTools(): boolean;

        /**
            * Gets content of aggregation {@link #getToolPopups toolPopups}.
         * 
         * The items which appear in the ToolPalette and are opened as popup when clicked.
        */
        public getToolPopups(): {};

        /**
            * Gets content of aggregation {@link #getWorksetItems worksetItems}.
         * 
         * The workset items.
        */
        public getWorksetItems(): {};

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeaderItems headerItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfHeaderItem(oHeaderItem: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getPaneBarItems paneBarItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfPaneBarItem(oPaneBarItem: Item): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getPaneContent paneContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfPaneContent(oPaneContent: Control): number;

        /**
            * Checks for the provided `sap.ui.ux3.ToolPopup` in the aggregation {@link #getToolPopups toolPopups}. and returns its index if found or -1 otherwise.
        */
        public indexOfToolPopup(oToolPopup: ToolPopup): number;

        /**
            * Checks for the provided `sap.ui.ux3.NavigationItem` in the aggregation {@link #getWorksetItems worksetItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfWorksetItem(oWorksetItem: NavigationItem): number;

        /**
            * Experimental method! Do not use!
         * 
         * Makes Shell personalization available and injects the given personalization settings. This should be called before the user can do any adaptations per drag&drop or using the personalization dialog. Otherwise it may override the user's new settings.
        */
        public initializePersonalization(oSettings: {}): any;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Inserts a headerItem into the aggregation {@link #getHeaderItems headerItems}.
        */
        public insertHeaderItem(oHeaderItem: Control, iIndex: number): this;

        /**
            * Inserts a paneBarItem into the aggregation {@link #getPaneBarItems paneBarItems}.
        */
        public insertPaneBarItem(oPaneBarItem: Item, iIndex: number): this;

        /**
            * Inserts a paneContent into the aggregation {@link #getPaneContent paneContent}.
        */
        public insertPaneContent(oPaneContent: Control, iIndex: number): this;

        /**
            * Inserts a toolPopup into the aggregation {@link #getToolPopups toolPopups}.
        */
        public insertToolPopup(oToolPopup: ToolPopup, iIndex: number): this;

        /**
            * Inserts a worksetItem into the aggregation {@link #getWorksetItems worksetItems}.
        */
        public insertWorksetItem(oWorksetItem: NavigationItem, iIndex: number): this;

        /**
            * Returns 'true' if the side Pane is currently open.
        */
        public isPaneOpen(): boolean;

        /**
            * Opens the side Pane.
         * 
         * A valid ID of a paneBarItem must be given, so this item can be marked as selected. A "paneBarItemSelected" event is then fired as if the opening was triggered by the user by a click on the respective PaneBarItem. This method can be called (with different IDs) even when the Pane is already open. It has then the same effect as if the user switches between PaneBarItems.
         * 
         * Returns 'this' to allow method chaining.
        */
        public openPane(sPaneBarItemId: string): this;

        /**
            * Experimental method! Do not use!
        */
        public openPersonalizationDialog(): any;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getHeaderItems headerItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllHeaderItems(): {};

        /**
            * Removes all the controls from the aggregation {@link #getPaneBarItems paneBarItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllPaneBarItems(): {};

        /**
            * Removes all the controls from the aggregation {@link #getPaneContent paneContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllPaneContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getToolPopups toolPopups}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllToolPopups(): {};

        /**
            * Removes all the controls from the aggregation {@link #getWorksetItems worksetItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllWorksetItems(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Removes a headerItem from the aggregation {@link #getHeaderItems headerItems}.
        */
        public removeHeaderItem(vHeaderItem: number | string | Control): Control;

        /**
            * Removes a paneBarItem from the aggregation {@link #getPaneBarItems paneBarItems}.
        */
        public removePaneBarItem(vPaneBarItem: number | string | Item): Item;

        /**
            * Removes a paneContent from the aggregation {@link #getPaneContent paneContent}.
        */
        public removePaneContent(vPaneContent: number | string | Control): Control;

        /**
            * Removes a toolPopup from the aggregation {@link #getToolPopups toolPopups}.
        */
        public removeToolPopup(vToolPopup: number | string | ToolPopup): ToolPopup;

        /**
            * Removes a worksetItem from the aggregation {@link #getWorksetItems worksetItems}.
        */
        public removeWorksetItem(vWorksetItem: number | string | NavigationItem): NavigationItem;

        /**
            * Sets a new value for property {@link #getAllowOverlayHeaderAccess allowOverlayHeaderAccess}.
         * 
         * Whether the Shell header (Title Area + Header Items) can be accessed when an Overlay, OverlayContainer or ThingInspector is open.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAllowOverlayHeaderAccess(bAllowOverlayHeaderAccess: boolean): this;

        /**
            * Sets a new value for property {@link #getAppIcon appIcon}.
         * 
         * The URL of the image to appear in the left part of the header, usually a branding image containing a logo and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first. If the appIcon is set, for accessibility reasons the appIconTooltip must also be set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAppIcon(sAppIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getAppIconTooltip appIconTooltip}.
         * 
         * The tooltip of the application icon in the header
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAppIconTooltip(sAppIconTooltip: string): this;

        /**
            * Sets a new value for property {@link #getApplyContentPadding applyContentPadding}.
         * 
         * Whether the Shell content area should have a theme-dependent padding or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setApplyContentPadding(bApplyContentPadding: boolean): this;

        /**
            * Sets a new value for property {@link #getAppTitle appTitle}.
         * 
         * The application title to appear in the left part of the header, usually a company and/or product name. appIcon and appTitle are both optional and can both be set; in this case the icon appears first.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAppTitle(sAppTitle: string): this;

        /**
            * Replaces the existing Shell content with the given Control(-Tree). Only leads to a re-rendering of the content area (not the complete Shell). This method may be more convenient than a series of calls to "removeContent" and "addContent", which each lead to a re-rendering of the content area (but again not of the complete Shell).
         * 
         * By default the old content is not destroyed and is returned by this method in an array for further usage. To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the "destroyOldContent" flag or by destroying it manually later on. If "destroyOldContent" is set, an empty array is returned.
        */
        public setContent(oContent: Control, bDestroyOldContent: boolean): {};

        /**
            * Sets a new value for property {@link #getDesignType designType}.
         * 
         * Defines which design type is to be used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setDesignType(sDesignType: sap.ui.ux3.ShellDesignType): this;

        /**
            * Sets a new value for property {@link #getFullHeightContent fullHeightContent}.
         * 
         * If set to true, the content area has a defined height. This means that any content put inside can use "100%" height in CSS and will then consume all available space. However, if content is larger, scrollbars will appear at the content area of the Shell and not on window level.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFullHeightContent(bFullHeightContent: boolean): this;

        /**
            * Sets a new value for property {@link #getHeaderType headerType}.
         * 
         * Defines which header type to be used. Depending on the header type some other functionality might be obsolete.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setHeaderType(sHeaderType: sap.ui.ux3.ShellHeaderType): this;

        /**
            * Sets a new value for property {@link #getLogoutButtonTooltip logoutButtonTooltip}.
         * 
         * The tooltip to be displayed for the Logout Button of the Shell. If not set, a text meaning "Logout" in the current language will be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLogoutButtonTooltip(sLogoutButtonTooltip: string): this;

        /**
            * Moves the complete Shell away from the right window border by the given number of pixels (left border in RTL case).
         * 
         * So there is space for a sidebar or so outside the Shell. The CSS class 'sapUiUx3ShellOuterSideBar' provides the basic position capabilities for the sidebar DOM element.
         * 
         * This feature is not public. The usage is only granted to special groups on request.
        */
        protected setOffsetRight(px: number, complete?: (() => any), outerId?: string): any;

        /**
            * Replaces the existing side pane content with the given Control(-Tree). This method is optimized to only re-render the pane content (and not the shell) which is faster and smoother than any other way of changing the "paneContent" aggregation.
         * 
         * By default, the old pane content is not destroyed and is returned by this method in an array for further usage. To avoid memory leaks, the old content should be destroyed (if not needed later), by setting the "destroyOldContent" flag or by destroying it manually later on. If "destroyOldContent" is set, an empty array is returned.
        */
        public setPaneContent(oContent: Control, bDestroyOldContent: boolean): {};

        /**
            * Sets a new value for property {@link #getPaneWidth paneWidth}.
         * 
         * The width of the right-hand side pane in pixels. The value must be a non-negative integer. The Shell reserves the right to define a minimum width (currently 50px).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `250`.
        */
        public setPaneWidth(iPaneWidth: number): this;

        /**
            * Sets the associated {@link #getSelectedWorksetItem selectedWorksetItem}.
        */
        public setSelectedWorksetItem(oSelectedWorksetItem: sap.ui.core.ID | NavigationItem): this;

        /**
            * Sets a new value for property {@link #getShowFeederTool showFeederTool}.
         * 
         * Whether the "Feeder" tool should be displayed or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowFeederTool(bShowFeederTool: boolean): this;

        /**
            * Sets a new value for property {@link #getShowInspectorTool showInspectorTool}.
         * 
         * Whether the "Inspector" tool should be displayed or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowInspectorTool(bShowInspectorTool: boolean): this;

        /**
            * Sets a new value for property {@link #getShowLogoutButton showLogoutButton}.
         * 
         * Whether the Logoff button in the header should be displayed or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowLogoutButton(bShowLogoutButton: boolean): this;

        /**
            * Sets a new value for property {@link #getShowPane showPane}.
         * 
         * Whether the pane bar should be displayed at all or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowPane(bShowPane: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSearchTool showSearchTool}.
         * 
         * Whether the "Global Search" tool should be displayed or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowSearchTool(bShowSearchTool: boolean): this;

        /**
            * Sets a new value for property {@link #getShowTools showTools}.
         * 
         * Whether the tool area should be displayed at all or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowTools(bShowTools: boolean): this;

    }
}