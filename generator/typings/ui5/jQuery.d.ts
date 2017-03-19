import sapui = sap.ui;
/**
 * Provides base functionality of the SAP jQuery plugin as extension of the jQuery framework.<br/>
 * See also <a href="http://api.jquery.com/jQuery/">jQuery</a> for details.<br/>
 * Although these functions appear as static ones, they are meant to be used on jQuery instances.<br/>
 * If not stated differently, the functions follow the fluent interface paradigm and return the jQuery instance for chaining of statements.
 * 
 * Example for usage of an instance method:
 * <pre>
 *   var oRect = jQuery("#myDiv").rect();
 *   alert("Top Position: " + oRect.top);
 * </pre>
 */
declare namespace jQuery {

	/**
	 * Root Namespace for the jQuery plug-in provided by SAP SE.
	 */
    namespace sap {

        namespace act {
			/**
			 * Registers the given handler to the activity event, which is fired when an activity was detected after a certain period of inactivity.
			 * 
			 * The Event is not fired for Internet Explorer 8.
			 * @param fnFunction The function to call, when an activity event occurs.
			 * @param oListener The 'this' context of the handler function.(optional)
			 */
            function attachActivate(fnFunction: any, oListener?: any);
			/**
			 * Deregisters a previously registered handler from the activity event.
			 * @param fnFunction The function to call, when an activity event occurs.
			 * @param oListener The 'this' context of the handler function.(optional)
			 */
            function detachActivate(fnFunction: any, oListener?: any);
			/**
			 * Checks whether recently an activity was detected.
			 * 
			 * Not supported for Internet Explorer 8.
			 * @return true if recently an activity was detected, false otherwise
			 */
            function isActive();
			/**
			 * Reports an activity.
			 */
            function refresh();
        }

		/**
		 * A Logging API for JavaScript.
		 * 
		 * Provides methods to manage a client-side log and to create entries in it. Each of the logging methods
		 * {@link jQuery.sap.log.#debug}, {@link jQuery.sap.log.#info}, {@link jQuery.sap.log.#warning},
		 * {@link jQuery.sap.log.#error} and {@link jQuery.sap.log.#fatal} creates and records a log entry,
		 * containing a timestamp, a log level, a message with details and a component info.
		 * The log level will be one of {@link jQuery.sap.log.Level} and equals the name of the concrete logging method.
		 * 
		 * By using the {@link jQuery.sap.log#setLevel} method, consumers can determine the least important
		 * log level which should be recorded. Less important entries will be filtered out. (Note that higher numeric
		 * values represent less important levels). The initially set level depends on the mode that UI5 is running in.
		 * When the optimized sources are executed, the default level will be {@link jQuery.sap.log.Level.ERROR}.
		 * For normal (debug sources), the default level is {@link jQuery.sap.log.Level.DEBUG}.
		 * 
		 * All logging methods allow to specify a <b>component</b>. These components are simple strings and
		 * don't have a special meaning to the UI5 framework. However they can be used to semantically group
		 * log entries that belong to the same software component (or feature). There are two APIs that help
		 * to manage logging for such a component. With <code>{@link jQuery.sap.log.getLogger}(sComponent)</code>,
		 * one can retrieve a logger that automatically adds the given <code>sComponent</code> as component
		 * parameter to each log entry, if no other component is specified. Typically, JavaScript code will
		 * retrieve such a logger once during startup and reuse it for the rest of its lifecycle.
		 * Second, the {@link jQuery.sap.log.Logger#setLevel}(iLevel, sComponent) method allows to set the log level
		 * for a specific component only. This allows a more fine granular control about the created logging entries.
		 * {@link jQuery.sap.log.Logger.getLevel} allows to retrieve the currently effective log level for a given
		 * component.
		 * 
		 * {@link jQuery.sap.log#getLog} returns an array of the currently collected log entries.
		 * 
		 * Furthermore, a listener can be registered to the log. It will be notified whenever a new entry
		 * is added to the log. The listener can be used for displaying log entries in a separate page area,
		 * or for sending it to some external target (server).
		 */
        namespace log {

            class Level {
				/**
				 * Debug level. Use this for logging information necessary for debugging
				 */
                static DEBUG: any;
				/**
				 * Error level. Use this for logging of erroneous but still recoverable situations
				 */
                static ERROR: any;
				/**
				 * Fatal level. Use this for logging unrecoverable situations
				 */
                static FATAL: any;
				/**
				 * Info level. Use this for logging information of purely informative nature
				 */
                static INFO: any;
				/**
				 * Do not log anything
				 */
                static NONE: any;
				/**
				 * Trace level. Use this for tracing the program flow.
				 */
                static TRACE: any;
				/**
				 * Warning level. Use this for logging unwanted but foreseen situations
				 */
                static WARNING: any;
            }

            class Logger {
				/**
				 * Creates a new Logger instance which will use the given component string
				 * for all logged messages without a specific component.
				 * @param sDefaultComponent The component to use
				 */
                constructor(sDefaultComponent: string);
				/**
				 * Creates a new debug-level entry in the log with the given message, details and calling component.
				 * @param sMessage Message text to display
				 * @param sDetails Details about the message, might be omitted(optional)
				 * @param sComponent Name of the component that produced the log entry(optional)
				 * @return The log instance
				 */
                debug(sMessage: string, sDetails?: string, sComponent?: string): Logger;
				/**
				 * Creates a new error-level entry in the log with the given message, details and calling component.
				 * @param sMessage Message text to display
				 * @param sDetails Details about the message, might be omitted(optional)
				 * @param sComponent Name of the component that produced the log entry(optional)
				 * @return The log instance
				 */
                error(sMessage: string, sDetails?: string, sComponent?: string): Logger;
				/**
				 * Creates a new fatal-level entry in the log with the given message, details and calling component.
				 * @param sMessage Message text to display
				 * @param sDetails Details about the message, might be omitted(optional)
				 * @param sComponent Name of the component that produced the log entry(optional)
				 * @return The log instance for method chaining
				 */
                fatal(sMessage: string, sDetails?: string, sComponent?: string): Logger;
				/**
				 * Returns the log level currently effective for the given component.
				 * If no component is given or when no level has been configured for a
				 * given component, the log level for the default component of this logger is returned.
				 * @param sComponent Name of the component to retrieve the log level for(optional)
				 * @return The log level for the given component or the default log level
				 */
                getLevel(sComponent?: string): number;
				/**
				 * Creates a new info-level entry in the log with the given message, details and calling component.
				 * @param sMessage Message text to display
				 * @param sDetails Details about the message, might be omitted(optional)
				 * @param sComponent Name of the component that produced the log entry(optional)
				 * @return The log instance
				 */
                info(sMessage: string, sDetails?: string, sComponent?: string): Logger;
				/**
				 * Checks whether logging is enabled for the given log level,
				 * depending on the currently effective log level for the given component.
				 * 
				 * If no component is given, the default component of this logger will be taken into account.
				 * @param iLevel The log level in question(optional)
				 * @param sComponent Name of the component to check the log level for(optional)
				 * @return Whether logging is enabled or not
				 */
                isLoggable(iLevel?: number, sComponent?: string): boolean;
				/**
				 * Defines the maximum <code>jQuery.sap.log.Level</code> of log entries that will be recorded.
				 * Log entries with a higher (less important) log level will be omitted from the log.
				 * When a component name is given, the log level will be configured for that component
				 * only, otherwise the log level for the default component of this logger is set.
				 * For the global logger, the global default level is set.
				 * 
				 * <b>Note</b>: Setting a global default log level has no impact on already defined
				 * component log levels. They always override the global default log level.
				 * @param iLogLevel The new log level
				 * @param sComponent The log component to set the log level for(optional)
				 * @return This logger object to allow method chaining
				 */
                setLevel(iLogLevel: Level, sComponent?: string): Logger;
				/**
				 * Creates a new trace-level entry in the log with the given message, details and calling component.
				 * @param sMessage Message text to display
				 * @param sDetails Details about the message, might be omitted(optional)
				 * @param sComponent Name of the component that produced the log entry(optional)
				 * @return The log-instance
				 */
                trace(sMessage: string, sDetails?: string, sComponent?: string): Logger;
				/**
				 * Creates a new warning-level entry in the log with the given message, details and calling component.
				 * @param sMessage Message text to display
				 * @param sDetails Details about the message, might be omitted(optional)
				 * @param sComponent Name of the component that produced the log entry(optional)
				 * @return The log instance
				 */
                warning(sMessage: string, sDetails?: string, sComponent?: string): Logger;
            }
			/**
			 * Allows to add a new LogListener that will be notified for new log entries.
			 * The given object must provide method <code>onLogEntry</code> and can also be informed
			 * about <code>onDetachFromLog</code> and <code>onAttachToLog</code>
			 * @param oListener The new listener object that should be informed
			 * @return The global logger
			 */
            function addLogListener(oListener: any): log.Logger;
			/**
			 * Creates a new debug-level entry in the log with the given message, details and calling component.
			 * @param sMessage Message text to display
			 * @param sDetails Details about the message, might be omitted(optional)
			 * @param sComponent Name of the component that produced the log entry(optional)
			 * @return The log instance
			 */
            function debug(sMessage: string, sDetails?: string, sComponent?: string): log.Logger;
			/**
			 * Creates a new error-level entry in the log with the given message, details and calling component.
			 * @param sMessage Message text to display
			 * @param sDetails Details about the message, might be omitted(optional)
			 * @param sComponent Name of the component that produced the log entry(optional)
			 * @return The log instance
			 */
            function error(sMessage: string, sDetails?: string, sComponent?: string): log.Logger;
			/**
			 * Creates a new fatal-level entry in the log with the given message, details and calling component.
			 * @param sMessage Message text to display
			 * @param sDetails Details about the message, might be omitted(optional)
			 * @param sComponent Name of the component that produced the log entry(optional)
			 * @return The log instance for method chaining
			 */
            function fatal(sMessage: string, sDetails?: string, sComponent?: string): log.Logger;
			/**
			 * Returns the log level currently effective for the given component.
			 * If no component is given or when no level has been configured for a
			 * given component, the log level for the default component of this logger is returned.
			 * @param sComponent Name of the component to retrieve the log level for(optional)
			 * @return The log level for the given component or the default log level
			 */
            function getLevel(sComponent?: string): number;
			/**
			 * Returns the logged entries recorded so far as an array.
			 * 
			 * Log entries are plain JavaScript objects with the following properties
			 * <ul>
			 * <li>timestamp {number} point in time when the entry was created
			 * <li>level {int} LogLevel level of the entry
			 * <li>message {string} message text of the entry
			 * </ul>
			 * @return an array containing the recorded log entries
			 */
            function getLogEntries(): any[];
			/**
			 * Returns a {@link jQuery.sap.log.Logger} for the given component.
			 * 
			 * The method might or might not return the same logger object across multiple calls.
			 * While loggers are assumed to be light weight objects, consumers should try to
			 * avoid redundant calls and instead keep references to already retrieved loggers.
			 * 
			 * The optional second parameter <code>iDefaultLogLevel</code> allows to specify
			 * a default log level for the component. It is only applied when no log level has been
			 * defined so far for that component (ignoring inherited log levels). If this method is
			 * called multiple times for the same component but with different log levels,
			 * only the first call one might be taken into account.
			 * @param sComponent Component to create the logger for
			 * @param iDefaultLogLevel a default log level to be used for the component,
			 *   if no log level has been defined for it so far.(optional)
			 * @return A logger for the component.
			 */
            function getLogger(sComponent: string, iDefaultLogLevel?: number): log.Logger;
			/**
			 * Creates a new info-level entry in the log with the given message, details and calling component.
			 * @param sMessage Message text to display
			 * @param sDetails Details about the message, might be omitted(optional)
			 * @param sComponent Name of the component that produced the log entry(optional)
			 * @return The log instance
			 */
            function info(sMessage: string, sDetails?: string, sComponent?: string): log.Logger;
			/**
			 * Checks whether logging is enabled for the given log level,
			 * depending on the currently effective log level for the given component.
			 * 
			 * If no component is given, the default component of this logger will be taken into account.
			 * @param iLevel The log level in question(optional)
			 * @param sComponent Name of the component to check the log level for(optional)
			 * @return Whether logging is enabled or not
			 */
            function isLoggable(iLevel?: number, sComponent?: string): boolean;
			/**
			 * Allows to remove a registered LogListener.
			 * @param oListener The new listener object that should be removed
			 * @return The global logger
			 */
            function removeLogListener(oListener: any): log.Logger;
			/**
			 * Defines the maximum <code>jQuery.sap.log.Level</code> of log entries that will be recorded.
			 * Log entries with a higher (less important) log level will be omitted from the log.
			 * When a component name is given, the log level will be configured for that component
			 * only, otherwise the log level for the default component of this logger is set.
			 * For the global logger, the global default level is set.
			 * 
			 * <b>Note</b>: Setting a global default log level has no impact on already defined
			 * component log levels. They always override the global default log level.
			 * @param iLogLevel The new log level
			 * @param sComponent The log component to set the log level for(optional)
			 * @return This logger object to allow method chaining
			 */
            function setLevel(iLogLevel: log.Level, sComponent?: string): log.Logger;
			/**
			 * Creates a new trace-level entry in the log with the given message, details and calling component.
			 * @param sMessage Message text to display
			 * @param sDetails Details about the message, might be omitted(optional)
			 * @param sComponent Name of the component that produced the log entry(optional)
			 * @return The log-instance
			 */
            function trace(sMessage: string, sDetails?: string, sComponent?: string): log.Logger;
			/**
			 * Creates a new warning-level entry in the log with the given message, details and calling component.
			 * @param sMessage Message text to display
			 * @param sDetails Details about the message, might be omitted(optional)
			 * @param sComponent Name of the component that produced the log entry(optional)
			 * @return The log instance
			 */
            function warning(sMessage: string, sDetails?: string, sComponent?: string): log.Logger;
        }

