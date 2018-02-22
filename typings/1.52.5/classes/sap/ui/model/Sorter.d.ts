declare module 'sap/ui/model/Sorter' {
    import { Context } from 'sap/ui/model/Context';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface ISorterSettings extends IObjectSettings {
    }

    /**
    
    */
    export class Sorter extends Object {

        /**
            * Constructor for Sorter
        */
        public constructor(sPath: string, bDescending: boolean, vGroup: boolean | (() => any), fnComparator: (() => any));


        /**
            * Compares two values
         * 
         * This is the default comparator function used for clientside sorting, if no custom comparator is given in the constructor. It does compare just by using equal/less than/greater than with automatic type casting, except for null values, which are always last, and string values where localeCompare is used.
         * 
         * The comparator method returns -1, 0 or 1, depending on the order of the two items and is suitable to be used as a comparator method for Array.sort.
        */
        public static defaultComparator(a: any, b: any): number;

        /**
            * Creates a new subclass of class sap.ui.model.Sorter with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a group object, at least containing a key property for group detection. May contain additional properties as provided by a custom group function.
        */
        public getGroup(oContext: Context): {};

        /**
            * Returns the group function of this Sorter. If grouping is not enabled on this Sorter, it will return undefined, if no explicit group function has been defined the default group function is returned. The returned function is bound to its Sorter, so it will group according to its own property path, even if it is used in the context of another Sorter.
        */
        public getGroupFunction(): (() => any);

        /**
            * Returns a metadata object for class sap.ui.model.Sorter.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

    }
}