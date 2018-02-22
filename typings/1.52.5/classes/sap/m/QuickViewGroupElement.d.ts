declare module 'sap/m/QuickViewGroupElement' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IQuickViewGroupElementSettings extends IElementSettings {
        visible?: boolean;
        label?: string;
        value?: string;
        url?: string;
        target?: string;
        type?: sap.m.QuickViewGroupElementType;
        pageLinkId?: string;
        emailSubject?: string;
    }

    /**
    
    */
    export class QuickViewGroupElement extends Element {

        /**
            * Constructor for a new QuickViewGroupElement.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IQuickViewGroupElementSettings);


        /**
            * Creates a new subclass of class sap.m.QuickViewGroupElement with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getEmailSubject emailSubject}.
         * 
         * The subject of the email. Works only with QuickViewGroupElement of type email.
         * 
         * Default value is ``.
        */
        public getEmailSubject(): string;

        /**
            * Gets current value of property {@link #getLabel label}.
         * 
         * Specifies the text displayed below the associated label.
         * 
         * Default value is ``.
        */
        public getLabel(): string;

        /**
            * Returns a metadata object for class sap.m.QuickViewGroupElement.
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
            * Gets current value of property {@link #getPageLinkId pageLinkId}.
         * 
         * Specifies the ID of the QuickViewPage, which is opened from the link in the QuickViewGroupElement. Works only with QuickViewGroupElement of type pageLink.
         * 
         * Default value is ``.
        */
        public getPageLinkId(): string;

        /**
            * Gets current value of property {@link #getTarget target}.
         * 
         * Specifies the target of the link - it works like the target property of the HTML <a> tag. Works only with QuickViewGroupElement of type link.
         * 
         * Default value is `_blank`.
        */
        public getTarget(): string;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Specifies the type of the displayed information - phone number, mobile number, e-mail, link, text or a link to another QuickViewPage. Default value is 'text'.
         * 
         * Default value is `text`.
        */
        public getType(): sap.m.QuickViewGroupElementType;

        /**
            * Gets current value of property {@link #getUrl url}.
         * 
         * Specifies the address of the QuickViewGroupElement link. Works only with QuickViewGroupElement of type link.
         * 
         * Default value is ``.
        */
        public getUrl(): string;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Specifies the text of the control that associates with the label.
         * 
         * Default value is ``.
        */
        public getValue(): string;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Determines whether the element should be visible on the screen.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Sets a new value for property {@link #getEmailSubject emailSubject}.
         * 
         * The subject of the email. Works only with QuickViewGroupElement of type email.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setEmailSubject(sEmailSubject: string): this;

        /**
            * Sets a new value for property {@link #getLabel label}.
         * 
         * Specifies the text displayed below the associated label.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setLabel(sLabel: string): this;

        /**
            * Sets a new value for property {@link #getPageLinkId pageLinkId}.
         * 
         * Specifies the ID of the QuickViewPage, which is opened from the link in the QuickViewGroupElement. Works only with QuickViewGroupElement of type pageLink.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setPageLinkId(sPageLinkId: string): this;

        /**
            * Sets a new value for property {@link #getTarget target}.
         * 
         * Specifies the target of the link - it works like the target property of the HTML <a> tag. Works only with QuickViewGroupElement of type link.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `_blank`.
        */
        public setTarget(sTarget: string): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Specifies the type of the displayed information - phone number, mobile number, e-mail, link, text or a link to another QuickViewPage. Default value is 'text'.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `text`.
        */
        public setType(sType: sap.m.QuickViewGroupElementType): this;

        /**
            * Sets a new value for property {@link #getUrl url}.
         * 
         * Specifies the address of the QuickViewGroupElement link. Works only with QuickViewGroupElement of type link.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setUrl(sUrl: string): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Specifies the text of the control that associates with the label.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setValue(sValue: string): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Determines whether the element should be visible on the screen.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }
}