		/**
		 * Namespace for the jQuery performance measurement plug-in provided by SAP SE.
		 */
        namespace measure {
			/**
			 * Adds a performance measurement with all data
			 * This is usefull to add external measurements (e.g. from a backend) to the common measurement UI
			 * @param sId ID of the measurement
			 * @param sInfo Info for the measurement
			 * @param iStart start timestamp
			 * @param iEnd end timestamp
			 * @param iTime time in milliseconds
			 * @param iDuration effective time in milliseconds
			 * @param aCategories An optional list of categories for the measure(optional)
			 * @return [] current measurement containing id, info and start-timestamp, end-timestamp, time, duration, categories (false if error)
			 */
            function add(sId: string, sInfo: string, iStart: number, iEnd: number, iTime: number, iDuration: number, aCategories?: string | string[]): any;
			/**
			 * Starts an average performance measure.
			 * The duration of this measure is an avarage of durations measured for each call.
			 * Optionally a category or list of categories can be passed to allow filtering of measurements.
			 * @param sId ID of the measurement
			 * @param sInfo Info for the measurement
			 * @param aCategories An optional list of categories for the measure(optional)
			 * @return current measurement containing id, info and start-timestamp (false if error)
			 */
            function average(sId: string, sInfo: string, aCategories?: string | string[]): any;
			/**
			 * Clears all performance measurements
			 */
            function clear();
			/**
			 * Clears all interaction measurements
			 */
            function clearInteractionMeasurements();
			/**
			 * Clears all request timings safely
			 */
            function clearRequestTimings();
			/**
			 * Ends a performance measure
			 * @param sId ID of the measurement
			 * @return current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
			 */
            function end(sId: string): any;
			/**
			 * End an interaction measurements
			 * @param bForce forces end of interaction now and ignores further re-renderings
			 */
            function endInteraction(bForce: boolean);
			/**
			 * Gets all interaction measurements for which a provided filter function returns a truthy value.
			 * To filter for certain categories of measurements a fnFilter can be implemented like this
			 * <code>
			 * function(oInteractionMeasurement) {
			 *     return oInteractionMeasurement.duration > 0
			 * }</code>
			 * @param fnFilter a filter function that returns true if the passed measurement should be added to the result
			 * @return all interaction measurements passing the filter function successfully
			 */
            function filterInteractionMeasurements(fnFilter: any): any[];
			/**
			 * Gets all performance measurements where a provided filter function returns a truthy value.
			 * If neither a filter function nor a category is provided an empty array is returned.
			 * To filter for certain properties of measurements a fnFilter can be implemented like this
			 * <code>
			 * function(oMeasurement) {
			 *     return oMeasurement.duration > 50;
			 * }</code>
			 * @param fnFilter a filter function that returns true if the passed measurement should be added to the result(optional)
			 * @param bCompleted Optional parameter to determine if either completed or incomplete measurements should be returned (both if not set or undefined)(optional)
			 * @param aCategories The function returns only measurements which match these specified categories(optional)
			 * @return [] filtered array with measurements containing id, info and start-timestamp, end-timestamp, time, duration, categories (false if error)
			 */
            function filterMeasurements(fnFilter?: any, bCompleted?: boolean | any, aCategories?: string[]): any;
			/**
			 * Gets the current state of the perfomance measurement functionality
			 * @return current state of the perfomance measurement functionality
			 */
            function getActive(): boolean;
			/**
			 * Gets all interaction measurements
			 * @param bFinalize finalize the current pending interaction so that it is contained in the returned array
			 * @return all interaction measurements
			 */
            function getAllInteractionMeasurements(bFinalize: boolean): any[];
			/**
			 * Gets all performance measurements
			 * @param bCompleted Whether only completed measurements should be returned, if explicitly set to false only incomplete measurements are returned(optional)
			 * @return current array with measurements containing id, info and start-timestamp, end-timestamp, time, duration, categories
			 */
            function getAllMeasurements(bCompleted?: boolean): any[];
			/**
			 * Gets a performance measure
			 * @param sId ID of the measurement
			 * @return current measurement containing id, info and start-timestamp, end-timestamp, time, duration (false if error)
			 */
            function getMeasurement(sId: string): any;
			/**
			 * Gets the current request timings array for type 'resource' safely
			 * @return array of performance timing objects
			 */
            function getRequestTimings(): any[];
			/**
			 * Pauses a performance measure
			 * @param sId ID of the measurement
			 * @return current measurement containing id, info and start-timestamp, pause-timestamp (false if error)
			 */
            function pause(sId: string): any;
			/**
			 * Registers an average measurement for a given objects method
			 * @param sId the id of the measurement
			 * @param oObject the object of the method
			 * @param sMethod the name of the method
			 * @param aCategories An optional categories list for the measurement(optional)
			 * @return true if the registration was successful
			 */
            function registerMethod(sId: string, oObject: any, sMethod: string, aCategories?: string[]): boolean;
			/**
			 * Removes a performance measure
			 * @param sId ID of the measurement
			 */
            function remove(sId: string);
			/**
			 * Resumes a performance measure
			 * @param sId ID of the measurement
			 * @return current measurement containing id, info and start-timestamp, resume-timestamp (false if error)
			 */
            function resume(sId: string): any;
			/**
			 * Activates or deactivates the performance measure functionality
			 * Optionally a category or list of categories can be passed to restrict measurements to certain categories
			 * like "javascript", "require", "xmlhttprequest", "render"
			 * @param bOn state of the perfomance measurement functionality to set
			 * @param An optional list of categories that should be measured
			 * @return current state of the perfomance measurement functionality
			 */
            function setActive(bOn: boolean, An: string | string[]): boolean;
			/**
			 * Sets the request buffer size for the measurement safely
			 * @param iSize size of the buffer
			 */
            function setRequestBufferSize(iSize: number);
			/**
			 * Starts a performance measure.
			 * Optionally a category or list of categories can be passed to allow filtering of measurements.
			 * @param sId ID of the measurement
			 * @param sInfo Info for the measurement
			 * @param aCategories An optional list of categories for the measure(optional)
			 * @return current measurement containing id, info and start-timestamp (false if error)
			 */
            function start(sId: string, sInfo: string, aCategories?: string | string[]): any;
			/**
			 * Start an interaction measurements
			 * @param sType type of the event which triggered the interaction
			 * @param oSrcElement the control on which the interaction was triggered
			 */
            function startInteraction(sType: string, oSrcElement: any);
			/**
			 * Unregisters all average measurements
			 */
            function unregisterAllMethods();
			/**
			 * Unregisters an average measurement for a given objects method
			 * @param sId the id of the measurement
			 * @param oObject the object of the method
			 * @param sMethod the name of the method
			 * @return true if the unregistration was successful
			 */
            function unregisterMethod(sId: string, oObject: any, sMethod: string): boolean;
        }

		/**
		 * Returns a {@link jQuery.sap.storage.Storage Storage} object for a given HTML5 storage (type) and,
		 * as a convenience, provides static functions to access the default (session) storage.
		 * 
		 * When called as a function, it returns an instance of {@link jQuery.sap.storage.Storage}, providing access
		 * to the storage of the given {@link jQuery.sap.storage.Type} or to the given HTML5 Storage object.
		 * 
		 * The default session storage can be easily accessed with methods {@link jQuery.sap.storage.get},
		 * {@link jQuery.sap.storage.put}, {@link jQuery.sap.storage.remove}, {@link jQuery.sap.storage.clear},
		 * {@link jQuery.sap.storage.getType} and {@link jQuery.sap.storage.removeAll}
		 */
        namespace storage {

            interface Storage {
				/**
				 * Deletes all the entries saved in the session (Independent of the current Storage instance!).
				 * 
				 * CAUTION: This method should be called only in very particular situations,
				 * when a global erasing of data is required. Given that the method deletes
				 * the data saved under any ID, it should not be called when managing data
				 * for specific controls.
				 * @return true if execution of removal
				 * was successful or the data to remove doesn't exist,
				 * and false if the feature is unavailable or a problem occurred
				 */
                clear(): boolean;
				/**
				 * Retrieves the state string stored in the session under the key
				 * sStorageKeyPrefix + sId.
				 * 
				 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
				 * @param sId Id for the state to retrieve
				 * @return the string from the storage, if the retrieval
				 * was successful, and null otherwise
				 */
                get(sId: string): string;
				/**
				 * Returns the type of the storage.
				 * @return the type of the storage or "unknown"
				 */
                getType(): Type | string;
				/**
				 * Returns whether the given storage is suppported.
				 * @return true if storage is supported, false otherwise (e.g. due to browser security settings)
				 */
                isSupported(): boolean;
				/**
				 * Stores the passed state string in the session, under the key
				 * sStorageKeyPrefix + sId.
				 * 
				 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
				 * @param sId Id for the state to store
				 * @param sStateToStore content to store
				 * @return true if the data were successfully stored, false otherwise
				 */
                put(sId: string, sStateToStore: string): boolean;
				/**
				 * Deletes the state string stored in the session under the key
				 * sStorageKeyPrefix + sId.s
				 * 
				 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
				 * @param sId Id for the state to delete
				 * @return true if the deletion
				 * was successful or the data doesn't exist under the specified key,
				 * and false if the feature is unavailable or a problem occurred
				 */
                remove(sId: string): boolean;
				/**
				 * Deletes all state strings stored in the session under the key prefix
				 * sStorageKeyPrefix + sIdPrefix.
				 * 
				 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
				 * @param sIdPrefix Id prefix for the states to delete
				 * @return true if the deletion
				 * was successful or the data doesn't exist under the specified key,
				 * and false if the feature is unavailable or a problem occurred
				 */
                removeAll(sIdPrefix: string): boolean;
            }

            class Type {
				/**
				 * Indicates usage of the browser's globalStorage feature
				 */
                static global: any;
				/**
				 * Indicates usage of the browser's localStorage feature
				 */
                static local: any;
				/**
				 * Indicates usage of the browser's sessionStorage feature
				 */
                static session: any;
            }
			/**
			 * Deletes all the entries saved in the session (Independent of the current Storage instance!).
			 * 
			 * CAUTION: This method should be called only in very particular situations,
			 * when a global erasing of data is required. Given that the method deletes
			 * the data saved under any ID, it should not be called when managing data
			 * for specific controls.
			 * @return true if execution of removal
			 * was successful or the data to remove doesn't exist,
			 * and false if the feature is unavailable or a problem occurred
			 */
            function clear(): boolean;
			/**
			 * Retrieves the state string stored in the session under the key
			 * sStorageKeyPrefix + sId.
			 * 
			 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
			 * @param sId Id for the state to retrieve
			 * @return the string from the storage, if the retrieval
			 * was successful, and null otherwise
			 */
            function get(sId: string): string;
			/**
			 * Returns the type of the storage.
			 * @return the type of the storage or "unknown"
			 */
            function getType(): storage.Type | string;
			/**
			 * Returns whether the given storage is suppported.
			 * @return true if storage is supported, false otherwise (e.g. due to browser security settings)
			 */
            function isSupported(): boolean;
			/**
			 * Stores the passed state string in the session, under the key
			 * sStorageKeyPrefix + sId.
			 * 
			 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
			 * @param sId Id for the state to store
			 * @param sStateToStore content to store
			 * @return true if the data were successfully stored, false otherwise
			 */
            function put(sId: string, sStateToStore: string): boolean;
			/**
			 * Deletes the state string stored in the session under the key
			 * sStorageKeyPrefix + sId.s
			 * 
			 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
			 * @param sId Id for the state to delete
			 * @return true if the deletion
			 * was successful or the data doesn't exist under the specified key,
			 * and false if the feature is unavailable or a problem occurred
			 */
            function remove(sId: string): boolean;
			/**
			 * Deletes all state strings stored in the session under the key prefix
			 * sStorageKeyPrefix + sIdPrefix.
			 * 
			 * sStorageKeyPrefix is the id prefix defined for the storage instance (@see jQuery.sap#storage)
			 * @param sIdPrefix Id prefix for the states to delete
			 * @return true if the deletion
			 * was successful or the data doesn't exist under the specified key,
			 * and false if the feature is unavailable or a problem occurred
			 */
            function removeAll(sIdPrefix: string): boolean;
        }

