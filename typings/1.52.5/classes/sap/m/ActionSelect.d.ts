declare module 'sap/m/ActionSelect' {
    import { Button } from 'sap/m/Button';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Select, ISelectSettings } from 'sap/m/Select';

    export interface IActionSelectSettings extends ISelectSettings {
    }

    /**
    
    */
    export class ActionSelect extends Select {

        /**
            * Constructor for a new ActionSelect.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IActionSelectSettings);


        /**
            * Adds some button into the association {@link #getButtons buttons}.
        */
        public addButton(vButton: sap.ui.core.ID | Button): this;

        /**
            * Creates a new subclass of class sap.m.ActionSelect with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Select.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getButtons buttons}.
        */
        public getButtons(): {};

        /**
            * Returns a metadata object for class sap.m.ActionSelect.
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
            * Remove all buttons from the ActionSelect.
        */
        public removeAllButtons(): {};

        /**
            * Button to be removed from the ActionSelect content.
        */
        public removeButton(vButton: number | string | Button): string;

    }
}