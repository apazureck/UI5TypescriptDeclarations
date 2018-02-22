declare module 'sap/ui/core/util/serializer/HTMLViewSerializer' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { HTMLView } from 'sap/ui/core/mvc/HTMLView';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface IHTMLViewSerializerSettings extends IEventProviderSettings {
    }

    /**
    
    */
    export class HTMLViewSerializer extends EventProvider {

        /**
            * HTML view serializer class. Serializes a given view.
        */
        public constructor(oView: HTMLView, fnGetControlId: (() => any), fnGetEventHandlerName: (() => any));

        /**
            * HTML view serializer class. Serializes a given view.
        */
        public constructor(oView: HTMLView, oWindow: {}, fnGetControlId: (() => any), fnGetEventHandlerName: (() => any));


        /**
            * Creates a new subclass of class sap.ui.core.util.serializer.HTMLViewSerializer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.util.serializer.HTMLViewSerializer.
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