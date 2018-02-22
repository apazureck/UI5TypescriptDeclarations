declare module 'sap/ui/commons/ImageMap' {
    import { Event } from 'sap/ui/base/Event';
    import { Area } from 'sap/ui/commons/Area';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IImageMapSettings extends IControlSettings {
        name?: string;
    }

    /**
    
    */
    export class ImageMap extends Control {

        /**
            * Constructor for a new ImageMap.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IImageMapSettings);


        /**
            * Adds some area to the aggregation {@link #getAreas areas}.
        */
        public addArea(oArea: Area): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.ImageMap`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.ImageMap` itself.
         * 
         * Event for the areas that can be clicked in an ImageMap
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of clicked Area. */
            areaId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.commons.ImageMap`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.ImageMap` itself.
         * 
         * Event for the areas that can be clicked in an ImageMap
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of clicked Area. */
            areaId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Adds areas to the Image Map.
         * 
         * Each argument must be either a JSon object or a list of objects or the area element or elements.
        */
        public createArea(content: any): this;

        /**
            * Destroys all the areas in the aggregation {@link #getAreas areas}.
        */
        public destroyAreas(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.commons.ImageMap`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.ImageMap with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: { areaId?: string, }): this;

        /**
            * Gets content of aggregation {@link #getAreas areas}.
         * 
         * Area representing the reference to the target location
        */
        public getAreas(): {};

        /**
            * Returns a metadata object for class sap.ui.commons.ImageMap.
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
            * Gets current value of property {@link #getName name}.
         * 
         * Name for the image that serves as reference
        */
        public getName(): string;

        /**
            * Checks for the provided `sap.ui.commons.Area` in the aggregation {@link #getAreas areas}. and returns its index if found or -1 otherwise.
        */
        public indexOfArea(oArea: Area): number;

        /**
            * Inserts a area into the aggregation {@link #getAreas areas}.
        */
        public insertArea(oArea: Area, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getAreas areas}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllAreas(): {};

        /**
            * Removes a area from the aggregation {@link #getAreas areas}.
        */
        public removeArea(vArea: number | string | Area): Area;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * Name for the image that serves as reference
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setName(sName: string): this;

    }
}