declare module 'sap/ui/table/RowActionItem' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IRowActionItemSettings extends IElementSettings {
        icon?: sap.ui.core.URI;
        visible?: boolean;
        text?: string;
        type?: sap.ui.table.RowActionType;
    }

    /**
    
    */
    export class RowActionItem extends Element {

        /**
            * Constructor for a new RowActionItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IRowActionItemSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.table.RowActionItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.RowActionItem` itself.
         * 
         * The `press` is fired when the user triggers the corresponding action.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.table.RowActionItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.table.RowActionItem` itself.
         * 
         * The `press` is fired when the user triggers the corresponding action.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.table.RowActionItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.table.RowActionItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * The icon of the item.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.table.RowActionItem.
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
            * Gets current value of property {@link #getText text}.
         * 
         * The text of the item. It is used as tooltip and for accessibility purposes.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * The type of the item. Setting the type ensures default values for the properties `icon` and `text`. If an icon or text is set explicitly this setting is used.
         * 
         * Default value is `Custom`.
        */
        public getType(): sap.ui.table.RowActionType;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Whether the item should be visible on the screen.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * The icon of the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The text of the item. It is used as tooltip and for accessibility purposes.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * The type of the item. Setting the type ensures default values for the properties `icon` and `text`. If an icon or text is set explicitly this setting is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Custom`.
        */
        public setType(sType: sap.ui.table.RowActionType): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Whether the item should be visible on the screen.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }
}