declare module 'sap/m/MessageView' {
    import { Event } from 'sap/ui/base/Event';
    import { Control } from 'sap/ui/core/Control';
    import { MessageItem } from 'sap/m/MessageItem';
    import { Button } from 'sap/m/Button';
    import { Metadata } from 'sap/ui/base/Metadata';


    export interface IMessageViewSettings {
        asyncDescriptionHandler?: any;
        asyncURLHandler?: any;
        groupItems?: boolean;
        showDetailsPageHeader?: boolean;
    }

    /**
    
    */
    export class MessageView {

        /**
            * Constructor for a new MessageView
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMessageViewSettings);


        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: MessageItem): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.MessageView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessageView` itself.
         * 
         * This event will be fired after the popover is opened
        */
        attachAfterOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This refers to the control which opens the popover */
            openBy: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.MessageView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessageView` itself.
         * 
         * This event will be fired after the popover is opened
        */
        attachAfterOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This refers to the control which opens the popover */
            openBy: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.m.MessageView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessageView` itself.
         * 
         * This event will be fired when description is shown
        */
        attachItemSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Refers to the message item that is being presented */
            item: MessageItem, /* * Refers to the type of messages being shown See sap.ui.core.MessageType values for types */
            messageTypeFilter: sap.ui.core.MessageType,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.m.MessageView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessageView` itself.
         * 
         * This event will be fired when description is shown
        */
        attachItemSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Refers to the message item that is being presented */
            item: MessageItem, /* * Refers to the type of messages being shown See sap.ui.core.MessageType values for types */
            messageTypeFilter: sap.ui.core.MessageType,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:listSelect listSelect} event of this `sap.m.MessageView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessageView` itself.
         * 
         * This event will be fired when one of the lists is shown when (not) filtered by type
        */
        attachListSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter refers to the type of messages being shown. */
            messageTypeFilter: sap.ui.core.MessageType,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:listSelect listSelect} event of this `sap.m.MessageView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessageView` itself.
         * 
         * This event will be fired when one of the lists is shown when (not) filtered by type
        */
        attachListSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter refers to the type of messages being shown. */
            messageTypeFilter: sap.ui.core.MessageType,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:longtextLoaded longtextLoaded} event of this `sap.m.MessageView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessageView` itself.
         * 
         * This event will be fired when the long text description data from a remote URL is loaded
        */
        attachLongtextLoaded<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:longtextLoaded longtextLoaded} event of this `sap.m.MessageView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessageView` itself.
         * 
         * This event will be fired when the long text description data from a remote URL is loaded
        */
        attachLongtextLoaded<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:urlValidated urlValidated} event of this `sap.m.MessageView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessageView` itself.
         * 
         * This event will be fired when a validation of a URL from long text description is ready
        */
        attachUrlValidated<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:urlValidated urlValidated} event of this `sap.m.MessageView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessageView` itself.
         * 
         * This event will be fired when a validation of a URL from long text description is ready
        */
        attachUrlValidated<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys the headerButton in the aggregation {@link #getHeaderButton headerButton}.
        */
        public destroyHeaderButton(): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterOpen afterOpen} event of this `sap.m.MessageView`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.m.MessageView`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachItemSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:listSelect listSelect} event of this `sap.m.MessageView`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachListSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:longtextLoaded longtextLoaded} event of this `sap.m.MessageView`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLongtextLoaded(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:urlValidated urlValidated} event of this `sap.m.MessageView`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUrlValidated(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.MessageView with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:afterOpen afterOpen} to attached listeners.
        */
        protected fireAfterOpen(mParameters?: { openBy?: Control, }): this;

        /**
            * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
        */
        protected fireItemSelect(mParameters?: { item?: MessageItem, messageTypeFilter?: sap.ui.core.MessageType, }): this;

        /**
            * Fires event {@link #event:listSelect listSelect} to attached listeners.
        */
        protected fireListSelect(mParameters?: { messageTypeFilter?: sap.ui.core.MessageType, }): this;

        /**
            * Fires event {@link #event:longtextLoaded longtextLoaded} to attached listeners.
        */
        protected fireLongtextLoaded(mParameters?: {}): this;

        /**
            * Fires event {@link #event:urlValidated urlValidated} to attached listeners.
        */
        protected fireUrlValidated(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getAsyncDescriptionHandler asyncDescriptionHandler}.
         * 
         * Callback function for resolving a promise after description has been asynchronously loaded inside this function
        */
        public getAsyncDescriptionHandler(): any;

        /**
            * Gets current value of property {@link #getAsyncURLHandler asyncURLHandler}.
         * 
         * Callback function for resolving a promise after a link has been asynchronously validated inside this function
        */
        public getAsyncURLHandler(): any;

        /**
            * Gets current value of property {@link #getGroupItems groupItems}.
         * 
         * Defines whether the MessageItems are grouped or not
         * 
         * Default value is `false`.
        */
        public getGroupItems(): boolean;

        /**
            * Gets content of aggregation {@link #getHeaderButton headerButton}.
         * 
         * A custom header button
        */
        public getHeaderButton(): Button;

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * A list with message items. If only one item is provided, the initial page will be the details page for the item.
        */
        public getItems(): {};

        /**
            * Returns a metadata object for class sap.m.MessageView.
        */
        public static getMetadata(): Metadata;

        /**
            * Gets current value of property {@link #getShowDetailsPageHeader showDetailsPageHeader}.
         * 
         * Defines whether the header of details page will be shown
         * 
         * Default value is `true`.
        */
        public getShowDetailsPageHeader(): boolean;

        /**
            * Checks for the provided `sap.m.MessageItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: MessageItem): number;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: MessageItem, iIndex: number): this;

        /**
            * Navigates back to the list page
        */
        public navigateBack(): any;

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | MessageItem): MessageItem;

        /**
            * Sets a new value for property {@link #getAsyncDescriptionHandler asyncDescriptionHandler}.
         * 
         * Callback function for resolving a promise after description has been asynchronously loaded inside this function
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAsyncDescriptionHandler(oAsyncDescriptionHandler: any): this;

        /**
            * Sets a new value for property {@link #getAsyncURLHandler asyncURLHandler}.
         * 
         * Callback function for resolving a promise after a link has been asynchronously validated inside this function
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAsyncURLHandler(oAsyncURLHandler: any): this;

        /**
            * Setter for default description and URL validation callbacks across all instances of MessageView
        */
        protected setDefaultHandlers(mDefaultHandlers: { asyncDescriptionHandler: (() => any), asyncURLHandler: (() => any), }): any;

        /**
            * Sets a new value for property {@link #getGroupItems groupItems}.
         * 
         * Defines whether the MessageItems are grouped or not
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setGroupItems(bGroupItems: boolean): this;

        /**
            * Sets the aggregated {@link #getHeaderButton headerButton}.
        */
        public setHeaderButton(oHeaderButton: Button): this;

        /**
            * Sets a new value for property {@link #getShowDetailsPageHeader showDetailsPageHeader}.
         * 
         * Defines whether the header of details page will be shown
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowDetailsPageHeader(bShowDetailsPageHeader: boolean): this;

    }
}