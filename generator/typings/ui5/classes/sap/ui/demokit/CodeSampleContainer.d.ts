declare module 'sap/ui/demokit/CodeSampleContainer' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ICodeSampleContainerSettings extends IControlSettings {
        scriptElementId?: string;
        uiAreaId?: string;
        title?: string;
        sourceVisible?: boolean;
        width?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class CodeSampleContainer extends Control {

        /**
            * Constructor for a new CodeSampleContainer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ICodeSampleContainerSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:apply apply} event of this `sap.ui.demokit.CodeSampleContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.demokit.CodeSampleContainer` itself.
         * 
         * Fired when the user decides to apply his/her changes to the sample code
        */
        attachApply<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * the current code that will be applied */
            code: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:apply apply} event of this `sap.ui.demokit.CodeSampleContainer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.demokit.CodeSampleContainer` itself.
         * 
         * Fired when the user decides to apply his/her changes to the sample code
        */
        attachApply<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * the current code that will be applied */
            code: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:apply apply} event of this `sap.ui.demokit.CodeSampleContainer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachApply(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.demokit.CodeSampleContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:apply apply} to attached listeners.
        */
        protected fireApply(mParameters?: { code?: string, }): this;

        /**
            * Returns a metadata object for class sap.ui.demokit.CodeSampleContainer.
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
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Gets current value of property {@link #getScriptElementId scriptElementId}.
         * 
         * Id of the script element that contains the initial sample code for this code sample.
        */
        public getScriptElementId(): string;

        /**
            * Gets current value of property {@link #getSourceVisible sourceVisible}.
         * 
         * Whether the source code is visible or not.
         * 
         * Default value is `false`.
        */
        public getSourceVisible(): boolean;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * A title to be displayed above the code.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getUiAreaId uiAreaId}.
         * 
         * Id of the container for the running code. This Id can be used in calls to sap.ui.setRoot as if it would be a normal UIArea. Internally, a container UIElement is created with that Id.
        */
        public getUiAreaId(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of the CodeSample container.
         * 
         * Default value is `90%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Sets a new value for property {@link #getScriptElementId scriptElementId}.
         * 
         * Id of the script element that contains the initial sample code for this code sample.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setScriptElementId(sScriptElementId: string): this;

        /**
            * Sets a new value for property {@link #getSourceVisible sourceVisible}.
         * 
         * Whether the source code is visible or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSourceVisible(bSourceVisible: boolean): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * A title to be displayed above the code.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getUiAreaId uiAreaId}.
         * 
         * Id of the container for the running code. This Id can be used in calls to sap.ui.setRoot as if it would be a normal UIArea. Internally, a container UIElement is created with that Id.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setUiAreaId(sUiAreaId: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of the CodeSample container.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `90%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}