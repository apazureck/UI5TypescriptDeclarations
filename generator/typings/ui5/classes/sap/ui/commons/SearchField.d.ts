declare module 'sap/ui/commons/SearchField' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { SearchProvider } from 'sap/ui/core/search/SearchProvider';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISearchFieldSettings extends IControlSettings {
        enableListSuggest?: boolean;
        showListExpander?: boolean;
        enableClear?: boolean;
        showExternalButton?: boolean;
        enableCache?: boolean;
        enableFilterMode?: boolean;
        value?: string;
        enabled?: boolean;
        editable?: boolean;
        width?: sap.ui.core.CSSSize;
        maxLength?: number;
        valueState?: sap.ui.core.ValueState;
        placeholder?: string;
        textAlign?: sap.ui.core.TextAlign;
        visibleItemCount?: number;
        startSuggestion?: number;
        maxSuggestionItems?: number;
        maxHistoryItems?: number;
    }

    /**
    
    */
    export class SearchField extends Control {

        /**
            * Constructor for a new SearchField.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISearchFieldSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.commons.SearchField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.SearchField` itself.
         * 
         * Event which is fired when the user triggers a search
        */
        attachSearch<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The search query */
            query: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.ui.commons.SearchField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.SearchField` itself.
         * 
         * Event which is fired when the user triggers a search
        */
        attachSearch<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The search query */
            query: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.ui.commons.SearchField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.SearchField` itself.
         * 
         * Event which is fired when new suggest values are required.
        */
        attachSuggest<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The value for which suggestions are required. */
            value: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.ui.commons.SearchField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.SearchField` itself.
         * 
         * Event which is fired when new suggest values are required.
        */
        attachSuggest<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The value for which suggestions are required. */
            value: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Clears the history of the control
        */
        public clearHistory(): any;

        /**
            * Destroys the searchProvider in the aggregation {@link #getSearchProvider searchProvider}.
        */
        public destroySearchProvider(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.ui.commons.SearchField`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSearch(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:suggest suggest} event of this `sap.ui.commons.SearchField`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSuggest(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.SearchField with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:search search} to attached listeners.
        */
        protected fireSearch(mParameters?: { query?: string, }): this;

        /**
            * Fires event {@link #event:suggest suggest} to attached listeners.
        */
        protected fireSuggest(mParameters?: { value?: string, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Non-editable controls have different colors, depending on custom settings
         * 
         * Default value is `true`.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getEnableCache enableCache}.
         * 
         * When list suggestion is enabled all suggestions are cached and no suggest event is fired.
         * 
         * Default value is `true`.
        */
        public getEnableCache(): boolean;

        /**
            * Gets current value of property {@link #getEnableClear enableClear}.
         * 
         * Defines whether the clear functionality shall be active
         * 
         * Default value is `false`.
        */
        public getEnableClear(): boolean;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Disabled fields have different colors, and they can not be focused.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getEnableFilterMode enableFilterMode}.
         * 
         * Defines whether the search event should also be fired when the SearchField is empty (like a Filter field) and when the clear button (if activated) is pressed.
         * 
         * Default value is `false`.
        */
        public getEnableFilterMode(): boolean;

        /**
            * Gets current value of property {@link #getEnableListSuggest enableListSuggest}.
         * 
         * Defines whether a pop up list shall be provided for suggestions
         * 
         * Default value is `true`.
        */
        public getEnableListSuggest(): boolean;

        /**
            * Gets current value of property {@link #getMaxHistoryItems maxHistoryItems}.
         * 
         * Maximum number of history items in the suggestion list. 0 displays and stores no history. The history is locally stored on the client. Therefore do not activate this feature when this control handles confidential data.
         * 
         * Default value is `0`.
        */
        public getMaxHistoryItems(): number;

        /**
            * Gets current value of property {@link #getMaxLength maxLength}.
         * 
         * Maximum number of characters. Value '0' means the feature is switched off.
         * 
         * Default value is `0`.
        */
        public getMaxLength(): number;

        /**
            * Gets current value of property {@link #getMaxSuggestionItems maxSuggestionItems}.
         * 
         * Maximum number of suggestion items in the suggestion list.
         * 
         * Default value is `10`.
        */
        public getMaxSuggestionItems(): number;

        /**
            * Returns a metadata object for class sap.ui.commons.SearchField.
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
            * Gets current value of property {@link #getPlaceholder placeholder}.
         * 
         * Placeholder for the input field.
         * 
         * Default value is ``.
        */
        public getPlaceholder(): string;

        /**
            * Gets content of aggregation {@link #getSearchProvider searchProvider}.
         * 
         * Search provider instance which handles the suggestions for this SearchField (e.g. Open Search Protocol).
        */
        public getSearchProvider(): SearchProvider;

        /**
            * Gets current value of property {@link #getShowExternalButton showExternalButton}.
         * 
         * Defines whether an additional search button shall be displayed
         * 
         * Default value is `false`.
        */
        public getShowExternalButton(): boolean;

        /**
            * Gets current value of property {@link #getShowListExpander showListExpander}.
         * 
         * Defines whether the list expander shall be displayed in the case of an enabled list for suggestions. This feature is deactivated on mobile devices.
         * 
         * Default value is `true`.
        */
        public getShowListExpander(): boolean;

        /**
            * Gets current value of property {@link #getStartSuggestion startSuggestion}.
         * 
         * Minimum length of the entered string triggering the suggestion list.
         * 
         * Default value is `3`.
        */
        public getStartSuggestion(): number;

        /**
            * Gets current value of property {@link #getTextAlign textAlign}.
         * 
         * Sets the horizontal alignment of the text
         * 
         * Default value is `Begin`.
        */
        public getTextAlign(): sap.ui.core.TextAlign;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Text that shall be displayed within the search field
         * 
         * Default value is ``.
        */
        public getValue(): string;

        /**
            * Gets current value of property {@link #getValueState valueState}.
         * 
         * Visualizes warnings or errors related to the input field. Possible values: Warning, Error, Success, None.
         * 
         * Default value is `None`.
        */
        public getValueState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getVisibleItemCount visibleItemCount}.
         * 
         * Defines the number of items in the suggestion list that shall be displayed at once. If the overall number of list items is higher than the setting, a scroll bar is provided.
         * 
         * Default value is `20`.
        */
        public getVisibleItemCount(): number;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Control width in CSS-size
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Non-editable controls have different colors, depending on custom settings
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableCache enableCache}.
         * 
         * When list suggestion is enabled all suggestions are cached and no suggest event is fired.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableCache(bEnableCache: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableClear enableClear}.
         * 
         * Defines whether the clear functionality shall be active
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableClear(bEnableClear: boolean): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Disabled fields have different colors, and they can not be focused.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableFilterMode enableFilterMode}.
         * 
         * Defines whether the search event should also be fired when the SearchField is empty (like a Filter field) and when the clear button (if activated) is pressed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableFilterMode(bEnableFilterMode: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableListSuggest enableListSuggest}.
         * 
         * Defines whether a pop up list shall be provided for suggestions
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableListSuggest(bEnableListSuggest: boolean): this;

        /**
            * Sets a new value for property {@link #getMaxHistoryItems maxHistoryItems}.
         * 
         * Maximum number of history items in the suggestion list. 0 displays and stores no history. The history is locally stored on the client. Therefore do not activate this feature when this control handles confidential data.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMaxHistoryItems(iMaxHistoryItems: number): this;

        /**
            * Sets a new value for property {@link #getMaxLength maxLength}.
         * 
         * Maximum number of characters. Value '0' means the feature is switched off.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMaxLength(iMaxLength: number): this;

        /**
            * Sets a new value for property {@link #getMaxSuggestionItems maxSuggestionItems}.
         * 
         * Maximum number of suggestion items in the suggestion list.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `10`.
        */
        public setMaxSuggestionItems(iMaxSuggestionItems: number): this;

        /**
            * Sets a new value for property {@link #getPlaceholder placeholder}.
         * 
         * Placeholder for the input field.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setPlaceholder(sPlaceholder: string): this;

        /**
            * Sets the aggregated {@link #getSearchProvider searchProvider}.
        */
        public setSearchProvider(oSearchProvider: SearchProvider): this;

        /**
            * Sets a new value for property {@link #getShowExternalButton showExternalButton}.
         * 
         * Defines whether an additional search button shall be displayed
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowExternalButton(bShowExternalButton: boolean): this;

        /**
            * Sets a new value for property {@link #getShowListExpander showListExpander}.
         * 
         * Defines whether the list expander shall be displayed in the case of an enabled list for suggestions. This feature is deactivated on mobile devices.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowListExpander(bShowListExpander: boolean): this;

        /**
            * Sets a new value for property {@link #getStartSuggestion startSuggestion}.
         * 
         * Minimum length of the entered string triggering the suggestion list.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `3`.
        */
        public setStartSuggestion(iStartSuggestion: number): this;

        /**
            * Sets a new value for property {@link #getTextAlign textAlign}.
         * 
         * Sets the horizontal alignment of the text
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Begin`.
        */
        public setTextAlign(sTextAlign: sap.ui.core.TextAlign): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Text that shall be displayed within the search field
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setValue(sValue: string): this;

        /**
            * Sets a new value for property {@link #getValueState valueState}.
         * 
         * Visualizes warnings or errors related to the input field. Possible values: Warning, Error, Success, None.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setValueState(sValueState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getVisibleItemCount visibleItemCount}.
         * 
         * Defines the number of items in the suggestion list that shall be displayed at once. If the overall number of list items is higher than the setting, a scroll bar is provided.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `20`.
        */
        public setVisibleItemCount(iVisibleItemCount: number): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Control width in CSS-size
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Callback function used to provide the suggest values in the handler of the suggest event (only in list suggestion mode)
        */
        public suggest(sSSuggestValue: string, aASuggestions: {}): any;

    }
}