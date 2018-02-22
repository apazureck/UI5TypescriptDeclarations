declare module 'sap/ui/core/mvc/JSView' {
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { View, IViewSettings } from 'sap/ui/core/mvc/View';

    export interface IJSViewSettings extends IViewSettings {
    }

    /**
    
    */
    export class JSView extends View {

        /**
            * Constructor for a new mvc/JSView.
        */
        public constructor(sId: string, mSettings: IJSViewSettings);


        /**
            * A method to be implemented by JSViews, returning the View UI. While for declarative View types like XMLView or JSONView the user interface definition is declared in a separate file, JSViews programmatically construct the UI. This happens in the createContent method which every JSView needs to implement. The View implementation can construct the complete UI in this method - or only return the root control and create the rest of the UI lazily later on.
        */
        public createContent(): Control;

        /**
            * Creates a new subclass of class sap.ui.core.mvc.JSView with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.mvc.View.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * A method to be implemented by JSViews, returning the flag whether to prefix the IDs of controls automatically or not if the controls are created inside the {@link sap.ui.core.mvc.JSView#createContent} function. By default this feature is not activated.
         * 
         * You can overwrite this function and return true to activate the automatic prefixing.
        */
        protected getAutoPrefixId(): boolean;

        /**
            * Returns a metadata object for class sap.ui.core.mvc.JSView.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

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

    }
}