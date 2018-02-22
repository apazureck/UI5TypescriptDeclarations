declare module 'sap/m/SegmentedButtonItem' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Item, IItemSettings } from 'sap/ui/core/Item';

    export interface ISegmentedButtonItemSettings extends IItemSettings {
        icon?: string;
        visible?: boolean;
        width?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class SegmentedButtonItem extends Item {

        /**
            * Constructor for a new `SegmentedButtonItem`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISegmentedButtonItemSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.SegmentedButtonItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SegmentedButtonItem` itself.
         * 
         * Fires when the user clicks on an individual button.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.SegmentedButtonItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SegmentedButtonItem` itself.
         * 
         * Fires when the user clicks on an individual button.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.SegmentedButtonItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Cleanup
        */
        protected exit(): any;

        /**
            * Creates a new subclass of class sap.m.SegmentedButtonItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * The icon, which belongs to the button. This can be a URI to an image or an icon font URI.
        */
        public getIcon(): string;

        /**
            * Returns a metadata object for class sap.m.SegmentedButtonItem.
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
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Whether the button should be visible on the screen. If set to false, a placeholder is rendered instead of the real button.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Sets the width of the buttons.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Called once during the element's initialization
        */
        protected init(): any;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * The icon, which belongs to the button. This can be a URI to an image or an icon font URI.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: string): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Whether the button should be visible on the screen. If set to false, a placeholder is rendered instead of the real button.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Sets the width of the buttons.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}