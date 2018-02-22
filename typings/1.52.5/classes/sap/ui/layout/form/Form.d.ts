declare module 'sap/ui/layout/form/Form' {
    import { FormContainer } from 'sap/ui/layout/form/FormContainer';
    import { FormLayout } from 'sap/ui/layout/form/FormLayout';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Title } from 'sap/ui/core/Title';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IFormSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        editable?: boolean;
    }

    /**
    
    */
    export class Form extends Control {

        /**
            * Constructor for a new sap.ui.layout.form.Form.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFormSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some formContainer to the aggregation {@link #getFormContainers formContainers}.
        */
        public addFormContainer(oFormContainer: FormContainer): this;

        /**
            * Destroys all the formContainers in the aggregation {@link #getFormContainers formContainers}.
        */
        public destroyFormContainers(): this;

        /**
            * Destroys the layout in the aggregation {@link #getLayout layout}.
        */
        public destroyLayout(): this;

        /**
            * Destroys the title in the aggregation {@link #getTitle title}.
        */
        public destroyTitle(): this;

        /**
            * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
        */
        public destroyToolbar(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.form.Form with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Applies a device-specific and theme-specific line-height to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.
         * 
         * The accessibility `aria-readonly` attribute is set according to this property.
         * 
         * ** Note: ** The setting of the property has no influence on the editable functionality of the form's content.
         * 
         * Default value is `false`.
        */
        public getEditable(): boolean;

        /**
            * Gets content of aggregation {@link #getFormContainers formContainers}.
         * 
         * Containers with the content of the form. A `FormContainer` represents a group inside the `Form`.
        */
        public getFormContainers(): {};

        /**
            * Gets content of aggregation {@link #getLayout layout}.
         * 
         * Layout of the `Form`. The assigned `Layout` renders the `Form`. We recommend using the `ResponsiveGridLayout` for rendering a `Form`, as its responsiveness allows the available space to be used in the best way possible.
        */
        public getLayout(): FormLayout;

        /**
            * Returns a metadata object for class sap.ui.layout.form.Form.
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
            * Gets content of aggregation {@link #getTitle title}.
         * 
         * Title of the `Form`. Can either be a `Title` element or a string. If a `Title` element it used, the style of the title can be set.
         * 
         * ** Note: ** If a `Toolbar` is used, the `Title` is ignored.
        */
        public getTitle(): Title | string;

        /**
            * Gets content of aggregation {@link #getToolbar toolbar}.
         * 
         * Toolbar of the `Form`.
         * 
         * ** Note: ** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
        */
        public getToolbar(): sap.ui.core.Toolbar;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Width of the `Form`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.layout.form.FormContainer` in the aggregation {@link #getFormContainers formContainers}. and returns its index if found or -1 otherwise.
        */
        public indexOfFormContainer(oFormContainer: FormContainer): number;

        /**
            * Inserts a formContainer into the aggregation {@link #getFormContainers formContainers}.
        */
        public insertFormContainer(oFormContainer: FormContainer, iIndex: number): this;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getFormContainers formContainers}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllFormContainers(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a formContainer from the aggregation {@link #getFormContainers formContainers}.
        */
        public removeFormContainer(vFormContainer: number | string | FormContainer): FormContainer;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * Applies a device-specific and theme-specific line-height to the form rows if the form has editable content. If set, all (not only the editable) rows of the form will get the line height of editable fields.
         * 
         * The accessibility `aria-readonly` attribute is set according to this property.
         * 
         * ** Note: ** The setting of the property has no influence on the editable functionality of the form's content.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets the aggregated {@link #getLayout layout}.
        */
        public setLayout(oLayout: FormLayout): this;

        /**
            * Sets the aggregated {@link #getTitle title}.
        */
        public setTitle(vTitle: Title | string): this;

        /**
            * Sets the aggregated {@link #getToolbar toolbar}.
        */
        public setToolbar(oToolbar: sap.ui.core.Toolbar): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Width of the `Form`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}