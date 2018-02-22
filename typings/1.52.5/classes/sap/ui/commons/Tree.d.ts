declare module 'sap/ui/commons/Tree' {
    import { Event } from 'sap/ui/base/Event';
    import { TreeNode } from 'sap/ui/commons/TreeNode';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Context } from 'sap/ui/model/Context';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITreeSettings extends IControlSettings {
        title?: string;
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        showHeader?: boolean;
        showHeaderIcons?: boolean;
        showHorizontalScrollbar?: boolean;
        minWidth?: sap.ui.core.CSSSize;
        selectionMode?: sap.ui.commons.TreeSelectionMode;
    }

    /**
    
    */
    export class Tree extends Control {

        /**
            * Constructor for a new Tree.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITreeSettings);


        /**
            * Adds some node to the aggregation {@link #getNodes nodes}.
        */
        public addNode(oNode: TreeNode): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.Tree`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Tree` itself.
         * 
         * Event is fired when a tree node is selected.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The node which has been selected. */
            node: TreeNode, /* * The binding context of the selected node. */
            nodeContext: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.Tree`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Tree` itself.
         * 
         * Event is fired when a tree node is selected.
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The node which has been selected. */
            node: TreeNode, /* * The binding context of the selected node. */
            nodeContext: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.ui.commons.Tree`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Tree` itself.
         * 
         * fired when the selection of the tree has been changed
        */
        attachSelectionChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The nodes which has been selected. */
            nodes: {}, /* * The binding context of the selected nodes. */
            nodeContexts: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.ui.commons.Tree`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Tree` itself.
         * 
         * fired when the selection of the tree has been changed
        */
        attachSelectionChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The nodes which has been selected. */
            nodes: {}, /* * The binding context of the selected nodes. */
            nodeContexts: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getNodes nodes} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindNodes(oBindingInfo: {}): this;

        /**
            * Collapses all nodes in the tree.
        */
        public collapseAll(): any;

        /**
            * Destroys all the nodes in the aggregation {@link #getNodes nodes}.
        */
        public destroyNodes(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.commons.Tree`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of this `sap.ui.commons.Tree`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelectionChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Expands all nodes in the tree.
        */
        public expandAll(): any;

        /**
            * Creates a new subclass of class sap.ui.commons.Tree with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:select select} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireSelect(mParameters?: { node?: TreeNode, nodeContext?: {}, }): boolean;

        /**
            * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
        */
        protected fireSelectionChange(mParameters?: { nodes?: {}, nodeContexts?: {}, }): this;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Tree height
         * 
         * Default value is `auto`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.commons.Tree.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Gets current value of property {@link #getMinWidth minWidth}.
         * 
         * Minimal width for the Tree. Can be useful when, for example, the width is specified in percentage, to avoid the tree to become too narrow when container is resize
        */
        public getMinWidth(): sap.ui.core.CSSSize;

        /**
            * Returns the node with the given context, or null if no such node currently exists.
        */
        public getNodeByContext(oContext: Context): TreeNode;

        /**
            * Gets content of aggregation {@link #getNodes nodes}.
         * 
         * First level nodes
        */
        public getNodes(): {};

        /**
            * Gets current value of property {@link #getSelectionMode selectionMode}.
         * 
         * Selection mode of the Tree.
         * 
         * Default value is `Legacy`.
        */
        public getSelectionMode(): sap.ui.commons.TreeSelectionMode;

        /**
            * Gets current value of property {@link #getShowHeader showHeader}.
         * 
         * Tree Header is display. If false, the tree will be in a transparent mode
         * 
         * Default value is `true`.
        */
        public getShowHeader(): boolean;

        /**
            * Gets current value of property {@link #getShowHeaderIcons showHeaderIcons}.
         * 
         * Show Header icons (e.g. Expand/Collapse all). Only consider if showHeader is true
         * 
         * Default value is `true`.
        */
        public getShowHeaderIcons(): boolean;

        /**
            * Gets current value of property {@link #getShowHorizontalScrollbar showHorizontalScrollbar}.
         * 
         * Display horizontal scrollbar. If false, the overflow content will be hidden
         * 
         * Default value is `false`.
        */
        public getShowHorizontalScrollbar(): boolean;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Tree title
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Tree width
         * 
         * Default value is `auto`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.commons.TreeNode` in the aggregation {@link #getNodes nodes}. and returns its index if found or -1 otherwise.
        */
        public indexOfNode(oNode: TreeNode): number;

        /**
            * Inserts a node into the aggregation {@link #getNodes nodes}.
        */
        public insertNode(oNode: TreeNode, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getNodes nodes}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllNodes(): {};

        /**
            * Removes a node from the aggregation {@link #getNodes nodes}.
        */
        public removeNode(vNode: number | string | TreeNode): TreeNode;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Tree height
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getMinWidth minWidth}.
         * 
         * Minimal width for the Tree. Can be useful when, for example, the width is specified in percentage, to avoid the tree to become too narrow when container is resize
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMinWidth(sMinWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getSelectionMode selectionMode}.
         * 
         * Selection mode of the Tree.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Legacy`.
        */
        public setSelectionMode(sSelectionMode: sap.ui.commons.TreeSelectionMode): this;

        /**
            * Sets a new value for property {@link #getShowHeader showHeader}.
         * 
         * Tree Header is display. If false, the tree will be in a transparent mode
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowHeader(bShowHeader: boolean): this;

        /**
            * Sets a new value for property {@link #getShowHeaderIcons showHeaderIcons}.
         * 
         * Show Header icons (e.g. Expand/Collapse all). Only consider if showHeader is true
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowHeaderIcons(bShowHeaderIcons: boolean): this;

        /**
            * Sets a new value for property {@link #getShowHorizontalScrollbar showHorizontalScrollbar}.
         * 
         * Display horizontal scrollbar. If false, the overflow content will be hidden
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowHorizontalScrollbar(bShowHorizontalScrollbar: boolean): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Tree title
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Tree width
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Unbinds aggregation {@link #getNodes nodes} from model data.
        */
        public unbindNodes(): this;

    }
}