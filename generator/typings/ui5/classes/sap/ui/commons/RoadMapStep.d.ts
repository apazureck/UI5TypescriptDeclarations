declare module 'sap/ui/commons/RoadMapStep' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IRoadMapStepSettings extends IElementSettings {
        label?: string;
        enabled?: boolean;
        expanded?: boolean;
        visible?: boolean;
    }

    /**
    
    */
    export class RoadMapStep extends Element {

        /**
            * Constructor for a new RoadMapStep.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IRoadMapStepSettings);


        /**
            * Adds some subStep to the aggregation {@link #getSubSteps subSteps}.
        */
        public addSubStep(oSubStep: this): this;

        /**
            * Destroys all the subSteps in the aggregation {@link #getSubSteps subSteps}.
        */
        public destroySubSteps(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.RoadMapStep with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Specifies whether the user shall be allowed to click a step, or not
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getExpanded expanded}.
         * 
         * This property is only relevant when using sub steps.
         * 
         * Default value is `false`.
        */
        public getExpanded(): boolean;

        /**
            * Gets current value of property {@link #getLabel label}.
         * 
         * Label of the step
        */
        public getLabel(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.RoadMapStep.
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
            * Gets content of aggregation {@link #getSubSteps subSteps}.
         * 
         * Sub steps for the current step. Will be displayed only in the case that the step is expanded. Otherwise, special arrows show the availability of sub steps. One level of sub steps supported.
        */
        public getSubSteps(): {};

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Step is visible
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Checks for the provided `sap.ui.commons.RoadMapStep` in the aggregation {@link #getSubSteps subSteps}. and returns its index if found or -1 otherwise.
        */
        public indexOfSubStep(oSubStep: this): number;

        /**
            * Inserts a subStep into the aggregation {@link #getSubSteps subSteps}.
        */
        public insertSubStep(oSubStep: this, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getSubSteps subSteps}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSubSteps(): {};

        /**
            * Removes a subStep from the aggregation {@link #getSubSteps subSteps}.
        */
        public removeSubStep(vSubStep: number | string | this): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Specifies whether the user shall be allowed to click a step, or not
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getExpanded expanded}.
         * 
         * This property is only relevant when using sub steps.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setExpanded(bExpanded: boolean): this;

        /**
            * Sets a new value for property {@link #getLabel label}.
         * 
         * Label of the step
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setLabel(sLabel: string): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Step is visible
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }
}