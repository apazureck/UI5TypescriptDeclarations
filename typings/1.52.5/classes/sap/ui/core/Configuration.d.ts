declare module 'sap/ui/core/Configuration' {
    import { FormatSettings } from 'sap/ui/core/Configuration';
    import { Locale } from 'sap/ui/core/Locale';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IConfigurationSettings extends IObjectSettings {
    }

    /**
    
    */
    export class Configuration extends Object {


        /**
            * Applies multiple changes to the configuration at once.
         * 
         * If the changed settings contain localization related settings like `language` or <ode>calendarType`, then only a single `localizationChanged` event will be fired. As the framework has to inform all existing components, elements, models etc. about localization changes, using `applySettings` can significantly reduce the overhead for multiple changes, esp. when they occur after the UI has been created already.
         * 
         * The `mSettings` can contain any property `* xyz *` for which a setter method `set* XYZ *` exists in the API of this class. Similarly, values for the {@link sap.ui.core.Configuration.FormatSettings format settings} API can be provided in a nested object with name `formatSettings`.
        */
        public applySettings(mSettings: {}): this;

        /**
            * Creates a new subclass of class sap.ui.core.Configuration with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns whether the accessibility mode is used or not.
        */
        public getAccessibility(): boolean;

        /**
            * Returns whether the animations are globally used.
        */
        public getAnimation(): boolean;

        /**
            * Returns the current animation mode.
        */
        public getAnimationMode(): sap.ui.core.Configuration.AnimationMode;

        /**
            * Base URLs to AppCacheBuster ETag-Index files.
        */
        public getAppCacheBuster(): {};

        /**
            * Object defining the callback hooks for the AppCacheBuster like e.g. `handleURL`, `onIndexLoad` or `onIndexLoaded`.
        */
        private getAppCacheBusterHooks(): {};

        /**
            * The loading mode (sync|async|batch) of the AppCacheBuster (sync is default)
        */
        public getAppCacheBusterMode(): string;

        /**
            * The name of the application to start or empty.
        */
        public getApplication(): string;

        /**
            * Returns whether the framework automatically adds automatically the ARIA role 'application' to the HTML body or not.
        */
        public getAutoAriaBodyRole(): boolean;

        /**
            * Returns the used compatibility version for the given feature.
        */
        public getCompatibilityVersion(sFeature: string): jQuery.sap.Version;

        /**
            * Return whether the controller code is deactivated. During design mode the.
        */
        private getControllerCodeDeactivated(): boolean;

        /**
            * Returns whether the page runs in debug mode.
        */
        public getDebug(): boolean;

        /**
            * Return whether the design mode is active or not.
        */
        private getDesignMode(): boolean;

        /**
            * Flag, whether the customizing is disabled or not.
        */
        private getDisableCustomizing(): boolean;

        /**
            * Returns whether the Fiori2Adaptation is on.
        */
        public getFiori2Adaptation(): boolean | string;

        /**
            * Returns the format locale string with language and region code. Falls back to language configuration, in case it has not been explicitly defined.
        */
        public getFormatLocale(): string;

        /**
            * Returns a configuration object that bundles the format settings of UI5.
        */
        public getFormatSettings(): FormatSettings;

        /**
            * frameOptions mode (allow/deny/trusted).
        */
        public getFrameOptions(): string;

        /**
            * Returns whether the UI5 control inspector is displayed. Has only an effect when the sap-ui-debug module has been loaded
        */
        public getInspect(): boolean;

        /**
            * Returns a string that identifies the current language.
         * 
         * The value returned by this methods in most cases corresponds to the exact value that has been configured by the user or application or that has been determined from the user agent settings. It has not been normalized, but has been validated against a relaxed version of {@link http://www.ietf.org/rfc/bcp/bcp47.txt BCP47}, allowing underscores ('_') instead of the suggested dashes ('-') and not taking the case of letters into account.
         * 
         * The exceptions mentioned above affect languages that have been specified via the URL parameter `sap-language`. That parameter by definition represents an SAP logon language code ('ABAP language'). Most but not all of these language codes are valid ISO639 two-letter languages and as such are valid BCP47 language tags. For better BCP47 compliance, the framework maps the following non-BCP47 SAP logon codes to a BCP47 substitute: `"ZH"  -->  "zh-Hans"         // script 'Hans' added to distinguish it from zh-Hant
         *    "ZF"  -->  "zh-Hant"         // ZF is not a valid ISO639 code, use the compliant language + script 'Hant'
         * 		 "    "1Q"  -->  "en-US-x-saptrc"  // special language code for supportability (tracing),
         *                                    represented as en-US with a private extension
         *    "2Q"  -->  "en-US-x-sappsd"  // special language code for supportability (pseudo translation),
         *                                    represented as en-US with a private extension`
         * 
         * For a normalized BCP47 tag, call {@link #getLanguageTag} or call {@link #getLocale} to get a {@link sap.ui.core.Locale Locale} object matching the language.
        */
        public getLanguage(): string;

        /**
            * Returns a BCP47-compliant language tag for the current language.
         * 
         * The return value of this method is especially useful for an HTTP `Accept` header.
        */
        public getLanguageTag(): string;

        /**
            * Returns a Locale object for the current language.
         * 
         * The Locale is derived from the {@link #getLanguage language} property.
        */
        public getLocale(): Locale;

        /**
            * Flag whether a Component should load the manifest first.
        */
        public getManifestFirst(): boolean;

        /**
            * Returns a metadata object for class sap.ui.core.Configuration.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns whether there should be an exception on any duplicate element IDs.
        */
        public getNoDuplicateIds(): boolean;

        /**
            * Returns whether the text origin information is collected.
        */
        public getOriginInfo(): boolean;

        /**
            * The name of the root component to start or empty.
        */
        public getRootComponent(): string;

        /**
            * Returns whether the page uses the RTL text direction.
         * 
         * If no mode has been explicitly set (neither `true` nor `false`), the mode is derived from the current language setting.
        */
        public getRTL(): boolean;

        /**
            * Returns an SAP logon language for the current language.
        */
        public getSAPLogonLanguage(): string;

        /**
            * Return whether the activation of the controller code is suppressed.
        */
        private getSuppressDeactivationOfControllerCode(): boolean;

        /**
            * Returns the theme name
        */
        public getTheme(): string;

        /**
            * Prefix to be used for automatically generated control IDs. Default is a double underscore "__".
        */
        public getUIDPrefix(): string;

        /**
            * Returns the version of the framework.
         * 
         * Similar to `sap.ui.version`.
        */
        public getVersion(): jQuery.sap.Version;

        /**
            * URL of the whitelist service.
        */
        public getWhitelistService(): string;

        /**
            * The mode for async XMLView processing. Potential values are: `sequential` Turned OFF by default
        */
        public getXMLProcessingMode(): string;

        /**
            * Sets the current animation mode.
         * 
         * Expects an animation mode as string and validates it. If a wrong animation mode was set, an error is thrown. If the mode is valid it is set, then the attributes `data-sap-ui-animation` and `data-sap-ui-animation-mode` of the HTML document root element are also updated. If the `animationMode` is `Configuration.AnimationMode.none` the old `animation` property is set to `false`, otherwise it is set to `true`.
        */
        public setAnimationMode(sAnimationMode: sap.ui.core.Configuration.AnimationMode): any;

        /**
            * Sets the new calendar type to be used from now on in locale dependent functionalities (for example, formatting, translation texts, etc.).
        */
        public setCalendarType(sCalendarType: sap.ui.core.CalendarType | any): this;

        /**
            * Sets a new format locale to be used from now on for retrieving locale specific formatters. Modifying this setting does not have an impact on the retrieval of translated texts!
         * 
         * Can either be set to a concrete value (a BCP47 or Java locale compliant language tag) or to `null`. When set to `null` (default value) then locale specific formatters are retrieved for the current language.
         * 
         * After changing the format locale, the framework tries to update localization specific parts of the UI. See the documentation of {@link #setLanguage} for details and restrictions.
         * 
         * ** Note **: When a format locale is set, it has higher priority than a number, date or time format defined with a call to `setLegacyNumberFormat`, `setLegacyDateFormat` or `setLegacyTimeFormat`.
         * 
         * ** Note **: See documentation of {@link #setLanguage} for restrictions.
        */
        public setFormatLocale(sFormatLocale: string | any): this;

        /**
            * Sets a new language to be used from now on for language/region dependent functionality (e.g. formatting, data types, translated texts, ...).
         * 
         * When the language can't be interpreted as a BCP47 language (using the relaxed syntax described in {@link #getLanguage}, an error will be thrown.
         * 
         * When the language has changed, the Core will fire its {@link sap.ui.core.Core#event:localizationChanged localizationChanged} event.
         * 
         * ###Restrictions
         * 
         * The framework ** does not ** guarantee that already created, language dependent objects will be updated by this call. It therefore remains best practice for applications to switch the language early, e.g. before any language dependent objects are created. Applications that need to support more dynamic changes of the language should listen to the `localizationChanged` event and adapt all language dependent objects that they use (e.g. by rebuilding their UI).
         * 
         * Currently, the framework notifies the following objects about a change of the localization settings before it fires the `localizationChanged` event:
         * 
         *  * date and number data types that are used in property bindings or composite bindings in existing Elements, Controls, UIAreas or Components * ResourceModels currently assigned to the Core, a UIArea, Component, Element or Control * Elements or Controls that implement the `onlocalizationChanged` hook (note the lowercase 'l' in onlocalizationChanged) 
         * 
         * It furthermore derives the RTL mode from the new language, if no explicit RTL mode has been set. If the RTL mode changes, the following additional actions will be taken:
         * 
         *  * the URLs of already loaded library theme files will be changed * the `dir` attribute of the page will be changed to reflect the new mode. * all UIAreas will be invalidated (which results in a rendering of the whole UI5 UI) 
         * 
         * This method does not accept SAP language codes for `sLanguage`. Instead, a second parameter `sSAPLogonLanguage` can be provided with an SAP language code corresponding to the given language. A given value will be returned by the {@link #getSAPLogonLanguage} method. It is up to the caller to provide a consistent pair of BCP47 language and SAP language code. The SAP language code is only checked to be of length 2 and must consist of letters or digits only.
         * 
         * ** Note **: When using this method please take note of and respect the above mentioned restrictions.
        */
        public setLanguage(sLanguage: string, sSAPLogonLanguage?: string): this;

        /**
            * Sets the character orientation mode to be used from now on.
         * 
         * Can either be set to a concrete value (true meaning right-to-left, false meaning left-to-right) or to `null` which means that the character orientation mode should be derived from the current language (incl. region) setting.
         * 
         * After changing the character orientation mode, the framework tries to update localization specific parts of the UI. See the documentation of {@link #setLanguage} for details and restrictions.
         * 
         * ** Note **: See documentation of {@link #setLanguage} for restrictions.
        */
        public setRTL(bRTL: boolean | any): this;

    }
}