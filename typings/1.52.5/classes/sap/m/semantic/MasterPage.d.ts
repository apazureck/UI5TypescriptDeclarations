declare module 'sap/m/semantic/MasterPage' {
    import { AddAction } from 'sap/m/semantic/AddAction';
    import { CancelAction } from 'sap/m/semantic/CancelAction';
    import { DeleteAction } from 'sap/m/semantic/DeleteAction';
    import { EditAction } from 'sap/m/semantic/EditAction';
    import { ForwardAction } from 'sap/m/semantic/ForwardAction';
    import { MainAction } from 'sap/m/semantic/MainAction';
    import { MessagesIndicator } from 'sap/m/semantic/MessagesIndicator';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { MultiSelectAction } from 'sap/m/semantic/MultiSelectAction';
    import { NegativeAction } from 'sap/m/semantic/NegativeAction';
    import { PositiveAction } from 'sap/m/semantic/PositiveAction';
    import { SaveAction } from 'sap/m/semantic/SaveAction';
    import { SemanticPage, ISemanticPageSettings } from 'sap/m/semantic/SemanticPage';

    export interface IMasterPageSettings extends ISemanticPageSettings {
    }

    /**
    
    */
    export class MasterPage extends SemanticPage {

        /**
            * Constructor for a new MasterPage
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMasterPageSettings);


        /**
            * Destroys the addAction in the aggregation {@link #getAddAction addAction}.
        */
        public destroyAddAction(): this;

        /**
            * Destroys the cancelAction in the aggregation {@link #getCancelAction cancelAction}.
        */
        public destroyCancelAction(): this;

        /**
            * Destroys the deleteAction in the aggregation {@link #getDeleteAction deleteAction}.
        */
        public destroyDeleteAction(): this;

        /**
            * Destroys the editAction in the aggregation {@link #getEditAction editAction}.
        */
        public destroyEditAction(): this;

        /**
            * Destroys the filter in the aggregation {@link #getFilter filter}.
        */
        public destroyFilter(): this;

        /**
            * Destroys the forwardAction in the aggregation {@link #getForwardAction forwardAction}.
        */
        public destroyForwardAction(): this;

        /**
            * Destroys the group in the aggregation {@link #getGroup group}.
        */
        public destroyGroup(): this;

        /**
            * Destroys the mainAction in the aggregation {@link #getMainAction mainAction}.
        */
        public destroyMainAction(): this;

        /**
            * Destroys the messagesIndicator in the aggregation {@link #getMessagesIndicator messagesIndicator}.
        */
        public destroyMessagesIndicator(): this;

        /**
            * Destroys the multiSelectAction in the aggregation {@link #getMultiSelectAction multiSelectAction}.
        */
        public destroyMultiSelectAction(): this;

        /**
            * Destroys the negativeAction in the aggregation {@link #getNegativeAction negativeAction}.
        */
        public destroyNegativeAction(): this;

        /**
            * Destroys the positiveAction in the aggregation {@link #getPositiveAction positiveAction}.
        */
        public destroyPositiveAction(): this;

        /**
            * Destroys the saveAction in the aggregation {@link #getSaveAction saveAction}.
        */
        public destroySaveAction(): this;

        /**
            * Destroys the sort in the aggregation {@link #getSort sort}.
        */
        public destroySort(): this;

        /**
            * Creates a new subclass of class sap.m.semantic.MasterPage with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.semantic.SemanticPage.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getAddAction addAction}.
         * 
         * Add action
        */
        public getAddAction(): AddAction;

        /**
            * Gets content of aggregation {@link #getCancelAction cancelAction}.
         * 
         * Cancel action
        */
        public getCancelAction(): CancelAction;

        /**
            * Gets content of aggregation {@link #getDeleteAction deleteAction}.
         * 
         * Delete action
        */
        public getDeleteAction(): DeleteAction;

        /**
            * Gets content of aggregation {@link #getEditAction editAction}.
         * 
         * Edit action
        */
        public getEditAction(): EditAction;

        /**
            * Gets content of aggregation {@link #getFilter filter}.
         * 
         * Filter action
        */
        public getFilter(): sap.m.semantic.IFilter;

        /**
            * Gets content of aggregation {@link #getForwardAction forwardAction}.
         * 
         * Forward action
        */
        public getForwardAction(): ForwardAction;

        /**
            * Gets content of aggregation {@link #getGroup group}.
         * 
         * Group action
        */
        public getGroup(): sap.m.semantic.IGroup;

        /**
            * Gets content of aggregation {@link #getMainAction mainAction}.
         * 
         * Main action
        */
        public getMainAction(): MainAction;

        /**
            * Gets content of aggregation {@link #getMessagesIndicator messagesIndicator}.
         * 
         * MessagesIndicator
        */
        public getMessagesIndicator(): MessagesIndicator;

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
            * Returns a metadata object for class sap.m.semantic.MasterPage.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets content of aggregation {@link #getMultiSelectAction multiSelectAction}.
         * 
         * MultiSelect action
        */
        public getMultiSelectAction(): MultiSelectAction;

        /**
            * Gets content of aggregation {@link #getNegativeAction negativeAction}.
         * 
         * Negative action
        */
        public getNegativeAction(): NegativeAction;

        /**
            * Gets content of aggregation {@link #getPositiveAction positiveAction}.
         * 
         * Positive action
        */
        public getPositiveAction(): PositiveAction;

        /**
            * Gets content of aggregation {@link #getSaveAction saveAction}.
         * 
         * Save action
        */
        public getSaveAction(): SaveAction;

        /**
            * Gets content of aggregation {@link #getSort sort}.
         * 
         * Sort action
        */
        public getSort(): sap.m.semantic.ISort;

        /**
            * Sets the aggregated {@link #getAddAction addAction}.
        */
        public setAddAction(oAddAction: AddAction): this;

        /**
            * Sets the aggregated {@link #getCancelAction cancelAction}.
        */
        public setCancelAction(oCancelAction: CancelAction): this;

        /**
            * Sets the aggregated {@link #getDeleteAction deleteAction}.
        */
        public setDeleteAction(oDeleteAction: DeleteAction): this;

        /**
            * Sets the aggregated {@link #getEditAction editAction}.
        */
        public setEditAction(oEditAction: EditAction): this;

        /**
            * Sets the aggregated {@link #getFilter filter}.
        */
        public setFilter(oFilter: sap.m.semantic.IFilter): this;

        /**
            * Sets the aggregated {@link #getForwardAction forwardAction}.
        */
        public setForwardAction(oForwardAction: ForwardAction): this;

        /**
            * Sets the aggregated {@link #getGroup group}.
        */
        public setGroup(oGroup: sap.m.semantic.IGroup): this;

        /**
            * Sets the aggregated {@link #getMainAction mainAction}.
        */
        public setMainAction(oMainAction: MainAction): this;

        /**
            * Sets the aggregated {@link #getMessagesIndicator messagesIndicator}.
        */
        public setMessagesIndicator(oMessagesIndicator: MessagesIndicator): this;

        /**
            * Sets the aggregated {@link #getMultiSelectAction multiSelectAction}.
        */
        public setMultiSelectAction(oMultiSelectAction: MultiSelectAction): this;

        /**
            * Sets the aggregated {@link #getNegativeAction negativeAction}.
        */
        public setNegativeAction(oNegativeAction: NegativeAction): this;

        /**
            * Sets the aggregated {@link #getPositiveAction positiveAction}.
        */
        public setPositiveAction(oPositiveAction: PositiveAction): this;

        /**
            * Sets the aggregated {@link #getSaveAction saveAction}.
        */
        public setSaveAction(oSaveAction: SaveAction): this;

        /**
            * Sets the aggregated {@link #getSort sort}.
        */
        public setSort(oSort: sap.m.semantic.ISort): this;

    }
}