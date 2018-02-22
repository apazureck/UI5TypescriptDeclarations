declare module 'sap/ui/core/IntervalTrigger' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Interface } from 'sap/ui/base/Interface';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IIntervalTriggerSettings extends IObjectSettings {
    }

    /**
    
    */
    export class IntervalTrigger extends Object {


        /**
            * Adds a listener to the list that should be triggered.
        */
        public addListener(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Destructor method for objects.
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.core.IntervalTrigger with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            
        */
        public getInterface(): any | Interface;

        /**
            * Returns the public interface of the object.
        */
        public getInterface(): Interface;

        /**
            * Returns a metadata object for class sap.ui.core.IntervalTrigger.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Removes corresponding listener from list.
        */
        public removeListener(fnFunction: (() => any), oListener?: {}): any;

        /**
            * Sets the trigger interval. If the value is >0 triggering will start if there are any registered listeners. If the interval is set to <=0 triggering will stop.
        */
        public setInterval(iInterval: number): any;

    }
}