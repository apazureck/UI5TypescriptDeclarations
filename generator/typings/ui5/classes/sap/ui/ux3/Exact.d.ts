declare module 'sap/ui/ux3/Exact' {
    import { Event } from 'sap/ui/base/Event';
    import { ExactAttribute } from 'sap/ui/ux3/ExactAttribute';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ExactArea } from 'sap/ui/ux3/ExactArea';
    import { SearchField } from 'sap/ui/commons/SearchField';
    import { Menu } from 'sap/ui/commons/Menu';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IExactSettings extends IControlSettings {
        resultText?: string;
    }

    /**
    
    */
    export class Exact extends Control {

        /**
            * Constructor for a new Exact.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IExactSettings);


        /**
            * Adds some attribute to the aggregation {@link #getAttributes attributes}.
        */
        public addAttribute(oAttribute: ExactAttribute): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:refineSearch refineSearch} event of this `sap.ui.ux3.Exact`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Exact` itself.
         * 
         * Event which is fired when an attribute is selected or unselected.
        */
        attachRefineSearch<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The query string which was entered in the search field */
            query: string, /* * The attribute which was selected or unselected recently */
            changedAttribute: ExactAttribute, /* * Array of all selected ExcatAttribute. */
            allSelectedAttributes: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:refineSearch refineSearch} event of this `sap.ui.ux3.Exact`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Exact` itself.
         * 
         * Event which is fired when an attribute is selected or unselected.
        */
        attachRefineSearch<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The query string which was entered in the search field */
            query: string, /* * The attribute which was selected or unselected recently */
            changedAttribute: ExactAttribute, /* * Array of all selected ExcatAttribute. */
            allSelectedAttributes: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Exact`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Exact` itself.
         * 
         * Event is fired when the search button is clicked
        */
        attachSearch<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The query string which was entered in the search field. */
            query: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.ux3.Exact`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.Exact` itself.
         * 
         * Event is fired when the search button is clicked
        */
        attachSearch<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The query string which was entered in the search field. */
            query: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
        */
        public destroyAttributes(): this;

        /**
            * Destroys the settingsMenu in the aggregation {@link #getSettingsMenu settingsMenu}.
        */
        public destroySettingsMenu(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:refineSearch refineSearch} event of this `sap.ui.ux3.Exact`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachRefineSearch(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.ux3.Exact`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSearch(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.Exact with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:refineSearch refineSearch} to attached listeners.
        */
        protected fireRefineSearch(mParameters?: { query?: string, changedAttribute?: ExactAttribute, allSelectedAttributes?: {}, }): this;

        /**
            * Fires event {@link #event:search search} to attached listeners.
        */
        protected fireSearch(mParameters?: { query?: string, }): this;

        /**
            * Gets content of aggregation {@link #getAttributes attributes}.
         * 
         * The attributes which shall be available to refine the search
        */
        public getAttributes(): {};

        /**
            * Returns a metadata object for class sap.ui.ux3.Exact.
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
            * Returns the ExactArea representing the result section. Arbitrary content can be added here.
        */
        public getResultArea(): ExactArea;

        /**
            * Gets current value of property {@link #getResultText resultText}.
         * 
         * A title text which is displayed above the result section
        */
        public getResultText(): string;

        /**
            * Returns the SearchField control which is used by the Exact control.
        */
        public getSearchField(): SearchField;

        /**
            * Gets content of aggregation {@link #getSettingsMenu settingsMenu}.
         * 
         * Defines the 'Settings' button in the browse section tool bar
        */
        public getSettingsMenu(): Menu;

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
            * Sets a new value for property {@link #getResultText resultText}.
         * 
         * A title text which is displayed above the result section
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setResultText(sResultText: string): this;

        /**
            * Sets the aggregated {@link #getSettingsMenu settingsMenu}.
        */
        public setSettingsMenu(oSettingsMenu: Menu): this;

    }
}