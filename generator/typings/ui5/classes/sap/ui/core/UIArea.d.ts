declare module 'sap/ui/core/UIArea' {
    import { Control } from 'sap/ui/core/Control';
    import { EventProvider } from 'sap/ui/base/EventProvider';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Interface } from 'sap/ui/base/Interface';
    import { Core } from 'sap/ui/core/Core';
    import { Context } from 'sap/ui/model/Context';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface IUIAreaSettings extends IManagedObjectSettings {
    }

    /**
    
    */
    export class UIArea extends ManagedObject {

        /**
            * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(oCore: Core, oRootNode: {});


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Adds some dependent to the aggregation {@link #getDependents dependents}.
        */
        public addDependent(oDependent: Control): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys all the dependents in the aggregation {@link #getDependents dependents}.
        */
        public destroyDependents(): this;

        /**
            * Creates a new subclass of class sap.ui.core.UIArea with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Provide getBindingContext, as UIArea can be parent of an element.
        */
        public getBindingContext(): any | Context;

        /**
            * Get the binding context of this object for the given model name.
         * 
         * If the object does not have a binding context set on itself and has no own model set, it will use the first binding context defined in its parent hierarchy.
         * 
         * ** Note: ** to be compatible with future versions of this API, you must not use the following model names:  * `null` * empty string `""` * string literals `"null"` or `"undefined"`  Omitting the model name (or using the value `undefined`) is explicitly allowed and refers to the default model.
         * 
         * ** Note: ** A ManagedObject inherits binding contexts from the Core only when it is a descendant of a UIArea.
        */
        public getBindingContext(sModelName?: string): Context;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Content that is displayed in the UIArea.
        */
        public getContent(): {};

        /**
            * Gets content of aggregation {@link #getDependents dependents}.
         * 
         * Dependent objects whose lifecycle is bound to the UIarea but which are not automatically rendered by the UIArea.
        */
        public getDependents(): {};

        /**
            * Returns the Core's event provider as new eventing parent to enable control event bubbling to the core to ensure compatibility with the core validation events.
        */
        protected getEventingParent(): this;

        /**
            * Returns this `UIArea`'s id (as determined from provided RootNode).
        */
        public getId(): string | any;

        /**
            * Returns the object's Id.
        */
        public getId(): string;

        /**
            * Returns a metadata object for class sap.ui.core.UIArea.
        */
        public static getMetadata(): Metadata | any;

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
            * Returns the content control of this `UIArea` at the specified index. If no index is given the first content control is returned.
        */
        public getRootControl(idx: number): Control;

        /**
            * Returns the Root Node hosting this instance of `UIArea`.
        */
        public getRootNode(): any;

        /**
            * Returns this UI area. Needed to stop recursive calls from an element to its parent.
        */
        protected getUIArea(): this;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getDependents dependents}. and returns its index if found or -1 otherwise.
        */
        public indexOfDependent(oDependent: Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Inserts a dependent into the aggregation {@link #getDependents dependents}.
        */
        public insertDependent(oDependent: Control, iIndex: number): this;

        /**
            * Will be used as end-point for invalidate-bubbling from controls up their hierarchy.
         *  Triggers re-rendering of the UIAreas content.
        */
        protected invalidate(): any;

        /**
            * Checks whether the control is still valid (is in the DOM)
        */
        protected isActive(): boolean;

        /**
            * Returns whether rerendering is currently suppressed on this UIArea
        */
        protected isInvalidateSuppressed(): any;

        /**
            * Returns the locked state of the `sap.ui.core.UIArea`
        */
        public isLocked(): boolean;

        /**
            * Locks this instance of UIArea.
         * 
         * Rerendering and eventing will not be active as long as no {@link #unlock} is called.
        */
        public lock(): any;

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getDependents dependents}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllDependents(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Removes a dependent from the aggregation {@link #getDependents dependents}.
        */
        public removeDependent(vDependent: number | string | Control): Control;

        /**
            * Sets the root control to be displayed in this UIArea.
         * 
         * First, all old content controls (if any) will be detached from this UIArea (e.g. their parent relationship to this UIArea will be cut off). Then the parent relationship for the new content control (if not empty) will be set to this UIArea and finally, the UIArea will be marked for re-rendering.
         * 
         * The real re-rendering happens whenever the re-rendering is called. Either implicitly at the end of any control event or by calling sap.ui.getCore().applyChanges().
        */
        public setRootControl(oRootControl: Interface | Control): any;

        /**
            * Allows setting the Root Node hosting this instance of `UIArea`.
         *  The Dom Ref must have an Id that will be used as Id for this instance of `UIArea`.
        */
        public setRootNode(oRootNode: {}): any;

        /**
            * Un-Locks this instance of UIArea.
         * 
         * Rerendering and eventing will now be enabled again.
        */
        public unlock(): any;

    }
}