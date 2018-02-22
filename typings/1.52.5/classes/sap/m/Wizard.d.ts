declare module 'sap/m/Wizard' {
    import { Event } from 'sap/ui/base/Event';
    import { WizardStep } from 'sap/m/WizardStep';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IWizardSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        showNextButton?: boolean;
        finishButtonText?: string;
        enableBranching?: boolean;
    }

    /**
    
    */
    export class Wizard extends Control {

        /**
            * Constructor for a new Wizard.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IWizardSettings);


        /**
            * Adds a new step to the Wizard.
        */
        public addStep(wizardStep: WizardStep): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:complete complete} event of this `sap.m.Wizard`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Wizard` itself.
         * 
         * The complete event is fired when the user clicks the finish button of the Wizard. The finish button is only available on the last step of the Wizard.
        */
        attachComplete<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:complete complete} event of this `sap.m.Wizard`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Wizard` itself.
         * 
         * The complete event is fired when the user clicks the finish button of the Wizard. The finish button is only available on the last step of the Wizard.
        */
        attachComplete<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:stepActivate stepActivate} event of this `sap.m.Wizard`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Wizard` itself.
         * 
         * The StepActivated event is fired every time a new step is activated.
        */
        attachStepActivate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The index of the activated step as a parameter. One-based. */
            index: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:stepActivate stepActivate} event of this `sap.m.Wizard`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Wizard` itself.
         * 
         * The StepActivated event is fired every time a new step is activated.
        */
        attachStepActivate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The index of the activated step as a parameter. One-based. */
            index: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all aggregated steps in the Wizard.
        */
        public destroySteps(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:complete complete} event of this `sap.m.Wizard`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachComplete(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:stepActivate stepActivate} event of this `sap.m.Wizard`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachStepActivate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Discards all progress done from the given step(incl.) to the end of the wizard. The verified state of the steps is returned to the initial provided.
        */
        public discardProgress(step: WizardStep): this;

        /**
            * Creates a new subclass of class sap.m.Wizard with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:complete complete} to attached listeners.
        */
        protected fireComplete(mParameters?: {}): this;

        /**
            * Fires event {@link #event:stepActivate stepActivate} to attached listeners.
        */
        protected fireStepActivate(mParameters?: { index?: number, }): this;

        /**
            * ID of the element which is the current target of the association {@link #getCurrentStep currentStep}, or `null`.
        */
        public getCurrentStep(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getEnableBranching enableBranching}.
         * 
         * Enables the branching functionality of the Wizard. Branching gives the developer the ability to define multiple routes a user is able to take based on the input in the current step. It is up to the developer to programatically check for what is the input in the current step and set a concrete next step amongs the available subsequent steps. Note: If this property is set to false, `next` and `subSequentSteps` associations of the WizardStep control are ignored.
         * 
         * Default value is `false`.
        */
        public getEnableBranching(): boolean;

        /**
            * Returns the finish button text which will be rendered.
        */
        public getFinishButtonText(): string;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Determines the height of the Wizard.
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.m.Wizard.
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
            * Returns the number of the last activated step in the Wizard.
        */
        public getProgress(): number;

        /**
            * Returns the last activated step in the Wizard.
        */
        public getProgressStep(): WizardStep;

        /**
            * Gets current value of property {@link #getShowNextButton showNextButton}.
         * 
         * Controls the visibility of the next button. The developers can choose to control the flow of the steps either through the API (with `nextStep` and `previousStep` methods) or let the user click the next button, and control it with `validateStep` or `invalidateStep` methods.
         * 
         * Default value is `true`.
        */
        public getShowNextButton(): boolean;

        /**
            * Gets content of aggregation {@link #getSteps steps}.
         * 
         * The wizard steps to be included in the content of the control.
        */
        public getSteps(): {};

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Determines the width of the Wizard.
         * 
         * Default value is `auto`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Goes to the given step. The step must already be activated and visible. You can't use this method on steps that haven't been reached yet.
        */
        public goToStep(step: WizardStep, focusFirstStepElement: boolean): this;

        /**
            * Checks for the provided `sap.m.WizardStep` in the aggregation {@link #getSteps steps}. and returns its index if found or -1 otherwise.
        */
        public indexOfStep(oStep: WizardStep): number;

        /**
            * Invalidates the given step.
        */
        public invalidateStep(step: WizardStep): this;

        /**
            * Validates the current step, and moves one step further.
        */
        public nextStep(): this;

        /**
            * Discards the current step and goes one step back.
        */
        public previousStep(): this;

        /**
            * Removes all steps from the Wizard.
        */
        public removeAllSteps(): {};

        /**
            * Sets association currentStep to the given step.
        */
        public setCurrentStep(stepId: WizardStep | string): this;

        /**
            * Sets a new value for property {@link #getEnableBranching enableBranching}.
         * 
         * Enables the branching functionality of the Wizard. Branching gives the developer the ability to define multiple routes a user is able to take based on the input in the current step. It is up to the developer to programatically check for what is the input in the current step and set a concrete next step amongs the available subsequent steps. Note: If this property is set to false, `next` and `subSequentSteps` associations of the WizardStep control are ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableBranching(bEnableBranching: boolean): this;

        /**
            * Sets the text for the finish button. By default it is "Review".
        */
        public setFinishButtonText(value: string): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Determines the height of the Wizard.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets the visiblity of the next button.
        */
        public setShowNextButton(value: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Determines the width of the Wizard.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `auto`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Validates the given step.
        */
        public validateStep(step: WizardStep): this;

    }
}