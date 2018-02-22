declare module 'sap/m/OverflowToolbarLayoutData' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ToolbarLayoutData, IToolbarLayoutDataSettings } from 'sap/m/ToolbarLayoutData';

    export interface IOverflowToolbarLayoutDataSettings extends IToolbarLayoutDataSettings {
        moveToOverflow?: boolean;
        stayInOverflow?: boolean;
        priority?: sap.m.OverflowToolbarPriority;
        group?: number;
        closeOverflowOnInteraction?: boolean;
    }

    /**
    
    */
    export class OverflowToolbarLayoutData extends ToolbarLayoutData {

        /**
            * Constructor for a new `OverflowToolbarLayoutData`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IOverflowToolbarLayoutDataSettings);


        /**
            * Creates a new subclass of class sap.m.OverflowToolbarLayoutData with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.ToolbarLayoutData.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets current value of property {@link #getCloseOverflowOnInteraction closeOverflowOnInteraction}.
         * 
         * Defines whether the overflow area is automatically closed when interacting with a control in it
         * 
         * Default value is `true`.
        */
        public getCloseOverflowOnInteraction(): boolean;

        /**
            * Gets current value of property {@link #getGroup group}.
         * 
         * Defines OverflowToolbar items group number. Default value is 0, which means that the control does not belong to any group. Elements that belong to a group overflow together. The overall priority of the group is defined by the element with highest priority. Elements that belong to a group are not allowed to have AlwaysOverflow or NeverOverflow priority.
         * 
         * Default value is `0`.
        */
        public getGroup(): number;

        /**
            * Returns a metadata object for class sap.m.OverflowToolbarLayoutData.
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
            * Gets current value of property {@link #getMoveToOverflow moveToOverflow}.
         * 
         * The OverflowToolbar item can or cannot move to the overflow area
         * 
         * Default value is `true`.
        */
        public getMoveToOverflow(): boolean;

        /**
            * Gets current value of property {@link #getPriority priority}.
         * 
         * Defines OverflowToolbar items priority, Available priorities ate NeverOverflow, High, Low, Disappear and AlwaysOverflow
         * 
         * Default value is `High`.
        */
        public getPriority(): sap.m.OverflowToolbarPriority;

        /**
            * Gets current value of property {@link #getStayInOverflow stayInOverflow}.
         * 
         * The OverflowToolbar item can or cannot stay in the overflow area
         * 
         * Default value is `false`.
        */
        public getStayInOverflow(): boolean;

        /**
            * Sets a new value for property {@link #getCloseOverflowOnInteraction closeOverflowOnInteraction}.
         * 
         * Defines whether the overflow area is automatically closed when interacting with a control in it
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setCloseOverflowOnInteraction(bCloseOverflowOnInteraction: boolean): this;

        /**
            * Sets a new value for property {@link #getGroup group}.
         * 
         * Defines OverflowToolbar items group number. Default value is 0, which means that the control does not belong to any group. Elements that belong to a group overflow together. The overall priority of the group is defined by the element with highest priority. Elements that belong to a group are not allowed to have AlwaysOverflow or NeverOverflow priority.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `0`.
        */
        public setGroup(iGroup: number): this;

        /**
            * Sets a new value for property {@link #getMoveToOverflow moveToOverflow}.
         * 
         * The OverflowToolbar item can or cannot move to the overflow area
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setMoveToOverflow(bMoveToOverflow: boolean): this;

        /**
            * Sets a new value for property {@link #getPriority priority}.
         * 
         * Defines OverflowToolbar items priority, Available priorities ate NeverOverflow, High, Low, Disappear and AlwaysOverflow
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `High`.
        */
        public setPriority(sPriority: sap.m.OverflowToolbarPriority): this;

        /**
            * Sets a new value for property {@link #getStayInOverflow stayInOverflow}.
         * 
         * The OverflowToolbar item can or cannot stay in the overflow area
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setStayInOverflow(bStayInOverflow: boolean): this;

    }
}