declare namespace sap.ui.commons.layout {
    /**
    * Padding, e.g. of a layout cell's content within the cell's borders. Note that all options except "None" include a padding of 2px at the top and bottom, and differ only in the presence of a 4px padding towards the beginning or end of a line, in the current locale's writing direction.
    */
    export type Padding = "Begin" | "Both" | "End" | "Neither" | "None";
}