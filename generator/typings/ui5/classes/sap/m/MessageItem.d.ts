declare module 'sap/m/MessageItem' {
    import { Link } from 'sap/m/Link';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Item, IItemSettings } from 'sap/ui/core/Item';

    export interface IMessageItemSettings extends IItemSettings {
        type?: sap.ui.core.MessageType;
        title?: string;
        subtitle?: string;
        description?: string;
        markupDescription?: boolean;
        longtextUrl?: sap.ui.core.URI;
        counter?: number;
        groupName?: string;
    }

    /**
    
    */
    export class MessageItem extends Item {

        /**
            * Constructor for a new MessageItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMessageItemSettings);


        /**
            * Destroys the link in the aggregation {@link #getLink link}.
        */
        public destroyLink(): this;

        /**
            * Creates a new subclass of class sap.m.MessageItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Item.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getCounter counter}.
         * 
         * Defines the number of messages for a given message.
        */
        public getCounter(): number;

        /**
            * Gets current value of property {@link #getDescription description}.
         * 
         * Specifies detailed description of the message
         * 
         * Default value is ``.
        */
        public getDescription(): string;

        /**
            * Gets current value of property {@link #getGroupName groupName}.
         * 
         * Name of a message group the current item belongs to.
         * 
         * Default value is ``.
        */
        public getGroupName(): string;

        /**
            * Gets content of aggregation {@link #getLink link}.
         * 
         * Adds an sap.m.Link control which will be displayed at the end of the description of a message.
        */
        public getLink(): Link;

        /**
            * Gets current value of property {@link #getLongtextUrl longtextUrl}.
         * 
         * Specifies long text description location URL
        */
        public getLongtextUrl(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getMarkupDescription markupDescription}.
         * 
         * Specifies if description should be interpreted as markup
         * 
         * Default value is `false`.
        */
        public getMarkupDescription(): boolean;

        /**
            * Returns a metadata object for class sap.m.MessageItem.
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
            * Gets current value of property {@link #getSubtitle subtitle}.
         * 
         * Specifies the subtitle of the message ** Note: ** This is only visible when the `title` property is not empty.
        */
        public getSubtitle(): string;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Specifies the title of the message
         * 
         * Default value is ``.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Specifies the type of the message
         * 
         * Default value is `Error`.
        */
        public getType(): sap.ui.core.MessageType;

        /**
            * Sets a new value for property {@link #getCounter counter}.
         * 
         * Defines the number of messages for a given message.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setCounter(iCounter: number): this;

        /**
            * Sets a new value for property {@link #getDescription description}.
         * 
         * Specifies detailed description of the message
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setDescription(sDescription: string): this;

        /**
            * Sets a new value for property {@link #getGroupName groupName}.
         * 
         * Name of a message group the current item belongs to.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setGroupName(sGroupName: string): this;

        /**
            * Sets the aggregated {@link #getLink link}.
        */
        public setLink(oLink: Link): this;

        /**
            * Sets a new value for property {@link #getLongtextUrl longtextUrl}.
         * 
         * Specifies long text description location URL
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLongtextUrl(sLongtextUrl: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getMarkupDescription markupDescription}.
         * 
         * Specifies if description should be interpreted as markup
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setMarkupDescription(bMarkupDescription: boolean): this;

        /**
            * Sets a new value for property {@link #getSubtitle subtitle}.
         * 
         * Specifies the subtitle of the message ** Note: ** This is only visible when the `title` property is not empty.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSubtitle(sSubtitle: string): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Specifies the title of the message
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets type of the MessageItem. ** Note: ** if you set the type to None it will be handled and rendered as Information.
        */
        public setType(sType: sap.ui.core.MessageType): this;

    }
}