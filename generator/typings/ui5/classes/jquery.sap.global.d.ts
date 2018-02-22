declare namespace jquery.sap.global {

    /**
    
    */
    export class Logger {


        /**
            * Creates a new debug-level entry in the log with the given message, details and calling component.
        */
        public debug(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: (() => any)): jQuery.sap.log.Logger;

        /**
            * Creates a new error-level entry in the log with the given message, details and calling component.
        */
        public error(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: (() => any)): jQuery.sap.log.Logger;

        /**
            * Creates a new fatal-level entry in the log with the given message, details and calling component.
        */
        public fatal(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: (() => any)): jQuery.sap.log.Logger;

        /**
            * Returns the log level currently effective for the given component. If no component is given or when no level has been configured for a given component, the log level for the default component of this logger is returned.
        */
        public getLevel(sComponent?: string): number;

        /**
            * Creates a new info-level entry in the log with the given message, details and calling component.
        */
        public info(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: (() => any)): jQuery.sap.log.Logger;

        /**
            * Checks whether logging is enabled for the given log level, depending on the currently effective log level for the given component.
         * 
         * If no component is given, the default component of this logger will be taken into account.
        */
        public isLoggable(iLevel?: number, sComponent?: string): boolean;

        /**
            * Defines the maximum `jQuery.sap.log.Level` of log entries that will be recorded. Log entries with a higher (less important) log level will be omitted from the log. When a component name is given, the log level will be configured for that component only, otherwise the log level for the default component of this logger is set. For the global logger, the global default level is set.
         * 
         * ** Note **: Setting a global default log level has no impact on already defined component log levels. They always override the global default log level.
        */
        public setLevel(iLogLevel: jQuery.sap.log.Level, sComponent?: string): jQuery.sap.log.Logger;

        /**
            * Creates a new trace-level entry in the log with the given message, details and calling component.
        */
        public trace(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: (() => any)): jQuery.sap.log.Logger;

        /**
            * Creates a new warning-level entry in the log with the given message, details and calling component.
        */
        public warning(sMessage: string, sDetails?: string, sComponent?: string, fnSupportInfo?: (() => any)): jQuery.sap.log.Logger;

    }
}