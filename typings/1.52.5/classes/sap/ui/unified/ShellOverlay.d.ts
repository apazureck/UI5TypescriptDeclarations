declare module 'sap/ui/unified/ShellOverlay' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ShellLayout } from 'sap/ui/unified/ShellLayout';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IShellOverlaySettings extends IControlSettings {
    }

    /**
    
    */
    export class ShellOverlay extends Control {

        /**
            * Constructor for a new ShellOverlay.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IShellOverlaySettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.unified.ShellOverlay`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.ShellOverlay` itself.
         * 
         * Fired when the overlay was closed.
        */
        attachClosed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.unified.ShellOverlay`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.ShellOverlay` itself.
         * 
         * Fired when the overlay was closed.
        */
        attachClosed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Closes the ShellOverlay.
        */
        public close(): any;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys the search in the aggregation {@link #getSearch search}.
        */
        public destroySearch(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.unified.ShellOverlay`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClosed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.unified.ShellOverlay with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:closed closed} to attached listeners.
        */
        protected fireClosed(mParameters?: {}): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * The content to appear in the overlay.
        */
        public getContent(): {};

        /**
            * Returns a metadata object for class sap.ui.unified.ShellOverlay.
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
            * Gets content of aggregation {@link #getSearch search}.
         * 
         * Experimental (This aggregation might change in future!): The search control which should be displayed in the overlay header.
        */
        public getSearch(): Control;

        /**
            * ID of the element which is the current target of the association {@link #getShell shell}, or `null`.
        */
        public getShell(): sap.ui.core.ID;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Opens the ShellOverlay.
        */
        public open(): any;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Sets the aggregated {@link #getSearch search}.
        */
        public setSearch(oSearch: Control): this;

        /**
            * Sets the associated {@link #getShell shell}.
        */
        public setShell(oShell: sap.ui.core.ID | ShellLayout): this;

    }
}