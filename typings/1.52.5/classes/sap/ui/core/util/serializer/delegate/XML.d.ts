declare module 'sap/ui/core/util/serializer/delegate/XML' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Delegate, IDelegateSettings } from 'sap/ui/core/util/serializer/delegate/Delegate';

    export interface IXMLSettings extends IDelegateSettings {
    }

    /**
    
    */
    export class XML extends Delegate {

        /**
            * XML serializer delegate class. Called by the serializer instance.
        */
        public constructor(sDefaultXmlNamespace: string, fnGetControlId: (() => any), fnGetEventHandlerName: (() => any), fnMemorizePackage: (() => any));


        /**
            * Creates a new subclass of class sap.ui.core.util.serializer.delegate.XML with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.util.serializer.delegate.Delegate.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.util.serializer.delegate.XML.
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