declare module 'sap/ui/commons/AutoComplete' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ComboBox, IComboBoxSettings } from 'sap/ui/commons/ComboBox';

    export interface IAutoCompleteSettings extends IComboBoxSettings {
        enableScrolling?: boolean;
    }

    /**
    
    */
    export class AutoComplete extends ComboBox {

        /**
            * Constructor for a new AutoComplete.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IAutoCompleteSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.ui.commons.AutoComplete`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.AutoComplete` itself.
         * 
         * Fired when the user has changed the value and a suggestion list update should occur.
        */
        attachSuggest<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current value which was typed in. */
            suggestValue: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:suggest suggest} event of this `sap.ui.commons.AutoComplete`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.AutoComplete` itself.
         * 
         * Fired when the user has changed the value and a suggestion list update should occur.
        */
        attachSuggest<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current value which was typed in. */
            suggestValue: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:suggest suggest} event of this `sap.ui.commons.AutoComplete`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSuggest(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.AutoComplete with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.ComboBox.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:suggest suggest} to attached listeners.
        */
        protected fireSuggest(mParameters?: { suggestValue?: string, }): this;

        /**
            * Gets current value of property {@link #getEnableScrolling enableScrolling}.
         * 
         * Determines whether scrolling should be enabled when the number of items is higher than maxPopupItems. If set to false only the first n items (n=maxPopupItems) are shown.
         * 
         * Default value is `true`.
        */
        public getEnableScrolling(): boolean;

        /**
            
        */
        public getListBox(): any | sap.ui.core.ID;

        /**
            * ID of the element which is the current target of the association {@link #getListBox listBox}, or `null`.
        */
        public getListBox(): sap.ui.core.ID;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.commons.AutoComplete.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

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
            * Gets current value of property {@link #getSelectedItemId selectedItemId}.
         * 
         * Id of the selected item. If the value has no corresponding item, the `selectedItemId` is empty.
         * 
         * If the `selectedItemId` is set to a not existing item, it will not be changed.
        */
        public getSelectedItemId(): string;

        /**
            
        */
        public getSelectedItemId(): any | string;

        /**
            
        */
        public getSelectedKey(): any | string;

        /**
            * Gets current value of property {@link #getSelectedKey selectedKey}.
         * 
         * Key of the selected item.
         * 
         * If the value has no corresponding item the key is empty.
         * 
         * If duplicate keys exists the first item matching the key is used.
         * 
         * If the key is set to a not existing value it will not be changed.
        */
        public getSelectedKey(): string;

        /**
            * Sets a new value for property {@link #getEnableScrolling enableScrolling}.
         * 
         * Determines whether scrolling should be enabled when the number of items is higher than maxPopupItems. If set to false only the first n items (n=maxPopupItems) are shown.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableScrolling(bEnableScrolling: boolean): this;

        /**
            * Sets a custom filter function for items. Default is to check whether the item text begins with the typed value.
         * 
         * Example: ` function(sValue, oItem){ return jQuery.sap.startsWithIgnoreCase(oItem.getText(), sValue); } `
        */
        public setFilterFunction(fFilter?: (() => any)): any;

        /**
            
        */
        public setListBox(): this;

        /**
            
        */
        public setSelectedItemId(): this;

        /**
            
        */
        public setSelectedKey(): this;

    }
}