declare namespace sap.ui.core.LabelEnablement {
    // Methods
    /**
        * Returns an array of IDs of the labels referencing the given element.
        */
    export function getReferencingLabels(oElement: {}): {};/**
    * Returns `true` when the given control is required (property 'required') or one of its referencing labels, `false` otherwise.
    */
    export function isRequired(oElement: {}): boolean;
}