declare module 'sap/m/semantic/SemanticButton' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { SemanticControl, ISemanticControlSettings } from 'sap/m/semantic/SemanticControl';

    export interface ISemanticButtonSettings extends ISemanticControlSettings {
        enabled?: boolean;
    }

    /**
    
    */
    export class SemanticButton extends SemanticControl {

        /**
            * Constructor for a new SemanticButton.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ISemanticButtonSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.semantic.SemanticButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.semantic.SemanticButton` itself.
         * 
         * See {@link sap.m.Button#press}
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.semantic.SemanticButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.semantic.SemanticButton` itself.
         * 
         * See {@link sap.m.Button#press}
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.semantic.SemanticButton`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.semantic.SemanticButton with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.semantic.SemanticControl.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * See {@link sap.m.Button#enabled}
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

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
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * Returns a metadata object for class sap.m.semantic.SemanticButton.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * See {@link sap.m.Button#enabled}
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

    }
}