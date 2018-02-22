declare module 'sap/ui/unified/MenuItemBase' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Menu } from 'sap/ui/unified/Menu';
    import { RenderManager } from 'sap/ui/core/RenderManager';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IMenuItemBaseSettings extends IElementSettings {
        enabled?: boolean;
        visible?: boolean;
        startsSection?: boolean;
    }

    /**
    
    */
    export class MenuItemBase extends Element {

        /**
            * Abstract base class `MenuItemBase` for menu item elements. Please use concrete subclasses.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMenuItemBaseSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.MenuItemBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.MenuItemBase` itself.
         * 
         * Fired when the item is selected by the user. ** Note: ** The event is also available for items which have a submenu. In general, applications must not handle event in this case because the user selection opens the sub menu.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current item */
            item: MenuItemBase,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.MenuItemBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.MenuItemBase` itself.
         * 
         * Fired when the item is selected by the user. ** Note: ** The event is also available for items which have a submenu. In general, applications must not handle event in this case because the user selection opens the sub menu.
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current item */
            item: MenuItemBase,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys the submenu in the aggregation {@link #getSubmenu submenu}.
        */
        public destroySubmenu(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.MenuItemBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.unified.MenuItemBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { item?: MenuItemBase, }): this;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * When an item is disabled the item can not be selected by the user. The enabled property of the item has no effect when the menu of the item is disabled ({@link sap.ui.unified.Menu#getEnabled Menu#getEnabled}).
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Returns a metadata object for class sap.ui.unified.MenuItemBase.
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
            * Gets current value of property {@link #getStartsSection startsSection}.
         * 
         * Defines whether a visual separator should be rendered before the item. ** Note: ** If an item is invisible also the separator of this item is not shown.
         * 
         * Default value is `false`.
        */
        public getStartsSection(): boolean;

        /**
            * Gets content of aggregation {@link #getSubmenu submenu}.
         * 
         * An optional submenu of the item which is opened when the item is selected by the user.
        */
        public getSubmenu(): Menu;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Invisible items do not appear in the menu.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Changes the visual hover state of the menu item.
         * 
         * Subclasses may override this function.
        */
        protected hover(bHovered: boolean, oMenu: Menu): any;

        /**
            * Informs the item that the item HTML is now applied to the DOM.
         * 
         * Subclasses may override this function.
        */
        protected onAfterRendering(): any;

        /**
            * Event handler which is called whenever the submenu of the item is opened or closed.
         * 
         * Subclasses may override this function.
        */
        protected onSubmenuToggle(bOpened: boolean): any;

        /**
            * Produces the HTML of an item and writes it to render-output-buffer during the rendering of the corresponding menu.
         * 
         * Subclasses may override this function.
        */
        protected render(oRenderManager: RenderManager, oItem: this, oMenu: Menu): any;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * When an item is disabled the item can not be selected by the user. The enabled property of the item has no effect when the menu of the item is disabled ({@link sap.ui.unified.Menu#getEnabled Menu#getEnabled}).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getStartsSection startsSection}.
         * 
         * Defines whether a visual separator should be rendered before the item. ** Note: ** If an item is invisible also the separator of this item is not shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setStartsSection(bStartsSection: boolean): this;

        /**
            * Sets the aggregated {@link #getSubmenu submenu}.
        */
        public setSubmenu(oSubmenu: Menu): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Invisible items do not appear in the menu.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }
}