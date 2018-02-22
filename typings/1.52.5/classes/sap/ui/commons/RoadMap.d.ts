declare module 'sap/ui/commons/RoadMap' {
    import { Event } from 'sap/ui/base/Event';
    import { RoadMapStep } from 'sap/ui/commons/RoadMapStep';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IRoadMapSettings extends IControlSettings {
        numberOfVisibleSteps?: number;
        firstVisibleStep?: string;
        selectedStep?: string;
        width?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class RoadMap extends Control {

        /**
            * Constructor for a new RoadMap.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IRoadMapSettings);


        /**
            * Adds some step to the aggregation {@link #getSteps steps}.
        */
        public addStep(oStep: RoadMapStep): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:stepExpanded stepExpanded} event of this `sap.ui.commons.RoadMap`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RoadMap` itself.
         * 
         * Event is fired when a given step is expanded or collapsed by user.
        */
        attachStepExpanded<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ID of the expanded/collapsed step */
            stepId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:stepExpanded stepExpanded} event of this `sap.ui.commons.RoadMap`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RoadMap` itself.
         * 
         * Event is fired when a given step is expanded or collapsed by user.
        */
        attachStepExpanded<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ID of the expanded/collapsed step */
            stepId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:stepSelected stepSelected} event of this `sap.ui.commons.RoadMap`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RoadMap` itself.
         * 
         * Event is fired when the user selects a step.
        */
        attachStepSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ID of the selected step */
            stepId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:stepSelected stepSelected} event of this `sap.ui.commons.RoadMap`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.RoadMap` itself.
         * 
         * Event is fired when the user selects a step.
        */
        attachStepSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ID of the selected step */
            stepId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the steps in the aggregation {@link #getSteps steps}.
        */
        public destroySteps(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:stepExpanded stepExpanded} event of this `sap.ui.commons.RoadMap`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachStepExpanded(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:stepSelected stepSelected} event of this `sap.ui.commons.RoadMap`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachStepSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.RoadMap with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:stepExpanded stepExpanded} to attached listeners.
        */
        protected fireStepExpanded(mParameters?: { stepId?: string, }): this;

        /**
            * Fires event {@link #event:stepSelected stepSelected} to attached listeners.
        */
        protected fireStepSelected(mParameters?: { stepId?: string, }): this;

        /**
            * Gets current value of property {@link #getFirstVisibleStep firstVisibleStep}.
         * 
         * ID of the first step to be displayed
        */
        public getFirstVisibleStep(): string;

        /**
            * Returns a metadata object for class sap.ui.commons.RoadMap.
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
            * Gets current value of property {@link #getNumberOfVisibleSteps numberOfVisibleSteps}.
         * 
         * Total number of steps to be displayed at once
        */
        public getNumberOfVisibleSteps(): number;

        /**
            * Gets current value of property {@link #getSelectedStep selectedStep}.
         * 
         * ID of the step which is currently selected
        */
        public getSelectedStep(): string;

        /**
            * Gets content of aggregation {@link #getSteps steps}.
         * 
         * Steps that are composing the RoadMap
        */
        public getSteps(): {};

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Determines the control width in CSS size
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.commons.RoadMapStep` in the aggregation {@link #getSteps steps}. and returns its index if found or -1 otherwise.
        */
        public indexOfStep(oStep: RoadMapStep): number;

        /**
            * Inserts a step into the aggregation {@link #getSteps steps}.
        */
        public insertStep(oStep: RoadMapStep, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getSteps steps}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSteps(): {};

        /**
            * Removes a step from the aggregation {@link #getSteps steps}.
        */
        public removeStep(vStep: number | string | RoadMapStep): RoadMapStep;

        /**
            * Sets a new value for property {@link #getFirstVisibleStep firstVisibleStep}.
         * 
         * ID of the first step to be displayed
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFirstVisibleStep(sFirstVisibleStep: string): this;

        /**
            * Sets a new value for property {@link #getNumberOfVisibleSteps numberOfVisibleSteps}.
         * 
         * Total number of steps to be displayed at once
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNumberOfVisibleSteps(iNumberOfVisibleSteps: number): this;

        /**
            * Sets a new value for property {@link #getSelectedStep selectedStep}.
         * 
         * ID of the step which is currently selected
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSelectedStep(sSelectedStep: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Determines the control width in CSS size
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}