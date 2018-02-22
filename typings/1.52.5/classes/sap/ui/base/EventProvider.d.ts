declare module 'sap/ui/base/EventProvider' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IEventProviderSettings extends IObjectSettings {
    }

    /**
    
    */
    export class EventProvider extends Object {


        /**
            * Attaches an event handler to the event with the given identifier.
        */
        public attachEvent(sEventId: string, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attaches an event handler to the event with the given identifier.
        */
        public attachEvent(sEventId: string, oData: {}, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attaches an event handler, called one time only, to the event with the given identifier.
         * 
         * When the event occurs, the handler function is called and the handler registration is automatically removed afterwards.
        */
        public attachEventOnce(sEventId: string, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Attaches an event handler, called one time only, to the event with the given identifier.
         * 
         * When the event occurs, the handler function is called and the handler registration is automatically removed afterwards.
        */
        public attachEventOnce(sEventId: string, oData: {}, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Cleans up the internal structures and removes all event handlers.
         * 
         * The object must not be used anymore after destroy was called.
        */
        public destroy(): any;

        /**
            * Removes a previously attached event handler from the event with the given identifier.
         * 
         * The passed parameters must match those used for registration with {@link #attachEvent} beforehand.
        */
        public detachEvent(sEventId: string, fnFunction: (() => any), oListener?: {}): this;

        /**
            * Creates a new subclass of class sap.ui.base.EventProvider with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires an {@link sap.ui.base.Event event} with the given settings and notifies all attached event handlers.
        */
        protected fireEvent(sEventId: string, mParameters?: {}, bAllowPreventDefault?: boolean, bEnableEventBubbling?: boolean): this | boolean;

        /**
            * Returns the parent in the eventing hierarchy of this object.
         * 
         * Per default this returns null, but if eventing is used in objects, which are hierarchically structured, this can be overwritten to make the object hierarchy visible to the eventing and enables the use of event bubbling within this object hierarchy.
        */
        protected getEventingParent(): this;

        /**
            * Returns a metadata object for class sap.ui.base.EventProvider.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns whether there are any registered event handlers for the event with the given identifier.
        */
        protected hasListeners(sEventId: string): boolean;

        /**
            * Returns a string representation of this object.
         * 
         * In case there is no class or id information, a simple static string is returned. Subclasses should override this method.
        */
        public toString(): string;

    }
}