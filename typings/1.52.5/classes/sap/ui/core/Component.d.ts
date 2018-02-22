declare module 'sap/ui/core/Component' {
    import { EventBus } from 'sap/ui/core/EventBus';
    import { Manifest } from 'sap/ui/core/Manifest';
    import { ComponentMetadata } from 'sap/ui/core/ComponentMetadata';
    import { Interface } from 'sap/ui/base/Interface';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface IComponentSettings extends IManagedObjectSettings {
    }

    /**
    
    */
    export class Component extends ManagedObject {

        /**
            * Creates and initializes a new Component with the given `sId` and settings.
         * 
         * The set of allowed entries in the `mSettings` object depends on the concrete subclass and is described there. See {@link sap.ui.core.Component} for a general description of this argument.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
         * 
         * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor sap.ui.base.ManagedObject} can be used.
        */
        public constructor(sId: string, mSettings: IComponentSettings);


        /**
            * Creates a nested component that is declared in the `sap.ui5/componentUsages` section of the descriptor (manifest.json). The following snippet shows the declaration: `{
         *   [...]
         *   "sap.ui5": {
         *     "componentUsages": {
         *       "myUsage": {
         *         "name": "my.useful.Component"
         *       }
         *     }
         *   }
         *   [...]
         * }` The syntax of the configuration object of the component usage matches the configuration object of the {#link sap.ui.component} factory function.
         * 
         * This is an example of how the `createComponent` function can be used for asynchronous scenarios: `oComponent.createComponent("myUsage").then(function(oComponent) {
         *   oComponent.doSomething();
         * }).catch(function(oError) {
         *   jQuery.sap.log.error(oError);
         * });`
         * 
         * The following example shows how `createComponent` can be used to create a nested component by providing specific properties like `id`, `async`, `settings`, or `componentData`: `var oComponent = oComponent.createComponent({
         *   usage: "myUsage",
         *   id: "myId",
         *   settings: { ... },
         *   componentData: { ... }
         * });` The allowed list of properties are defined in the parameter documentation of this function.
         * 
         * The properties can also be defined in the descriptor. These properties can be overwritten by the local properties of that function.
        */
        public createComponent(vUsage: { usage: string, id?: string, async?: boolean, settings?: {}, componentData?: {}, }): this | any;

        /**
            * Cleans up the Component instance before destruction.
         * 
         * Applications must not call this hook method directly, it is called by the framework when the element is {@link #destroy destroyed}.
         * 
         * Subclasses of Component should override this hook to implement any necessary cleanup.
        */
        protected exit(): any;

        /**
            * Creates a new subclass of class sap.ui.core.Component with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns user specific data object
        */
        public getComponentData(): {};

        /**
            * Returns the event bus of this component.
        */
        public getEventBus(): EventBus;

        /**
            
        */
        public getInterface(): any | Interface;

        /**
            * Returns the public interface of the object.
        */
        public getInterface(): Interface;

        /**
            * Returns the manifest defined in the metadata of the component. If not specified, the return value is null.
        */
        public getManifest(): {};

        /**
            * Returns the configuration of a manifest section or the value for a specific path. If no section or key is specified, the return value is null.
         * 
         * Example: ` { "sap.ui5": { "dependencies": { "libs": { "sap.m": {} }, "components": { "my.component.a": {} } } }); `
         * 
         * The configuration above can be accessed in the following ways:  * ** By section/namespace **: `oComponent.getManifestEntry("sap.ui5")` * ** By path **: `oComponent.getManifestEntry("/sap.ui5/dependencies/libs")` 
         * 
         * By section/namespace returns the configuration for the specified manifest section and by path allows to specify a concrete path to a dedicated entry inside the manifest. The path syntax always starts with a slash (/).
        */
        public getManifestEntry(sKey: string): any | any;

        /**
            * Returns the manifest object.
        */
        public getManifestObject(): Manifest;

        /**
            * Returns the metadata for the Component class.
        */
        public static getMetadata(): ComponentMetadata;

        /**
            * Returns a metadata object for class sap.ui.base.EventProvider.
        */
        public static getMetadata(): Metadata | any;

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
            * Returns the Component instance in whose "context" the given ManagedObject has been created or `undefined`.
         * 
         * This is a convenience wrapper around {@link sap.ui.core.Component.getOwnerIdFor Component.getOwnerIdFor}. If the owner ID cannot be determined for reasons documented on `getOwnerForId` or when the Component for the determined ID no longer exists, `undefined` will be returned.
        */
        public static getOwnerComponentFor(oObject: ManagedObject): Component;

        /**
            * Returns the ID of the object in whose "context" the given ManagedObject has been created.
         * 
         * For objects that are not ManagedObjects or for which the owner is unknown, `undefined` will be returned as owner ID.
         * 
         * ** Note **: Ownership for objects is only checked by the framework at the time when they are created. It is not checked or updated afterwards. And it can only be detected while the {@link sap.ui.core.Component#runAsOwner Component.runAsOwner} function is executing. Without further action, this is only the case while the content of a UIComponent is {@link sap.ui.core.UIComponent#createContent constructed} or when a {@link sap.ui.core.routing.Router Router} creates a new View and its content.
         * 
         * ** Note **: This method does not guarantee that the returned owner ID belongs to a Component. Currently, it always does. But future versions of UI5 might introduce a more fine grained ownership concept, e.g. taking Views into account. Callers that want to deal only with components as owners, should use the following method: {@link sap.ui.core.Component.getOwnerComponentFor Component.getOwnerComponentFor}. It guarantees that the returned object (if any) will be a Component.
         * 
         * ** Further note ** that only the ID of the owner is recorded. In rare cases, when the lifecycle of a ManagedObject is not bound to the lifecycle of its owner, (e.g. by the means of aggregations), then the owner might have been destroyed already whereas the ManagedObject is still alive. So even the existence of an owner ID is not a guarantee for the existence of the corresponding owner.
        */
        public static getOwnerIdFor(oObject: ManagedObject): string;

        /**
            * Returns a service interface for the {@link sap.ui.core.service.Service Service} declared in the descriptor for components (manifest.json). The declaration needs to be done in the `sap.ui5/services` section as follows: `{
         *   [...]
         *   "sap.ui5": {
         *     "services": {
         *       "myLocalServiceAlias": {
         *         "factoryName": "my.ServiceFactory",
         *         ["optional": true]
         *       }
         *     }
         *   }
         *   [...]
         * }` The service declaration is used to define a mapping between the local alias for the service that can be used in the Component and the name of the service factory which will be used to create a service instance.
         * 
         * The `getService` function will look up the service factory and will create a new instance by using the service factory function {@link sap.ui.core.service.ServiceFactory#createInstance createInstance} The optional property defines that the service is not mandatory and the usage will not depend on the availability of this service. When requesting an optional service the `getService` function will reject but there will be no error logged in the console.
         * 
         * When creating a new instance of the service the Component context will be passed as `oServiceContext` as follows: `{
         *   "scopeObject": this,     // the Component instance
         *   "scopeType": "component" // the stereotype of the scopeObject
         * }`
         * 
         * The service will be created only once per Component and reused in future calls to the `getService` function. <p> This function will return a `Promise` which provides the service interface when resolved. If the `factoryName` could not be found in the {@link sap.ui.core.service.ServiceFactoryRegistry Service Factory Registry} or the service declaration in the descriptor for components (manifest.json) is missing the Promise will reject.
         * 
         * This is an example of how the `getService` function can be used: `oComponent.getService("myLocalServiceAlias").then(function(oService) {
         *   oService.doSomething();
         * }).catch(function(oError) {
         *   jQuery.sap.log.error(oError);
         * });`
        */
        public getService(sLocalServiceAlias: string): any;

        /**
            * Initializes the Component instance after creation.
         * 
         * Applications must not call this hook method directly, it is called by the framework while the constructor of a Component is executed.
         * 
         * Subclasses of Component should override this hook to implement any necessary initialization.
        */
        protected init(): any;

        /**
            * The hook which gets called when the static configuration of the component has been changed by some configuration extension.
        */
        public onConfigChange(sConfigKey: string): any;

        /**
            * The window before unload hook. Override this method in your Component class implementation, to handle cleanup before the real unload or to prompt a question to the user, if the component should be exited.
        */
        public onWindowBeforeUnload(): string;

        /**
            * The window error hook. Override this method in your Component class implementation to listen to unhandled errors.
        */
        public onWindowError(sMessage: string, sFile: string, iLine: number): any;

        /**
            * The window unload hook. Override this method in your Component class implementation, to handle cleanup of the component once the window will be unloaded (e.g. closed).
        */
        public onWindowUnload(): any;

        /**
            * Calls the function `fn` once and marks all ManagedObjects created during that call as "owned" by this Component.
         * 
         * Nested calls of this method are supported (e.g. inside a newly created, nested component). The currently active owner Component will be remembered before executing `fn` and restored afterwards.
        */
        public runAsOwner(fn: (() => any)): any;

    }
}