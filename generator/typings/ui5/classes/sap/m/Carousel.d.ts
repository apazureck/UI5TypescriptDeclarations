declare module 'sap/m/Carousel' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ICarouselSettings extends IControlSettings {
        height?: sap.ui.core.CSSSize;
        width?: sap.ui.core.CSSSize;
        loop?: boolean;
        showPageIndicator?: boolean;
        pageIndicatorPlacement?: sap.m.PlacementType;
        showBusyIndicator?: boolean;
        busyIndicatorSize?: sap.ui.core.CSSSize;
        arrowsPlacement?: sap.m.CarouselArrowsPlacement;
    }

    /**
    
    */
    export class Carousel extends Control {

        /**
            * Constructor for a new Carousel.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ICarouselSettings);


        /**
            * Adds some page to the aggregation {@link #getPages pages}.
        */
        public addPage(oPage: Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:loadPage loadPage} event of this `sap.m.Carousel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Carousel` itself.
         * 
         * Carousel requires a new page to be loaded. This event may be used to fill the content of that page
        */
        attachLoadPage<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of the page which will be loaded */
            pageId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:loadPage loadPage} event of this `sap.m.Carousel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Carousel` itself.
         * 
         * Carousel requires a new page to be loaded. This event may be used to fill the content of that page
        */
        attachLoadPage<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of the page which will be loaded */
            pageId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:pageChanged pageChanged} event of this `sap.m.Carousel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Carousel` itself.
         * 
         * This event is fired after a carousel swipe has been completed. It is triggered both by physical swipe events and through API carousel manipulations such as calling 'next', 'previous' or 'setActivePageId' functions.
        */
        attachPageChanged<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of the page which was active before the page change. */
            oldActivePageId: string, /* * Id of the page which is active after the page change. */
            newActivePageId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:pageChanged pageChanged} event of this `sap.m.Carousel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Carousel` itself.
         * 
         * This event is fired after a carousel swipe has been completed. It is triggered both by physical swipe events and through API carousel manipulations such as calling 'next', 'previous' or 'setActivePageId' functions.
        */
        attachPageChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of the page which was active before the page change. */
            oldActivePageId: string, /* * Id of the page which is active after the page change. */
            newActivePageId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:unloadPage unloadPage} event of this `sap.m.Carousel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Carousel` itself.
         * 
         * Carousel does not display a page any longer and unloads it. This event may be used to clean up the content of that page.
        */
        attachUnloadPage<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of the page which will be unloaded */
            pageId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:unloadPage unloadPage} event of this `sap.m.Carousel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Carousel` itself.
         * 
         * Carousel does not display a page any longer and unloads it. This event may be used to clean up the content of that page.
        */
        attachUnloadPage<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of the page which will be unloaded */
            pageId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the pages in the aggregation {@link #getPages pages}.
        */
        public destroyPages(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:loadPage loadPage} event of this `sap.m.Carousel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLoadPage(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:pageChanged pageChanged} event of this `sap.m.Carousel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPageChanged(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:unloadPage unloadPage} event of this `sap.m.Carousel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUnloadPage(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Carousel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:loadPage loadPage} to attached listeners.
        */
        protected fireLoadPage(mParameters?: { pageId?: string, }): this;

        /**
            * Fires event {@link #event:pageChanged pageChanged} to attached listeners.
        */
        protected firePageChanged(mParameters?: { oldActivePageId?: string, newActivePageId?: string, }): this;

        /**
            * Fires event {@link #event:unloadPage unloadPage} to attached listeners.
        */
        protected fireUnloadPage(mParameters?: { pageId?: string, }): this;

        /**
            * ID of the element which is the current target of the association {@link #getActivePage activePage}, or `null`.
        */
        public getActivePage(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getArrowsPlacement arrowsPlacement}.
         * 
         * Defines where the carousel's arrows are placed. Default is `sap.m.CarouselArrowsPlacement.Content` used to place the arrows on the sides of the carousel. Alternatively `sap.m.CarouselArrowsPlacement.PageIndicator` can be used to place the arrows on the sides of the page indicator.
         * 
         * Default value is `Content`.
        */
        public getArrowsPlacement(): sap.m.CarouselArrowsPlacement;

        /**
            * Gets current value of property {@link #getBusyIndicatorSize busyIndicatorSize}.
         * 
         * Size of the busy indicators which can be displayed in the carousel.
         * 
         * Default value is `6em`.
        */
        public getBusyIndicatorSize(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The height of the carousel. Note that when a percentage value is used, the height of the surrounding container must be defined.
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getLoop loop}.
         * 
         * Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.
         * 
         * Default value is `false`.
        */
        public getLoop(): boolean;

        /**
            * Returns a metadata object for class sap.m.Carousel.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Gets current value of property {@link #getPageIndicatorPlacement pageIndicatorPlacement}.
         * 
         * Defines where the carousel's page indicator is displayed. Possible values are sap.m.PlacementType.Top, sap.m.PlacementType.Bottom. Other values are ignored and the default value will be applied. The default value is sap.m.PlacementType.Bottom.
         * 
         * Default value is `Bottom`.
        */
        public getPageIndicatorPlacement(): sap.m.PlacementType;

        /**
            * Gets content of aggregation {@link #getPages pages}.
         * 
         * The content which the carousel displays.
        */
        public getPages(): {};

        /**
            * Gets current value of property {@link #getShowBusyIndicator showBusyIndicator}.
         * 
         * Show or hide busy indicator in the carousel when loading pages after swipe.
         * 
         * Default value is `true`.
        */
        public getShowBusyIndicator(): boolean;

        /**
            * Gets current value of property {@link #getShowPageIndicator showPageIndicator}.
         * 
         * Show or hide carousel's page indicator.
         * 
         * Default value is `true`.
        */
        public getShowPageIndicator(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width of the carousel. Note that when a percentage value is used, the height of the surrounding container must be defined.
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
            * Call this method to display the next page (corresponds to a swipe right). Returns 'this' for method chaining.
        */
        public next(): this;

        /**
            * Call this method to display the previous page (corresponds to a swipe left). Returns 'this' for method chaining.
        */
        public previous(): this;

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
            * Sets the associated {@link #getActivePage activePage}.
        */
        public setActivePage(oActivePage: sap.ui.core.ID | Control): this;

        /**
            * Sets a new value for property {@link #getArrowsPlacement arrowsPlacement}.
         * 
         * Defines where the carousel's arrows are placed. Default is `sap.m.CarouselArrowsPlacement.Content` used to place the arrows on the sides of the carousel. Alternatively `sap.m.CarouselArrowsPlacement.PageIndicator` can be used to place the arrows on the sides of the page indicator.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Content`.
        */
        public setArrowsPlacement(sArrowsPlacement: sap.m.CarouselArrowsPlacement): this;

        /**
            * Sets a new value for property {@link #getBusyIndicatorSize busyIndicatorSize}.
         * 
         * Size of the busy indicators which can be displayed in the carousel.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `6em`.
        */
        public setBusyIndicatorSize(sBusyIndicatorSize: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The height of the carousel. Note that when a percentage value is used, the height of the surrounding container must be defined.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getLoop loop}.
         * 
         * Defines whether the carousel should loop, i.e show the first page after the last page is reached and vice versa.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setLoop(bLoop: boolean): this;

        /**
            * Sets a new value for property {@link #getPageIndicatorPlacement pageIndicatorPlacement}.
         * 
         * Defines where the carousel's page indicator is displayed. Possible values are sap.m.PlacementType.Top, sap.m.PlacementType.Bottom. Other values are ignored and the default value will be applied. The default value is sap.m.PlacementType.Bottom.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Bottom`.
        */
        public setPageIndicatorPlacement(sPageIndicatorPlacement: sap.m.PlacementType): this;

        /**
            * Sets a new value for property {@link #getShowBusyIndicator showBusyIndicator}.
         * 
         * Show or hide busy indicator in the carousel when loading pages after swipe.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowBusyIndicator(bShowBusyIndicator: boolean): this;

        /**
            * Sets a new value for property {@link #getShowPageIndicator showPageIndicator}.
         * 
         * Show or hide carousel's page indicator.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowPageIndicator(bShowPageIndicator: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The width of the carousel. Note that when a percentage value is used, the height of the surrounding container must be defined.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}