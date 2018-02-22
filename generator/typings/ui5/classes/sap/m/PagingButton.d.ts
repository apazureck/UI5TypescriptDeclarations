declare module 'sap/m/PagingButton' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IPagingButtonSettings extends IControlSettings {
        count?: number;
        position?: number;
        nextButtonTooltip?: string;
        previousButtonTooltip?: string;
    }

    /**
    
    */
    export class PagingButton extends Control {

        /**
            * Constructor for a new PagingButton.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IPagingButtonSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:positionChange positionChange} event of this `sap.m.PagingButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PagingButton` itself.
         * 
         * Fired when the current position is changed.
        */
        attachPositionChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The number of the new position. */
            newPosition: number, /* * The number of the old position. */
            oldPosition: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:positionChange positionChange} event of this `sap.m.PagingButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PagingButton` itself.
         * 
         * Fired when the current position is changed.
        */
        attachPositionChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The number of the new position. */
            newPosition: number, /* * The number of the old position. */
            oldPosition: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:positionChange positionChange} event of this `sap.m.PagingButton`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPositionChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.PagingButton with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:positionChange positionChange} to attached listeners.
        */
        protected firePositionChange(mParameters?: { newPosition?: number, oldPosition?: number, }): this;

        /**
            * Gets current value of property {@link #getCount count}.
         * 
         * Determines the total count of items/entities that the control navigates through. The minimum number of items/entities is 1.
         * 
         * Default value is `1`.
        */
        public getCount(): number;

        /**
            * Returns a metadata object for class sap.m.PagingButton.
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
            * Gets current value of property {@link #getNextButtonTooltip nextButtonTooltip}.
         * 
         * Determines the tooltip of the next button.
         * 
         * Default value is ``.
        */
        public getNextButtonTooltip(): string;

        /**
            * Gets current value of property {@link #getPosition position}.
         * 
         * Determines the current position in the items/entities that the control navigates through. Starting (minimum) number is 1.
         * 
         * Default value is `1`.
        */
        public getPosition(): number;

        /**
            * Gets current value of property {@link #getPreviousButtonTooltip previousButtonTooltip}.
         * 
         * Determines the tooltip of the previous button.
         * 
         * Default value is ``.
        */
        public getPreviousButtonTooltip(): string;

        /**
            * Sets a new value for property {@link #getCount count}.
         * 
         * Determines the total count of items/entities that the control navigates through. The minimum number of items/entities is 1.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setCount(iCount: number): this;

        /**
            * Sets a new value for property {@link #getNextButtonTooltip nextButtonTooltip}.
         * 
         * Determines the tooltip of the next button.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setNextButtonTooltip(sNextButtonTooltip: string): this;

        /**
            * Sets a new value for property {@link #getPosition position}.
         * 
         * Determines the current position in the items/entities that the control navigates through. Starting (minimum) number is 1.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setPosition(iPosition: number): this;

        /**
            * Sets a new value for property {@link #getPreviousButtonTooltip previousButtonTooltip}.
         * 
         * Determines the tooltip of the previous button.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setPreviousButtonTooltip(sPreviousButtonTooltip: string): this;

    }
}