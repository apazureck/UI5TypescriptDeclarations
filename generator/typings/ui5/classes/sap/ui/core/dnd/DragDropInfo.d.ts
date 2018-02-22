declare module 'sap/ui/core/dnd/DragDropInfo' {
    import { Event } from 'sap/ui/base/Event';
    import { Element } from 'sap/ui/core/Element';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { DragDropBase, IDragDropBaseSettings } from 'sap/ui/core/dnd/DragDropBase';

    export interface IDragDropInfoSettings extends IDragDropBaseSettings {
        sourceAggregation?: string;
        targetAggregation?: string;
        dropEffect?: sap.ui.core.dnd.DropEffect;
        dropPosition?: sap.ui.core.dnd.DropPosition;
        dropLayout?: sap.ui.core.dnd.DropLayout;
    }

    /**
    
    */
    export class DragDropInfo extends DragDropBase {

        /**
            * Constructor for a new DragDropInfo.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IDragDropInfoSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:dragEnter dragEnter} event of this `sap.ui.core.dnd.DragDropInfo`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.dnd.DragDropInfo` itself.
         * 
         * This event is fired when a dragged element enters a drop target.
        */
        attachDragEnter<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The target element on which the dragged element will be dropped */
            target: Element, /* * The UI5 <code>dragSession</code> object that exists only during drag and drop */
            dragSession: sap.ui.core.dnd.DragSession, /* * The underlying browser event */
            browserEvent: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:dragEnter dragEnter} event of this `sap.ui.core.dnd.DragDropInfo`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.dnd.DragDropInfo` itself.
         * 
         * This event is fired when a dragged element enters a drop target.
        */
        attachDragEnter<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The target element on which the dragged element will be dropped */
            target: Element, /* * The UI5 <code>dragSession</code> object that exists only during drag and drop */
            dragSession: sap.ui.core.dnd.DragSession, /* * The underlying browser event */
            browserEvent: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:dragStart dragStart} event of this `sap.ui.core.dnd.DragDropInfo`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.dnd.DragDropInfo` itself.
         * 
         * This event is fired when the user starts dragging an element.
        */
        attachDragStart<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The target element that will be dragged */
            target: Element, /* * The UI5 <code>dragSession</code> object that exists only during drag and drop */
            dragSession: sap.ui.core.dnd.DragSession, /* * The underlying browser event */
            browserEvent: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:dragStart dragStart} event of this `sap.ui.core.dnd.DragDropInfo`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.dnd.DragDropInfo` itself.
         * 
         * This event is fired when the user starts dragging an element.
        */
        attachDragStart<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The target element that will be dragged */
            target: Element, /* * The UI5 <code>dragSession</code> object that exists only during drag and drop */
            dragSession: sap.ui.core.dnd.DragSession, /* * The underlying browser event */
            browserEvent: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:drop drop} event of this `sap.ui.core.dnd.DragDropInfo`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.dnd.DragDropInfo` itself.
         * 
         * This event is fired when an element is dropped on a valid drop target, as specified by the drag and drop info.
        */
        attachDrop<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The UI5 <code>dragSession</code> object that exists only during drag and drop */
            dragSession: sap.ui.core.dnd.DragSession, /* * The element being dragged */
            draggedControl: Element, /* * The element being dropped */
            droppedControl: Element, /* * The calculated position of the drop action relative to the <code>droppedControl</code>, possible values are <code>Before</code>, <code>On</code>, <code>After</code> */
            dropPosition: string, /* * The underlying browser event */
            browserEvent: any,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:drop drop} event of this `sap.ui.core.dnd.DragDropInfo`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.dnd.DragDropInfo` itself.
         * 
         * This event is fired when an element is dropped on a valid drop target, as specified by the drag and drop info.
        */
        attachDrop<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The UI5 <code>dragSession</code> object that exists only during drag and drop */
            dragSession: sap.ui.core.dnd.DragSession, /* * The element being dragged */
            draggedControl: Element, /* * The element being dropped */
            droppedControl: Element, /* * The calculated position of the drop action relative to the <code>droppedControl</code>, possible values are <code>Before</code>, <code>On</code>, <code>After</code> */
            dropPosition: string, /* * The underlying browser event */
            browserEvent: any,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:dragEnter dragEnter} event of this `sap.ui.core.dnd.DragDropInfo`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDragEnter(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:dragStart dragStart} event of this `sap.ui.core.dnd.DragDropInfo`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDragStart(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:drop drop} event of this `sap.ui.core.dnd.DragDropInfo`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDrop(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.core.dnd.DragDropInfo with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.dnd.DragDropBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:dragEnter dragEnter} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireDragEnter(mParameters?: {}): boolean;

        /**
            * Fires event {@link #event:dragStart dragStart} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireDragStart(mParameters?: {}): boolean;

        /**
            * Fires event {@link #event:drop drop} to attached listeners.
        */
        protected fireDrop(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getDropEffect dropEffect}.
         * 
         * Defines the visual drop effect.
         * 
         * Default value is `Move`.
        */
        public getDropEffect(): sap.ui.core.dnd.DropEffect;

        /**
            * Gets current value of property {@link #getDropLayout dropLayout}.
         * 
         * Defines the layout of the droppable controls if `dropPosition` is set to `Between` or `OnOrBetween`.
         * 
         * Default value is `Vertical`.
        */
        public getDropLayout(): sap.ui.core.dnd.DropLayout;

        /**
            * Gets current value of property {@link #getDropPosition dropPosition}.
         * 
         * Defines the position for the drop action, visualized by a rectangle.
         * 
         * Default value is `On`.
        */
        public getDropPosition(): sap.ui.core.dnd.DropPosition;

        /**
            * Returns a metadata object for class sap.ui.core.dnd.DragDropInfo.
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
            * Gets current value of property {@link #getSourceAggregation sourceAggregation}.
         * 
         * The name of the aggregation from which all children can be dragged. If undefined, the control itself can be dragged.
        */
        public getSourceAggregation(): string;

        /**
            * Gets current value of property {@link #getTargetAggregation targetAggregation}.
         * 
         * The aggregation name in the `targetElement` which is the target of this drag and drop action. If undefined, the entire `targetElement` is the target. This can be handy if the target control does not have any aggregations or if the drop position within the target does not matter.
        */
        public getTargetAggregation(): string;

        /**
            * ID of the element which is the current target of the association {@link #getTargetElement targetElement}, or `null`.
        */
        public getTargetElement(): sap.ui.core.ID;

        /**
            * Sets a new value for property {@link #getDropEffect dropEffect}.
         * 
         * Defines the visual drop effect.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Move`.
        */
        public setDropEffect(sDropEffect: sap.ui.core.dnd.DropEffect): this;

        /**
            * Sets a new value for property {@link #getDropLayout dropLayout}.
         * 
         * Defines the layout of the droppable controls if `dropPosition` is set to `Between` or `OnOrBetween`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Vertical`.
        */
        public setDropLayout(sDropLayout: sap.ui.core.dnd.DropLayout): this;

        /**
            * Sets a new value for property {@link #getDropPosition dropPosition}.
         * 
         * Defines the position for the drop action, visualized by a rectangle.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `On`.
        */
        public setDropPosition(sDropPosition: sap.ui.core.dnd.DropPosition): this;

        /**
            * Sets a new value for property {@link #getSourceAggregation sourceAggregation}.
         * 
         * The name of the aggregation from which all children can be dragged. If undefined, the control itself can be dragged.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSourceAggregation(sSourceAggregation: string): this;

        /**
            * Sets a new value for property {@link #getTargetAggregation targetAggregation}.
         * 
         * The aggregation name in the `targetElement` which is the target of this drag and drop action. If undefined, the entire `targetElement` is the target. This can be handy if the target control does not have any aggregations or if the drop position within the target does not matter.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTargetAggregation(sTargetAggregation: string): this;

        /**
            * Sets the associated {@link #getTargetElement targetElement}.
        */
        public setTargetElement(oTargetElement: sap.ui.core.ID | Element): this;

    }
}