declare module 'sap/ui/ux3/DataSetSimpleView' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Event } from 'sap/ui/base/Event';
    import { DataSetItem } from 'sap/ui/ux3/DataSetItem';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IDataSetSimpleViewSettings extends IControlSettings {
        floating?: boolean;
        name?: string;
        icon?: sap.ui.core.URI;
        iconHovered?: sap.ui.core.URI;
        iconSelected?: sap.ui.core.URI;
        responsive?: boolean;
        itemMinWidth?: number;
        initialItemCount?: number;
        reloadItemCount?: number;
        scrollArea?: any;
        height?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class DataSetSimpleView extends Control {

        /**
            * Constructor for a new DataSetSimpleView.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDataSetSimpleViewSettings);


        /**
            * Destroys the template in the aggregation {@link #getTemplate template}.
        */
        public destroyTemplate(): this;

        /**
            * View finalization: Called when leaving the view
        */
        protected exitView(aItems: {}): any;

        /**
            * Creates a new subclass of class sap.ui.ux3.DataSetSimpleView with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getFloating floating}.
         * 
         * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column Layout.
         * 
         * Default value is `true`.
        */
        public getFloating(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * If the pagination feature is used without specifying a scroll area, a height for the dataset must be defined.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Icon source for this view
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconHovered iconHovered}.
         * 
         * icon: hovered state
        */
        public getIconHovered(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconSelected iconSelected}.
         * 
         * icon: selected state
        */
        public getIconSelected(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getInitialItemCount initialItemCount}.
         * 
         * If this value is greater zero only this amount of items is loaded in the first place. New items are loaded automatically when the user scrolls down. The number of items which are reloaded can be defined with the property "reloadItemCount"
         * 
         * Default value is `0`.
        */
        public getInitialItemCount(): number;

        /**
            * Gets current value of property {@link #getItemMinWidth itemMinWidth}.
         * 
         * When itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet items. A minimum width must be given when the property responsive is set.
         * 
         * Default value is `0`.
        */
        public getItemMinWidth(): number;

        /**
            * Returns a metadata object for class sap.ui.ux3.DataSetSimpleView.
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
            * Gets current value of property {@link #getName name}.
         * 
         * Name of the View
         * 
         * Default value is `Name of this View`.
        */
        public getName(): string;

        /**
            * Gets current value of property {@link #getReloadItemCount reloadItemCount}.
         * 
         * This number defines the item count which is reloaded on scroll if initialItemCount is enabled.
         * 
         * Default value is `0`.
        */
        public getReloadItemCount(): number;

        /**
            * Gets current value of property {@link #getResponsive responsive}.
         * 
         * When true and the property floating is true the DatSet items are floating containers filling the whole space of a row.
         * 
         * Default value is `false`.
        */
        public getResponsive(): boolean;

        /**
            * Gets current value of property {@link #getScrollArea scrollArea}.
         * 
         * ID of the DOM Element or jQuery reference to the dom which holds the scrollbar for the dataset
        */
        public getScrollArea(): any;

        /**
            * Gets content of aggregation {@link #getTemplate template}.
         * 
         * template
        */
        public getTemplate(): Control;

        /**
            * Eventhandler for the selection of an Item
        */
        protected handleSelection(oEvent: Event<this, void>): any;

        /**
            * View Initialization: Called when selecting the view
        */
        protected initView(aItems: any[]): any;

        /**
            * Check if Item `oItem` is selected
        */
        protected isItemSelected(oItem: DataSetItem): any;

        /**
            * Sets a new value for property {@link #getFloating floating}.
         * 
         * When true the DatSet items are floating containers. When set to false The Items are rendered in a 1 column Layout.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setFloating(bFloating: boolean): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * If the pagination feature is used without specifying a scroll area, a height for the dataset must be defined.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Icon source for this view
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconHovered iconHovered}.
         * 
         * icon: hovered state
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconHovered(sIconHovered: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconSelected iconSelected}.
         * 
         * icon: selected state
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconSelected(sIconSelected: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getInitialItemCount initialItemCount}.
         * 
         * If this value is greater zero only this amount of items is loaded in the first place. New items are loaded automatically when the user scrolls down. The number of items which are reloaded can be defined with the property "reloadItemCount"
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setInitialItemCount(iInitialItemCount: number): this;

        /**
            * Sets a new value for property {@link #getItemMinWidth itemMinWidth}.
         * 
         * When itemMinWidth>0 and the property floating is true the given minimum width in pixels is set to DatSet items. A minimum width must be given when the property responsive is set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setItemMinWidth(iItemMinWidth: number): this;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * Name of the View
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Name of this View`.
        */
        public setName(sName: string): this;

        /**
            * Sets a new value for property {@link #getReloadItemCount reloadItemCount}.
         * 
         * This number defines the item count which is reloaded on scroll if initialItemCount is enabled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setReloadItemCount(iReloadItemCount: number): this;

        /**
            * Sets a new value for property {@link #getResponsive responsive}.
         * 
         * When true and the property floating is true the DatSet items are floating containers filling the whole space of a row.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setResponsive(bResponsive: boolean): this;

        /**
            
        */
        public setScrollArea(aScrollArea: {}, bSupress: boolean): any;

        /**
            * Sets the aggregated {@link #getTemplate template}.
        */
        public setTemplate(oTemplate: Control): this;

        /**
            * View update: Called when pagination adds items
        */
        protected updateView(aDiff: {}): any;

    }
}