declare module 'sap/ui/core/util/serializer/XMLViewSerializer' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { XMLView } from 'sap/ui/core/mvc/XMLView';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface IXMLViewSerializerSettings extends IEventProviderSettings {
    }

    /**
    
    */
    export class XMLViewSerializer extends EventProvider {

        /**
            * XML view serializer class. Serializes a given view.
        */
        public constructor(oView: XMLView, sDefaultXmlNamespace: string, fnGetControlId: (() => any), fnGetEventHandlerName: (() => any));

        /**
            * XML view serializer class. Serializes a given view.
        */
        public constructor(oView: XMLView, oWindow: {}, fnGetControlId: (() => any), fnGetEventHandlerName: (() => any));

        /**
            * XML view serializer class. Serializes a given view.
        */
        public constructor(oView: XMLView, oWindow: {}, sDefaultXmlNamespace: string, fnGetControlId: (() => any), fnGetEventHandlerName: (() => any));


        /**
            * Creates a new subclass of class sap.ui.core.util.serializer.XMLViewSerializer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.util.serializer.XMLViewSerializer.
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