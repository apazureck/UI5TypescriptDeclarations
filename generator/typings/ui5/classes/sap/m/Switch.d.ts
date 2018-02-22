declare module 'sap/m/Switch' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISwitchSettings extends IControlSettings {
        state?: boolean;
        customTextOn?: string;
        customTextOff?: string;
        enabled?: boolean;
        name?: string;
        type?: sap.m.SwitchType;
    }

    /**
    
    */
    export class Switch extends Control {

        /**
            * Constructor for a new Switch.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISwitchSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.Switch`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Switch` itself.
         * 
         * Triggered when a switch changes the state.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new state of the switch. */
            state: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.Switch`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Switch` itself.
         * 
         * Triggered when a switch changes the state.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new state of the switch. */
            state: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.m.Switch`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Switch with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { state?: boolean, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getCustomTextOff customTextOff}.
         * 
         * Custom text for the "OFF" state.
         * 
         * "OFF" translated to the current language is the default value. Beware that the given text will be cut off if available space is exceeded.
         * 
         * Default value is ``.
        */
        public getCustomTextOff(): string;

        /**
            * Gets current value of property {@link #getCustomTextOn customTextOn}.
         * 
         * Custom text for the "ON" state.
         * 
         * "ON" translated to the current language is the default value. Beware that the given text will be cut off if available space is exceeded.
         * 
         * Default value is ``.
        */
        public getCustomTextOn(): string;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Whether the switch is enabled.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Returns a metadata object for class sap.m.Switch.
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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getName name}.
         * 
         * The name to be used in the HTML code for the switch (e.g. for HTML forms that send data to the server via submit).
         * 
         * Default value is ``.
        */
        public getName(): string;

        /**
            * Gets current value of property {@link #getState state}.
         * 
         * A boolean value indicating whether the switch is on or off.
         * 
         * Default value is `false`.
        */
        public getState(): boolean;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Type of a Switch. Possibles values "Default", "AcceptReject".
         * 
         * Default value is `Default`.
        */
        public getType(): sap.m.SwitchType;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getCustomTextOff customTextOff}.
         * 
         * Custom text for the "OFF" state.
         * 
         * "OFF" translated to the current language is the default value. Beware that the given text will be cut off if available space is exceeded.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setCustomTextOff(sCustomTextOff: string): this;

        /**
            * Sets a new value for property {@link #getCustomTextOn customTextOn}.
         * 
         * Custom text for the "ON" state.
         * 
         * "ON" translated to the current language is the default value. Beware that the given text will be cut off if available space is exceeded.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setCustomTextOn(sCustomTextOn: string): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Whether the switch is enabled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * The name to be used in the HTML code for the switch (e.g. for HTML forms that send data to the server via submit).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setName(sName: string): this;

        /**
            * Change the switch state between on and off.
        */
        public setState(bState: boolean): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Type of a Switch. Possibles values "Default", "AcceptReject".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Default`.
        */
        public setType(sType: sap.m.SwitchType): this;

    }
}