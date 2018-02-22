declare module 'sap/ui/commons/CalloutBase' {
    import { Event } from 'sap/ui/base/Event';
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { TooltipBase, ITooltipBaseSettings } from 'sap/ui/core/TooltipBase';

    export interface ICalloutBaseSettings extends ITooltipBaseSettings {
    }

    /**
    
    */
    export class CalloutBase extends TooltipBase {

        /**
            * Constructor for a new CalloutBase.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ICalloutBaseSettings);


        /**
            * Adjust position of the already opened Callout window. Call this method each time when the size of the opened Callout window may be changed due to new or changed contents.
        */
        public adjustPosition(): any;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * Event is fired before a Callout is displayed. Call the preventDefault method of the event object to postpone opening. Application may use this event to start asynchronous Ajax call to load the Callout content
        */
        attachBeforeOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Parent control that has this Callout as a tooltip */
            parent: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * Event is fired before a Callout is displayed. Call the preventDefault method of the event object to postpone opening. Application may use this event to start asynchronous Ajax call to load the Callout content
        */
        attachBeforeOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Parent control that has this Callout as a tooltip */
            parent: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * Event is fired when the Callout window is closed.
        */
        attachClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:close close} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * Event is fired when the Callout window is closed.
        */
        attachClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * The event is fired when the popup is opened.
        */
        attachOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Parent control that has this Callout as a tooltip */
            parent: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:open open} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * The event is fired when the popup is opened.
        */
        attachOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Parent control that has this Callout as a tooltip */
            parent: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * Is fired when the Callout has been opened
        */
        attachOpened<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:opened opened} event of this `sap.ui.commons.CalloutBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.CalloutBase` itself.
         * 
         * Is fired when the Callout has been opened
        */
        attachOpened<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Closes Callout
        */
        public close(): any;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeOpen beforeOpen} event of this `sap.ui.commons.CalloutBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:close close} event of this `sap.ui.commons.CalloutBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:open open} event of this `sap.ui.commons.CalloutBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:opened opened} event of this `sap.ui.commons.CalloutBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachOpened(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.CalloutBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.TooltipBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:beforeOpen beforeOpen} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireBeforeOpen(mParameters?: { parent?: Control, }): boolean;

        /**
            * Fires event {@link #event:close close} to attached listeners.
        */
        protected fireClose(mParameters?: {}): this;

        /**
            * Fires event {@link #event:open open} to attached listeners.
        */
        protected fireOpen(mParameters?: { parent?: Control, }): this;

        /**
            * Fires event {@link #event:opened opened} to attached listeners.
        */
        protected fireOpened(mParameters?: {}): this;

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
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.commons.CalloutBase.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Set position of the Callout window relative to the parent control. This function automatically calculates and sets the correct offset, use it instead of `setMyPosition/setAtPosition`.
        */
        public setPosition(myPosition: sap.ui.core.Dock, atPosition: sap.ui.core.Dock): this;

    }
}