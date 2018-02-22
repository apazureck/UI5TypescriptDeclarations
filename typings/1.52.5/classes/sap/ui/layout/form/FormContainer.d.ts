declare module 'sap/ui/layout/form/FormContainer' {
    import { Control } from 'sap/ui/core/Control';
    import { FormElement } from 'sap/ui/layout/form/FormElement';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Title } from 'sap/ui/core/Title';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IFormContainerSettings extends IElementSettings {
        expanded?: boolean;
        expandable?: boolean;
        visible?: boolean;
    }

    /**
    
    */
    export class FormContainer extends Element {

        /**
            * Constructor for a new sap.ui.layout.form.FormContainer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFormContainerSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some formElement to the aggregation {@link #getFormElements formElements}.
        */
        public addFormElement(oFormElement: FormElement): this;

        /**
            * Destroys all the formElements in the aggregation {@link #getFormElements formElements}.
        */
        public destroyFormElements(): this;

        /**
            * Destroys the title in the aggregation {@link #getTitle title}.
        */
        public destroyTitle(): this;

        /**
            * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
        */
        public destroyToolbar(): this;

        /**
            * Creates a new subclass of class sap.ui.layout.form.FormContainer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getExpandable expandable}.
         * 
         * Defines if the `FormContainer` is expandable.
         * 
         * ** Note: ** The expander icon will only be shown if a `title` is set for the `FormContainer`.
         * 
         * Default value is `false`.
        */
        public getExpandable(): boolean;

        /**
            * Gets current value of property {@link #getExpanded expanded}.
         * 
         * Container is expanded.
         * 
         * ** Note: ** This property only works if `expandable` is set to `true`.
         * 
         * Default value is `true`.
        */
        public getExpanded(): boolean;

        /**
            * Gets content of aggregation {@link #getFormElements formElements}.
         * 
         * The `FormElements` contain the content (labels and fields) of the `FormContainers`.
        */
        public getFormElements(): {};

        /**
            * Returns a metadata object for class sap.ui.layout.form.FormContainer.
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
         * Title of the `FormContainer`. Can either be a `Title` element or a string. If a `Title` element is used, the style of the title can be set.
         * 
         * ** Note: ** If a `Toolbar` is used, the `Title` is ignored.
        */
        public getTitle(): Title | string;

        /**
            * Gets content of aggregation {@link #getToolbar toolbar}.
         * 
         * Toolbar of the `FormContainer`.
         * 
         * ** Note: ** If a `Toolbar` is used, the `Title` is ignored. If a title is needed inside the `Toolbar` it must be added at content to the `Toolbar`. In this case add the `Title` to the `ariaLabelledBy` association.
        */
        public getToolbar(): sap.ui.core.Toolbar;

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * If set to `false`, the `FormContainer` is not rendered.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Checks for the provided `sap.ui.layout.form.FormElement` in the aggregation {@link #getFormElements formElements}. and returns its index if found or -1 otherwise.
        */
        public indexOfFormElement(oFormElement: FormElement): number;

        /**
            * Inserts a formElement into the aggregation {@link #getFormElements formElements}.
        */
        public insertFormElement(oFormElement: FormElement, iIndex: number): this;

        /**
            * Determines if the `FormContainer` is visible or not. Per default it just returns the value of the `visible` property. But this might be overwritten by inherited elements.
         * 
         * For rendering by `FormLayouts` this function has to be used instead of `getVisible`.
        */
        public isVisible(): boolean;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getFormElements formElements}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllFormElements(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a formElement from the aggregation {@link #getFormElements formElements}.
        */
        public removeFormElement(vFormElement: number | string | FormElement): FormElement;

        /**
            * Sets a new value for property {@link #getExpandable expandable}.
         * 
         * Defines if the `FormContainer` is expandable.
         * 
         * ** Note: ** The expander icon will only be shown if a `title` is set for the `FormContainer`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setExpandable(bExpandable: boolean): this;

        /**
            * Sets a new value for property {@link #getExpanded expanded}.
         * 
         * Container is expanded.
         * 
         * ** Note: ** This property only works if `expandable` is set to `true`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setExpanded(bExpanded: boolean): this;

        /**
            * Sets the aggregated {@link #getTitle title}.
        */
        public setTitle(vTitle: Title | string): this;

        /**
            * Sets the aggregated {@link #getToolbar toolbar}.
        */
        public setToolbar(oToolbar: sap.ui.core.Toolbar): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * If set to `false`, the `FormContainer` is not rendered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

    }
}