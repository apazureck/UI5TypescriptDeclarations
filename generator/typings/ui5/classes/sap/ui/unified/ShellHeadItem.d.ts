declare module 'sap/ui/unified/ShellHeadItem' {
    import { Event } from 'sap/ui/base/Event';
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IShellHeadItemSettings extends IElementSettings {
        startsSection?: boolean;
        showSeparator?: boolean;
        selected?: boolean;
        toggleEnabled?: boolean;
        showMarker?: boolean;
        icon?: sap.ui.core.URI;
        visible?: boolean;
    }

    /**
    
    */
    export class ShellHeadItem extends Element {

        /**
            * Constructor for a new ShellHeadItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IShellHeadItemSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.unified.ShellHeadItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.ShellHeadItem` itself.
         * 
         * Event is fired when the user presses the item.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.unified.ShellHeadItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.ShellHeadItem` itself.
         * 
         * Event is fired when the user presses the item.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.unified.ShellHeadItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.unified.ShellHeadItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * The icon of the item, either defined in the sap.ui.core.IconPool or a URI to a custom image. An icon must be set.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.unified.ShellHeadItem.
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
            * Gets current value of property {@link #getSelected selected}.
         * 
         * Defines the toggle state in case the item represents a toggle button (see also property `toggleEnabled`).
         * 
         * Default value is `false`.
        */
        public getSelected(): boolean;

        /**
            * Gets current value of property {@link #getShowMarker showMarker}.
         * 
         * If set to true, a theme dependent marker is shown on the item.
         * 
         * Default value is `false`.
        */
        public getShowMarker(): boolean;

        /**
            * Gets current value of property {@link #getShowSeparator showSeparator}.
         * 
         * If set to true, a separator is displayed after the item.
         * 
         * Default value is `true`.
        */
        public getShowSeparator(): boolean;

        /**
            * Gets current value of property {@link #getStartsSection startsSection}.
         * 
         * If set to true, a divider is displayed before the item.
         * 
         * Default value is `false`.
        */
        public getStartsSection(): boolean;

        /**
            * Gets current value of property {@link #getToggleEnabled toggleEnabled}.
         * 
         * If set to true, the item represents a toggle button. The `selected` property can the be used to define the toggle state. Otherwise the item is displayed as action button. In this case the `selected` property is ignored.
         * 
         * Default value is `true`.
        */
        public getToggleEnabled(): boolean;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Invisible items are not shown on the UI.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * The icon of the item, either defined in the sap.ui.core.IconPool or a URI to a custom image. An icon must be set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getSelected selected}.
         * 
         * Defines the toggle state in case the item represents a toggle button (see also property `toggleEnabled`).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSelected(bSelected: boolean): this;

        /**
            * Sets a new value for property {@link #getShowMarker showMarker}.
         * 
         * If set to true, a theme dependent marker is shown on the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowMarker(bShowMarker: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSeparator showSeparator}.
         * 
         * If set to true, a separator is displayed after the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowSeparator(bShowSeparator: boolean): this;

        /**
            * Sets a new value for property {@link #getStartsSection startsSection}.
         * 
         * If set to true, a divider is displayed before the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setStartsSection(bStartsSection: boolean): this;

        /**
            * Sets a new value for property {@link #getToggleEnabled toggleEnabled}.
         * 
         * If set to true, the item represents a toggle button. The `selected` property can the be used to define the toggle state. Otherwise the item is displayed as action button. In this case the `selected` property is ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setToggleEnabled(bToggleEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Invisible items are not shown on the UI.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }
}