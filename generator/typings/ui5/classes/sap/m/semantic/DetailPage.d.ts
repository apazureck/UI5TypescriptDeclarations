declare module 'sap/m/semantic/DetailPage' {
    import { AddAction } from 'sap/m/semantic/AddAction';
    import { CancelAction } from 'sap/m/semantic/CancelAction';
    import { DeleteAction } from 'sap/m/semantic/DeleteAction';
    import { DiscussInJamAction } from 'sap/m/semantic/DiscussInJamAction';
    import { DraftIndicator } from 'sap/m/DraftIndicator';
    import { EditAction } from 'sap/m/semantic/EditAction';
    import { FavoriteAction } from 'sap/m/semantic/FavoriteAction';
    import { FlagAction } from 'sap/m/semantic/FlagAction';
    import { ForwardAction } from 'sap/m/semantic/ForwardAction';
    import { MainAction } from 'sap/m/semantic/MainAction';
    import { MessagesIndicator } from 'sap/m/semantic/MessagesIndicator';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { NegativeAction } from 'sap/m/semantic/NegativeAction';
    import { OpenInAction } from 'sap/m/semantic/OpenInAction';
    import { PagingButton } from 'sap/m/PagingButton';
    import { PositiveAction } from 'sap/m/semantic/PositiveAction';
    import { PrintAction } from 'sap/m/semantic/PrintAction';
    import { SaveAction } from 'sap/m/semantic/SaveAction';
    import { Button } from 'sap/m/Button';
    import { SendEmailAction } from 'sap/m/semantic/SendEmailAction';
    import { SendMessageAction } from 'sap/m/semantic/SendMessageAction';
    import { ShareInJamAction } from 'sap/m/semantic/ShareInJamAction';
    import { ShareMenuPage, IShareMenuPageSettings } from 'sap/m/semantic/ShareMenuPage';

    export interface IDetailPageSettings extends IShareMenuPageSettings {
    }

    /**
    
    */
    export class DetailPage extends ShareMenuPage {

        /**
            * Constructor for a new DetailPage
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDetailPageSettings);


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
            * Destroys the discussInJamAction in the aggregation {@link #getDiscussInJamAction discussInJamAction}.
        */
        public destroyDiscussInJamAction(): this;

        /**
            * Destroys the draftIndicator in the aggregation {@link #getDraftIndicator draftIndicator}.
        */
        public destroyDraftIndicator(): this;

        /**
            * Destroys the editAction in the aggregation {@link #getEditAction editAction}.
        */
        public destroyEditAction(): this;

        /**
            * Destroys the favoriteAction in the aggregation {@link #getFavoriteAction favoriteAction}.
        */
        public destroyFavoriteAction(): this;

        /**
            * Destroys the flagAction in the aggregation {@link #getFlagAction flagAction}.
        */
        public destroyFlagAction(): this;

        /**
            * Destroys the forwardAction in the aggregation {@link #getForwardAction forwardAction}.
        */
        public destroyForwardAction(): this;

        /**
            * Destroys the mainAction in the aggregation {@link #getMainAction mainAction}.
        */
        public destroyMainAction(): this;

        /**
            * Destroys the messagesIndicator in the aggregation {@link #getMessagesIndicator messagesIndicator}.
        */
        public destroyMessagesIndicator(): this;

        /**
            * Destroys the negativeAction in the aggregation {@link #getNegativeAction negativeAction}.
        */
        public destroyNegativeAction(): this;

        /**
            * Destroys the openInAction in the aggregation {@link #getOpenInAction openInAction}.
        */
        public destroyOpenInAction(): this;

        /**
            * Destroys the pagingAction in the aggregation {@link #getPagingAction pagingAction}.
        */
        public destroyPagingAction(): this;

        /**
            * Destroys the positiveAction in the aggregation {@link #getPositiveAction positiveAction}.
        */
        public destroyPositiveAction(): this;

        /**
            * Destroys the printAction in the aggregation {@link #getPrintAction printAction}.
        */
        public destroyPrintAction(): this;

        /**
            * Destroys the saveAction in the aggregation {@link #getSaveAction saveAction}.
        */
        public destroySaveAction(): this;

        /**
            * Destroys the saveAsTileAction in the aggregation {@link #getSaveAsTileAction saveAsTileAction}.
        */
        public destroySaveAsTileAction(): this;

        /**
            * Destroys the sendEmailAction in the aggregation {@link #getSendEmailAction sendEmailAction}.
        */
        public destroySendEmailAction(): this;

        /**
            * Destroys the sendMessageAction in the aggregation {@link #getSendMessageAction sendMessageAction}.
        */
        public destroySendMessageAction(): this;

        /**
            * Destroys the shareInJamAction in the aggregation {@link #getShareInJamAction shareInJamAction}.
        */
        public destroyShareInJamAction(): this;

        /**
            * Creates a new subclass of class sap.m.semantic.DetailPage with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.semantic.ShareMenuPage.extend}.
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
            * Gets content of aggregation {@link #getDiscussInJamAction discussInJamAction}.
         * 
         * DiscussInJam action
        */
        public getDiscussInJamAction(): DiscussInJamAction;

        /**
            * Gets content of aggregation {@link #getDraftIndicator draftIndicator}.
         * 
         * DraftIndicator
        */
        public getDraftIndicator(): DraftIndicator;

        /**
            * Gets content of aggregation {@link #getEditAction editAction}.
         * 
         * Edit action
        */
        public getEditAction(): EditAction;

        /**
            * Gets content of aggregation {@link #getFavoriteAction favoriteAction}.
         * 
         * Favorite action
        */
        public getFavoriteAction(): FavoriteAction;

        /**
            * Gets content of aggregation {@link #getFlagAction flagAction}.
         * 
         * Flag action
        */
        public getFlagAction(): FlagAction;

        /**
            * Gets content of aggregation {@link #getForwardAction forwardAction}.
         * 
         * Negative action
        */
        public getForwardAction(): ForwardAction;

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
            * Returns a metadata object for class sap.m.semantic.DetailPage.
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
            * Gets content of aggregation {@link #getNegativeAction negativeAction}.
         * 
         * Negative action
        */
        public getNegativeAction(): NegativeAction;

        /**
            * Gets content of aggregation {@link #getOpenInAction openInAction}.
         * 
         * OpenIn action
        */
        public getOpenInAction(): OpenInAction;

        /**
            * Gets content of aggregation {@link #getPagingAction pagingAction}.
         * 
         * Paging action
        */
        public getPagingAction(): PagingButton;

        /**
            * Gets content of aggregation {@link #getPositiveAction positiveAction}.
         * 
         * Positive action
        */
        public getPositiveAction(): PositiveAction;

        /**
            * Gets content of aggregation {@link #getPrintAction printAction}.
         * 
         * Print action
        */
        public getPrintAction(): PrintAction;

        /**
            * Gets content of aggregation {@link #getSaveAction saveAction}.
         * 
         * Save action
        */
        public getSaveAction(): SaveAction;

        /**
            * Gets content of aggregation {@link #getSaveAsTileAction saveAsTileAction}.
         * 
         * SaveAsTile button
        */
        public getSaveAsTileAction(): Button;

        /**
            * Gets content of aggregation {@link #getSendEmailAction sendEmailAction}.
         * 
         * SendEmail action
        */
        public getSendEmailAction(): SendEmailAction;

        /**
            * Gets content of aggregation {@link #getSendMessageAction sendMessageAction}.
         * 
         * SendMessage action
        */
        public getSendMessageAction(): SendMessageAction;

        /**
            * Gets content of aggregation {@link #getShareInJamAction shareInJamAction}.
         * 
         * ShareInJam action
        */
        public getShareInJamAction(): ShareInJamAction;

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
            * Sets the aggregated {@link #getDiscussInJamAction discussInJamAction}.
        */
        public setDiscussInJamAction(oDiscussInJamAction: DiscussInJamAction): this;

        /**
            * Sets the aggregated {@link #getDraftIndicator draftIndicator}.
        */
        public setDraftIndicator(oDraftIndicator: DraftIndicator): this;

        /**
            * Sets the aggregated {@link #getEditAction editAction}.
        */
        public setEditAction(oEditAction: EditAction): this;

        /**
            * Sets the aggregated {@link #getFavoriteAction favoriteAction}.
        */
        public setFavoriteAction(oFavoriteAction: FavoriteAction): this;

        /**
            * Sets the aggregated {@link #getFlagAction flagAction}.
        */
        public setFlagAction(oFlagAction: FlagAction): this;

        /**
            * Sets the aggregated {@link #getForwardAction forwardAction}.
        */
        public setForwardAction(oForwardAction: ForwardAction): this;

        /**
            * Sets the aggregated {@link #getMainAction mainAction}.
        */
        public setMainAction(oMainAction: MainAction): this;

        /**
            * Sets the aggregated {@link #getMessagesIndicator messagesIndicator}.
        */
        public setMessagesIndicator(oMessagesIndicator: MessagesIndicator): this;

        /**
            * Sets the aggregated {@link #getNegativeAction negativeAction}.
        */
        public setNegativeAction(oNegativeAction: NegativeAction): this;

        /**
            * Sets the aggregated {@link #getOpenInAction openInAction}.
        */
        public setOpenInAction(oOpenInAction: OpenInAction): this;

        /**
            * Sets the aggregated {@link #getPagingAction pagingAction}.
        */
        public setPagingAction(oPagingAction: PagingButton): this;

        /**
            * Sets the aggregated {@link #getPositiveAction positiveAction}.
        */
        public setPositiveAction(oPositiveAction: PositiveAction): this;

        /**
            * Sets the aggregated {@link #getPrintAction printAction}.
        */
        public setPrintAction(oPrintAction: PrintAction): this;

        /**
            * Sets the aggregated {@link #getSaveAction saveAction}.
        */
        public setSaveAction(oSaveAction: SaveAction): this;

        /**
            * Sets the aggregated {@link #getSaveAsTileAction saveAsTileAction}.
        */
        public setSaveAsTileAction(oSaveAsTileAction: Button): this;

        /**
            * Sets the aggregated {@link #getSendEmailAction sendEmailAction}.
        */
        public setSendEmailAction(oSendEmailAction: SendEmailAction): this;

        /**
            * Sets the aggregated {@link #getSendMessageAction sendMessageAction}.
        */
        public setSendMessageAction(oSendMessageAction: SendMessageAction): this;

        /**
            * Sets the aggregated {@link #getShareInJamAction shareInJamAction}.
        */
        public setShareInJamAction(oShareInJamAction: ShareInJamAction): this;

    }
}