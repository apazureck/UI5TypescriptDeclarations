declare namespace sap.ui.model.odata.v4.ODataUtils {
    // Methods
    /**
        * Compares the given OData values.
        */
    export function compare(vValue1: any, vValue2: any, vEdmType: boolean | string): number;/**
    * Parses an "Edm.Date" value and returns the corresponding JavaScript `Date` value (UTC with a time value of "00:00:00").
    */
    export function parseDate(sDate: string): any;/**
    * Parses an "Edm.DateTimeOffset" value and returns the corresponding JavaScript `Date` value.
    */
    export function parseDateTimeOffset(sDateTimeOffset: string): any;/**
    * Parses an "Edm.TimeOfDay" value and returns the corresponding JavaScript `Date` value (UTC with a date value of "1970-01-01").
    */
    export function parseTimeOfDay(sTimeOfDay: string): any;
}