declare module 'sap/m/MessagePage' {
    import { Event } from 'sap/ui/base/Event';
    import { Link } from 'sap/m/Link';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IMessagePageSettings extends IControlSettings {
        text?: string;
        description?: string;
        title?: string;
        showHeader?: boolean;
        showNavButton?: boolean;
        icon?: sap.ui.core.URI;
        iconAlt?: string;
        textDirection?: sap.ui.core.TextDirection;
    }

    /**
    
    */
    export class MessagePage extends Control {

        /**
            * Constructor for a new MessagePage.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IMessagePageSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navButtonPress navButtonPress} event of this `sap.m.MessagePage`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePage` itself.
         * 
         * This event is fired when Nav Button is pressed.
        */
        attachNavButtonPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navButtonPress navButtonPress} event of this `sap.m.MessagePage`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.MessagePage` itself.
         * 
         * This event is fired when Nav Button is pressed.
        */
        attachNavButtonPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Destroys the customDescription in the aggregation {@link #getCustomDescription customDescription}.
        */
        public destroyCustomDescription(): this;

        /**
            * Destroys the customText in the aggregation {@link #getCustomText customText}.
        */
        public destroyCustomText(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:navButtonPress navButtonPress} event of this `sap.m.MessagePage`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachNavButtonPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.MessagePage with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:navButtonPress navButtonPress} to attached listeners.
        */
        protected fireNavButtonPress(mParameters?: {}): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets content of aggregation {@link #getCustomDescription customDescription}.
         * 
         * The (optional) custom description control of this page. Use this aggregation when the "description" (sap.m.Text) control needs to be replaced with an sap.m.Link control. "description" and "textDirection" setters can be used for this aggregation.
        */
        public getCustomDescription(): Link;

        /**
            * Gets content of aggregation {@link #getCustomText customText}.
         * 
         * The (optional) custom Text control of this page. Use this aggregation when the "text" (sap.m.Text) control needs to be replaced with an sap.m.Link control. "text" and "textDirection" setters can be used for this aggregation.
        */
        public getCustomText(): Link;

        /**
            * Gets current value of property {@link #getDescription description}.
         * 
         * Determines the detailed description that shows additional information on the MessagePage.
         * 
         * Default value is `Check the filter settings.`.
        */
        public getDescription(): string;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Determines the icon displayed on the MessagePage.
         * 
         * Default value is `sap-icon://documents`.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconAlt iconAlt}.
         * 
         * Defines the alt attribute of the icon displayed on the `MessagePage`.
        */
        public getIconAlt(): string;

        /**
            * Returns a metadata object for class sap.m.MessagePage.
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
            * Gets current value of property {@link #getShowHeader showHeader}.
         * 
         * Determines the visibility of the MessagePage header. Can be used to hide the header of the MessagePage when it's embedded in another page.
         * 
         * Default value is `true`.
        */
        public getShowHeader(): boolean;

        /**
            * Gets current value of property {@link #getShowNavButton showNavButton}.
         * 
         * Determines the visibility of the navigation button in MessagePage header.
         * 
         * Default value is `false`.
        */
        public getShowNavButton(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Determines the main text displayed on the MessagePage.
         * 
         * Default value is `No matching items found.`.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * Determines the element's text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Determines the title in the header of MessagePage.
        */
        public getTitle(): string;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets the aggregated {@link #getCustomDescription customDescription}.
        */
        public setCustomDescription(oCustomDescription: Link): this;

        /**
            * Sets the aggregated {@link #getCustomText customText}.
        */
        public setCustomText(oCustomText: Link): this;

        /**
            * Sets a new value for property {@link #getDescription description}.
         * 
         * Determines the detailed description that shows additional information on the MessagePage.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Check the filter settings.`.
        */
        public setDescription(sDescription: string): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Determines the icon displayed on the MessagePage.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `sap-icon://documents`.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconAlt iconAlt}.
         * 
         * Defines the alt attribute of the icon displayed on the `MessagePage`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconAlt(sIconAlt: string): this;

        /**
            * Sets a new value for property {@link #getShowHeader showHeader}.
         * 
         * Determines the visibility of the MessagePage header. Can be used to hide the header of the MessagePage when it's embedded in another page.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowHeader(bShowHeader: boolean): this;

        /**
            * Sets a new value for property {@link #getShowNavButton showNavButton}.
         * 
         * Determines the visibility of the navigation button in MessagePage header.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowNavButton(bShowNavButton: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Determines the main text displayed on the MessagePage.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `No matching items found.`.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * Determines the element's text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Determines the title in the header of MessagePage.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

    }
}