declare namespace jQuery.sap.log {
    /**
    * Enumeration of the configurable log levels that a Logger should persist to the log.
 * 
 * Only if the current LogLevel is higher than the level {@link jQuery.sap.log.Level} of the currently added log entry, then this very entry is permanently added to the log. Otherwise it is ignored.
    */
    export type Level = "DEBUG" | "ERROR" | "FATAL" | "INFO" | "NONE" | "TRACE" | "WARNING";
}