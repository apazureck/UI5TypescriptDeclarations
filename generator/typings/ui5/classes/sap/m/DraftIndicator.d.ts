declare module 'sap/m/DraftIndicator' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IDraftIndicatorSettings extends IControlSettings {
        state?: sap.m.DraftIndicatorState;
        minDisplayTime?: number;
    }

    /**
    
    */
    export class DraftIndicator extends Control {


        /**
            * Clears the indicator state
        */
        public clearDraftState(): any;

        /**
            * Creates a new subclass of class sap.m.DraftIndicator with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.m.DraftIndicator.
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
            * Gets current value of property {@link #getMinDisplayTime minDisplayTime}.
         * 
         * Minimum time in milliseconds for showing the draft indicator
         * 
         * Default value is `1500`.
        */
        public getMinDisplayTime(): number;

        /**
            * Gets current value of property {@link #getState state}.
         * 
         * State of the indicator. Could be "Saving", "Saved" and "Clear".
         * 
         * Default value is `Clear`.
        */
        public getState(): sap.m.DraftIndicatorState;

        /**
            * Sets a new value for property {@link #getMinDisplayTime minDisplayTime}.
         * 
         * Minimum time in milliseconds for showing the draft indicator
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `1500`.
        */
        public setMinDisplayTime(iMinDisplayTime: number): this;

        /**
            * Sets the indicator in "Saved" state
        */
        public showDraftSaved(): any;

        /**
            * Sets the indicator in "Saving..." state
        */
        public showDraftSaving(): any;

    }
}