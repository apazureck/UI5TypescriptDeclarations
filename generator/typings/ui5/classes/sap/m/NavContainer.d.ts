declare module 'sap/m/NavContainer' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface INavContainerSettings extends IControlSettings {
        autoFocus?: boolean;
        height?: sap.ui.core.CSSSize;
        width?: sap.ui.core.CSSSize;
        visible?: boolean;
        defaultTransitionName?: string;
    }

    /**
    
    */
    export class NavContainer extends Control {

        /**
            * Constructor for a new NavContainer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: INavContainerSettings);


        /**
            * Adds a custom transition to the NavContainer type (not to a particular instance!). The transition is identified by a "name". Make sure to only use names that will not collide with transitions which may be added to the NavContainer later. A suggestion is to use the prefix "c_" or "_" for your custom transitions to ensure this.
         * 
         * "to" and "back" are the transition functions for the forward and backward navigation. Both will be called with the following parameters: - oFromPage: the Control which is currently being displayed by the NavContainer - oToPage: the Control which should be displayed by the NavContainer after the transition - fCallback: a function which MUST be called when the transition has completed - oTransitionParameters: a data object that can be given by application code when triggering the transition by calling to() or back(); this object could give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration
         * 
         * The contract for "to" and "back" is that they may do an animation of their choice, but it should not take "too long". At the beginning of the transition the target page "oToPage" does have the CSS class "sapMNavItemHidden" which initially hides the target page (visibility:hidden). The transition can do any preparation (e.g. move that page out of the screen or make it transparent) and then should remove this CSS class. After the animation the target page "oToPage" should cover the entire screen and the source page "oFromPage" should not be visible anymore. This page should then have the CSS class "sapMNavItemHidden". For adding/removing this or other CSS classes, the transition can use the addStyleClass/removeStyleClass method: oFromPage.addStyleClass("sapMNavItemHidden"); When the transition is complete, it MUST call the given fCallback method to inform the NavContainer that navigation has finished!
         * 
         * Hint: if the target page of your transition stays black on iPhone, try wrapping the animation start into a setTimeout(..., 0) block (delayed, but without waiting).
         * 
         * This method can be called on any NavContainer instance or statically on the sap.m.NavContainer type. However, the transition will always be registered for the type (and ALL instances), not for the single instance on which this method was invoked.
         * 
         * Returns the sap.m.NavContainer type if called statically, or "this" (to allow method chaining) if called on a particular NavContainer instance.
        */
        public addCustomTransition(sName: string, oTo: {}, oBack: {}): this;

        /**
            * Adds some page to the aggregation {@link #getPages pages}.
        */
        public addPage(oPage: Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterNavigate afterNavigate} event of this `sap.m.NavContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.NavContainer` itself.
         * 
         * The event is fired when navigation between two pages has completed. In case of animated transitions this event is fired with some delay after the "navigate" event.
        */
        attachAfterNavigate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page which had been shown before navigation. */
            from: Control, /* * The ID of the page which had been shown before navigation. */
            fromId: string, /* * The page which is now shown after navigation. */
            to: Control, /* * The ID of the page which is now shown after navigation. */
            toId: string, /* * Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before. */
            firstTime: boolean, /* * Whether was a forward navigation, triggered by "to()". */
            isTo: boolean, /* * Whether this was a back navigation, triggered by "back()". */
            isBack: boolean, /* * Whether this was a navigation to the root page, triggered by "backToTop()". */
            isBackToTop: boolean, /* * Whether this was a navigation to a specific page, triggered by "backToPage()". */
            isBackToPage: boolean, /* * How the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterNavigate afterNavigate} event of this `sap.m.NavContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.NavContainer` itself.
         * 
         * The event is fired when navigation between two pages has completed. In case of animated transitions this event is fired with some delay after the "navigate" event.
        */
        attachAfterNavigate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page which had been shown before navigation. */
            from: Control, /* * The ID of the page which had been shown before navigation. */
            fromId: string, /* * The page which is now shown after navigation. */
            to: Control, /* * The ID of the page which is now shown after navigation. */
            toId: string, /* * Whether the "to" page (more precisely: a control with the ID of the page which has been navigated to) had not been shown/navigated to before. */
            firstTime: boolean, /* * Whether was a forward navigation, triggered by "to()". */
            isTo: boolean, /* * Whether this was a back navigation, triggered by "back()". */
            isBack: boolean, /* * Whether this was a navigation to the root page, triggered by "backToTop()". */
            isBackToTop: boolean, /* * Whether this was a navigation to a specific page, triggered by "backToPage()". */
            isBackToPage: boolean, /* * How the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.m.NavContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.NavContainer` itself.
         * 
         * The event is fired when navigation between two pages has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
        */
        attachNavigate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page which was shown before the current navigation. */
            from: Control, /* * The ID of the page which was shown before the current navigation. */
            fromId: string, /* * The page which will be shown after the current navigation. */
            to: Control, /* * The ID of the page which will be shown after the current navigation. */
            toId: string, /* * Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before. */
            firstTime: boolean, /* * Whether this is a forward navigation, triggered by "to()". */
            isTo: boolean, /* * Whether this is a back navigation, triggered by "back()". */
            isBack: boolean, /* * Whether this is a navigation to the root page, triggered by "backToTop()". */
            isBackToTop: boolean, /* * Whether this was a navigation to a specific page, triggered by "backToPage()". */
            isBackToPage: boolean, /* * How the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.m.NavContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.NavContainer` itself.
         * 
         * The event is fired when navigation between two pages has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
        */
        attachNavigate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page which was shown before the current navigation. */
            from: Control, /* * The ID of the page which was shown before the current navigation. */
            fromId: string, /* * The page which will be shown after the current navigation. */
            to: Control, /* * The ID of the page which will be shown after the current navigation. */
            toId: string, /* * Whether the "to" page (more precisely: a control with the ID of the page which is currently navigated to) has not been shown/navigated to before. */
            firstTime: boolean, /* * Whether this is a forward navigation, triggered by "to()". */
            isTo: boolean, /* * Whether this is a back navigation, triggered by "back()". */
            isBack: boolean, /* * Whether this is a navigation to the root page, triggered by "backToTop()". */
            isBackToTop: boolean, /* * Whether this was a navigation to a specific page, triggered by "backToPage()". */
            isBackToPage: boolean, /* * How the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Navigates back one level. If already on the initial page and there is no place to go back, nothing happens.
         * 
         * Calling this navigation method triggers first the (cancelable) "navigate" event on the NavContainer, then the "beforeHide" pseudo event on the source page and "beforeFirstShow" (if applicable) and"beforeShow" on the target page. Later - after the transition has completed - the "afterShow" pseudo event is triggered on the target page and "afterHide" on the page which has been left. The given backData object is available in the "beforeFirstShow", "beforeShow" and "afterShow" event object as "data" property. The original "data" object from the "to" navigation is also available in these event objects.
        */
        public back(oBackData?: {}, oTransitionParameters?: {}): this;

        /**
            * Navigates back to the nearest previous page in the NavContainer history with the given ID. If there is no such page among the previous pages, nothing happens. The transition effect which had been used to get to the current page is inverted and used for this navigation.
         * 
         * Calling this navigation method triggers first the (cancelable) "navigate" event on the NavContainer, then the "beforeHide" pseudo event on the source page and "beforeFirstShow" (if applicable) and"beforeShow" on the target page. Later - after the transition has completed - the "afterShow" pseudo event is triggered on the target page and "afterHide" on the page which has been left. The given backData object is available in the "beforeFirstShow", "beforeShow" and "afterShow" event object as "data" property. The original "data" object from the "to" navigation is also available in these event objects.
        */
        public backToPage(sPageId: string, oBackData?: {}, oTransitionParameters?: {}): this;

        /**
            * Navigates back to the initial/top level (this is the element aggregated as "initialPage", or the first added element). If already on the initial page, nothing happens. The transition effect which had been used to get to the current page is inverted and used for this navigation.
         * 
         * Calling this navigation method triggers first the (cancelable) "navigate" event on the NavContainer, then the "beforeHide" pseudo event on the source page and "beforeFirstShow" (if applicable) and"beforeShow" on the target page. Later - after the transition has completed - the "afterShow" pseudo event is triggered on the target page and "afterHide" on the page which has been left. The given backData object is available in the "beforeFirstShow", "beforeShow" and "afterShow" event object as "data" property.
        */
        public backToTop(oBackData?: {}, oTransitionParameters?: {}): this;

        /**
            * Returns whether the current page is the top/initial page.
         * 
         * Note: going to the initial page again with a row of "to" navigations causes the initial page to be displayed again, but logically one is not at the top level, so this method returns "false" in this case.
        */
        public currentPageIsTopPage(): boolean;

        /**
            * Destroys all the pages in the aggregation {@link #getPages pages}.
        */
        public destroyPages(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterNavigate afterNavigate} event of this `sap.m.NavContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterNavigate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:navigate navigate} event of this `sap.m.NavContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachNavigate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.NavContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:afterNavigate afterNavigate} to attached listeners.
        */
        protected fireAfterNavigate(mParameters?: { from?: Control, fromId?: string, to?: Control, toId?: string, firstTime?: boolean, isTo?: boolean, isBack?: boolean, isBackToTop?: boolean, isBackToPage?: boolean, direction?: string, }): this;

        /**
            * Fires event {@link #event:navigate navigate} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireNavigate(mParameters?: { from?: Control, fromId?: string, to?: Control, toId?: string, firstTime?: boolean, isTo?: boolean, isBack?: boolean, isBackToTop?: boolean, isBackToPage?: boolean, direction?: string, }): boolean;

        /**
            * Gets current value of property {@link #getAutoFocus autoFocus}.
         * 
         * Determines whether the initial focus is set automatically on first rendering and after navigating to a new page. This is useful when on touch devices the keyboard pops out due to the focus being automatically set on an input field. If necessary the "afterShow" event can be used to focus another element.
         * 
         * ** Note: ** The following scenarios are possible, depending on where the focus was before navigation to a new page: * If `autoFocus` is set to `true` and the focus was inside the current page, the focus will be moved automatically on the new page. * If `autoFocus` is set to `false` and the focus was inside the current page, the focus will disappear. <li>If the focus was outside the current page, after the navigation it will remain unchanged regardless of what is set to the `autoFocus` property.
         * 
         * Default value is `true`.
        */
        public getAutoFocus(): boolean;

        /**
            * Returns the currently displayed page-level control. Note: it is not necessarily an instance of sap.m.Page, but it could also be an sap.ui.core.View, sap.m.Carousel, or whatever is aggregated.
         * 
         * Returns undefined if no page has been added yet.
        */
        public getCurrentPage(): Control;

        /**
            * Gets current value of property {@link #getDefaultTransitionName defaultTransitionName}.
         * 
         * The type of the transition/animation to apply when "to()" is called without defining a transition type to use. The default is "slide". Other options are: "fade", "flip" and "show" - and the names of any registered custom transitions.
         * 
         * Default value is `slide`.
        */
        public getDefaultTransitionName(): string;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The height of the NavContainer. Can be changed when the NavContainer should not cover the whole available area.
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * ID of the element which is the current target of the association {@link #getInitialPage initialPage}, or `null`.
        */
        public getInitialPage(): sap.ui.core.ID;

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
            * Returns a metadata object for class sap.m.NavContainer.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the control with the given ID from the "pages" aggregation (if available).
        */
        public getPage(sId: string): Control;

        /**
            * Gets content of aggregation {@link #getPages pages}.
         * 
         * The content entities between which this NavContainer navigates. These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics.
         * 
         * These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}
        */
        public getPages(): {};

        /**
            * Returns the previous page (the page from which the user drilled down to the current page with "to()"). Note: this is not the page which the user has seen before, but the page which is the target of the next "back()" navigation. If there is no previous page, "undefined" is returned.
        */
        public getPreviousPage(): Control;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Whether the NavContainer is visible.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width of the NavContainer. Can be changed when the NavContainer should not cover the whole available area.
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getPages pages}. and returns its index if found or -1 otherwise.
        */
        public indexOfPage(oPage: Control): number;

        /**
            * Inserts a page into the aggregation {@link #getPages pages}.
        */
        public insertPage(oPage: Control, iIndex: number): this;

        /**
            * Inserts the page/control with the specified ID into the navigation history stack of the NavContainer.
         * 
         * This can be used for deep-linking when the user directly reached a drilldown detail page using a bookmark and then wants to navigate up in the drilldown hierarchy. Normally such a back navigation would not be possible because there is no previous page in the NavContainer's history stack.
        */
        public insertPreviousPage(sPageId: string, sTransitionName?: string, oData?: {}): this;

        /**
            * Removes all the controls from the aggregation {@link #getPages pages}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllPages(): {};

        /**
            * Removes a page from the aggregation {@link #getPages pages}.
        */
        public removePage(vPage: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getAutoFocus autoFocus}.
         * 
         * Determines whether the initial focus is set automatically on first rendering and after navigating to a new page. This is useful when on touch devices the keyboard pops out due to the focus being automatically set on an input field. If necessary the "afterShow" event can be used to focus another element.
         * 
         * ** Note: ** The following scenarios are possible, depending on where the focus was before navigation to a new page: * If `autoFocus` is set to `true` and the focus was inside the current page, the focus will be moved automatically on the new page. * If `autoFocus` is set to `false` and the focus was inside the current page, the focus will disappear. <li>If the focus was outside the current page, after the navigation it will remain unchanged regardless of what is set to the `autoFocus` property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setAutoFocus(bAutoFocus: boolean): this;

        /**
            * Sets a new value for property {@link #getDefaultTransitionName defaultTransitionName}.
         * 
         * The type of the transition/animation to apply when "to()" is called without defining a transition type to use. The default is "slide". Other options are: "fade", "flip" and "show" - and the names of any registered custom transitions.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `slide`.
        */
        public setDefaultTransitionName(sDefaultTransitionName: string): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The height of the NavContainer. Can be changed when the NavContainer should not cover the whole available area.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets the associated {@link #getInitialPage initialPage}.
        */
        public setInitialPage(oInitialPage: sap.ui.core.ID | Control): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Whether the NavContainer is visible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The width of the NavContainer. Can be changed when the NavContainer should not cover the whole available area.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Navigates to the next page (with drill-down semantic) with the given (or default) animation. This creates a new history item inside the NavContainer and allows going back.
         * 
         * Note that any modifications to the target page (like setting its title, or anything else that could cause a re-rendering) should be done BEFORE calling to(), in order to avoid unwanted side effects, e.g. related to the page animation.
         * 
         * Available transitions currently include "slide" (default), "fade", "flip", and "show". None of these is currently making use of any given transitionParameters.
         * 
         * Calling this navigation method triggers first the (cancelable) "navigate" event on the NavContainer, then the "beforeHide" pseudo event on the source page and "beforeFirstShow" (if applicable) and"beforeShow" on the target page. Later - after the transition has completed - the "afterShow" pseudo event is triggered on the target page and "afterHide" on the page which has been left. The given data object is available in the "beforeFirstShow", "beforeShow" and "afterShow" event object as "data" property.
        */
        public to(sPageId: string, sTransitionName?: string, oData?: {}, oTransitionParameters?: {}): this;

    }
}