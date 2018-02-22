declare module 'sap/ui/core/delegate/ItemNavigation' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface IItemNavigationSettings extends IEventProviderSettings {
    }

    /**
    
    */
    export class ItemNavigation extends EventProvider {

        /**
            * Creates an `ItemNavigation` delegate that can be attached to controls requiring capabilities for keyboard navigation between items.
        */
        public constructor(oDomRef: any, aItemDomRefs: {}, bNotInTabChain: boolean);


        /**
            * Creates a new subclass of class sap.ui.core.delegate.ItemNavigation with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns disabled modifiers These modifiers will not be handled by the `ItemNavigation`
        */
        public getDisabledModifiers(oDisabledModifiers: {}): {};

        /**
            * Returns the array of item DOM references
        */
        public getItemDomRefs(): {};

        /**
            * Returns a metadata object for class sap.ui.core.delegate.ItemNavigation.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the root DOM reference surrounding the items
        */
        public getRootDomRef(): any;

        /**
            * Check whether given event has disabled modifier or not
        */
        public hasDisabledModifier(oEvent: jQuery.Event): boolean;

        /**
            * Sets whether the items are displayed in columns.
         * 
         * If columns are used, the Arrow Up and Arrow Down keys navigate to the next or previous item of the column. If the first or last item of the column is reached, the next focused item is then in the next or previous column.
        */
        public setColumns(iColumns: number, bNoColumnChange: boolean): this;

        /**
            * Sets whether the `ItemNavigation` should cycle through the items.
         * 
         * If cycling is disabled the navigation stops at the first and last item, if the corresponding arrow keys are used.
        */
        public setCycling(bCycling: boolean): this;

        /**
            * Sets the disabled modifiers These modifiers will not be handled by the `ItemNavigation`
         * 
         * `Example: Disable shift + up handling of the `ItemNavigation`
         * 
         * oItemNavigation.setDisabledModifiers({
         *     sapnext : ["shift"]
         * });
         * 
         * Possible keys are : "shift", "alt", "ctrl", "meta"
         * Possible events are : "sapnext", "sapprevious", "saphome", "sapend"`
        */
        public setDisabledModifiers(oDisabledModifiers: {}): this;

        /**
            * Sets behavior of HOME and END keys if columns are used.
        */
        public setHomeEndColumnMode(bStayInRow: boolean, bCtrlEnabled: boolean): this;

        /**
            * Sets the item DOM references as an array for the items
        */
        public setItemDomRefs(aItemDomRefs: {}): this;

        /**
            * Sets the page size of the item navigation to allow Page Up and Page Down keys.
        */
        public setPageSize(iPageSize: number): this;

        /**
            * Sets the root DOM reference surrounding the items
        */
        public setRootDomRef(oDomRef: {}): this;

        /**
            * Sets the selected index if the used control supports selection.
        */
        public setSelectedIndex(iIndex: number): this;

        /**
            * Sets whether the `ItemNavigation` should use the table mode to navigate through the items (navigation in a grid).
        */
        public setTableMode(bTableMode: boolean, bTableList?: boolean): this;

    }
}