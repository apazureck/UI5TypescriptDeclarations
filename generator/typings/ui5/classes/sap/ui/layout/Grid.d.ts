declare module 'sap/ui/layout/Grid' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IGridSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        vSpacing?: number;
        hSpacing?: number;
        position?: sap.ui.layout.GridPosition;
        defaultSpan?: sap.ui.layout.GridSpan;
        defaultIndent?: sap.ui.layout.GridIndent;
        containerQuery?: boolean;
    }

    /**
    
    */
    export class Grid extends Control {

        /**
            * Constructor for a new Grid.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IGridSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.Grid with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            
        */
        protected getAccessibilityInfo(): any | {};

        /**
            * This function (if available on the concrete control) provides the current accessibility state of the control.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should implement this hook to provide any necessary accessibility information:
         * 
         * `MyControl.prototype.getAccessibilityInfo = function() {
         *    return {
         *      role: "textbox",      // String which represents the WAI-ARIA role which is implemented by the control.
         *      type: "date input",   // String which represents the control type (Must be a translated text). Might correlate with
         *                            // the role.
         *      description: "value", // String which describes the most relevant control state (e.g. the inputs value). Must be a
         *                            // translated text.
         *                            // Note: The type and the enabled/editable state must not be handled here.
         *      focusable: true,      // Boolean which describes whether the control can get the focus.
         *      enabled: true,        // Boolean which describes whether the control is enabled. If not relevant it must not be set or
         *                            // `null` can be provided.
         *      editable: true,       // Boolean which describes whether the control is editable. If not relevant it must not be set or
         *                            // `null` can be provided.
         *      children: []          // Aggregations of the given control (e.g. when the control is a layout). Primitive aggregations will be ignored.
         *                            // Note: Children should only be provided when it is helpful to understand the accessibility context
         *                            //       (e.g. a form control must not provide details of its internals (fields, labels, ...) but a
         *                            //       layout should).
         *    };
         * };`
         * 
         * Note: The returned object provides the accessibility state of the control at the point in time when this function is called.
        */
        protected getAccessibilityInfo(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getContainerQuery containerQuery}.
         * 
         * If true then not the media Query ( device screen size), but the size of the container surrounding the grid defines the current range (large, medium or small).
         * 
         * Default value is `false`.
        */
        public getContainerQuery(): boolean;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Controls that are placed into Grid layout.
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getDefaultIndent defaultIndent}.
         * 
         * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example: "L2 M4 S6", "M11", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
         * 
         * Default value is `XL0 L0 M0 S0`.
        */
        public getDefaultIndent(): sap.ui.layout.GridIndent;

        /**
            * Gets current value of property {@link #getDefaultSpan defaultSpan}.
         * 
         * Optional. A string type that represents Grid's default span values for large, medium and small screens for the whole Grid. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
         * 
         * Default value is `XL3 L3 M6 S12`.
        */
        public getDefaultSpan(): sap.ui.layout.GridSpan;

        /**
            * Gets current value of property {@link #getHSpacing hSpacing}.
         * 
         * Optional. Horizontal spacing between the content in the Grid. In rem, allowed values are 0, 0.5 , 1 or 2.
         * 
         * Default value is `1`.
        */
        public getHSpacing(): number;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.layout.Grid.
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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Gets current value of property {@link #getPosition position}.
         * 
         * Optional. Position of the Grid in the window or surrounding container. Possible values are "Center", "Left" and "Right".
         * 
         * Default value is `Left`.
        */
        public getPosition(): sap.ui.layout.GridPosition;

        /**
            * Gets current value of property {@link #getVSpacing vSpacing}.
         * 
         * Optional. Vertical spacing between the rows in the Grid. In rem, allowed values are 0, 0.5, 1 and 2.
         * 
         * Default value is `1`.
        */
        public getVSpacing(): number;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Optional. Width of the Grid. If not specified, then 100%.
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getContainerQuery containerQuery}.
         * 
         * If true then not the media Query ( device screen size), but the size of the container surrounding the grid defines the current range (large, medium or small).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setContainerQuery(bContainerQuery: boolean): this;

        /**
            * Sets a new value for property {@link #getDefaultIndent defaultIndent}.
         * 
         * Optional. Defines default for the whole Grid numbers of empty columns before the current span begins. It can be defined for large, medium and small screens. Allowed values are separated by space Letters L, M or S followed by number of columns from 0 to 11 that the container has to take, for example: "L2 M4 S6", "M11", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `XL0 L0 M0 S0`.
        */
        public setDefaultIndent(sDefaultIndent: sap.ui.layout.GridIndent): this;

        /**
            * Sets a new value for property {@link #getDefaultSpan defaultSpan}.
         * 
         * Optional. A string type that represents Grid's default span values for large, medium and small screens for the whole Grid. Allowed values are separated by space Letters L, M or S followed by number of columns from 1 to 12 that the container has to take, for example: "L2 M4 S6", "M12", "s10" or "l4 m4". Note that the parameters has to be provided in the order large medium small.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `XL3 L3 M6 S12`.
        */
        public setDefaultSpan(sDefaultSpan: sap.ui.layout.GridSpan): this;

        /**
            * Sets a new value for property {@link #getHSpacing hSpacing}.
         * 
         * Optional. Horizontal spacing between the content in the Grid. In rem, allowed values are 0, 0.5 , 1 or 2.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setHSpacing(fHSpacing: number): this;

        /**
            * Sets a new value for property {@link #getPosition position}.
         * 
         * Optional. Position of the Grid in the window or surrounding container. Possible values are "Center", "Left" and "Right".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Left`.
        */
        public setPosition(sPosition: sap.ui.layout.GridPosition): this;

        /**
            * Sets a new value for property {@link #getVSpacing vSpacing}.
         * 
         * Optional. Vertical spacing between the rows in the Grid. In rem, allowed values are 0, 0.5, 1 and 2.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1`.
        */
        public setVSpacing(fVSpacing: number): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Optional. Width of the Grid. If not specified, then 100%.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}