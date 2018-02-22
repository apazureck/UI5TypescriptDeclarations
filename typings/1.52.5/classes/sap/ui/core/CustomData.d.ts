declare module 'sap/ui/core/CustomData' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface ICustomDataSettings extends IElementSettings {
        key?: string;
        value?: any;
        writeToDom?: boolean;
    }

    /**
    
    */
    export class CustomData extends Element {

        /**
            * Constructor for a new CustomData.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ICustomDataSettings);


        /**
            * Creates a new subclass of class sap.ui.core.CustomData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getKey key}.
         * 
         * The key of the data in this CustomData object. When the data is just stored, it can be any string, but when it is to be written to HTML (writeToDom == true) then it must also be a valid HTML attribute name (it must conform to the sap.ui.core.ID type and may contain no colon) to avoid collisions, it also may not start with "sap-ui". When written to HTML, the key is prefixed with "data-". If any restriction is violated, a warning will be logged and nothing will be written to the DOM.
        */
        public getKey(): string;

        /**
            * Returns a metadata object for class sap.ui.core.CustomData.
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
            * Gets current value of property {@link #getValue value}.
         * 
         * The data stored in this CustomData object. When the data is just stored, it can be any JS type, but when it is to be written to HTML (writeToDom == true) then it must be a string. If this restriction is violated, a warning will be logged and nothing will be written to the DOM.
        */
        public getValue(): any;

        /**
            * Gets current value of property {@link #getWriteToDom writeToDom}.
         * 
         * If set to "true" and the value is of type "string" and the key conforms to the documented restrictions, this custom data is written to the HTML root element of the control as a "data-*" attribute. If the key is "abc" and the value is "cde", the HTML will look as follows: &lt;SomeTag ... data-abc="cde" ... &gt; Thus the application can provide stable attributes by data binding which can be used for styling or identification purposes. ATTENTION: use carefully to not create huge attributes or a large number of them.
         * 
         * Default value is `false`.
        */
        public getWriteToDom(): boolean;

        /**
            * Sets a new value for property {@link #getKey key}.
         * 
         * The key of the data in this CustomData object. When the data is just stored, it can be any string, but when it is to be written to HTML (writeToDom == true) then it must also be a valid HTML attribute name (it must conform to the sap.ui.core.ID type and may contain no colon) to avoid collisions, it also may not start with "sap-ui". When written to HTML, the key is prefixed with "data-". If any restriction is violated, a warning will be logged and nothing will be written to the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setKey(sKey: string): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * The data stored in this CustomData object. When the data is just stored, it can be any JS type, but when it is to be written to HTML (writeToDom == true) then it must be a string. If this restriction is violated, a warning will be logged and nothing will be written to the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValue(oValue: any): this;

        /**
            * Sets a new value for property {@link #getWriteToDom writeToDom}.
         * 
         * If set to "true" and the value is of type "string" and the key conforms to the documented restrictions, this custom data is written to the HTML root element of the control as a "data-*" attribute. If the key is "abc" and the value is "cde", the HTML will look as follows: &lt;SomeTag ... data-abc="cde" ... &gt; Thus the application can provide stable attributes by data binding which can be used for styling or identification purposes. ATTENTION: use carefully to not create huge attributes or a large number of them.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setWriteToDom(bWriteToDom: boolean): this;

    }
}