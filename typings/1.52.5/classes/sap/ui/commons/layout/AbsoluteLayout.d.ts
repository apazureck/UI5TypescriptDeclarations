declare module 'sap/ui/commons/layout/AbsoluteLayout' {
    import { PositionContainer } from 'sap/ui/commons/layout/PositionContainer';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IAbsoluteLayoutSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        verticalScrolling?: sap.ui.core.Scrolling;
        horizontalScrolling?: sap.ui.core.Scrolling;
    }

    /**
    
    */
    export class AbsoluteLayout extends Control {

        /**
            * Constructor for a new layout/AbsoluteLayout.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IAbsoluteLayoutSettings);


        /**
            * Adds the given control and a corresponding position container into the aggregation named 'positions'. Returns 'this' to allow method chaining.
        */
        public addContent(oContent: Control, oPos: {}): this;

        /**
            * Adds some position to the aggregation {@link #getPositions positions}.
        */
        public addPosition(oPosition: PositionContainer): this;

        /**
            * Destroys all aggregated position containers and their child controls. Returns 'this' to allow method chaining.
        */
        public destroyContent(): this;

        /**
            * Destroys all the positions in the aggregation {@link #getPositions positions}.
        */
        public destroyPositions(): this;

        /**
            * Creates a new subclass of class sap.ui.commons.layout.AbsoluteLayout with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns an array of the controls contained in the aggregated position containers (might be empty).
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * The overall height of the control. When not set, 100% is automatically set.
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getHorizontalScrolling horizontalScrolling}.
         * 
         * 'Auto', 'Scroll', 'Hidden', and 'None' are the available values for setting the vertical scrolling mode.
         * 
         * Default value is `Hidden`.
        */
        public getHorizontalScrolling(): sap.ui.core.Scrolling;

        /**
            * Returns a metadata object for class sap.ui.commons.layout.AbsoluteLayout.
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
            * Gets content of aggregation {@link #getPositions positions}.
         * 
         * Positioned child controls within the layout
        */
        public getPositions(): {};

        /**
            * Gets current value of property {@link #getVerticalScrolling verticalScrolling}.
         * 
         * 'Auto', 'Scroll', 'Hidden', and 'None' are the available values for setting the vertical scrolling mode.
         * 
         * Default value is `Hidden`.
        */
        public getVerticalScrolling(): sap.ui.core.Scrolling;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * The overall width of the control. When not set, 100% is automatically set.
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided sap.ui.core.Control in the aggregated position containers, and returns the index of the container in the positions aggregation if found, or '-1' otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Checks for the provided `sap.ui.commons.layout.PositionContainer` in the aggregation {@link #getPositions positions}. and returns its index if found or -1 otherwise.
        */
        public indexOfPosition(oPosition: PositionContainer): number;

        /**
            * Inserts the given control and a corresponding position container into the aggregation named 'positions'. Returns 'this' to allow method chaining.
        */
        public insertContent(oContent: Control, iIndex: number, oPos: {}): this;

        /**
            * Inserts a position into the aggregation {@link #getPositions positions}.
        */
        public insertPosition(oPosition: PositionContainer, iIndex: number): this;

        /**
            * Removes all aggregated position containers. Returns an array of the controls contained in the removed position containers (might be empty).
        */
        public removeAllContent(): {};

        /**
            * Removes all the controls from the aggregation {@link #getPositions positions}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllPositions(): {};

        /**
            * Removes the given control and its corresponding position container from the aggregation named 'positions'.
        */
        public removeContent(oContent: {}): Control;

        /**
            * Removes a position from the aggregation {@link #getPositions positions}.
        */
        public removePosition(vPosition: number | string | PositionContainer): PositionContainer;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * The overall height of the control. When not set, 100% is automatically set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getHorizontalScrolling horizontalScrolling}.
         * 
         * 'Auto', 'Scroll', 'Hidden', and 'None' are the available values for setting the vertical scrolling mode.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Hidden`.
        */
        public setHorizontalScrolling(sHorizontalScrolling: sap.ui.core.Scrolling): this;

        /**
            * Allows to set or change the position information of the given child control
        */
        public setPositionOfChild(oControl: Control, oPos: {}): boolean;

        /**
            * Sets a new value for property {@link #getVerticalScrolling verticalScrolling}.
         * 
         * 'Auto', 'Scroll', 'Hidden', and 'None' are the available values for setting the vertical scrolling mode.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Hidden`.
        */
        public setVerticalScrolling(sVerticalScrolling: sap.ui.core.Scrolling): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * The overall width of the control. When not set, 100% is automatically set.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}