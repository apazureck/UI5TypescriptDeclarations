declare module 'sap/m/FeedListItem' {
    import { Event } from 'sap/ui/base/Event';
    import { FeedListItemAction } from 'sap/m/FeedListItemAction';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ListItemBase, IListItemBaseSettings } from 'sap/m/ListItemBase';

    export interface IFeedListItemSettings extends IListItemBaseSettings {
        icon?: sap.ui.core.URI;
        activeIcon?: sap.ui.core.URI;
        sender?: string;
        text?: string;
        info?: string;
        timestamp?: string;
        senderActive?: boolean;
        iconActive?: boolean;
        iconDensityAware?: boolean;
        showIcon?: boolean;
        convertLinksToAnchorTags?: sap.m.LinkConversion;
        convertedLinksDefaultTarget?: string;
        maxCharacters?: number;
    }

    /**
    
    */
    export class FeedListItem extends ListItemBase {

        /**
            * Constructor for a new FeedListItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFeedListItemSettings);


        /**
            * Adds some action to the aggregation {@link #getActions actions}.
        */
        public addAction(oAction: FeedListItemAction): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:iconPress iconPress} event of this `sap.m.FeedListItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FeedListItem` itself.
         * 
         * Event is fired when the icon is pressed.
        */
        attachIconPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Dom reference of the feed item's icon to be used for positioning. */
            domRef: string, /* * Function to retrieve the DOM reference for the <code>iconPress</code> event. The function returns the DOM element of the icon or null */
            getDomRef: (() => any),
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:iconPress iconPress} event of this `sap.m.FeedListItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FeedListItem` itself.
         * 
         * Event is fired when the icon is pressed.
        */
        attachIconPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Dom reference of the feed item's icon to be used for positioning. */
            domRef: string, /* * Function to retrieve the DOM reference for the <code>iconPress</code> event. The function returns the DOM element of the icon or null */
            getDomRef: (() => any),
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:senderPress senderPress} event of this `sap.m.FeedListItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FeedListItem` itself.
         * 
         * Event is fired when name of the sender is pressed.
        */
        attachSenderPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Dom reference of the feed item's sender string to be used for positioning. */
            domRef: string, /* * Function to retrieve the DOM reference for the <code>senderPress</code> event. The function returns the DOM element of the sender link or null */
            getDomRef: (() => any),
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:senderPress senderPress} event of this `sap.m.FeedListItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.FeedListItem` itself.
         * 
         * Event is fired when name of the sender is pressed.
        */
        attachSenderPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Dom reference of the feed item's sender string to be used for positioning. */
            domRef: string, /* * Function to retrieve the DOM reference for the <code>senderPress</code> event. The function returns the DOM element of the sender link or null */
            getDomRef: (() => any),
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the actions in the aggregation {@link #getActions actions}.
        */
        public destroyActions(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:iconPress iconPress} event of this `sap.m.FeedListItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachIconPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:senderPress senderPress} event of this `sap.m.FeedListItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSenderPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.FeedListItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ListItemBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:iconPress iconPress} to attached listeners.
        */
        protected fireIconPress(mParameters?: { domRef?: string, getDomRef?: (() => any), }): this;

        /**
            * Fires event {@link #event:senderPress senderPress} to attached listeners.
        */
        protected fireSenderPress(mParameters?: { domRef?: string, getDomRef?: (() => any), }): this;

        /**
            * Gets content of aggregation {@link #getActions actions}.
         * 
         * Contains {@link sap.m.FeedListItemAction elements} that are displayed in the action sheet.
        */
        public getActions(): {};

        /**
            * Gets current value of property {@link #getActiveIcon activeIcon}.
         * 
         * Icon displayed when the list item is active.
        */
        public getActiveIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getConvertedLinksDefaultTarget convertedLinksDefaultTarget}.
         * 
         * Determines the target attribute of the generated HTML anchor tags. Note: Applicable only if ConvertLinksToAnchorTags property is used with a value other than sap.m.LinkConversion.None. Options are the standard values for the target attribute of the HTML anchor tag: _self, _top, _blank, _parent, _search.
         * 
         * Default value is `_blank`.
        */
        public getConvertedLinksDefaultTarget(): string;

        /**
            * Gets current value of property {@link #getConvertLinksToAnchorTags convertLinksToAnchorTags}.
         * 
         * Determines whether strings that appear to be links will be converted to HTML anchor tags, and what are the criteria for recognizing them.
         * 
         * Default value is `None`.
        */
        public getConvertLinksToAnchorTags(): sap.m.LinkConversion;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Icon to be displayed as graphical element within the FeedListItem. This can be an image or an icon from the icon font. If no icon is provided, a default person-placeholder icon is displayed. Icon is only shown if showIcon = true.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconActive iconActive}.
         * 
         * If true, icon is a link, which will fire 'iconPress' events. If false, icon is normal image
         * 
         * Default value is `true`.
        */
        public getIconActive(): boolean;

        /**
            * Gets current value of property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If bandwidth is the key for the application, set this value to false.
         * 
         * Default value is `true`.
        */
        public getIconDensityAware(): boolean;

        /**
            * Gets current value of property {@link #getInfo info}.
         * 
         * The Info text.
        */
        public getInfo(): string;

        /**
            * Gets current value of property {@link #getMaxCharacters maxCharacters}.
         * 
         * The expand and collapse feature is set by default and uses 300 characters on mobile devices and 500 characters on desktops as limits. Based on these values, the text of the FeedListItem is collapsed once text reaches these limits. In this case, only the specified number of characters is displayed. By clicking on the text link More, the entire text can be displayed. The text link Less collapses the text. The application is able to set the value to its needs.
        */
        public getMaxCharacters(): number;

        /**
            * Returns a metadata object for class sap.m.FeedListItem.
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
            * Gets current value of property {@link #getSenderActive senderActive}.
         * 
         * If true, sender string is a link, which will fire 'senderPress' events. If false, sender is normal text.
         * 
         * Default value is `true`.
        */
        public getSenderActive(): boolean;

        /**
            * Gets current value of property {@link #getShowIcon showIcon}.
         * 
         * If set to "true" (default), icons will be displayed, if set to false icons are hidden
         * 
         * Default value is `true`.
        */
        public getShowIcon(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * The FeedListItem text. It supports html formatted tags as described in the documentation of sap.m.FormattedText
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTimestamp timestamp}.
         * 
         * This chunks timestamp
        */
        public getTimestamp(): string;

        /**
            * Checks for the provided `sap.m.FeedListItemAction` in the aggregation {@link #getActions actions}. and returns its index if found or -1 otherwise.
        */
        public indexOfAction(oAction: FeedListItemAction): number;

        /**
            * Inserts a action into the aggregation {@link #getActions actions}.
        */
        public insertAction(oAction: FeedListItemAction, iIndex: number): this;

        /**
            * Removes a action from the aggregation {@link #getActions actions}.
        */
        public removeAction(vAction: number | string | FeedListItemAction): FeedListItemAction;

        /**
            * Removes all the controls from the aggregation {@link #getActions actions}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllActions(): {};

        /**
            * Sets a new value for property {@link #getActiveIcon activeIcon}.
         * 
         * Icon displayed when the list item is active.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setActiveIcon(sActiveIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getConvertedLinksDefaultTarget convertedLinksDefaultTarget}.
         * 
         * Determines the target attribute of the generated HTML anchor tags. Note: Applicable only if ConvertLinksToAnchorTags property is used with a value other than sap.m.LinkConversion.None. Options are the standard values for the target attribute of the HTML anchor tag: _self, _top, _blank, _parent, _search.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `_blank`.
        */
        public setConvertedLinksDefaultTarget(sConvertedLinksDefaultTarget: string): this;

        /**
            * Sets a new value for property {@link #getConvertLinksToAnchorTags convertLinksToAnchorTags}.
         * 
         * Determines whether strings that appear to be links will be converted to HTML anchor tags, and what are the criteria for recognizing them.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setConvertLinksToAnchorTags(sConvertLinksToAnchorTags: sap.m.LinkConversion): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Icon to be displayed as graphical element within the FeedListItem. This can be an image or an icon from the icon font. If no icon is provided, a default person-placeholder icon is displayed. Icon is only shown if showIcon = true.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconActive iconActive}.
         * 
         * If true, icon is a link, which will fire 'iconPress' events. If false, icon is normal image
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconActive(bIconActive: boolean): this;

        /**
            * Sets a new value for property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to true but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If bandwidth is the key for the application, set this value to false.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconDensityAware(bIconDensityAware: boolean): this;

        /**
            * Sets a new value for property {@link #getInfo info}.
         * 
         * The Info text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setInfo(sInfo: string): this;

        /**
            * Sets a new value for property {@link #getMaxCharacters maxCharacters}.
         * 
         * The expand and collapse feature is set by default and uses 300 characters on mobile devices and 500 characters on desktops as limits. Based on these values, the text of the FeedListItem is collapsed once text reaches these limits. In this case, only the specified number of characters is displayed. By clicking on the text link More, the entire text can be displayed. The text link Less collapses the text. The application is able to set the value to its needs.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaxCharacters(iMaxCharacters: number): this;

        /**
            * Sets a new value for property {@link #getSender sender}.
         * 
         * Sender of the chunk
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSender(sSender: string): this;

        /**
            * Sets a new value for property {@link #getSenderActive senderActive}.
         * 
         * If true, sender string is a link, which will fire 'senderPress' events. If false, sender is normal text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setSenderActive(bSenderActive: boolean): this;

        /**
            * Sets a new value for property {@link #getShowIcon showIcon}.
         * 
         * If set to "true" (default), icons will be displayed, if set to false icons are hidden
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowIcon(bShowIcon: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The FeedListItem text. It supports html formatted tags as described in the documentation of sap.m.FormattedText
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTimestamp timestamp}.
         * 
         * This chunks timestamp
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTimestamp(sTimestamp: string): this;

        /**
            * Redefinition of sap.m.ListItemBase.setType: type = "sap.m.ListType.Navigation" behaves like type = "sap.m.ListType.Active" for a FeedListItem
        */
        public setType(type: sap.m.ListType): this;

        /**
            * Redefinition of sap.m.ListItemBase.setUnread: Unread is not supported for FeedListItem
        */
        public setUnread(value: boolean): this;

    }
}