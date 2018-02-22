declare namespace sap.ui.core.dnd.DragSession {
    // Methods
    /**
        * Returns the data that has been set via `setComplexData` method.
        */
    export function getComplexData(sKey: string): any;/**
    * Returns the data that has been set via `setData` method.
    */
    export function getData(sKey: string): string;/**
    * Returns the data that has been set via `setTextData` method.
    */
    export function getTextData(): string;/**
    * Sets string data with any MIME type. ** Note: ** This works in all browsers, apart from Internet Explorer and Microsoft Edge. It also works if you navigate between different windows.
    */
    export function setData(sKey: string, sData: string): any;/**
    * Sets string data with plain text MIME type. ** Note: ** This works in all browsers, including Internet Explorer and Microsoft Edge. It also works if you navigate between different windows.
    */
    export function setTextData(sData: string): any;    // Fields
    /**
    * The dragged control, if available within the same UI5 application frame.
    */
    export const draggedControl: {};
    // Fields
    /**
    * The valid drop target underneath the dragged control.
    */
    export const dropControl: {};
}