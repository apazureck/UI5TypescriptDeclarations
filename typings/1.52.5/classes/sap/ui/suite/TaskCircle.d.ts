declare module 'sap/ui/suite/TaskCircle' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITaskCircleSettings extends IControlSettings {
        value?: number;
        maxValue?: number;
        minValue?: number;
        color?: any;
    }

    /**
    
    */
    export class TaskCircle extends Control {

        /**
            * Constructor for a new TaskCircle.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITaskCircleSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.suite.TaskCircle`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.suite.TaskCircle` itself.
         * 
         * Event is fired when the user clicks the control.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.suite.TaskCircle`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.suite.TaskCircle` itself.
         * 
         * Event is fired when the user clicks the control.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.suite.TaskCircle`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.suite.TaskCircle with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Puts the focus to the control.
        */
        public focus(): any;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getColor color}.
         * 
         * Color of the circle. The default color is red.
         * 
         * Default value is `Gray`.
        */
        public getColor(): any;

        /**
            * Gets current value of property {@link #getMaxValue maxValue}.
         * 
         * Upper limit of the displayed values. Default is 100.
         * 
         * Default value is `100`.
        */
        public getMaxValue(): number;

        /**
            * Returns a metadata object for class sap.ui.suite.TaskCircle.
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
            * Gets current value of property {@link #getMinValue minValue}.
         * 
         * Lower limit of the displayed values. Default is 0.
         * 
         * Default value is `0`.
        */
        public getMinValue(): number;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue it controls the size of the circle.
         * 
         * Default value is `0`.
        */
        public getValue(): number;

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
            * Sets a new value for property {@link #getColor color}.
         * 
         * Color of the circle. The default color is red.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Gray`.
        */
        public setColor(sColor: any): this;

        /**
            * Sets a new value for property {@link #getMaxValue maxValue}.
         * 
         * Upper limit of the displayed values. Default is 100.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100`.
        */
        public setMaxValue(iMaxValue: number): this;

        /**
            * Sets a new value for property {@link #getMinValue minValue}.
         * 
         * Lower limit of the displayed values. Default is 0.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setMinValue(iMinValue: number): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue it controls the size of the circle.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setValue(iValue: number): this;

    }
}