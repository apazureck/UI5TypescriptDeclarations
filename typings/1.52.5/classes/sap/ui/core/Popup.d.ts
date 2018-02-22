declare module 'sap/ui/core/Popup' {
    import { Event } from 'sap/ui/base/Event';
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element } from 'sap/ui/core/Element';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface IPopupSettings extends IManagedObjectSettings {
    }

    /**
    
    */
    export class Popup extends ManagedObject {

        /**
            * Creates an instance of `sap.ui.core.Popup` that can be used to open controls as a Popup, visually appearing in front of other controls.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(oContent: Control | Element | any, bModal: boolean, bShadow: boolean, bAutoClose: boolean);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.core.Popup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.Popup` itself.
        */
        attachClosed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.core.Popup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.Popup` itself.
        */
        attachClosed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.core.Popup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.Popup` itself.
        */
        attachOpened<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.core.Popup`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.Popup` itself.
        */
        attachOpened<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Closes the popup.
         * 
         * If the Popup is already closed or in the process of closing, calling this method does nothing. If the Popup is in the process of being opened and closed with a duration of 0, calling this method does nothing. If the Popup is in the process of being opened and closed with an animation duration, the animation will be chained, but this functionality is dangerous, may lead to inconsistent behavior and is thus not recommended and may even be removed.
        */
        public close(iDuration?: number): any;

        /**
            * Closes and destroys this instance of Popup. Does not destroy the hosted content.
        */
        public destroy(): any;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.core.Popup`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClosed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:opened opened} event of this `sap.ui.core.Popup`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachOpened(fnFunction: (() => any), oListener: {}): this;

        /**
            * When the Popup is being destroyed all corresponding references should be deleted as well to prevent any memory leaks.
        */
        public exit(): any;

        /**
            * Creates a new subclass of class sap.ui.core.Popup with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:closed closed} to attached listeners.
        */
        protected fireClosed(mParameters?: {}): this;

        /**
            * Fires event {@link #event:opened opened} to attached listeners.
        */
        protected fireOpened(mParameters?: {}): this;

        /**
            * Determines whether the pop-up should auto closes or not.
        */
        public getAutoClose(): boolean;

        /**
            * Returns this Popup's content.
        */
        public getContent(): Control | any;

        /**
            * This returns true/false if the default followOf method should be used. If a separate followOf-handler was previously added the correspodning function is returned.
        */
        public getFollowOf(): boolean | (() => any);

        /**
            * Returns the last z-index that has been handed out. does not increase the internal z-index counter.
        */
        public getLastZIndex(): number;

        /**
            * Returns the last z-index that has been handed out. does not increase the internal z-index counter.
        */
        public static getLastZIndex(): number;

        /**
            * Returns a metadata object for class sap.ui.core.Popup.
        */
        public static getMetadata(): Metadata | any;

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
            * Returns the value if a Popup is of modal type
        */
        public getModal(): any;

        /**
            * Returns the next available z-index on top of the existing/previous popups. Each call increases the internal z-index counter and the returned z-index.
        */
        public static getNextZIndex(): number;

        /**
            * Returns the next available z-index on top of the existing/previous popups. Each call increases the internal z-index counter and the returned z-index.
        */
        public getNextZIndex(): number;

        /**
            * Returns whether the Popup is currently open, closed, or transitioning between these states.
        */
        public getOpenState(): sap.ui.core.OpenState;

        /**
            * Returns whether the Popup is currently open (this includes opening and closing animations).
        */
        public isOpen(): boolean;

        /**
            * Opens the popup's content at the position either specified here or beforehand via {@link #setPosition}. Content must be capable of being positioned via "position:absolute;" All parameters are optional (open() may be called without any parameters). iDuration may just be omitted, but if any of "at", "of", "offset", "collision" is given, also the preceding positioning parameters ("my", at",...) must be given.
         * 
         * If the Popup's OpenState is different from "CLOSED" (i.e. if the Popup is already open, opening or closing), the call is ignored.
        */
        public open(iDuration?: number, my?: sap.ui.core.Popup.Dock, at?: sap.ui.core.Popup.Dock, of?: string | Element | any | any | jQuery.Event, offset?: string, collision?: string, followOf?: boolean): any;

        /**
            * Sets the animation functions to use for opening and closing the Popup. Any null value will be ignored and not change the respective animation function. When called, the animation functions receive three parameters: - the jQuery object wrapping the DomRef of the popup - the requested animation duration - a function that MUST be called once the animation has completed
        */
        public setAnimations(fnOpen: (() => any), fnClose: (() => any)): this;

        /**
            * Used to specify whether the Popup should close as soon as - for non-touch environment: the focus leaves - for touch environment: user clicks the area which is outside the popup itself, the dom elemnt which popup aligns to (except document), and one of the autoCloseAreas set by calling setAutoCloseAreas.
        */
        public setAutoClose(bAutoClose: boolean): this;

        /**
            * Sets the additional areas in the page that are considered part of the Popup when autoclose is enabled. - non-touch environment: if the focus leaves the Popup but immediately enters one of these areas, the Popup does NOT close. - touch environment: if user clicks one of these areas, the Popup does NOT close.
        */
        public setAutoCloseAreas(aAutoCloseAreas: {} | {} | {}): this;

        /**
            * Sets the content this instance of the Popup should render. Content must be capable of being positioned via position:absolute;
        */
        public setContent(oContent: Control | any): this;

        /**
            * Sets the durations for opening and closing animations. Null values and values < 0 are ignored. A duration of 0 means no animation. Default value is "fast" which is the jQuery constant for "200 ms".
        */
        public setDurations(iOpenDuration: number, iCloseDuration: number): this;

        /**
            * This enabled/disables the Popup to follow its opening reference. If the Popup is open and a followOf should be set the corresponding listener will be attached.
        */
        public setFollowOf(followOf: boolean | (() => any) | any): any;

        /**
            * Sets the ID of the element that should be focused once the popup opens. If the given ID is the ID of an existing Control, this Control's focusDomRef will be focused instead, which may be an HTML element with a different ID (usually a sub-element inside the Control). If no existing element ID is supplied and the Popup is modal or auto-close, the Popup will instead focus the first focusable element.
        */
        public setInitialFocusId(sId: string): any;

        /**
            * Set an initial z-index that should be used by all Popup so all Popups start at least with the set z-index. If the given z-index is lower than any current available z-index the highest z-index will be used.
        */
        public static setInitialZIndex(iInitialZIndex: number): any;

        /**
            * Used to specify whether the Popup should be modal. A modal popup will put some fading "block layer" over the background and prevent attempts to put the focus outside/below the popup. Setting this while the popup is open will change "block layer" immediately.
        */
        public setModal(bModal: boolean, sModalCSSClass?: string): this;

        /**
            * Sets the position of the Popup (if you refer to a Control as anchor then do not use the DOMRef of the control which might change after re-renderings). Optional parameters can only be omitted when all subsequent parameters are omitted as well.
        */
        public setPosition(my: sap.ui.core.Popup.Dock, at: sap.ui.core.Popup.Dock | {}, of?: string | Element | any | any | jQuery.Event, offset?: string, collision?: string): this;

        /**
            * Determines whether the Popup should have a shadow (in supporting browsers). This also affects a currently open popup.
        */
        public setShadow(bShowShadow: boolean): this;

    }
}