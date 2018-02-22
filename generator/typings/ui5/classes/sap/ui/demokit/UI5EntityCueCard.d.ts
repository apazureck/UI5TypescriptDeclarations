declare module 'sap/ui/demokit/UI5EntityCueCard' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IUI5EntityCueCardSettings extends IControlSettings {
        collapsible?: boolean;
        expanded?: boolean;
        navigable?: boolean;
        entityName?: string;
        style?: any;
    }

    /**
    
    */
    export class UI5EntityCueCard extends Control {

        /**
            * Constructor for a new UI5EntityCueCard.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IUI5EntityCueCardSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.ui.demokit.UI5EntityCueCard`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.demokit.UI5EntityCueCard` itself.
         * 
         * Fired when a link for a type is activated (clicked) by the user.
         * 
         * When property "navigable" is set to true, type links are created for the types of properties, aggregations and associations, for the types of event or method parameters and for the return types of methods (if not void).
         * 
         * The default behavior for this event is to set the entityName property to the clicked entityName. Applications can prevent the default by calling the corresponding method on the event object.
        */
        attachNavigate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Name of the entity (control or type) that has been clicked. */
            entityName: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.ui.demokit.UI5EntityCueCard`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.demokit.UI5EntityCueCard` itself.
         * 
         * Fired when a link for a type is activated (clicked) by the user.
         * 
         * When property "navigable" is set to true, type links are created for the types of properties, aggregations and associations, for the types of event or method parameters and for the return types of methods (if not void).
         * 
         * The default behavior for this event is to set the entityName property to the clicked entityName. Applications can prevent the default by calling the corresponding method on the event object.
        */
        attachNavigate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Name of the entity (control or type) that has been clicked. */
            entityName: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:navigate navigate} event of this `sap.ui.demokit.UI5EntityCueCard`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachNavigate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.demokit.UI5EntityCueCard with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:navigate navigate} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireNavigate(mParameters?: { entityName?: string, }): boolean;

        /**
            * Gets current value of property {@link #getCollapsible collapsible}.
         * 
         * Whether the cue card can be collapsed at all. When set to true, the value of property expanded determines the current collapsed/expanded state. When false, the control is always expanded.
         * 
         * Default value is `true`.
        */
        public getCollapsible(): boolean;

        /**
            * Gets current value of property {@link #getEntityName entityName}.
         * 
         * Qualified name of the control or type to show the documentation for. The name can be specified in the metamodel notation ('sap.ui.core/Control' or in the UI5 resource notation (sap.ui.core.Control).
        */
        public getEntityName(): string;

        /**
            * Gets current value of property {@link #getExpanded expanded}.
         * 
         * Whether the cue card is currently expanded.
         * 
         * Default value is `false`.
        */
        public getExpanded(): boolean;

        /**
            * Returns a metadata object for class sap.ui.demokit.UI5EntityCueCard.
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
            * Gets current value of property {@link #getNavigable navigable}.
         * 
         * Whether type information is navigable. Also see event 'navigate'.
         * 
         * Default value is `false`.
        */
        public getNavigable(): boolean;

        /**
            * Gets current value of property {@link #getStyle style}.
         * 
         * Style of the cue card.
        */
        public getStyle(): any;

        /**
            * Sets a new value for property {@link #getCollapsible collapsible}.
         * 
         * Whether the cue card can be collapsed at all. When set to true, the value of property expanded determines the current collapsed/expanded state. When false, the control is always expanded.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setCollapsible(bCollapsible: boolean): this;

        /**
            * Sets a new value for property {@link #getEntityName entityName}.
         * 
         * Qualified name of the control or type to show the documentation for. The name can be specified in the metamodel notation ('sap.ui.core/Control' or in the UI5 resource notation (sap.ui.core.Control).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setEntityName(sEntityName: string): this;

        /**
            * Sets a new value for property {@link #getExpanded expanded}.
         * 
         * Whether the cue card is currently expanded.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setExpanded(bExpanded: boolean): this;

        /**
            * Sets a new value for property {@link #getNavigable navigable}.
         * 
         * Whether type information is navigable. Also see event 'navigate'.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setNavigable(bNavigable: boolean): this;

        /**
            * Sets a new value for property {@link #getStyle style}.
         * 
         * Style of the cue card.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setStyle(sStyle: any): this;

    }
}