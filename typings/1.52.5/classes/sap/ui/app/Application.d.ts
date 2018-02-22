declare module 'sap/ui/app/Application' {
    import { UIComponent } from 'sap/ui/core/UIComponent';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control } from 'sap/ui/core/Control';
    import { Model } from 'sap/ui/model/Model';
    import { ComponentMetadata } from 'sap/ui/core/ComponentMetadata';
    import { Component, IComponentSettings } from 'sap/ui/core/Component';

    export interface IApplicationSettings extends IComponentSettings {
        root?: string;
        config?: any;
    }

    /**
    
    */
    export class Application extends Component {

        /**
            * Abstract application class. Extend this class to create a central application class.
         * 
         * Only one instance is allowed.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IApplicationSettings);


        /**
            * Creates and returns the root component. Override this method in your application implementation, if you want to override the default creation by metadata.
        */
        protected createRootComponent(): UIComponent;

        /**
            
        */
        public destroy(): any;

        /**
            * Destroys the rootComponent in the aggregation {@link #getRootComponent rootComponent}.
        */
        public destroyRootComponent(): this;

        /**
            * Creates a new subclass of class sap.ui.app.Application with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Component.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getConfig config}.
        */
        public getConfig(): any;

        /**
            * Returns a metadata object for class sap.ui.app.Application.
        */
        public static getMetadata(): Metadata | any | ComponentMetadata;

        /**
            * Returns a metadata object for class sap.ui.base.EventProvider.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the Component class.
        */
        public static getMetadata(): ComponentMetadata;

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
            * Returns the metadata for the specific class of the current instance.
        */
        public getMetadata(): ComponentMetadata | any | Metadata;

        /**
            * Gets current value of property {@link #getRoot root}.
        */
        public getRoot(): string;

        /**
            * Gets content of aggregation {@link #getRootComponent rootComponent}.
        */
        public getRootComponent(): UIComponent;

        /**
            * Returns the application root component.
        */
        public getView(): Control;

        /**
            * The main method is called when the DOM and UI5 is completely loaded. Override this method in your Application class implementation to execute code which relies on a loaded DOM / UI5.
        */
        public main(): any;

        /**
            * On before exit application hook. Override this method in your Application class implementation, to handle cleanup before the real exit or to prompt a question to the user, if the application should be exited.
        */
        public onBeforeExit(): string;

        /**
            * On error hook. Override this method in your Application class implementation to listen to unhandled errors.
        */
        public onError(sMessage: string, sFile: string, iLine: number): any;

        /**
            * On exit application hook. Override this method in your Application class implementation, to handle cleanup of the application.
        */
        public onExit(): any;

        /**
            * Sets the configuration model.
        */
        public setConfig(vConfig: string | {} | Model): any;

        /**
            * Sets a new value for property {@link #getRoot root}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setRoot(sRoot: string): this;

        /**
            * Sets the aggregated {@link #getRootComponent rootComponent}.
        */
        public setRootComponent(oRootComponent: UIComponent): this;

    }
}