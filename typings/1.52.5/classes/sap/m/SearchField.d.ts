declare module 'sap/m/SearchField' {
    import { Event } from 'sap/ui/base/Event';
    import { SuggestionItem } from 'sap/m/SuggestionItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISearchFieldSettings extends IControlSettings {
        value?: string;
        width?: sap.ui.core.CSSSize;
        enabled?: boolean;
        visible?: boolean;
        maxLength?: number;
        placeholder?: string;
        showMagnifier?: boolean;
        showRefreshButton?: boolean;
        refreshButtonTooltip?: string;
        showSearchButton?: boolean;
        enableSuggestions?: boolean;
        selectOnFocus?: boolean;
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
            * Adds some suggestionItem to the aggregation {@link #getSuggestionItems suggestionItems}.
        */
        public addSuggestionItem(oSuggestionItem: SuggestionItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.m.SearchField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SearchField` itself.
         * 
         * This event is fired when the value of the search field is changed by a user - e.g. at each key press. Do not invalidate or re-render a focused search field, especially during the liveChange event.
        */
        attachLiveChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current search string. */
            newValue: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.m.SearchField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SearchField` itself.
         * 
         * This event is fired when the value of the search field is changed by a user - e.g. at each key press. Do not invalidate or re-render a focused search field, especially during the liveChange event.
        */
        attachLiveChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current search string. */
            newValue: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.m.SearchField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SearchField` itself.
         * 
         * Event which is fired when the user triggers a search.
        */
        attachSearch<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The search query string. */
            query: string, /* * Suggestion list item in case if the user has selected an item from the suggestions list. */
            suggestionItem: SuggestionItem, /* * Indicates if the user pressed the refresh icon. */
            refreshButtonPressed: boolean, /* * Indicates if the user pressed the clear icon. */
            clearButtonPressed: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:search search} event of this `sap.m.SearchField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SearchField` itself.
         * 
         * Event which is fired when the user triggers a search.
        */
        attachSearch<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The search query string. */
            query: string, /* * Suggestion list item in case if the user has selected an item from the suggestions list. */
            suggestionItem: SuggestionItem, /* * Indicates if the user pressed the refresh icon. */
            refreshButtonPressed: boolean, /* * Indicates if the user pressed the clear icon. */
            clearButtonPressed: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.m.SearchField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SearchField` itself.
         * 
         * This event is fired when the search field is initially focused or its value is changed by the user. This event means that suggestion data should be updated, in case if suggestions are used. Use the value parameter to create new suggestions for it.
        */
        attachSuggest<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current search string of the search field. */
            suggestValue: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.m.SearchField`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.SearchField` itself.
         * 
         * This event is fired when the search field is initially focused or its value is changed by the user. This event means that suggestion data should be updated, in case if suggestions are used. Use the value parameter to create new suggestions for it.
        */
        attachSuggest<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current search string of the search field. */
            suggestValue: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds property {@link #getValue value} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindProperty ManagedObject.bindProperty} for a detailed description of the possible properties of `oBindingInfo`
        */
        public bindValue(oBindingInfo: {}): this;

        /**
            * Destroys all the suggestionItems in the aggregation {@link #getSuggestionItems suggestionItems}.
        */
        public destroySuggestionItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.m.SearchField`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLiveChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:search search} event of this `sap.m.SearchField`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSearch(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:suggest suggest} event of this `sap.m.SearchField`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSuggest(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.SearchField with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:liveChange liveChange} to attached listeners.
        */
        protected fireLiveChange(mParameters?: { newValue?: string, }): this;

        /**
            * Fires event {@link #event:search search} to attached listeners.
        */
        protected fireSearch(mParameters?: { query?: string, suggestionItem?: SuggestionItem, refreshButtonPressed?: boolean, clearButtonPressed?: boolean, }): this;

        /**
            * Fires event {@link #event:suggest suggest} to attached listeners.
        */
        protected fireSuggest(mParameters?: { suggestValue?: string, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Boolean property to enable the control (default is true).
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getEnableSuggestions enableSuggestions}.
         * 
         * If true, a `suggest` event is fired when user types in the input and when the input is focused. On a phone device, a full screen dialog with suggestions is always shown even if the suggestions list is empty.
         * 
         * Default value is `false`.
        */
        public getEnableSuggestions(): boolean;

        /**
            * Gets current value of property {@link #getMaxLength maxLength}.
         * 
         * Maximum number of characters. Value '0' means the feature is switched off.
         * 
         * Default value is `0`.
        */
        public getMaxLength(): number;

        /**
            * Returns a metadata object for class sap.m.SearchField.
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
         * Text shown when no value available. Default placeholder text is the word "Search" in the current local language (if supported) or in English.
        */
        public getPlaceholder(): string;

        /**
            * Function returns DOM element which acts as reference point for the opening suggestion menu
        */
        protected getPopupAnchorDomRef(): any;

        /**
            * Gets current value of property {@link #getRefreshButtonTooltip refreshButtonTooltip}.
         * 
         * Tooltip text of the refresh button. If it is not set, the tooltip of the SearchField (if any) is displayed. Tooltips are not displayed on touch devices.
        */
        public getRefreshButtonTooltip(): string;

        /**
            * Gets current value of property {@link #getSelectOnFocus selectOnFocus}.
         * 
         * Normally, search text is selected for copy when the SearchField is focused by keyboard navigation. If an application re-renders the SearchField during the liveChange event, set this property to false to disable text selection by focus.
         * 
         * Default value is `true`.
        */
        public getSelectOnFocus(): boolean;

        /**
            * Gets current value of property {@link #getShowMagnifier showMagnifier}.
         * 
         * Set to false to hide the magnifier icon.
         * 
         * Default value is `true`.
        */
        public getShowMagnifier(): boolean;

        /**
            * Gets current value of property {@link #getShowRefreshButton showRefreshButton}.
         * 
         * Set to true to display a refresh button in place of the search icon. By pressing the refresh button or F5 key on keyboard, the user can reload the results list without changing the search string.
         * 
         * Default value is `false`.
        */
        public getShowRefreshButton(): boolean;

        /**
            * Gets current value of property {@link #getShowSearchButton showSearchButton}.
         * 
         * Set to true to show the search button with the magnifier icon. If false, both the search and refresh buttons are not displayed even if the "showRefreshButton" property is true.
         * 
         * Default value is `true`.
        */
        public getShowSearchButton(): boolean;

        /**
            * Gets content of aggregation {@link #getSuggestionItems suggestionItems}.
         * 
         * `SuggestionItems` are the items which will be shown in the suggestions list. The following properties can be used:  * `key` is not displayed and may be used as internal technical field * `text` is displayed as normal suggestion text * `icon` * `description` - additional text may be used to visually display search item type or category 
        */
        public getSuggestionItems(): {};

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Input Value.
        */
        public getValue(): string;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Invisible inputs are not rendered.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the CSS width of the input. If not set, width is 100%.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.m.SuggestionItem` in the aggregation {@link #getSuggestionItems suggestionItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfSuggestionItem(oSuggestionItem: SuggestionItem): number;

        /**
            * Inserts a suggestionItem into the aggregation {@link #getSuggestionItems suggestionItems}.
        */
        public insertSuggestionItem(oSuggestionItem: SuggestionItem, iIndex: number): this;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getSuggestionItems suggestionItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSuggestionItems(): {};

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a suggestionItem from the aggregation {@link #getSuggestionItems suggestionItems}.
        */
        public removeSuggestionItem(vSuggestionItem: number | string | SuggestionItem): SuggestionItem;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Boolean property to enable the control (default is true).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableSuggestions enableSuggestions}.
         * 
         * If true, a `suggest` event is fired when user types in the input and when the input is focused. On a phone device, a full screen dialog with suggestions is always shown even if the suggestions list is empty.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableSuggestions(bEnableSuggestions: boolean): this;

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
            * Sets a new value for property {@link #getPlaceholder placeholder}.
         * 
         * Text shown when no value available. Default placeholder text is the word "Search" in the current local language (if supported) or in English.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPlaceholder(sPlaceholder: string): this;

        /**
            * Sets a new value for property {@link #getRefreshButtonTooltip refreshButtonTooltip}.
         * 
         * Tooltip text of the refresh button. If it is not set, the tooltip of the SearchField (if any) is displayed. Tooltips are not displayed on touch devices.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setRefreshButtonTooltip(sRefreshButtonTooltip: string): this;

        /**
            * Sets a new value for property {@link #getSelectOnFocus selectOnFocus}.
         * 
         * Normally, search text is selected for copy when the SearchField is focused by keyboard navigation. If an application re-renders the SearchField during the liveChange event, set this property to false to disable text selection by focus.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setSelectOnFocus(bSelectOnFocus: boolean): this;

        /**
            * Sets a new value for property {@link #getShowMagnifier showMagnifier}.
         * 
         * Set to false to hide the magnifier icon.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowMagnifier(bShowMagnifier: boolean): this;

        /**
            * Sets a new value for property {@link #getShowRefreshButton showRefreshButton}.
         * 
         * Set to true to display a refresh button in place of the search icon. By pressing the refresh button or F5 key on keyboard, the user can reload the results list without changing the search string.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowRefreshButton(bShowRefreshButton: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSearchButton showSearchButton}.
         * 
         * Set to true to show the search button with the magnifier icon. If false, both the search and refresh buttons are not displayed even if the "showRefreshButton" property is true.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowSearchButton(bShowSearchButton: boolean): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Input Value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValue(sValue: string): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Invisible inputs are not rendered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the CSS width of the input. If not set, width is 100%.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Toggle visibility of the suggestion list.
        */
        public suggest(bShow: boolean | any): this;

        /**
            * Unbinds property {@link #getValue value} from model data.
        */
        public unbindValue(): this;

    }
}