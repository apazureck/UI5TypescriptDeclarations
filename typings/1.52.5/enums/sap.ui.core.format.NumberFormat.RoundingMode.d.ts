declare namespace sap.ui.core.format.NumberFormat {
    /**
    * Specifies a rounding behavior for numerical operations capable of discarding precision. Each rounding mode in this object indicates how the least significant returned digits of rounded result is to be calculated.
    */
    export type RoundingMode = "AWAY_FROM_ZERO" | "CEILING" | "FLOOR" | "HALF_AWAY_FROM_ZERO" | "HALF_CEILING" | "HALF_FLOOR" | "HALF_TOWARDS_ZERO" | "TOWARDS_ZERO";
}