        namespace history {

            class NavType {
				/**
				 * This indicates that the new hash is achieved by pressing the back button.
				 */
                static Back: string;
				/**
				 * This indicates that the new hash is restored from the bookmark.
				 */
                static Bookmark: string;
				/**
				 * This indicates that the new hash is achieved by pressing the forward button.
				 */
                static Forward: string;
				/**
				 * This indicates that the new hash is achieved by some unknown direction.
				 * This happens when the user navigates out of the application and then click on the forward button
				 * in the browser to navigate back to the application.
				 */
                static Unknown: string;
            }
        }

        class interaction {
        }

        class KeyCodes {
            static A: number;
            static ALT: number;
            static ARROW_DOWN: number;
            static ARROW_LEFT: number;
            static ARROW_RIGHT: number;
            static ARROW_UP: number;
            static B: number;
            static BACKSLASH: number;
            static BACKSPACE: number;
            static BREAK: number;
            static C: number;
            static CAPS_LOCK: number;
            static COMMA: number;
            static CONTEXT_MENU: number;
            static CONTROL: number;
            static D: number;
            static DELETE: number;
            static DIGIT_0: number;
            static DIGIT_1: number;
            static DIGIT_2: number;
            static DIGIT_3: number;
            static DIGIT_4: number;
            static DIGIT_5: number;
            static DIGIT_6: number;
            static DIGIT_7: number;
            static DIGIT_8: number;
            static DIGIT_9: number;
            static DOT: number;
            static E: number;
            static END: number;
            static ENTER: number;
            static EQUALS: number;
            static ESCAPE: number;
            static F: number;
            static F1: number;
            static F10: number;
            static F11: number;
            static F12: number;
            static F2: number;
            static F3: number;
            static F4: number;
            static F5: number;
            static F6: number;
            static F7: number;
            static F8: number;
            static F9: number;
            static G: number;
            static GREAT_ACCENT: number;
            static H: number;
            static HOME: number;
            static I: number;
            static INSERT: number;
            static J: number;
            static K: number;
            static L: number;
            static M: number;
            static MINUS: number;
            static N: number;
            static NUM_LOCK: number;
            static NUMPAD_0: number;
            static NUMPAD_1: number;
            static NUMPAD_2: number;
            static NUMPAD_3: number;
            static NUMPAD_4: number;
            static NUMPAD_5: number;
            static NUMPAD_6: number;
            static NUMPAD_7: number;
            static NUMPAD_8: number;
            static NUMPAD_9: number;
            static NUMPAD_ASTERISK: number;
            static NUMPAD_COMMA: number;
            static NUMPAD_MINUS: number;
            static NUMPAD_PLUS: number;
            static NUMPAD_SLASH: number;
            static O: number;
            static OPEN_BRACKET: number;
            static P: number;
            static PAGE_DOWN: number;
            static PAGE_UP: number;
            static PIPE: number;
            static PLUS: number;
            static PRINT: number;
            static Q: number;
            static R: number;
            static S: number;
            static SCROLL_LOCK: number;
            static SEMICOLON: number;
            static SHIFT: number;
            static SINGLE_QUOTE: number;
            static SLASH: number;
            static SLEEP: number;
            static SPACE: number;
            static T: number;
            static TAB: number;
            static TURN_OFF: number;
            static U: number;
            static V: number;
            static W: number;
            static WINDOWS: number;
            static X: number;
            static Y: number;
            static Z: number;
        }

        class PseudoEvents {
			/**
			 * Pseudo event for keyboard backspace without modifiers (Ctrl, Alt or Shift)
			 */
            static sapbackspace: any;
			/**
			 * Pseudo event for keyboard backspace with modifiers (Ctrl, Alt or Shift)
			 */
            static sapbackspacemodifiers: any;
			/**
			 * Pseudo event for pseudo bottom event
			 */
            static sapbottom: any;
			/**
			 * Pseudo event for pseudo collapse event (keyboard numpad -) without modifiers (Ctrl, Alt or Shift)
			 */
            static sapcollapse: any;
			/**
			 * Pseudo event for pseudo collapse event (keyboard numpad *)
			 */
            static sapcollapseall: any;
			/**
			 * Pseudo event for pseudo collapse event (keyboard numpad -) with modifiers (Ctrl, Alt or Shift)
			 */
            static sapcollapsemodifiers: any;
			/**
			 * Pseudo event for pseudo 'decrease' event without modifiers (Ctrl, Alt or Shift)
			 */
            static sapdecrease: any;
			/**
			 * Pseudo event for pseudo 'decrease' event with modifiers (Ctrl, Alt or Shift)
			 */
            static sapdecreasemodifiers: any;
			/**
			 * Pseudo event indicating delayed double click (e.g. for inline edit)
			 */
            static sapdelayeddoubleclick: any;
			/**
			 * Pseudo event for keyboard delete without modifiers (Ctrl, Alt or Shift)
			 */
            static sapdelete: any;
			/**
			 * Pseudo event for keyboard delete with modifiers (Ctrl, Alt or Shift)
			 */
            static sapdeletemodifiers: any;
			/**
			 * Pseudo event for keyboard arrow down without modifiers (Ctrl, Alt or Shift)
			 */
            static sapdown: any;
			/**
			 * Pseudo event for keyboard arrow down with modifiers (Ctrl, Alt or Shift)
			 */
            static sapdownmodifiers: any;
			/**
			 * Pseudo event for keyboard End without modifiers (Ctrl, Alt or Shift)
			 */
            static sapend: any;
			/**
			 * Pseudo event for keyboard End with modifiers (Ctrl, Alt or Shift)
			 */
            static sapendmodifiers: any;
			/**
			 * Pseudo event for keyboard enter without modifiers (Ctrl, Alt or Shift)
			 */
            static sapenter: any;
			/**
			 * Pseudo event for keyboard enter with modifiers (Ctrl, Alt or Shift)
			 */
            static sapentermodifiers: any;
			/**
			 * Pseudo event for keyboard escape
			 */
            static sapescape: any;
			/**
			 * Pseudo event for pseudo expand event (keyboard numpad +) without modifiers (Ctrl, Alt or Shift)
			 */
            static sapexpand: any;
			/**
			 * Pseudo event for pseudo expand event (keyboard numpad +) with modifiers (Ctrl, Alt or Shift)
			 */
            static sapexpandmodifiers: any;
			/**
			 * Pseudo event for pseudo 'hide' event (Alt + up-Arrow)
			 */
            static saphide: any;
			/**
			 * Pseudo event for keyboard Home/Pos1 with modifiers (Ctrl, Alt or Shift)
			 */
            static saphome: any;
			/**
			 * Pseudo event for keyboard Home/Pos1 without modifiers (Ctrl, Alt or Shift)
			 */
            static saphomemodifiers: any;
			/**
			 * Pseudo event for pseudo 'increase' event without modifiers (Ctrl, Alt or Shift)
			 */
            static sapincrease: any;
			/**
			 * Pseudo event for pseudo 'increase' event with modifiers (Ctrl, Alt or Shift)
			 */
            static sapincreasemodifiers: any;
			/**
			 * Pseudo event for keyboard arrow left without modifiers (Ctrl, Alt or Shift)
			 */
            static sapleft: any;
			/**
			 * Pseudo event for keyboard arrow left with modifiers (Ctrl, Alt or Shift)
			 */
            static sapleftmodifiers: any;
			/**
			 * Pseudo event for pressing the '-' (minus) sign.
			 */
            static sapminus: any;
			/**
			 * Pseudo event for pseudo 'next' event without modifiers (Ctrl, Alt or Shift)
			 */
            static sapnext: any;
			/**
			 * Pseudo event for pseudo 'next' event with modifiers (Ctrl, Alt or Shift)
			 */
            static sapnextmodifiers: any;
			/**
			 * Pseudo event for keyboard page down without modifiers (Ctrl, Alt or Shift)
			 */
            static sappagedown: any;
			/**
			 * Pseudo event for keyboard page down with modifiers (Ctrl, Alt or Shift)
			 */
            static sappagedownmodifiers: any;
			/**
			 * Pseudo event for keyboard page up without modifiers (Ctrl, Alt or Shift)
			 */
            static sappageup: any;
			/**
			 * Pseudo event for keyboard page up with modifiers (Ctrl, Alt or Shift)
			 */
            static sappageupmodifiers: any;
			/**
			 * Pseudo event for pressing the '+' (plus) sign.
			 */
            static sapplus: any;
			/**
			 * Pseudo event for pseudo 'previous' event without modifiers (Ctrl, Alt or Shift)
			 */
            static sapprevious: any;
			/**
			 * Pseudo event for pseudo 'previous' event with modifiers (Ctrl, Alt or Shift)
			 */
            static sappreviousmodifiers: any;
			/**
			 * Pseudo event for keyboard arrow right without modifiers (Ctrl, Alt or Shift)
			 */
            static sapright: any;
			/**
			 * Pseudo event for keyboard arrow right with modifiers (Ctrl, Alt or Shift)
			 */
            static saprightmodifiers: any;
			/**
			 * Pseudo event for pseudo 'select' event... space, enter, ... without modifiers (Ctrl, Alt or Shift)
			 */
            static sapselect: any;
			/**
			 * Pseudo event for pseudo 'select' event... space, enter, ... with modifiers (Ctrl, Alt or Shift)
			 */
            static sapselectmodifiers: any;
			/**
			 * Pseudo event for pseudo 'show' event (F4, Alt + down-Arrow)
			 */
            static sapshow: any;
			/**
			 * Pseudo event for pseudo skip back (F6 + shift modifier)
			 */
            static sapskipback: any;
			/**
			 * Pseudo event for pseudo skip forward (F6 + no modifier)
			 */
            static sapskipforward: any;
			/**
			 * Pseudo event for keyboard space without modifiers (Ctrl, Alt or Shift)
			 */
            static sapspace: any;
			/**
			 * Pseudo event for keyboard space with modifiers (Ctrl, Alt or Shift)
			 */
            static sapspacemodifiers: any;
			/**
			 * Pseudo event for keyboard tab (TAB + no modifier)
			 */
            static saptabnext: any;
			/**
			 * Pseudo event for keyboard tab (TAB + shift modifier)
			 */
            static saptabprevious: any;
			/**
			 * Pseudo event for  pseudo top event
			 */
            static saptop: any;
			/**
			 * Pseudo event for keyboard arrow up without modifiers (Ctrl, Alt or Shift)
			 */
            static sapup: any;
			/**
			 * Pseudo event for keyboard arrow up with modifiers (Ctrl, Alt or Shift)
			 */
            static sapupmodifiers: any;
        }

        namespace util {

            interface Properties {
            }

            interface ResourceBundle {
				/**
				 * Returns a locale-specific string value for the given key sKey.
				 * 
				 * The text is searched in this resource bundle according to the fallback chain described in
				 * {@link jQuery.sap.util.ResourceBundle}. If no text could be found, the key itself is used as text.
				 * 
				 * If text parameters are given, then any occurrences of the pattern "{<i>n</i>}" with <i>n</i> being an integer
				 * are replaced by the parameter value with index <i>n</i>.  Note: This replacement is also applied if no text had been found (key).
				 * For more details on this replacement mechanism refer also:
				 * @param sKey 
				 * @param aArgs List of parameters which should replace the place holders "{n}" (n is the index) in the found locale-specific string value.(optional)
				 * @return The value belonging to the key, if found; otherwise the key itself.
				 */
                getText(sKey: string, aArgs?: string[]): string;
				/**
				 * Checks whether the text for the given key can be found in the concrete
				 * resource bundle or not. Neither the custom resource bundles nor the
				 * fallback chain will be processed.
				 * 
				 * When requesting the resource bundle asynchronously this check must only be
				 * used after the resource bundle has been loaded.
				 * @param sKey 
				 * @return true if the text has been found in the concrete bundle
				 */
                hasText(sKey: string): boolean;
            }

