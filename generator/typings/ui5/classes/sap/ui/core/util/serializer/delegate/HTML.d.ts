declare module 'sap/ui/core/util/serializer/delegate/HTML' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Delegate, IDelegateSettings } from 'sap/ui/core/util/serializer/delegate/Delegate';

    export interface IHTMLSettings extends IDelegateSettings {
    }

    /**
    
    */
    export class HTML extends Delegate {

        /**
            * HTML serializer delegate class. Called by the serializer instance.
        */
        public constructor(fnGetControlId: (() => any), fnGetEventHandlerName: (() => any));


        /**
            * Creates a new subclass of class sap.ui.core.util.serializer.delegate.HTML with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.util.serializer.delegate.Delegate.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.ui.core.util.serializer.delegate.HTML.
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