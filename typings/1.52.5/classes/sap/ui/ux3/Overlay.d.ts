declare module 'sap/ui/ux3/Overlay' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IOverlaySettings extends IControlSettings {
        openButtonVisible?: boolean;
        closeButtonVisible?: boolean;
    }

    /**
    
    */
    export class Overlay extends Control {

        /**
            * Constructor for a new Overlay.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IOverlaySettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.ux3.Overlay`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         * 
         * Event is fired when the Overlay starts closing.
        */
        attachClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the Overlay instance. */
            id: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.ux3.Overlay`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         * 
         * Event is fired when the Overlay starts closing.
        */
        attachClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the Overlay instance. */
            id: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.ux3.Overlay`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         * 
         * Event is fired when the Overlay is closed.
        */
        attachClosed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the Overlay instance. */
            id: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.ux3.Overlay`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         * 
         * Event is fired when the Overlay is closed.
        */
        attachClosed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the Overlay instance. */
            id: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.ux3.Overlay`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         * 
         * Event is fired when the Overlay is opened.
        */
        attachOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the Overlay instance */
            id: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.ux3.Overlay`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         * 
         * Event is fired when the Overlay is opened.
        */
        attachOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the Overlay instance */
            id: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:openNew openNew} event of this `sap.ui.ux3.Overlay`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         * 
         * Event is fired when the 'Open' button of the Overlay is clicked.
        */
        attachOpenNew<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the Overlay instance. */
            id: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:openNew openNew} event of this `sap.ui.ux3.Overlay`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Overlay` itself.
         * 
         * Event is fired when the 'Open' button of the Overlay is clicked.
        */
        attachOpenNew<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the Overlay instance. */
            id: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Closes the Overlay.
        */
        public close(): any;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.ux3.Overlay`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.ux3.Overlay`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClosed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:open open} event of this `sap.ui.ux3.Overlay`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:openNew openNew} event of this `sap.ui.ux3.Overlay`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachOpenNew(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.Overlay with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:close close} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireClose(mParameters?: { id?: string, }): boolean;

        /**
            * Fires event {@link #event:closed closed} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireClosed(mParameters?: { id?: string, }): boolean;

        /**
            * Fires event {@link #event:open open} to attached listeners.
        */
        protected fireOpen(mParameters?: { id?: string, }): this;

        /**
            * Fires event {@link #event:openNew openNew} to attached listeners.
        */
        protected fireOpenNew(mParameters?: { id?: string, }): this;

        /**
            * Gets current value of property {@link #getCloseButtonVisible closeButtonVisible}.
         * 
         * Defines whether the 'Close' button shall be visible.
         * 
         * Default value is `true`.
        */
        public getCloseButtonVisible(): boolean;

        /**
            * Returns a metadata object for class sap.ui.ux3.Overlay.
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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getOpenButtonVisible openButtonVisible}.
         * 
         * Defines whether the 'Open' button shall be visible.
         * 
         * Default value is `true`.
        */
        public getOpenButtonVisible(): boolean;

        /**
            * Checks whether Overlay is open.
        */
        public isOpen(): boolean;

        /**
            * Opens the Overlay.
        */
        public open(initialFocusId: string): any;

        /**
            * Sets a new value for property {@link #getCloseButtonVisible closeButtonVisible}.
         * 
         * Defines whether the 'Close' button shall be visible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setCloseButtonVisible(bCloseButtonVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getOpenButtonVisible openButtonVisible}.
         * 
         * Defines whether the 'Open' button shall be visible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setOpenButtonVisible(bOpenButtonVisible: boolean): this;

    }
}