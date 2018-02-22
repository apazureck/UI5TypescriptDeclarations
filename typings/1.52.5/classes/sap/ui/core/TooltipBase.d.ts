declare module 'sap/ui/core/TooltipBase' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITooltipBaseSettings extends IControlSettings {
        text?: string;
        openDuration?: number;
        closeDuration?: number;
        myPosition?: sap.ui.core.Dock;
        atPosition?: sap.ui.core.Dock;
        offset?: string;
        collision?: sap.ui.core.Collision;
        openDelay?: number;
        closeDelay?: number;
    }

    /**
    
    */
    export class TooltipBase extends Control {

        /**
            * Constructor for a new TooltipBase.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITooltipBaseSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.core.TooltipBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.TooltipBase` itself.
         * 
         * This event is fired when the Tooltip has been closed
        */
        attachClosed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.core.TooltipBase`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.TooltipBase` itself.
         * 
         * This event is fired when the Tooltip has been closed
        */
        attachClosed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.core.TooltipBase`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachClosed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.core.TooltipBase with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:closed closed} to attached listeners.
        */
        protected fireClosed(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getAtPosition atPosition}.
         * 
         * Optional. At position defines which position on the target control to align the positioned tooltip.
         * 
         * Default value is `begin bottom`.
        */
        public getAtPosition(): sap.ui.core.Dock;

        /**
            * Gets current value of property {@link #getCloseDelay closeDelay}.
         * 
         * Closing delay of the tooltip in milliseconds
         * 
         * Default value is `100`.
        */
        public getCloseDelay(): number;

        /**
            * Gets current value of property {@link #getCloseDuration closeDuration}.
         * 
         * Optional. Close Duration in milliseconds.
         * 
         * Default value is `200`.
        */
        public getCloseDuration(): number;

        /**
            * Gets current value of property {@link #getCollision collision}.
         * 
         * Optional. Collision - when the positioned element overflows the window in some direction, move it to an alternative position.
         * 
         * Default value is `flip`.
        */
        public getCollision(): sap.ui.core.Collision;

        /**
            * Returns a metadata object for class sap.ui.core.TooltipBase.
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
            * Gets current value of property {@link #getMyPosition myPosition}.
         * 
         * Optional. My position defines which position on the extended tooltip being positioned to align with the target control.
         * 
         * Default value is `begin top`.
        */
        public getMyPosition(): sap.ui.core.Dock;

        /**
            * Gets current value of property {@link #getOffset offset}.
         * 
         * Optional. Offset adds these left-top values to the calculated position. Example: "10 3".
         * 
         * Default value is `10 3`.
        */
        public getOffset(): string;

        /**
            * Gets current value of property {@link #getOpenDelay openDelay}.
         * 
         * Opening delay of the tooltip in milliseconds
         * 
         * Default value is `500`.
        */
        public getOpenDelay(): number;

        /**
            * Gets current value of property {@link #getOpenDuration openDuration}.
         * 
         * Optional. Open Duration in milliseconds.
         * 
         * Default value is `200`.
        */
        public getOpenDuration(): number;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * The text that is shown in the tooltip that extends the TooltipBase class, for example in RichTooltip.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Sets a new value for property {@link #getAtPosition atPosition}.
         * 
         * Optional. At position defines which position on the target control to align the positioned tooltip.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `begin bottom`.
        */
        public setAtPosition(sAtPosition: sap.ui.core.Dock): this;

        /**
            * Sets a new value for property {@link #getCloseDelay closeDelay}.
         * 
         * Closing delay of the tooltip in milliseconds
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100`.
        */
        public setCloseDelay(iCloseDelay: number): this;

        /**
            * Sets a new value for property {@link #getCloseDuration closeDuration}.
         * 
         * Optional. Close Duration in milliseconds.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `200`.
        */
        public setCloseDuration(iCloseDuration: number): this;

        /**
            * Sets a new value for property {@link #getCollision collision}.
         * 
         * Optional. Collision - when the positioned element overflows the window in some direction, move it to an alternative position.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `flip`.
        */
        public setCollision(sCollision: sap.ui.core.Collision): this;

        /**
            * Sets a new value for property {@link #getMyPosition myPosition}.
         * 
         * Optional. My position defines which position on the extended tooltip being positioned to align with the target control.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `begin top`.
        */
        public setMyPosition(sMyPosition: sap.ui.core.Dock): this;

        /**
            * Sets a new value for property {@link #getOffset offset}.
         * 
         * Optional. Offset adds these left-top values to the calculated position. Example: "10 3".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `10 3`.
        */
        public setOffset(sOffset: string): this;

        /**
            * Sets a new value for property {@link #getOpenDelay openDelay}.
         * 
         * Opening delay of the tooltip in milliseconds
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `500`.
        */
        public setOpenDelay(iOpenDelay: number): this;

        /**
            * Sets a new value for property {@link #getOpenDuration openDuration}.
         * 
         * Optional. Open Duration in milliseconds.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `200`.
        */
        public setOpenDuration(iOpenDuration: number): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * The text that is shown in the tooltip that extends the TooltipBase class, for example in RichTooltip.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

    }
}