declare module 'sap/ui/commons/ResponsiveContainer' {
    import { Event } from 'sap/ui/base/Event';
    import { ResponsiveContainerRange } from 'sap/ui/commons/ResponsiveContainerRange';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IResponsiveContainerSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class ResponsiveContainer extends Control {

        /**
            * Constructor for a new ResponsiveContainer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IResponsiveContainerSettings);


        /**
            * Adds some range to the aggregation {@link #getRanges ranges}.
        */
        public addRange(oRange: ResponsiveContainerRange): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:rangeSwitch rangeSwitch} event of this `sap.ui.commons.ResponsiveContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.ResponsiveContainer` itself.
         * 
         * The event is fired the width of the container reaches a new range.
        */
        attachRangeSwitch<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current range */
            currentRange: ResponsiveContainerRange,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:rangeSwitch rangeSwitch} event of this `sap.ui.commons.ResponsiveContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.ResponsiveContainer` itself.
         * 
         * The event is fired the width of the container reaches a new range.
        */
        attachRangeSwitch<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The current range */
            currentRange: ResponsiveContainerRange,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the ranges in the aggregation {@link #getRanges ranges}.
        */
        public destroyRanges(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:rangeSwitch rangeSwitch} event of this `sap.ui.commons.ResponsiveContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachRangeSwitch(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.ResponsiveContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:rangeSwitch rangeSwitch} to attached listeners.
        */
        protected fireRangeSwitch(mParameters?: { currentRange?: ResponsiveContainerRange, }): this;

        /**
            * ID of the element which is the current target of the association {@link #getDefaultContent defaultContent}, or `null`.
        */
        public getDefaultContent(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The width of the responsive container.
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.ui.commons.ResponsiveContainer.
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
            * Gets content of aggregation {@link #getRanges ranges}.
         * 
         * The ranges defined for this container
        */
        public getRanges(): {};

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The width of the responsive container.
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.commons.ResponsiveContainerRange` in the aggregation {@link #getRanges ranges}. and returns its index if found or -1 otherwise.
        */
        public indexOfRange(oRange: ResponsiveContainerRange): number;

        /**
            * Inserts a range into the aggregation {@link #getRanges ranges}.
        */
        public insertRange(oRange: ResponsiveContainerRange, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getRanges ranges}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllRanges(): {};

        /**
            * Removes a range from the aggregation {@link #getRanges ranges}.
        */
        public removeRange(vRange: number | string | ResponsiveContainerRange): ResponsiveContainerRange;

        /**
            * Sets the associated {@link #getDefaultContent defaultContent}.
        */
        public setDefaultContent(oDefaultContent: sap.ui.core.ID | Control): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The width of the responsive container.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The width of the responsive container.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}