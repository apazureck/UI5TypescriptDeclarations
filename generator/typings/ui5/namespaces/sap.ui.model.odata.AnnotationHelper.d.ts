declare namespace sap.ui.model.odata.AnnotationHelper {
    // Methods
    /**
        * Creates a property setting (which is either a constant value or a binding info object) from the given parts and from the optional root formatter function. Each part can have one of the following types:  <li>`boolean`, `number`, `undefined`: The part is a constant value.
     * 
     * <li>`string`: The part is a data binding expression with complex binding syntax (for example, as created by {@link #.format format}) and is parsed accordingly to create either a constant value or a binding info object. Proper backslash escaping must be used for constant values with curly braces.
     * 
     * <li>`object`: The part is a binding info object if it has a "path" or "parts" property, otherwise it is a constant value.  If a binding info object is not the only part and has a "parts" property itself, then it must have no other properties except "formatter"; this is the case for expression bindings and data binding expressions created by {@link #.format format}.
     * 
     * If all parts are constant values, the resulting property setting is also a constant value computed by applying the root formatter function to the constant parts once. If at least one part is a binding info object, the resulting property setting is also a binding info object and the root formatter function will be applied again and again to the current values of all parts, no matter whether constant or variable.
     * 
     * Note: The root formatter function should not rely on its `this` value because it depends on how the function is called.
     * 
     * Note: A single data binding expression can be given directly to {@link sap.ui.base.ManagedObject#applySettings applySettings}, no need to call this function first.
     * 
     * Example: `function myRootFormatter(oValue1, oValue2, sFullName, sGreeting, iAnswer) {
     *     return ...; //TODO compute something useful from the given values
     * }
     * 
     * oSupplierContext = oMetaModel.getMetaContext("/ProductSet('HT-1021')/ToSupplier");
     * oValueContext = oMetaModel.createBindingContext("com.sap.vocabularies.UI.v1.DataPoint/Value", oSupplierContext);
     * 
     * vPropertySetting =  sap.ui.model.odata.AnnotationHelper.createPropertySetting([
     *     sap.ui.model.odata.AnnotationHelper.format(oValueContext),
     *     "{path : 'meta>Value', formatter : 'sap.ui.model.odata.AnnotationHelper.simplePath'}",
     *     "{:= 'Mr. ' + ${/FirstName} + ' ' + ${/LastName}}",
     *     "hello, world!",
     *     42
     * ], myRootFormatter);
     * 
     * oControl.applySettings({"someProperty" : vPropertySetting});`
        */
    export function createPropertySetting(vParts: {}, fnRootFormatter: (() => any)): any | {};/**
    * A formatter function to be used in a complex binding inside an XML template view in order to interpret OData V4 annotations. It knows about  <li> the "14.4 Constant Expressions" for "edm:Bool", "edm:Date", "edm:DateTimeOffset", "edm:Decimal", "edm:Float", "edm:Guid", "edm:Int", "edm:TimeOfDay". <li> the constant "14.4.11 Expression edm:String": This is turned into a fixed text (e.g. `"Width"`) or into a data binding expression (e.g. ` "{/##/dataServices/schema/0/entityType/1/com.sap.vocabularies.UI.v1.FieldGroup#Dimensions/Data/0/Label/String}" `). Data binding expressions are used in case XML template processing has been started with the setting `bindTexts : true`. The purpose is to reference translatable texts from OData V4 annotations, especially for XML template processing at design time. Since 1.31.0, string constants that contain a simple binding `"{@i18n>...}"` to the hard-coded model name "@i18n" with arbitrary path are not turned into a fixed text, but kept as a data binding expression; this allows local annotation files to refer to a resource bundle for internationalization. <li> the dynamic "14.5.1 Comparison and Logical Operators": These are turned into expression bindings to perform the operations at run-time. <li> the dynamic "14.5.3 Expression edm:Apply": <ul> <li> "14.5.3.1.1 Function odata.concat": This is turned into a data binding expression relative to an entity. <li> "14.5.3.1.2 Function odata.fillUriTemplate": This is turned into an expression binding to fill the template at run-time. <li> "14.5.3.1.3 Function odata.uriEncode": This is turned into an expression binding to encode the parameter at run-time. <li> Apply functions may be nested arbitrarily.  <li> the dynamic "14.5.6 Expression edm:If": This is turned into an expression binding to be evaluated at run-time. The expression is a conditional expression like `"{=condition ? expression1 : expression2}"`. <li> the dynamic "14.5.10 Expression edm:Null": This is turned into a `null` value. In `odata.concat` it is ignored. <li> the dynamic "14.5.12 Expression edm:Path" and "14.5.13 Expression edm:PropertyPath": This is turned into a data binding relative to an entity, including type information and constraints as available from metadata, e.g. `"{path : 'Name', type : 'sap.ui.model.odata.type.String', constraints : {'maxLength':'255'}}"`. Depending on the used type, some additional constraints of this type are set:  <li>Edm.DateTime: The "displayFormat" constraint is set to the value of the "sap:display-format" annotation of the referenced property. <li>Edm.Decimal: The "precision" and "scale" constraints are set to the values of the corresponding attributes of the referenced property. The "minimum", "maximum", "minimumExclusive" and "maximumExlusive" constraints are set to the values of the corresponding "Org.OData.Validation.V1" annotation of the referenced property; note that in this case only constant expressions are supported to determine the annotation value. <li>Edm.String: The "maxLength" constraint is set to the value of the corresponding attribute of the referenced property and the "isDigitSequence" constraint is set to the value of the "com.sap.vocabularies.Common.v1.IsDigitSequence" annotation of the referenced property; note that in this case only constant expressions are supported to determine the annotation value.  </ul> Unsupported or incorrect values are turned into a string nevertheless, but indicated as such. Proper escaping is used to make sure that data binding syntax is not corrupted. An error describing the problem is logged to the console in such a case.
 * 
 * Example: `&lt;Text text="{path: 'meta>Value', formatter: 'sap.ui.model.odata.AnnotationHelper.format'}" />`
    */
    export function format(oInterface: sap.ui.core.util.XMLPreprocessor.IContext | {}, vRawValue: any): string;/**
    * A formatter function to be used in a complex binding inside an XML template view in order to interpret OData V4 annotations. It knows about the following dynamic expressions:  * "14.5.2 Expression edm:AnnotationPath" * "14.5.11 Expression edm:NavigationPropertyPath" * "14.5.12 Expression edm:Path" * "14.5.13 Expression edm:PropertyPath"  It returns a binding expression for a navigation path in an OData model, starting at an entity. Currently supports navigation properties. Term casts and annotations of navigation properties terminate the navigation path.
 * 
 * Examples: `&lt;template:if test="{path: 'facet>Target', formatter: 'sap.ui.model.odata.AnnotationHelper.getNavigationPath'}">
 *     &lt;form:SimpleForm binding="{path: 'facet>Target', formatter: 'sap.ui.model.odata.AnnotationHelper.getNavigationPath'}" />
 * &lt;/template:if>`
    */
    export function getNavigationPath(oInterface: sap.ui.core.util.XMLPreprocessor.IContext | {}, vRawValue: any): string;/**
    * Helper function for a `template:with` instruction that depending on how it is called goes to the entity set with the given name or to the one determined by the last navigation property. Supports the following dynamic expressions:  * "14.5.2 Expression edm:AnnotationPath" * "14.5.11 Expression edm:NavigationPropertyPath" * "14.5.12 Expression edm:Path" * "14.5.13 Expression edm:PropertyPath" 
 * 
 * Example: `&lt;template:with path="facet>Target" helper="sap.ui.model.odata.AnnotationHelper.gotoEntitySet" var="entitySet"/>
 *   &lt;template:with path="associationSetEnd>entitySet" helper="sap.ui.model.odata.AnnotationHelper.gotoEntitySet" var="entitySet"/>`
    */
    export function gotoEntitySet(oContext: {}): string;/**
    * Helper function for a `template:with` instruction that goes to the entity type with the qualified name which `oContext` points at.
 * 
 * Example: Assume that "entitySet" refers to an entity set within an OData meta model; the helper function is then called on the "entityType" property of that entity set (which holds the qualified name of the entity type) and in turn the path of that entity type is assigned to the variable "entityType". `&lt;template:with path="entitySet>entityType" helper="sap.ui.model.odata.AnnotationHelper.gotoEntityType" var="entityType">`
    */
    export function gotoEntityType(oContext: {}): string;/**
    * Helper function for a `template:with` instruction that goes to the function import with the name which `oContext` points at.
 * 
 * Example: Assume that "dataField" refers to a DataFieldForAction within an OData meta model; the helper function is then called on the "Action" property of that data field (which holds an object with the qualified name of the function import in the `String` property) and in turn the path of that function import is assigned to the variable "function". `&lt;template:with path="dataField>Action"
 *   helper="sap.ui.model.odata.AnnotationHelper.gotoFunctionImport" var="function">`
    */
    export function gotoFunctionImport(oContext: {}): string;/**
    * A formatter function to be used in a complex binding inside an XML template view in order to interpret OData V4 annotations. It knows about the following dynamic expressions:  * "14.5.2 Expression edm:AnnotationPath" * "14.5.11 Expression edm:NavigationPropertyPath" * "14.5.12 Expression edm:Path" * "14.5.13 Expression edm:PropertyPath"  It returns the information whether the navigation path ends with an association end with multiplicity "*". It throws an error if the navigation path has an association end with multiplicity "*" which is not the last one. Currently supports navigation properties. Term casts and annotations of navigation properties terminate the navigation path.
 * 
 * Examples: `&lt;template:if test="{path: 'facet>Target', formatter: 'sap.ui.model.odata.AnnotationHelper.isMultiple'}">`
    */
    export function isMultiple(oInterface: sap.ui.core.util.XMLPreprocessor.IContext | {}, vRawValue: any): string;/**
    * Helper function for a `template:with` instruction that resolves a dynamic "14.5.2 Expression edm:AnnotationPath", "14.5.11 Expression edm:NavigationPropertyPath", "14.5.12 Expression edm:Path" or "14.5.13 Expression edm:PropertyPath". Currently supports navigation properties and term casts.
 * 
 * Example: `&lt;template:with path="meta>Value" helper="sap.ui.model.odata.AnnotationHelper.resolvePath" var="target">`
    */
    export function resolvePath(oContext: {}): string;/**
    * Formatter function that is used in a complex binding inside an XML template view. The function is used to interpret OData V4 annotations, supporting the same annotations as {@link #.format format} but with a simplified output aimed at design-time templating with smart controls.
 * 
 * In contrast to `format`, "14.5.12 Expression edm:Path" or "14.5.13 Expression edm:PropertyPath" is turned into a simple binding path without type or constraint information. In certain cases, a complex binding is required to allow for proper escaping of the path.
 * 
 * Example: `&lt;sfi:SmartField value="{path: 'meta>Value', formatter: 'sap.ui.model.odata.AnnotationHelper.simplePath'}"/>`
    */
    export function simplePath(oInterface: sap.ui.core.util.XMLPreprocessor.IContext | {}, vRawValue: any): string;
}