declare module 'sap/m/TablePersoController' {
    import { Event } from 'sap/ui/base/Event';
    import { Table } from 'sap/m/Table';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { TablePersoDialog } from 'sap/m/TablePersoDialog';
    import { ManagedObject, IManagedObjectSettings } from 'sap/ui/base/ManagedObject';

    export interface ITablePersoControllerSettings extends IManagedObjectSettings {
        contentWidth?: sap.ui.core.CSSSize;
        contentHeight?: sap.ui.core.CSSSize;
        componentName?: string;
        hasGrouping?: boolean;
        showSelectAll?: boolean;
        showResetAll?: boolean;
    }

    /**
    
    */
    export class TablePersoController extends ManagedObject {

        /**
            * The TablePersoController can be used to connect a table that you want to provide a personalization dialog for, with a persistence service such as one provided by the unified shell.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITablePersoControllerSettings);


        /**
            * Activates the controller, i.e. tries to retrieve existing persisted personalizations, creates a TablePersoDialog for the associated table and attaches a close handler to apply the personalizations to the table and persist them.
         * 
         * This method should be called when the table to be personalized knows its columns. Usually, this is when that table's view has set its model, which is typically done in the corresponding controller's init method. For example ``
         *  onInit: function () {
         * 
         * 		// set explored app's demo model on this sample
         * 		var oModel = new JSONModel(jQuery.sap.getModulePath("sap.ui.demo.mock", "/products.json"));
         * 		var oGroupingModel = new JSONModel({ hasGrouping: false});
         * 		this.getView().setModel(oModel);
         * 		this.getView().setModel(oGroupingModel, 'Grouping');
         * 
         * 		// init and activate controller
         * 		this._oTPC = new TablePersoController({
         * 			table: this.getView().byId("productsTable"),
         * 			//specify the first part of persistence ids e.g. 'demoApp-productsTable-dimensionsCol'
         * 			componentName: "demoApp",
         * 			persoService: DemoPersoService,
         * 		}).activate();
         * 	}
         * ``
        */
        public activate(): this;

        /**
            * Adds some table into the association {@link #getTables tables}.
        */
        public addTable(vTable: sap.ui.core.ID | Table): this;

        /**
            * Applies the personalizations by getting the existing personalizations and adjusting to the table.
        */
        public applyPersonalizations(oTable: Table): any;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:personalizationsDone personalizationsDone} event of this `sap.m.TablePersoController`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TablePersoController` itself.
        */
        attachPersonalizationsDone<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:personalizationsDone personalizationsDone} event of this `sap.m.TablePersoController`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.TablePersoController` itself.
        */
        attachPersonalizationsDone<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys the persoService in the aggregation {@link #getPersoService persoService}.
        */
        public destroyPersoService(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:personalizationsDone personalizationsDone} event of this `sap.m.TablePersoController`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPersonalizationsDone(fnFunction: (() => any), oListener: {}): this;

        /**
            * Do some clean up: remove event delegates, etc
        */
        protected exit(): any;

        /**
            * Creates a new subclass of class sap.m.TablePersoController with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:personalizationsDone personalizationsDone} to attached listeners.
        */
        protected firePersonalizationsDone(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getComponentName componentName}.
         * 
         * Available options for the text direction are LTR and RTL. By default the control inherits the text direction from its parent control.
        */
        public getComponentName(): string;

        /**
            * Gets current value of property {@link #getContentHeight contentHeight}.
         * 
         * Default value is `20rem`.
        */
        public getContentHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getContentWidth contentWidth}.
        */
        public getContentWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getHasGrouping hasGrouping}.
         * 
         * Default value is `false`.
        */
        public getHasGrouping(): boolean;

        /**
            * Returns a metadata object for class sap.m.TablePersoController.
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
            * Gets content of aggregation {@link #getPersoService persoService}.
        */
        public getPersoService(): {};

        /**
            * Gets current value of property {@link #getShowResetAll showResetAll}.
         * 
         * Default value is `true`.
        */
        public getShowResetAll(): boolean;

        /**
            * Gets current value of property {@link #getShowSelectAll showSelectAll}.
         * 
         * Default value is `true`.
        */
        public getShowSelectAll(): boolean;

        /**
            * ID of the element which is the current target of the association {@link #getTable table}, or `null`.
        */
        public getTable(): sap.ui.core.ID;

        /**
            * Returns a _tablePersoDialog instance if available. It can be NULL if the controller has not been activated yet.
         * 
         * This function makes a private aggregate publicly accessable. This is necessary for downward compatibility reasons: in the first versions of the tablePersoProvider developers still worked with the TablePersoDialog directly, which is now not necessary any longer.
        */
        public getTablePersoDialog(): TablePersoDialog;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getTables tables}.
        */
        public getTables(): {};

        /**
            * Initializes the TablePersoController instance after creation.
        */
        protected init(): any;

        /**
            * Opens the TablePersoDialog, stores the personalized settings on close, modifies the table columns, and sends them to the persistence service
        */
        public openDialog(): any;

        /**
            * Refresh the personalizations: reloads the personalization information from the table perso provider, applies it to the controller's table and updates the controller's table perso dialog.
         * 
         * Use case for a 'refresh' call would be that the table which si personalized changed its columns during runtime, after personalization has been activated.
        */
        public refresh(): any;

        /**
            * Removes all the controls in the association named {@link #getTables tables}.
        */
        public removeAllTables(): {};

        /**
            * Removes an table from the association named {@link #getTables tables}.
        */
        public removeTable(vTable: number | sap.ui.core.ID | Table): sap.ui.core.ID;

        /**
            * Persist the personalizations
        */
        public savePersonalizations(): any;

        /**
            * Using this method, the first part of tablePerso persistence ids can be provided, in case the table's app does not provide that part itself.
         * 
         * If a component name is set using this method, it will be used, regardless of whether the table's app has a different component name or not.
        */
        public setComponentName(sCompName: string): this;

        /**
            * Reflector for the controller's 'contentHeight' property.
        */
        public setContentHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Reflector for the controller's 'contentWidth' property.
        */
        public setContentWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Reflector for the controller's 'hasGrouping' property.
        */
        public setHasGrouping(bHasGrouping: boolean): this;

        /**
            * Sets the aggregated {@link #getPersoService persoService}.
        */
        public setPersoService(oPersoService: {}): this;

        /**
            * Reflector for the controller's 'showResetAll' property.
        */
        public setShowResetAll(bShowResetAll: boolean): this;

        /**
            * Reflector for the controller's 'showSelectAll' property.
        */
        public setShowSelectAll(bShowSelectAll: boolean): this;

        /**
            * Sets the associated {@link #getTable table}.
        */
        public setTable(oTable: sap.ui.core.ID | Table): this;

    }
}