            interface UriParameters {
            }
        }

        class Version {
			/**
			 * Returns a Version instance created from the given parameters.
			 * 
			 * This function can either be called as a constructor (using <code>new</code>) or as a normal function.
			 * It always returns an immutable Version instance.
			 * 
			 * The parts of the version number (major, minor, patch, suffix) can be provided in several ways:
			 * <ul>
			 * <li>Version("1.2.3-SNAPSHOT")    - as a dot-separated string. Any non-numerical char or a dot followed
			 *                                    by a non-numerical char starts the suffix portion. Any missing major,
			 *                                    minor or patch versions will be set to 0.</li>
			 * <li>Version(1,2,3,"-SNAPSHOT")   - as individual parameters. Major, minor and patch must be integer numbers
			 *                                    or empty, suffix must be a string not starting with digits.</li>
			 * <li>Version([1,2,3,"-SNAPSHOT"]) - as an array with the individual parts. The same type restrictions apply
			 *                                    as before.</li>
			 * <li>Version(otherVersion)        - as a Version instance (cast operation). Returns the given instance instead
			 *                                    of creating a new one.</li>
			 * </ul>
			 * 
			 * To keep the code size small, this implementation mainly validates the single string variant.
			 * All other variants are only validated to some degree. It is the responsibility of the caller to
			 * provide proper parts.
			 * @param vMajor the major part of the version (int) or any of the single
			 *        parameter variants explained above.
			 * @param iMinor the minor part of the version number
			 * @param iPatch the patch part of the version number
			 * @param sSuffix the suffix part of the version number
			 */
            constructor(vMajor: number | string | any[] | jQuery.sap.Version, iMinor: number, iPatch: number, sSuffix: string);
			/**
			 * Compares this version with a given one.
			 * 
			 * The version with which this version should be compared can be given as a <code>jQuery.sap.Version</code> instance,
			 * as a string (e.g. <code>v.compareto("1.4.5")</code>). Or major, minor, patch and suffix values can be given as
			 * separate parameters (e.g. <code>v.compareTo(1, 4, 5)</code>) or in an array (e.g. <code>v.compareTo([1, 4, 5])</code>).
			 * @return 0, if the given version is equal to this version, a negative value if the given other version is greater
			 *               and a positive value otherwise
			 */
            compareTo(): number;
			/**
			 * Returns the major version part of this version.
			 * @return the major version part of this version
			 */
            getMajor(): number;
			/**
			 * Returns the minor version part of this version.
			 * @return the minor version part of this version
			 */
            getMinor(): number;
			/**
			 * Returns the patch (or micro) version part of this version.
			 * @return the patch version part of this version
			 */
            getPatch(): number;
			/**
			 * Returns the version suffix of this version.
			 * @return the version suffix of this version
			 */
            getSuffix(): string;
			/**
			 * Checks whether this version is in the range of the given interval (start inclusive, end exclusive).
			 * 
			 * The boundaries against which this version should be checked can be given as  <code>jQuery.sap.Version</code>
			 * instances (e.g. <code>v.inRange(v1, v2)</code>), as strings (e.g. <code>v.inRange("1.4", "2.7")</code>)
			 * or as arrays (e.g. <code>v.inRange([1,4], [2,7])</code>).
			 * @param vMin the start of the range (inclusive)
			 * @param vMax the end of the range (exclusive)
			 * @return <code>true</code> if this version is greater or equal to <code>vMin</code> and smaller
			 *                   than <code>vMax</code>, <code>false</code> otherwise.
			 */
            inRange(vMin: string | any[] | Version, vMax: string | any[] | Version): boolean;
			/**
			 * Returns a string representation of this version.
			 * @return a string representation of this version.
			 */
            toString(): string;
        }
		/**
		 * List of DOM events that a UIArea automatically takes care of.
		 * 
		 * A control/element doesn't have to bind listeners for these events.
		 * It instead can implement an <code>on<i>event</i>(oEvent)</code> method
		 * for any of the following events that it wants to be notified about:
		 * 
		 * click, dblclick, contextmenu, focusin, focusout, keydown, keypress, keyup, mousedown, mouseout, mouseover,
		 * mouseup, select, selectstart, dragstart, dragenter, dragover, dragleave, dragend, drop, paste, cut, input,
		 * touchstart, touchend, touchmove, touchcancel, tap, swipe, swipeleft, swiperight, scrollstart, scrollstop
		 * 
		 * The mouse events and touch events are supported simultaneously on both desktop and mobile browsers. Do NOT
		 * create both onmouse* and ontouch* functions to avoid one event being handled twice on the same control.
		 */
        var ControlEvents: any;
		/**
		 * Returns a high resolution timestamp for measurements.
		 * The timestamp is based on 01/01/1970 00:00:00 as float with microsecond precision or
		 * with millisecond precision, if high resolution timestamps are not available.
		 * The fractional part of the timestamp represents fractions of a millisecond.
		 * Converting to a <code>Date</code> is possible using <code>new Date(jQuery.sap.now())</code>
		 */
        var now: any;
		/**
		 * Loads the given Javascript resource (URN) asynchronously via as script tag.
		 * Returns a promise that will be resolved when the load event is fired or reject
		 * when the error event is fired.
		 * 
		 * Note: execution errors of the script are not reported as 'error'.
		 * 
		 * This method is not a full implementation of require. It is intended only for
		 * loading "preload" files that do not define an own module / module value.
		 * 
		 * Functionality might be removed/renamed in future, so no code outside the
		 * sapui.core library must use it.
		 */
        // Resticted function _loadJSResourceAsync();
		/**
		 * Adds a whitelist entry for URL validation.
		 * @param protocol The protocol of the URL
		 * @param host The host of the URL
		 * @param port The port of the URL
		 * @param path the path of the URL
		 */
        function addUrlWhitelist(protocol: string, host: string, port: string, path: string);
		/**
		 * Calculate delta of old list and new list
		 * This partly implements the algorithm described in "A Technique for Isolating Differences Between Files"
		 * but instead of working with hashes, it does compare each entry of the old list with each entry of the new
		 * list, which causes terrible performane on large datasets.
		 * @param aOld Old Array
		 * @param aNew New Array
		 * @param fnCompare Function to compare list entries(optional)
		 * @param bUniqueEntries Whether entries are unique, so no duplicate entries exist(optional)
		 * @deprecated 
		 * @return List of changes
		 */
        function arrayDiff(aOld: any[], aNew: any[], fnCompare?: any, bUniqueEntries?: boolean): any[];
		/**
		 * Calculate delta of old list and new list
		 * This implements the algorithm described in "A Technique for Isolating Differences Between Files"
		 * (Commun. ACM, April 1978, Volume 21, Number 4, Pages 264-268)
		 * @param aOld Old Array
		 * @param aNew New Array
		 * @param fnSymbol Function to get entry symbol(optional)
		 * @return List of changes
		 */
        function arraySymbolDiff(aOld: any[], aNew: any[], fnSymbol?: any): any[];
		/**
		 * A simple assertion mechanism that logs a message when a given condition is not met.
		 * 
		 * <b>Note:</b> Calls to this method might be removed when the JavaScript code
		 *              is optimized during build. Therefore, callers should not rely on any side effects
		 *              of this method.
		 * @param bResult Result of the checked assertion
		 * @param vMessage Message that will be logged when the result is <code>false</code>. In case this is a function, the return value of the function will be displayed. This can be used to execute complex code only if the assertion fails.
		 */
        function assert(bResult: boolean, vMessage: string | any);
		/**
		 * Binds all events for listening with the given callback function.
		 * @param fnCallback Callback function
		 */
        function bindAnyEvent(fnCallback: any);
		/**
		 * Shortcut for jQuery("#" + id) with additionally the id being escaped properly.
		 * I.e.: returns the jQuery object for the DOM element with the given id
		 * 
		 * Use this method instead of jQuery(...) if you know the argument is exactly one id and
		 * the id is not known in advance because it is in a variable (as opposed to a string
		 * constant with known content).
		 * @param sId The id to search for and construct the jQuery object
		 * @param oContext the context DOM Element
		 * @return The jQuery object for the DOM element identified by the given sId
		 */
        function byId(sId: string, oContext: any): any;
		/**
		 * Transforms a hyphen separated string to an camel case string.
		 * @param sString Hyphen separated string
		 * @return The transformed string
		 */
        function camelCase(sString: string): string;
		/**
		 * Converts a character of the string to upper case.<br/>
		 * If no pos is defined as second parameter or pos is negative or greater than sString the first character will be
		 * converted into upper case. the first char position is 0.
		 * @param sString The string to be checked
		 * @param iPos the position of the character that will be uppercase
		 * @return The string with the firstletter in upper case
		 */
        function charToUpperCase(sString: string, iPos: number): string;
		/**
		 * Checks a given mouseover or mouseout event whether it is
		 * equivalent to a mouseenter or mousleave event regarding the given DOM reference.
		 * @param oEvent 
		 * @param oDomRef 
		 */
        function checkMouseEnterOrLeave(oEvent: Event, oDomRef: any);
		/**
		 * Stops the delayed call.
		 * 
		 * The function given when calling delayedCall is not called anymore.
		 * @param sDelayedCallId The id returned, when calling delayedCall
		 */
        function clearDelayedCall(sDelayedCallId: string);
		/**
		 * Stops the interval call.
		 * 
		 * The function given when calling intervalCall is not called anymore.
		 * @param sIntervalCallId The id returned, when calling intervalCall
		 */
        function clearIntervalCall(sIntervalCallId: string);
		/**
		 * Clears the whitelist for URL validation
		 */
        function clearUrlWhitelist();
		/**
		 * Returns whether oDomRefChild is oDomRefContainer or is contained in oDomRefContainer.
		 * 
		 * This is a browser-independent version of the .contains method of Internet Explorer.
		 * For compatibility reasons it returns true if oDomRefContainer and oDomRefChild are equal.
		 * 
		 * This method intentionally does not operate on the jQuery object, as the original jQuery.contains()
		 * method also does not do so.
		 * @param oDomRefContainer The container element
		 * @param oDomRefChild The child element (must not be a text node, must be an element)
		 * @return 'true' if oDomRefChild is contained in oDomRefContainer or oDomRefChild is oDomRefContainer
		 */
        function containsOrEquals(oDomRefContainer: any, oDomRefChild: any): boolean;
		/**
		 * Declares a module as existing.
		 * 
		 * By default, this function assumes that the module will create a JavaScript object
		 * with the same name as the module. As a convenience it ensures that the parent
		 * namespace for that object exists (by calling jQuery.sap.getObject).
		 * If such an object creation is not desired, <code>bCreateNamespace</code> must be set to false.
		 * @param sModuleName name of the module to be declared
		 *                           or in case of an object {modName: "...", type: "..."}
		 *                           where modName is the name of the module and the type
		 *                           could be a specific dot separated extension e.g.
		 *                           <code>{modName: "sapui.core.Dev", type: "view"}</code>
		 *                           loads <code>sap/ui/core/Dev.view.js</code> and
		 *                           registers as <code>sapui.core.Dev.view</code>
		 * @param bCreateNamespace whether to create the parent namespace(optional)
		 */
        function declare(sModuleName: string | any, bCreateNamespace?: boolean);
		/**
		 * Calls a method after a given delay and returns an id for this timer
		 * @param iDelay Delay time in milliseconds
		 * @param oObject Object from which the method should be called
		 * @param method function pointer or name of the method
		 * @param aParameters Method parameters(optional)
		 * @return Id which can be used to cancel the timer with clearDelayedCall
		 */
        function delayedCall(iDelay: number, oObject: any, method: string | any, aParameters?: any[]): string;
		/**
		 * For the given scroll position measured from the "beginning" of a container (the right edge in RTL mode)
		 * this method returns the scrollLeft value as understood by the current browser in RTL mode.
		 * This value is specific to the given DOM element, as the computation may involve its dimensions.
		 * 
		 * So when oDomRef should be scrolled 2px from the beginning, the number "2" must be given as iNormalizedScrollBegin
		 * and the result of this method (which may be a large or even negative number, depending on the browser) can then be set as
		 * oDomRef.scrollLeft to achieve the desired (cross-browser-consistent) scrolling position.
		 * Low values make the right part of the content visible, high values the left part.
		 * 
		 * This method does no scrolling on its own, it only calculates the value to set (so it can also be used for animations).
		 * 
		 * Only use this method in RTL mode, as the behavior in LTR mode is undefined and may change!
		 * @param iNormalizedScrollBegin The distance from the rightmost position to which the element should be scrolled
		 * @param oDomRef The DOM Element to which scrollLeft will be applied
		 * @return The scroll position that must be set for the DOM element
		 */
        function denormalizeScrollBeginRTL(iNormalizedScrollBegin: number, oDomRef: any): number;
		/**
		 * For the given scrollLeft value this method returns the scrollLeft value as understood by the current browser in RTL mode.
		 * This value is specific to the given DOM element, as the computation may involve its dimensions.
		 * 
		 * So when oDomRef should be scrolled 2px from the leftmost position, the number "2" must be given as iNormalizedScrollLeft
		 * and the result of this method (which may be a large or even negative number, depending on the browser) can then be set as
		 * oDomRef.scrollLeft to achieve the desired (cross-browser-consistent) scrolling position.
		 * 
		 * This method does no scrolling on its own, it only calculates the value to set (so it can also be used for animations).
		 * @param iNormalizedScrollLeft The distance from the leftmost position to which the element should be scrolled
		 * @param oDomRef The DOM Element to which scrollLeft will be applied
		 * @return The scroll position that must be set for the DOM element
		 */
        function denormalizeScrollLeftRTL(iNormalizedScrollLeft: number, oDomRef: any): number;
		/**
		 * Disable touch to mouse handling
		 */
        function disableTouchToMouseHandling();
		/**
		 * Shortcut for document.getElementById(), including a bug fix for older IE versions.
		 * @param sId The id of the DOM element to return
		 * @param oWindow The window (optional)(optional)
		 * @return The DOMNode identified by the given sId
		 */
        function domById(sId: string, oWindow?: any): any;
		/**
		 * Encode the string for inclusion into CSS string literals or identifiers
		 * @param sString The string to be escaped
		 * @return The escaped string
		 */
        function encodeCSS(sString: string): string;
		/**
		 * Encode the string for inclusion into HTML content/attribute
		 * @param sString The string to be escaped
		 * @return The escaped string
		 */
        function encodeHTML(sString: string): string;
		/**
		 * Encode the string for inclusion into a JS string literal
		 * @param sString The string to be escaped
		 * @return The escaped string
		 */
        function encodeJS(sString: string): string;
		/**
		 * Encode the string for inclusion into an URL parameter
		 * @param sString The string to be escaped
		 * @return The escaped string
		 */
        function encodeURL(sString: string): string;
		/**
		 * Encode a map of parameters into a combined URL parameter string
		 * @param mParams The map of parameters to encode
		 * @return The URL encoded parameters
		 */
        function encodeURLParameters(mParams: any): string;
		/**
		 * Encode the string for inclusion into XML content/attribute
		 * @param sString The string to be escaped
		 * @return The escaped string
		 */
        function encodeXML(sString: string): string;
		/**
		 * Checks whether a given sString ends with sEndString
		 * respecting the case of the strings.
		 * @param sString The string to be checked
		 * @param sEndString The end string to be searched
		 * @return True if sString ends with sEndString
		 */
        function endsWith(sString: string, sEndString: string): boolean;
		/**
		 * Checks whether a given sString ends with sEndString
		 * ignoring the case of the strings.
		 * @param sString the string to be checked
		 * @param sEndString the end string to be searched
		 * @return true if sString ends with sEndString
		 */
        function endsWithIgnoreCase(sString: string, sEndString: string): boolean;
		/**
		 * Compares the two given values for equality, especially takes care not to compare
		 * arrays and objects by reference, but compares their content.
		 * Note: function does not work with comparing XML objects
		 * @param a A value of any type
		 * @param b A value of any type
		 * @param maxDepth Maximum recursion depth(optional)
		 * @param contains Whether all existing properties in a are equal as in b(optional)
		 * @return Whether a and b are equal
		 */
        function equal(a: any, b: any, maxDepth?: number, contains?: boolean): boolean;
		/**
		 * Encode the string for inclusion into HTML content/attribute.
		 * Old name "escapeHTML" kept for backward compatibility
		 * @param sString The string to be escaped
		 * @deprecated Has been renamed, use {@link jQuery.sap.encodeHTML} instead.
		 * @return The escaped string
		 */
        function escapeHTML(sString: string): string;
		/**
		 * This function escapes the reserved letters in Regular Expression
		 * @param sString string to escape
		 * @return The escaped string
		 */
        function escapeRegExp(sString: string): string;
		/**
		 * Returns a new constructor function that creates objects with
		 * the given prototype.
		 * @param oPrototype Prototype to use for the new objects
		 * @return the newly created constructor function
		 */
        function factory(oPrototype: any): any;
		/**
		 * Calls focus() on the given DOM element, but catches and ignores any errors that occur when doing so.
		 * (i.e. IE8 throws an error when the DOM element is invisible or disabled)
		 * @param oDomRef The DOM element to focus (or null - in this case the method does nothing)
		 * @return Whether the focus() command was executed without an error
		 */
        function focus(oDomRef: any): boolean;
		/**
		 * Creates a string from a pattern by replacing placeholders with concrete values.
		 * 
		 * The syntax of the pattern is inspired by (but not fully equivalent to) the
		 * java.util.MessageFormat.
		 * 
		 * Placeholders have the form <code>{ integer }</code>, where any occurrence of
		 * <code>{0}</code> is replaced by the value with index 0 in <code>aValues</code>,
		 * <code>{1}</code> y the value with index 1 in <code>aValues</code> etc.
		 * 
		 * To avoid interpretation of curly braces as placeholders, any non-placeholder fragment
		 * of the pattern can be enclosed in single quotes. The surrounding single quotes will be
		 * omitted from the result. Single quotes that are not meant to escape a fragment and
		 * that should appear in the result, need to be doubled. In the result, only a single
		 * single quote will occur.
		 * 
		 * Example Pattern Strings:
		 * <pre>
		 *   jQuery.sap.formatMessage("Say {0}", ["Hello"]) -> "Say Hello"  // normal use case
		 *   jQuery.sap.formatMessage("Say '{0}'", ["Hello"]) -> "Say {0}"  // escaped placeholder
		 *   jQuery.sap.formatMessage("Say ''{0}''", ["Hello"]) -> "Say 'Hello'" // doubled single quote
		 *   jQuery.sap.formatMessage("Say '{0}'''", ["Hello"]) -> "Say {0}'" // doubled single quote in quoted fragment
		 * </pre>
		 * 
		 * In contrast to java.util.MessageFormat, format types or format styles are not supported.
		 * Everything after the argument index and up to the first closing curly brace is ignored.
		 * Nested placeholders (as supported by java.lang.MessageFormat for the format type choice)
		 * are not ignored but reported as a parse error.
		 * 
		 * This method throws an Error when the pattern syntax is not fulfilled (e.g. unbalanced curly
		 * braces, nested placeholders or a non-numerical argument index).
		 * 
		 * This method can also be used as a formatter within a binding. The first part of a composite binding
		 * will be used as pattern, the following parts as aValues. If there is only one value and this
		 * value is an array it will be handled like the default described above.
		 * @param sPattern A pattern string in the described syntax
		 * @param aValues The values to be used instead of the placeholders.(optional)
		 * @return The formatted result string
		 */
        function formatMessage(sPattern: string, aValues?: any[]): string;
		/**
		 * Returns the names of all declared modules.
		 * @return the names of all declared modules
		 */
        function getAllDeclaredModules(): string[];
		/**
		 * Constructs an URL to load the module with the given name and file type (suffix).
		 * 
		 * Searches the longest prefix of the given module name for which a registration
		 * exists (see {@link jQuery.sap.registerModulePath}) and replaces that prefix
		 * by the registered URL prefix.
		 * 
		 * The remainder of the module name is appended to the URL, replacing any dot with a slash.
		 * 
		 * Finally, the given suffix (typically a file name extension) is added (unconverted).
		 * 
		 * The returned name (without the suffix) doesn't end with a slash.
		 * @param sModuleName module name to detemrine the path for
		 * @param sSuffix suffix to be added to the resulting path
		 * @return calculated path (URL) to the given module
		 */
        function getModulePath(sModuleName: string, sSuffix: string): string;
		/**
		 * Returns a JavaScript object which is identified by a sequence of names.
		 * 
		 * A call to <code>getObject("a.b.C")</code> has essentially the same effect
		 * as accessing <code>window.a.b.C</code> but with the difference that missing
		 * intermediate objects (a or b in the example above) don't lead to an exception.
		 * 
		 * When the addressed object exists, it is simply returned. If it doesn't exists,
		 * the behavior depends on the value of the second, optional parameter
		 * <code>iNoCreates</code> (assuming 'n' to be the number of names in the name sequence):
		 * <ul>
		 * <li>NaN: if iNoCreates is not a number and the addressed object doesn't exist,
		 *          then <code>getObject()</code> returns <code>undefined</code>.
		 * <li>0 &lt; iNoCreates &lt; n: any non-existing intermediate object is created, except
		 *          the <i>last</i> <code>iNoCreates</code> ones.
		 * </ul>
		 * 
		 * Example:
		 * <pre>
		 *   getObject()            -- returns the context object (either param or window)
		 *   getObject("a.b.C")     -- will only try to get a.b.C and return undefined if not found.
		 *   getObject("a.b.C", 0)  -- will create a, b, and C in that order if they don't exists
		 *   getObject("a.b.c", 1)  -- will create a and b, but not C.
		 * </pre>
		 * 
		 * When a <code>oContext</code> is given, the search starts in that object.
		 * Otherwise it starts in the <code>window</code> object that this plugin
		 * has been created in.
		 * 
		 * Note: Although this method internally uses <code>object["key"]</code> to address object
		 *       properties, it does not support all possible characters in a name.
		 *       Especially the dot ('.') is not supported in the individual name segments,
		 *       as it is always interpreted as a name separator.
		 * @param sName a dot separated sequence of names that identify the required object
		 * @param iNoCreates number of objects (from the right) that should not be created(optional)
		 * @param oContext the context to execute the search in(optional)
		 * @return The value of the named object
		 */
        function getObject(sName: string, iNoCreates?: number, oContext?: any): any;
		/**
		 * Converts a UI5 module name to a unified resource name.
		 * 
		 * Used by View and Fragment APIs to convert a given module name into a unified resource name.
		 * When the <code>sSuffix</code> is not given, the suffix '.js' is added. This fits the most
		 * common use case of converting a module name to the Javascript resource that contains the
		 * module. Note that an empty <code>sSuffix</code> is not replaced by '.js'. This allows to
		 * convert UI5 module names to requireJS module names with a call to this method.
		 * @param sModuleName Module name as a dot separated name
		 * @param sSuffix Suffix to add to the final resource name(optional)
		 */
        // Resticted function getResourceName(sModuleName: string, sSuffix?: string);
		/**
		 * Determines the URL for a resource given its unified resource name.
		 * 
		 * Searches the longest prefix of the given resource name for which a registration
		 * exists (see {@link jQuery.sap.registerResourcePath}) and replaces that prefix
		 * by the registered URL prefix.
		 * 
		 * The remainder of the resource name is appended to the URL.
		 * 
		 * <b>Unified Resource Names</b>
		 * Several UI5 APIs use <i>Unified Resource Names (URNs)</i> as naming scheme for resources that
		 * they deal with (e.h. Javascript, CSS, JSON, XML, ...). URNs are similar to the path
		 * component of an URL:
		 * <ul>
		 * <li>they consist of a non-empty sequence of name segments</li>
		 * <li>segments are separated by a forward slash '/'</li>
		 * <li>name segments consist of URL path segment characters only. It is recommened to use only ASCII
		 * letters (upper or lower case), digits and the special characters '$', '_', '-', '.')</li>
		 * <li>the empty name segment is not supported</li>
		 * <li>names consisting of dots only, are reserved and must not be used for resources</li>
		 * <li>names are case sensitive although the underlying server might be case-insensitive</li>
		 * <li>the behavior with regard to URL encoded characters is not specified, %ddd notation should be avoided</li>
		 * <li>the meaning of a leading slash is undefined, but might be defined in future. It therefore should be avoided</li>
		 * </ul>
		 * 
		 * UI5 APIs that only deal with Javascript resources, use a slight variation of this scheme,
		 * where the extension '.js' is always omitted (see {@link sapui.define}, {@link sapui.require}).
		 * 
		 * 
		 * <b>Relationship to old Module Name Syntax</b>
		 * 
		 * Older UI5 APIs that deal with resources (like {@link jQuery.sap.registerModulePath},
		 * {@link jQuery.sap.require} and {@link jQuery.sap.declare}) used a dot-separated naming scheme
		 * (called 'module names') which was motivated by object names in the global namespace in
		 * Javascript.
		 * 
		 * The new URN scheme better matches the names of the corresponding resources (files) as stored
		 * in a server and the dot ('.') is no longer a forbidden character in a resource name. This finally
		 * allows to handle resources with different types (extensions) with the same API, not only JS files.
		 * 
		 * Last but not least does the URN scheme better match the naming conventions used by AMD loaders
		 * (like <code>requireJS</code>).
		 * @param sResourceName unified resource name of the resource
		 * @return URL to load the resource from
		 */
        function getResourcePath(sResourceName: string): string;
		/**
		 * Returns a new function that returns the given <code>oValue</code> (using its closure).
		 * 
		 * Avoids the need for a dedicated member for the value.
		 * 
		 * As closures don't come for free, this function should only be used when polluting
		 * the enclosing object is an absolute "must-not" (as it is the case in public base classes).
		 * @param oValue The value that the getter should return
		 * @return The new getter function
		 */
        function getter(oValue: any): any;
		/**
		 * Creates and returns a new instance of {@link jQuery.sap.util.UriParameters}.
		 * 
		 * Example for reading a single URI parameter (or the value of the first
		 * occurrence of the URI parameter):
		 * <pre>
		 * 	var sValue = jQuery.sap.getUriParameters().get("myUriParam");
		 * </pre>
		 * 
		 * Example for reading the values of the first of the URI parameter
		 * (with multiple occurrences):
		 * <pre>
		 * 	var aValues = jQuery.sap.getUriParameters().get("myUriParam", true);
		 * 	for(i in aValues){
		 * 	var sValue = aValues[i];
		 * 	}
		 * </pre>
		 * @param sUri Uri to determine the parameters for
		 * @return A new URI parameters instance
		 */
        function getUriParameters(sUri: string): sap.util.UriParameters;
		/**
		 * Gets the whitelist for URL validation.
		 * @return A copy of the whitelist
		 */
        function getUrlWhitelist(): any[];
		/**
		 * Executes an 'eval' for its arguments in the global context (without closure variables).
		 * 
		 * This is a synchronous replacement for <code>jQuery.globalEval</code> which in some
		 * browsers (e.g. FireFox) behaves asynchronously.
		 */
        function globalEval();
		/**
		 * Transforms a camel case string into a hyphen separated string.
		 * @param sString camel case string
		 * @return The transformed string
		 */
        function hyphen(sString: string): string;
		/**
		 * Includes the script (via &lt;script&gt;-tag) into the head for the
		 * specified <code>sUrl</code> and optional <code>sId</code>.
		 * @param vUrl the URL of the script to load or a configuration object
		 * @param sId id that should be used for the script tag(optional)
		 * @param fnLoadCallback callback function to get notified once the script has been loaded(optional)
		 * @param fnErrorCallback callback function to get notified once the script loading failed(optional)
		 * @return When using the configuration object a <code>Promise</code> will be returned. The
		 *            documentation for the <code>fnLoadCallback</code> applies to the <code>resolve</code>
		 *            handler of the <code>Promise</code> and the one for the <code>fnErrorCallback</code>
		 *            applies to the <code>reject</code> handler of the <code>Promise</code>.
		 */
        function includeScript(vUrl: string | any, sId?: string, fnLoadCallback?: any, fnErrorCallback?: any): void | any;
		/**
		 * Includes the specified stylesheet via a &lt;link&gt;-tag in the head of the current document. If there is call to
		 * <code>includeStylesheet</code> providing the sId of an already included stylesheet, the existing element will be
		 * replaced.
		 * @param vUrl the URL of the stylesheet to load or a configuration object
		 * @param sId id that should be used for the link tag(optional)
		 * @param fnLoadCallback callback function to get notified once the stylesheet has been loaded(optional)
		 * @param fnErrorCallback callback function to get notified once the stylesheet loading failed.
		 *            In case of usage in IE the error callback will also be executed if an empty stylesheet
		 *            is loaded. This is the only option how to determine in IE if the load was successful
		 *            or not since the native onerror callback for link elements doesn't work in IE. The IE
		 *            always calls the onload callback of the link element.
		 *            Another issue of the IE9 is that in case of loading too many stylesheets the eventing
		 *            is not working and therefore the error or load callback will not be triggered anymore.(optional)
		 * @return When using the configuration object a <code>Promise</code> will be returned. The
		 *            documentation for the <code>fnLoadCallback</code> applies to the <code>resolve</code>
		 *            handler of the <code>Promise</code> and the one for the <code>fnErrorCallback</code>
		 *            applies to the <code>reject</code> handler of the <code>Promise</code>.
		 */
        function includeStyleSheet(vUrl: string | any, sId?: string, fnLoadCallback?: any, fnErrorCallback?: any): void | any;
		/**
		 * Does some basic modifications to the HTML page that make it more suitable for mobile apps.
		 * Only the first call to this method is executed, subsequent calls are ignored. Note that this method is also called by the constructor of toplevel controls like sap.m.App, sap.m.SplitApp and sap.m.Shell.
		 * Exception: if no homeIcon was set, subsequent calls have the chance to set it.
		 * 
		 * The "options" parameter configures what exactly should be done.
		 * 
		 * It can have the following properties:
		 * <ul>
		 * <li>viewport: whether to set the viewport in a way that disables zooming (default: true)</li>
		 * <li>statusBar: the iOS status bar color, "default", "black" or "black-translucent" (default: "default")</li>
		 * <li>hideBrowser: whether the browser UI should be hidden as far as possible to make the app feel more native (default: true)</li>
		 * <li>preventScroll: whether native scrolling should be disabled in order to prevent the "rubber-band" effect where the whole window is moved (default: true)</li>
		 * <li>preventPhoneNumberDetection: whether Safari Mobile should be prevented from transforming any numbers that look like phone numbers into clickable links; this should be left as "true", otherwise it might break controls because Safari actually changes the DOM. This only affects all page content which is created after initMobile is called.</li>
		 * <li>rootId: the ID of the root element that should be made fullscreen; only used when hideBrowser is set (default: the document.body)</li>
		 * <li>useFullScreenHeight: a boolean that defines whether the height of the html root element should be set to 100%, which is required for other elements to cover the full height (default: true)</li>
		 * <li>homeIcon: deprecated since 1.12, use jQuery.sap.setIcons instead.
		 * </ul>
		 * @param options configures what exactly should be done(optional)
		 */
        function initMobile(options?: any);
		/**
		 * Calls a method after a given interval and returns an id for this interval.
		 * @param iInterval Interval time in milliseconds
		 * @param oObject Object from which the method should be called
		 * @param method function pointer or name of the method
		 * @param aParameters Method parameters(optional)
		 * @return Id which can be used to cancel the interval with clearIntervalCall
		 */
        function intervalCall(iInterval: number, oObject: any, method: string | any, aParameters?: any[]): string;
		/**
		 * Check whether a given module has been loaded / declared already.
		 * 
		 * Returns true as soon as a module has been required the first time, even when
		 * loading/executing it has not finished yet. So the main assertion of a
		 * return value of <code>true</code> is that the necessary actions have been taken
		 * to make the module available in the near future. It does not mean, that
		 * the content of the module is already available!
		 * 
		 * This fuzzy behavior is necessary to avoid multiple requests for the same module.
		 * As a consequence of the assertion above, a <i>preloaded</i> module does not
		 * count as <i>declared</i>. For preloaded modules, an explicit call to
		 * <code>jQuery.sap.require</code> is necessary to make them available.
		 * 
		 * If a caller wants to know whether a module needs to be loaded from the server,
		 * it can set <code>bIncludePreloaded</code> to true. Then, preloaded modules will
		 * be reported as 'declared' as well by this method.
		 * @param sModuleName name of the module to be checked
		 * @param bIncludePreloaded whether preloaded modules should be reported as declared.(optional)
		 * @return whether the module has been declared already
		 */
        function isDeclared(sModuleName: string, bIncludePreloaded?: boolean): boolean;
		/**
		 * Whether the given resource has been loaded (or preloaded).
		 * @param sResourceName Name of the resource to check, in unified resource name format
		 * @return Whether the resource has been loaded already
		 */
        // Resticted function isResourceLoaded(sResourceName: string): boolean;
		/**
		 * Returns a new object which has the given <code>oPrototype</code> as its prototype.
		 * 
		 * If several objects with the same prototype are to be created,
		 * {@link jQuery.sap.factory} should be used instead.
		 * @param oPrototype Prototype to use for the new object
		 * @return new object
		 */
        function newObject(oPrototype: any): any;
		/**
		 * Returns the window reference for a DomRef
		 * @param oDomRef The DOM reference
		 * @return Window reference
		 */
        function ownerWindow(oDomRef: any): any;
		/**
		 * Pads a string on the left side until is has the given length.<br/>
		 * @param sString The string to be padded
		 * @param sPadChar The char to use for the padding
		 * @param iLength the target length of the string
		 * @return The padded string
		 */
        function padLeft(sString: string, sPadChar: string, iLength: number): string;
		/**
		 * Pads a string on the right side until is has the given length.<br/>
		 * @param sString The string to be padded
		 * @param sPadChar The char to use for the padding
		 * @param iLength the target length of the string
		 * @return The padded string
		 */
        function padRight(sString: string, sPadChar: string, iLength: number): string;
		/**
		 * Parses the specified XML formatted string text using native parsing
		 * function of the browser and returns a valid XML document. If an error
		 * occurred during parsing a parse error object is returned as property (parseError) of the
		 * returned XML document object. The parse error object has the following error
		 * information parameters: errorCode, url, reason, srcText, line, linepos, filepos
		 * @param sXMLText the XML data as string
		 * @return the parsed XML document with a parseError property as described in
		 *         getParseError. An error occurred if the errorCode property of the parseError is != 0.
		 */
        function parseXML(sXMLText: string): any;
		/**
		 * Creates and returns a new instance of {@link jQuery.sap.util.Properties}.
		 * 
		 * If option 'url' is passed, immediately a load request for the given target is triggered.
		 * A property file that is loaded can contain comments with a leading ! or #.
		 * The loaded property list does not contain any comments.
		 * 
		 * <b>Example for loading a property file:</b>
		 * <pre>
		 *  jQuery.sap.properties({url : "../myProperty.properties"});
		 * </pre>
		 * 
		 * <b>Example for creating an empty properties instance:</b>
		 * <pre>
		 *  jQuery.sap.properties();
		 * </pre>
		 * 
		 * <b>Examples for getting and setting properties:</b>
		 * <pre>
		 * 	var oProperties = jQuery.sap.properties();
		 * 	oProperties.setProperty("KEY_1","Test Key");
		 * 	var sValue1 = oProperties.getProperty("KEY_1");
		 * 	var sValue2 = oProperties.getProperty("KEY_2","Default");
		 * </pre>
		 * @param mParams Parameters used to initialize the property list(optional)
		 * @return A new property list instance (synchronous case). In case of asynchronous loading an ECMA Script 6 Promise is returned.
		 */
        function properties(mParams?: any): sap.util.Properties | any;
		/**
		 * Registers an URL prefix for a module name prefix.
		 * 
		 * Before a module is loaded, the longest registered prefix of its module name
		 * is searched for and the associated URL prefix is used as a prefix for the request URL.
		 * The remainder of the module name is attached to the request URL by replacing
		 * dots ('.') with slashes ('/').
		 * 
		 * The registration and search operates on full name segments only. So when a prefix
		 * 
		 *    'sap.com'  ->  'http://www.sap.com/ui5/resources/'
		 * 
		 * is registered, then it will match the name
		 * 
		 *    'sap.com.Button'
		 * 
		 * but not
		 * 
		 *    'sap.commons.Button'
		 * 
		 * Note that the empty prefix ('') will always match and thus serves as a fallback for
		 * any search.
		 * 
		 * The prefix can either be given as string or as object which contains the url and a 'final' property.
		 * If 'final' is set to true, overwriting a module prefix is not possible anymore.
		 * @param sModuleName module name to register a path for
		 * @param vUrlPrefix path prefix to register, either a string literal or an object (e.g. {url : 'url/to/res', 'final': true})
		 */
        function registerModulePath(sModuleName: string, vUrlPrefix: string | any);
		/**
		 * Adds all resources from a preload bundle to the preload cache.
		 * 
		 * When a resource exists already in the cache, the new content is ignored.
		 * @param oData Preload bundle
		 */
        // Resticted function registerPreloadedModules(oData: any);
		/**
		 * Registers an URL prefix for a resource name prefix.
		 * 
		 * Before a resource is loaded, the longest registered prefix of its unified resource name
		 * is searched for and the associated URL prefix is used as a prefix for the request URL.
		 * The remainder of the resource name is attached to the request URL 1:1.
		 * 
		 * The registration and search operates on full name segments only. So when a prefix
		 * 
		 *    'sap/com'  ->  'http://www.sap.com/ui5/resources/'
		 * 
		 * is registered, then it will match the name
		 * 
		 *    'sap/com/Button'
		 * 
		 * but not
		 * 
		 *    'sap/commons/Button'
		 * 
		 * Note that the empty prefix ('') will always match and thus serves as a fallback for
		 * any search.
		 * 
		 * The url prefix can either be given as string or as object which contains the url and a final flag.
		 * If final is set to true, overwriting a resource name prefix is not possible anymore.
		 * @param sResourceNamePrefix in unified resource name syntax
		 * @param vUrlPrefix prefix to use instead of the sResourceNamePrefix, either a string literal or an object (e.g. {url : 'url/to/res', 'final': true})
		 */
        function registerResourcePath(sResourceNamePrefix: string, vUrlPrefix: string | any);
		/**
		 * Removes a whitelist entry for URL validation.
		 * @param iIndex index of entry
		 */
        function removeUrlWhitelist(iIndex: number);
		/**
		 * Ensures that the given module is loaded and executed before execution of the
		 * current script continues.
		 * 
		 * By issuing a call to this method, the caller declares a dependency to the listed modules.
		 * 
		 * Any required and not yet loaded script will be loaded and execute synchronously.
		 * Already loaded modules will be skipped.
		 * @param vModuleName one or more names of modules to be loaded
		 *                              or in case of an object {modName: "...", type: "..."}
		 *                              where modName is the name of the module and the type
		 *                              could be a specific dot separated extension e.g.
		 *                              <code>{modName: "sapui.core.Dev", type: "view"}</code>
		 *                              loads <code>sap/ui/core/Dev.view.js</code> and
		 *                              registers as <code>sapui.core.Dev.view</code>
		 */
        function require(vModuleName: string | any);
		/**
		 * Creates and returns a new instance of {@link jQuery.sap.util.ResourceBundle}
		 * using the given URL and locale to determine what to load.
		 * @param mParams Parameters used to initialize the resource bundle(optional)
		 * @return A new resource bundle instance or a ECMA Script 6 Promise (in asynchronous case)
		 */
        function resources(mParams?: any): sap.util.ResourceBundle | any;
		/**
		 * Returns the size (width of the vertical / height of the horizontal) native browser scrollbars.
		 * 
		 * This function must only be used when the DOM is ready.
		 * @param sClasses the CSS class that should be added to the test element.(optional)
		 * @param bForce force recalculation of size (e.g. when CSS was changed). When no classes are passed all calculated sizes are reset.(optional)
		 * @return JSON object with properties <code>width</code> and <code>height</code> (the values are of type number and are pixels).
		 */
        function scrollbarSize(sClasses?: string, bForce?: boolean): any;
		/**
		 * Serializes the specified XML document into a string representation.
		 * @param oXMLDocument the XML document object to be serialized as string
		 * @return the serialized XML string
		 */
        function serializeXML(oXMLDocument: string): any;
		/**
		 * Sets the bookmark icon for desktop browsers and the icon to be displayed on the home screen of iOS devices after the user does "add to home screen".
		 * 
		 * Only call this method once and call it early when the page is loading: browsers behave differently when the favicon is modified while the page is alive.
		 * Some update the displayed icon inside the browser but use an old icon for bookmarks.
		 * When a favicon is given, any other existing favicon in the document will be removed.
		 * When at least one home icon is given, all existing home icons will be removed and new home icon tags for all four resolutions will be created.
		 * 
		 * The home icons must be in PNG format and given in different sizes for iPad/iPhone with and without retina display.
		 * The favicon is used in the browser and for desktop shortcuts and should optimally be in ICO format:
		 * PNG does not seem to be supported by Internet Explorer and ICO files can contain different image sizes for different usage locations. E.g. a 16x16px version
		 * is used inside browsers.
		 * 
		 * All icons are given in an an object holding icon URLs and other settings. The properties of this object are:
		 * <ul>
		 * <li>phone: a 60x60 pixel version for non-retina iPhones</li>
		 * <li>tablet: a 76x76 pixel version for non-retina iPads</li>
		 * <li>phone@2: a 120x120 pixel version for retina iPhones</li>
		 * <li>tablet@2: a 152x152 pixel version for retina iPads</li>
		 * <li>precomposed: whether the home icons already have some glare effect (otherwise iOS will add it) (default: false)</li>
		 * <li>favicon: the ICO file to be used inside the browser and for desktop shortcuts</li>
		 * </ul>
		 * 
		 * One example is:
		 * <pre>
		 * {
		 *    'phone':'phone-icon_60x60.png',
		 *    'phone@2':'phone-retina_120x120.png',
		 *    'tablet':'tablet-icon_76x76.png',
		 *    'tablet@2':'tablet-retina_152x152.png',
		 *    'precomposed':true,
		 *    'favicon':'desktop.ico'
		 * }
		 * </pre>
		 * If one of the sizes is not given, the largest available alternative image will be used instead for this size.
		 * On Android these icons may or may not be used by the device. Apparently chances can be improved by using icons with glare effect, so the "precomposed" property can be set to "true". Some Android devices may also use the favicon for bookmarks instead of the home icons.</li>
		 * @param oIcons 
		 */
        function setIcons(oIcons: any);
		/**
		 * Sets the "apple-mobile-web-app-capable" and "mobile-web-app-capable" meta information which defines whether the application is loaded
		 * in full screen mode (browser address bar and toolbar are hidden) after the user does "add to home screen" on mobile devices. Currently
		 * this meta tag is only supported by iOS Safari and mobile Chrome from version 31.
		 * 
		 * If the application opens new tabs because of attachments, url and so on, setting this to false will let the user be able to go from the
		 * new tab back to the application tab after the application is added to home screen.
		 * 
		 * Note: this function only has effect when the application runs on iOS Safari and mobile Chrome from version 31.
		 * @param bValue whether the Application will be loaded in full screen mode after added to home screen from iOS Safari or mobile Chrome from version 31.
		 */
        function setMobileWebAppCapable(bValue: boolean);
		/**
		 * Sets an object property to a given value, where the property is
		 * identified by a sequence of names (path).
		 * 
		 * When a <code>oContext</code> is given, the path starts in that object.
		 * Otherwise it starts in the <code>window</code> object that this plugin
		 * has been created for.
		 * 
		 * Note: Although this method internally uses <code>object["key"]</code> to address object
		 *       properties, it does not support all possible characters in a name.
		 *       Especially the dot ('.') is not supported in the individual name segments,
		 *       as it is always interpreted as a name separator.
		 * @param sName a dot separated sequence of names that identify the property
		 * @param vValue value to be set, can have any type
		 * @param oContext the context to execute the search in(optional)
		 */
        function setObject(sName: string, vValue: any, oContext?: any);
		/**
		 * Convenience wrapper around <code>jQuery.ajax()</code> that avoids the need for callback functions when
		 * synchronous calls are made. If the setting <code>complexResult</code> is true (default), then the return value
		 * is an object with the following properties
		 * <ul>
		 * <li><code>success</code> boolean whether the call succeeded or not
		 * <li><code>data</code> any the data returned by the call. For dataType 'text' this is a string,
		 *                       for JSON it is an object, for XML it is a document. When the call failed, then data is not defined
		 * <li><code>status</code> string a textual status ('success,', 'error', 'timeout',...)
		 * <li><code>statusCode</code> string the HTTP status code of the request
		 * <li><code>error</code> Error an error object (exception) in case an error occurred
		 * <li><code>errorText</code> string an error message in case an error occurred
		 * </ul>
		 * 
		 * When <code>complexResult</code> is false, then in the case of success, only 'data' is returned, in case of an error the
		 * 'fallback' setting is returned (defaults to undefined).
		 * 
		 * Note that async=false is always enforced by this method.
		 * @param oOrigSettings the ajax() settings
		 * @return result, see above
		 */
        function sjax(oOrigSettings: string);
		/**
		 * Checks whether a given sString starts with sStartString
		 * respecting the case of the strings.
		 * @param sString The string to be checked
		 * @param sStartString The start string to be searched
		 * @return True if sString ends with sEndString
		 */
        function startsWith(sString: string, sStartString: string): boolean;
		/**
		 * Checks whether a given sString starts with sStartString
		 * ignoring the case of the strings.
		 * @param sString The string to be checked
		 * @param sStartString The start string to be searched
		 * @return True if sString ends with sEndString
		 */
        function startsWithIgnoreCase(sString: string, sStartString: string): boolean;
		/**
		 * Convenience wrapper for {@link jQuery.sap.sjax} that enforeces the Http method GET and defaults the
		 * data type of the result to 'text'.
		 * @param sUrl the URL
		 * @param data request parameters in the format accepted by jQuery.ajax()
		 * @param sDataType the type of data expected from the server, default is "text"(optional)
		 * @return result @see jQuery.sap.sjax
		 */
        function syncGet(sUrl: string, data: string | any, sDataType?: string);
		/**
		 * Convenience wrapper for {@link jQuery.sap.sjax} that enforces the Http method GET and the data type 'json'.
		 * If a fallback value is given, the function simply returns the response as an object or - if some error occurred -
		 * the fallback value. This is useful for applications that don't require detailed error diagnostics.
		 * 
		 * If applications need to know about occurring errors, they can either call <code>sjax()</code> directly
		 * or they can omit the fallback value (providing only two parameters to syncGetJSON()).
		 * They then receive the same complex result object as for the sjax() call.
		 * 
		 * Note that providing "undefined" or "null" as a fallback is different from omitting the fallback (complex result).
		 * @param sUrl the URL
		 * @param data request parameters in the format accepted by jQuery.ajax()
		 * @param fallback if set, only data is returned (and this fallback instead in case of errors); if unset, a result structure is returned(optional)
		 * @return result @see jQuery.sap.sjax
		 */
        function syncGetJSON(sUrl: string, data: string | any, fallback?: any);
		/**
		 * Convenience wrapper for {@link jQuery.sap.sjax} that enforces the Http method GET and the data type 'text'.
		 * If a fallback value is given, the function simply returns the response as a text or - if some error occurred -
		 * the fallback value. This is useful for applications that don't require detailed error diagnostics.
		 * 
		 * If applications need to know about occurring errors, they can either call <code>sjax()</code> directly
		 * or they can omit the fallback value (providing only two parameters to syncGetText()).
		 * They then receive the same complex result object as for the sjax() call.
		 * @param sUrl the URL
		 * @param data request parameters in the format accepted by jQuery.ajax()
		 * @param fallback if set, only data is returned (and this fallback instead in case of errors); if unset, a result structure is returned(optional)
		 * @return result @see jQuery.sap.sjax
		 */
        function syncGetText(sUrl: string, data: string | any, fallback?: string);
		/**
		 * Convenience wrapper for {@link jQuery.sap.sjax} that enforces the Http method POST and defaults the
		 * data type of the result to 'text'.
		 * @param sUrl the URL
		 * @param data request parameters in the format accepted by jQuery.ajax()
		 * @param sDataType the type of data expected from the server, default is "text"(optional)
		 * @return result @see jQuery.sap.sjax
		 */
        function syncPost(sUrl: string, data: string | any, sDataType?: string);
		/**
		 * Search ancestors of the given source DOM element for the specified CSS class name.
		 * If the class name is found, set it to the root DOM element of the target control.
		 * If the class name is not found, it is also removed from the target DOM element.
		 * @param sStyleClass CSS class name
		 * @param vSource jQuery object, control or an id of the source element.
		 * @param vDestination target jQuery object or a control.
		 * @return Target element
		 */
        function syncStyleClass(sStyleClass: string, vSource: any | sapui.core.Control | string, vDestination: any | sapui.core.Control): any;
		/**
		 * Creates and returns a pseudo-unique id.
		 * 
		 * No means for detection of overlap with already present or future UIDs.
		 * @return A pseudo-unique id.
		 */
        function uid(): string;
		/**
		 * Unbinds all events for listening with the given callback function.
		 * @param fnCallback Callback function
		 */
        function unbindAnyEvent(fnCallback: any);
		/**
		 * Sorts the given array in-place and removes any duplicates (identified by "===").
		 * 
		 * Use <code>jQuery.unique()</code> for arrays of DOMElements.
		 * @param a An Array of any type
		 * @return Same array as given (for chaining)
		 */
        function unique(a: any[]): any[];
		/**
		 * Validates an URL. Check if it's not a script or other security issue.
		 * 
		 * Split URL into components and check for allowed characters according to RFC3986:
		 * 
		 * <pre>
		 * pct-encoded   = "%" HEXDIG HEXDIG
		 * reserved      = gen-delims / sub-delims
		 * gen-delims    = ":" / "/" / "?" / "#" / "[" / "]" / "@"
		 * sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
		 *               / "*" / "+" / "," / ";" / "="
		 * unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
		 * pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
		 * 
		 * path          = path-abempty    ; begins with "/" or is empty
		 *               / path-absolute   ; begins with "/" but not "//"
		 *               / path-noscheme   ; begins with a non-colon segment
		 *               / path-rootless   ; begins with a segment
		 *               / path-empty      ; zero characters
		 * 
		 * path-abempty  = *( "/" segment )
		 * path-absolute = "/" [ segment-nz *( "/" segment ) ]
		 * path-noscheme = segment-nz-nc *( "/" segment )
		 * path-rootless = segment-nz *( "/" segment )
		 * path-empty    = 0<pchar>
		 * segment       = *pchar
		 * segment-nz    = 1*pchar
		 * segment-nz-nc = 1*( unreserved / pct-encoded / sub-delims / "@" )
		 *               ; non-zero-length segment without any colon ":"
		 * 
		 * query       = *( pchar / "/" / "?" )
		 * 
		 * fragment    = *( pchar / "/" / "?" )
		 * </pre>
		 * 
		 * When the URI uses the protocol 'mailto:', the address part is additionally checked
		 * against the most commonly used parts of RFC 6068:
		 * 
		 * <pre>
		 * mailtoURI    = "mailto:" [ to ] [ hfields ]
		 * to           = addr-spec *("," addr-spec )
		 * hfields      = "?" hfield *( "&" hfield )
		 * hfield       = hfname "=" hfvalue
		 * hfname       = *qchar
		 * hfvalue      = *qchar
		 * addr-spec    = local-part "@" domain
		 * local-part   = dot-atom-text              // not accepted: quoted-string
		 * domain       = dot-atom-text              // not accepted: "[" *dtext-no-obs "]"
		 * dtext-no-obs = %d33-90 / ; Printable US-ASCII
		 *                %d94-126  ; characters not including
		 *                          ; "[", "]", or "\"
		 * qchar        = unreserved / pct-encoded / some-delims
		 * some-delims  = "!" / "$" / "'" / "(" / ")" / "*"
		 *              / "+" / "," / ";" / ":" / "@"
		 * 
		 * Note:
		 * A number of characters that can appear in <addr-spec> MUST be
		 * percent-encoded.  These are the characters that cannot appear in
		 * a URI according to [STD66] as well as "%" (because it is used for
		 * percent-encoding) and all the characters in gen-delims except "@"
		 * and ":" (i.e., "/", "?", "#", "[", and "]").  Of the characters
		 * in sub-delims, at least the following also have to be percent-
		 * encoded: "&", ";", and "=".  Care has to be taken both when
		 * encoding as well as when decoding to make sure these operations
		 * are applied only once.
		 * 
		 * </pre>
		 * 
		 * When a whitelist has been configured using {@link .addUrlWhitelist addUrlWhitelist},
		 * any URL that passes the syntactic checks above, additionally will be tested against
		 * the content of the whitelist.
		 * @param sUrl 
		 * @return true if valid, false if not valid
		 */
        function validateUrl(sUrl: string);
    }

