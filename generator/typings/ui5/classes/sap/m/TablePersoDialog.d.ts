declare module 'sap/m/TablePersoDialog' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Table } from 'sap/m/Table';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface ITablePersoDialogSettings extends IManagedObjectSettings {
        contentWidth?: sap.ui.core.CSSSize;
        contentHeight?: sap.ui.core.CSSSize;
        persoMap?: {};
        columnInfoCallback?: {};
        initialColumnState?: {};
        hasGrouping?: boolean;
        showSelectAll?: boolean;
        showResetAll?: boolean;
    }

    /**
    
    */
    export class TablePersoDialog extends ManagedObject {

        /**
            * The TablePersoDialog can be used to display and allow modification of personalization settings relating to a Table. It displays the columns of the table that it refers to by using * The result of calling sap.m.TablePersoProvider's 'getCaption' callback if it is implemented and delivers a non-null value for a column * the column header control's 'text' property if no caption property is available * the column header control's 'title' property if neither 'text' nor 'caption' property are available * the column id is displayed as last fallback, if none of the above is at hand. In that case, a warning is logged.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITablePersoDialogSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.m.TablePersoDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TablePersoDialog` itself.
        */
        attachCancel<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.m.TablePersoDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TablePersoDialog` itself.
        */
        attachCancel<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.m.TablePersoDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TablePersoDialog` itself.
        */
        attachConfirm<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:confirm confirm} event of this `sap.m.TablePersoDialog`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TablePersoDialog` itself.
        */
        attachConfirm<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Destroys the persoService in the aggregation {@link #getPersoService persoService}.
        */
        public destroyPersoService(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.m.TablePersoDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachCancel(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:confirm confirm} event of this `sap.m.TablePersoDialog`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachConfirm(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.TablePersoDialog with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:cancel cancel} to attached listeners.
        */
        protected fireCancel(mParameters?: {}): this;

        /**
            * Fires event {@link #event:confirm confirm} to attached listeners.
        */
        protected fireConfirm(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getColumnInfoCallback columnInfoCallback}.
        */
        public getColumnInfoCallback(): {};

        /**
            * Gets current value of property {@link #getContentHeight contentHeight}.
        */
        public getContentHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getContentWidth contentWidth}.
        */
        public getContentWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getHasGrouping hasGrouping}.
        */
        public getHasGrouping(): boolean;

        /**
            * Gets current value of property {@link #getInitialColumnState initialColumnState}.
        */
        public getInitialColumnState(): {};

        /**
            * Returns a metadata object for class sap.m.TablePersoDialog.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the metadata for the class that this object belongs to.
        */
        public getMetadata(): any | Metadata;

        /**
            * ID of the element which is the current target of the association {@link #getPersoDialogFor persoDialogFor}, or `null`.
        */
        public getPersoDialogFor(): sap.ui.core.ID;

        /**
            * Gets current value of property {@link #getPersoMap persoMap}.
        */
        public getPersoMap(): {};

        /**
            * Gets content of aggregation {@link #getPersoService persoService}.
         * 
         * Refers to the service for reading and writing the personalization.
        */
        public getPersoService(): {};

        /**
            * Gets current value of property {@link #getShowResetAll showResetAll}.
        */
        public getShowResetAll(): boolean;

        /**
            * Gets current value of property {@link #getShowSelectAll showSelectAll}.
        */
        public getShowSelectAll(): boolean;

        /**
            * Initializes the TablePersoDialog instance after creation.
        */
        protected init(): any;

        /**
            * Sets the content of the dialog, being list items representing the associated table's column settings, and opens the dialog
        */
        public open(): any;

        /**
            * Returns the personalizations made. Currently supports a 'columns' property which holds an array of settings, one element per column in the associated table. The element contains column-specific information as follows: id: column id; order: new order; text: the column's header text that was displayed in the dialog; visible: visibility (true or false).
        */
        public retrievePersonalizations(): {};

        /**
            * Sets a new value for property {@link #getColumnInfoCallback columnInfoCallback}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setColumnInfoCallback(oColumnInfoCallback: {}): this;

        /**
            * Sets a new value for property {@link #getContentHeight contentHeight}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContentHeight(sContentHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getContentWidth contentWidth}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContentWidth(sContentWidth: sap.ui.core.CSSSize): this;

        /**
            * Setter to turn on/ switch off TablePersoDialog's grouping mode.
        */
        public setHasGrouping(bHasGrouping: boolean): this;

        /**
            * Sets a new value for property {@link #getInitialColumnState initialColumnState}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setInitialColumnState(oInitialColumnState: {}): this;

        /**
            * Sets the associated {@link #getPersoDialogFor persoDialogFor}.
        */
        public setPersoDialogFor(oPersoDialogFor: sap.ui.core.ID | Table): this;

        /**
            * Sets a new value for property {@link #getPersoMap persoMap}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPersoMap(oPersoMap: {}): this;

        /**
            * Sets the aggregated {@link #getPersoService persoService}.
        */
        public setPersoService(oPersoService: {}): this;

        /**
            * Setter to show/hide TablePersoDialog's 'Undo Personalization' button.
        */
        public setShowResetAll(bShowResetAll: boolean): this;

        /**
            * Setter to show/hide TablePersoDialog's 'selectAll' checkbox.
        */
        public setShowSelectAll(bShowSelectAll: boolean): this;

    }
}