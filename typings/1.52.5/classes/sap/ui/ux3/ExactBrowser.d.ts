declare module 'sap/ui/ux3/ExactBrowser' {
    import { Event } from 'sap/ui/base/Event';
    import { ExactAttribute } from 'sap/ui/ux3/ExactAttribute';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Menu } from 'sap/ui/commons/Menu';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IExactBrowserSettings extends IControlSettings {
        title?: string;
        headerTitle?: string;
        topListOrder?: sap.ui.ux3.ExactOrder;
        enableListClose?: boolean;
        listHeight?: number;
        showHeader?: boolean;
        showTopList?: boolean;
        enableReset?: boolean;
        enableSave?: boolean;
        topListWidth?: number;
    }

    /**
    
    */
    export class ExactBrowser extends Control {

        /**
            * Constructor for a new ExactBrowser.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IExactBrowserSettings);


        /**
            * Adds some attribute to the aggregation {@link #getAttributes attributes}.
        */
        public addAttribute(oAttribute: ExactAttribute): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:attributeSelected attributeSelected} event of this `sap.ui.ux3.ExactBrowser`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ExactBrowser` itself.
         * 
         * Event is fired when an attribute is selected or unselected.
        */
        attachAttributeSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The attribute which was selected or unselected recently */
            attribute: ExactAttribute, /* * Array of all selected ExactAttributes */
            allAttributes: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:attributeSelected attributeSelected} event of this `sap.ui.ux3.ExactBrowser`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ExactBrowser` itself.
         * 
         * Event is fired when an attribute is selected or unselected.
        */
        attachAttributeSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The attribute which was selected or unselected recently */
            attribute: ExactAttribute, /* * Array of all selected ExactAttributes */
            allAttributes: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:save save} event of this `sap.ui.ux3.ExactBrowser`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ExactBrowser` itself.
         * 
         * Event is fired when an attribute is selected or unselected.
        */
        attachSave<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:save save} event of this `sap.ui.ux3.ExactBrowser`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ExactBrowser` itself.
         * 
         * Event is fired when an attribute is selected or unselected.
        */
        attachSave<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
        */
        public destroyAttributes(): this;

        /**
            * Destroys the optionsMenu in the aggregation {@link #getOptionsMenu optionsMenu}.
        */
        public destroyOptionsMenu(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:attributeSelected attributeSelected} event of this `sap.ui.ux3.ExactBrowser`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAttributeSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:save save} event of this `sap.ui.ux3.ExactBrowser`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSave(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.ExactBrowser with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:attributeSelected attributeSelected} to attached listeners.
        */
        protected fireAttributeSelected(mParameters?: { attribute?: ExactAttribute, allAttributes?: {}, }): this;

        /**
            * Fires event {@link #event:save save} to attached listeners.
        */
        protected fireSave(mParameters?: {}): this;

        /**
            * Gets content of aggregation {@link #getAttributes attributes}.
         * 
         * The attributes which shall be available.
        */
        public getAttributes(): {};

        /**
            * Gets current value of property {@link #getEnableListClose enableListClose}.
         * 
         * Enables the close icons of the displayed lists.
         * 
         * Default value is `false`.
        */
        public getEnableListClose(): boolean;

        /**
            * Gets current value of property {@link #getEnableReset enableReset}.
         * 
         * Whether the reset functionality should be available in the header area.
         * 
         * Default value is `true`.
        */
        public getEnableReset(): boolean;

        /**
            * Gets current value of property {@link #getEnableSave enableSave}.
         * 
         * Whether the save button should be available in the header area.
         * 
         * Default value is `false`.
        */
        public getEnableSave(): boolean;

        /**
            * ID of the element which is the current target of the association {@link #getFollowUpControl followUpControl}, or `null`.
        */
        public getFollowUpControl(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getHeaderTitle headerTitle}.
         * 
         * Title text in the header of the Exact Browser.
        */
        public getHeaderTitle(): string;

        /**
            * Gets current value of property {@link #getListHeight listHeight}.
         * 
         * The height of the list area in px.
         * 
         * Default value is `290`.
        */
        public getListHeight(): number;

        /**
            * Returns a metadata object for class sap.ui.ux3.ExactBrowser.
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
            * Gets content of aggregation {@link #getOptionsMenu optionsMenu}.
         * 
         * Menu with options. The menu can not used when the property showTopList is set to false.
        */
        public getOptionsMenu(): Menu;

        /**
            * Gets current value of property {@link #getShowHeader showHeader}.
         * 
         * Whether the header area of the ExactBrowser should be shown.
         * 
         * Default value is `false`.
        */
        public getShowHeader(): boolean;

        /**
            * Gets current value of property {@link #getShowTopList showTopList}.
         * 
         * Whether the top list of the ExactBrowser should be shown. When the property is set to false the application must ensure to select top level attributes appropriately.
         * 
         * Default value is `true`.
        */
        public getShowTopList(): boolean;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Title text in the list area of the Exact Browser. The title is not shown when the property showTopList is set to false.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getTopListOrder topListOrder}.
         * 
         * The order how the sublists of the top level list should be displayed.
         * 
         * Default value is `Select`.
        */
        public getTopListOrder(): sap.ui.ux3.ExactOrder;

        /**
            * Gets current value of property {@link #getTopListWidth topListWidth}.
         * 
         * Specifies the width of the top list in pixels. The value must be between 70 and 500.
         * 
         * Default value is `168`.
        */
        public getTopListWidth(): number;

        /**
            * Checks for the provided `sap.ui.ux3.ExactAttribute` in the aggregation {@link #getAttributes attributes}. and returns its index if found or -1 otherwise.
        */
        public indexOfAttribute(oAttribute: ExactAttribute): number;

        /**
            * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
        */
        public insertAttribute(oAttribute: ExactAttribute, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getAttributes attributes}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllAttributes(): {};

        /**
            * Removes a attribute from the aggregation {@link #getAttributes attributes}.
        */
        public removeAttribute(vAttribute: number | string | ExactAttribute): ExactAttribute;

        /**
            * Deselects all currently selected attributes and closes all attribute lists.
        */
        public reset(): any;

        /**
            * Sets a new value for property {@link #getEnableListClose enableListClose}.
         * 
         * Enables the close icons of the displayed lists.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableListClose(bEnableListClose: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableReset enableReset}.
         * 
         * Whether the reset functionality should be available in the header area.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableReset(bEnableReset: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableSave enableSave}.
         * 
         * Whether the save button should be available in the header area.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableSave(bEnableSave: boolean): this;

        /**
            * Sets the associated {@link #getFollowUpControl followUpControl}.
        */
        public setFollowUpControl(oFollowUpControl: sap.ui.core.ID | Control): this;

        /**
            * Sets a new value for property {@link #getHeaderTitle headerTitle}.
         * 
         * Title text in the header of the Exact Browser.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeaderTitle(sHeaderTitle: string): this;

        /**
            * Sets a new value for property {@link #getListHeight listHeight}.
         * 
         * The height of the list area in px.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `290`.
        */
        public setListHeight(iListHeight: number): this;

        /**
            * Sets the aggregated {@link #getOptionsMenu optionsMenu}.
        */
        public setOptionsMenu(oOptionsMenu: Menu): this;

        /**
            * Sets a new value for property {@link #getShowHeader showHeader}.
         * 
         * Whether the header area of the ExactBrowser should be shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowHeader(bShowHeader: boolean): this;

        /**
            * Sets a new value for property {@link #getShowTopList showTopList}.
         * 
         * Whether the top list of the ExactBrowser should be shown. When the property is set to false the application must ensure to select top level attributes appropriately.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowTopList(bShowTopList: boolean): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Title text in the list area of the Exact Browser. The title is not shown when the property showTopList is set to false.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getTopListOrder topListOrder}.
         * 
         * The order how the sublists of the top level list should be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Select`.
        */
        public setTopListOrder(sTopListOrder: sap.ui.ux3.ExactOrder): this;

        /**
            * Sets a new value for property {@link #getTopListWidth topListWidth}.
         * 
         * Specifies the width of the top list in pixels. The value must be between 70 and 500.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `168`.
        */
        public setTopListWidth(iTopListWidth: number): this;

    }
}