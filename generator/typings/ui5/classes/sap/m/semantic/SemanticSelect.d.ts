declare module 'sap/m/semantic/SemanticSelect' {
    import { Event } from 'sap/ui/base/Event';
    import { Item } from 'sap/ui/core/Item';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { SemanticControl, ISemanticControlSettings } from 'sap/m/semantic/SemanticControl';

    export interface ISemanticSelectSettings extends ISemanticControlSettings {
        enabled?: boolean;
        selectedKey?: string;
    }

    /**
    
    */
    export class SemanticSelect extends SemanticControl {

        /**
            * Constructor for a new SemanticSelect.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISemanticSelectSettings);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: Item): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.semantic.SemanticSelect`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.semantic.SemanticSelect` itself.
         * 
         * See {@link sap.m.Select#event:change}
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            selectedItem: Item,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.semantic.SemanticSelect`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.semantic.SemanticSelect` itself.
         * 
         * See {@link sap.m.Select#event:change}
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The selected item. */
            selectedItem: Item,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getItems items} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItems(oBindingInfo: {}): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.m.semantic.SemanticSelect`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.semantic.SemanticSelect with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.semantic.SemanticControl.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { selectedItem?: Item, }): this;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * See {@link sap.m.Select#getEnabled}
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * See {@link sap.m.Select#getItems}
        */
        public getItems(): {};

        /**
            * Returns a metadata object for class sap.m.semantic.SemanticSelect.
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
            * ID of the element which is the current target of the association {@link #getSelectedItem selectedItem}, or `null`.
        */
        public getSelectedItem(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getSelectedKey selectedKey}.
         * 
         * See {@link sap.m.Select#getSelectedKey}
         * 
         * Default value is ``.
        */
        public getSelectedKey(): string;

        /**
            * Checks for the provided `sap.ui.core.Item` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: Item): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: Item, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | Item): Item;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * See {@link sap.m.Select#getEnabled}
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets the associated {@link #getSelectedItem selectedItem}.
        */
        public setSelectedItem(oSelectedItem: sap.ui.core.ID | Item): this;

        /**
            * Sets a new value for property {@link #getSelectedKey selectedKey}.
         * 
         * See {@link sap.m.Select#getSelectedKey}
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setSelectedKey(sSelectedKey: string): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

    }
}