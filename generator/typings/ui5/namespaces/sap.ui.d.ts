declare namespace sap.ui {
    // Methods
    /**
        * Creates a new instance of a `Component` or returns the instance of an existing `Component`.
     * 
     * If you want to look up an existing `Component` you can call this function with a Component ID as parameter: `var oComponent = sap.ui.component(sComponentId);`
     * 
     * To create a new instance of a component you pass a component configuration object into this function: `var oComponent = sap.ui.component({
     *     name: "my.Component",
     *     url: "my/component/location",
     *     id: "myCompId1"
     *   });`
        */
    export function component(vConfig: { name: string, url?: string, componentData?: {}, id?: string, settings?: {}, async?: boolean, asyncHints?: {}, manifest?: boolean | string | {}, manifestUrl?: string, manifestFirst?: boolean, handleValidation?: string, }): {} | any;/**
    * Defines a controller class or creates an instance of an already defined controller class.
 * 
 * When a name and a controller implementation object is given, a new controller class of the given name is created. The members of the implementation object will be copied into each new instance of that controller class (shallow copy). ** Note **: as the members are shallow copied, controller instances will share all object values. This might or might not be what applications expect.
 * 
 * If only a name is given, a new instance of the named controller class is returned.
    */
    export function controller(sName: string, oControllerImpl: {}): void | {};/**
    * Defines a Javascript module with its name, its dependencies and a module value or factory.
 * 
 * The typical and only suggested usage of this method is to have one single, top level call to `sap.ui.define` in one Javascript resource (file). When a module is requested by its name for the first time, the corresponding resource is determined from the name and the current {@link jQuery.sap.registerResourcePath configuration}. The resource will be loaded and executed which in turn will execute the top level `sap.ui.define` call.
 * 
 * If the module name was omitted from that call, it will be substituted by the name that was used to request the module. As a preparation step, the dependencies as well as their transitive dependencies, will be loaded. Then, the module value will be determined: if a static value (object, literal) was given as `vFactory`, that value will be the module value. If a function was given, that function will be called (providing the module values of the declared dependencies as parameters to the function) and its return value will be used as module value. The framework internally associates the resulting value with the module name and provides it to the original requester of the module. Whenever the module is requested again, the same value will be returned (modules are executed only once).
 * 
 * * Example: *<br> The following example defines a module "SomeClass", but doesn't hard code the module name. If stored in a file 'sap/mylib/SomeClass.js', it can be requested as 'sap/mylib/SomeClass'. `sap.ui.define(['./Helper', 'sap/m/Bar'], function(Helper,Bar) {
 * 
 *     // create a new class
 *     var SomeClass = function() {};
 * 
 *     // add methods to its prototype
 *     SomeClass.prototype.foo = function() {
 * 
 *         // use a function from the dependency 'Helper' in the same package (e.g. 'sap/mylib/Helper' )
 *         var mSettings = Helper.foo();
 * 
 *         // create and return an sap.m.Bar (using its local name 'Bar')
 *         return new Bar(mSettings);
 * 
 *     }
 * 
 *     // return the class as module value
 *     return SomeClass;
 * 
 *   });`
 * 
 * In another module or in an application HTML page, the {@link sap.ui.require} API can be used to load the Something module and to work with it:
 * 
 * `sap.ui.require(['sap/mylib/Something'], function(Something) {
 * 
 *   // instantiate a Something and call foo() on it
 *   new Something().foo();
 * 
 * });`
 * 
 * ###Module Name Syntax
 * 
 * `sap.ui.define` uses a simplified variant of the {@link jQuery.sap.getResourcePath unified resource name} syntax for the module's own name as well as for its dependencies. The only difference to that syntax is, that for `sap.ui.define` and `sap.ui.require`, the extension (which always would be '.js') has to be omitted. Both methods always add this extension internally.
 * 
 * As a convenience, the name of a dependency can start with the segment './' which will be replaced by the name of the package that contains the currently defined module (relative name).
 * 
 * It is best practice to omit the name of the defined module (first parameter) and to use relative names for the dependencies whenever possible. This reduces the necessary configuration, simplifies renaming of packages and allows to map them to a different namespace.
 * 
 * ###Dependency to Modules
 * 
 * If a dependencies array is given, each entry represents the name of another module that the currently defined module depends on. All dependency modules are loaded before the value of the currently defined module is determined. The module value of each dependency module will be provided as a parameter to a factory function, the order of the parameters will match the order of the modules in the dependencies array.
 * 
 * ** Note: ** the order in which the dependency modules are * executed * is ** not ** defined by the order in the dependencies array! The execution order is affected by dependencies * between * the dependency modules as well as by their current state (whether a module already has been loaded or not). Neither module implementations nor dependents that require a module set must make any assumption about the execution order (other than expressed by their dependencies). There is, however, one exception with regard to third party libraries, see the list of limitations further down below.
 * 
 * ** Note: **a static module value (a literal provided to `sap.ui.define`) cannot depend on the module values of the dependency modules. Instead, modules can use a factory function, calculate the static value in that function, potentially based on the dependencies, and return the result as module value. The same approach must be taken when the module value is supposed to be a function.
 * 
 * ###Asynchronous Contract `sap.ui.define` is designed to support real Asynchronous Module Definitions (AMD) in future, although it internally still uses the old synchronous module loading of UI5. Callers of `sap.ui.define` therefore must not rely on any synchronous behavior that they might observe with the current implementation.
 * 
 * For example, callers of `sap.ui.define` must not use the module value immediately after invoking `sap.ui.define`:
 * 
 * `// COUNTER EXAMPLE HOW __NOT__ TO DO IT
 * 
 *   // define a class Something as AMD module
 *   sap.ui.define('Something', [], function() {
 *     var Something = function() {};
 *     return Something;
 *   });
 * 
 *   // DON'T DO THAT!
 *   // accessing the class _synchronously_ after sap.ui.define was called
 *   new Something();`
 * 
 * Applications that need to ensure synchronous module definition or synchronous loading of dependencies ** MUST ** use the old {@link jQuery.sap.declare} and {@link jQuery.sap.require} APIs.
 * 
 * ###(No) Global References
 * 
 * To be in line with AMD best practices, modules defined with `sap.ui.define` should not make any use of global variables if those variables are also available as module values. Instead, they should add dependencies to those modules and use the corresponding parameter of the factory function to access the module value.
 * 
 * As the current programming model and the documentation of UI5 heavily rely on global names, there will be a transition phase where UI5 enables AMD modules and local references to module values in parallel to the old global names. The fourth parameter of `sap.ui.define` has been added to support that transition phase. When this parameter is set to true, the framework provides two additional functionalities
 * 
 *  1. Before the factory function is called, the existence of the global parent namespace for the current module is ensured 2. The module value will be automatically exported under a global name which is derived from the name of the module 
 * 
 * The parameter lets the framework know whether any of those two operations is needed or not. In future versions of UI5, a central configuration option is planned to suppress those 'exports'.
 * 
 * ###Third Party Modules Although third party modules don't use UI5 APIs, they still can be listed as dependencies in a `sap.ui.define` call. They will be requested and executed like UI5 modules, but their module value will be `undefined`.
 * 
 * If the currently defined module needs to access the module value of such a third party module, it can access the value via its global name (if the module supports such a usage).
 * 
 * Note that UI5 temporarily deactivates an existing AMD loader while it executes third party modules known to support AMD. This sounds contradictorily at a first glance as UI5 wants to support AMD, but for now it is necessary to fully support UI5 applications that rely on global names for such modules.
 * 
 * Example: `// module 'Something' wants to use third party library 'URI.js'
 *   // It is packaged by UI5 as non-UI5-module 'sap/ui/thirdparty/URI'
 * 
 *   sap.ui.define('Something', ['sap/ui/thirdparty/URI'], function(URIModuleValue) {
 * 
 *     new URIModuleValue(); // fails as module value is undefined
 * 
 *     //global URI // (optional) declare usage of global name so that static code checks don't complain
 *     new URI(); // access to global name 'URI' works
 * 
 *     ...
 *   });`
 * 
 * ###Differences to Standard AMD
 * 
 * The current implementation of `sap.ui.define` differs from the AMD specification (https://github.com/amdjs/amdjs-api) or from concrete AMD loaders like `requireJS` in several aspects:  * The name `sap.ui.define` is different from the plain `define`. This has two reasons: first, it avoids the impression that `sap.ui.define` is an exact implementation of an AMD loader. And second, it allows the coexistence of an AMD loader (e.g. requireJS) and `sap.ui.define` in one application as long as UI5 or applications using UI5 are not fully prepared to run with an AMD loader. Note that the difference of the API names also implies that the UI5 loader can't be used to load 'real' AMD modules as they expect methods `define` and `require` to be available. Modules that use Unified Module Definition (UMD) syntax, can be loaded, but only when no AMD loader is present or when they expose their export also to the global namespace, even when an AMD loader is present (as e.g. jQuery does) * `sap.ui.define` currently loads modules with synchronous XHR calls. This is basically a tribute to the synchronous history of UI5. ** BUT: ** synchronous dependency loading and factory execution explicitly it not part of contract of `sap.ui.define`. To the contrary, it is already clear and planned that asynchronous loading will be implemented, at least as an alternative if not as the only implementation. Also check section ** Asynchronous Contract ** above.<br> Applications that need to ensure synchronous loading of dependencies ** MUST ** use the old {@link jQuery.sap.require} API. * `sap.ui.define` does not support plugins to use other file types, formats or protocols. It is not planned to support this in future * `sap.ui.define` does not support absolute URLs as module names (dependencies) nor does it allow module names that start with a slash. To refer to a module at an absolute URL, a resource root can be registered that points to that URL (or to a prefix of it). * `sap.ui.define` does ** not ** support the 'sugar' of requireJS where CommonJS style dependency declarations using `sap.ui.require("something")` are automagically converted into `sap.ui.define` dependencies before executing the factory function. 
 * 
 * ###Limitations, Design Considerations  * ** Limitation **: as dependency management is not supported for Non-UI5 modules, the only way to ensure proper execution order for such modules currently is to rely on the order in the dependency array. Obviously, this only works as long as `sap.ui.define` uses synchronous loading. It will be enhanced when asynchronous loading is implemented. * It was discussed to enforce asynchronous execution of the module factory function (e.g. with a timeout of 0). But this would have invalidated the current migration scenario where a sync `jQuery.sap.require` call can load a `sap.ui.define`'ed module. If the module definition would not execute synchronously, the synchronous contract of the require call would be broken (default behavior in existing UI5 applications) * A single file must not contain multiple calls to `sap.ui.define`. Multiple calls currently are only supported in the so called 'preload' files that the UI5 merge tooling produces. The exact details of how this works might be changed in future implementations and are not yet part of the API contract 
    */
    export function define(sModuleName: string, aDependencies: {}, vFactory: (() => any) | any, bExport: boolean): any;/**
    * Creates 0..n UI5 controls from an ExtensionPoint. One control if the ExtensionPoint is e.g. filled with a View, zero for ExtensionPoints without configured extension and n controls for multi-root Fragments as extension.
 * 
 * In JSViews, this function allows both JSON notation in aggregation content as well as adding an extension point to an aggregation after the target control has already been instantiated. In the latter case the optional parameters oTargetControls and oTargetAggregation need to be specified.
    */
    export function extensionpoint(oContainer: {} | {}, sExtName: string, fnCreateDefaultContent: any, oTargetControl: {}, sAggregationName: string): {} | any;/**
    * Instantiate a Fragment - this method loads the Fragment content, instantiates it, and returns this content. The Fragment object itself is not an entity which has further significance beyond this constructor.
 * 
 * To instantiate an existing Fragment, call this method as: sap.ui.fragment(sName, sType, [oController]); The sName must correspond to an XML Fragment which can be loaded via the module system (fragmentName + suffix ".fragment.[typeextension]") and which defines the Fragment content. If oController is given, the (event handler) methods referenced in the Fragment will be called on this controller. Note that Fragments may require a Controller to be given and certain methods to be available.
 * 
 * The Fragment types "XML", "JS" and "HTML" are available by default; additional Fragment types can be implemented and added using the {}.registerType() function.
 * 
 * Advanced usage: To instantiate a Fragment and give further configuration options, call this method as: sap.ui.fragment(oFragmentConfig, [oController]); The oFragmentConfig object can have the following properties: - "fragmentName": the name of the Fragment, as above - "fragmentContent": the definition of the Fragment content itself. When this property is given, any given name is ignored. The type of this property depends on the Fragment type, e.g. it could be a string for XML Fragments. - "type": the type of the Fragment, as above (mandatory) - "id": the ID of the Fragment (optional) Further properties may be supported by future or custom Fragment types. Any given properties will be forwarded to the Fragment implementation.
 * 
 * If you want to give a fixed ID for the Fragment, please use the advanced version of this method call with the configuration object or use the typed factories like sap.ui.xmlfragment(...) or sap.ui.jsfragment(...). Otherwise the Fragment ID is generated. In any case, the Fragment ID will be used as prefix for the ID of all contained controls.
    */
    export function fragment(sName: string, sType: string, oController: {}): {} | {};/**
    * Retrieve the {@link {} SAPUI5 Core} instance for the current window.
    */
    export function getCore(): {};/**
    * Loads the version info file (resources/sap-ui-version.json) and returns it or if a library name is specified then the version info of the individual library will be returned.
 * 
 * In case of the version info file is not available an error will occur when calling this function.
    */
    export function getVersionInfo(mOptions: { library?: boolean, async?: boolean, failOnError?: boolean, }): {} | any | any;/**
    * Instantiates an HTML-based Fragment.
 * 
 * To instantiate a Fragment, call this method as: sap.ui.htmlfragment([sId], sFragmentName, [oController]); The Fragment instance ID is optional and will be used as prefix for the ID of all contained controls. If no ID is passed, controls will not be prefixed. The sFragmentName must correspond to an HTML Fragment which can be loaded via the module system (fragmentName + ".fragment.html") and which defines the Fragment. If oController is given, the methods referenced in the Fragment will be called on this controller. Note that Fragments may require a Controller to be given and certain methods to be available.
 * 
 * Advanced usage: To instantiate a Fragment and optionally directly give the HTML definition instead of loading it from a file, call this method as: sap.ui.htmlfragment(oFragmentConfig, [oController]); The oFragmentConfig object can either have a "fragmentName" or a "fragmentContent" property. fragmentContent is optional and can hold the Fragment definition as XML string; if not given, fragmentName must be given and the Fragment content definition is loaded by the module system. Again, if oController is given, the methods referenced in the Fragment will be called on this controller.
    */
    export function htmlfragment(sId: string, vFragment: string | {}, oController: {}): {} | {};/**
    * Defines or creates an instance of a declarative HTML view.
 * 
 * The behavior of this method depends on the signature of the call and on the current context.
 * 
 *  * View Definition `sap.ui.htmlview(sId, vView)`: Defines a view of the given name with the given implementation. sId must be the views name, vView must be an object and can contain implementations for any of the hooks provided by HTMLView * View Instantiation `sap.ui.htmlview(sId?, vView)`: Creates an instance of the view with the given name (and id). 
 * 
 * Any other call signature will lead to a runtime error. If the id is omitted in the second variant, an id will be created automatically.
    */
    export function htmlview(sId: string, vView: { async?: boolean, }): {} | any;/**
    * Defines OR instantiates an HTML-based Fragment.
 * 
 * To define a JS Fragment, call this method as: sap.ui.jsfragment(sName, oFragmentDefinition) Where: - "sName" is the name by which this fragment can be found and instantiated. If defined in its own file, in order to be found by the module loading system, the file location and name must correspond to sName (path + file name must be: fragmentName + ".fragment.js"). - "oFragmentDefinition" is an object at least holding the "createContent(oController)" method which defines the Fragment content. If given during instantiation, the createContent method receives a Controller instance (otherwise oController is undefined) and the return value must be one {} (which could have any number of children).
 * 
 * To instantiate a JS Fragment, call this method as: sap.ui.jsfragment([sId], sFragmentName, [oController]); The Fragment ID is optional (generated if not given) and the Fragment implementation CAN use it to make contained controls unique (this depends on the implementation: some JS Fragments may choose not to support multiple instances within one application and not use the ID prefixing). The sFragmentName must correspond to a JS Fragment which can be loaded via the module system (fragmentName + ".fragment.js") and which defines the Fragment. If oController is given, the methods referenced in the Fragment will be called on this controller. Note that Fragments may require a Controller to be given and certain methods to be available.
    */
    export function jsfragment(sId: string, sFragmentName: string | {}, oController: {}): {} | {};/**
    * Creates a JSON view of the given name and id.
 * 
 * The `viewName` must either correspond to a JSON module that can be loaded via the module system (viewName + suffix ".view.json") and which defines the view or it must be a configuration object for a view. The configuration object can have a viewName, viewContent and a controller property. The viewName behaves as described above, viewContent can hold the view description as JSON string or as object literal.
 * 
 * ** Note **: when an object literal is given, it might be modified during view construction.
 * 
 * The controller property can hold a controller instance. If a controller instance is given, it overrides the controller defined in the view.
 * 
 * Like with any other control, an id is optional and will be created when missing.
    */
    export function jsonview(sId: string, vView: { viewName?: string, viewContent?: string | {}, async?: boolean, controller?: {}, }): {};/**
    * Defines or creates an instance of a JavaScript view.
 * 
 * The behavior of this method depends on the signature of the call and on the current context.
 * 
 * ###View Definition `sap.ui.jsview(sId, vView);` Defines a view of the given name with the given implementation. `sId` must be the view's name, `vView` must be an object and can contain implementations for any of the hooks provided by JSView.
 * 
 * ###View Instantiation `var oView = sap.ui.jsview(vView);
 *   var oView = sap.ui.jsview(vView, bASync);
 *   var oView = sap.ui.jsview(sId, vView);
 *   var oView = sap.ui.jsview(sId, vView, bAsync);` Creates an instance of the view with the given name (and id). If no view implementation has been defined for that view name, a JavaScript module with the same qualified name and with suffix `.view.js` will be loaded (required) and executed. The module should register a view definition on execution (1st. variant above).
 * 
 * If `sId` is omitted, an ID will be created automatically.
 * 
 * When `bAsync` has a truthy value, the view definition will be read asynchronously, if needed, but the (incomplete) view instance will be returned immediately.
 * 
 * ** Note: ** Any other call signature will lead to a runtime error.
    */
    export function jsview(sId: string, vView: string | {}, bAsync: boolean): {} | any;/**
    * Creates a lazy loading stub for a given class `sClassName`.
 * 
 * If the class has been loaded already, nothing is done. Otherwise a stub object or constructor and - optionally - a set of stub methods are created. All created stubs will load the corresponding module on execution and then delegate to their counterpart in the loaded module.
 * 
 * When no methods are given or when the list of methods contains the special name "new" (which is an operator can't be used as method name in JavaScript), then a stub ** constructor ** for class `sClassName` is created. Otherwise, a plain object is created.
 * 
 * ** Note **: Accessing any stub as a plain object without executing it (no matter whether it is a function or an object) won't load the module and therefore most like won't work as expected. This is a fundamental restriction of the lazy loader approach. It could only be fixed with JavaScript 1.5 features that are not available in all UI5 target browsers (e.g. not in IE8).
 * 
 * ** Note **: As a side effect of this method, the namespace containing the given class is created ** immediately **.
    */
    export function lazyRequire(sClassName: string, sMethods: string, sModuleName: string): any;/**
    * Redirects access to resources that are part of the given namespace to a location relative to the assumed ** application root folder **.
 * 
 * Any UI5 managed resource (view, controller, control, JavaScript module, CSS file, etc.) whose resource name starts with `sNamespace`, will be loaded from an equally named subfolder of the ** application root folder **. If the resource name consists of multiple segments (separated by a dot), each segment is assumed to represent an individual folder. In other words: when a resource name is converted to a URL, any dots ('.') are converted to slashes ('/').
 * 
 * ** Limitation: ** For the time being, the ** application root folder ** is assumed to be the same as the folder where the current page resides in.
 * 
 * Usage sample: `// Let UI5 know that resources, whose name starts with "com.mycompany.myapp"
 *   // should be loaded from the URL location "./com/mycompany/myapp"
 *   sap.ui.localResources("com.mycompany.myapp");
 * 
 *   // The following call implicitly will use the mapping done by the previous line
 *   // It will load a view from ./com/mycompany/myapp/views/Main.view.xml
 *   sap.ui.view({ view : "com.mycompany.myapp.views.Main", type : sap.ui.core.mvc.ViewType.XML});`
 * 
 * When applications need a more flexible mapping between resource names and their location, they can use {@link jQuery.sap.registerModulePath}.
 * 
 * It is intended to make this configuration obsolete in future releases, but for the time being, applications must call this method when they want to store resources relative to the assumed application root folder.
    */
    export function localResources(sNamespace: string): any;/**
    * Ensures that a given a namespace or hierarchy of nested namespaces exists in the current `window`.
    */
    export function namespace(sNamespace: string): {};/**
    * Resolves one or more module dependencies.
 * 
 * ** Synchronous Retrieval of a Single Module Value **
 * 
 * When called with a single string, that string is assumed to be the name of an already loaded module and the value of that module is returned. If the module has not been loaded yet, or if it is a Non-UI5 module (e.g. third party module), `undefined` is returned. This signature variant allows synchronous access to module values without initiating module loading.
 * 
 * Sample: `var JSONModel = sap.ui.require("sap/ui/model/json/JSONModel");`
 * 
 * For modules that are known to be UI5 modules, this signature variant can be used to check whether the module has been loaded.
 * 
 * ** Asynchronous Loading of Multiple Modules **
 * 
 * If an array of strings is given and (optionally) a callback function, then the strings are interpreted as module names and the corresponding modules (and their transitive dependencies) are loaded. Then the callback function will be called asynchronously. The module values of the specified modules will be provided as parameters to the callback function in the same order in which they appeared in the dependencies array.
 * 
 * The return value for the asynchronous use case is `undefined`.
 * 
 * `sap.ui.require(['sap/ui/model/json/JSONModel', 'sap/ui/core/UIComponent'], function(JSONModel,UIComponent) {
 * 
 *     var MyComponent = UIComponent.extend('MyComponent', {
 *       ...
 *     });
 *     ...
 * 
 *   });`
 * 
 * This method uses the same variation of the {@link jQuery.sap.getResourcePath unified resource name} syntax that {@link sap.ui.define} uses: module names are specified without the implicit extension '.js'. Relative module names are not supported.
    */
    export function require(vDependencies: string | {}, fnCallback: (() => any)): any | any;/**
    * Returns the URL of a resource that belongs to the given library and has the given relative location within the library. This is mainly meant for static resources like images that are inside the library. It is NOT meant for access to JavaScript modules or anything for which a different URL has been registered with jQuery.sap.registerModulePath(). For these cases use jQuery.sap.getModulePath(). It DOES work, however, when the given sResourcePath starts with "themes/" (= when it is a theme-dependent resource). Even when for this theme a different location outside the normal library location is configured.
    */
    export function resource(sLibraryName: string, sResourcePath: string): string;/**
    * Displays the control tree with the given root inside the area of the given DOM reference (or inside the DOM node with the given ID) or in the given Control.
 * 
 * Example: `&lt;div id="SAPUI5UiArea">&lt;/div>
 *   &lt;script>
 *     var oRoot = new sap.ui.commons.Label();
 *     oRoot.setText("Hello world!");
 *     sap.ui.setRoot("SAPUI5UiArea", oRoot);
 *   &lt;/script>` <p>
 * 
 * This is a shortcut for `sap.ui.getCore().setRoot()`.
 * 
 * Internally, if a string is given that does not identify a UIArea or a control then implicitly a new `UIArea` is created for the given DOM reference and the given control is added.
    */
    export function setRoot(oDomRef: string | any | {}, oControl: {} | {}): any;/**
    * Creates a Template for the given ID, DOM reference or a configuration object.
 * 
 * If no parameter is defined, this function makes a lookup of DOM elements which are specifying a type attribute. If the value of this type attribute matches a registered type then the content of this DOM element will be used to create a new `Template` instance.
 * 
 * If you want to lookup all kind of existing and known templates and parse them directly you can simply call: `sap.ui.template();`
 * 
 * To parse a concrete DOM element you can do so by using this function in the following way: `sap.ui.template("theTemplateId");`
 * 
 * Or you can pass the reference to a DOM element and use this DOM element as a source for the template: `sap.ui.template(oDomRef);`
 * 
 * The last option to use this function is to pass the information via a configuration object. This configuration object can be used to pass a context for the templating framework when compiling the template: `var oTemplateById = sap.ui.template({
 *     id: "theTemplateId",
 *     context: { ... }
 *   });
 * 
 *   var oTemplateByDomRef = sap.ui.template({
 *     domref: oDomRef,
 *     context: { ... }
 *   });`
 * 
 * It can also be used to load a template from another file: `var oTemplate = sap.ui.template({
 *     id: "myTemplate",
 *     src: "myTemplate.tmpl"
 *   });
 * 
 *   var oTemplateWithContext = sap.ui.template({
 *     id: "myTemplate",
 *     src: "myTemplate.tmpl",
 *     context: { ... }
 *   });`
    */
    export function template(oTemplate: { id: string, domref: any, type?: string, src?: string, control: string, }): {} | {};/**
    * Defines or creates an instance of a template view.
 * 
 * The behavior of this method depends on the signature of the call and on the current context.
 * 
 *  * View Definition `sap.ui.templateview(sId, vView)`: Defines a view of the given name with the given implementation. sId must be the views name, vView must be an object and can contain implementations for any of the hooks provided by templateview * View Instantiation `sap.ui.templateview(sId?, vView)`: Creates an instance of the view with the given name (and id). 
 * 
 * Any other call signature will lead to a runtime error. If the id is omitted in the second variant, an id will be created automatically.
    */
    export function templateview(sId: string, vView: string | {}): {} | any;/**
    * Creates a view of the given type, name and with the given id.
 * 
 * The `vView` configuration object can have the following properties for the view instantiation: <ul> <li>The ID `vView.id` specifies an ID for the View instance. If no ID is given, an ID will be generated.</li> <li>The view name `vView.viewName` corresponds to an XML module that can be loaded via the module system (vView.viewName + suffix ".view.xml")</li> <li>The controller instance `vView.controller` must be a valid controller implementation. The given controller instance overrides the controller defined in the view definition</li> <li>The view type `vView.type` specifies what kind of view will be instantiated. All valid view types are listed in the enumeration sap.ui.core.mvc.ViewType.</li> <li>The view data `vView.viewData` can hold user specific data. This data is available during the whole lifecycle of the view and the controller</li> <li>The view loading mode `vView.async` must be a boolean and defines if the view source is loaded synchronously or asynchronously. In async mode, the view is rendered empty initially, and re-rendered with the loaded view content.</li> <li>`vView.preprocessors`</li> can hold a map from the specified preprocessor type (e.g. "xml") to an array of preprocessor configurations; each configuration consists of a `preprocessor` property (optional when registered as on-demand preprocessor) and may contain further preprocessor-specific settings. The preprocessor can be either a module name as string implementation of {@link {}.Preprocessor} or a function according to {@link {}.Preprocessor.process}. Do not set properties starting with underscore like `_sProperty` property, these are reserved for internal purposes. When several preprocessors are provided for one hook, it has to be made sure that they do not conflict when being processed serially.
 * 
 * ** Note **: These preprocessors are only available to this instance. For global or on-demand availability use {@link {}.registerPreprocessor}.
 * 
 * ** Note **: Please note that preprocessors in general are currently only available to XMLViews.
 * 
 * ** Note **: Preprocessors only work in async views and will be ignored when the view is instantiated in sync mode by default, as this could have unexpected side effects. You may override this behaviour by setting the bSyncSupport flag of the preprocessor to true.
    */
    export function view(sId: string, vView: { async?: boolean, }): {};/**
    * Instantiates an XML-based Fragment.
 * 
 * To instantiate a Fragment, call this method as: sap.ui.xmlfragment([sId], sFragmentName, [oController]); The Fragment instance ID is optional and will be used as prefix for the ID of all contained controls. If no ID is passed, controls will not be prefixed. The sFragmentName must correspond to an XML Fragment which can be loaded via the module system (fragmentName + ".fragment.xml") and which defines the Fragment. If oController is given, the methods referenced in the Fragment will be called on this controller. Note that Fragments may require a Controller to be given and certain methods to be available.
 * 
 * Advanced usage: To instantiate a Fragment and optionally directly give the XML definition instead of loading it from a file, call this method as: sap.ui.xmlfragment(oFragmentConfig, [oController]); The oFragmentConfig object can either have a "fragmentName" or a "fragmentContent" property. fragmentContent is optional and can hold the Fragment definition as XML string; if not given, fragmentName must be given and the Fragment content definition is loaded by the module system. Again, if oController is given, the methods referenced in the Fragment will be called on this controller.
    */
    export function xmlfragment(sId: string, vFragment: string | {}, oController: {}): {} | {};/**
    * Instantiates an XMLView of the given name and with the given ID.
 * 
 * The `viewName` must either correspond to an XML module that can be loaded via the module system (viewName + suffix ".view.xml") and which defines the view, or it must be a configuration object for a view. The configuration object can have a `viewName`, `viewContent` and a `controller ` property. The `viewName` behaves as described above. `viewContent` is optional and can hold a view description as XML string or as already parsed XML Document. If not given, the view content definition is loaded by the module system.
 * 
 * ** Note **: if a `Document` is given, it might be modified during view construction.
 * 
 * ** Note: **<br> On root level, you can only define content for the default aggregation, e.g. without adding the `&lt;content&gt;` tag. If you want to specify content for another aggregation of a view like `dependents`, place it in a child control's dependents aggregation or add it by using {@link {}#addDependent}.
 * 
 * ** Note **: if you enable caching, you need to take care of the invalidation via keys. Automatic invalidation takes only place if the UI5 version or the component descriptor (manifest.json) change. This is still an experimental feature and may experience slight changes of the invalidation parameters or the cache key format.
 * 
 * The controller property can hold a controller instance. If a controller instance is given, it overrides the controller defined in the view.
 * 
 * Like with any other control, ID is optional and one will be created automatically.
    */
    export function xmlview(sId: string, vView: { viewName?: string, viewContent?: string | Document, async?: boolean, cache?: {}, preprocessors?: {}, controller?: {}, }): {};
}