	/**
	 * Holds information about the browser's capabilities and quirks.
	 * This object is provided and documented by jQuery.
	 * But it is extended by SAPUI5 with detection for features not covered by jQuery. This documentation ONLY covers the detection properties added by UI5.
	 * For the standard detection properties, please refer to the jQuery documentation.
	 * 
	 * These properties added by UI5 are only available temporarily until jQuery adds feature detection on their own.
	 */
    namespace support {
		/**
		 * Whether the current browser supports (named) CSS animations
		 */
        var cssAnimations: boolean;
		/**
		 * Whether the current browser supports CSS gradients. Note that ANY support for CSS gradients leads to "true" here, no matter what the syntax is.
		 */
        var cssGradients: boolean;
		/**
		 * Whether the current browser supports (2D) CSS transforms
		 */
        var cssTransforms: boolean;
		/**
		 * Whether the current browser supports 3D CSS transforms
		 */
        var cssTransforms3d: boolean;
		/**
		 * Whether the current browser supports CSS transitions
		 */
        var cssTransitions: boolean;
		/**
		 * Whether the current browser supports the OLD CSS3 Flexible Box Layout directly or via vendor prefixes
		 */
        var flexBoxLayout: boolean;
		/**
		 * Whether the current browser supports only prefixed flexible layout properties
		 */
        var flexBoxPrefixed: boolean;
		/**
		 * Whether the current browser supports any kind of Flexible Box Layout directly or via vendor prefixes
		 */
        var hasFlexBoxSupport: boolean;
		/**
		 * Whether the current browser supports the IE10 CSS3 Flexible Box Layout directly or via vendor prefixes
		 */
        var ie10FlexBoxLayout: boolean;
		/**
		 * Whether the current browser supports the NEW CSS3 Flexible Box Layout directly or via vendor prefixes
		 */
        var newFlexBoxLayout: boolean;
    }

