declare module 'sap/ui/ux3/FeedChunk' {
    import { Event } from 'sap/ui/base/Event';
    import { MenuItemBase } from 'sap/ui/unified/MenuItemBase';
    import { MenuItem } from 'sap/ui/commons/MenuItem';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IFeedChunkSettings extends IControlSettings {
        thumbnailSrc?: sap.ui.core.URI;
        text?: string;
        sender?: string;
        timestamp?: string;
        deletionAllowed?: boolean;
        commentChunk?: boolean;
        feederThumbnailSrc?: sap.ui.core.URI;
        feederSender?: string;
        flagged?: boolean;
        favorite?: boolean;
        shared?: boolean;
        enableFlag?: boolean;
        enableShare?: boolean;
        enableComment?: boolean;
        enableInspect?: boolean;
        enableFavorite?: boolean;
    }

    /**
    
    */
    export class FeedChunk extends Control {

        /**
            * Constructor for a new FeedChunk.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFeedChunkSettings);


        /**
            * Adds some actionMenuItem to the aggregation {@link #getActionMenuItems actionMenuItems}.
        */
        public addActionMenuItem(oActionMenuItem: MenuItem): this;

        /**
            * Adds some comment to the aggregation {@link #getComments comments}.
        */
        public addComment(oComment: this): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:actionItemSelected actionItemSelected} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is fired when an item from the action menu button was selected.
        */
        attachActionItemSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The Id of the selected item */
            itemId: string, /* * The selected item */
            item: MenuItemBase,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:actionItemSelected actionItemSelected} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is fired when an item from the action menu button was selected.
        */
        attachActionItemSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The Id of the selected item */
            itemId: string, /* * The selected item */
            item: MenuItemBase,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:commentAdded commentAdded} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is raised when a comment is added to the entry. This event is not supported for comment chunks.
        */
        attachCommentAdded<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * New comment chunk */
            comment: FeedChunk,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:commentAdded commentAdded} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is raised when a comment is added to the entry. This event is not supported for comment chunks.
        */
        attachCommentAdded<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * New comment chunk */
            comment: FeedChunk,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:deleted deleted} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is fired when the deletion button is pressed.
        */
        attachDeleted<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:deleted deleted} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is fired when the deletion button is pressed.
        */
        attachDeleted<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:inspect inspect} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is fired when the inspect button was pressed
        */
        attachInspect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:inspect inspect} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is fired when the inspect button was pressed
        */
        attachInspect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:referenceClicked referenceClicked} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Click on a @-reference
        */
        attachReferenceClicked<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Text of the @-reference */
            text: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:referenceClicked referenceClicked} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Click on a @-reference
        */
        attachReferenceClicked<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Text of the @-reference */
            text: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:senderClicked senderClicked} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is fired when the thumbnail or the name of the sender is clicked.
        */
        attachSenderClicked<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:senderClicked senderClicked} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is fired when the thumbnail or the name of the sender is clicked.
        */
        attachSenderClicked<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleFavorite toggleFavorite} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment chunks.
        */
        attachToggleFavorite<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current favorite state */
            favorite: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleFavorite toggleFavorite} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is raised when the user clicks to set the entry as favorite. This event is not supported for comment chunks.
        */
        attachToggleFavorite<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current favorite state */
            favorite: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleFlagged toggleFlagged} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks.
        */
        attachToggleFlagged<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current flagged state */
            flagged: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleFlagged toggleFlagged} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is raised when the user clicks to flag the entry. This event is not supported for comment chunks.
        */
        attachToggleFlagged<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current flagged state */
            flagged: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleShared toggleShared} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks.
        */
        attachToggleShared<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current shared state */
            shareed: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:toggleShared toggleShared} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.FeedChunk` itself.
         * 
         * Event is raised when the user clicks to share the entry. This event is not supported for comment chunks.
        */
        attachToggleShared<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current shared state */
            shareed: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getActionMenuItems actionMenuItems} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindActionMenuItems(oBindingInfo: {}): this;

        /**
            * Binds aggregation {@link #getComments comments} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindComments(oBindingInfo: {}): this;

        /**
            * Destroys all the actionMenuItems in the aggregation {@link #getActionMenuItems actionMenuItems}.
        */
        public destroyActionMenuItems(): this;

        /**
            * Destroys all the comments in the aggregation {@link #getComments comments}.
        */
        public destroyComments(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:actionItemSelected actionItemSelected} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachActionItemSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:commentAdded commentAdded} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachCommentAdded(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:deleted deleted} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDeleted(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:inspect inspect} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachInspect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:referenceClicked referenceClicked} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachReferenceClicked(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:senderClicked senderClicked} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSenderClicked(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:toggleFavorite toggleFavorite} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachToggleFavorite(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:toggleFlagged toggleFlagged} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachToggleFlagged(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:toggleShared toggleShared} event of this `sap.ui.ux3.FeedChunk`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachToggleShared(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.FeedChunk with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:actionItemSelected actionItemSelected} to attached listeners.
        */
        protected fireActionItemSelected(mParameters?: { itemId?: string, item?: MenuItemBase, }): this;

        /**
            * Fires event {@link #event:commentAdded commentAdded} to attached listeners.
        */
        protected fireCommentAdded(mParameters?: { comment?: FeedChunk, }): this;

        /**
            * Fires event {@link #event:deleted deleted} to attached listeners.
        */
        protected fireDeleted(mParameters?: {}): this;

        /**
            * Fires event {@link #event:inspect inspect} to attached listeners.
        */
        protected fireInspect(mParameters?: {}): this;

        /**
            * Fires event {@link #event:referenceClicked referenceClicked} to attached listeners.
        */
        protected fireReferenceClicked(mParameters?: { text?: string, }): this;

        /**
            * Fires event {@link #event:senderClicked senderClicked} to attached listeners.
        */
        protected fireSenderClicked(mParameters?: {}): this;

        /**
            * Fires event {@link #event:toggleFavorite toggleFavorite} to attached listeners.
        */
        protected fireToggleFavorite(mParameters?: { favorite?: boolean, }): this;

        /**
            * Fires event {@link #event:toggleFlagged toggleFlagged} to attached listeners.
        */
        protected fireToggleFlagged(mParameters?: { flagged?: boolean, }): this;

        /**
            * Fires event {@link #event:toggleShared toggleShared} to attached listeners.
        */
        protected fireToggleShared(mParameters?: { shareed?: boolean, }): this;

        /**
            * Gets content of aggregation {@link #getActionMenuItems actionMenuItems}.
         * 
         * MenuItems to open when there is a click on the action menu button
        */
        public getActionMenuItems(): {};

        /**
            * Gets current value of property {@link #getCommentChunk commentChunk}.
         * 
         * This flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments, furthermore it must be assigned to a FeedChunk.
         * 
         * Default value is `false`.
        */
        public getCommentChunk(): boolean;

        /**
            * Gets content of aggregation {@link #getComments comments}.
         * 
         * Comments on this chunk
        */
        public getComments(): {};

        /**
            * Gets current value of property {@link #getDeletionAllowed deletionAllowed}.
         * 
         * Flag if the deletion of the chunk shall be allowed
         * 
         * Default value is `false`.
        */
        public getDeletionAllowed(): boolean;

        /**
            * Gets current value of property {@link #getEnableComment enableComment}.
         * 
         * If true the comment action is enabled.
         * 
         * Default value is `true`.
        */
        public getEnableComment(): boolean;

        /**
            * Gets current value of property {@link #getEnableFavorite enableFavorite}.
         * 
         * If true the favorite action is enabled.
         * 
         * Default value is `true`.
        */
        public getEnableFavorite(): boolean;

        /**
            * Gets current value of property {@link #getEnableFlag enableFlag}.
         * 
         * If true the flag action is enabled.
         * 
         * Default value is `true`.
        */
        public getEnableFlag(): boolean;

        /**
            * Gets current value of property {@link #getEnableInspect enableInspect}.
         * 
         * If true the inspect action is enabled.
         * 
         * Default value is `true`.
        */
        public getEnableInspect(): boolean;

        /**
            * Gets current value of property {@link #getEnableShare enableShare}.
         * 
         * If true the share action is enabled.
         * 
         * Default value is `true`.
        */
        public getEnableShare(): boolean;

        /**
            * Gets current value of property {@link #getFavorite favorite}.
         * 
         * Defines whether the entry shall be displayed as favorite. This property is not supported for comment chunks.
        */
        public getFavorite(): boolean;

        /**
            * Gets current value of property {@link #getFeederSender feederSender}.
         * 
         * Sender for the comment feeder This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.
        */
        public getFeederSender(): string;

        /**
            * Gets current value of property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
         * 
         * URL to the thumbnail image for the comment feeder. This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.
        */
        public getFeederThumbnailSrc(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getFlagged flagged}.
         * 
         * Defines whether the entry is flagged. This property is not supported for comment chunks.
         * 
         * Default value is `false`.
        */
        public getFlagged(): boolean;

        /**
            * Returns a metadata object for class sap.ui.ux3.FeedChunk.
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
            * Gets current value of property {@link #getSender sender}.
         * 
         * Sender of the chunk
        */
        public getSender(): string;

        /**
            * Gets current value of property {@link #getShared shared}.
         * 
         * Defines whether the entry shall be shared. This property is not supported for comment chunks.
         * 
         * Default value is `false`.
        */
        public getShared(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * The FeedChunk text. @References are supported.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getThumbnailSrc thumbnailSrc}.
         * 
         * URL to the thumbnail image.
        */
        public getThumbnailSrc(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getTimestamp timestamp}.
         * 
         * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone
        */
        public getTimestamp(): string;

        /**
            * Checks for the provided `sap.ui.commons.MenuItem` in the aggregation {@link #getActionMenuItems actionMenuItems}. and returns its index if found or -1 otherwise.
        */
        public indexOfActionMenuItem(oActionMenuItem: MenuItem): number;

        /**
            * Checks for the provided `sap.ui.ux3.FeedChunk` in the aggregation {@link #getComments comments}. and returns its index if found or -1 otherwise.
        */
        public indexOfComment(oComment: this): number;

        /**
            * Inserts a actionMenuItem into the aggregation {@link #getActionMenuItems actionMenuItems}.
        */
        public insertActionMenuItem(oActionMenuItem: MenuItem, iIndex: number): this;

        /**
            * Inserts a comment into the aggregation {@link #getComments comments}.
        */
        public insertComment(oComment: this, iIndex: number): this;

        /**
            * Removes a actionMenuItem from the aggregation {@link #getActionMenuItems actionMenuItems}.
        */
        public removeActionMenuItem(vActionMenuItem: number | string | MenuItem): MenuItem;

        /**
            * Removes all the controls from the aggregation {@link #getActionMenuItems actionMenuItems}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllActionMenuItems(): {};

        /**
            * Removes all the controls from the aggregation {@link #getComments comments}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllComments(): {};

        /**
            * Removes a comment from the aggregation {@link #getComments comments}.
        */
        public removeComment(vComment: number | string | this): this;

        /**
            * Sets a new value for property {@link #getCommentChunk commentChunk}.
         * 
         * This flag changes a FeedChunk into a CommentChunk. In this case, it can not have own comments, furthermore it must be assigned to a FeedChunk.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setCommentChunk(bCommentChunk: boolean): this;

        /**
            * Sets a new value for property {@link #getDeletionAllowed deletionAllowed}.
         * 
         * Flag if the deletion of the chunk shall be allowed
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDeletionAllowed(bDeletionAllowed: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableComment enableComment}.
         * 
         * If true the comment action is enabled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableComment(bEnableComment: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableFavorite enableFavorite}.
         * 
         * If true the favorite action is enabled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableFavorite(bEnableFavorite: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableFlag enableFlag}.
         * 
         * If true the flag action is enabled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableFlag(bEnableFlag: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableInspect enableInspect}.
         * 
         * If true the inspect action is enabled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableInspect(bEnableInspect: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableShare enableShare}.
         * 
         * If true the share action is enabled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableShare(bEnableShare: boolean): this;

        /**
            * Sets a new value for property {@link #getFavorite favorite}.
         * 
         * Defines whether the entry shall be displayed as favorite. This property is not supported for comment chunks.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFavorite(bFavorite: boolean): this;

        /**
            * Sets a new value for property {@link #getFeederSender feederSender}.
         * 
         * Sender for the comment feeder This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFeederSender(sFeederSender: string): this;

        /**
            * Sets a new value for property {@link #getFeederThumbnailSrc feederThumbnailSrc}.
         * 
         * URL to the thumbnail image for the comment feeder. This property is optional if the chunk is a sub-control of a feed control. In this case the value of the feed control is used if it's not set. So it must be only set once on the feed control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFeederThumbnailSrc(sFeederThumbnailSrc: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getFlagged flagged}.
         * 
         * Defines whether the entry is flagged. This property is not supported for comment chunks.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFlagged(bFlagged: boolean): this;

        /**
            * Sets a new value for property {@link #getSender sender}.
         * 
         * Sender of the chunk
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSender(sSender: string): this;

        /**
            * Sets a new value for property {@link #getShared shared}.
         * 
         * Defines whether the entry shall be shared. This property is not supported for comment chunks.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShared(bShared: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The FeedChunk text. @References are supported.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getThumbnailSrc thumbnailSrc}.
         * 
         * URL to the thumbnail image.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setThumbnailSrc(sThumbnailSrc: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getTimestamp timestamp}.
         * 
         * Format is ISO 8601 YYYY-MM-DDThh:mm:ss.sZ, Z meaning the time is in UTC time zone
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTimestamp(sTimestamp: string): this;

        /**
            * Unbinds aggregation {@link #getActionMenuItems actionMenuItems} from model data.
        */
        public unbindActionMenuItems(): this;

        /**
            * Unbinds aggregation {@link #getComments comments} from model data.
        */
        public unbindComments(): this;

    }
}