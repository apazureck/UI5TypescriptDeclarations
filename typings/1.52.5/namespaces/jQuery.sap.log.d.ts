declare namespace jQuery.sap.log {
    // Methods
    /**
        * Allows to add a new LogListener that will be notified for new log entries.
     * 
     * The given object must provide method `onLogEntry` and can also be informed about `onDetachFromLog` and `onAttachToLog`
        */
    export function addLogListener(oListener: {}): jQuery.sap.log.Logger;/**
    * Creates a new debug-level entry in the log with the given message, details and calling component.
    */
    export function debug(sMessage: string, sDetails: string, sComponent: string, fnSupportInfo: (() => any)): jQuery.sap.log.Logger;/**
    * Creates a new error-level entry in the log with the given message, details and calling component.
    */
    export function error(sMessage: string, sDetails: string, sComponent: string, fnSupportInfo: (() => any)): jQuery.sap.log.Logger;/**
    * Creates a new fatal-level entry in the log with the given message, details and calling component.
    */
    export function fatal(sMessage: string, sDetails: string, sComponent: string, fnSupportInfo: (() => any)): jQuery.sap.log.Logger;/**
    * Returns the log level currently effective for the given component. If no component is given or when no level has been configured for a given component, the log level for the default component of this logger is returned.
    */
    export function getLevel(sComponent: string): number;/**
    * Retrieves the currently recorded log entries.
    */
    export function getLog(): any;/**
    * Returns the logged entries recorded so far as an array.
 * 
 * Log entries are plain JavaScript objects with the following properties  <li>timestamp {number} point in time when the entry was created <li>level {int} LogLevel level of the entry <li>message {string} message text of the entry 
    */
    export function getLogEntries(): {};/**
    * Returns a {@link jQuery.sap.log.Logger} for the given component.
 * 
 * The method might or might not return the same logger object across multiple calls. While loggers are assumed to be light weight objects, consumers should try to avoid redundant calls and instead keep references to already retrieved loggers.
 * 
 * The optional second parameter `iDefaultLogLevel` allows to specify a default log level for the component. It is only applied when no log level has been defined so far for that component (ignoring inherited log levels). If this method is called multiple times for the same component but with different log levels, only the first call one might be taken into account.
    */
    export function getLogger(sComponent: string, iDefaultLogLevel: number): jQuery.sap.log.Logger;/**
    * Creates a new info-level entry in the log with the given message, details and calling component.
    */
    export function info(sMessage: string, sDetails: string, sComponent: string, fnSupportInfo: (() => any)): jQuery.sap.log.Logger;/**
    * Checks whether logging is enabled for the given log level, depending on the currently effective log level for the given component.
 * 
 * If no component is given, the default component of this logger will be taken into account.
    */
    export function isLoggable(iLevel: number, sComponent: string): boolean;/**
    * Allows to remove a registered LogListener.
    */
    export function removeLogListener(oListener: {}): jQuery.sap.log.Logger;/**
    * Defines the maximum `jQuery.sap.log.Level` of log entries that will be recorded. Log entries with a higher (less important) log level will be omitted from the log. When a component name is given, the log level will be configured for that component only, otherwise the log level for the default component of this logger is set. For the global logger, the global default level is set.
 * 
 * ** Note **: Setting a global default log level has no impact on already defined component log levels. They always override the global default log level.
    */
    export function setLevel(iLogLevel: jQuery.sap.log.Level, sComponent: string): jQuery.sap.log.Logger;/**
    * Creates a new trace-level entry in the log with the given message, details and calling component.
    */
    export function trace(sMessage: string, sDetails: string, sComponent: string, fnSupportInfo: (() => any)): jQuery.sap.log.Logger;/**
    * Creates a new warning-level entry in the log with the given message, details and calling component.
    */
    export function warning(sMessage: string, sDetails: string, sComponent: string, fnSupportInfo: (() => any)): jQuery.sap.log.Logger;
}