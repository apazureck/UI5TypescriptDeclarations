declare module 'sap/m/TreeItemBase' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ListItemBase, IListItemBaseSettings } from 'sap/m/ListItemBase';

    export interface ITreeItemBaseSettings extends IListItemBaseSettings {
    }

    /**
    
    */
    export class TreeItemBase extends ListItemBase {

        /**
            * Constructor for a new TreeItemBase.
        */
        public constructor(sId: string, mSettings: ITreeItemBaseSettings);


        /**
            * Creates a new subclass of class sap.m.TreeItemBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets the expanding information of the node.
        */
        public getExpanded(): boolean;

        /**
            * Gets the context of the node.
        */
        public getItemNodeContext(): {};

        /**
            * Gets the node level in the hierarchy.
        */
        public getLevel(): number;

        /**
            * Returns a metadata object for class sap.m.TreeItemBase.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Gets the parent node control.
        */
        public getParentNode(): this | any;

        /**
            * Gets the context of the parent node control.
        */
        public getParentNodeContext(): {};

        /**
            * Determines if the node is a leaf.
        */
        public isLeaf(): boolean;

        /**
            * Checks if the node is the top level node.
        */
        public isTopLevel(): boolean;

    }
}