    class Event {
		/**
		 * Constructor for a jQuery.Event object.<br/>
		 */
        constructor();
		/**
		 * Returns OffsetX of Event. In jQuery there is a bug. In IE the value is in offsetX, in FF in layerX
		 * @return offsetX
		 */
        getOffsetX(): number;
		/**
		 * Returns OffsetY of Event. In jQuery there is a bug. in IE the value is in offsetY, in FF in layerY.
		 * @return offsetY
		 */
        getOffsetY(): number;
		/**
		 * Returns an array of names (as strings) identifying {@link jQuery.sap.PseudoEvents} that are fulfilled by this very Event instance.
		 * @return Array of names identifying {@link jQuery.sap.PseudoEvents} that are fulfilled by this very Event instance.
		 */
        getPseudoTypes(): string[];
		/**
		 * Checks whether this instance of {@link jQuery.Event} is of the given <code>sType</code> pseudo type.
		 * @param sType The name of the pseudo type this event should be checked for.
		 * @return <code>true</code> if this instance of jQuery.Event is of the given sType, <code>false</code> otherwise.
		 */
        isPseudoType(sType: string): boolean;
    }
	/**
	 * Adds the given ID reference to the aria-describedby attribute.
	 * @param sID The ID reference of an element
	 * @return <code>this</code> to allow method chaining.
	 */
    function addAriaDescribedBy(sID: string): any;
	/**
	 * Adds the given ID reference to the the aria-labelledby attribute.
	 * @param sID The ID reference of an element
	 * @return <code>this</code> to allow method chaining.
	 */
    function addAriaLabelledBy(sID: string): any;
	/**
	 * Extension function to the jQuery.fn which identifies SAPUI5 controls in the given jQuery context.
	 * @param idx optional parameter to return the control instance at the given idx's position in the array.(optional)
	 * @return depending on the given context and idx parameter an array of controls, an instance or null.
	 */
    function control(idx?: number): sapui.core.Control[] | sapui.core.Control;
	/**
	 * Sets or gets the position of the cursor in an element that supports cursor positioning
	 * @param iPos The cursor position to set (or no parameter to retrieve the cursor position)
	 * @return The cursor position (or the jQuery collection if the position has been set)
	 */
    function cursorPos(iPos: number): number | any;
	/**
	 * Disable HTML elements selection.
	 * @return <code>this</code> to allow method chaining.
	 */
    function disableSelection(): any;
	/**
	 * Enable HTML elements to get selected.
	 * @return <code>this</code> to allow method chaining.
	 */
    function enableSelection(): any;
	/**
	 * Returns the first focusable domRef in a given container (the first element of the collection)
	 * @return The domRef
	 */
    function firstFocusableDomRef(): any;
	/**
	 * Retrieve the selected text in the first element of the collection.
	 * note: This feature is only supported for input element’s type of text, search, url, tel and password.
	 * @return The selected text.
	 */
    function getSelectedText(): string;
	/**
	 * Returns true if the first element has a set tabindex
	 * @return If the first element has a set tabindex
	 */
    function hasTabIndex(): boolean;
	/**
	 * Returns the last focusable domRef in a given container
	 * @return The last domRef
	 */
    function lastFocusableDomRef(): any;
	/**
	 * Returns the outer HTML of the given HTML element
	 * @return outer HTML
	 */
    function outerHTML(): string;
	/**
	 * Gets the next parent DOM element with a given attribute and attribute value starting above the first given element
	 * @param sAttribute Name of the attribute
	 * @param sValue Value of the attribute (optional)
	 * @return null or the DOM reference
	 */
    function parentByAttribute(sAttribute: string, sValue: string): any;
	/**
	 * Returns a rectangle describing the current visual positioning of the first DOM object in the collection
	 * (or null if no element was given)
	 * @return An object with left, top, width and height
	 */
    function rect(): any;
	/**
	 * Returns whether a point described by X and Y is inside this Rectangle's boundaries
	 * @param iPosX 
	 * @param iPosY 
	 * @return Whether X and Y are inside this Rectangle's boundaries
	 */
    function rectContains(iPosX: number, iPosY: number): boolean;
	/**
	 * Removes the given ID reference from the aria-describedby attribute.
	 * @param sID The ID reference of an element
	 * @return <code>this</code> to allow method chaining.
	 */
    function removeAriaDescribedBy(sID: string): any;
	/**
	 * Removes the given ID reference from the aria-labelledby attribute.
	 * @param sID The ID reference of an element
	 * @return <code>this</code> to allow method chaining.
	 */
    function removeAriaLabelledBy(sID: string): any;
	/**
	 * 
	 * @param oRootControl 
	 */
    function root(oRootControl: any);
	/**
	 * Sets or returns the scrollLeft value of the first element in the given jQuery collection in right-to-left mode.
	 * Precondition: The element is rendered in RTL mode.
	 * 
	 * Reason for this method is that the major browsers use three different values for the same scroll position when in RTL mode.
	 * This method hides those differences and returns/applies the same value that would be returned in LTR mode: The distance in px
	 * how far the given container is scrolled away from the leftmost scroll position.
	 * 
	 * Returns "undefined" if no element and no iPos is given.
	 * @param iPos 
	 * @return The jQuery collection if iPos is given, otherwise the scroll position, counted from the leftmost position
	 */
    function scrollLeftRTL(iPos: number): any | number;
	/**
	 * Returns the MIRRORED scrollLeft value of the first element in the given jQuery collection in right-to-left mode.
	 * Precondition: The element is rendered in RTL mode.
	 * 
	 * Reason for this method is that the major browsers return three different values for the same scroll position when in RTL mode.
	 * This method hides those differences and returns the value that would be returned in LTR mode if the UI would be mirrored horizontally:
	 * The distance in px how far the given container is scrolled away from the rightmost scroll position.
	 * 
	 * Returns "undefined" if no element is given.
	 * @return The scroll position, counted from the rightmost position
	 */
    function scrollRightRTL(): number;
	/**
	 * Sets the text selection in the first element of the collection.
	 * note: This feature is only supported for input element’s type of text, search, url, tel and password.
	 * @param iStart Start position of the selection (inclusive)
	 * @param iEnd End position of the selection (exclusive)
	 * @return The jQuery collection
	 */
    function selectText(iStart: number, iEnd: number): any;
	/**
	 * 
	 * @param iIdx 
	 */
    function uiarea(iIdx: number);
}