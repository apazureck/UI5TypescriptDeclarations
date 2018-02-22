declare module 'sap/ui/model/odata/v4/ODataMetaModel' {
    import { Context } from 'sap/ui/model/Context';
    import { Sorter } from 'sap/ui/model/Sorter';
    import { Filter } from 'sap/ui/model/Filter';
    import { ListBinding } from 'sap/ui/model/ListBinding';
    import { PropertyBinding } from 'sap/ui/model/PropertyBinding';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ODataType } from 'sap/ui/model/odata/type/ODataType';
    import { ODataModel } from 'sap/ui/model/odata/v4/ODataModel';
    import { TreeBinding } from 'sap/ui/model/TreeBinding';
    import { MetaModel, IMetaModelSettings } from 'sap/ui/model/MetaModel';

    export interface IODataMetaModelSettings extends IMetaModelSettings {
    }

    /**
    
    */
    export class ODataMetaModel extends MetaModel {

        /**
            * Do ** NOT ** call this private constructor, but rather use {@link sap.ui.model.odata.v4.ODataModel#getMetaModel} instead.
        */
        public constructor(oRequestor: {}, sUrl: string, oModel: ODataModel, bSupportReferences: boolean);

        /**
            * Do ** NOT ** call this private constructor, but rather use {@link sap.ui.model.odata.v4.ODataModel#getMetaModel} instead.
        */
        public constructor(oRequestor: {}, sUrl: string, vAnnotationUri: string | {}, oModel: ODataModel, bSupportReferences: boolean);


        /**
            * Creates a list binding for this metadata model which iterates content from the given path (relative to the given context), sorted and filtered as indicated.
         * 
         * By default, OData names are iterated and a trailing slash is implicitly added to the path (see {@link #requestObject} for the effects this has); technical properties and inline annotations are filtered out.
         * 
         * A path which ends with an "@" segment can be used to iterate all inline or external targeting annotations; no trailing slash is added implicitly; technical properties and OData names are filtered out.
        */
        public bindList(sPath: string, oContext?: Context, aSorters?: Sorter | {}, aFilters?: Filter | {}): ListBinding;

        /**
            * Creates a property binding for this meta data model which refers to the content from the given path (relative to the given context).
        */
        public bindProperty(sPath: string, oContext?: Context, mParameters?: { scope?: {}, }): PropertyBinding;

        /**
            * Implement in inheriting classes
        */
        public bindProperty(sPath: string, oContext?: {}, mParameters?: {}): PropertyBinding;

        /**
            * Method not supported
        */
        public bindTree(): any | TreeBinding;

        /**
            * Implement in inheriting classes
        */
        public bindTree(sPath: string, oContext?: {}, aFilters?: any[], mParameters?: {}, aSorters?: any[]): TreeBinding;

        /**
            * Creates a new subclass of class sap.ui.model.odata.v4.ODataMetaModel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.MetaModel.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a map of entity tags for each $metadata or annotation file loaded so far.
        */
        public getETags(): {};

        /**
            * Returns the maximum value of all "Last-Modified" response headers seen so far.
        */
        public getLastModified(): any;

        /**
            * Returns the OData metadata model context corresponding to the given OData data model path.
        */
        public getMetaContext(sPath: string): Context;

        /**
            * Returns a metadata object for class sap.ui.model.odata.v4.ODataMetaModel.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Implement in inheriting classes
        */
        public getObject(sPath: string, oContext?: {}, mParameters?: {}): any;

        /**
            * Returns the metadata object for the given path relative to the given context. Returns `undefined` in case the metadata is not (yet) available. Use {@link #requestObject} for asynchronous access.
        */
        public getObject(sPath: string, oContext?: Context, mParameters?: { scope?: {}, }): any;

        /**
            * Method not supported
        */
        public getOriginalProperty(): any;

        /**
            
        */
        public getProperty(): any;

        /**
            * Returns the UI5 type for the given property path that formats and parses corresponding to the property's EDM type and constraints. The property's type must be a primitive type. Use {@link #requestUI5Type} for asynchronous access.
        */
        public getUI5Type(sPath: string): ODataType;

        /**
            * Determines which type of value list exists for the given property.
        */
        public getValueListType(sPropertyPath: string): sap.ui.model.odata.v4.ValueListType;

        /**
            * Method not supported
        */
        public refresh(): any;

        /**
            * Requests the metadata value for the given path relative to the given context. Returns a `Promise` which is resolved with the requested metadata value or rejected with an error (only in case metadata cannot be loaded). An invalid path leads to an `undefined` result and a warning is logged. Use {@link #getObject} for synchronous access.
         * 
         * A relative path is appended to the context's path separated by a forward slash("/"). A relative path starting with "@" (that is, an annotation) is appended without a separator. Use "./" as a prefix for such a relative path to enforce a separator.
         * 
         * Example: `&lt;template:with path="/EMPLOYEES/ENTRYDATE" var="property">
         *   &lt;!-- /EMPLOYEES/ENTRYDATE/$Type -->
         *   "{property>$Type}"
         * 
         *   &lt;!-- /EMPLOYEES/ENTRYDATE@com.sap.vocabularies.Common.v1.Text -->
         *   "{property>@com.sap.vocabularies.Common.v1.Text}"
         * 
         *   &lt;!-- /EMPLOYEES/ENTRYDATE/@com.sap.vocabularies.Common.v1.Text -->
         *   "{property>./@com.sap.vocabularies.Common.v1.Text}"
         * &lt;/template:with>`
         * 
         * The basic idea is that every path described in "14.2.1 Attribute Target" in specification "OData Version 4.0 Part 3: Common Schema Definition Language" is a valid absolute path within the metadata model if a leading slash is added; for example "/" + "MySchema.MyEntityContainer/MyEntitySet/MyComplexProperty/MyNavigationProperty". Also, every path described in "14.5.2 Expression edm:AnnotationPath", "14.5.11 Expression edm:NavigationPropertyPath", "14.5.12 Expression edm:Path", and "14.5.13 Expression edm:PropertyPath" is a valid relative path within the metadata model if a suitable prefix is added which addresses an entity container, entity set, singleton, complex type, entity type, or property; for example "/MySchema.MyEntityType/MyProperty" + "@vCard.Address#work/FullName".
         * 
         * The absolute path is split into segments and followed step-by-step, starting at the global scope of all known qualified OData names. There are two technical properties there: "$Version" (typically "4.0") and "$EntityContainer" with the name of the single entity container for this metadata model's service.
         * 
         * An empty segment in between is invalid. An empty segment at the end caused by a trailing slash differentiates between a name and the object it refers to. This way, "/$EntityContainer" refers to the name of the single entity container and "/$EntityContainer/" refers to the single entity container as an object.
         * 
         * The segment "@sapui.name" refers back to the last OData name (simple identifier or qualified name) or annotation name encountered during path traversal immediately before "@sapui.name":  <li> "/EMPLOYEES@sapui.name" results in "EMPLOYEES" and "/EMPLOYEES/@sapui.name" results in the same as "/EMPLOYEES/$Type", that is, the qualified name of the entity set's type (see below how "$Type" is inserted implicitly). Note how the separating slash again makes a difference here. <li> "/EMPLOYEES/@com.sap.vocabularies.Common.v1.Label@sapui.name" results in "@com.sap.vocabularies.Common.v1.Label" and a slash does not make any difference as long as the annotation does not have a "$Type" property. <li> A technical property (that is, a numerical segment or one starting with a "$") immediately before "@sapui.name" is invalid, for example "/$EntityContainer@sapui.name".  The path must not continue after "@sapui.name".
         * 
         * If the current object is a string value, that string value is treated as a relative path and followed step-by-step before the next segment is processed. Except for this, a path must not continue if it comes across a non-object value. Such a string value can be a qualified name (example path "/$EntityContainer/..."), a simple identifier (example path "/TEAMS/$NavigationPropertyBinding/TEAM_2_EMPLOYEES/...") or even a path according to "14.5.12 Expression edm:Path" etc. (example path "/TEAMS/$Type/@com.sap.vocabularies.UI.v1.LineItem/0/Value/$Path/...").
         * 
         * Segments starting with an "@" character, for example "@com.sap.vocabularies.Common.v1.Label", address annotations at the current object. As the first segment, they refer to the single entity container. For objects which can only be annotated inline (see "14.3 Element edm:Annotation" minus "14.2.1 Attribute Target"), the object already contains the annotations as a property. For objects which can (only or also) be annotated via external targeting, the object does not contain any annotation as a property. Such annotations MUST be accessed via a path. BEWARE of a special case: Actions, functions and their parameters can be annotated inline for a single overload or via external targeting for all overloads at the same time. In this case, the object contains all annotations for the single overload as a property, but annotations MUST nevertheless be accessed via a path in order to include also annotations for all overloads at the same time.
         * 
         * Segments starting with an OData name followed by an "@" character, for example "/TEAMS@Org.OData.Capabilities.V1.TopSupported", address annotations at an entity set, singleton, or property, not at the corresponding type. In contrast, "/TEAMS/@com.sap.vocabularies.Common.v1.Deletable" (note the separating slash) addresses an annotation at the entity set's type. This is in line with the special rule of "14.5.12 Expression edm:Path" regarding annotations at a navigation property itself.
         * 
         * "@" can be used as a segment to address a map of all annotations of the current object. This is useful for iteration, for example via `&lt;template:repeat list="{entityType>@}" ...>`.
         * 
         * Annotations of an annotation are addressed not by two separate segments, but by a single segment like "@com.sap.vocabularies.Common.v1.Text@com.sap.vocabularies.Common.v1.TextArrangement". Each annotation can have a qualifier, for example "@first#foo@second#bar". Note: If the first annotation's value is a record, a separate segment addresses an annotation of that record, not an annotation of the first annotation itself. In a similar way, annotations of "7.2 Element edm:ReferentialConstraint", "7.3 Element edm:OnDelete", "10.2 Element edm:Member" and "14.5.14.2 Element edm:PropertyValue" are addressed by segments like "&lt;7.2.1 Attribute Property>@...", "$OnDelete@...", "&lt;10.2.1 Attribute Name>@..." and "&lt;14.5.14.2.1 Attribute Property>@..." (where angle brackets denote a variable part and sections refer to specification "OData Version 4.0 Part 3: Common Schema Definition Language").
         * 
         * Annotations starting with "@@", for example "@@sap.ui.model.odata.v4.AnnotationHelper.isMultiple" or "@@.AH.isMultiple" or "@@.isMultiple", represent computed annotations. Their name without the "@@" prefix must refer to a function either in the global namespace (in case of an absolute name) or in `mParameters.scope` (in case of a relative name starting with a dot, which is stripped before lookup; see the `&lt;template:alias>` instruction for XML Templating). This function is called with the current object (or primitive value) and additional details and returns the result of this {@link #requestObject} call. The additional details are given as an object with the following properties:  <li>`{@link sap.ui.model.Context} context` Points to the current object <li>`{string} schemaChildName` The qualified name of the schema child where the computed annotation has been found  Computed annotations cannot be iterated by "@". The path must not continue after a computed annotation.
         * 
         * A segment which represents an OData qualified name is looked up in the global scope ("scope lookup") and thus determines a schema child which is used later on. Unknown qualified names are invalid. This way, "/acme.DefaultContainer/EMPLOYEES" addresses the "EMPLOYEES" child of the schema child named "acme.DefaultContainer". This also works indirectly ("/$EntityContainer/EMPLOYEES") and implicitly ("/EMPLOYEES", see below).
         * 
         * A segment which represents an OData simple identifier needs special preparations. The same applies to the empty segment after a trailing slash.  <li> If the current object has a "$Action", "$Function" or "$Type" property, it is used for scope lookup first. This way, "/EMPLOYEES/ENTRYDATE" addresses the same object as "/EMPLOYEES/$Type/ENTRYDATE", namely the "ENTRYDATE" child of the entity type corresponding to the "EMPLOYEES" child of the entity container. The other cases jump from an action or function import to the corresponding action or function overloads. <li> Else if the segment is the first one within its path, the last schema child addressed via scope lookup is used instead of the current object. This can only happen indirectly as in "/TEAMS/$NavigationPropertyBinding/TEAM_2_EMPLOYEES/..." where the schema child is the entity container and the navigation property binding can contain the simple identifier of another entity set within the same container.
         * 
         * If the segment is the first one overall, "$EntityContainer" is inserted into the path implicitly. In other words, the entity container is used as the initial schema child. This way, "/EMPLOYEES" addresses the same object as "/$EntityContainer/EMPLOYEES", namely the "EMPLOYEES" child of the entity container. <li> Afterwards, if the current object is an array, it represents overloads for an action or function. Multiple overloads are invalid. The overload's "$ReturnType/$Type" is used for scope lookup. This way, "/GetOldestWorker/AGE" addresses the same object as "/GetOldestWorker/0/$ReturnType/$Type/AGE". For primitive return types, the special segment "value" can be used to refer to the return type itself (see {@link sap.ui.model.odata.v4.ODataContextBinding#execute}). This way, "/GetOldestAge/value" addresses the same object as "/GetOldestAge/0/$ReturnType" (which is needed for automatic type determination, see {@link #requestUI5Type}). 
         * 
         * A trailing slash can be used to continue a path and thus force scope lookup or OData simple identifier preparations, but then stay at the current object. This way, "/EMPLOYEES/$Type/" addresses the entity type itself corresponding to the "EMPLOYEES" child of the entity container. Although the empty segment is not an OData simple identifier, it can be used as a placeholder for one. In this way, "/EMPLOYEES/" addresses the same entity type as "/EMPLOYEES/$Type/". That entity type in turn is a map of all its OData children (that is, structural and navigation properties) and determines the set of possible child names that might be used after the trailing slash.
         * 
         * Any other segment, including an OData simple identifier, is looked up as a property of the current object.
        */
        public requestObject(sPath: string, oContext?: Context, mParameters?: { scope?: {}, }): any;

        /**
            * Requests the UI5 type for the given property path that formats and parses corresponding to the property's EDM type and constraints. The property's type must be a primitive type. Use {@link #getUI5Type} for synchronous access.
        */
        public requestUI5Type(sPath: string): any;

        /**
            * Requests information to retrieve a value list for the property given by `sPropertyPath`.
        */
        public requestValueListInfo(sPropertyPath: string): any;

        /**
            * Determines which type of value list exists for the given property.
        */
        public requestValueListType(sPropertyPath: string): any;

        /**
            * Method not supported
        */
        public setLegacySyntax(): any;

        /**
            * Returns a string representation of this object including the URL to the $metadata document of the service.
        */
        public toString(): string;

    }
}