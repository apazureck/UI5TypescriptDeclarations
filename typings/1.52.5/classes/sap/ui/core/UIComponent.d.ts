declare module 'sap/ui/core/UIComponent' {
    import { Element } from 'sap/ui/core/Element';
    import { View } from 'sap/ui/core/mvc/View';
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Router } from 'sap/ui/core/routing/Router';
    import { Controller } from 'sap/ui/core/mvc/Controller';
    import { Targets } from 'sap/ui/core/routing/Targets';
    import { UIArea } from 'sap/ui/core/UIArea';
    import { RenderManager } from 'sap/ui/core/RenderManager';
    import { ComponentContainer } from 'sap/ui/core/ComponentContainer';
    import { ComponentMetadata } from 'sap/ui/core/ComponentMetadata';
    import { Component, IComponentSettings } from 'sap/ui/core/Component';

    export interface IUIComponentSettings extends IComponentSettings {
    }

    /**
    
    */
    export class UIComponent extends Component {

        /**
            * Base Class for UIComponent.
         * 
         * If you are extending a UIComponent make sure you read the {@link #.extend} documentation since the metadata is special.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IUIComponentSettings);


        /**
            * Returns an element by its ID in the context of the component.
        */
        public byId(sId: string): Element;

        /**
            * Hook method to create the content (UI Control Tree) of this component.
         * 
         * The default implementation in this class reads the name (and optionally type) of a root view from the descriptor for this component (path `/sap.ui5/rootView`) or, for backward compatibility, just the name from static component metadata (property `rootView`). When no type is specified, it defaults to XML. The method then calls the {@link sap.ui.view view factory} to instantiate the root view and returns the result.
         * 
         * When there is no root view configuration, `null` will be returned.
         * 
         * This method can be overwritten by subclasses if the default implementation doesn't fit their needs. Subclasses are not limited to views as return type but may return any control, but only a single control (can be the root of a larger control tree, however).
        */
        public createContent(): View | Control;

        /**
            * Convert the given component local element ID to a globally unique ID by prefixing it with the component ID.
        */
        public createId(sId: string): string;

        /**
            * Creates a new subclass of class sap.ui.core.UIComponent with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Component.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * A method to be implemented by UIComponents, returning the flag whether to prefix the IDs of controls automatically or not if the controls are created inside the {@link sap.ui.core.UIComponent#createContent} function. By default this feature is not activated.
         * 
         * You can overwrite this function and return `true` to activate the automatic prefixing. In addition the default behavior can be configured in the manifest by specifying the entry `sap.ui5/autoPrefixId`.
        */
        protected getAutoPrefixId(): boolean;

        /**
            
        */
        protected getEventingParent(): this;

        /**
            * Returns the local ID of an element by removing the component ID prefix or `null` if the ID does not contain a prefix.
        */
        public getLocalId(sId: string): string;

        /**
            * Returns a metadata object for class sap.ui.core.UIComponent.
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
            * Returns the metadata for the specific class of the current instance.
        */
        public getMetadata(): ComponentMetadata | any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the content of {@link sap.ui.core.UIComponent#createContent}. If you specified a `rootView` in your metadata or in the descriptor file (manifest.json), you will get the instance of the root view. This getter will only return something if the {@link sap.ui.core.UIComponent#init} function was invoked. If `createContent` is not implemented, and there is no root view, it will return `null`. Here is an example: ` `var MyExtension = UIComponent.extend("my.Component", {
         *               metadata: {
         *                    rootView: "my.View"
         *               },
         *               init: function () {
         *                    this.getRootControl(); // returns null
         *                    UIComponent.prototype.init.apply(this, arguments);
         *                    this.getRootControl(); // returns the view "my.View"
         *               }
         *          });` `
        */
        protected getRootControl(): Control;

        /**
            * Returns the reference to the router instance which has been created by the UIComponent once the routes in the routing metadata has been defined.
        */
        public getRouter(): Router;

        /**
            * Returns the reference to the router instance. The passed controller or view has to be created in the context of a UIComponent to return the router instance. Otherwise this function will return undefined. You may define the routerClass property in the config section of the routing to make the Component create your router extension. Example: routing: { config: { routerClass : myAppNamespace.MyRouterClass ... } ...
        */
        public static getRouterFor(oControllerOrView: View | Controller): Router;

        /**
            * Returns the reference to the Targets instance which has been created by the UIComponent once the targets in the routing metadata has been defined. If routes have been defined, it will be the Targets instance created and used by the router.
        */
        public getTargets(): Targets;

        /**
            * Returns the reference to the UIArea of the container.
        */
        public getUIArea(): UIArea;

        /**
            * Initializes the Component instance after creation.
         * 
         * Applications must not call this hook method directly, it is called by the framework while the constructor of a Component is executed.
         * 
         * Subclasses of Component should override this hook to implement any necessary initialization. ** When overriding this function make sure to invoke the init function of the UIComponent as well! **
        */
        protected init(): any;

        /**
            * Function is called when the rendering of the ComponentContainer is completed.
         * 
         * Applications must not call this hook method directly, it is called from ComponentContainer.
         * 
         * Subclasses of UIComponent override this hook to implement any necessary actions after the rendering.
        */
        protected onAfterRendering(): any;

        /**
            * Function is called when the rendering of the ComponentContainer is started.
         * 
         * Applications must not call this hook method directly, it is called from ComponentContainer.
         * 
         * Subclasses of UIComponent override this hook to implement any necessary actions before the rendering.
        */
        protected onBeforeRendering(): any;

        /**
            * Renders the root control of the UIComponent.
        */
        public render(oRenderManager: RenderManager): any;

        /**
            * Sets the reference to the ComponentContainer - later required for the determination of the UIArea for the UIComponent.
        */
        public setContainer(oContainer: ComponentContainer): this;

    }
}