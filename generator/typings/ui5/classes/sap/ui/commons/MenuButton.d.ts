declare module 'sap/ui/commons/MenuButton' {
    import { Event } from 'sap/ui/base/Event';
    import { MenuItemBase } from 'sap/ui/unified/MenuItemBase';
    import { MenuItemBase as sap_ui_commons_MenuItemBase } from 'sap/ui/commons/MenuItemBase';
    import { Menu } from 'sap/ui/unified/Menu';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Button, IButtonSettings } from 'sap/ui/commons/Button';

    export interface IMenuButtonSettings extends IButtonSettings {
        dockButton?: string;
        dockMenu?: string;
    }

    /**
    
    */
    export class MenuButton extends Button {

        /**
            * Constructor for a new MenuButton.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMenuButtonSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelected itemSelected} event of this `sap.ui.commons.MenuButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.MenuButton` itself.
         * 
         * Event that is fired when a menu item is selected by the user
        */
        attachItemSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the selected item */
            itemId: string, /* * The selected item */
            item: MenuItemBase,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelected itemSelected} event of this `sap.ui.commons.MenuButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.MenuButton` itself.
         * 
         * Event that is fired when a menu item is selected by the user
        */
        attachItemSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The ID of the selected item */
            itemId: string, /* * The selected item */
            item: MenuItemBase,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'press' event of this `sap.ui.commons.MenuButton`.
         * 
         * 
         * Event is fired when an item from the menu was selected.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The id of the selected item */
            itemId: string, /* * The selected item */
            item: sap_ui_commons_MenuItemBase,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'press' event of this `sap.ui.commons.MenuButton`.
         * 
         * 
         * Event is fired when an item from the menu was selected.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The id of the selected item */
            itemId: string, /* * The selected item */
            item: sap_ui_commons_MenuItemBase,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys the menu in the aggregation named `menu`.
        */
        public destroyMenu(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemSelected itemSelected} event of this `sap.ui.commons.MenuButton`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the 'press' event of this `sap.ui.commons.MenuButton`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.MenuButton with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.Button.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:itemSelected itemSelected} to attached listeners.
        */
        protected fireItemSelected(mParameters?: { itemId?: string, item?: MenuItemBase, }): this;

        /**
            * Fire event press to attached listeners.
        */
        protected firePress(mArguments?: any): this;

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getDockButton dockButton}.
         * 
         * The position / edge (see sap.ui.core.Popup.Dock) of the button where the menu is docked. Default is 'begin bottom'.
        */
        public getDockButton(): string;

        /**
            * Gets current value of property {@link #getDockMenu dockMenu}.
         * 
         * The position / edge (see sap.ui.core.Popup.Dock) of the menu which is docked to the button. Default is 'begin top'.
        */
        public getDockMenu(): string;

        /**
            * Gets content of aggregation {@link #getMenu menu}.
         * 
         * Menu that shall be opened when the button is clicked
        */
        public getMenu(): Menu;

        /**
            * Returns a metadata object for class sap.ui.commons.MenuButton.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Sets a new value for property {@link #getDockButton dockButton}.
         * 
         * The position / edge (see sap.ui.core.Popup.Dock) of the button where the menu is docked. Default is 'begin bottom'.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDockButton(sDockButton: string): this;

        /**
            * Sets a new value for property {@link #getDockMenu dockMenu}.
         * 
         * The position / edge (see sap.ui.core.Popup.Dock) of the menu which is docked to the button. Default is 'begin top'.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDockMenu(sDockMenu: string): this;

        /**
            * Setter for the aggregated `menu`.
        */
        public setMenu(oMenu: Menu): this;

    }
}