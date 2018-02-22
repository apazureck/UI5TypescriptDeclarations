declare module 'sap/m/TablePersoProvider' {
    import { Column } from 'sap/m/Column';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface ITablePersoProviderSettings extends IManagedObjectSettings {
    }

    /**
    
    */
    export class TablePersoProvider extends ManagedObject {


        /**
            * Removes the personalization bundle This must return a jQuery promise (see http://api.jquery.com/promise/)
        */
        public delPersData(): any;

        /**
            * Creates a new subclass of class sap.m.TablePersoProvider with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Callback function which can be used to determine the title of a given column within the TablePersoDialog. As a default, the column header controls are asked for their 'text' or 'title' property. This works in most cases, for example if the header control is an sap.m.Label (has 'text' property) or an sap.m.ObjectListItem (has 'title' property).
         * 
         * If the header control used in a column has neither 'text' nor 'title' property, or if you would like to display a modified column name for a certain column, this callback function can be used.
         * 
         * If the callback delivers null for a column (which is the default implementation), the default texts described above are displayed for that column in the TablePersoDialog.
         * 
         * In case neither the callback delivers null and neither 'text' nor ' title' property are at hand, the TablePersoDialog will display the column id and a warning message is logged.
        */
        public getCaption(oColumn: Column): any;

        /**
            * Callback function which can be used to determine the group of a given column within the TablePersoDialog. As a default, the columns are not assigned to a group.
         * 
         * This information is used to group the columns within the TablePersoDialog if the TablePersoController's 'group' flag is set, otherwise, the groups are ignored.
        */
        public getGroup(oColumn: Column): any;

        /**
            * Returns a metadata object for class sap.m.TablePersoProvider.
        */
        public static getMetadata(): Metadata | any;

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
            * Retrieves the personalization bundle. This must return a jQuery promise (see http://api.jquery.com/promise/)
        */
        public getPersData(): any;

        /**
            * Initializes the TablePersoProvider instance after creation.
        */
        protected init(): any;

        /**
            * Resets user’s personalization for a given table so that ‘getPersData’ will deliver its initial state. If no table is specified, all personalizations of the currently logged on user are reset.
         * 
         * This must return a jQuery promise (see http://api.jquery.com/promise/)
        */
        public resetPersData(): any;

        /**
            * Stores the personalization bundle, overwriting any previous bundle completely This must return a jQuery promise (see http://api.jquery.com/promise/)
        */
        public setPersData(oBundle: {}): any;

    }
}