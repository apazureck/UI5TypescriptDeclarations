declare namespace jQuery.sap {
    // Methods
    /**
        * Adds a whitelist entry for URL validation.
        */
    export function addUrlWhitelist(protocol: string, host: string, port: string, path: string): any;/**
    * Calculate delta of old list and new list.
 * 
 * This partly implements the algorithm described in "A Technique for Isolating Differences Between Files" but instead of working with hashes, it does compare each entry of the old list with each entry of the new list, which causes terrible performane on large datasets.
    */
    export function arrayDiff(aOld: any[], aNew: any[], fnCompare: (() => any), bUniqueEntries: boolean): any[];/**
    * Calculate delta of old list and new list.
 * 
 * This function implements the algorithm described in "A Technique for Isolating Differences Between Files" (Commun. ACM, April 1978, Volume 21, Number 4, Pages 264-268).
 * 
 * Items in the arrays are not compared directly. Instead, a substitute symbol is determined for each item by applying the provided function `fnSymbol` to it. Items with strictly equal symbols are assumed to represent the same logical item: `fnSymbol(a) === fnSymbol(b)   <=>   a 'is logically the same as' b` As an additional constraint, casting the symbols to string should not modify the comparison result. If this second constraint is not met, this method might report more diffs than necessary.
 * 
 * If no symbol function is provided, a default implementation is used which applies `JSON.stringify` to non-string items and reduces the strings to a hash code. It is not guaranteed that this default implementation fulfills the above constraint in all cases, but it is a compromise between implementation effort, generality and performance. If items are known to be non-stringifiable (e.g. because they may contain cyclic references) or when hash collisions are likely, an own `fnSymbol` function must be provided.
 * 
 * The result of the diff is a sequence of update operations, each consisting of a `type` (either `"insert"` or `"delete"`) and an `index`. By applying the operations one after the other to the old array, it can be transformed to an array whose items are equal to the new array.
 * 
 * Sample implementation of the update `function update(aOldArray, aNewArray) {
 * 
 *    // calculate the diff
 *    var aDiff = jQuery.sap.arraySymbolDiff(aOldArray, aNewArray, __provide_your_symbol_function_here__);
 * 
 *    // apply update operations
 *    aDiff.forEach( function(op) {
 * 
 *      // invariant: aOldArray and aNewArray now are equal up to (excluding) op.index
 * 
 *      switch ( op.type ) {
 *      case 'insert':
 *        // new array contains a new (or otherwise unmapped) item, add it here
 *        aOldArray.splice(op.index, 0, aNewArray[op.index]);
 *        break;
 *      case 'delete':
 *        // an item is no longer part of the array (or has been moved to another position), remove it
 *        aOldArray.splice(op.index, 1);
 *        break;
 *      default:
 *        throw new Error('unexpected diff operation type');
 *      }
 * 
 *    });
 *  }`
    */
    export function arraySymbolDiff(aOld: any[], aNew: any[], fnSymbol: (() => any)): {};/**
    * A simple assertion mechanism that logs a message when a given condition is not met.
 * 
 * ** Note: ** Calls to this method might be removed when the JavaScript code is optimized during build. Therefore, callers should not rely on any side effects of this method.
    */
    export function assert(bResult: boolean, vMessage: string | (() => any)): any;/**
    * Binds all events for listening with the given callback function.
    */
    export function bindAnyEvent(fnCallback: (() => any)): any;/**
    * Shortcut for jQuery("#" + id) with additionally the id being escaped properly. I.e.: returns the jQuery object for the DOM element with the given id
 * 
 * Use this method instead of jQuery(...) if you know the argument is exactly one id and the id is not known in advance because it is in a variable (as opposed to a string constant with known content).
    */
    export function byId(sId: string, oContext: any): {};/**
    * Transforms a hyphen separated string to a camel case string.
    */
    export function camelCase(sString: string): string;/**
    * Converts one character of the string to upper case, at a given position.
 * 
 * If no position is given or when it is negative or beyond the last character of `sString`, then the first character will be converted to upper case. The first character position is 0.
    */
    export function charToUpperCase(sString: string, iPos: number): string;/**
    * Checks a given mouseover or mouseout event whether it is equivalent to a mouseenter or mousleave event regarding the given DOM reference.
    */
    export function checkMouseEnterOrLeave(oEvent: jQuery.Event, oDomRef: any): any;/**
    * Stops the delayed call.
 * 
 * The function given when calling delayedCall is not called anymore.
    */
    export function clearDelayedCall(sDelayedCallId: string): any;/**
    * Stops the interval call.
 * 
 * The function given when calling intervalCall is not called anymore.
    */
    export function clearIntervalCall(sIntervalCallId: string): any;/**
    * Clears the whitelist for URL validation
    */
    export function clearUrlWhitelist(): any;/**
    * Returns whether `oDomRefChild` is contained in or equal to `oDomRefContainer`.
 * 
 * This is a browser-independent version of the .contains method of Internet Explorer. For compatibility reasons it returns `true` if `oDomRefContainer` and `oDomRefChild` are equal.
 * 
 * This method intentionally does not operate on the jQuery object, as the original `jQuery.contains()` method also does not do so.
    */
    export function containsOrEquals(oDomRefContainer: any, oDomRefChild: any): boolean;/**
    * Declares a module as existing.
 * 
 * By default, this function assumes that the module will create a JavaScript object with the same name as the module. As a convenience it ensures that the parent namespace for that object exists (by calling jQuery.sap.getObject). If such an object creation is not desired, `bCreateNamespace` must be set to false.
    */
    export function declare(sModuleName: string | {}, bCreateNamespace: boolean): any;/**
    * Calls a method after a given delay and returns an id for this timer
    */
    export function delayedCall(iDelay: number, oObject: {}, method: string | {}, aParameters: any[]): string;/**
    * For the given scroll position measured from the "beginning" of a container (the right edge in RTL mode) this method returns the scrollLeft value as understood by the current browser in RTL mode. This value is specific to the given DOM element, as the computation may involve its dimensions.
 * 
 * So when oDomRef should be scrolled 2px from the beginning, the number "2" must be given as iNormalizedScrollBegin and the result of this method (which may be a large or even negative number, depending on the browser) can then be set as oDomRef.scrollLeft to achieve the desired (cross-browser-consistent) scrolling position. Low values make the right part of the content visible, high values the left part.
 * 
 * This method does no scrolling on its own, it only calculates the value to set (so it can also be used for animations).
 * 
 * Only use this method in RTL mode, as the behavior in LTR mode is undefined and may change!
    */
    export function denormalizeScrollBeginRTL(iNormalizedScrollBegin: number, oDomRef: any): number;/**
    * For the given scrollLeft value this method returns the scrollLeft value as understood by the current browser in RTL mode. This value is specific to the given DOM element, as the computation may involve its dimensions.
 * 
 * So when oDomRef should be scrolled 2px from the leftmost position, the number "2" must be given as iNormalizedScrollLeft and the result of this method (which may be a large or even negative number, depending on the browser) can then be set as oDomRef.scrollLeft to achieve the desired (cross-browser-consistent) scrolling position.
 * 
 * This method does no scrolling on its own, it only calculates the value to set (so it can also be used for animations).
    */
    export function denormalizeScrollLeftRTL(iNormalizedScrollLeft: number, oDomRef: any): number;/**
    * Disable touch to mouse handling
    */
    export function disableTouchToMouseHandling(): any;/**
    * Shortcut for document.getElementById(), including a bug fix for older IE versions.
    */
    export function domById(sId: string, oWindow: any): any;/**
    * Encode the string for inclusion into CSS string literals or identifiers
    */
    export function encodeCSS(sString: string): string;/**
    * Encode the string for inclusion into HTML content/attribute
    */
    export function encodeHTML(sString: string): string;/**
    * Encode the string for inclusion into a JS string literal
    */
    export function encodeJS(sString: string): string;/**
    * Encode the string for inclusion into a URL parameter
    */
    export function encodeURL(sString: string): string;/**
    * Encode a map of parameters into a combined URL parameter string
    */
    export function encodeURLParameters(mParams: {}): string;/**
    * Encode the string for inclusion into XML content/attribute
    */
    export function encodeXML(sString: string): string;/**
    * Checks whether a given `sString` ends with `sEndString` respecting the case of the strings.
    */
    export function endsWith(sString: string, sEndString: string): boolean;/**
    * Checks whether a given `sString` ends with `sEndString` ignoring the case of the strings.
    */
    export function endsWithIgnoreCase(sString: string, sEndString: string): boolean;/**
    * Compares the two given values for equality, especially takes care not to compare arrays and objects by reference, but compares their content. Note: function does not work with comparing XML objects
    */
    export function equal(a: any, b: any, maxDepth: number, contains: boolean): boolean;/**
    * Encode the string for inclusion into HTML content/attribute. Old name "escapeHTML" kept for backward compatibility
    */
    export function escapeHTML(sString: string): string;/**
    * Encode the string for inclusion into a JS string literal. Old name "escapeJS" kept for backward compatibility
    */
    export function escapeJS(sString: string): string;/**
    * Escapes all characters that would have a special meaning in a regular expression.
 * 
 * This method can be used when a string with arbitrary content has to be integrated into a regular expression and when the whole string should match literally.
 * 
 * Example: `var text = "E=m*c^2"; // text to search
 *   var search = "m*c";   // text to search for
 * 
 *   text.match( new RegExp(                         search  ) ); // [ "c" ]
 *   text.match( new RegExp( jQuery.sap.escapeRegExp(search) ) ); // [ "m*c" ]`
    */
    export function escapeRegExp(sString: string): string;/**
    * Returns a new constructor function that creates objects with the given prototype.
 * 
 * As of 1.45.0, this method has been deprecated. Use the following code pattern instead: `function MyFunction() {
 *   };
 *   MyFunction.prototype = oPrototype;`
    */
    export function factory(oPrototype: {}): (() => any);/**
    * Calls focus() on the given DOM element.
    */
    export function focus(oDomRef: any): boolean;/**
    * Creates a string from a pattern by replacing placeholders with concrete values.
 * 
 * The syntax of the pattern is inspired by (but not fully equivalent to) the java.util.MessageFormat.
 * 
 * Placeholders have the form `{ integer }`, where any occurrence of `{0}` is replaced by the value with index 0 in `aValues`, `{1}` by the value with index 1 in `aValues` etc.
 * 
 * To avoid interpretation of curly braces as placeholders, any non-placeholder fragment of the pattern can be enclosed in single quotes. The surrounding single quotes will be omitted from the result. Single quotes that are not meant to escape a fragment and that should appear in the result, need to be doubled. In the result, only a single single quote will occur.
 * 
 * Example Pattern Strings: `jQuery.sap.formatMessage("Say {0}",     ["Hello"]) -> "Say Hello"    // normal use case
 *   jQuery.sap.formatMessage("Say '{0}'",   ["Hello"]) -> "Say {0}"      // escaped placeholder
 *   jQuery.sap.formatMessage("Say ''{0}''", ["Hello"]) -> "Say 'Hello'"  // doubled single quote
 *   jQuery.sap.formatMessage("Say '{0}'''", ["Hello"]) -> "Say {0}'"     // doubled single quote in quoted fragment`
 * 
 * In contrast to java.util.MessageFormat, format types or format styles are not supported. Everything after the argument index and up to the first closing curly brace is ignored. Nested placeholders (as supported by java.lang.MessageFormat for the format type choice) are not ignored but reported as a parse error.
 * 
 * This method throws an Error when the pattern syntax is not fulfilled (e.g. unbalanced curly braces, nested placeholders or a non-numerical argument index).
 * 
 * This method can also be used as a formatter within a binding. The first part of a composite binding will be used as pattern, the following parts as aValues. If there is only one value and this value is an array it will be handled like the default described above.
    */
    export function formatMessage(sPattern: string, aValues: {}): string;/**
    * Returns the names of all declared modules.
    */
    export function getAllDeclaredModules(): {};/**
    * Constructs a URL to load the module with the given name and file type (suffix).
 * 
 * Searches the longest prefix of the given module name for which a registration exists (see {@link jQuery.sap.registerModulePath}) and replaces that prefix by the registered URL prefix.
 * 
 * The remainder of the module name is appended to the URL, replacing any dot with a slash.
 * 
 * Finally, the given suffix (typically a file name extension) is added (unconverted).
 * 
 * The returned name (without the suffix) doesn't end with a slash.
    */
    export function getModulePath(sModuleName: string, sSuffix: string): string;/**
    * Returns a JavaScript object which is identified by a sequence of names.
 * 
 * A call to `getObject("a.b.C")` has essentially the same effect as accessing `window.a.b.C` but with the difference that missing intermediate objects (a or b in the example above) don't lead to an exception.
 * 
 * When the addressed object exists, it is simply returned. If it doesn't exists, the behavior depends on the value of the second, optional parameter `iNoCreates` (assuming 'n' to be the number of names in the name sequence):  <li>NaN: if iNoCreates is not a number and the addressed object doesn't exist, then `getObject()` returns `undefined`. <li>0 &lt; iNoCreates &lt; n: any non-existing intermediate object is created, except the * last * `iNoCreates` ones. 
 * 
 * Example: `getObject()            -- returns the context object (either param or window)
 *   getObject("a.b.C")     -- will only try to get a.b.C and return undefined if not found.
 *   getObject("a.b.C", 0)  -- will create a, b, and C in that order if they don't exists
 *   getObject("a.b.c", 1)  -- will create a and b, but not C.`
 * 
 * When a `oContext` is given, the search starts in that object. Otherwise it starts in the `window` object that this plugin has been created in.
 * 
 * Note: Although this method internally uses `object["key"]` to address object properties, it does not support all possible characters in a name. Especially the dot ('.') is not supported in the individual name segments, as it is always interpreted as a name separator.
    */
    export function getObject(sName: string, iNoCreates: number, oContext: {}): (() => any);/**
    * Determines the URL for a resource given its unified resource name.
 * 
 * Searches the longest prefix of the given resource name for which a registration exists (see {@link jQuery.sap.registerResourcePath}) and replaces that prefix by the registered URL prefix.
 * 
 * The remainder of the resource name is appended to the URL.
 * 
 * ** Unified Resource Names **<br> Several UI5 APIs use * Unified Resource Names (URNs) * as naming scheme for resources that they deal with (e.h. Javascript, CSS, JSON, XML, ...). URNs are similar to the path component of a URL:  * they consist of a non-empty sequence of name segments * segments are separated by a forward slash '/' * name segments consist of URL path segment characters only. It is recommended to use only ASCII letters (upper or lower case), digits and the special characters ' * the empty name segment is not supported * names consisting of dots only, are reserved and must not be used for resources * names are case sensitive although the underlying server might be case-insensitive * the behavior with regard to URL encoded characters is not specified, %ddd notation should be avoided * the meaning of a leading slash is undefined, but might be defined in future. It therefore should be avoided , '_', '-', '.') <li>the empty name segment is not supported</li> <li>names consisting of dots only, are reserved and must not be used for resources</li> <li>names are case sensitive although the underlying server might be case-insensitive</li> <li>the behavior with regard to URL encoded characters is not specified, %ddd notation should be avoided</li> <li>the meaning of a leading slash is undefined, but might be defined in future. It therefore should be avoided</li> 
 * 
 * UI5 APIs that only deal with Javascript resources, use a slight variation of this scheme, where the extension '.js' is always omitted (see {@link sap.ui.define}, {@link sap.ui.require}).
 * 
 * ** Relationship to old Module Name Syntax **<br>
 * 
 * Older UI5 APIs that deal with resources (like {@link jQuery.sap.registerModulePath}, {@link jQuery.sap.require} and {@link jQuery.sap.declare}) used a dot-separated naming scheme (called 'module names') which was motivated by object names in the global namespace in Javascript.
 * 
 * The new URN scheme better matches the names of the corresponding resources (files) as stored in a server and the dot ('.') is no longer a forbidden character in a resource name. This finally allows to handle resources with different types (extensions) with the same API, not only JS files.
 * 
 * Last but not least does the URN scheme better match the naming conventions used by AMD loaders (like `requireJS`).
    */
    export function getResourcePath(sResourceName: string): string;/**
    * Returns a new function that returns the given `oValue` (using its closure).
 * 
 * Avoids the need for a dedicated member for the value.
 * 
 * As closures don't come for free, this function should only be used when polluting the enclosing object is an absolute "must-not" (as it is the case in public base classes).
    */
    export function getter(oValue: {}): (() => any);/**
    * Creates and returns a new instance of {@link jQuery.sap.util.UriParameters}.
 * 
 * Example for reading a single URI parameter (or the value of the first occurrence of the URI parameter): `var sValue = jQuery.sap.getUriParameters().get("myUriParam");`
 * 
 * Example for reading the values of the first of the URI parameter (with multiple occurrences): `var aValues = jQuery.sap.getUriParameters().get("myUriParam", true);
 * 	for(i in aValues){
 * 	var sValue = aValues[i];
 * 	}`
    */
    export function getUriParameters(sUri: string): jQuery.sap.util.UriParameters;/**
    * Gets the whitelist for URL validation.
    */
    export function getUrlWhitelist(): {};/**
    * Executes an 'eval' for its arguments in the global context (without closure variables).
 * 
 * This is a synchronous replacement for `jQuery.globalEval` which in some browsers (e.g. FireFox) behaves asynchronously.
    */
    export function globalEval(): any;/**
    * Transforms a camel case string into a hyphen separated string.
    */
    export function hyphen(sString: string): string;/**
    * Includes the script (via &lt;script&gt;-tag) into the head for the specified `sUrl` and optional `sId`.
    */
    export function includeScript(vUrl: { url: string, id?: string, attributes?: {}, }, vId: string | {}, fnLoadCallback: (() => any), fnErrorCallback: (() => any)): void | any;/**
    * Includes the specified stylesheet via a &lt;link&gt;-tag in the head of the current document. If there is call to `includeStylesheet` providing the sId of an already included stylesheet, the existing element will be replaced.
    */
    export function includeStyleSheet(vUrl: { url: string, id?: string, attributes?: {}, }, vId: string | {}, fnLoadCallback: (() => any), fnErrorCallback: (() => any)): void | any;/**
    * Does some basic modifications to the HTML page that make it more suitable for mobile apps. Only the first call to this method is executed, subsequent calls are ignored. Note that this method is also called by the constructor of toplevel controls like sap.m.App, sap.m.SplitApp and sap.m.Shell. Exception: if no homeIcon was set, subsequent calls have the chance to set it.
 * 
 * The "options" parameter configures what exactly should be done.
 * 
 * It can have the following properties:  * viewport: whether to set the viewport in a way that disables zooming (default: true) * statusBar: the iOS status bar color, "default", "black" or "black-translucent" (default: "default") * hideBrowser: whether the browser UI should be hidden as far as possible to make the app feel more native (default: true) * preventScroll: whether native scrolling should be disabled in order to prevent the "rubber-band" effect where the whole window is moved (default: true) * preventPhoneNumberDetection: whether Safari Mobile should be prevented from transforming any numbers that look like phone numbers into clickable links; this should be left as "true", otherwise it might break controls because Safari actually changes the DOM. This only affects all page content which is created after initMobile is called. * rootId: the ID of the root element that should be made fullscreen; only used when hideBrowser is set (default: the document.body) * useFullScreenHeight: a boolean that defines whether the height of the html root element should be set to 100%, which is required for other elements to cover the full height (default: true) <li>homeIcon: deprecated since 1.12, use jQuery.sap.setIcons instead. 
    */
    export function initMobile(options: { viewport?: boolean, statusBar?: string, hideBrowser?: boolean, preventScroll?: boolean, preventPhoneNumberDetection?: boolean, rootId?: string, useFullScreenHeight?: boolean, homeIcon?: string, homeIconPrecomposed?: boolean, mobileWebAppCapable?: boolean, }): any;/**
    * Calls a method after a given interval and returns an id for this interval.
    */
    export function intervalCall(iInterval: number, oObject: {}, method: string | {}, aParameters: any[]): string;/**
    * Check whether a given module has been loaded / declared already.
 * 
 * Returns true as soon as a module has been required the first time, even when loading/executing it has not finished yet. So the main assertion of a return value of `true` is that the necessary actions have been taken to make the module available in the near future. It does not mean, that the content of the module is already available!
 * 
 * This fuzzy behavior is necessary to avoid multiple requests for the same module. As a consequence of the assertion above, a * preloaded * module does not count as * declared *. For preloaded modules, an explicit call to `jQuery.sap.require` is necessary to make them available.
 * 
 * If a caller wants to know whether a module needs to be loaded from the server, it can set `bIncludePreloaded` to true. Then, preloaded modules will be reported as 'declared' as well by this method.
    */
    export function isDeclared(sModuleName: string, bIncludePreloaded: boolean): boolean;/**
    * Returns a new object which has the given `oPrototype` as its prototype.
 * 
 * If several objects with the same prototype are to be created, {@link jQuery.sap.factory} should be used instead.
    */
    export function newObject(oPrototype: {}): {};/**
    * Returns the window reference for a DomRef
    */
    export function ownerWindow(oDomRef: any): any;/**
    * Pads a string on the left side until is has at least the given length.
 * 
 * The method always adds full copies of `sPadChar` to the given string. When `sPadChar` has a length > 1, the length of the returned string actually might be greater than `iLength`.
    */
    export function padLeft(sString: string, sPadChar: string, iLength: number): string;/**
    * Pads a string on the right side until is has at least the given length.
 * 
 * The method always adds full copies of `sPadChar` to the given string. When `sPadChar` has a length > 1, the length of the returned string actually might be greater than `iLength`.
    */
    export function padRight(sString: string, sPadChar: string, iLength: number): string;/**
    * Parses the specified XML formatted string text using native parsing function of the browser and returns a valid XML document. If an error occurred during parsing a parse error object is returned as property (parseError) of the returned XML document object. The parse error object has the following error information parameters: errorCode, url, reason, srcText, line, linepos, filepos
    */
    export function parseXML(sXMLText: string): {};/**
    * Creates and returns a new instance of {@link jQuery.sap.util.Properties}.
 * 
 * If option 'url' is passed, immediately a load request for the given target is triggered. A property file that is loaded can contain comments with a leading ! or #. The loaded property list does not contain any comments.
 * 
 * ** Example for loading a property file: ** `jQuery.sap.properties({url : "../myProperty.properties"});`
 * 
 * ** Example for creating an empty properties instance: ** `jQuery.sap.properties();`
 * 
 * ** Examples for getting and setting properties: ** `var oProperties = jQuery.sap.properties();
 * 	oProperties.setProperty("KEY_1","Test Key");
 * 	var sValue1 = oProperties.getProperty("KEY_1");
 * 	var sValue2 = oProperties.getProperty("KEY_2","Default");`
    */
    export function properties(mParams: { url?: string, async?: boolean, headers?: {}, returnNullIfMissing?: {}, }): jQuery.sap.util.Properties | any | any;/**
    * Registers a URL prefix for a module name prefix.
 * 
 * Before a module is loaded, the longest registered prefix of its module name is searched for and the associated URL prefix is used as a prefix for the request URL. The remainder of the module name is attached to the request URL by replacing dots ('.') with slashes ('/').
 * 
 * The registration and search operates on full name segments only. So when a prefix
 * 
 * 'sap.com' -> 'http://www.sap.com/ui5/resources/'
 * 
 * is registered, then it will match the name
 * 
 * 'sap.com.Button'
 * 
 * but not
 * 
 * 'sap.commons.Button'
 * 
 * Note that the empty prefix ('') will always match and thus serves as a fallback for any search.
 * 
 * The prefix can either be given as string or as object which contains the url and a 'final' property. If 'final' is set to true, overwriting a module prefix is not possible anymore.
    */
    export function registerModulePath(sModuleName: string, vUrlPrefix: { url?: string, final?: boolean, }): any;/**
    * Registers a URL prefix for a resource name prefix.
 * 
 * Before a resource is loaded, the longest registered prefix of its unified resource name is searched for and the associated URL prefix is used as a prefix for the request URL. The remainder of the resource name is attached to the request URL 1:1.
 * 
 * The registration and search operates on full name segments only. So when a prefix
 * 
 * 'sap/com' -> 'http://www.sap.com/ui5/resources/'
 * 
 * is registered, then it will match the name
 * 
 * 'sap/com/Button'
 * 
 * but not
 * 
 * 'sap/commons/Button'
 * 
 * Note that the empty prefix ('') will always match and thus serves as a fallback for any search.
 * 
 * The url prefix can either be given as string or as object which contains the url and a final flag. If final is set to true, overwriting a resource name prefix is not possible anymore.
    */
    export function registerResourcePath(sResourceNamePrefix: string, vUrlPrefix: { url?: string, final?: boolean, }): any;/**
    * Removes a whitelist entry for URL validation.
    */
    export function removeUrlWhitelist(iIndex: number): any;/**
    * Ensures that the given module is loaded and executed before execution of the current script continues.
 * 
 * By issuing a call to this method, the caller declares a dependency to the listed modules.
 * 
 * Any required and not yet loaded script will be loaded and execute synchronously. Already loaded modules will be skipped.
    */
    export function require(vModuleName: string | {}): any;/**
    * Creates and returns a new instance of {@link jQuery.sap.util.ResourceBundle} using the given URL and locale to determine what to load.
    */
    export function resources(mParams: { url?: string, locale?: string, includeInfo?: boolean, async?: boolean, }): jQuery.sap.util.ResourceBundle | any;/**
    * Returns the size (width of the vertical / height of the horizontal) native browser scrollbars.
 * 
 * This function must only be used when the DOM is ready.
    */
    export function scrollbarSize(sClasses: string, bForce: boolean): {};/**
    * Serializes the specified XML document into a string representation.
    */
    export function serializeXML(oXMLDocument: string): {};/**
    * Sets the bookmark icon for desktop browsers and the icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
 * 
 * Only call this method once and call it early when the page is loading: browsers behave differently when the favicon is modified while the page is alive. Some update the displayed icon inside the browser but use an old icon for bookmarks. When a favicon is given, any other existing favicon in the document will be removed. When at least one home icon is given, all existing home icons will be removed and new home icon tags for all four resolutions will be created.
 * 
 * The home icons must be in PNG format and given in different sizes for iPad/iPhone with and without retina display. The favicon is used in the browser and for desktop shortcuts and should optimally be in ICO format: PNG does not seem to be supported by Internet Explorer and ICO files can contain different image sizes for different usage locations. E.g. a 16x16px version is used inside browsers.
 * 
 * All icons are given in an an object holding icon URLs and other settings. The properties of this object are:  * phone: a 60x60 pixel version for non-retina iPhones * tablet: a 76x76 pixel version for non-retina iPads * phone@2: a 120x120 pixel version for retina iPhones * tablet@2: a 152x152 pixel version for retina iPads * precomposed: whether the home icons already have some glare effect (otherwise iOS will add it) (default: false) * favicon: the ICO file to be used inside the browser and for desktop shortcuts 
 * 
 * One example is: `{
 *    'phone':'phone-icon_60x60.png',
 *    'phone@2':'phone-retina_120x120.png',
 *    'tablet':'tablet-icon_76x76.png',
 *    'tablet@2':'tablet-retina_152x152.png',
 *    'precomposed':true,
 *    'favicon':'desktop.ico'
 * }` If one of the sizes is not given, the largest available alternative image will be used instead for this size. On Android these icons may or may not be used by the device. Apparently chances can be improved by using icons with glare effect, so the "precomposed" property can be set to "true". Some Android devices may also use the favicon for bookmarks instead of the home icons.</li>
    */
    export function setIcons(oIcons: {}): any;/**
    * Sets the "apple-mobile-web-app-capable" and "mobile-web-app-capable" meta information which defines whether the application is loaded in full screen mode (browser address bar and toolbar are hidden) after the user does "add to home screen" on mobile devices. Currently this meta tag is only supported by iOS Safari and mobile Chrome from version 31.
 * 
 * If the application opens new tabs because of attachments, url and so on, setting this to false will let the user be able to go from the new tab back to the application tab after the application is added to home screen.
 * 
 * Note: this function only has effect when the application runs on iOS Safari and mobile Chrome from version 31.
    */
    export function setMobileWebAppCapable(bValue: boolean): any;/**
    * Sets an object property to a given value, where the property is identified by a sequence of names (path).
 * 
 * When a `oContext` is given, the path starts in that object. Otherwise it starts in the `window` object that this plugin has been created for.
 * 
 * Note: Although this method internally uses `object["key"]` to address object properties, it does not support all possible characters in a name. Especially the dot ('.') is not supported in the individual name segments, as it is always interpreted as a name separator.
    */
    export function setObject(sName: string, vValue: any, oContext: {}): any;/**
    * Convenience wrapper around `jQuery.ajax()` that avoids the need for callback functions when synchronous calls are made. If the setting `complexResult` is true (default), then the return value is an object with the following properties  <li>`success` boolean whether the call succeeded or not <li>`data` any the data returned by the call. For dataType 'text' this is a string, for JSON it is an object, for XML it is a document. When the call failed, then data is not defined <li>`status` string a textual status ('success,', 'error', 'timeout',...) <li>`statusCode` string the HTTP status code of the request <li>`error` Error an error object (exception) in case an error occurred <li>`errorText` string an error message in case an error occurred 
 * 
 * When `complexResult` is false, then in the case of success, only 'data' is returned, in case of an error the 'fallback' setting is returned (defaults to undefined).
 * 
 * Note that async=false is always enforced by this method.
    */
    export function sjax(oOrigSettings: string): any;/**
    * Checks whether a given `sString` starts with `sStartString` respecting the case of the strings.
    */
    export function startsWith(sString: string, sStartString: string): boolean;/**
    * Checks whether a given `sString` starts with `sStartString` ignoring the case of both strings.
    */
    export function startsWithIgnoreCase(sString: string, sStartString: string): boolean;/**
    * Convenience wrapper for {@link jQuery.sap.sjax} that enforeces the Http method GET and defaults the data type of the result to 'text'.
    */
    export function syncGet(sUrl: string, data: string | {}, sDataType: string): any;/**
    * Convenience wrapper for {@link jQuery.sap.sjax} that enforces the Http method GET and the data type 'json'. If a fallback value is given, the function simply returns the response as an object or - if some error occurred - the fallback value. This is useful for applications that don't require detailed error diagnostics.
 * 
 * If applications need to know about occurring errors, they can either call `sjax()` directly or they can omit the fallback value (providing only two parameters to syncGetJSON()). They then receive the same complex result object as for the sjax() call.
 * 
 * Note that providing "undefined" or "null" as a fallback is different from omitting the fallback (complex result).
    */
    export function syncGetJSON(sUrl: string, data: string | {}, fallback: {}): any;/**
    * Convenience wrapper for {@link jQuery.sap.sjax} that enforces the Http method GET and the data type 'text'. If a fallback value is given, the function simply returns the response as a text or - if some error occurred - the fallback value. This is useful for applications that don't require detailed error diagnostics.
 * 
 * If applications need to know about occurring errors, they can either call `sjax()` directly or they can omit the fallback value (providing only two parameters to syncGetText()). They then receive the same complex result object as for the sjax() call.
    */
    export function syncGetText(sUrl: string, data: string | {}, fallback: string): any;/**
    * Convenience wrapper for {@link jQuery.sap.sjax} that enforces the Http method POST and defaults the data type of the result to 'text'.
    */
    export function syncPost(sUrl: string, data: string | {}, sDataType: string): any;/**
    * Search ancestors of the given source DOM element for the specified CSS class name. If the class name is found, set it to the root DOM element of the target control. If the class name is not found, it is also removed from the target DOM element.
    */
    export function syncStyleClass(sStyleClass: string, vSource: any | {} | string, vDestination: any | {}): any | any;/**
    * Creates and returns a pseudo-unique id.
 * 
 * No means for detection of overlap with already present or future UIDs.
    */
    export function uid(): string;/**
    * Unbinds all events for listening with the given callback function.
    */
    export function unbindAnyEvent(fnCallback: (() => any)): any;/**
    * Sorts the given array in-place and removes any duplicates (identified by "===").
 * 
 * Use `jQuery.unique()` for arrays of DOMElements.
    */
    export function unique(a: any[]): any[];/**
    * Validates a URL. Check if it's not a script or other security issue.
 * 
 * Split URL into components and check for allowed characters according to RFC 3986:
 * 
 * `authority     = [ userinfo "@" ] host [ ":" port ]
 * userinfo      = *( unreserved / pct-encoded / sub-delims / ":" )
 * host          = IP-literal / IPv4address / reg-name
 * 
 * IP-literal    = "[" ( IPv6address / IPvFuture  ) "]"
 * IPvFuture     = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
 * IPv6address   =                            6( h16 ":" ) ls32
 *               /                       "::" 5( h16 ":" ) ls32
 *               / [               h16 ] "::" 4( h16 ":" ) ls32
 *               / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
 *               / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
 *               / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
 *               / [ *4( h16 ":" ) h16 ] "::"              ls32
 *               / [ *5( h16 ":" ) h16 ] "::"              h16
 *               / [ *6( h16 ":" ) h16 ] "::"
 * ls32          = ( h16 ":" h16 ) / IPv4address
 *               ; least-significant 32 bits of address
 * h16           = 1*4HEXDIG
 *               ; 16 bits of address represented in hexadecimal
 * 
 * IPv4address   = dec-octet "." dec-octet "." dec-octet "." dec-octet
 * dec-octet     = DIGIT                 ; 0-9
 *               / %x31-39 DIGIT         ; 10-99
 *               / "1" 2DIGIT            ; 100-199
 *               / "2" %x30-34 DIGIT     ; 200-249
 *               / "25" %x30-35          ; 250-255
 * 
 * reg-name      = *( unreserved / pct-encoded / sub-delims )
 * 
 * pct-encoded   = "%" HEXDIG HEXDIG
 * reserved      = gen-delims / sub-delims
 * gen-delims    = ":" / "/" / "?" / "#" / "[" / "]" / "@"
 * sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
 *               / "*" / "+" / "," / ";" / "="
 * unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
 * pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
 * 
 * path          = path-abempty    ; begins with "/" or is empty
 *               / path-absolute   ; begins with "/" but not "//"
 *               / path-noscheme   ; begins with a non-colon segment
 *               / path-rootless   ; begins with a segment
 *               / path-empty      ; zero characters
 * 
 * path-abempty  = *( "/" segment )
 * path-absolute = "/" [ segment-nz *( "/" segment ) ]
 * path-noscheme = segment-nz-nc *( "/" segment )
 * path-rootless = segment-nz *( "/" segment )
 * path-empty    = 0<pchar>
 * segment       = *pchar
 * segment-nz    = 1*pchar
 * segment-nz-nc = 1*( unreserved / pct-encoded / sub-delims / "@" )
 *               ; non-zero-length segment without any colon ":"
 * 
 * query         = *( pchar / "/" / "?" )
 * 
 * fragment      = *( pchar / "/" / "?" )`
 * 
 * For the hostname component, we are checking for valid DNS hostnames according to RFC 952 / RFC 1123:
 * 
 * `hname         = name *("." name)
 * name          = let-or-digit ( *( let-or-digit-or-hyphen ) let-or-digit )`
 * 
 * When the URI uses the protocol 'mailto:', the address part is additionally checked against the most commonly used parts of RFC 6068:
 * 
 * `mailtoURI     = "mailto:" [ to ] [ hfields ]
 * to            = addr-spec *("," addr-spec )
 * hfields       = "?" hfield *( "&" hfield )
 * hfield        = hfname "=" hfvalue
 * hfname        = *qchar
 * hfvalue       = *qchar
 * addr-spec     = local-part "@" domain
 * local-part    = dot-atom-text              // not accepted: quoted-string
 * domain        = dot-atom-text              // not accepted: "[" *dtext-no-obs "]"
 * dtext-no-obs  = %d33-90 / ; Printable US-ASCII
 *                 %d94-126  ; characters not including
 *                           ; "[", "]", or "\"
 * qchar         = unreserved / pct-encoded / some-delims
 * some-delims   = "!" / "$" / "'" / "(" / ")" / "*"
 *               / "+" / "," / ";" / ":" / "@"
 * 
 * Note:
 * A number of characters that can appear in &lt;addr-spec> MUST be
 * percent-encoded.  These are the characters that cannot appear in
 * a URI according to [STD66] as well as "%" (because it is used for
 * percent-encoding) and all the characters in gen-delims except "@"
 * and ":" (i.e., "/", "?", "#", "[", and "]").  Of the characters
 * in sub-delims, at least the following also have to be percent-
 * encoded: "&", ";", and "=".  Care has to be taken both when
 * encoding as well as when decoding to make sure these operations
 * are applied only once.`
 * 
 * When a whitelist has been configured using {@link #.addUrlWhitelist addUrlWhitelist}, any URL that passes the syntactic checks above, additionally will be tested against the content of the whitelist.
    */
    export function validateUrl(sUrl: string): any;    // Fields
    /**
    * List of DOM events that a UIArea automatically takes care of.
 * 
 * A control/element doesn't have to bind listeners for these events. It instead can implement an `on* event *(oEvent)` method for any of the following events that it wants to be notified about:
 * 
 * click, dblclick, contextmenu, focusin, focusout, keydown, keypress, keyup, mousedown, mouseout, mouseover, mouseup, select, selectstart, dragstart, dragenter, dragover, dragleave, dragend, drop, paste, cut, input, touchstart, touchend, touchmove, touchcancel, tap, swipe, swipeleft, swiperight, scrollstart, scrollstop
 * 
 * The mouse events and touch events are supported simultaneously on both desktop and mobile browsers. Do NOT create both onmouse* and ontouch* functions to avoid one event being handled twice on the same control.
    */
    export const ControlEvents: any;
    // Fields
    /**
    * Returns a high resolution timestamp for measurements. The timestamp is based on 01/01/1970 00:00:00 as float with microsecond precision or with millisecond precision, if high resolution timestamps are not available. The fractional part of the timestamp represents fractions of a millisecond. Converting to a `Date` is possible using `new Date(jQuery.sap.now())`
    */
    export const now: any;
}