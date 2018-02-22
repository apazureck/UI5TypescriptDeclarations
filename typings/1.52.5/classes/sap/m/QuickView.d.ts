declare module 'sap/m/QuickView' {
    import { Event } from 'sap/ui/base/Event';
    import { Control } from 'sap/ui/core/Control';
    import { Button } from 'sap/m/Button';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { QuickViewBase, IQuickViewBaseSettings } from 'sap/m/QuickViewBase';

    export interface IQuickViewSettings extends IQuickViewBaseSettings {
        placement?: sap.m.PlacementType;
        width?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class QuickView extends QuickViewBase {

        /**
            * Constructor for a new QuickView.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IQuickViewSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterClose afterClose} event of this `sap.m.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.QuickView` itself.
         * 
         * This event fires after the QuickView is closed.
        */
        attachAfterClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter refers to the control, which opens the QuickView. */
            openBy: Control, /* * This parameter contains the control, which triggers the close of the QuickView. It is undefined when running on desktop or tablet. */
            origin: Button,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterClose afterClose} event of this `sap.m.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.QuickView` itself.
         * 
         * This event fires after the QuickView is closed.
        */
        attachAfterClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter refers to the control, which opens the QuickView. */
            openBy: Control, /* * This parameter contains the control, which triggers the close of the QuickView. It is undefined when running on desktop or tablet. */
            origin: Button,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.QuickView` itself.
         * 
         * This event fires after the QuickView is opened.
        */
        attachAfterOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter refers to the control, which opens the QuickView. */
            openBy: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.QuickView` itself.
         * 
         * This event fires after the QuickView is opened.
        */
        attachAfterOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter refers to the control, which opens the QuickView. */
            openBy: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.QuickView` itself.
         * 
         * This event fires before the QuickView is closed.
        */
        attachBeforeClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter refers to the control, which opens the QuickView. */
            openBy: Control, /* * This parameter contains the control, which triggers the close of the QuickView. It is undefined when running on desktop or tablet. */
            origin: Button,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.QuickView` itself.
         * 
         * This event fires before the QuickView is closed.
        */
        attachBeforeClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter refers to the control, which opens the QuickView. */
            openBy: Control, /* * This parameter contains the control, which triggers the close of the QuickView. It is undefined when running on desktop or tablet. */
            origin: Button,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.QuickView` itself.
         * 
         * This event fires before the QuickView is opened.
        */
        attachBeforeOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter refers to the control, which opens the QuickView. */
            openBy: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.QuickView` itself.
         * 
         * This event fires before the QuickView is opened.
        */
        attachBeforeOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter refers to the control, which opens the QuickView. */
            openBy: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterClose afterClose} event of this `sap.m.QuickView`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterOpen afterOpen} event of this `sap.m.QuickView`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeClose beforeClose} event of this `sap.m.QuickView`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeOpen beforeOpen} event of this `sap.m.QuickView`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.QuickView with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.QuickViewBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:afterClose afterClose} to attached listeners.
        */
        protected fireAfterClose(mParameters?: { openBy?: Control, origin?: Button, }): this;

        /**
            * Fires event {@link #event:afterOpen afterOpen} to attached listeners.
        */
        protected fireAfterOpen(mParameters?: { openBy?: Control, }): this;

        /**
            * Fires event {@link #event:beforeClose beforeClose} to attached listeners.
        */
        protected fireBeforeClose(mParameters?: { openBy?: Control, origin?: Button, }): this;

        /**
            * Fires event {@link #event:beforeOpen beforeOpen} to attached listeners.
        */
        protected fireBeforeOpen(mParameters?: { openBy?: Control, }): this;

        /**
            * Returns a metadata object for class sap.m.QuickView.
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
            * Gets current value of property {@link #getPlacement placement}.
         * 
         * This property is reused from sap.m.Popover and only takes effect when running on desktop or tablet. Please refer the documentation of the placement property of sap.m.Popover.
         * 
         * Default value is `Right`.
        */
        public getPlacement(): sap.m.PlacementType;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width of the QuickView. The property takes effect only when running on desktop or tablet.
         * 
         * Default value is `320px`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Opens the QuickView.
        */
        public openBy(oControl: Control): this;

        /**
            * The method sets placement position of the QuickView.
        */
        public setPlacement(sPlacement: sap.m.PlacementType): this;

        /**
            * The method sets the width of the QuickView. Works only on desktop or tablet.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}