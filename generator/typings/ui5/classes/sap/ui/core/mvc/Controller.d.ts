declare module 'sap/ui/core/mvc/Controller' {
    import { Element } from 'sap/ui/core/Element';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Component } from 'sap/ui/core/Component';
    import { View } from 'sap/ui/core/mvc/View';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface IControllerSettings extends IEventProviderSettings {
    }

    /**
    
    */
    export class Controller extends EventProvider {


        /**
            * Returns an Element of the connected view with the given local ID.
         * 
         * Views automatically prepend their own ID as a prefix to created Elements to make the IDs unique even in the case of multiple view instances. This method helps to find an element by its local ID only.
         * 
         * If no view is connected or if the view doesn't contain an element with the given local ID, undefined is returned.
        */
        public byId(sId: string): Element;

        /**
            * Converts a view local ID to a globally unique one by prepending the view ID.
         * 
         * If no view is connected, undefined is returned.
        */
        public createId(sId: string): string;

        /**
            * Creates a new subclass of class sap.ui.core.mvc.Controller with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.mvc.Controller.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets the component of the controller's view
         * 
         * If there is no Component connected to the view or the view is not connected to the controller, undefined is returned.
        */
        public getOwnerComponent(): Component;

        /**
            * Returns the view associated with this controller or undefined.
        */
        public getView(): View;

        /**
            * This method is called every time the View is rendered, after the HTML is placed in the DOM-Tree. It can be used to apply additional changes to the DOM after the Renderer has finished. (Even though this method is declared as "abstract", it does not need to be defined in controllers, if the method does not exist, it will simply not be called.)
        */
        protected onAfterRendering(): any;

        /**
            * This method is called every time the View is rendered, before the Renderer is called and the HTML is placed in the DOM-Tree. It can be used to perform clean-up-tasks before re-rendering. (Even though this method is declared as "abstract", it does not need to be defined in controllers, if the method does not exist, it will simply not be called.)
        */
        protected onBeforeRendering(): any;

        /**
            * This method is called upon desctuction of the View. The controller should perform its internal destruction in this hook. It is only called once per View instance, unlike the onBeforeRendering and onAfterRendering hooks. (Even though this method is declared as "abstract", it does not need to be defined in controllers, if the method does not exist, it will simply not be called.)
        */
        protected onExit(): any;

        /**
            * This method is called upon initialization of the View. The controller can perform its internal setup in this hook. It is only called once per View instance, unlike the onBeforeRendering and onAfterRendering hooks. (Even though this method is declared as "abstract", it does not need to be defined in controllers, if the method does not exist, it will simply not be called.)
        */
        protected onInit(): any;

        /**
            * Registers a callback module, which provides code enhancements for the lifecycle and event handler functions of a specific controller. The code enhancements are returned either in sync or async mode.
         * 
         * The extension provider module provides the `getControllerExtensions` function which returns either directly an array of objects or a Promise that returns an array of objects when it resolves. These objects are object literals defining the methods and properties of the controller in a similar way as {@link sap.ui.controller}.
         * 
         * ** Example for a callback module definition (sync): ** `sap.ui.define("my/custom/sync/ExtensionProvider", ['jquery.sap.global'], function(jQuery) {
         *   var ExtensionProvider = function() {};
         *   ExtensionProvider.prototype.getControllerExtensions = function(sControllerName, sComponentId, bAsync) {
         *     if (!bAsync && sControllerName == "my.own.Controller") {
         *       // IMPORTANT: only return extensions for a specific controller
         *       return [{
         *         onInit: function() {
         *           // Do something here...
         *         },
         *         onAfterRendering: function() {
         *           // Do something here...
         *         },
         *         onButtonClick: function(oEvent) {
         *           // Handle the button click event
         *         }
         *       }
         *     }];
         *   };
         *   return ExtensionProvider;
         * }, true);`
         * 
         * ** Example for a callback module definition (async): ** `sap.ui.define("my/custom/async/ExtensionProvider", ['jquery.sap.global'], function(jQuery) {
         *   var ExtensionProvider = function() {};
         *   ExtensionProvider.prototype.getControllerExtensions = function(sControllerName, sComponentId, bAsync) {
         *     if (bAsync && sControllerName == "my.own.Controller") {
         *       // IMPORTANT:
         *       // only return a Promise for a specific controller since it
         *       // requires the View/Controller and its parents to run in async
         *       // mode!
         *       return new Promise(function(fnResolve, fnReject) {
         *         fnResolve([{
         *           onInit: function() {
         *             // Do something here...
         *           },
         *           onAfterRendering: function() {
         *             // Do something here...
         *           },
         *           onButtonClick: function(oEvent) {
         *             // Handle the button click event
         *           }
         *         }]);
         *       }
         *     };
         *   };
         *   return ExtensionProvider;
         * }, true);`
         * 
         * The lifecycle functions `onInit`, `onExit`, `onBeforeRendering` and `onAfterRendering` are added before or after the lifecycle functions of the original controller. The event handler functions, such as `onButtonClick`, are replacing the original controller's function.
         * 
         * When using an async extension provider you need to ensure that the view is loaded in async mode.
         * 
         * In both cases, return `undefined` if no controller extension shall be applied.
        */
        public static registerExtensionProvider(sExtensionProvider: string): any;

    }
}