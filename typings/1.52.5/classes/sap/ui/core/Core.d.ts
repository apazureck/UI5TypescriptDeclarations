declare module 'sap/ui/core/Core' {
    import { Event } from 'sap/ui/base/Event';
    import { Element } from 'sap/ui/core/Element';
    import { Type } from 'sap/ui/model/Type';
    import { RenderManager } from 'sap/ui/core/RenderManager';
    import { UIArea } from 'sap/ui/core/UIArea';
    import { Application } from 'sap/ui/app/Application';
    import { Component } from 'sap/ui/core/Component';
    import { Configuration } from 'sap/ui/core/Configuration';
    import { EventBus } from 'sap/ui/core/EventBus';
    import { MessageManager } from 'sap/ui/core/message/MessageManager';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Model } from 'sap/ui/model/Model';
    import { Interface } from 'sap/ui/base/Interface';
    import { Control } from 'sap/ui/core/Control';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface ICoreSettings extends IObjectSettings {
    }

    /**
    
    */
    export class Core extends Object {


        /**
            * Enforces an immediate update of the visible UI (aka "rendering").
         * 
         * In general, applications should avoid calling this method and instead let the framework manage any necessary rendering.
        */
        public applyChanges(): any;

        /**
            * Applies the theme with the given name (by loading the respective style sheets, which does not disrupt the application).
         * 
         * By default, the theme files are expected to be located at path relative to the respective control library ([libraryLocation]/themes/[themeName]). Different locations can be configured by using the method setThemePath() or by using the second parameter "sThemeBaseUrl" of applyTheme(). Usage of this second parameter is a shorthand for setThemePath and internally calls setThemePath, so the theme location is then known.
         * 
         * sThemeBaseUrl is a single URL to specify the default location of all theme files. This URL is the base folder below which the control library folders are located. E.g. if the CSS files are not located relative to the root location of UI5, but instead they are at locations like http://my.server/myapp/resources/sap/ui/core/themes/my_theme/library.css then the URL that needs to be given is: http://my.server/myapp/resources All theme resources are then loaded from below this folder - except if for a certain library a different location has been registered.
         * 
         * If the theme resources are not all either below this base location or with their respective libraries, then setThemePath must be used to configure individual locations.
        */
        public applyTheme(sThemeName: string, sThemeBaseUrl?: string): any;

        /**
            * Registers a listener for control events.
        */
        public attachControlEvent(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Attach event-handler `fnFunction` to the 'formatError' event of `sap.ui.core.Core`.
         *  Please note that this event is a bubbling event and may already be canceled before reaching the core.
         * 
        */
        attachFormatError<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The Element where the format error occurred */
            element: Element, /* * The property name of the element where the format error occurred */
            property: string, /* * The type of the property */
            type: Type, /* * The value of the property which was entered when the format error occurred */
            newValue: {}, /* * The value of the property which was present before a new value was entered (before the format error) */
            oldValue: {}, /* * The exception object which occurred and has more information about the format error */
            exception: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Registers a given function that is executed after the framework has been initialized.
         * 
         * The given function will either be called as soon as the framework has been initialized or, if it has been initialized already, it will be called immediately.
        */
        public attachInit(fnFunction: (() => any)): any;

        /**
            * Registers a given function that is executed after the framework has been initialized.
         * 
         * The method is executed only once and only if the framework has not been initialized already. This could be checked by calling {@link #isInitialized}, but in most cases it is more convenient to use {@link #attachInit} instead. This guarantees that the given function is executed exactly once, independent of the state of the framework.
        */
        public attachInitEvent(fnFunction: (() => any)): any;

        /**
            * Registers a listener to the central interval timer.
        */
        public attachIntervalTimer(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Register a listener for the `localizationChanged` event.
        */
        attachLocalizationChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * a map of the changed localization properties */
            changes: {},
        }>) => void, oListener: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'parseError' event of `sap.ui.core.Core`.
         *  Please note that this event is a bubbling event and may already be canceled before reaching the core.
         * 
        */
        attachParseError<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The Element where the parse error occurred */
            element: Element, /* * The property name of the element where the parse error occurred */
            property: string, /* * The type of the property */
            type: Type, /* * The value of the property which was entered when the parse error occurred */
            newValue: {}, /* * The value of the property which was present before a new value was entered (before the parse error) */
            oldValue: {}, /* * The exception object which occurred and has more information about the parse error */
            exception: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'parseError' event of `sap.ui.core.Core`.
         *  Please note that this event is a bubbling event and may already be canceled before reaching the core.
         * 
        */
        attachParseError<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The Element where the parse error occurred */
            element: Element, /* * The property name of the element where the parse error occurred */
            property: string, /* * The type of the property */
            type: Type, /* * The value of the property which was entered when the parse error occurred */
            newValue: {}, /* * The value of the property which was present before a new value was entered (before the parse error) */
            oldValue: {}, /* * The exception object which occurred and has more information about the parse error */
            exception: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the `ThemeChanged` event of this `sap.ui.core.Core`.
        */
        attachThemeChanged<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Theme name */
            theme: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'validationError' event of `sap.ui.core.Core`.
         *  Please note that this event is a bubbling event and may already be canceled before reaching the core.
         * 
        */
        attachValidationError<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The Element where the validation error occurred */
            element: Element, /* * The property name of the element where the validation error occurred */
            property: string, /* * The type of the property */
            type: Type, /* * The value of the property which was entered when the validation error occurred */
            newValue: {}, /* * The value of the property which was present before a new value was entered (before the validation error) */
            oldValue: {}, /* * The exception object which occurred and has more information about the validation error */
            exception: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'validationError' event of `sap.ui.core.Core`.
         *  Please note that this event is a bubbling event and may already be canceled before reaching the core.
         * 
        */
        attachValidationError<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The Element where the validation error occurred */
            element: Element, /* * The property name of the element where the validation error occurred */
            property: string, /* * The type of the property */
            type: Type, /* * The value of the property which was entered when the validation error occurred */
            newValue: {}, /* * The value of the property which was present before a new value was entered (before the validation error) */
            oldValue: {}, /* * The exception object which occurred and has more information about the validation error */
            exception: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'validationSuccess' event of `sap.ui.core.Core`.
         *  Please note that this event is a bubbling event and may already be canceled before reaching the core.
         * 
        */
        attachValidationSuccess<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The Element where the successful validation occurred */
            element: Element, /* * The property name of the element where the successfull validation occurred */
            property: string, /* * The type of the property */
            type: Type, /* * The value of the property which was entered when the validation occurred */
            newValue: {}, /* * The value of the property which was present before a new value was entered (before the validation) */
            oldValue: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attach event-handler `fnFunction` to the 'validationSuccess' event of `sap.ui.core.Core`.
         *  Please note that this event is a bubbling event and may already be canceled before reaching the core.
         * 
        */
        attachValidationSuccess<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The Element where the successful validation occurred */
            element: Element, /* * The property name of the element where the successfull validation occurred */
            property: string, /* * The type of the property */
            type: Type, /* * The value of the property which was entered when the validation occurred */
            newValue: {}, /* * The value of the property which was present before a new value was entered (before the validation) */
            oldValue: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Returns a list of all controls with a field group ID. See {@link sap.ui.core.Control#checkFieldGroupIds Control.prototype.checkFieldGroupIds} for a description of the `vFieldGroupIds` parameter.
        */
        public byFieldGroupId(vFieldGroupIds?: string | {}): {};

        /**
            * Returns the registered element for the given id, if any.
        */
        public byId(sId: string): Element;

        /**
            * Creates a component with the provided id and settings.
         * 
         * When the optional parameter `sUrl` is given, then all request for resources of the library will be redirected to the given Url. This is convenience for a call to `jQuery.sap.registerModulePath(sName, sUrl);`
        */
        public createComponent(vComponent: { name?: string, url?: string, id?: string, settings?: {}, componentData?: string, }, sUrl?: string, sId?: string, mSettings?: {}): any;

        /**
            * Returns a new instance of the RenderManager for exclusive use by the caller.
         * 
         * The caller must take care to destroy the render manager when it is no longer needed. Calling this method before the Core has been {@link #isInitialized initialized}, is not recommended.
        */
        public createRenderManager(): RenderManager;

        /**
            * Creates a new sap.ui.core.UIArea.
        */
        public createUIArea(oDomRef: string | any): UIArea;

        /**
            * Unregisters a listener for control events.
         * 
         * A listener will only be unregistered if the same function/context combination is given as in the attachControlEvent call.
        */
        public detachControlEvent(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Detach event-handler `fnFunction` from the 'formatError' event of `sap.ui.core.Core`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachFormatError(fnFunction: (() => any), oListener: {}): this;

        /**
            * Unregisters a listener for the central interval timer.
         * 
         * A listener will only be unregistered if the same function/context combination is given as in the attachIntervalTimer call.
        */
        public detachIntervalTimer(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Unregister a listener from the `localizationChanged` event.
         * 
         * The listener will only be unregistered if the same function/context combination is given as in the call to `attachLocalizationListener`.
        */
        public detachLocalizationChanged(fnFunction: (() => any), oListener: {}): any;

        /**
            * Detach event-handler `fnFunction` from the 'parseError' event of `sap.ui.core.Core`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachParseError(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the `ThemeChanged` event of this `sap.ui.core.Core`.
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachThemeChanged(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Detach event-handler `fnFunction` from the 'validationError' event of `sap.ui.core.Core`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachValidationError(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detach event-handler `fnFunction` from the 'validationSuccess' event of `sap.ui.core.Core`.
         * 
         * 
         * The passed function and listener object must match the ones previously used for event registration.
        */
        public detachValidationSuccess(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.core.Core with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fire event formatError to attached listeners.
         * 
         * Expects following event parameters:  * 'element' of type `sap.ui.core.Element` * 'property' of type `string` * 'type' of type `string` * 'newValue' of type `object` * 'oldValue' of type `object` * 'exception' of type `object` 
        */
        protected fireFormatError(mArguments?: any): this;

        /**
            * Fire event parseError to attached listeners.
         * 
         * Expects following event parameters:  * 'element' of type `sap.ui.core.Element` * 'property' of type `string` * 'type' of type `string` * 'newValue' of type `object` * 'oldValue' of type `object` * 'exception' of type `object` 
        */
        protected fireParseError(mArguments?: any): this;

        /**
            * Fire event validationError to attached listeners.
         * 
         * Expects following event parameters:  * 'element' of type `sap.ui.core.Element` * 'property' of type `string` * 'type' of type `string` * 'newValue' of type `object` * 'oldValue' of type `object` * 'exception' of type `object` 
        */
        protected fireValidationError(mArguments?: any): this;

        /**
            * Fire event validationSuccess to attached listeners.
         * 
         * Expects following event parameters:  * 'element' of type `sap.ui.core.Element` * 'property' of type `string` * 'type' of type `string` * 'newValue' of type `object` * 'oldValue' of type `object` 
        */
        protected fireValidationSuccess(mArguments?: any): this;

        /**
            * Returns the instance of the application (if exists).
        */
        public getApplication(): Application;

        /**
            * Returns the registered component for the given id, if any.
        */
        public getComponent(sId: string): Component;

        /**
            * Returns the Configuration of the Core.
        */
        public getConfiguration(): Configuration;

        /**
            * Returns the registered element for the given ID, if any.
        */
        public getControl(sId: string): Element;

        /**
            * Returns the Id of the control/element currently in focus.
        */
        public getCurrentFocusedControlId(): string;

        /**
            * Returns the registered element for the given ID, if any.
        */
        public getElementById(sId: string): Element;

        /**
            * Returns the event bus.
        */
        public getEventBus(): EventBus;

        /**
            * Retrieves a resource bundle for the given library and locale.
         * 
         * If only one argument is given, it is assumed to be the libraryName. The locale then falls back to the current {@link sap.ui.core.Configuration#getLanguage session locale}. If no argument is given, the library also falls back to a default: "sap.ui.core".
         * 
         * ###Configuration via App Descriptor<h3> When the App Descriptor for the library is available without further request (manifest.json has been preloaded) and when the App Descriptor is at least of version 1.9.0 or higher, then this method will evaluate the App Descriptor entry `"sap.ui5" / "library" / "i18n"`.  * When the entry is `true`, a bundle with the default name "messagebundle.properties" will be loaded * If it is a string, then that string will be used as name of the bundle * If it is `false`, no bundle will be loaded and the result will be `undefined` 
         * 
         * <h3>Caching Once a resource bundle for a library has been loaded, it will be cached by this method. Further calls for the same library and locale won't create new requests, but return the already loaded bundle. There's therefore no need for control code to cache the returned bundle for a longer period of time. Not further caching the result also prevents stale texts after a locale change.
         * 
         * ###Asynchronous Loading The asynchronous variant of {@link #loadLibrary} will evaluate the same descriptor entry as described above. If it is not `false`, loading the main resource bundle of the library will become a subtask of the asynchronous loading of the library.
         * 
         * Due to this preload of the main bundle and the caching behavior of this method, controls in such a library still can use the synchronous variant of `getLibraryResourceBundle` in their API, behavior and rendering code. Only when the bundle is needed at module execution time (by top level code in a control module), then the asynchronous variant of this method should be preferred.
        */
        public getLibraryResourceBundle(sLibraryName?: string, sLocale?: string, bAsync?: boolean): jQuery.sap.util.ResourceBundle | any;

        /**
            * Returns a map of library info objects for all currently loaded libraries, keyed by their names.
         * 
         * The structure of the library info objects matches the structure of the info object that the {@link #initLibrary} method expects. Only property names documented with `initLibrary` should be accessed, any additional properties might change or disappear in future. When a property does not exists, its default value (as documented with `initLibrary`) should be assumed.
         * 
         * ** Note: ** The returned info objects must not be modified. They might be a living copy of the internal data (for efficiency reasons) and the framework is not prepared to handle modifications to these objects.
        */
        public getLoadedLibraries(): any;

        /**
            * Returns the active `MessageManager` instance.
        */
        public getMessageManager(): MessageManager;

        /**
            * Returns a metadata object for class sap.ui.core.Core.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Get the model with the given model name.
         * 
         * The name can be omitted to reference the default model or it must be a non-empty string.
         * 
         * Note: to be compatible with future versions of this API, applications must not use the value `null`, the empty string `""` or the string literals `"null"` or `"undefined"` as model name.
        */
        public getModel(sName?: string | any): Model;

        /**
            
        */
        public getRenderManager(): any;

        /**
            * Returns the instance of the root component (if exists).
        */
        public getRootComponent(): Component;

        /**
            * Returns the static, hidden area DOM element belonging to this core instance.
         * 
         * It can be used e.g. for hiding elements like Popups, Shadow, Blocklayer etc.
         * 
         * If it is not yet available, a DIV is created and appended to the body.
        */
        public getStaticAreaRef(): any;

        /**
            * Returns the registered template for the given id, if any.
        */
        public getTemplate(sId: string): Component;

        /**
            * Returns a UIArea if the given ID/Element belongs to one.
        */
        public getUIArea(o: string | any): UIArea;

        /**
            * Returns `true` if there are any pending rendering tasks or when such rendering tasks are currently being executed.
        */
        public getUIDirty(): boolean;

        /**
            * Check if a Model is set to the core
        */
        public hasModel(): boolean;

        /**
            * Includes a library theme into the current page (if a variant is specified it will include the variant library theme)
        */
        public includeLibraryTheme(sLibName: string, sVariant?: string, sQuery?: string): any;

        /**
            * Provides the framework with information about a library.
         * 
         * This method is intended to be called exactly once while the main module of a library (its `library.js` module) is executing, typically at its begin. The single parameter `oLibInfo` is an info object that describes the content of the library.
         * 
         * When the `oLibInfo` has been processed, a normalized version of it will be kept and will be returned as library information in later calls to {@link #getLoadedLibraries}. Finally, `initLibrary` fires (the currently private) {@link #event:LibraryChanged} event with operation 'add' for the newly loaded library.
         * 
         * ###Side Effects
         * 
         * While analyzing the `oLibInfo`, the framework takes some additional actions:
         * 
         *  * If the info object contains a list of `interfaces`, they will be registered with the {@link sap.ui.base.DataType} class to make them available as aggregation types in managed objects.
         * 
         * * If the object contains a list of `controls` or `elements`, {@link sap.ui.lazyRequire lazy stubs} will be created for their constructor as well as for their static `extend` and `getMetadata` methods.<br> ** Note: ** Future versions might abandon the concept of lazy stubs as it requires synchronous XMLHttpRequests which have been deprecated (see {@link http://xhr.spec.whatwg.org}). To be on the safe side, productive applications should always require any modules that they directly depend on.
         * 
         * * With the `noLibraryCSS` property, the library can be marked as 'theming-free'. Otherwise, the framework will add a &lt;link&gt; tag to the page's head, pointing to the library's theme-specific stylesheet. The creation of such a &lt;link&gt; tag can be suppressed with the {@link sap.ui.core.Configuration global configuration option} `preloadLibCss`. It can contain a list of library names for which no stylesheet should be included. This is e.g. useful when an application merges the CSS for multiple libraries and already loaded the resulting stylesheet.
         * 
         * * If a list of library `dependencies` is specified in the info object, those libraries will be loaded synchronously by `initLibrary`.<br> ** Note: ** Dependencies between libraries don't have to be modeled as AMD dependencies. Only when enums or types from an additional library are used in the coding of the `library.js` module, the library should be additionally listed in the AMD dependencies. 
         * 
         * Last but not least, higher layer frameworks might want to include their own metadata for libraries. The property `extensions` might contain such additional metadata. Its structure is not defined by the framework, but it is strongly suggested that each extension only occupies a single property in the `extensions` object and that the name of that property contains some namespace information (e.g. library name that introduces the feature) to avoid conflicts with other extensions. The framework won't touch the content of `extensions` but will make it available in the library info objects returned by {@link #getLoadedLibraries}.
         * 
         * ###Relationship to Descriptor for Libraries (manifest.json)
         * 
         * The information contained in `oLibInfo` is partially redundant to the content of the descriptor for the same library (its `manifest.json` file). Future versions of UI5 might ignore the information provided in `oLibInfo` and might evaluate the descriptor file instead. Library developers therefore should keep the information in both files in sync.
         * 
         * When the `manifest.json` is generated from the `.library` file (which is the default for UI5 libraries built with Maven), then the content of the `.library` and `library.js` files must be kept in sync.
        */
        public initLibrary(oLibInfo: { name?: string, version: string, dependencies?: {}, types?: {}, interfaces?: {}, controls?: {}, elements?: {}, noLibraryCSS?: boolean, extensions?: {}, }): any;

        /**
            * Returns true if the Core has already been initialized. This means that instances of RenderManager etc. do already exist and the init event has already been fired (and will not be fired again).
        */
        public isInitialized(): boolean;

        /**
            * Returns the locked state of the `sap.ui.core.Core`
        */
        public isLocked(): boolean;

        /**
            * Check if the script is running on mobile
        */
        public isMobile(): boolean;

        /**
            * Used to find out whether a certain DOM element is the static area
        */
        protected isStaticAreaRef(oDomRef: {}): boolean;

        /**
            * Returns true, if the styles of the current theme are already applied, false otherwise.
         * 
         * This function must not be used before the init event of the Core. If the styles are not yet applied a theme changed event will follow when the styles will be applied.
        */
        public isThemeApplied(): boolean;

        /**
            * Loads a set of libraries, preferably asynchronously.
         * 
         * The module loading is still synchronous, so if a library loads additional modules besides its library.js file, those modules might be loaded synchronously by the library.js The async loading is only supported by the means of the library-preload.js(on) files, so if a library doesn't provide a preload or when the preload is deactivated (configuration, debug mode) then this API falls back to synchronous loading. However, the contract (Promise) remains valid and a Promise will be returned if async is specified - even when the real loading is done synchronously.
        */
        private loadLibraries(aLibraries: {}, mOptions?: { async?: boolean, preloadOnly?: boolean, }): any | any;

        /**
            * Loads the given library and its dependencies and makes it available to the application.
         * 
         * When library preloads are not suppressed for the given library, then a library-preload bundle will be loaded for it. By default, the bundle will be loaded synchronously (for compatibility reasons). Only when the optional parameter `vUrl` is given as `true` or as a configuration object with a property of `async:true`, then the bundle will be loaded asynchronously and a `Promise` will be returned (preferred usage).
         * 
         * After preloading the bundle, dependency information from the bundle is evaluated and any missing libraries are also preloaded.
         * 
         * Only then the library entry module (named `* your/lib * /library.js`) will be required and executed. The module is supposed to call `sap.ui.getCore().initLibrary(...)` providing the framework with additional metadata about the library, e.g. its version, the set of contained enums, types, interfaces, controls and elements and whether the library requires CSS. If the library requires CSS, a &lt;link&gt; will be added to the page referring to the corresponding `library.css` stylesheet for the library and the current theme.
         * 
         * When the optional parameter `vUrl` is given as a string or when a configuration object is given with a non-empty, string-valued property `url`, then that URL will be registered for the namespace of the library and all resources will be loaded from that location. This is convenience for a call like `jQuery.sap.registerModulePath(sLibrary, vUrl); // or vUrl.url resp.`
         * 
         * When the given library has been loaded already, no further action will be taken, especially, a given URL will not be registered! In the case of asynchronous loading, a Promise will be returned, but will be resolved immediately.
        */
        public loadLibrary(sLibrary: string, vUrl?: { url?: string, async?: boolean, }): {} | any;

        /**
            * Locks the Core. No browser events are dispatched to the controls.
         * 
         * Lock should be called before and after the dom is modified for rendering, roundtrips... Exceptions might be the case for asynchronous UI behavior
        */
        public lock(): any;

        /**
            * This method can be called to trigger realignment of controls after changing the cozy/compact CSS class of a DOM element, for example, the `&lt;body&gt;` tag.
        */
        public notifyContentDensityChanged(): any;

        /**
            * Registers a Plugin to the `sap.ui.core.Core`, which lifecycle will be managed (start and stop). 
         *  Plugin object need to implement two methods:  * `startPlugin(oCore)`: will be invoked, when the Plugin should start (as parameter the reference to the Core will be provided * `stopPlugin()`: will be invoked, when the Plugin should stop 
        */
        public registerPlugin(oPlugin: {}): any;

        /**
            * Sets or unsets a model for the given model name.
         * 
         * The `sName` must either be `undefined` (or omitted) or a non-empty string. When the name is omitted, the default model is set/unset.
         * 
         * When `oModel` is `null` or `undefined`, a previously set model with that name is removed from the Core.
         * 
         * Any change (new model, removed model) is propagated to all existing UIAreas and their descendants as long as a descendant doesn't have its own model set for the given name.
         * 
         * Note: to be compatible with future versions of this API, applications must not use the value `null`, the empty string `""` or the string literals `"null"` or `"undefined"` as model name.
        */
        public setModel(oModel: Model, sName?: string): this;

        /**
            * Implicitly creates a new `UIArea` (or reuses an exiting one) for the given DOM reference and adds the given control reference to the UIAreas content (existing content will be removed).
        */
        public setRoot(oDomRef: string | any, oControl: Interface | Control): any;

        /**
            * Defines the root directory from below which UI5 should load the theme with the given name. Optionally allows restricting the setting to parts of a theme covering specific control libraries.
         * 
         * Example: `sap.ui.getCore().setThemeRoot("my_theme", "https://mythemeserver.com/allThemes");
         *   sap.ui.getCore().applyTheme("my_theme");`
         * 
         * will cause the following file to be loaded (assuming that the bootstrap is configured to load libraries `sap.m` and `sap.ui.layout`): `https://mythemeserver.com/allThemes/sap/ui/core/themes/my_theme/library.css
         *   https://mythemeserver.com/allThemes/sap/ui/layout/themes/my_theme/library.css
         *   https://mythemeserver.com/allThemes/sap/m/themes/my_theme/library.css`
         * 
         * If parts of the theme are at different locations (e.g. because you provide a standard theme like "sap_belize" for a custom control library and this self-made part of the standard theme is at a different location than the UI5 resources), you can also specify for which control libraries the setting should be used, by giving an array with the names of the respective control libraries as second parameter: `sap.ui.getCore().setThemeRoot("sap_belize", ["my.own.library"], "https://mythemeserver.com/allThemes");`
         * 
         * This will cause the Belize theme to be loaded from the UI5 location for all standard libs. Resources for styling the `my.own.library` controls will be loaded from the configured location: `https://openui5.hana.ondemand.com/resources/sap/ui/core/themes/sap_belize/library.css
         *   https://openui5.hana.ondemand.com/resources/sap/ui/layout/themes/sap_belize/library.css
         *   https://openui5.hana.ondemand.com/resources/sap/m/themes/sap_belize/library.css
         *   https://mythemeserver.com/allThemes/my/own/library/themes/sap_belize/library.css`
         * 
         * If the custom theme should be loaded initially (via bootstrap attribute), the `themeRoots` property of the `window["sap-ui-config"]` object must be used instead of calling `sap.ui.getCore().setThemeRoot(...)` in order to configure the theme location early enough.
        */
        public setThemeRoot(sThemeName: string, sThemeBaseUrl: string): this;

        /**
            * Defines the root directory from below which UI5 should load the theme with the given name. Optionally allows restricting the setting to parts of a theme covering specific control libraries.
         * 
         * Example: `sap.ui.getCore().setThemeRoot("my_theme", "https://mythemeserver.com/allThemes");
         *   sap.ui.getCore().applyTheme("my_theme");`
         * 
         * will cause the following file to be loaded (assuming that the bootstrap is configured to load libraries `sap.m` and `sap.ui.layout`): `https://mythemeserver.com/allThemes/sap/ui/core/themes/my_theme/library.css
         *   https://mythemeserver.com/allThemes/sap/ui/layout/themes/my_theme/library.css
         *   https://mythemeserver.com/allThemes/sap/m/themes/my_theme/library.css`
         * 
         * If parts of the theme are at different locations (e.g. because you provide a standard theme like "sap_belize" for a custom control library and this self-made part of the standard theme is at a different location than the UI5 resources), you can also specify for which control libraries the setting should be used, by giving an array with the names of the respective control libraries as second parameter: `sap.ui.getCore().setThemeRoot("sap_belize", ["my.own.library"], "https://mythemeserver.com/allThemes");`
         * 
         * This will cause the Belize theme to be loaded from the UI5 location for all standard libs. Resources for styling the `my.own.library` controls will be loaded from the configured location: `https://openui5.hana.ondemand.com/resources/sap/ui/core/themes/sap_belize/library.css
         *   https://openui5.hana.ondemand.com/resources/sap/ui/layout/themes/sap_belize/library.css
         *   https://openui5.hana.ondemand.com/resources/sap/m/themes/sap_belize/library.css
         *   https://mythemeserver.com/allThemes/my/own/library/themes/sap_belize/library.css`
         * 
         * If the custom theme should be loaded initially (via bootstrap attribute), the `themeRoots` property of the `window["sap-ui-config"]` object must be used instead of calling `sap.ui.getCore().setThemeRoot(...)` in order to configure the theme location early enough.
        */
        public setThemeRoot(sThemeName: string, aLibraryNames: {}, sThemeBaseUrl: string): this;

        /**
            * Unlocks the Core.
         * 
         * Browser events are dispatched to the controls again after this method is called.
        */
        public unlock(): any;

        /**
            * Unregisters a Plugin out of the `sap.ui.core.Core`
        */
        public unregisterPlugin(oPlugin: {}): any;

    }
}