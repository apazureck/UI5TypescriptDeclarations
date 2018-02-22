declare module 'sap/ui/core/routing/HashChanger' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { EventProvider, IEventProviderSettings } from 'sap/ui/base/EventProvider';

    export interface IHashChangerSettings extends IEventProviderSettings {
    }

    /**
    
    */
    export class HashChanger extends EventProvider {


        /**
            * Cleans the event registration
        */
        public destroy(): any;

        /**
            * Destructor method for objects
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.core.routing.HashChanger with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.EventProvider.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires the hashchanged event, may be extended to modify the hash before fireing the event
        */
        protected fireHashChanged(newHash: string, oldHash: string): any;

        /**
            * Gets the current hash
        */
        public getHash(): string;

        /**
            * Gets a global singleton of the HashChanger. The singleton will get created when this function is invoked for the first time.
        */
        public static getInstance(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.routing.HashChanger.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Will start listening to hashChanges with the parseHash function. This will also fire a hashchanged event with the initial hash.
        */
        public init(): any;

        /**
            * Replaces the hash to a certain value. When using the replace function no browser history is written. If you want to have an entry in the browser history, please use set setHash function.
        */
        public replaceHash(sHash: string): any;

        /**
            * Sets the hashChanger to a new instance, destroys the old one and copies all its event listeners to the new one
        */
        protected static replaceHashChanger(oHashChanger: HashChanger): any;

        /**
            * Sets the hash to a certain value. When using the set function a browser history entry is written. If you do not want to have an entry in the browser history, please use set replaceHash function.
        */
        public setHash(sHash: string): any;

    }
}