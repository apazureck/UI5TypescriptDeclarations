declare module 'sap/ui/core/tmpl/DOMElement' {
    import { DOMAttribute } from 'sap/ui/core/tmpl/DOMAttribute';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IDOMElementSettings extends IControlSettings {
        text?: string;
        tag?: string;
    }

    /**
    
    */
    export class DOMElement extends Control {

        /**
            * Constructor for a new tmpl/DOMElement.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDOMElementSettings);


        /**
            * Adds some attribute to the aggregation {@link #getAttributes attributes}.
        */
        public addAttribute(oAttribute: DOMAttribute): this;

        /**
            * Adds some element to the aggregation {@link #getElements elements}.
        */
        public addElement(oElement: this): this;

        /**
            * Returns the value of a DOM attribute if available or undefined if the DOM attribute is not available when using this method with the parameter name only. When using the method with the parameter name and value the method acts as a setter and sets the value of a DOM attribute. In this case the return value is the reference to this DOM element to support method chaining. If you pass null as value of the attribute the attribute will be removed.
        */
        public attr(sName: string, sValue: string): any;

        /**
            * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
        */
        public destroyAttributes(): this;

        /**
            * Destroys all the elements in the aggregation {@link #getElements elements}.
        */
        public destroyElements(): this;

        /**
            * Creates a new subclass of class sap.ui.core.tmpl.DOMElement with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets content of aggregation {@link #getAttributes attributes}.
         * 
         * DOM attributes which are rendered as part of the DOM element and bindable
        */
        public getAttributes(): {};

        /**
            * Gets content of aggregation {@link #getElements elements}.
         * 
         * Nested DOM elements to support nested bindable structures
        */
        public getElements(): {};

        /**
            * Returns a metadata object for class sap.ui.core.tmpl.DOMElement.
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
            * Gets current value of property {@link #getTag tag}.
         * 
         * The HTML-tag of the DOM element which contains the text
         * 
         * Default value is `span`.
        */
        public getTag(): string;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * The text content of the DOM element
        */
        public getText(): string;

        /**
            * Checks for the provided `sap.ui.core.tmpl.DOMAttribute` in the aggregation {@link #getAttributes attributes}. and returns its index if found or -1 otherwise.
        */
        public indexOfAttribute(oAttribute: DOMAttribute): number;

        /**
            * Checks for the provided `sap.ui.core.tmpl.DOMElement` in the aggregation {@link #getElements elements}. and returns its index if found or -1 otherwise.
        */
        public indexOfElement(oElement: this): number;

        /**
            * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
        */
        public insertAttribute(oAttribute: DOMAttribute, iIndex: number): this;

        /**
            * Inserts a element into the aggregation {@link #getElements elements}.
        */
        public insertElement(oElement: this, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getAttributes attributes}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllAttributes(): {};

        /**
            * Removes all the controls from the aggregation {@link #getElements elements}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllElements(): {};

        /**
            * Removes the DOM attribute for the given name and returns the reference to this DOM element to support method chaining.
        */
        public removeAttr(sName: string): this;

        /**
            * Removes a attribute from the aggregation {@link #getAttributes attributes}.
        */
        public removeAttribute(vAttribute: number | string | DOMAttribute): DOMAttribute;

        /**
            * Removes a element from the aggregation {@link #getElements elements}.
        */
        public removeElement(vElement: number | string | this): this;

        /**
            * Sets a new value for property {@link #getTag tag}.
         * 
         * The HTML-tag of the DOM element which contains the text
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `span`.
        */
        public setTag(sTag: string): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The text content of the DOM element
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setText(sText: string): this;

    }
}