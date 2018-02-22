declare namespace sap.ui.model.odata.v4.AnnotationHelper {
    // Methods
    /**
        * Returns a data binding according to the result of {@link #getNavigationPath}.
        */
    export function getNavigationBinding(sPath: string): string;/**
    * A function that helps to interpret OData V4 annotations. It knows about the syntax of the path value used by the following dynamic expressions:  * "14.5.2 Expression edm:AnnotationPath" * "14.5.11 Expression edm:NavigationPropertyPath" * "14.5.12 Expression edm:Path" * "14.5.13 Expression edm:PropertyPath"  It returns the path of structural and navigation properties from the given path value, but removes "$count", types casts, term casts, and annotations of navigation properties.
    */
    export function getNavigationPath(sPath: string): string;/**
    * Determines which type of value list exists for the given property.
    */
    export function getValueListType(vRawValue: any, oDetails: { context: {}, schemaChildName: string, }): sap.ui.model.odata.v4.ValueListType;/**
    * A function that helps to interpret OData V4 annotations. It knows about the syntax of the path value used by the following dynamic expressions:  * "14.5.2 Expression edm:AnnotationPath" * "14.5.11 Expression edm:NavigationPropertyPath" * "14.5.12 Expression edm:Path" * "14.5.13 Expression edm:PropertyPath"  It returns the information whether the given path ends with "$count" or with a multi-valued structural or navigation property. Term casts and annotations of navigation properties are ignored.
 * 
 * Examples: `&lt;template:if test="{facet>Target/$AnnotationPath@@sap.ui.model.odata.v4.AnnotationHelper.isMultiple}">`
    */
    export function isMultiple(sPath: string, oDetails: { context: {}, schemaChildName: string, }): boolean;/**
    * Returns the value for the label of a `com.sap.vocabularies.UI.v1.DataFieldAbstract` from the meta model. If no `Label` property is available, but the data field has a `Value` property with an `edm:Path` expression as value, the label will be taken from the `com.sap.vocabularies.UI.v1.Label` annotation of the path's target property.
 * 
 * Example: `&lt;Label text="{meta>@@sap.ui.model.odata.v4.AnnotationHelper.label}" />`
    */
    export function label(vRawValue: any, oDetails: { context: {}, }): string;/**
    * A function that helps to interpret OData V4 annotations. It knows about  <li> the "14.4 Constant Expressions" for "edm:Bool", "edm:Date", "edm:DateTimeOffset", "edm:Decimal", "edm:Float", "edm:Guid", "edm:Int", "edm:TimeOfDay". <li> the constant "14.4.11 Expression edm:String": This is turned into a fixed text (e.g. `"Width"`). String constants that contain a simple binding `"{@i18n>...}"` to the hard-coded model name "@i18n" with arbitrary path are not turned into a fixed text, but kept as a data binding expression; this allows local annotation files to refer to a resource bundle for internationalization. <li> the dynamic "14.5.1 Comparison and Logical Operators": These are turned into expression bindings to perform the operations at run-time. <li> the dynamic "14.5.3 Expression edm:Apply": <ul> <li> "14.5.3.1.1 Function odata.concat": This is turned into a data binding expression. <li> "14.5.3.1.2 Function odata.fillUriTemplate": This is turned into an expression binding to fill the template at run-time. <li> "14.5.3.1.3 Function odata.uriEncode": This is turned into an expression binding to encode the parameter at run-time. <li> Apply functions may be nested arbitrarily.  <li> the dynamic "14.5.6 Expression edm:If": This is turned into an expression binding to be evaluated at run-time. The expression is a conditional expression like `"{=condition ? expression1 : expression2}"`. <li> the dynamic "14.5.10 Expression edm:Null": This is turned into a `null` value. In `odata.concat` it is ignored. <li> the dynamic "14.5.12 Expression edm:Path" and "14.5.13 Expression edm:PropertyPath": This is turned into a simple data binding, e.g. `"{Name}"`. </ul> Unsupported or incorrect values are turned into a string nevertheless, but indicated as such. An error describing the problem is logged to the console in such a case.
 * 
 * Example: `&lt;Text text="{meta>Value/@@sap.ui.model.odata.v4.AnnotationHelper.value}" />`
    */
    export function value(vRawValue: any, oDetails: { context: {}, }): string;
}