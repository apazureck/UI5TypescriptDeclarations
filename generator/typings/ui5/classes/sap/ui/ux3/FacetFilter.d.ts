declare module 'sap/ui/ux3/FacetFilter' {
    import { FacetFilterList } from 'sap/ui/ux3/FacetFilterList';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IFacetFilterSettings extends IControlSettings {
        visibleItemCountMode?: sap.ui.ux3.VisibleItemCountMode;
    }

    /**
    
    */
    export class FacetFilter extends Control {

        /**
            * Constructor for a new FacetFilter.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFacetFilterSettings);


        /**
            * Adds some list to the aggregation {@link #getLists lists}.
        */
        public addList(oList: FacetFilterList): this;

        /**
            * Destroys all the lists in the aggregation {@link #getLists lists}.
        */
        public destroyLists(): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.FacetFilter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getLists lists}.
         * 
         * Facet Filter list represents the list of the filter values and the title of this list.
        */
        public getLists(): {};

        /**
            * Returns a metadata object for class sap.ui.ux3.FacetFilter.
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
            * Gets current value of property {@link #getVisibleItemCountMode visibleItemCountMode}.
         * 
         * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default number of Facet Filter Items (5) is visible.
         * 
         * Default value is `Fixed`.
        */
        public getVisibleItemCountMode(): sap.ui.ux3.VisibleItemCountMode;

        /**
            * Checks for the provided `sap.ui.ux3.FacetFilterList` in the aggregation {@link #getLists lists}. and returns its index if found or -1 otherwise.
        */
        public indexOfList(oList: FacetFilterList): number;

        /**
            * Inserts a list into the aggregation {@link #getLists lists}.
        */
        public insertList(oList: FacetFilterList, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getLists lists}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllLists(): {};

        /**
            * Removes a list from the aggregation {@link #getLists lists}.
        */
        public removeList(vList: number | string | FacetFilterList): FacetFilterList;

        /**
            * Sets a new value for property {@link #getVisibleItemCountMode visibleItemCountMode}.
         * 
         * If the value is "Auto" - the Facet Filter takes the whole available height. If "Fixed" , then the default number of Facet Filter Items (5) is visible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Fixed`.
        */
        public setVisibleItemCountMode(sVisibleItemCountMode: sap.ui.ux3.VisibleItemCountMode): this;

    }
}