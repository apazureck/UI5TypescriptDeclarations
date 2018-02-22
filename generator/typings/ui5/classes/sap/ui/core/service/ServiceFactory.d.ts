declare module 'sap/ui/core/service/ServiceFactory' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IServiceFactorySettings extends IObjectSettings {
    }

    /**
    
    */
    export class ServiceFactory extends Object {


        /**
            * Creates a new instance of a service. When used as a generic service factory by providing a service constructor function it will create a new service instance otherwise the function will fail. For custom service factories this function has to be overridden and should return a `Promise`.
        */
        protected createInstance(oServiceContext: { scopeObject: {}, scopeType: string, settings: string, }): any;

        /**
            * Lifecycle method to destroy the service factory instance.
        */
        public destroy(): any;

        /**
            * Destructor method for objects
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.core.service.ServiceFactory with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.service.ServiceFactory.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

    }
}