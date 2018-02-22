declare module 'sap/ui/core/ScrollBar' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IScrollBarSettings extends IControlSettings {
        vertical?: boolean;
        scrollPosition?: number;
        size?: sap.ui.core.CSSSize;
        contentSize?: sap.ui.core.CSSSize;
        steps?: number;
    }

    /**
    
    */
    export class ScrollBar extends Control {

        /**
            * Constructor for a new ScrollBar.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IScrollBarSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:scroll scroll} event of this `sap.ui.core.ScrollBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.ScrollBar` itself.
         * 
         * Scroll event.
        */
        attachScroll<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Actions are: Click on track, button, drag of thumb, or mouse wheel click. */
            action: sap.ui.core.ScrollBarAction, /* * Direction of scrolling: back (up) or forward (down). */
            forward: boolean, /* * Current Scroll position either in pixels or in steps. */
            newScrollPos: number, /* * Old Scroll position - can be in pixels or in steps. */
            oldScrollPos: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:scroll scroll} event of this `sap.ui.core.ScrollBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.ScrollBar` itself.
         * 
         * Scroll event.
        */
        attachScroll<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Actions are: Click on track, button, drag of thumb, or mouse wheel click. */
            action: sap.ui.core.ScrollBarAction, /* * Direction of scrolling: back (up) or forward (down). */
            forward: boolean, /* * Current Scroll position either in pixels or in steps. */
            newScrollPos: number, /* * Old Scroll position - can be in pixels or in steps. */
            oldScrollPos: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds the mouse wheel scroll event of the control that has the scrollbar to the scrollbar itself.
        */
        public bind(oOwnerDomRef: string): any;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:scroll scroll} event of this `sap.ui.core.ScrollBar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachScroll(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.core.ScrollBar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:scroll scroll} to attached listeners.
        */
        protected fireScroll(mParameters?: { action?: sap.ui.core.ScrollBarAction, forward?: boolean, newScrollPos?: number, oldScrollPos?: number, }): this;

        /**
            * Gets current value of property {@link #getContentSize contentSize}.
         * 
         * Size of the scrollable content (in pixels).
        */
        public getContentSize(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.core.ScrollBar.
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
            * Gets current value of property {@link #getScrollPosition scrollPosition}.
         * 
         * Scroll position in steps or pixels.
        */
        public getScrollPosition(): number;

        /**
            * Gets current value of property {@link #getSize size}.
         * 
         * Size of the Scrollbar (in pixels).
        */
        public getSize(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getSteps steps}.
         * 
         * Number of steps to scroll. Used if the size of the content is not known as the data is loaded dynamically.
        */
        public getSteps(): number;

        /**
            * Gets current value of property {@link #getVertical vertical}.
         * 
         * Orientation. Defines if the Scrollbar is vertical or horizontal.
         * 
         * Default value is `true`.
        */
        public getVertical(): boolean;

        /**
            * Page Down is used to scroll one page forward.
        */
        public pageDown(): any;

        /**
            * Page Up is used to scroll one page back.
        */
        public pageUp(): any;

        /**
            * Sets a new value for property {@link #getContentSize contentSize}.
         * 
         * Size of the scrollable content (in pixels).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContentSize(sContentSize: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getScrollPosition scrollPosition}.
         * 
         * Scroll position in steps or pixels.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setScrollPosition(iScrollPosition: number): this;

        /**
            * Sets a new value for property {@link #getSize size}.
         * 
         * Size of the Scrollbar (in pixels).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSize(sSize: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getSteps steps}.
         * 
         * Number of steps to scroll. Used if the size of the content is not known as the data is loaded dynamically.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSteps(iSteps: number): this;

        /**
            * Sets a new value for property {@link #getVertical vertical}.
         * 
         * Orientation. Defines if the Scrollbar is vertical or horizontal.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVertical(bVertical: boolean): this;

        /**
            * Unbinds the mouse wheel scroll event of the control that has the scrollbar
        */
        public unbind(oOwnerDomRef: string): any;

    }
}