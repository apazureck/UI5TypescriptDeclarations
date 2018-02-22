declare module 'sap/m/WizardStep' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IWizardStepSettings extends IControlSettings {
        title?: string;
        icon?: sap.ui.core.URI;
        validated?: boolean;
    }

    /**
    
    */
    export class WizardStep extends Control {

        /**
            * Constructor for a new WizardStep.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IWizardStepSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Adds some subsequentStep into the association {@link #getSubsequentSteps subsequentSteps}.
        */
        public addSubsequentStep(vSubsequentStep: sap.ui.core.ID | this): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:activate activate} event of this `sap.m.WizardStep`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.WizardStep` itself.
         * 
         * This event is fired on next step activation from the Wizard.
        */
        attachActivate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:activate activate} event of this `sap.m.WizardStep`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.WizardStep` itself.
         * 
         * This event is fired on next step activation from the Wizard.
        */
        attachActivate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:complete complete} event of this `sap.m.WizardStep`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.WizardStep` itself.
         * 
         * This event is fired after the user presses the Next button in the Wizard, or on `nextStep` method call from the app developer.
        */
        attachComplete<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:complete complete} event of this `sap.m.WizardStep`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.WizardStep` itself.
         * 
         * This event is fired after the user presses the Next button in the Wizard, or on `nextStep` method call from the app developer.
        */
        attachComplete<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:activate activate} event of this `sap.m.WizardStep`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachActivate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:complete complete} event of this `sap.m.WizardStep`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachComplete(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.WizardStep with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:activate activate} to attached listeners.
        */
        protected fireActivate(mParameters?: {}): this;

        /**
            * Fires event {@link #event:complete complete} to attached listeners.
        */
        protected fireComplete(mParameters?: {}): this;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content of the Wizard Step.
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Determines the icon that is displayed for this step. The icon is visualized in the progress navigation part of the Wizard control. ** Note: ** In order for the icon to be displayed, each step in the Wizard should have this property defined, otherwise the default numbering will be displayed.
         * 
         * Default value is ``.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.m.WizardStep.
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
            * ID of the element which is the current target of the association {@link #getNextStep nextStep}, or `null`.
        */
        public getNextStep(): sap.ui.core.ID;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getSubsequentSteps subsequentSteps}.
        */
        public getSubsequentSteps(): {};

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Determines the title of the step. The title is visualized in the Wizard control.
         * 
         * Default value is ``.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getValidated validated}.
         * 
         * Indicates whether or not the step is validated. When a step is validated a Next button is visualized in the Wizard control.
         * 
         * Default value is `true`.
        */
        public getValidated(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes all the controls in the association named {@link #getSubsequentSteps subsequentSteps}.
        */
        public removeAllSubsequentSteps(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Removes an subsequentStep from the association named {@link #getSubsequentSteps subsequentSteps}.
        */
        public removeSubsequentStep(vSubsequentStep: number | sap.ui.core.ID | this): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Determines the icon that is displayed for this step. The icon is visualized in the progress navigation part of the Wizard control. ** Note: ** In order for the icon to be displayed, each step in the Wizard should have this property defined, otherwise the default numbering will be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets the associated {@link #getNextStep nextStep}.
        */
        public setNextStep(oNextStep: sap.ui.core.ID | this): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Determines the title of the step. The title is visualized in the Wizard control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getValidated validated}.
         * 
         * Indicates whether or not the step is validated. When a step is validated a Next button is visualized in the Wizard control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setValidated(bValidated: boolean): this;

    }
}