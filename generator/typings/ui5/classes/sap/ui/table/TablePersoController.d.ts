declare module 'sap/ui/table/TablePersoController' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Table } from 'sap/ui/table/Table';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface ITablePersoControllerSettings extends IManagedObjectSettings {
        autoSave?: boolean;
        persoService?: any;
        customDataKey?: string;
    }

    /**
    
    */
    export class TablePersoController extends ManagedObject {

        /**
            * Constructor for a new TablePersoController.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITablePersoControllerSettings);


        /**
            * Creates a new subclass of class sap.ui.table.TablePersoController with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getAutoSave autoSave}.
         * 
         * Auto save state
         * 
         * Default value is `true`.
        */
        public getAutoSave(): boolean;

        /**
            * Gets current value of property {@link #getCustomDataKey customDataKey}.
         * 
         * By defining a custom data key the `TablePersoController` will try to get the key for saving the perso data from the custom data of the Table and Column instead of creating it by concatenating the ID of the Table and the Column. Basically this will be more stable than using the auto IDs.
         * 
         * Default value is `persoKey`.
        */
        public getCustomDataKey(): string;

        /**
            * Returns a metadata object for class sap.ui.table.TablePersoController.
        */
        public static getMetadata(): Metadata | any;

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
            * Gets current value of property {@link #getPersoService persoService}.
         * 
         * Personalization Service object. Needs to have the following methods:  * getPersData() : `jQuery Promise` (http://api.jquery.com/promise/) * setPersData(oBundle) : `jQuery Promise` (http://api.jquery.com/promise/) * delPersData() : `jQuery Promise` (http://api.jquery.com/promise/) 
        */
        public getPersoService(): any;

        /**
            * ID of the element which is the current target of the association {@link #getTable table}, or `null`.
        */
        public getTable(): sap.ui.core.ID;

        /**
            * Opens the personalization dialog for the Table to modify the visibility and the order of the columns.
         * 
         * * Using this functionality will require to load the sap.m library because the personalization dialog is only available in this library for now. *
        */
        public openDialog(mSettings: {}): any;

        /**
            * Refresh the personalizations (reloads data from service).
        */
        public refresh(): any;

        /**
            * Saves the current personalization state.
        */
        public savePersonalizations(): any;

        /**
            * Sets a new value for property {@link #getAutoSave autoSave}.
         * 
         * Auto save state
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setAutoSave(bAutoSave: boolean): this;

        /**
            * Sets a new value for property {@link #getCustomDataKey customDataKey}.
         * 
         * By defining a custom data key the `TablePersoController` will try to get the key for saving the perso data from the custom data of the Table and Column instead of creating it by concatenating the ID of the Table and the Column. Basically this will be more stable than using the auto IDs.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `persoKey`.
        */
        public setCustomDataKey(sCustomDataKey: string): this;

        /**
            * Sets a new value for property {@link #getPersoService persoService}.
         * 
         * Personalization Service object. Needs to have the following methods:  * getPersData() : `jQuery Promise` (http://api.jquery.com/promise/) * setPersData(oBundle) : `jQuery Promise` (http://api.jquery.com/promise/) * delPersData() : `jQuery Promise` (http://api.jquery.com/promise/) 
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPersoService(oPersoService: any): this;

        /**
            * Sets the associated {@link #getTable table}.
        */
        public setTable(oTable: sap.ui.core.ID | Table): this;

    }
}