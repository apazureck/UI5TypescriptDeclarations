declare module 'sap/m/SelectionDetailsFacade' {
    import { Item } from 'sap/ui/core/Item';
    import { SelectionDetailsItem } from 'sap/m/SelectionDetailsItem';


    export interface ISelectionDetailsItemFacadeSettings {
    }

    /**
    
    */
    export class SelectionDetailsItemFacade {


        /**
            * Adds some action to the aggregation {@link #getActions actions}.
        */
        public addAction(oAction: Item): SelectionDetailsItem;

        /**
            * Gets current value of property {@link #getEnableNav enableNav}.
         * 
         * Determines whether or not the item is active and a navigation event is triggered on press.
         * 
         * Default value is `false`.
        */
        public getEnableNav(): boolean;

        /**
            * Removes a action from the aggregation {@link #getActions actions}.
        */
        public removeAction(vAction: number | string | Item): Item;

        /**
            * Sets a new value for property {@link #getEnableNav enableNav}.
         * 
         * Determines whether or not the item is active and a navigation event is triggered on press.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableNav(bEnableNav: boolean): SelectionDetailsItem;

    }
}