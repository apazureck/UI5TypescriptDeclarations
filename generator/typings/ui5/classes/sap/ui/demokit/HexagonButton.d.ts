declare module 'sap/ui/demokit/HexagonButton' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IHexagonButtonSettings extends IControlSettings {
        icon?: string;
        color?: string;
        position?: string;
        enabled?: boolean;
        imagePosition?: string;
    }

    /**
    
    */
    export class HexagonButton extends Control {

        /**
            * Constructor for a new HexagonButton.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IHexagonButtonSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.demokit.HexagonButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.demokit.HexagonButton` itself.
         * 
         * Fired when the user clicks the hex button
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.demokit.HexagonButton`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.demokit.HexagonButton` itself.
         * 
         * Fired when the user clicks the hex button
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.demokit.HexagonButton`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.demokit.HexagonButton with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getColor color}.
         * 
         * The color of the hexagon
         * 
         * Default value is `blue`.
        */
        public getColor(): string;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Whether the button is enabled or not.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Icon to display
        */
        public getIcon(): string;

        /**
            * Gets current value of property {@link #getImagePosition imagePosition}.
         * 
         * The position of the contained image. If not set the image is rendered with a fixed relative position.
        */
        public getImagePosition(): string;

        /**
            * Returns a metadata object for class sap.ui.demokit.HexagonButton.
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
            * Gets current value of property {@link #getPosition position}.
         * 
         * The position. If set, the button is rendered with an absolute position.
        */
        public getPosition(): string;

        /**
            * Sets a new value for property {@link #getColor color}.
         * 
         * The color of the hexagon
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `blue`.
        */
        public setColor(sColor: string): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Whether the button is enabled or not.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Icon to display
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: string): this;

        /**
            * Sets a new value for property {@link #getImagePosition imagePosition}.
         * 
         * The position of the contained image. If not set the image is rendered with a fixed relative position.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setImagePosition(sImagePosition: string): this;

        /**
            * Sets a new value for property {@link #getPosition position}.
         * 
         * The position. If set, the button is rendered with an absolute position.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPosition(sPosition: string): this;

    }
}