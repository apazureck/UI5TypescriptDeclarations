declare module 'sap/uxap/ObjectPageLayout' {
    import { Event } from 'sap/ui/base/Event';
    import { ObjectPageSection } from 'sap/uxap/ObjectPageSection';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ManagedObject } from 'sap/ui/base/ManagedObject';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IObjectPageLayoutSettings extends IControlSettings {
        showAnchorBar?: boolean;
        showAnchorBarPopover?: boolean;
        upperCaseAnchorBar?: boolean;
        height?: sap.ui.core.CSSSize;
        enableLazyLoading?: boolean;
        subSectionLayout?: sap.uxap.ObjectPageSubSectionLayout;
        sectionTitleLevel?: sap.ui.core.TitleLevel;
        useIconTabBar?: boolean;
        showHeaderContent?: boolean;
        useTwoColumnsForLargeScreen?: boolean;
        showTitleInHeaderContent?: boolean;
        showOnlyHighImportance?: boolean;
        isChildPage?: boolean;
        alwaysShowContentHeader?: boolean;
        headerContentPinnable?: boolean;
        toggleHeaderOnTitleClick?: boolean;
        preserveHeaderStateOnScroll?: boolean;
        showEditHeaderButton?: boolean;
        flexEnabled?: boolean;
        showFooter?: boolean;
    }

    /**
    
    */
    export class ObjectPageLayout extends Control {

        /**
            * Constructor for a new ObjectPageLayout.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IObjectPageLayoutSettings);


        /**
            * Resume layout calculations and call _adjustLayoutAndUxRules (f.e. once buld updates are over)
        */
        private _resumeLayoutCalculations(): any;

        /**
            * Stop layout calculations temporarily (f.e. to do bulk updates on the object page)
        */
        private _suppressLayoutCalculations(): any;

        /**
            * Resets the internal information of which subsections are in view and immediately calls the layout calculation so that an event `subSectionEnteredViewPort` is fired for the subsections that are actually in view. Use this method after a change in bindings to the existing object, since it's layout might have changed and the app needs to react to the new subsections in view.
        */
        private _triggerVisibleSubSectionsEvents(): any;

        /**
            * Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}.
        */
        public addHeaderContent(oHeaderContent: Control): this;

        /**
            * Adds some section to the aggregation {@link #getSections sections}.
        */
        public addSection(oSection: ObjectPageSection): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:editHeaderButtonPress editHeaderButtonPress} event of this `sap.uxap.ObjectPageLayout`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
         * 
         * The event is fired when the Edit Header button is pressed
        */
        attachEditHeaderButtonPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:editHeaderButtonPress editHeaderButtonPress} event of this `sap.uxap.ObjectPageLayout`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
         * 
         * The event is fired when the Edit Header button is pressed
        */
        attachEditHeaderButtonPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.uxap.ObjectPageLayout`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
         * 
         * The event is fired when the selected section is changed using the navigation.
        */
        attachNavigate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected section object. */
            section: ObjectPageSection,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.uxap.ObjectPageLayout`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
         * 
         * The event is fired when the selected section is changed using the navigation.
        */
        attachNavigate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected section object. */
            section: ObjectPageSection,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleAnchorBar toggleAnchorBar} event of this `sap.uxap.ObjectPageLayout`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
         * 
         * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
        */
        attachToggleAnchorBar<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * False indicates that the Anchor bar has just detached from the Header and became part of the scrolling area. True means that the Anchor bar has just snapped to the Header. */
            fixed: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleAnchorBar toggleAnchorBar} event of this `sap.uxap.ObjectPageLayout`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.uxap.ObjectPageLayout` itself.
         * 
         * The event is fired when the Anchor bar is switched from moving to fixed or the other way round.
        */
        attachToggleAnchorBar<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * False indicates that the Anchor bar has just detached from the Header and became part of the scrolling area. True means that the Anchor bar has just snapped to the Header. */
            fixed: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys the footer in the aggregation {@link #getFooter footer}.
        */
        public destroyFooter(): this;

        /**
            * Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}.
        */
        public destroyHeaderContent(): this;

        /**
            * Destroys the headerTitle in the aggregation {@link #getHeaderTitle headerTitle}.
        */
        public destroyHeaderTitle(): this;

        /**
            * Destroys all the sections in the aggregation {@link #getSections sections}.
        */
        public destroySections(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:editHeaderButtonPress editHeaderButtonPress} event of this `sap.uxap.ObjectPageLayout`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachEditHeaderButtonPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:navigate navigate} event of this `sap.uxap.ObjectPageLayout`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachNavigate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:toggleAnchorBar toggleAnchorBar} event of this `sap.uxap.ObjectPageLayout`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachToggleAnchorBar(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.uxap.ObjectPageLayout with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:editHeaderButtonPress editHeaderButtonPress} to attached listeners.
        */
        protected fireEditHeaderButtonPress(mParameters?: {}): this;

        /**
            * Fires event {@link #event:navigate navigate} to attached listeners.
        */
        protected fireNavigate(mParameters?: { section?: ObjectPageSection, }): this;

        /**
            * Fires event {@link #event:toggleAnchorBar toggleAnchorBar} to attached listeners.
        */
        protected fireToggleAnchorBar(mParameters?: { fixed?: boolean, }): this;

        /**
            * Gets current value of property {@link #getAlwaysShowContentHeader alwaysShowContentHeader}.
         * 
         * Determines whether Header Content will always be expanded on desktop.
         * 
         * ** Note **: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader`is used for the `headerTitle` aggregation.
         * 
         * Default value is `false`.
        */
        public getAlwaysShowContentHeader(): boolean;

        /**
            * Gets current value of property {@link #getEnableLazyLoading enableLazyLoading}.
         * 
         * Enable lazy loading for the Object page Subsections.
         * 
         * Default value is `false`.
        */
        public getEnableLazyLoading(): boolean;

        /**
            * Gets current value of property {@link #getFlexEnabled flexEnabled}.
         * 
         * Specifies whether the object page enables flexibility features, such as hiding and adding sections.<br> For more information about SAPUI5 flexibility, refer to the Developer Guide.
         * 
         * Default value is `false`.
        */
        public getFlexEnabled(): boolean;

        /**
            * Gets content of aggregation {@link #getFooter footer}.
         * 
         * Object page floating footer.
        */
        public getFooter(): sap.m.IBar;

        /**
            * Gets content of aggregation {@link #getHeaderContent headerContent}.
         * 
         * Object page header content - the dynamic part of the Object page header.
        */
        public getHeaderContent(): {};

        /**
            * Gets current value of property {@link #getHeaderContentPinnable headerContentPinnable}.
         * 
         * Determines whether the Header Content area can be pinned.
         * 
         * When set to `true`, a pin button is displayed within the Header Content area. The pin button allows the user to make the Header Content always visible at the top of the page above any scrollable content.
         * 
         * ** Note: ** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle` is used for the `headerTitle` aggregation.
         * 
         * Default value is `true`.
        */
        public getHeaderContentPinnable(): boolean;

        /**
            * Gets content of aggregation {@link #getHeaderTitle headerTitle}.
         * 
         * Object page header title - the upper, always static, part of the Object page header.
        */
        public getHeaderTitle(): sap.uxap.IHeaderTitle;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Determines the height of the ObjectPage.
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getIsChildPage isChildPage}.
         * 
         * Determines whether the page is a child page and renders it with a different design. Child pages have an additional (darker/lighter) stripe on the left side of their header content area.
         * 
         * ** Note **: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader`is used for the `headerTitle` aggregation.
         * 
         * Default value is `false`.
        */
        public getIsChildPage(): boolean;

        /**
            * Returns a metadata object for class sap.uxap.ObjectPageLayout.
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
            * Gets current value of property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
         * 
         * Preserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.
         * 
         * ** Notes: ** * This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`is used for the `headerTitle` aggregation. * Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the control`s title and header are with height larger than the given threshold.
         * 
         * Default value is `false`.
        */
        public getPreserveHeaderStateOnScroll(): boolean;

        /**
            * Returns an sap.ui.core.delegate.ScrollEnablement object used to handle scrolling
        */
        public getScrollDelegate(): {};

        /**
            * Returns the UI5 ID of the Section that is currently being scrolled.
        */
        public getScrollingSectionId(): string;

        /**
            * Gets content of aggregation {@link #getSections sections}.
         * 
         * The sections that make up the Object page content area.
        */
        public getSections(): {};

        /**
            * Gets current value of property {@link #getSectionTitleLevel sectionTitleLevel}.
         * 
         * Determines the ARIA level of the `ObjectPageSection` and `ObjectPageSubSection` titles. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.
         * 
         * <br>** Note: **  * Defining a `sectionTitleLevel` will add `aria-level` attribute from 1 to 6 instead of changing the titles` HTML tag from H1 to H6. <br>For example: if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the `ObjectPageSection` title.
         * 
         * * The `ObjectPageSubSection` title would have `aria-level` one level lower than the defined. For example: if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 2 added to the `ObjectPageSubSection` title.
         * 
         * * It is possible to define a `titleLevel` on `ObjectPageSection` or `ObjectPageSubSection` level. In this case the value of this property will be ignored. 
         * 
         * Default value is `Auto`.
        */
        public getSectionTitleLevel(): sap.ui.core.TitleLevel;

        /**
            * ID of the element which is the current target of the association {@link #getSelectedSection selectedSection}, or `null`.
        */
        public getSelectedSection(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getShowAnchorBar showAnchorBar}.
         * 
         * Determines whether the Navigation bar (Anchor bar) is displayed.
         * 
         * Default value is `true`.
        */
        public getShowAnchorBar(): boolean;

        /**
            * Gets current value of property {@link #getShowAnchorBarPopover showAnchorBarPopover}.
         * 
         * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
         * 
         * Default value is `true`.
        */
        public getShowAnchorBarPopover(): boolean;

        /**
            * Gets current value of property {@link #getShowEditHeaderButton showEditHeaderButton}.
         * 
         * Determines whether an Edit button will be displayed in Header Content.
         * 
         * ** Note **: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader`is used for the `headerTitle` aggregation.
         * 
         * Default value is `false`.
        */
        public getShowEditHeaderButton(): boolean;

        /**
            * Gets current value of property {@link #getShowFooter showFooter}.
         * 
         * Determines whether the footer is visible.
         * 
         * Default value is `false`.
        */
        public getShowFooter(): boolean;

        /**
            * Gets current value of property {@link #getShowHeaderContent showHeaderContent}.
         * 
         * Determines the visibility of the Header content (headerContent aggregation).
         * 
         * Default value is `true`.
        */
        public getShowHeaderContent(): boolean;

        /**
            * Gets current value of property {@link #getShowOnlyHighImportance showOnlyHighImportance}.
         * 
         * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
         * 
         * Default value is `false`.
        */
        public getShowOnlyHighImportance(): boolean;

        /**
            * Gets current value of property {@link #getShowTitleInHeaderContent showTitleInHeaderContent}.
         * 
         * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
         * 
         * ** Note **: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used for the `headerTitle` aggregation.</li>
         * 
         * Default value is `false`.
        */
        public getShowTitleInHeaderContent(): boolean;

        /**
            * Gets current value of property {@link #getSubSectionLayout subSectionLayout}.
         * 
         * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
         * 
         * Default value is `TitleOnTop`.
        */
        public getSubSectionLayout(): sap.uxap.ObjectPageSubSectionLayout;

        /**
            * Gets current value of property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
         * 
         * Determines whether the user can switch between the expanded/collapsed states of the `sap.uxap.ObjectPageDynamicHeaderContent` by clicking on the `sap.uxap.ObjectPageDynamicHeaderTitle`. If set to `false`, the `sap.uxap.ObjectPageDynamicHeaderTitle` is not clickable and the application must provide other means for expanding/collapsing the `sap.uxap.ObjectPageDynamicHeaderContent`, if necessary.
         * 
         * ** Note: ** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`is used for the `headerTitle` aggregation.
         * 
         * Default value is `true`.
        */
        public getToggleHeaderOnTitleClick(): boolean;

        /**
            * Gets current value of property {@link #getUpperCaseAnchorBar upperCaseAnchorBar}.
         * 
         * Determines whether the Anchor bar items are displayed in upper case.
         * 
         * Default value is `true`.
        */
        public getUpperCaseAnchorBar(): boolean;

        /**
            * Gets current value of property {@link #getUseIconTabBar useIconTabBar}.
         * 
         * Use tab navigation mode instead of the default Anchor bar mode. <br>** Note: **Keep in mind that the `sap.m.IconTabBar` control is no longer used for the tab navigation mode.
         * 
         * Default value is `false`.
        */
        public getUseIconTabBar(): boolean;

        /**
            * Gets current value of property {@link #getUseTwoColumnsForLargeScreen useTwoColumnsForLargeScreen}.
         * 
         * Determines whether the to use two column layout for the L screen size.
         * 
         * Default value is `false`.
        */
        public getUseTwoColumnsForLargeScreen(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getHeaderContent headerContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfHeaderContent(oHeaderContent: Control): number;

        /**
            * Checks for the provided `sap.uxap.ObjectPageSection` in the aggregation {@link #getSections sections}. and returns its index if found or -1 otherwise.
        */
        public indexOfSection(oSection: ObjectPageSection): number;

        /**
            * Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}.
        */
        public insertHeaderContent(oHeaderContent: Control, iIndex: number): this;

        /**
            * Inserts a section into the aggregation {@link #getSections sections}.
        */
        public insertSection(oSection: ObjectPageSection, iIndex: number): this;

        /**
            * This triggers rerendering of itself and its children.
        */
        protected invalidate(oOrigin?: ManagedObject): any;

        /**
            * Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllHeaderContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getSections sections}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSections(): {};

        /**
            * Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}.
        */
        public removeHeaderContent(vHeaderContent: number | string | Control): Control;

        /**
            * Removes a section from the aggregation {@link #getSections sections}.
        */
        public removeSection(vSection: number | string | ObjectPageSection): ObjectPageSection;

        /**
            * Scrolls the Object page to the given Section.
        */
        public scrollToSection(sId: string, iDuration: number, iOffset: number): any;

        /**
            * Sets a new value for property {@link #getAlwaysShowContentHeader alwaysShowContentHeader}.
         * 
         * Determines whether Header Content will always be expanded on desktop.
         * 
         * ** Note **: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader`is used for the `headerTitle` aggregation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAlwaysShowContentHeader(bAlwaysShowContentHeader: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableLazyLoading enableLazyLoading}.
         * 
         * Enable lazy loading for the Object page Subsections.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableLazyLoading(bEnableLazyLoading: boolean): this;

        /**
            * Sets a new value for property {@link #getFlexEnabled flexEnabled}.
         * 
         * Specifies whether the object page enables flexibility features, such as hiding and adding sections.<br> For more information about SAPUI5 flexibility, refer to the Developer Guide.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFlexEnabled(bFlexEnabled: boolean): this;

        /**
            * Sets the aggregated {@link #getFooter footer}.
        */
        public setFooter(oFooter: sap.m.IBar): this;

        /**
            * Sets a new value for property {@link #getHeaderContentPinnable headerContentPinnable}.
         * 
         * Determines whether the Header Content area can be pinned.
         * 
         * When set to `true`, a pin button is displayed within the Header Content area. The pin button allows the user to make the Header Content always visible at the top of the page above any scrollable content.
         * 
         * ** Note: ** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle` is used for the `headerTitle` aggregation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setHeaderContentPinnable(bHeaderContentPinnable: boolean): this;

        /**
            * Sets the aggregated {@link #getHeaderTitle headerTitle}.
        */
        public setHeaderTitle(oHeaderTitle: sap.uxap.IHeaderTitle): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Determines the height of the ObjectPage.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getIsChildPage isChildPage}.
         * 
         * Determines whether the page is a child page and renders it with a different design. Child pages have an additional (darker/lighter) stripe on the left side of their header content area.
         * 
         * ** Note **: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader`is used for the `headerTitle` aggregation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setIsChildPage(bIsChildPage: boolean): this;

        /**
            * Sets a new value for property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.
         * 
         * Preserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.
         * 
         * ** Notes: ** * This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`is used for the `headerTitle` aggregation. * Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the control`s title and header are with height larger than the given threshold.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setPreserveHeaderStateOnScroll(bPreserveHeaderStateOnScroll: boolean): this;

        /**
            * Sets a new value for property {@link #getSectionTitleLevel sectionTitleLevel}.
         * 
         * Determines the ARIA level of the `ObjectPageSection` and `ObjectPageSubSection` titles. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.
         * 
         * <br>** Note: **  * Defining a `sectionTitleLevel` will add `aria-level` attribute from 1 to 6 instead of changing the titles` HTML tag from H1 to H6. <br>For example: if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 1 added to the `ObjectPageSection` title.
         * 
         * * The `ObjectPageSubSection` title would have `aria-level` one level lower than the defined. For example: if `sectionTitleLevel` is `TitleLevel.H1`, it will result as aria-level of 2 added to the `ObjectPageSubSection` title.
         * 
         * * It is possible to define a `titleLevel` on `ObjectPageSection` or `ObjectPageSubSection` level. In this case the value of this property will be ignored. 
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setSectionTitleLevel(sSectionTitleLevel: sap.ui.core.TitleLevel): this;

        /**
            * Sets the section that should be selected.
         * 
         * The section can either be given by itself or by its id.
         * 
         * Note that `null` or `undefined` are not valid arguments and will be discarded. This is because the `sap.uxap.ObjectPageLayout` should always have one of its sections selected (unless it has 0 sections).
        */
        public setSelectedSection(sId: string | ObjectPageSection): this;

        /**
            * Sets a new value for property {@link #getShowAnchorBar showAnchorBar}.
         * 
         * Determines whether the Navigation bar (Anchor bar) is displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowAnchorBar(bShowAnchorBar: boolean): this;

        /**
            * Sets a new value for property {@link #getShowAnchorBarPopover showAnchorBarPopover}.
         * 
         * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowAnchorBarPopover(bShowAnchorBarPopover: boolean): this;

        /**
            * Sets a new value for property {@link #getShowEditHeaderButton showEditHeaderButton}.
         * 
         * Determines whether an Edit button will be displayed in Header Content.
         * 
         * ** Note **: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader`is used for the `headerTitle` aggregation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowEditHeaderButton(bShowEditHeaderButton: boolean): this;

        /**
            * Sets a new value for property {@link #getShowFooter showFooter}.
         * 
         * Determines whether the footer is visible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowFooter(bShowFooter: boolean): this;

        /**
            * Sets a new value for property {@link #getShowHeaderContent showHeaderContent}.
         * 
         * Determines the visibility of the Header content (headerContent aggregation).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowHeaderContent(bShowHeaderContent: boolean): this;

        /**
            * Sets a new value for property {@link #getShowOnlyHighImportance showOnlyHighImportance}.
         * 
         * Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowOnlyHighImportance(bShowOnlyHighImportance: boolean): this;

        /**
            * Sets a new value for property {@link #getShowTitleInHeaderContent showTitleInHeaderContent}.
         * 
         * Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.
         * 
         * ** Note **: This property is only taken into account if an instance of `sap.uxap.ObjectPageHeader` is used for the `headerTitle` aggregation.</li>
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowTitleInHeaderContent(bShowTitleInHeaderContent: boolean): this;

        /**
            * Sets a new value for property {@link #getSubSectionLayout subSectionLayout}.
         * 
         * Determines whether Subsection titles are displayed on top or to the left of the Subsection content.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `TitleOnTop`.
        */
        public setSubSectionLayout(sSubSectionLayout: sap.uxap.ObjectPageSubSectionLayout): this;

        /**
            * Sets a new value for property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.
         * 
         * Determines whether the user can switch between the expanded/collapsed states of the `sap.uxap.ObjectPageDynamicHeaderContent` by clicking on the `sap.uxap.ObjectPageDynamicHeaderTitle`. If set to `false`, the `sap.uxap.ObjectPageDynamicHeaderTitle` is not clickable and the application must provide other means for expanding/collapsing the `sap.uxap.ObjectPageDynamicHeaderContent`, if necessary.
         * 
         * ** Note: ** This property is only taken into account if an instance of `sap.uxap.ObjectPageDynamicHeaderTitle`is used for the `headerTitle` aggregation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setToggleHeaderOnTitleClick(bToggleHeaderOnTitleClick: boolean): this;

        /**
            * Sets a new value for property {@link #getUpperCaseAnchorBar upperCaseAnchorBar}.
         * 
         * Determines whether the Anchor bar items are displayed in upper case.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setUpperCaseAnchorBar(bUpperCaseAnchorBar: boolean): this;

        /**
            * Sets a new value for property {@link #getUseIconTabBar useIconTabBar}.
         * 
         * Use tab navigation mode instead of the default Anchor bar mode. <br>** Note: **Keep in mind that the `sap.m.IconTabBar` control is no longer used for the tab navigation mode.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setUseIconTabBar(bUseIconTabBar: boolean): this;

        /**
            * Sets a new value for property {@link #getUseTwoColumnsForLargeScreen useTwoColumnsForLargeScreen}.
         * 
         * Determines whether the to use two column layout for the L screen size.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setUseTwoColumnsForLargeScreen(bUseTwoColumnsForLargeScreen: boolean): this;

    }
}