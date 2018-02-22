declare module 'sap/m/SplitContainer' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISplitContainerSettings extends IControlSettings {
        defaultTransitionNameDetail?: string;
        defaultTransitionNameMaster?: string;
        mode?: sap.m.SplitAppMode;
        masterButtonText?: string;
        masterButtonTooltip?: string;
        backgroundColor?: string;
        backgroundImage?: sap.ui.core.URI;
        backgroundRepeat?: boolean;
        backgroundOpacity?: number;
    }

    /**
    
    */
    export class SplitContainer extends Control {

        /**
            * Constructor for a new SplitContainer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISplitContainerSettings);


        /**
            * Adds some detailPage to the aggregation {@link #getDetailPages detailPages}.
        */
        public addDetailPage(oDetailPage: Control): this;

        /**
            * Adds some masterPage to the aggregation {@link #getMasterPages masterPages}.
        */
        public addMasterPage(oMasterPage: Control): this;

        /**
            * Adds a content entity either to master area or detail area depending on the master parameter.
         * 
         * The method is provided mainly for providing API consistency between sap.m.SplitContainer and sap.m.App. So that the same code line can be reused.
        */
        public addPage(oPage: Control, bMaster: boolean): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterDetailNavigate afterDetailNavigate} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when navigation between two pages in detail area has completed. NOTE: In case of animated transitions this event is fired with some delay after the "navigate" event.
        */
        attachAfterDetailNavigate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page, which had been displayed before navigation. */
            from: Control, /* * The ID of the page, which had been displayed before navigation. */
            fromId: string, /* * The page, which is now displayed after navigation. */
            to: Control, /* * The ID of the page, which is now displayed after navigation. */
            toId: string, /* * Determines whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before. */
            firstTime: boolean, /* * Determines whether was a forward navigation, triggered by to(). */
            isTo: boolean, /* * Determines whether this was a back navigation, triggered by back(). */
            isBack: boolean, /* * Determines whether this was a navigation to the root page, triggered by backToTop(). */
            isBackToTop: boolean, /* * Determines whether this was a navigation to a specific page, triggered by backToPage(). */
            isBackToPage: boolean, /* * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterDetailNavigate afterDetailNavigate} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when navigation between two pages in detail area has completed. NOTE: In case of animated transitions this event is fired with some delay after the "navigate" event.
        */
        attachAfterDetailNavigate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page, which had been displayed before navigation. */
            from: Control, /* * The ID of the page, which had been displayed before navigation. */
            fromId: string, /* * The page, which is now displayed after navigation. */
            to: Control, /* * The ID of the page, which is now displayed after navigation. */
            toId: string, /* * Determines whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before. */
            firstTime: boolean, /* * Determines whether was a forward navigation, triggered by to(). */
            isTo: boolean, /* * Determines whether this was a back navigation, triggered by back(). */
            isBack: boolean, /* * Determines whether this was a navigation to the root page, triggered by backToTop(). */
            isBackToTop: boolean, /* * Determines whether this was a navigation to a specific page, triggered by backToPage(). */
            isBackToPage: boolean, /* * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterMasterClose afterMasterClose} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when the master area is fully closed after the animation (if any).
        */
        attachAfterMasterClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterMasterClose afterMasterClose} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when the master area is fully closed after the animation (if any).
        */
        attachAfterMasterClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterMasterNavigate afterMasterNavigate} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when navigation between two pages in master area has completed. NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
        */
        attachAfterMasterNavigate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page, which had been displayed before navigation. */
            from: Control, /* * The ID of the page, which had been displayed before navigation. */
            fromId: string, /* * The page, which is now displayed after navigation. */
            to: Control, /* * The ID of the page, which is now displayed after navigation. */
            toId: string, /* * Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before. */
            firstTime: boolean, /* * Determines whether was a forward navigation, triggered by to(). */
            isTo: boolean, /* * Determines whether this was a back navigation, triggered by back(). */
            isBack: boolean, /* * Determines whether this was a navigation to the root page, triggered by backToTop(). */
            isBackToTop: boolean, /* * Determines whether this was a navigation to a specific page, triggered by backToPage(). */
            isBackToPage: boolean, /* * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterMasterNavigate afterMasterNavigate} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when navigation between two pages in master area has completed. NOTE: In case of animated transitions this event is fired with some delay after the navigate event.
        */
        attachAfterMasterNavigate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page, which had been displayed before navigation. */
            from: Control, /* * The ID of the page, which had been displayed before navigation. */
            fromId: string, /* * The page, which is now displayed after navigation. */
            to: Control, /* * The ID of the page, which is now displayed after navigation. */
            toId: string, /* * Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before. */
            firstTime: boolean, /* * Determines whether was a forward navigation, triggered by to(). */
            isTo: boolean, /* * Determines whether this was a back navigation, triggered by back(). */
            isBack: boolean, /* * Determines whether this was a navigation to the root page, triggered by backToTop(). */
            isBackToTop: boolean, /* * Determines whether this was a navigation to a specific page, triggered by backToPage(). */
            isBackToPage: boolean, /* * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterMasterOpen afterMasterOpen} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when the master area is fully opened after animation if any.
        */
        attachAfterMasterOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterMasterOpen afterMasterOpen} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when the master area is fully opened after animation if any.
        */
        attachAfterMasterOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeMasterClose beforeMasterClose} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires before the master area is closed.
        */
        attachBeforeMasterClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeMasterClose beforeMasterClose} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires before the master area is closed.
        */
        attachBeforeMasterClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeMasterOpen beforeMasterOpen} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires before the master area is opened.
        */
        attachBeforeMasterOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeMasterOpen beforeMasterOpen} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires before the master area is opened.
        */
        attachBeforeMasterOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:detailNavigate detailNavigate} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when navigation between two pages in detail area has been triggered. The transition (if any) to the new page has not started yet. NOTE: This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
        */
        attachDetailNavigate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page, which was displayed before the current navigation. */
            from: Control, /* * The ID of the page, which was displayed before the current navigation. */
            fromId: string, /* * The page, which will be displayed after the current navigation. */
            to: Control, /* * The ID of the page, which will be displayed after the current navigation. */
            toId: string, /* * Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently navigated to) has not been displayed/navigated to before. */
            firstTime: boolean, /* * Determines whether this is a forward navigation, triggered by to(). */
            isTo: boolean, /* * Determines whether this is a back navigation, triggered by back(). */
            isBack: boolean, /* * Determines whether this is a navigation to the root page, triggered by backToTop(). */
            isBackToTop: boolean, /* * Determines whether this was a navigation to a specific page, triggered by backToPage(). */
            isBackToPage: boolean, /* * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:detailNavigate detailNavigate} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when navigation between two pages in detail area has been triggered. The transition (if any) to the new page has not started yet. NOTE: This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
        */
        attachDetailNavigate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page, which was displayed before the current navigation. */
            from: Control, /* * The ID of the page, which was displayed before the current navigation. */
            fromId: string, /* * The page, which will be displayed after the current navigation. */
            to: Control, /* * The ID of the page, which will be displayed after the current navigation. */
            toId: string, /* * Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently navigated to) has not been displayed/navigated to before. */
            firstTime: boolean, /* * Determines whether this is a forward navigation, triggered by to(). */
            isTo: boolean, /* * Determines whether this is a back navigation, triggered by back(). */
            isBack: boolean, /* * Determines whether this is a navigation to the root page, triggered by backToTop(). */
            isBackToTop: boolean, /* * Determines whether this was a navigation to a specific page, triggered by backToPage(). */
            isBackToPage: boolean, /* * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:masterButton masterButton} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when a Master Button needs to be shown or hidden. This is necessary for custom headers when the SplitContainer control does not handle the placement of the master button automatically.
        */
        attachMasterButton<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:masterButton masterButton} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when a Master Button needs to be shown or hidden. This is necessary for custom headers when the SplitContainer control does not handle the placement of the master button automatically.
        */
        attachMasterButton<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:masterNavigate masterNavigate} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when navigation between two pages in master area has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
        */
        attachMasterNavigate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page, which was displayed before the current navigation. */
            from: Control, /* * The ID of the page, which was displayed before the current navigation. */
            fromId: string, /* * The page, which will be displayed after the current navigation. */
            to: Control, /* * The ID of the page, which will be displayed after the current navigation. */
            toId: string, /* * Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently being navigated to) has not been displayed/navigated to before. */
            firstTime: boolean, /* * Determines whether this is a forward navigation, triggered by to(). */
            isTo: boolean, /* * Determines whether this is a back navigation, triggered by back(). */
            isBack: boolean, /* * Determines whether this is a navigation to the root page, triggered by backToTop(). */
            isBackToTop: boolean, /* * Determines whether this was a navigation to a specific page, triggered by backToPage(). */
            isBackToPage: boolean, /* * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:masterNavigate masterNavigate} event of this `sap.m.SplitContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SplitContainer` itself.
         * 
         * Fires when navigation between two pages in master area has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
        */
        attachMasterNavigate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page, which was displayed before the current navigation. */
            from: Control, /* * The ID of the page, which was displayed before the current navigation. */
            fromId: string, /* * The page, which will be displayed after the current navigation. */
            to: Control, /* * The ID of the page, which will be displayed after the current navigation. */
            toId: string, /* * Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently being navigated to) has not been displayed/navigated to before. */
            firstTime: boolean, /* * Determines whether this is a forward navigation, triggered by to(). */
            isTo: boolean, /* * Determines whether this is a back navigation, triggered by back(). */
            isBack: boolean, /* * Determines whether this is a navigation to the root page, triggered by backToTop(). */
            isBackToTop: boolean, /* * Determines whether this was a navigation to a specific page, triggered by backToPage(). */
            isBackToPage: boolean, /* * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Navigates back to the previous detail page found in the history.
        */
        public backDetail(oBackData: {}, oTransitionParameter: {}): this;

        /**
            * Navigates back to the previous master page which is found in the history.
        */
        public backMaster(oBackData: {}, oTransitionParameter: {}): this;

        /**
            * Navigates back to the nearest previous page in the SplitContainer history with the given ID (if there is no such page among the previous pages, nothing happens). The transition effect, which had been used to get to the current page is inverted and used for this navigation.
         * 
         * Calling this navigation method, first triggers the (cancelable) navigate event on the SplitContainer, then the beforeHide pseudo event on the source page, beforeFirstShow (if applicable), and beforeShow on the target page. Later, after the transition has completed, the afterShow pseudo event is triggered on the target page and afterHide - on the page, which has been left. The given backData object is available in the beforeFirstShow, beforeShow, and afterShow event objects as data property. The original "data" object from the "to" navigation is also available in these event objects.
        */
        public backToPage(sPageId: string, oBackData: {}, oTransitionParameters: {}): this;

        /**
            * Navigates back to the initial/top level of Detail (this is the element aggregated as initialPage, or the first added element). NOTE: If already on the initial page, nothing happens. The transition effect which had been used to get to the current page is inverted and used for this navigation.
        */
        public backToTopDetail(oBackData: {}, oTransitionParameter: {}): Control;

        /**
            * Navigates back to the initial/top level of Master (this is the element aggregated as "initialPage", or the first added element). NOTE: If already on the initial page, nothing happens. The transition effect which had been used to get to the current page is inverted and used for this navigation.
        */
        public backToTopMaster(oBackData: {}, oTransitionParameter: {}): Control;

        /**
            * Destroys all the detailPages in the aggregation {@link #getDetailPages detailPages}.
        */
        public destroyDetailPages(): this;

        /**
            * Destroys all the masterPages in the aggregation {@link #getMasterPages masterPages}.
        */
        public destroyMasterPages(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterDetailNavigate afterDetailNavigate} event of this `sap.m.SplitContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterDetailNavigate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterMasterClose afterMasterClose} event of this `sap.m.SplitContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterMasterClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterMasterNavigate afterMasterNavigate} event of this `sap.m.SplitContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterMasterNavigate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterMasterOpen afterMasterOpen} event of this `sap.m.SplitContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterMasterOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeMasterClose beforeMasterClose} event of this `sap.m.SplitContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeMasterClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeMasterOpen beforeMasterOpen} event of this `sap.m.SplitContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeMasterOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:detailNavigate detailNavigate} event of this `sap.m.SplitContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDetailNavigate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:masterButton masterButton} event of this `sap.m.SplitContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachMasterButton(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:masterNavigate masterNavigate} event of this `sap.m.SplitContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachMasterNavigate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.SplitContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:afterDetailNavigate afterDetailNavigate} to attached listeners.
        */
        protected fireAfterDetailNavigate(mParameters?: { from?: Control, fromId?: string, to?: Control, toId?: string, firstTime?: boolean, isTo?: boolean, isBack?: boolean, isBackToTop?: boolean, isBackToPage?: boolean, direction?: string, }): this;

        /**
            * Fires event {@link #event:afterMasterClose afterMasterClose} to attached listeners.
        */
        protected fireAfterMasterClose(mParameters?: {}): this;

        /**
            * Fires event {@link #event:afterMasterNavigate afterMasterNavigate} to attached listeners.
        */
        protected fireAfterMasterNavigate(mParameters?: { from?: Control, fromId?: string, to?: Control, toId?: string, firstTime?: boolean, isTo?: boolean, isBack?: boolean, isBackToTop?: boolean, isBackToPage?: boolean, direction?: string, }): this;

        /**
            * Fires event {@link #event:afterMasterOpen afterMasterOpen} to attached listeners.
        */
        protected fireAfterMasterOpen(mParameters?: {}): this;

        /**
            * Fires event {@link #event:beforeMasterClose beforeMasterClose} to attached listeners.
        */
        protected fireBeforeMasterClose(mParameters?: {}): this;

        /**
            * Fires event {@link #event:beforeMasterOpen beforeMasterOpen} to attached listeners.
        */
        protected fireBeforeMasterOpen(mParameters?: {}): this;

        /**
            * Fires event {@link #event:detailNavigate detailNavigate} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireDetailNavigate(mParameters?: { from?: Control, fromId?: string, to?: Control, toId?: string, firstTime?: boolean, isTo?: boolean, isBack?: boolean, isBackToTop?: boolean, isBackToPage?: boolean, direction?: string, }): boolean;

        /**
            * Fires event {@link #event:masterButton masterButton} to attached listeners.
        */
        protected fireMasterButton(mParameters?: {}): this;

        /**
            * Fires event {@link #event:masterNavigate masterNavigate} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireMasterNavigate(mParameters?: { from?: Control, fromId?: string, to?: Control, toId?: string, firstTime?: boolean, isTo?: boolean, isBack?: boolean, isBackToTop?: boolean, isBackToPage?: boolean, direction?: string, }): boolean;

        /**
            * Gets current value of property {@link #getBackgroundColor backgroundColor}.
         * 
         * Determines the background color of the SplitContainer. If set, this color overrides the default one, which is defined by the theme (should only be used when really required). Any configured background image will be placed above this colored background, but any theme adaptation in the Theme Designer will override this setting. Use the backgroundRepeat property to define whether this image should be stretched to cover the complete SplitContainer or whether it should be tiled.
        */
        public getBackgroundColor(): string;

        /**
            * Gets current value of property {@link #getBackgroundImage backgroundImage}.
         * 
         * Sets the background image of the SplitContainer. When set, this image overrides the default background defined by the theme (should only be used when really required). This background image will be placed above any color set for the background, but any theme adaptation in the Theme Designer will override this image setting. Use the backgroundRepeat property to define whether this image should be stretched to cover the complete SplitContainer or whether it should be tiled.
        */
        public getBackgroundImage(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getBackgroundOpacity backgroundOpacity}.
         * 
         * Defines the opacity of the background image - between 0 (fully transparent) and 1 (fully opaque). This can be used to improve the content visibility by making the background image partly transparent.
         * 
         * Default value is `1`.
        */
        public getBackgroundOpacity(): number;

        /**
            * Gets current value of property {@link #getBackgroundRepeat backgroundRepeat}.
         * 
         * Defines whether the background image (if configured) is proportionally stretched to cover the whole SplitContainer (false) or whether it should be tiled (true).
         * 
         * Default value is `false`.
        */
        public getBackgroundRepeat(): boolean;

        /**
            * Returns the current displayed detail page.
        */
        public getCurrentDetailPage(): Control;

        /**
            * Returns the current displayed master page.
        */
        public getCurrentMasterPage(): Control;

        /**
            * Returns the currently displayed page either in master area or in detail area. When the parameter is set to true, the current page in master area is returned, otherwise, the current page in detail area is returned.
         * 
         * This method is provided mainly for API consistency between sap.m.SplitContainer and sap.m.App, so that the same code line can be reused.
        */
        public getCurrentPage(bMaster: boolean): Control;

        /**
            * Gets current value of property {@link #getDefaultTransitionNameDetail defaultTransitionNameDetail}.
         * 
         * Determines the type of the transition/animation to apply when to() is called without defining the transition to use. The default is "slide", other options are "fade", "show", and the names of any registered custom transitions.
         * 
         * Default value is `slide`.
        */
        public getDefaultTransitionNameDetail(): string;

        /**
            * Gets current value of property {@link #getDefaultTransitionNameMaster defaultTransitionNameMaster}.
         * 
         * Determines the type of the transition/animation to apply when to() is called, without defining the transition to use. The default is "slide", other options are "fade", "show", and the names of any registered custom transitions.
         * 
         * Default value is `slide`.
        */
        public getDefaultTransitionNameMaster(): string;

        /**
            * Returns the page with the given ID in detail area. If there's no page that has the given ID, null is returned.
        */
        public getDetailPage(sId: string): Control;

        /**
            * Gets content of aggregation {@link #getDetailPages detailPages}.
         * 
         * Determines the content entities, between which the SplitContainer navigates in detail area. These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics. These aggregated controls receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
        */
        public getDetailPages(): {};

        /**
            * ID of the element which is the current target of the association {@link #getInitialDetail initialDetail}, or `null`.
        */
        public getInitialDetail(): sap.ui.core.ID;

        /**
            * ID of the element which is the current target of the association {@link #getInitialMaster initialMaster}, or `null`.
        */
        public getInitialMaster(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getMasterButtonText masterButtonText}.
         * 
         * Determines the text displayed in master button, which has a default value "Navigation". This text is only displayed in iOS platform and the icon from the current page in detail area is displayed in the master button for the other platforms. The master button is shown/hidden depending on the orientation of the device and whether the master area is opened or not. SplitContainer manages the show/hide of the master button by itself only when the pages added to the detail area are sap.m.Page with built-in header or sap.m.Page with built-in header, which is wrapped by one or several sap.ui.core.mvc.View. Otherwise, the show/hide of master button needs to be managed by the application.
        */
        public getMasterButtonText(): string;

        /**
            * Gets current value of property {@link #getMasterButtonTooltip masterButtonTooltip}.
         * 
         * Specifies the tooltip of the master button. If the tooltip is not specified, the title of the page, which is displayed is the master part, is set as tooltip to the master button.
        */
        public getMasterButtonTooltip(): string;

        /**
            * Returns the page with the given ID in master area (if there's no page that has the given ID, null is returned).
        */
        public getMasterPage(sId: string): Control;

        /**
            * Gets content of aggregation {@link #getMasterPages masterPages}.
         * 
         * Determines the content entities, between which the SplitContainer navigates in master area. These can be of type sap.m.Page, sap.ui.core.View, sap.m.Carousel or any other control with fullscreen/page semantics. These aggregated controls receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}.
        */
        public getMasterPages(): {};

        /**
            * Returns a metadata object for class sap.m.SplitContainer.
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
            * Gets current value of property {@link #getMode mode}.
         * 
         * Defines whether the master page will always be displayed (in portrait and landscape mode - StretchCompressMode), or if it should be hidden when in portrait mode (ShowHideMode). Default is ShowHideMode. Other possible values are Hide (Master is always hidden) and Popover (master is displayed in popover).
         * 
         * Default value is `ShowHideMode`.
        */
        public getMode(): sap.m.SplitAppMode;

        /**
            * Returns the page with the given ID from either master area, or detail area depending on the master parameter (if there's no page that has the given ID, null is returned).
        */
        public getPage(sId: string, bMaster: boolean): Control;

        /**
            * Returns the previous page (the page, from which the user drilled down to the current page with to()). Note: this is not the page, which the user has seen before, but the page which is the target of the next back() navigation. If there is no previous page, "undefined" is returned.
        */
        public getPreviousPage(bMaster: boolean): Control;

        /**
            * Used to hide the master page when in ShowHideMode and the device is in portrait mode.
        */
        public hideMaster(): this;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getDetailPages detailPages}. and returns its index if found or -1 otherwise.
        */
        public indexOfDetailPage(oDetailPage: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getMasterPages masterPages}. and returns its index if found or -1 otherwise.
        */
        public indexOfMasterPage(oMasterPage: Control): number;

        /**
            * Inserts a detailPage into the aggregation {@link #getDetailPages detailPages}.
        */
        public insertDetailPage(oDetailPage: Control, iIndex: number): this;

        /**
            * Inserts a masterPage into the aggregation {@link #getMasterPages masterPages}.
        */
        public insertMasterPage(oMasterPage: Control, iIndex: number): this;

        /**
            * Inserts the page/control with the specified ID into the navigation history stack of the NavContainer.
         * 
         * This can be used for deep-linking when the user directly reached a drilldown detail page using a bookmark and then wants to navigate up in the drilldown hierarchy. Normally, such a back navigation would not be possible as there is no previous page in the SplitContainer's history stack.
        */
        public insertPreviousPage(sPageId: string, sTransitionName: string, oData: {}): this;

        /**
            * Returns whether master area is currently displayed on the screen. In desktop browser or tablet, this method returns true when master area is displayed on the screen, regardless if in portrait or landscape mode. On mobile phone devices, this method returns true when the currently displayed page is from the pages, which are added to the master area, otherwise, it returns false.
        */
        public isMasterShown(): boolean;

        /**
            * Removes all the controls from the aggregation {@link #getDetailPages detailPages}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllDetailPages(): {};

        /**
            * Removes all the controls from the aggregation {@link #getMasterPages masterPages}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllMasterPages(): {};

        /**
            * Removes a detailPage from the aggregation {@link #getDetailPages detailPages}.
        */
        public removeDetailPage(vDetailPage: number | string | Control): Control;

        /**
            * Removes a masterPage from the aggregation {@link #getMasterPages masterPages}.
        */
        public removeMasterPage(vMasterPage: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getBackgroundColor backgroundColor}.
         * 
         * Determines the background color of the SplitContainer. If set, this color overrides the default one, which is defined by the theme (should only be used when really required). Any configured background image will be placed above this colored background, but any theme adaptation in the Theme Designer will override this setting. Use the backgroundRepeat property to define whether this image should be stretched to cover the complete SplitContainer or whether it should be tiled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBackgroundColor(sBackgroundColor: string): this;

        /**
            * Sets a new value for property {@link #getBackgroundImage backgroundImage}.
         * 
         * Sets the background image of the SplitContainer. When set, this image overrides the default background defined by the theme (should only be used when really required). This background image will be placed above any color set for the background, but any theme adaptation in the Theme Designer will override this image setting. Use the backgroundRepeat property to define whether this image should be stretched to cover the complete SplitContainer or whether it should be tiled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBackgroundImage(sBackgroundImage: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getBackgroundOpacity backgroundOpacity}.
         * 
         * Defines the opacity of the background image - between 0 (fully transparent) and 1 (fully opaque). This can be used to improve the content visibility by making the background image partly transparent.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setBackgroundOpacity(fBackgroundOpacity: number): this;

        /**
            * Sets a new value for property {@link #getBackgroundRepeat backgroundRepeat}.
         * 
         * Defines whether the background image (if configured) is proportionally stretched to cover the whole SplitContainer (false) or whether it should be tiled (true).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setBackgroundRepeat(bBackgroundRepeat: boolean): this;

        /**
            * Sets a new value for property {@link #getDefaultTransitionNameDetail defaultTransitionNameDetail}.
         * 
         * Determines the type of the transition/animation to apply when to() is called without defining the transition to use. The default is "slide", other options are "fade", "show", and the names of any registered custom transitions.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `slide`.
        */
        public setDefaultTransitionNameDetail(sDefaultTransitionNameDetail: string): this;

        /**
            * Sets a new value for property {@link #getDefaultTransitionNameMaster defaultTransitionNameMaster}.
         * 
         * Determines the type of the transition/animation to apply when to() is called, without defining the transition to use. The default is "slide", other options are "fade", "show", and the names of any registered custom transitions.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `slide`.
        */
        public setDefaultTransitionNameMaster(sDefaultTransitionNameMaster: string): this;

        /**
            * Sets the associated {@link #getInitialDetail initialDetail}.
        */
        public setInitialDetail(oInitialDetail: sap.ui.core.ID | Control): this;

        /**
            * Sets the associated {@link #getInitialMaster initialMaster}.
        */
        public setInitialMaster(oInitialMaster: sap.ui.core.ID | Control): this;

        /**
            * Sets a new value for property {@link #getMasterButtonText masterButtonText}.
         * 
         * Determines the text displayed in master button, which has a default value "Navigation". This text is only displayed in iOS platform and the icon from the current page in detail area is displayed in the master button for the other platforms. The master button is shown/hidden depending on the orientation of the device and whether the master area is opened or not. SplitContainer manages the show/hide of the master button by itself only when the pages added to the detail area are sap.m.Page with built-in header or sap.m.Page with built-in header, which is wrapped by one or several sap.ui.core.mvc.View. Otherwise, the show/hide of master button needs to be managed by the application.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMasterButtonText(sMasterButtonText: string): this;

        /**
            * Sets a new value for property {@link #getMasterButtonTooltip masterButtonTooltip}.
         * 
         * Specifies the tooltip of the master button. If the tooltip is not specified, the title of the page, which is displayed is the master part, is set as tooltip to the master button.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMasterButtonTooltip(sMasterButtonTooltip: string): this;

        /**
            * Sets a new value for property {@link #getMode mode}.
         * 
         * Defines whether the master page will always be displayed (in portrait and landscape mode - StretchCompressMode), or if it should be hidden when in portrait mode (ShowHideMode). Default is ShowHideMode. Other possible values are Hide (Master is always hidden) and Popover (master is displayed in popover).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `ShowHideMode`.
        */
        public setMode(sMode: sap.m.SplitAppMode): this;

        /**
            * Used to make the master page visible when in ShowHideMode and the device is in portrait mode.
        */
        public showMaster(): this;

        /**
            * Navigates to the given page inside the SplitContainer. The navigation is done inside the master area if the page has been added, otherwise, it tries to do the page navigation in the detail area.
        */
        public to(sPageId: string, sTransitionName: string, oData: {}, oTransitionParameters: {}): this;

        /**
            * Navigates to a given detail page.
        */
        public toDetail(sPageId: string, sTransitionName: string, oData: {}, oTransitionParameter: {}): this;

        /**
            * Navigates to a given master page.
        */
        public toMaster(sPageId: string, sTransitionName: string, oData: {}, oTransitionParameters: {}): this;

    }
}