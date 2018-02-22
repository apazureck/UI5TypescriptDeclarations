declare module 'sap/m/P13nConditionPanel' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IP13nConditionPanelSettings extends IControlSettings {
        maxConditions?: string;
        exclude?: boolean;
        containerQuery?: boolean;
        autoAddNewRow?: boolean;
        disableFirstRemoveIcon?: boolean;
        alwaysShowAddIcon?: boolean;
        usePrevConditionSetting?: boolean;
        autoReduceKeyFieldItems?: boolean;
        layoutMode?: string;
        showLabel?: boolean;
        displayFormat?: string;
        validationExecutor?: {};
    }

    /**
    
    */
    export class P13nConditionPanel extends Control {

        /**
            * Constructor for a new P13nConditionPanel.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IP13nConditionPanelSettings);


        /**
            * add a single condition.
        */
        public addCondition(oCondition: {}): any;

        /**
            * add a single KeyField
        */
        public addKeyField(oKeyField: {}): any;

        /**
            * add a single operation
        */
        public addOperation(oOperation: any, sType: string): any;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:dataChange dataChange} event of this `sap.m.P13nConditionPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nConditionPanel` itself.
         * 
         * Workaround for updating the binding
        */
        attachDataChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:dataChange dataChange} event of this `sap.m.P13nConditionPanel`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.P13nConditionPanel` itself.
         * 
         * Workaround for updating the binding
        */
        attachDataChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:dataChange dataChange} event of this `sap.m.P13nConditionPanel`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDataChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.P13nConditionPanel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:dataChange dataChange} to attached listeners.
        */
        protected fireDataChange(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getAlwaysShowAddIcon alwaysShowAddIcon}.
         * 
         * makes the Add icon visible on each condition row. If is set to false the Add is only visible at the end and you can only append a new condition.
         * 
         * Default value is `true`.
        */
        public getAlwaysShowAddIcon(): boolean;

        /**
            * Gets current value of property {@link #getAutoAddNewRow autoAddNewRow}.
         * 
         * adds initial a new empty condition row
         * 
         * Default value is `false`.
        */
        public getAutoAddNewRow(): boolean;

        /**
            * Gets current value of property {@link #getAutoReduceKeyFieldItems autoReduceKeyFieldItems}.
         * 
         * KeyField value can only be selected once. When you set the property to `true` the ConditionPanel will automatically offers on the KeyField drop down only the keyFields which are not used. The default behavior is that in each keyField dropdown all keyfields are listed.
         * 
         * Default value is `false`.
        */
        public getAutoReduceKeyFieldItems(): boolean;

        /**
            * returns array of all defined conditions.
        */
        public getConditions(): {};

        /**
            * Gets current value of property {@link #getContainerQuery containerQuery}.
         * 
         * defines if the mediaQuery or a ContainerResize will be used for layout update. When the `P13nConditionPanel` is used on a dialog the property should be set to `true`!
         * 
         * Default value is `false`.
        */
        public getContainerQuery(): boolean;

        /**
            * Gets current value of property {@link #getDisableFirstRemoveIcon disableFirstRemoveIcon}.
         * 
         * makes the remove icon on the first condition row disabled when only one condition exist.
         * 
         * Default value is `false`.
        */
        public getDisableFirstRemoveIcon(): boolean;

        /**
            * Gets current value of property {@link #getDisplayFormat displayFormat}.
         * 
         * This represents the displayFormat of the condition Values. With the value "UpperCase" the entered value of the condition will be converted to upperCase.
        */
        public getDisplayFormat(): string;

        /**
            * Gets current value of property {@link #getExclude exclude}.
         * 
         * exclude options for filter
         * 
         * Default value is `false`.
        */
        public getExclude(): boolean;

        /**
            * getter for KeyFields array
        */
        public getKeyFields(): {};

        /**
            * Gets current value of property {@link #getLayoutMode layoutMode}.
         * 
         * can be used to control the layout behavior. Default is "" which will automatically change the layout. With "Desktop", "Table" or "Phone" you can set a fixed layout.
        */
        public getLayoutMode(): string;

        /**
            * Gets current value of property {@link #getMaxConditions maxConditions}.
         * 
         * defines the max number of conditions on the ConditionPanel
         * 
         * Default value is `-1`.
        */
        public getMaxConditions(): string;

        /**
            * Returns a metadata object for class sap.m.P13nConditionPanel.
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
            * returns the default array of operations
        */
        public getOperations(sType: string): {};

        /**
            * Gets current value of property {@link #getShowLabel showLabel}.
         * 
         * show additional labels in the condition
         * 
         * Default value is `false`.
        */
        public getShowLabel(): boolean;

        /**
            * Gets current value of property {@link #getUsePrevConditionSetting usePrevConditionSetting}.
         * 
         * new added condition use the settings from the previous condition as default.
         * 
         * Default value is `true`.
        */
        public getUsePrevConditionSetting(): boolean;

        /**
            * Gets current value of property {@link #getValidationExecutor validationExecutor}.
         * 
         * Calls the validation listener tbd...
        */
        public getValidationExecutor(): {};

        /**
            * insert a single condition.
        */
        public insertCondition(oCondition: {}, index: number): any;

        /**
            * remove all conditions.
        */
        public removeAllConditions(): any;

        /**
            * removes all KeyFields
        */
        public removeAllKeyFields(): any;

        /**
            * remove all operations
        */
        public removeAllOperations(sType: string): any;

        /**
            * remove a single condition.
        */
        public removeCondition(vCondition: {}): any;

        /**
            * removes all invalid conditions.
        */
        public removeInvalidConditions(): any;

        /**
            * removes all errors/warning states from the value1/2 fields of all conditions.
        */
        public removeValidationErrors(): any;

        /**
            * Sets a new value for property {@link #getAutoAddNewRow autoAddNewRow}.
         * 
         * adds initial a new empty condition row
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAutoAddNewRow(bAutoAddNewRow: boolean): this;

        /**
            * Sets a new value for property {@link #getAutoReduceKeyFieldItems autoReduceKeyFieldItems}.
         * 
         * KeyField value can only be selected once. When you set the property to `true` the ConditionPanel will automatically offers on the KeyField drop down only the keyFields which are not used. The default behavior is that in each keyField dropdown all keyfields are listed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setAutoReduceKeyFieldItems(bAutoReduceKeyFieldItems: boolean): this;

        /**
            * This method must be used to assign a list of conditions.
        */
        public setConditions(aConditions: {}): any;

        /**
            * Sets a new value for property {@link #getDisableFirstRemoveIcon disableFirstRemoveIcon}.
         * 
         * makes the remove icon on the first condition row disabled when only one condition exist.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setDisableFirstRemoveIcon(bDisableFirstRemoveIcon: boolean): this;

        /**
            * Sets a new value for property {@link #getDisplayFormat displayFormat}.
         * 
         * This represents the displayFormat of the condition Values. With the value "UpperCase" the entered value of the condition will be converted to upperCase.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDisplayFormat(sDisplayFormat: string): this;

        /**
            * Sets a new value for property {@link #getExclude exclude}.
         * 
         * exclude options for filter
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setExclude(bExclude: boolean): this;

        /**
            * This method allows you to specify the KeyFields for the conditions. You can set an array of object with Key and Text properties to define the keyfields.
        */
        public setKeyFields(aKeyFields: any[]): any;

        /**
            * Sets a new value for property {@link #getMaxConditions maxConditions}.
         * 
         * defines the max number of conditions on the ConditionPanel
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `-1`.
        */
        public setMaxConditions(sMaxConditions: string): this;

        /**
            * setter for the supported operations which we show per condition row. This array of "default" operations will only be used when we do not have on the keyfield itself some specific operations and a keyfield is of not of type date or numeric.
        */
        public setOperations(aOperations: {}, sType: string): any;

        /**
            * Sets a new value for property {@link #getShowLabel showLabel}.
         * 
         * show additional labels in the condition
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowLabel(bShowLabel: boolean): this;

        /**
            * Sets a new value for property {@link #getUsePrevConditionSetting usePrevConditionSetting}.
         * 
         * new added condition use the settings from the previous condition as default.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setUsePrevConditionSetting(bUsePrevConditionSetting: boolean): this;

        /**
            * Sets a new value for property {@link #getValidationExecutor validationExecutor}.
         * 
         * Calls the validation listener tbd...
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValidationExecutor(oValidationExecutor: {}): this;

    }
}