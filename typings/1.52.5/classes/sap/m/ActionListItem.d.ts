declare module 'sap/m/ActionListItem' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ListItemBase, IListItemBaseSettings } from 'sap/m/ListItemBase';

    export interface IActionListItemSettings extends IListItemBaseSettings {
        text?: string;
    }

    /**
    
    */
    export class ActionListItem extends ListItemBase {

        /**
            * Constructor for a new ActionListItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IActionListItemSettings);


        /**
            * Creates a new subclass of class sap.m.ActionListItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.m.ActionListItem.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Determines item specific mode
         * 
         * ActionListItems are not selectable because they are command controls (like Button or Link) so triggering the associated command, rather than selection is appropriate to happen upon user action on these items. By overwriting isSelectable (inherited from ListItemBase) we exclude the item from processing specific to selectable list-items.
        */
        protected getMode(): any | string;

        /**
            * Returns the accessibility announcement for the content Hook for the subclasses.
        */
        protected getMode(): string;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Defines the text that appears in the control.
        */
        public getText(): string;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Defines the text that appears in the control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

    }
}