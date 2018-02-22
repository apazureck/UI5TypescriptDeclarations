declare module 'sap/ui/unified/ColorPicker' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IColorPickerSettings extends IControlSettings {
        colorString?: string;
        mode?: sap.ui.unified.ColorPickerMode;
    }

    /**
    
    */
    export class ColorPicker extends Control {

        /**
            * Constructor for a new `ColorPicker`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IColorPickerSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.ColorPicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.ColorPicker` itself.
         * 
         * Fired when the value is changed by user action.
         * 
         * ** Note: ** When the user action is mouse dragging, the `change` event fires on the mouseup event.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Parameter containing the RED value (0-255). */
            r: number, /* * Parameter containing the GREEN value (0-255). */
            g: number, /* * Parameter containing the BLUE value (0-255). */
            b: number, /* * Parameter containing the HUE value (0-360). */
            h: number, /* * Parameter containing the SATURATION value (0-100). */
            s: number, /* * Parameter containing the VALUE value (0-100). */
            v: number, /* * Parameter containing the LIGHTNESS value (0-100). */
            l: number, /* * Parameter containing the Hexadecimal string (#FFFFFF). */
            hex: string, /* * Parameter containing the alpha value (transparency). */
            alpha: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.ColorPicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.ColorPicker` itself.
         * 
         * Fired when the value is changed by user action.
         * 
         * ** Note: ** When the user action is mouse dragging, the `change` event fires on the mouseup event.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Parameter containing the RED value (0-255). */
            r: number, /* * Parameter containing the GREEN value (0-255). */
            g: number, /* * Parameter containing the BLUE value (0-255). */
            b: number, /* * Parameter containing the HUE value (0-360). */
            h: number, /* * Parameter containing the SATURATION value (0-100). */
            s: number, /* * Parameter containing the VALUE value (0-100). */
            v: number, /* * Parameter containing the LIGHTNESS value (0-100). */
            l: number, /* * Parameter containing the Hexadecimal string (#FFFFFF). */
            hex: string, /* * Parameter containing the alpha value (transparency). */
            alpha: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.unified.ColorPicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.ColorPicker` itself.
         * 
         * Fired when the value is changed during the mouse move.
         * 
         * ** Note: ** When the user action is mouse move, the `liveChange` event is fired during the mousedown event.
        */
        attachLiveChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Parameter containing the RED value (0-255). */
            r: number, /* * Parameter containing the GREEN value (0-255). */
            g: number, /* * Parameter containing the BLUE value (0-255). */
            b: number, /* * Parameter containing the HUE value (0-360). */
            h: number, /* * Parameter containing the SATURATION value (0-100). */
            s: number, /* * Parameter containing the VALUE value (0-100). */
            v: number, /* * Parameter containing the LIGHTNESS value (0-100). */
            l: number, /* * Parameter containing the Hexadecimal string (#FFFFFF). */
            hex: string, /* * Parameter containing the alpha value (transparency). */
            alpha: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.unified.ColorPicker`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.ColorPicker` itself.
         * 
         * Fired when the value is changed during the mouse move.
         * 
         * ** Note: ** When the user action is mouse move, the `liveChange` event is fired during the mousedown event.
        */
        attachLiveChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Parameter containing the RED value (0-255). */
            r: number, /* * Parameter containing the GREEN value (0-255). */
            g: number, /* * Parameter containing the BLUE value (0-255). */
            b: number, /* * Parameter containing the HUE value (0-360). */
            h: number, /* * Parameter containing the SATURATION value (0-100). */
            s: number, /* * Parameter containing the VALUE value (0-100). */
            v: number, /* * Parameter containing the LIGHTNESS value (0-100). */
            l: number, /* * Parameter containing the Hexadecimal string (#FFFFFF). */
            hex: string, /* * Parameter containing the alpha value (transparency). */
            alpha: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.unified.ColorPicker`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.unified.ColorPicker`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLiveChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.unified.ColorPicker with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { r?: number, g?: number, b?: number, h?: number, s?: number, v?: number, l?: number, hex?: string, alpha?: string, }): this;

        /**
            * Fires event {@link #event:liveChange liveChange} to attached listeners.
        */
        protected fireLiveChange(mParameters?: { r?: number, g?: number, b?: number, h?: number, s?: number, v?: number, l?: number, hex?: string, alpha?: string, }): this;

        /**
            * Gets current value of property {@link #getColorString colorString}.
         * 
         * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:  * HEX - #FFFFFF * RGB - rgb(255,255,255) * HSV - hsv(360,100,100) * CSS - red  ** Note: ** The output parameter is an RGB string of the current color.
        */
        public getColorString(): string;

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
            * Returns a metadata object for class sap.ui.unified.ColorPicker.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getMode mode}.
         * 
         * Determines the color mode of the `ColorPicker`.
         * 
         * Default value is `HSV`.
        */
        public getMode(): sap.ui.unified.ColorPickerMode;

        /**
            * Gets current RGB values.
        */
        public getRGB(): {};

        /**
            * Checks the validity of the CSS color string.
        */
        public isColor(sColorString: string): boolean;

        /**
            * Sets a new value for property {@link #getColorString colorString}.
         * 
         * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:  * HEX - #FFFFFF * RGB - rgb(255,255,255) * HSV - hsv(360,100,100) * CSS - red  ** Note: ** The output parameter is an RGB string of the current color.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColorString(sColorString: string): this;

        /**
            * Setter for `mode` property.
        */
        public setMode(sMode: sap.ui.unified.ColorPickerMode, bSuppressInvalidate: boolean): any;

    }
}