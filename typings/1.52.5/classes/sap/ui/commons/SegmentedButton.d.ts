declare module 'sap/ui/commons/SegmentedButton' {
    import { Event } from 'sap/ui/base/Event';
    import { Button } from 'sap/ui/commons/Button';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ISegmentedButtonSettings extends IControlSettings {
        enabled?: boolean;
    }

    /**
    
    */
    export class SegmentedButton extends Control {

        /**
            * Constructor for a new SegmentedButton.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISegmentedButtonSettings);


        /**
            * Rerendering of the Buttons
        */
        protected _rerenderButtons(): any;

        /**
            * Adds some button to the aggregation {@link #getButtons buttons}.
        */
        public addButton(oButton: Button): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.SegmentedButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.SegmentedButton` itself.
         * 
         * Event fired when button selected
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of selected ToggleButton */
            selectedButtonId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.commons.SegmentedButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.SegmentedButton` itself.
         * 
         * Event fired when button selected
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of selected ToggleButton */
            selectedButtonId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
        */
        public destroyButtons(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.commons.SegmentedButton`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.SegmentedButton with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: { selectedButtonId?: string, }): this;

        /**
            * Gets content of aggregation {@link #getButtons buttons}.
         * 
         * Buttons
        */
        public getButtons(): {};

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * enabled
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Returns a metadata object for class sap.ui.commons.SegmentedButton.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * ID of the element which is the current target of the association {@link #getSelectedButton selectedButton}, or `null`.
        */
        public getSelectedButton(): sap.ui.core.ID;

        /**
            * Checks for the provided `sap.ui.commons.Button` in the aggregation {@link #getButtons buttons}. and returns its index if found or -1 otherwise.
        */
        public indexOfButton(oButton: Button): number;

        /**
            * Inserts a button into the aggregation {@link #getButtons buttons}.
        */
        public insertButton(oButton: Button, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getButtons buttons}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllButtons(): {};

        /**
            * Removes a button from the aggregation {@link #getButtons buttons}.
        */
        public removeButton(vButton: number | string | Button): Button;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * enabled
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets the associated {@link #getSelectedButton selectedButton}.
        */
        public setSelectedButton(oSelectedButton: sap.ui.core.ID | Button): this;

    }
}