declare module 'sap/m/semantic/SemanticPage' {
    import { Event } from 'sap/ui/base/Event';
    import { Button } from 'sap/m/Button';
    import { PageAccessibleLandmarkInfo } from 'sap/m/PageAccessibleLandmarkInfo';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISemanticPageSettings extends IControlSettings {
        title?: string;
        titleLevel?: sap.ui.core.TitleLevel;
        showNavButton?: boolean;
        showSubHeader?: boolean;
        enableScrolling?: boolean;
        showFooter?: boolean;
        floatingFooter?: boolean;
        semanticRuleSet?: sap.m.semantic.SemanticRuleSetType;
        backgroundDesign?: sap.m.PageBackgroundDesign;
    }

    /**
    
    */
    export class SemanticPage extends Control {

        /**
            * Constructor for a new `SemanticPage`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISemanticPageSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Adds some customFooterContent to the aggregation {@link #getCustomFooterContent customFooterContent}.
        */
        public addCustomFooterContent(oCustomFooterContent: Button): this;

        /**
            * Adds some customHeaderContent to the aggregation {@link #getCustomHeaderContent customHeaderContent}.
        */
        public addCustomHeaderContent(oCustomHeaderContent: Button): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navButtonPress navButtonPress} event of this `sap.m.semantic.SemanticPage`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.semantic.SemanticPage` itself.
         * 
         * See {@link sap.m.Page#navButtonPress}
        */
        attachNavButtonPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navButtonPress navButtonPress} event of this `sap.m.semantic.SemanticPage`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.semantic.SemanticPage` itself.
         * 
         * See {@link sap.m.Page#navButtonPress}
        */
        attachNavButtonPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys all the customFooterContent in the aggregation {@link #getCustomFooterContent customFooterContent}.
        */
        public destroyCustomFooterContent(): this;

        /**
            * Destroys all the customHeaderContent in the aggregation {@link #getCustomHeaderContent customHeaderContent}.
        */
        public destroyCustomHeaderContent(): this;

        /**
            * Destroys the landmarkInfo in the aggregation {@link #getLandmarkInfo landmarkInfo}.
        */
        public destroyLandmarkInfo(): this;

        /**
            * Destroys the subHeader in the aggregation {@link #getSubHeader subHeader}.
        */
        public destroySubHeader(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:navButtonPress navButtonPress} event of this `sap.m.semantic.SemanticPage`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachNavButtonPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.semantic.SemanticPage with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:navButtonPress navButtonPress} to attached listeners.
        */
        protected fireNavButtonPress(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Determines the backgound color of the page. For more information, see {@link sap.m.Page#backgroundDesign}.
         * 
         * Default value is `Standard`.
        */
        public getBackgroundDesign(): sap.m.PageBackgroundDesign;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * See {@link sap.m.Page#content}
        */
        public getContent(): {};

        /**
            * Gets content of aggregation {@link #getCustomFooterContent customFooterContent}.
         * 
         * Custom footer buttons
        */
        public getCustomFooterContent(): {};

        /**
            * Gets content of aggregation {@link #getCustomHeaderContent customHeaderContent}.
         * 
         * Custom header buttons
        */
        public getCustomHeaderContent(): {};

        /**
            * Gets current value of property {@link #getEnableScrolling enableScrolling}.
         * 
         * See {@link sap.m.Page#enableScrolling}
         * 
         * Default value is `true`.
        */
        public getEnableScrolling(): boolean;

        /**
            * Gets current value of property {@link #getFloatingFooter floatingFooter}.
         * 
         * Determines whether the floating footer behavior is enabled. If set to `true`, the content is visible when it's underneath the footer.
         * 
         * Default value is `false`.
        */
        public getFloatingFooter(): boolean;

        /**
            * Gets content of aggregation {@link #getLandmarkInfo landmarkInfo}.
         * 
         * Accessible landmark settings to be applied to the containers of the `sap.m.Page` control.
         * 
         * If not set, no landmarks will be written.
        */
        public getLandmarkInfo(): PageAccessibleLandmarkInfo;

        /**
            * Returns a metadata object for class sap.m.semantic.SemanticPage.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Gets current value of property {@link #getSemanticRuleSet semanticRuleSet}.
         * 
         * Declares the type of semantic ruleset that will govern the styling and positioning of semantic content.
         * 
         * Default value is `Classic`.
        */
        public getSemanticRuleSet(): sap.m.semantic.SemanticRuleSetType;

        /**
            * Gets current value of property {@link #getShowFooter showFooter}.
         * 
         * Hides or shows the page footer
         * 
         * Default value is `true`.
        */
        public getShowFooter(): boolean;

        /**
            * Gets current value of property {@link #getShowNavButton showNavButton}.
         * 
         * See {@link sap.m.Page#showNavButton}
         * 
         * Default value is `false`.
        */
        public getShowNavButton(): boolean;

        /**
            * Gets current value of property {@link #getShowSubHeader showSubHeader}.
         * 
         * See {@link sap.m.Page#showSubHeader}
         * 
         * Default value is `true`.
        */
        public getShowSubHeader(): boolean;

        /**
            * Gets content of aggregation {@link #getSubHeader subHeader}.
         * 
         * See {@link sap.m.Page#subHeader}
        */
        public getSubHeader(): sap.m.IBar;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * See {@link sap.m.Page#title}
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getTitleLevel titleLevel}.
         * 
         * See {@link sap.m.Page#titleLevel}
         * 
         * Default value is `Auto`.
        */
        public getTitleLevel(): sap.ui.core.TitleLevel;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Checks for the provided `sap.m.Button` in the aggregation {@link #getCustomFooterContent customFooterContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfCustomFooterContent(oCustomFooterContent: Button): number;

        /**
            * Checks for the provided `sap.m.Button` in the aggregation {@link #getCustomHeaderContent customHeaderContent}. and returns its index if found or -1 otherwise.
        */
        public indexOfCustomHeaderContent(oCustomHeaderContent: Button): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Inserts a customFooterContent into the aggregation {@link #getCustomFooterContent customFooterContent}.
        */
        public insertCustomFooterContent(oCustomFooterContent: Button, iIndex: number): this;

        /**
            * Inserts a customHeaderContent into the aggregation {@link #getCustomHeaderContent customHeaderContent}.
        */
        public insertCustomHeaderContent(oCustomHeaderContent: Button, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getCustomFooterContent customFooterContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllCustomFooterContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getCustomHeaderContent customHeaderContent}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllCustomHeaderContent(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Removes a customFooterContent from the aggregation {@link #getCustomFooterContent customFooterContent}.
        */
        public removeCustomFooterContent(vCustomFooterContent: number | string | Button): Button;

        /**
            * Removes a customHeaderContent from the aggregation {@link #getCustomHeaderContent customHeaderContent}.
        */
        public removeCustomHeaderContent(vCustomHeaderContent: number | string | Button): Button;

        /**
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Determines the backgound color of the page. For more information, see {@link sap.m.Page#backgroundDesign}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setBackgroundDesign(sBackgroundDesign: sap.m.PageBackgroundDesign): this;

        /**
            * Sets a new value for property {@link #getEnableScrolling enableScrolling}.
         * 
         * See {@link sap.m.Page#enableScrolling}
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableScrolling(bEnableScrolling: boolean): this;

        /**
            * Sets a new value for property {@link #getFloatingFooter floatingFooter}.
         * 
         * Determines whether the floating footer behavior is enabled. If set to `true`, the content is visible when it's underneath the footer.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFloatingFooter(bFloatingFooter: boolean): this;

        /**
            * Sets the aggregated {@link #getLandmarkInfo landmarkInfo}.
        */
        public setLandmarkInfo(oLandmarkInfo: PageAccessibleLandmarkInfo): this;

        /**
            * Sets a new value for property {@link #getSemanticRuleSet semanticRuleSet}.
         * 
         * Declares the type of semantic ruleset that will govern the styling and positioning of semantic content.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Classic`.
        */
        public setSemanticRuleSet(sSemanticRuleSet: sap.m.semantic.SemanticRuleSetType): this;

        /**
            * Sets a new value for property {@link #getShowFooter showFooter}.
         * 
         * Hides or shows the page footer
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowFooter(bShowFooter: boolean): this;

        /**
            * Sets a new value for property {@link #getShowNavButton showNavButton}.
         * 
         * See {@link sap.m.Page#showNavButton}
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowNavButton(bShowNavButton: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSubHeader showSubHeader}.
         * 
         * See {@link sap.m.Page#showSubHeader}
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowSubHeader(bShowSubHeader: boolean): this;

        /**
            * Sets the aggregated {@link #getSubHeader subHeader}.
        */
        public setSubHeader(oSubHeader: sap.m.IBar): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * See {@link sap.m.Page#title}
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getTitleLevel titleLevel}.
         * 
         * See {@link sap.m.Page#titleLevel}
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setTitleLevel(sTitleLevel: sap.ui.core.TitleLevel): this;

    }
}