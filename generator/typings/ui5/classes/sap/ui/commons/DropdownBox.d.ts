declare module 'sap/ui/commons/DropdownBox' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ComboBox, IComboBoxSettings } from 'sap/ui/commons/ComboBox';

    export interface IDropdownBoxSettings extends IComboBoxSettings {
        searchHelpEnabled?: boolean;
        searchHelpText?: string;
        searchHelpAdditionalText?: string;
        searchHelpIcon?: sap.ui.core.URI;
        maxHistoryItems?: number;
    }

    /**
    
    */
    export class DropdownBox extends ComboBox {

        /**
            * Constructor for a new DropdownBox.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDropdownBoxSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:searchHelp searchHelp} event of this `sap.ui.commons.DropdownBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.DropdownBox` itself.
         * 
         * Event fired whenever the configured searchHelpItem is clicked or the searchHelpItem is configured and F4 key is pressed.
        */
        attachSearchHelp<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current value of the DropdownBox. */
            value: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:searchHelp searchHelp} event of this `sap.ui.commons.DropdownBox`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.DropdownBox` itself.
         * 
         * Event fired whenever the configured searchHelpItem is clicked or the searchHelpItem is configured and F4 key is pressed.
        */
        attachSearchHelp<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current value of the DropdownBox. */
            value: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Using this method the history of the DropdownBox can be cleared. This might be necessary if the items of the DropdownBox have changed. Otherwise invalid items may appear in the history.
        */
        public clearHistory(): any;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:searchHelp searchHelp} event of this `sap.ui.commons.DropdownBox`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSearchHelp(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.DropdownBox with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.ComboBox.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:searchHelp searchHelp} to attached listeners.
        */
        protected fireSearchHelp(mParameters?: { value?: string, }): this;

        /**
            * Gets current value of property {@link #getMaxHistoryItems maxHistoryItems}.
         * 
         * Maximum number of history items in the list.
         * 
         * If 0 no history is displayed or stored. The history is locally stored on the client. Therefore do not activate this feature when this control handles confidential data.
         * 
         * Default value is `0`.
        */
        public getMaxHistoryItems(): number;

        /**
            * Returns a metadata object for class sap.ui.commons.DropdownBox.
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
            * Gets current value of property {@link #getSearchHelpAdditionalText searchHelpAdditionalText}.
         * 
         * (optional) The additional Text to use for the search help entry.
        */
        public getSearchHelpAdditionalText(): string;

        /**
            * Gets current value of property {@link #getSearchHelpEnabled searchHelpEnabled}.
         * 
         * Whether the DropdownBox's search help should be enabled.
         * 
         * Default value is `false`.
        */
        public getSearchHelpEnabled(): boolean;

        /**
            * Gets current value of property {@link #getSearchHelpIcon searchHelpIcon}.
         * 
         * (optional) The URI of the icon to use for the search help entry.
        */
        public getSearchHelpIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getSearchHelpText searchHelpText}.
         * 
         * (optional) The text to use for the search help entry.
        */
        public getSearchHelpText(): string;

        /**
            * Extends the method inherited from sap.ui.core.Element by providing information on Search Help access (if needed)
        */
        public getTooltip_AsString(): string;

        /**
            * Ensure that handed in ListBoxes are taken from the visible UI immediately.
        */
        protected onAfterRendering(oEvent?: jQuery.Event): any;

        /**
            * Handle the click event happening in the DropdownBox
        */
        protected onclick(oEvent: jQuery.Event): any;

        /**
            * Handle focusin event Ensures the text gets selected when focus gets into the field
        */
        protected onfocusin(oEvent: jQuery.Event): any;

        /**
            * Handle keydown event
        */
        protected onkeydown(oEvent: jQuery.Event): any;

        /**
            * Handle keypress event
        */
        protected onkeypress(oEvent: jQuery.Event): any;

        /**
            * Handle keyup event This must only be considered if it is from Backspace-key in IE or after paste. In case there is a keyup with a tab this results from being entered via tabbing and can be ignored, too.
        */
        protected onkeyup(oEvent: jQuery.Event): any;

        /**
            * Handle paste event
        */
        protected onpaste(oEvent: jQuery.Event): any;

        /**
            * Handle pseudo event onsapdelete. If triggered with open dropdown and current item provided by history feature, removes the selected item from this instance's history.
        */
        protected onsapdelete(oEvent: jQuery.Event): any;

        /**
            * Handle pseudo event onsaphome
        */
        protected onsaphome(oEvent: jQuery.Event): any;

        /**
            * Move the cursor one step to the left (and adapt selection)
        */
        protected onsapleft(oEvent: jQuery.Event): any;

        /**
            * Move the cursor one step to the right (and adapt selection)
        */
        protected onsapright(oEvent: jQuery.Event): any;

        /**
            * Handle sapshow pseudo events on the control
        */
        protected onsapshow(oEvent: jQuery.Event): any;

        /**
            * Handle the select event happening in the DropdownBox
        */
        protected onselect(oEvent: jQuery.Event): any;

        /**
            * Sets a new value for property {@link #getMaxHistoryItems maxHistoryItems}.
         * 
         * Maximum number of history items in the list.
         * 
         * If 0 no history is displayed or stored. The history is locally stored on the client. Therefore do not activate this feature when this control handles confidential data.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMaxHistoryItems(iMaxHistoryItems: number): this;

        /**
            * Overwrite of Setter for property `searchHelpAdditionalText`.
         * 
         * Default value is empty/`undefined`
        */
        public setSearchHelpAdditionalText(sSearchHelpAdditionalText: string): this;

        /**
            * Overwrite of Setter for property `searchHelpEnabled`. This method accepts additional parameter to be compatiple with the previous functionality
         * 
         * Default value is `false`
        */
        public setSearchHelpEnabled(bEnabled: boolean, sText: string, sAdditionalText: string, sIcon: string): this;

        /**
            * Overwrite of Setter for property `searchHelpIcon`.
         * 
         * Default value is empty/`undefined`
        */
        public setSearchHelpIcon(sSearchHelpIcon: sap.ui.core.URI): this;

        /**
            * Overwrite of Setter for property `searchHelpText`.
         * 
         * Default value is empty/`undefined`
        */
        public setSearchHelpText(sSearchHelpText: string): this;

    }
}