declare module 'sap/ui/core/XMLComposite' {
    import { Element } from 'sap/ui/core/Element';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IXMLCompositeSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        displayBlock?: boolean;
    }

    /**
    
    */
    export class XMLComposite extends Control {


        /**
            * Returns an element by its ID in the context of the XMLComposite.
         * 
         * May only be used by the implementation of a specific XMLComposite, not by an application using a XMLComposite.
        */
        protected byId(sId: string): Element;

        /**
            * Creates a new subclass of class sap.ui.core.XMLComposite with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getDisplayBlock displayBlock}.
         * 
         * Whether the CSS display should be set to "block".
         * 
         * Default value is `true`.
        */
        public getDisplayBlock(): boolean;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The height
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.core.XMLComposite.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getDisplayBlock displayBlock}.
         * 
         * Whether the CSS display should be set to "block".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setDisplayBlock(bDisplayBlock: boolean): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The height
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The width
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}