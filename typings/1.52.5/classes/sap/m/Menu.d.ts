declare module 'sap/m/Menu' {
    import { Event } from 'sap/ui/base/Event';
    import { MenuItem } from 'sap/m/MenuItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IMenuSettings extends IControlSettings {
        title?: string;
    }

    /**
    
    */
    export class Menu extends Control {

        /**
            * Constructor for a new Menu.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMenuSettings);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: MenuItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.m.Menu`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Menu` itself.
         * 
         * Fired when the menu is closed.
        */
        attachClosed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.m.Menu`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Menu` itself.
         * 
         * Fired when the menu is closed.
        */
        attachClosed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelected itemSelected} event of this `sap.m.Menu`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Menu` itself.
         * 
         * Fired when a `MenuItem` is selected.
        */
        attachItemSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The <code>MenuItem</code> which was selected. */
            item: MenuItem,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelected itemSelected} event of this `sap.m.Menu`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Menu` itself.
         * 
         * Fired when a `MenuItem` is selected.
        */
        attachItemSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The <code>MenuItem</code> which was selected. */
            item: MenuItem,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getItems items} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItems(oBindingInfo: {}): this;

        /**
            * Closes the `Menu`.
        */
        public close(): any;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.m.Menu`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClosed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemSelected itemSelected} event of this `sap.m.Menu`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Menu with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:closed closed} to attached listeners.
        */
        protected fireClosed(mParameters?: {}): this;

        /**
            * Fires event {@link #event:itemSelected itemSelected} to attached listeners.
        */
        protected fireItemSelected(mParameters?: { item?: MenuItem, }): this;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Defines the items contained within this control.
        */
        public getItems(): {};

        /**
            * Returns a metadata object for class sap.m.Menu.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Gets current value of property {@link #getTitle title}.
         * 
         * Defines the `Menu` title.
        */
        public getTitle(): string;

        /**
            * Checks for the provided `sap.m.MenuItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: MenuItem): number;

        /**
            * Initializes the control.
        */
        protected init(): any;

        /**
            * Initializes the element instance after creation.
         * 
         * Applications must not call this hook method directly, it is called by the framework while the constructor of an element is executed.
         * 
         * Subclasses of Element should override this hook to implement any necessary initialization.
        */
        protected init(): any;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: MenuItem, iIndex: number): this;

        /**
            * Opens the `Menu` next to the given control.
        */
        public openBy(oControl: {}, bWithKeyboard: boolean): any;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | MenuItem): MenuItem;

        /**
            * Sets the title of the `Menu`.
        */
        public setTitle(sTitle: string): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }
}