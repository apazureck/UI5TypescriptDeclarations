declare module 'sap/ui/model/analytics/odata4analytics' {


    export interface IReferenceWithWorkaroundSettings {
    }

    /**
    
    */
    export class ReferenceWithWorkaround {

        /**
            * Create a reference to an OData model having certain workarounds activated. A workaround is an implementation that changes the standard behavior of the API to overcome some gap or limitation in the OData provider. The workaround implementation can be conditionally activated by passing the identifier in the constructor.
         * 
         * Known workaround identifiers are:
         * 
         * <li>"CreateLabelsFromTechnicalNames" - If a property has no label text, it gets generated from the property name.</li>
         * 
         * <li>"IdentifyTextPropertiesByName" -If a dimension property has no text and another property with the same name and an appended "Name", "Text" etc. exists, they are linked via annotation.</li>
        */
        public constructor(oModel: {}, aWorkaroundID: {});


    }
}