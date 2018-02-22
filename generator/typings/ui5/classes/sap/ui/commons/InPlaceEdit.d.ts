declare module 'sap/ui/commons/InPlaceEdit' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { TooltipBase } from 'sap/ui/core/TooltipBase';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IInPlaceEditSettings extends IControlSettings {
        valueState?: sap.ui.core.ValueState;
        undoEnabled?: boolean;
        design?: sap.ui.commons.TextViewDesign;
    }

    /**
    
    */
    export class InPlaceEdit extends Control {

        /**
            * Constructor for a new InPlaceEdit.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IInPlaceEditSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.InPlaceEdit`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.InPlaceEdit` itself.
         * 
         * Event is fired when the text in the field has changed AND the focus leaves the InPlaceEdit or the Enter key is pressed.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new / changed value of the InPlaceEdit. */
            newValue: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.commons.InPlaceEdit`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.InPlaceEdit` itself.
         * 
         * Event is fired when the text in the field has changed AND the focus leaves the InPlaceEdit or the Enter key is pressed.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The new / changed value of the InPlaceEdit. */
            newValue: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.commons.InPlaceEdit`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.InPlaceEdit` itself.
         * 
         * This event if fired during typing into the InPlaceEdit and returns the currently entered value. This is not the content of the value property. The value property is only updated by ENTER and by leaving the control.
        */
        attachLiveChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current value of the Textfield. */
            liveValue: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.commons.InPlaceEdit`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.InPlaceEdit` itself.
         * 
         * This event if fired during typing into the InPlaceEdit and returns the currently entered value. This is not the content of the value property. The value property is only updated by ENTER and by leaving the control.
        */
        attachLiveChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Current value of the Textfield. */
            liveValue: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Clear the old text after a change to disable the undo functionality. If undoEnabled is false this has no effect.
        */
        public clearOldText(): any;

        /**
            * Destroys the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.commons.InPlaceEdit`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.commons.InPlaceEdit`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLiveChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.InPlaceEdit with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { newValue?: string, }): this;

        /**
            * Fires event {@link #event:liveChange liveChange} to attached listeners.
        */
        protected fireLiveChange(mParameters?: { liveValue?: string, }): this;

        /**
            
        */
        protected getAccessibilityInfo(): {};

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Content control of the InPlaceEdit. The following controls are allowed: TextField, ComboBox, DropdownBox and Link
        */
        public getContent(): Control;

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * Defines the visual appearance of the control. Currently this is not supported for Labels.
         * 
         * Default value is `Standard`.
        */
        public getDesign(): sap.ui.commons.TextViewDesign;

        /**
            * Returns a metadata object for class sap.ui.commons.InPlaceEdit.
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
            * Returns the tooltip for this InPlaceEdit if any or an undefined value. The tooltip can either be a simple string or a subclass of {@link sap.ui.core.TooltipBase}.
         * 
         * Callers that are only interested in tooltips of type string (e.g. to render them as a `title` attribute), should call the convenience method {@link #getTooltip_AsString} instead. If they want to get a tooltip text no matter where it comes from (be it a string tooltip or the text from a TooltipBase instance) then they could call {@link #getTooltip_Text} instead.
         * 
         * If a content control is assigned to the InPlaceEdit the tooltip of this control is used. A directly set tooltip to the InPlaceEdit is ignored in this case.
        */
        public getTooltip(): string | TooltipBase;

        /**
            * Gets current value of property {@link #getUndoEnabled undoEnabled}.
         * 
         * If undo is enabled after changing the text an undo button appears.
         * 
         * Default value is `true`.
        */
        public getUndoEnabled(): boolean;

        /**
            * Gets current value of property {@link #getValueState valueState}.
         * 
         * Visualizes warnings or errors related to the InPlaceEdit. Possible values: Warning, Error, Success. If the content control has an own valueState property this will be used.
         * 
         * Default value is `None`.
        */
        public getValueState(): sap.ui.core.ValueState;

        /**
            * Sets the aggregated {@link #getContent content}.
        */
        public setContent(oContent: Control): this;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Defines the visual appearance of the control. Currently this is not supported for Labels.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Standard`.
        */
        public setDesign(sDesign: sap.ui.commons.TextViewDesign): this;

        /**
            * Sets a new tooltip for this InPlaceEdit. The tooltip can either be a simple string (which in most cases will be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
         * 
         * If a new tooltip is set, any previously set tooltip is deactivated.
         * 
         * If a content control is assigned to the InPlaceEdit the tooltip of this control is used. A directly set tooltip to the InPlaceEdit is ignored in this case.
        */
        public setTooltip(oTooltip: string | TooltipBase): this;

        /**
            * Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will be rendered as the `title` attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.
         * 
         * If a new tooltip is set, any previously set tooltip is deactivated.
        */
        public setTooltip(vTooltip: string | TooltipBase): any;

        /**
            * Sets a new value for property {@link #getUndoEnabled undoEnabled}.
         * 
         * If undo is enabled after changing the text an undo button appears.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setUndoEnabled(bUndoEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getValueState valueState}.
         * 
         * Visualizes warnings or errors related to the InPlaceEdit. Possible values: Warning, Error, Success. If the content control has an own valueState property this will be used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setValueState(sValueState: sap.ui.core.ValueState): this;

    }
}