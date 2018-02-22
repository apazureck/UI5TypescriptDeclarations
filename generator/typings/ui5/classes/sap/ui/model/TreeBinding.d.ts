declare module 'sap/ui/model/TreeBinding' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Model } from 'sap/ui/model/Model';
    import { Binding, IBindingSettings } from 'sap/ui/model/Binding';

    export interface ITreeBindingSettings extends IBindingSettings {
    }

    /**
    
    */
    export class TreeBinding extends Binding {

        /**
            * Constructor for TreeBinding
        */
        public constructor(oModel: Model, sPath: string, oContext: {}, aFilters: any[], mParameters: {}, aSorters: any[]);


        /**
            * Attach event-handler `fnFunction` to the '_filter' event of this `sap.ui.model.TreeBinding`.
         * 
        */
        protected attachFilter(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Detach event-handler `fnFunction` from the '_filter' event of this `sap.ui.model.TreeBinding`.
         * 
        */
        protected detachFilter(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Creates a new subclass of class sap.ui.model.TreeBinding with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.Binding.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Filters the tree according to the filter definitions.
        */
        public filter(aFilters: {}, sFilterType: sap.ui.model.FilterType): any;

        /**
            * Returns the number of child nodes of a specific context
        */
        public getChildCount(oContext: {}): number;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.model.TreeBinding.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the current value of the bound target
        */
        public getNodeContexts(oContext: {}, iStartIndex: number, iLength: number): any[];

        /**
            * Returns the current value of the bound target
        */
        public getRootContexts(iStartIndex: number, iLength: number): any[];

        /**
            * Returns if the node has child nodes
        */
        public hasChildren(oContext: {}): boolean;

        /**
            * Sorts the tree according to the sorter definitions.
        */
        public sort(aSorters: {}): any;

    }
}