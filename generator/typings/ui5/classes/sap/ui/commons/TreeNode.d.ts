declare module 'sap/ui/commons/TreeNode' {
    import { Event } from 'sap/ui/base/Event';
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface ITreeNodeSettings extends IElementSettings {
        text?: string;
        expanded?: boolean;
        hasExpander?: boolean;
        icon?: sap.ui.core.URI;
        isSelected?: boolean;
        selectable?: boolean;
    }

    /**
    
    */
    export class TreeNode extends Element {

        /**
            * Constructor for a new TreeNode.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITreeNodeSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some node to the aggregation {@link #getNodes nodes}.
        */
        public addNode(oNode: this): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selected selected} event of this `sap.ui.commons.TreeNode`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TreeNode` itself.
         * 
         * Node is selected
        */
        attachSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selected selected} event of this `sap.ui.commons.TreeNode`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TreeNode` itself.
         * 
         * Node is selected
        */
        attachSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleOpenState toggleOpenState} event of this `sap.ui.commons.TreeNode`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TreeNode` itself.
         * 
         * Node state has changed.
        */
        attachToggleOpenState<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Node has been opened if true */
            opened: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleOpenState toggleOpenState} event of this `sap.ui.commons.TreeNode`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.TreeNode` itself.
         * 
         * Node state has changed.
        */
        attachToggleOpenState<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Node has been opened if true */
            opened: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Collapses the node.
        */
        public collapse(bCollapseChildren: boolean, bDisableCollapseFinishedHandler: boolean): any;

        /**
            * Destroys all the nodes in the aggregation {@link #getNodes nodes}.
        */
        public destroyNodes(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:selected selected} event of this `sap.ui.commons.TreeNode`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:toggleOpenState toggleOpenState} event of this `sap.ui.commons.TreeNode`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachToggleOpenState(fnFunction: (() => any), oListener: {}): this;

        /**
            * Expands the node.
        */
        public expand(bExpandChildren: boolean, bDisableExpandFinishedHandler: boolean): any;

        /**
            * Creates a new subclass of class sap.ui.commons.TreeNode with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:selected selected} to attached listeners.
        */
        protected fireSelected(mParameters?: {}): this;

        /**
            * Fires event {@link #event:toggleOpenState toggleOpenState} to attached listeners.
        */
        protected fireToggleOpenState(mParameters?: { opened?: boolean, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getExpanded expanded}.
         * 
         * Node is expanded
         * 
         * Default value is `true`.
        */
        public getExpanded(): boolean;

        /**
            * Gets current value of property {@link #getHasExpander hasExpander}.
         * 
         * Should the node has an expander.
         * 
         * Default value is `false`.
        */
        public getHasExpander(): boolean;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Icon to display in front of the node
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIsSelected isSelected}.
         * 
         * Node is selected
         * 
         * Default value is `false`.
        */
        public getIsSelected(): boolean;

        /**
            * Returns a metadata object for class sap.ui.commons.TreeNode.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Gets content of aggregation {@link #getNodes nodes}.
         * 
         * Subnodes for the current node
        */
        public getNodes(): {};

        /**
            * Gets current value of property {@link #getSelectable selectable}.
         * 
         * The node is selectable. If true, clicking on the node text triggers "selected" event
         * 
         * Default value is `true`.
        */
        public getSelectable(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Node text
        */
        public getText(): string;

        /**
            * Checks for the provided `sap.ui.commons.TreeNode` in the aggregation {@link #getNodes nodes}. and returns its index if found or -1 otherwise.
        */
        public indexOfNode(oNode: this): number;

        /**
            * Inserts a node into the aggregation {@link #getNodes nodes}.
        */
        public insertNode(oNode: this, iIndex: number): this;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getNodes nodes}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllNodes(): {};

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a node from the aggregation {@link #getNodes nodes}.
        */
        public removeNode(vNode: number | string | this): this;

        /**
            * Select the node, and if any, deselects the previously selected node
        */
        public select(bSuppressEvent: boolean): any;

        /**
            * Sets a new value for property {@link #getExpanded expanded}.
         * 
         * Node is expanded
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setExpanded(bExpanded: boolean): this;

        /**
            * Sets a new value for property {@link #getHasExpander hasExpander}.
         * 
         * Should the node has an expander.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setHasExpander(bHasExpander: boolean): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Icon to display in front of the node
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Redefinition of Setter for property `isSelected` for validation purpose
         * 
         * Default value is empty/`undefined`
        */
        public setIsSelected(bIsSelected: boolean): this;

        /**
            * Redefinition of Setter for property `selectable` for validation purpose.
         * 
         * Default value is `true`
        */
        public setSelectable(bSelectable: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Node text
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

    }
}