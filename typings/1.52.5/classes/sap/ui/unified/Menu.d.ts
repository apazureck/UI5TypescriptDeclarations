declare module 'sap/ui/unified/Menu' {
    import { Event } from 'sap/ui/base/Event';
    import { MenuItemBase } from 'sap/ui/unified/MenuItemBase';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element } from 'sap/ui/core/Element';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IMenuSettings extends IControlSettings {
        enabled?: boolean;
        ariaDescription?: string;
        maxVisibleItems?: number;
        pageSize?: number;
    }

    /**
    
    */
    export class Menu extends Control {

        /**
            * Constructor for a new Menu control.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMenuSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: MenuItemBase): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.ui.unified.Menu`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.Menu` itself.
         * 
         * Fired on the root menu of a menu hierarchy whenever a user selects an item within the menu or within one of its direct or indirect submenus. ** Note: ** There is also a select event available for each single menu item. This event and the event of the menu items are redundant.
        */
        attachItemSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The action (item) which was selected by the user. */
            item: MenuItemBase,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.ui.unified.Menu`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.Menu` itself.
         * 
         * Fired on the root menu of a menu hierarchy whenever a user selects an item within the menu or within one of its direct or indirect submenus. ** Note: ** There is also a select event available for each single menu item. This event and the event of the menu items are redundant.
        */
        attachItemSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The action (item) which was selected by the user. */
            item: MenuItemBase,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Closes the menu.
        */
        public close(): any;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.ui.unified.Menu`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.unified.Menu with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
        */
        protected fireItemSelect(mParameters?: { item?: MenuItemBase, }): this;

        /**
            * Gets current value of property {@link #getAriaDescription ariaDescription}.
         * 
         * Accessible label / description of the menu for assistive technologies like screenreaders.
        */
        public getAriaDescription(): string;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * When a menu is disabled none of its items can be selected by the user. The enabled property of an item (@link sap.ui.unified.MenuItemBase#getEnabled) has no effect when the menu of the item is disabled.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * The available actions to be displayed as items of the menu.
        */
        public getItems(): {};

        /**
            * Gets current value of property {@link #getMaxVisibleItems maxVisibleItems}.
         * 
         * The maximum number of items which are displayed before an overflow mechanism takes effect. A value smaller than 1 means an infinite number of visible items. The overall height of the menu is limited by the height of the screen. If the maximum possible height is reached, an overflow takes effect, even if the maximum number of visible items is not yet reached.
         * 
         * Default value is `0`.
        */
        public getMaxVisibleItems(): number;

        /**
            * Returns a metadata object for class sap.ui.unified.Menu.
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
            * Gets current value of property {@link #getPageSize pageSize}.
         * 
         * The keyboard can be used to navigate through the items of a menu. Beside the arrow keys for single steps and the * Home * / * End * keys for jumping to the first / last item, the * Page Up * / * Page Down * keys can be used to jump an arbitrary number of items up or down. This number can be defined via the `pageSize` property. For values smaller than 1, paging behaves in a similar way to when using the * Home * / * End * keys. If the value equals 1, the paging behavior is similar to that of the arrow keys.
         * 
         * Default value is `5`.
        */
        public getPageSize(): number;

        /**
            * Checks for the provided `sap.ui.unified.MenuItemBase` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: MenuItemBase): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: MenuItemBase, iIndex: number): this;

        /**
            * Opens the menu at the specified position.
         * 
         * The position of the menu is defined relative to an element in the visible DOM by specifying the docking location of the menu and of the related element.
         * 
         * See {@link sap.ui.core.Popup#open Popup#open} for further details about popup positioning.
        */
        public open(bWithKeyboard: boolean, oOpenerRef: Element | any, my: sap.ui.core.Dock, at: sap.ui.core.Dock, of: Element | any, offset?: string, collision?: sap.ui.core.Collision): any;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | MenuItemBase): MenuItemBase;

        /**
            * Sets a new value for property {@link #getAriaDescription ariaDescription}.
         * 
         * Accessible label / description of the menu for assistive technologies like screenreaders.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAriaDescription(sAriaDescription: string): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * When a menu is disabled none of its items can be selected by the user. The enabled property of an item (@link sap.ui.unified.MenuItemBase#getEnabled) has no effect when the menu of the item is disabled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getMaxVisibleItems maxVisibleItems}.
         * 
         * The maximum number of items which are displayed before an overflow mechanism takes effect. A value smaller than 1 means an infinite number of visible items. The overall height of the menu is limited by the height of the screen. If the maximum possible height is reached, an overflow takes effect, even if the maximum number of visible items is not yet reached.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMaxVisibleItems(iMaxVisibleItems: number): this;

        /**
            * Sets a new value for property {@link #getPageSize pageSize}.
         * 
         * The keyboard can be used to navigate through the items of a menu. Beside the arrow keys for single steps and the * Home * / * End * keys for jumping to the first / last item, the * Page Up * / * Page Down * keys can be used to jump an arbitrary number of items up or down. This number can be defined via the `pageSize` property. For values smaller than 1, paging behaves in a similar way to when using the * Home * / * End * keys. If the value equals 1, the paging behavior is similar to that of the arrow keys.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `5`.
        */
        public setPageSize(iPageSize: number): this;

    }
}