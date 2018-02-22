declare module 'sap/m/QuickViewBase' {
    import { Event } from 'sap/ui/base/Event';
    import { QuickViewPage } from 'sap/m/QuickViewPage';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IQuickViewBaseSettings extends IControlSettings {
    }

    /**
    
    */
    export class QuickViewBase extends Control {

        /**
            * Constructor for a new QuickViewBase.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IQuickViewBaseSettings);


        /**
            * Adds some page to the aggregation {@link #getPages pages}.
        */
        public addPage(oPage: QuickViewPage): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterNavigate afterNavigate} event of this `sap.m.QuickViewBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.QuickViewBase` itself.
         * 
         * The event is fired when navigation between two pages has completed. In case of animated transitions this event is fired with some delay after the "navigate" event.
        */
        attachAfterNavigate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Determines the page, which has been displayed before navigation. */
            from: Control, /* * Determines the ID of the page, which has been displayed before navigation. */
            fromId: string, /* * Determines the page, which is now displayed after navigation. */
            to: Control, /* * Determines the ID of the page, which is now displayed after navigation. */
            toId: string, /* * Determines whether the "to" page (a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before. */
            firstTime: boolean, /* * Determines whether this was a forward navigation. */
            isTo: boolean, /* * Determines whether this was a back navigation. */
            isBack: boolean, /* * Determines whether this was a navigation to the root page. */
            isBackToTop: boolean, /* * Determines whether this was a navigation to a specific page. */
            isBackToPage: boolean, /* * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string, /* * Determines whether this is a navigation to the top page. */
            isTopPage: boolean, /* * Determines which link initiated the navigation. */
            navOrigin: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterNavigate afterNavigate} event of this `sap.m.QuickViewBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.QuickViewBase` itself.
         * 
         * The event is fired when navigation between two pages has completed. In case of animated transitions this event is fired with some delay after the "navigate" event.
        */
        attachAfterNavigate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Determines the page, which has been displayed before navigation. */
            from: Control, /* * Determines the ID of the page, which has been displayed before navigation. */
            fromId: string, /* * Determines the page, which is now displayed after navigation. */
            to: Control, /* * Determines the ID of the page, which is now displayed after navigation. */
            toId: string, /* * Determines whether the "to" page (a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before. */
            firstTime: boolean, /* * Determines whether this was a forward navigation. */
            isTo: boolean, /* * Determines whether this was a back navigation. */
            isBack: boolean, /* * Determines whether this was a navigation to the root page. */
            isBackToTop: boolean, /* * Determines whether this was a navigation to a specific page. */
            isBackToPage: boolean, /* * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string, /* * Determines whether this is a navigation to the top page. */
            isTopPage: boolean, /* * Determines which link initiated the navigation. */
            navOrigin: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.m.QuickViewBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.QuickViewBase` itself.
         * 
         * The event is fired when navigation between two pages has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
        */
        attachNavigate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page which was displayed before the current navigation. */
            from: Control, /* * The ID of the page which was displayed before the current navigation. */
            fromId: string, /* * The page which will be displayed after the current navigation. */
            to: Control, /* * The ID of the page which will be displayed after the current navigation. */
            toId: string, /* * Determines whether the "to" page (a control with the ID of the page which is currently navigated to) has not been displayed/navigated to before. */
            firstTime: boolean, /* * Determines whether this is a forward navigation. */
            isTo: boolean, /* * Determines whether this is a back navigation. */
            isBack: boolean, /* * Determines whether this is a navigation to the root page. */
            isBackToTop: boolean, /* * Determines whether this was a navigation to a specific page. */
            isBackToPage: boolean, /* * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string, /* * Determines which link initiated the navigation. */
            navOrigin: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.m.QuickViewBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.QuickViewBase` itself.
         * 
         * The event is fired when navigation between two pages has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation.
        */
        attachNavigate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The page which was displayed before the current navigation. */
            from: Control, /* * The ID of the page which was displayed before the current navigation. */
            fromId: string, /* * The page which will be displayed after the current navigation. */
            to: Control, /* * The ID of the page which will be displayed after the current navigation. */
            toId: string, /* * Determines whether the "to" page (a control with the ID of the page which is currently navigated to) has not been displayed/navigated to before. */
            firstTime: boolean, /* * Determines whether this is a forward navigation. */
            isTo: boolean, /* * Determines whether this is a back navigation. */
            isBack: boolean, /* * Determines whether this is a navigation to the root page. */
            isBackToTop: boolean, /* * Determines whether this was a navigation to a specific page. */
            isBackToPage: boolean, /* * Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop". */
            direction: string, /* * Determines which link initiated the navigation. */
            navOrigin: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getPages pages} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindPages(oBindingInfo: {}): this;

        /**
            * Destroys all the pages in the aggregation {@link #getPages pages}.
        */
        public destroyPages(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterNavigate afterNavigate} event of this `sap.m.QuickViewBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterNavigate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:navigate navigate} event of this `sap.m.QuickViewBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachNavigate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.QuickViewBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:afterNavigate afterNavigate} to attached listeners.
        */
        protected fireAfterNavigate(mParameters?: { from?: Control, fromId?: string, to?: Control, toId?: string, firstTime?: boolean, isTo?: boolean, isBack?: boolean, isBackToTop?: boolean, isBackToPage?: boolean, direction?: string, isTopPage?: boolean, navOrigin?: Control, }): this;

        /**
            * Fires event {@link #event:navigate navigate} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireNavigate(mParameters?: { from?: Control, fromId?: string, to?: Control, toId?: string, firstTime?: boolean, isTo?: boolean, isBack?: boolean, isBackToTop?: boolean, isBackToPage?: boolean, direction?: string, navOrigin?: Control, }): boolean;

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
            * Returns a metadata object for class sap.m.QuickViewBase.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets content of aggregation {@link #getPages pages}.
         * 
         * Displays a page header, object icon or image, object name with short description, and object information divided in groups
        */
        public getPages(): {};

        /**
            * Checks for the provided `sap.m.QuickViewPage` in the aggregation {@link #getPages pages}. and returns its index if found or -1 otherwise.
        */
        public indexOfPage(oPage: QuickViewPage): number;

        /**
            * Inserts a page into the aggregation {@link #getPages pages}.
        */
        public insertPage(oPage: QuickViewPage, iIndex: number): this;

        /**
            * Navigates to the previous page if there is such.
        */
        public navigateBack(): any;

        /**
            * Removes all the controls from the aggregation {@link #getPages pages}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllPages(): {};

        /**
            * Removes a page from the aggregation {@link #getPages pages}.
        */
        public removePage(vPage: number | string | QuickViewPage): QuickViewPage;

        /**
            * Unbinds aggregation {@link #getPages pages} from model data.
        */
        public unbindPages(): this;

    }
}