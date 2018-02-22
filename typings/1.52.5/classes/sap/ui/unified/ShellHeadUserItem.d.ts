declare module 'sap/ui/unified/ShellHeadUserItem' {
    import { Event } from 'sap/ui/base/Event';
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IShellHeadUserItemSettings extends IElementSettings {
        username?: string;
        showPopupIndicator?: boolean;
        image?: sap.ui.core.URI;
    }

    /**
    
    */
    export class ShellHeadUserItem extends Element {

        /**
            * Constructor for a new ShellHeadUserItem.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IShellHeadUserItemSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.unified.ShellHeadUserItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.ShellHeadUserItem` itself.
         * 
         * Event is fired when the user presses the button.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.unified.ShellHeadUserItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.ShellHeadUserItem` itself.
         * 
         * Event is fired when the user presses the button.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.unified.ShellHeadUserItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.unified.ShellHeadUserItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getImage image}.
         * 
         * An image of the user, normally a URI to an image but also an icon from the sap.ui.core.IconPool is possible.
        */
        public getImage(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.unified.ShellHeadUserItem.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Gets current value of property {@link #getShowPopupIndicator showPopupIndicator}.
         * 
         * The user item is intended to be used for user settings. Normally these settings are done via a Menu or Dialog. If this property is set to true an indicator for such a popup mechanismn is shown in the item.
         * 
         * Default value is `true`.
        */
        public getShowPopupIndicator(): boolean;

        /**
            * Gets current value of property {@link #getUsername username}.
         * 
         * The name of the user.
         * 
         * Default value is ``.
        */
        public getUsername(): string;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getImage image}.
         * 
         * An image of the user, normally a URI to an image but also an icon from the sap.ui.core.IconPool is possible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setImage(sImage: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getShowPopupIndicator showPopupIndicator}.
         * 
         * The user item is intended to be used for user settings. Normally these settings are done via a Menu or Dialog. If this property is set to true an indicator for such a popup mechanismn is shown in the item.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowPopupIndicator(bShowPopupIndicator: boolean): this;

        /**
            * Sets a new value for property {@link #getUsername username}.
         * 
         * The name of the user.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setUsername(sUsername: string): this;

    }
}