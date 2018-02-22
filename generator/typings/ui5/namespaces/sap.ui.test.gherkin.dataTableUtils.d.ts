declare namespace sap.ui.test.gherkin.dataTableUtils {
    // Methods
    /**
        * Takes the inputed 2D array "aData" and returns an equivalent object. Each row of data is expected to be a property-value pair. To create nested objects, add extra columns to the data. E.g. `[
     *    ["Name", "Alice"],
     *    ["Mass", "135 lbs"],
     *    ["Telephone Number", "Home", "123-456-7890"],
     *    ["Telephone Number", "Work", "123-456-0987"]
     *  ]` For each data row, the right-most element becomes a property value, and everything else is a property name. The property names get normalized according to the strategy defined by the parameter "vNorm". E.g. using camelCase strategy `{
     *     name: "Alice",
     *     mass: "135 lbs",
     *     telephoneNumber: {
     *       home: "123-456-7890",
     *       work: "123-456-0987"
     *     }
     *   }`
        */
    export function toObject(aData: {}, vNorm: string | (() => any)): {};/**
    * Takes the inputed 2D array "aData" and returns an equivalent array of objects. The data is expected to have a header row, with each subsequent row being an entity, and each column being a property of that entity. E.g. `[
 *     ["Their Name",  "Their Age"],
 *     ["Alice",       "16"],
 *     ["Bob",         "22"]
 *   ]`
 * 
 * The data's column headers become the returned objects' property names. The property names get normalized according to the strategy defined by the parameter "vNorm". E.g. using hyphenation strategy this is returned: `[
 *     {their-name: "Alice", their-age: "16"},
 *     {their-name: "Bob", their-age: "22"}
 *   ]`
    */
    export function toTable(aData: {}, vNorm: string | (() => any)): {};
}