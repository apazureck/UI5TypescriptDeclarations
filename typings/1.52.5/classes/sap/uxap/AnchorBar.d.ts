declare module 'sap/uxap/AnchorBar' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Button } from 'sap/m/Button';
    import { Toolbar, IToolbarSettings } from 'sap/m/Toolbar';

    export interface IAnchorBarSettings extends IToolbarSettings {
        showPopover?: boolean;
        upperCase?: boolean;
    }

    /**
    
    */
    export class AnchorBar extends Toolbar {

        /**
            * Constructor for a new AnchorBar.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IAnchorBarSettings);


        /**
            * Creates a new subclass of class sap.uxap.AnchorBar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.Toolbar.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

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
            * Returns a metadata object for class sap.uxap.AnchorBar.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns an sap.ui.core.delegate.ScrollEnablement object used to handle scrolling.
        */
        public getScrollDelegate(): {};

        /**
            * ID of the element which is the current target of the association {@link #getSelectedButton selectedButton}, or `null`.
        */
        public getSelectedButton(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getShowPopover showPopover}.
         * 
         * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
         * 
         * Default value is `true`.
        */
        public getShowPopover(): boolean;

        /**
            * Gets current value of property {@link #getUpperCase upperCase}.
         * 
         * Determines whether the Anchor bar items are displayed in upper case.
         * 
         * Default value is `false`.
        */
        public getUpperCase(): boolean;

        /**
            * Scroll to a specific Section.
        */
        public scrollToSection(sId: string, duration: number): any;

        /**
            * Sets the associated {@link #getSelectedButton selectedButton}.
        */
        public setSelectedButton(oSelectedButton: sap.ui.core.ID | Button): this;

        /**
            * Sets a new value for property {@link #getShowPopover showPopover}.
         * 
         * Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowPopover(bShowPopover: boolean): this;

        /**
            * Sets a new value for property {@link #getUpperCase upperCase}.
         * 
         * Determines whether the Anchor bar items are displayed in upper case.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setUpperCase(bUpperCase: boolean): this;

    }
}