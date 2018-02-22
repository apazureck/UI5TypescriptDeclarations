declare module 'sap/ui/base/Event' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { EventProvider } from 'sap/ui/base/EventProvider';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IEventSettings extends IObjectSettings {
    }

    /**
    
    */
    export class Event<Tsource = any, Tparameters = any> extends Object {

        /**
            * Creates an event with the given `sId`, linked to the provided `oSource` and enriched with the `mParameters`.
        */
        public constructor(sId: string, oSource: EventProvider, mParameters: {});


        /**
            * Cancel bubbling of the event.
         * 
         * ** Note: ** This function only has an effect if the bubbling of the event is supported by the event source.
        */
        public cancelBubble(): any;

        /**
            * Creates a new subclass of class sap.ui.base.Event<Tsource, Tparameters> with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the id of the event.
        */
        public getId(): string;

        /**
            * Returns a metadata object for class sap.ui.base.Event.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the value of the parameter with the given sName.
        */
        public getParameter<K extends keyof Tparameters>(sName: K): Tparameters[K];

        /**
            * Returns all parameter values of the event keyed by their names.
        */
        public getParameters(): Tparameters;

        /**
            * Returns the event provider on which the event was fired.
        */
        public getSource(): Tsource;

        /**
            * Prevent the default action of this event.
         * 
         * ** Note: ** This function only has an effect if preventing the default action of the event is supported by the event source.
        */
        public preventDefault(): any;

    }
}