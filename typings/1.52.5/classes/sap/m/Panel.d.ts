declare module 'sap/m/Panel' {
    import { Event } from 'sap/ui/base/Event';
    import { Toolbar } from 'sap/m/Toolbar';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IPanelSettings extends IControlSettings {
        headerText?: string;
        width?: sap.ui.core.CSSSize;
        height?: sap.ui.core.CSSSize;
        expandable?: boolean;
        expanded?: boolean;
        expandAnimation?: boolean;
        backgroundDesign?: sap.m.BackgroundDesign;
        accessibleRole?: sap.m.PanelAccessibleRole;
    }

    /**
    
    */
    export class Panel extends Control {

        /**
            * Constructor for a new Panel.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IPanelSettings);


        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:expand expand} event of this `sap.m.Panel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Panel` itself.
         * 
         * Indicates that the panel will expand or collapse.
        */
        attachExpand<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * If the panel will expand, this is true. If the panel will collapse, this is false. */
            expand: boolean, /* * Identifies whether the event is triggered by an user interaction or by calling setExpanded. */
            triggeredByInteraction: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:expand expand} event of this `sap.m.Panel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Panel` itself.
         * 
         * Indicates that the panel will expand or collapse.
        */
        attachExpand<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * If the panel will expand, this is true. If the panel will collapse, this is false. */
            expand: boolean, /* * Identifies whether the event is triggered by an user interaction or by calling setExpanded. */
            triggeredByInteraction: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys the headerToolbar in the aggregation {@link #getHeaderToolbar headerToolbar}.
        */
        public destroyHeaderToolbar(): this;

        /**
            * Destroys the infoToolbar in the aggregation {@link #getInfoToolbar infoToolbar}.
        */
        public destroyInfoToolbar(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:expand expand} event of this `sap.m.Panel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachExpand(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Panel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:expand expand} to attached listeners.
        */
        protected fireExpand(mParameters?: { expand?: boolean, triggeredByInteraction?: boolean, }): this;

        /**
            * Gets current value of property {@link #getAccessibleRole accessibleRole}.
         * 
         * This property is used to set the accessible aria role of the Panel. Depending on the usage you can change the role from the default `Form` to `Region` or `Complementary`.
         * 
         * Default value is `Form`.
        */
        public getAccessibleRole(): sap.m.PanelAccessibleRole;

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * This property is used to set the background color of the Panel. Depending on the theme you can change the state of the background from "Solid" over "Translucent" to "Transparent".
         * 
         * Default value is `Translucent`.
        */
        public getBackgroundDesign(): sap.m.BackgroundDesign;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Determines the content of the Panel. The content will be visible only when the Panel is expanded.
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getExpandable expandable}.
         * 
         * Specifies whether the control is expandable. This allows for collapsing or expanding the infoToolbar (if available) and content of the Panel. Note: If expandable is set to false, the Panel will always be rendered expanded.
         * 
         * Default value is `false`.
        */
        public getExpandable(): boolean;

        /**
            * Gets current value of property {@link #getExpandAnimation expandAnimation}.
         * 
         * Indicates whether the transition between the expanded and the collapsed state of the control is animated. By default the animation is enabled.
         * 
         * Default value is `true`.
        */
        public getExpandAnimation(): boolean;

        /**
            * Gets current value of property {@link #getExpanded expanded}.
         * 
         * Indicates whether the Panel is expanded or not. If expanded is set to true, then both the infoToolbar (if available) and the content are rendered. If expanded is set to false, then only the headerText or headerToolbar is rendered.
         * 
         * Default value is `false`.
        */
        public getExpanded(): boolean;

        /**
            * Gets current value of property {@link #getHeaderText headerText}.
         * 
         * This property is used to set the header text of the Panel. The "headerText" is visible in both expanded and collapsed state. Note: This property is overwritten by the "headerToolbar" aggregation.
         * 
         * Default value is ``.
        */
        public getHeaderText(): string;

        /**
            * Gets content of aggregation {@link #getHeaderToolbar headerToolbar}.
         * 
         * This aggregation allows the use of a custom Toolbar as header for the Panel. The "headerToolbar" is visible in both expanded and collapsed state. Use it when you want to add extra controls for user interactions in the header. Note: This aggregation overwrites "headerText" property.
        */
        public getHeaderToolbar(): Toolbar;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Determines the Panel height.
         * 
         * Default value is `auto`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Gets content of aggregation {@link #getInfoToolbar infoToolbar}.
         * 
         * This aggregation allows the use of a custom Toolbar as information bar for the Panel. The "infoToolbar" is placed below the header and is visible only in expanded state. Use it when you want to show extra information to the user.
        */
        public getInfoToolbar(): Toolbar;

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
            * Returns a metadata object for class sap.m.Panel.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Determines the Panel width.
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
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Sets the accessibleRole property of the control.
        */
        public setAccessibleRole(sRole: sap.m.PanelAccessibleRole): this;

        /**
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * This property is used to set the background color of the Panel. Depending on the theme you can change the state of the background from "Solid" over "Translucent" to "Transparent".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Translucent`.
        */
        public setBackgroundDesign(sBackgroundDesign: sap.m.BackgroundDesign): this;

        /**
            * Sets the expandable property of the control.
        */
        public setExpandable(bExpandable: boolean): this;

        /**
            * Sets a new value for property {@link #getExpandAnimation expandAnimation}.
         * 
         * Indicates whether the transition between the expanded and the collapsed state of the control is animated. By default the animation is enabled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setExpandAnimation(bExpandAnimation: boolean): this;

        /**
            * Sets the expanded property of the control.
        */
        public setExpanded(bExpanded: boolean): this;

        /**
            * Sets a new value for property {@link #getHeaderText headerText}.
         * 
         * This property is used to set the header text of the Panel. The "headerText" is visible in both expanded and collapsed state. Note: This property is overwritten by the "headerToolbar" aggregation.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setHeaderText(sHeaderText: string): this;

        /**
            * Sets the aggregated {@link #getHeaderToolbar headerToolbar}.
        */
        public setHeaderToolbar(oHeaderToolbar: Toolbar): this;

        /**
            * Sets the height of the panel.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets the aggregated {@link #getInfoToolbar infoToolbar}.
        */
        public setInfoToolbar(oInfoToolbar: Toolbar): this;

        /**
            * Sets the width of the panel.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}