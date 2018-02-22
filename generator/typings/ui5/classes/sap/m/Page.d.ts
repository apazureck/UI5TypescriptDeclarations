declare module 'sap/m/Page' {
    import { Event } from 'sap/ui/base/Event';
    import { PageAccessibleLandmarkInfo } from 'sap/m/PageAccessibleLandmarkInfo';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element } from 'sap/ui/core/Element';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IPageSettings extends IControlSettings {
        title?: string;
        titleLevel?: sap.ui.core.TitleLevel;
        showNavButton?: boolean;
        showHeader?: boolean;
        showSubHeader?: boolean;
        navButtonText?: string;
        navButtonTooltip?: string;
        enableScrolling?: boolean;
        icon?: sap.ui.core.URI;
        backgroundDesign?: sap.m.PageBackgroundDesign;
        navButtonType?: sap.m.ButtonType;
        showFooter?: boolean;
        contentOnlyBusy?: boolean;
        floatingFooter?: boolean;
    }

    /**
    
    */
    export class Page extends Control {

        /**
            * Constructor for a new Page.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IPageSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}.
        */
        public addHeaderContent(oHeaderContent: Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navButtonPress navButtonPress} event of this `sap.m.Page`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Page` itself.
         * 
         * this event is fired when Nav Button is pressed
        */
        attachNavButtonPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navButtonPress navButtonPress} event of this `sap.m.Page`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Page` itself.
         * 
         * this event is fired when Nav Button is pressed
        */
        attachNavButtonPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navButtonTap navButtonTap} event of this `sap.m.Page`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Page` itself.
         * 
         * this event is fired when Nav Button is tapped
        */
        attachNavButtonTap<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navButtonTap navButtonTap} event of this `sap.m.Page`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Page` itself.
         * 
         * this event is fired when Nav Button is tapped
        */
        attachNavButtonTap<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys the customHeader in the aggregation {@link #getCustomHeader customHeader}.
        */
        public destroyCustomHeader(): this;

        /**
            * Destroys the footer in the aggregation {@link #getFooter footer}.
        */
        public destroyFooter(): this;

        /**
            * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
        */
        public destroyHeaderContent(): this;

        /**
            * Destroys the landmarkInfo in the aggregation {@link #getLandmarkInfo landmarkInfo}.
        */
        public destroyLandmarkInfo(): this;

        /**
            * Destroys the subHeader in the aggregation {@link #getSubHeader subHeader}.
        */
        public destroySubHeader(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:navButtonPress navButtonPress} event of this `sap.m.Page`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachNavButtonPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:navButtonTap navButtonTap} event of this `sap.m.Page`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachNavButtonTap(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Page with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:navButtonPress navButtonPress} to attached listeners.
        */
        protected fireNavButtonPress(mParameters?: {}): this;

        /**
            * Fires event {@link #event:navButtonTap navButtonTap} to attached listeners.
        */
        protected fireNavButtonTap(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * This property is used to set the background color of a page. When a list is placed inside a page, the value "List" should be used to display a gray background. "Standard", with the value white, is used as default if not specified.
         * 
         * Default value is `Standard`.
        */
        public getBackgroundDesign(): sap.m.PageBackgroundDesign;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content of this page
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getContentOnlyBusy contentOnlyBusy}.
         * 
         * Decides which area is covered by the local BusyIndicator when `page.setBusy()` is called. By default the entire page is covered, including headers and footer. When this property is set to "true", only the content area is covered (not header/sub header and footer), which is useful e.g. when there is a SearchField in the sub header and live search continuously updates the content area while the user is still able to type.
         * 
         * Default value is `false`.
        */
        public getContentOnlyBusy(): boolean;

        /**
            * Gets content of aggregation {@link #getCustomHeader customHeader}.
         * 
         * The (optional) custom header of this page. Use this aggregation only when a custom header is constructed where the default header consisting of title text + nav button is not sufficient. If this aggregation is set, the simple properties "title", "showNavButton", "NavButtonText" and "icon" are not used.
        */
        public getCustomHeader(): sap.m.IBar;

        /**
            * Gets current value of property {@link #getEnableScrolling enableScrolling}.
         * 
         * Enable vertical scrolling of page contents. Page headers and footers are fixed and do not scroll. If set to false, there will be no vertical scrolling at all.
         * 
         * The Page only allows vertical scrolling because horizontal scrolling is discouraged in general for full-page content. If it still needs to be achieved, disable the Page scrolling and use a ScrollContainer as full-page content of the Page. This allows you to freely configure scrolling. It can also be used to create horizontally-scrolling sub-areas of (vertically-scrolling) Pages.
         * 
         * Default value is `true`.
        */
        public getEnableScrolling(): boolean;

        /**
            * Gets current value of property {@link #getFloatingFooter floatingFooter}.
         * 
         * Decides whether the footer can float. When set to true, the footer is not fixed below the content area anymore, but rather floats over it with a slight offset from the bottom.
         * 
         * Default value is `false`.
        */
        public getFloatingFooter(): boolean;

        /**
            * Gets content of aggregation {@link #getFooter footer}.
         * 
         * The (optional) footer of this page. It is always located at the bottom of the page
        */
        public getFooter(): sap.m.IBar;

        /**
            * Gets content of aggregation {@link #getHeaderContent headerContent}.
         * 
         * Controls to be added to the right side of the page header. Usually an application would use Button controls and limit the number to one when the application needs to run on smartphones. There is no automatic overflow handling when the space is insufficient. When a customHeader is used, this aggregation will be ignored.
        */
        public getHeaderContent(): {};

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * the icon that is rendered in the page header bar in non-iOS phone/tablet platforms. This property is theme-dependent and only has an effect in the MVI theme.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets content of aggregation {@link #getLandmarkInfo landmarkInfo}.
         * 
         * Accessible landmark settings to be applied on the containers of the `sap.m.Page` control.
         * 
         * If not set, no landmarks will be written.
        */
        public getLandmarkInfo(): PageAccessibleLandmarkInfo;

        /**
            * Returns a metadata object for class sap.m.Page.
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
            * Gets current value of property {@link #getNavButtonText navButtonText}.
         * 
         * The text of the nav button when running in iOS (if shown) in case it deviates from the default, which is "Back". This property is mvi-theme-dependent and will not have any effect in other themes.
        */
        public getNavButtonText(): string;

        /**
            * Gets current value of property {@link #getNavButtonTooltip navButtonTooltip}.
         * 
         * The tooltip of the nav button
         * 
         * Since version 1.34
        */
        public getNavButtonTooltip(): string;

        /**
            * Gets current value of property {@link #getNavButtonType navButtonType}.
         * 
         * This property is used to set the appearance of the NavButton. By default when showNavButton is set to true, a back button will be shown in iOS and an up button in other platforms. In case you want to show a normal button in the left header area, you can set the value to "Default".
         * 
         * Default value is `Back`.
        */
        public getNavButtonType(): sap.m.ButtonType;

        /**
            * Gets current value of property {@link #getShowFooter showFooter}.
         * 
         * Whether this page shall have a footer
         * 
         * Default value is `true`.
        */
        public getShowFooter(): boolean;

        /**
            * Gets current value of property {@link #getShowHeader showHeader}.
         * 
         * Whether this page shall have a header. If set to true, either the control under the "customHeader" aggregation is used, or if there is no such control, a Header control is constructed from the properties "title", "showNavButton", "navButtonText" and "icon" depending on the platform.
         * 
         * Default value is `true`.
        */
        public getShowHeader(): boolean;

        /**
            * Gets current value of property {@link #getShowNavButton showNavButton}.
         * 
         * A nav button will be rendered on the left area of header bar if this property is set to true.
         * 
         * Default value is `false`.
        */
        public getShowNavButton(): boolean;

        /**
            * Gets current value of property {@link #getShowSubHeader showSubHeader}.
         * 
         * Whether this page shall show the subheader.
         * 
         * Default value is `true`.
        */
        public getShowSubHeader(): boolean;

        /**
            * Gets content of aggregation {@link #getSubHeader subHeader}.
         * 
         * a subHeader will be rendered directly under the header
        */
        public getSubHeader(): sap.m.IBar;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * The title text appearing in the page header bar.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getTitleLevel titleLevel}.
         * 
         * Defines the semantic level of the title. Using "Auto" no explicit level information is written. Used for accessibility purposes only.
         * 
         * Default value is `Auto`.
        */
        public getTitleLevel(): sap.ui.core.TitleLevel;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeaderContent headerContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfHeaderContent(oHeaderContent: Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}.
        */
        public insertHeaderContent(oHeaderContent: Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllHeaderContent(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
        */
        public removeHeaderContent(vHeaderContent: number | string | Control): Control;

        /**
            * Scrolls to the given position. Only available if enableScrolling is set to "true".
        */
        public scrollTo(y: number, time: number): this;

        /**
            * Scrolls to an element(DOM or sap.ui.core.Element) within the page if the element is rendered.
        */
        public scrollToElement(oElement: any | Element, iTime?: number): this;

        /**
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * This property is used to set the background color of a page. When a list is placed inside a page, the value "List" should be used to display a gray background. "Standard", with the value white, is used as default if not specified.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setBackgroundDesign(sBackgroundDesign: sap.m.PageBackgroundDesign): this;

        /**
            * Sets a new value for property {@link #getContentOnlyBusy contentOnlyBusy}.
         * 
         * Decides which area is covered by the local BusyIndicator when `page.setBusy()` is called. By default the entire page is covered, including headers and footer. When this property is set to "true", only the content area is covered (not header/sub header and footer), which is useful e.g. when there is a SearchField in the sub header and live search continuously updates the content area while the user is still able to type.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setContentOnlyBusy(bContentOnlyBusy: boolean): this;

        /**
            * Sets the aggregated {@link #getCustomHeader customHeader}.
        */
        public setCustomHeader(oCustomHeader: sap.m.IBar): this;

        /**
            * Sets a new value for property {@link #getEnableScrolling enableScrolling}.
         * 
         * Enable vertical scrolling of page contents. Page headers and footers are fixed and do not scroll. If set to false, there will be no vertical scrolling at all.
         * 
         * The Page only allows vertical scrolling because horizontal scrolling is discouraged in general for full-page content. If it still needs to be achieved, disable the Page scrolling and use a ScrollContainer as full-page content of the Page. This allows you to freely configure scrolling. It can also be used to create horizontally-scrolling sub-areas of (vertically-scrolling) Pages.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableScrolling(bEnableScrolling: boolean): this;

        /**
            * Sets a new value for property {@link #getFloatingFooter floatingFooter}.
         * 
         * Decides whether the footer can float. When set to true, the footer is not fixed below the content area anymore, but rather floats over it with a slight offset from the bottom.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFloatingFooter(bFloatingFooter: boolean): this;

        /**
            * Sets the aggregated {@link #getFooter footer}.
        */
        public setFooter(oFooter: sap.m.IBar): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * the icon that is rendered in the page header bar in non-iOS phone/tablet platforms. This property is theme-dependent and only has an effect in the MVI theme.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets the aggregated {@link #getLandmarkInfo landmarkInfo}.
        */
        public setLandmarkInfo(oLandmarkInfo: PageAccessibleLandmarkInfo): this;

        /**
            * Sets a new value for property {@link #getNavButtonText navButtonText}.
         * 
         * The text of the nav button when running in iOS (if shown) in case it deviates from the default, which is "Back". This property is mvi-theme-dependent and will not have any effect in other themes.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNavButtonText(sNavButtonText: string): this;

        /**
            * Sets a new value for property {@link #getNavButtonTooltip navButtonTooltip}.
         * 
         * The tooltip of the nav button
         * 
         * Since version 1.34
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNavButtonTooltip(sNavButtonTooltip: string): this;

        /**
            * Sets a new value for property {@link #getNavButtonType navButtonType}.
         * 
         * This property is used to set the appearance of the NavButton. By default when showNavButton is set to true, a back button will be shown in iOS and an up button in other platforms. In case you want to show a normal button in the left header area, you can set the value to "Default".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Back`.
        */
        public setNavButtonType(sNavButtonType: sap.m.ButtonType): this;

        /**
            * Sets a new value for property {@link #getShowFooter showFooter}.
         * 
         * Whether this page shall have a footer
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowFooter(bShowFooter: boolean): this;

        /**
            * Sets a new value for property {@link #getShowHeader showHeader}.
         * 
         * Whether this page shall have a header. If set to true, either the control under the "customHeader" aggregation is used, or if there is no such control, a Header control is constructed from the properties "title", "showNavButton", "navButtonText" and "icon" depending on the platform.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowHeader(bShowHeader: boolean): this;

        /**
            * Sets a new value for property {@link #getShowNavButton showNavButton}.
         * 
         * A nav button will be rendered on the left area of header bar if this property is set to true.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowNavButton(bShowNavButton: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSubHeader showSubHeader}.
         * 
         * Whether this page shall show the subheader.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowSubHeader(bShowSubHeader: boolean): this;

        /**
            * Sets the aggregated {@link #getSubHeader subHeader}.
        */
        public setSubHeader(oSubHeader: sap.m.IBar): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * The title text appearing in the page header bar.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getTitleLevel titleLevel}.
         * 
         * Defines the semantic level of the title. Using "Auto" no explicit level information is written. Used for accessibility purposes only.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setTitleLevel(sTitleLevel: sap.ui.core.TitleLevel): this;

    }
}