declare module 'sap/m/Bar' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IBarSettings extends IControlSettings {
        enableFlexBox?: boolean;
        translucent?: boolean;
        design?: sap.m.BarDesign;
    }

    /**
    
    */
    export class Bar extends Control {

        /**
            * Constructor for a new `Bar`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IBarSettings);


        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some contentLeft to the aggregation {@link #getContentLeft contentLeft}.
        */
        public addContentLeft(oContentLeft: Control): this;

        /**
            * Adds some contentMiddle to the aggregation {@link #getContentMiddle contentMiddle}.
        */
        public addContentMiddle(oContentMiddle: Control): this;

        /**
            * Adds some contentRight to the aggregation {@link #getContentRight contentRight}.
        */
        public addContentRight(oContentRight: Control): this;

        /**
            * Destroys all the contentLeft in the aggregation {@link #getContentLeft contentLeft}.
        */
        public destroyContentLeft(): this;

        /**
            * Destroys all the contentMiddle in the aggregation {@link #getContentMiddle contentMiddle}.
        */
        public destroyContentMiddle(): this;

        /**
            * Destroys all the contentRight in the aggregation {@link #getContentRight contentRight}.
        */
        public destroyContentRight(): this;

        /**
            * Creates a new subclass of class sap.m.Bar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets content of aggregation {@link #getContentLeft contentLeft}.
         * 
         * Represents the left content area, usually containing a button or an app icon. If it is overlapped by the right content, its content will disappear and the text will show an ellipsis.
        */
        public getContentLeft(): {};

        /**
            * Gets content of aggregation {@link #getContentMiddle contentMiddle}.
         * 
         * Represents the middle content area. Controls such as label, segmented buttons or select can be placed here. The content is centrally positioned if there is enough space. If the right or left content overlaps the middle content, the middle content will be centered in the space between the left and the right content.
        */
        public getContentMiddle(): {};

        /**
            * Gets content of aggregation {@link #getContentRight contentRight}.
         * 
         * Represents the right content area. Controls such as action buttons or search field can be placed here.
        */
        public getContentRight(): {};

        /**
            * Gets current value of property {@link #getDesign design}.
         * 
         * Determines the design of the bar. If set to auto, it becomes dependent on the place where the bar is placed.
         * 
         * Default value is `Auto`.
        */
        public getDesign(): sap.m.BarDesign;

        /**
            * Gets current value of property {@link #getEnableFlexBox enableFlexBox}.
         * 
         * If this flag is set to true, contentMiddle will be rendered as a HBox and layoutData can be used to allocate available space.
         * 
         * Default value is `false`.
        */
        public getEnableFlexBox(): boolean;

        /**
            * Returns a metadata object for class sap.m.Bar.
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
            * Gets current value of property {@link #getTranslucent translucent}.
         * 
         * Indicates whether the Bar is partially translucent. It is only applied for touch devices.
         * 
         * Default value is `false`.
        */
        public getTranslucent(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContentLeft contentLeft}. and returns its index if found or -1 otherwise.
        */
        public indexOfContentLeft(oContentLeft: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContentMiddle contentMiddle}. and returns its index if found or -1 otherwise.
        */
        public indexOfContentMiddle(oContentMiddle: Control): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContentRight contentRight}. and returns its index if found or -1 otherwise.
        */
        public indexOfContentRight(oContentRight: Control): number;

        /**
            * Inserts a contentLeft into the aggregation {@link #getContentLeft contentLeft}.
        */
        public insertContentLeft(oContentLeft: Control, iIndex: number): this;

        /**
            * Inserts a contentMiddle into the aggregation {@link #getContentMiddle contentMiddle}.
        */
        public insertContentMiddle(oContentMiddle: Control, iIndex: number): this;

        /**
            * Inserts a contentRight into the aggregation {@link #getContentRight contentRight}.
        */
        public insertContentRight(oContentRight: Control, iIndex: number): this;

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getContentLeft contentLeft}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContentLeft(): {};

        /**
            * Removes all the controls from the aggregation {@link #getContentMiddle contentMiddle}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContentMiddle(): {};

        /**
            * Removes all the controls from the aggregation {@link #getContentRight contentRight}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContentRight(): {};

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a contentLeft from the aggregation {@link #getContentLeft contentLeft}.
        */
        public removeContentLeft(vContentLeft: number | string | Control): Control;

        /**
            * Removes a contentMiddle from the aggregation {@link #getContentMiddle contentMiddle}.
        */
        public removeContentMiddle(vContentMiddle: number | string | Control): Control;

        /**
            * Removes a contentRight from the aggregation {@link #getContentRight contentRight}.
        */
        public removeContentRight(vContentRight: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getDesign design}.
         * 
         * Determines the design of the bar. If set to auto, it becomes dependent on the place where the bar is placed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Auto`.
        */
        public setDesign(sDesign: sap.m.BarDesign): this;

        /**
            * Sets a new value for property {@link #getEnableFlexBox enableFlexBox}.
         * 
         * If this flag is set to true, contentMiddle will be rendered as a HBox and layoutData can be used to allocate available space.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setEnableFlexBox(bEnableFlexBox: boolean): this;

        /**
            * Sets a new value for property {@link #getTranslucent translucent}.
         * 
         * Indicates whether the Bar is partially translucent. It is only applied for touch devices.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setTranslucent(bTranslucent: boolean): this;

    }
}