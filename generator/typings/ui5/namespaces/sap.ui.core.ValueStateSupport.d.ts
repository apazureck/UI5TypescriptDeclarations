declare namespace sap.ui.core.ValueStateSupport {
    // Methods
    /**
        * Appends a generic success, warning or error message to the given tooltip text if the given Element has a property "valueState" with one of these three states.
        */
    export function enrichTooltip(oElement: {}, sTooltipText: string): string;/**
    * Returns a ValueState object based on the given integer value
 * 
 * 0 : ValueState.None 1 : ValueState.Warning 2 : ValueState.Success 3 : ValueState.Error
    */
    export function formatValueState(iState: number): sap.ui.core.ValueState;/**
    * Returns a generic success, warning or error message if the given Element has a property "valueState" with one of these three states or the given ValueState represents one of these states.
    */
    export function getAdditionalText(vValue: {} | sap.ui.core.ValueState): string;
}