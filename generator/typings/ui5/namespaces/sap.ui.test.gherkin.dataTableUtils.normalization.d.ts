declare namespace sap.ui.test.gherkin.dataTableUtils.normalization {
    // Methods
    /**
        * For example: "First Name" -> "firstName"
        */
    export function camelCase(sString: string): string;/**
    * For example: "First Name" -> "first-name"
    */
    export function hyphenated(sString: string): string;/**
    * For example: "First Name" -> "First Name"
    */
    export function none(sString: string): string;/**
    * For example: "first name" -> "FirstName"
    */
    export function pascalCase(sString: string): string;/**
    * For example: "first name" -> "First Name"
    */
    export function titleCase(sString: string): string;
}