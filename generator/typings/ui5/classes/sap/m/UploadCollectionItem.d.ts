declare module 'sap/m/UploadCollectionItem' {
    import { Event } from 'sap/ui/base/Event';
    import { ObjectAttribute } from 'sap/m/ObjectAttribute';
    import { ObjectMarker } from 'sap/m/ObjectMarker';
    import { ObjectStatus } from 'sap/m/ObjectStatus';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { FileUploader } from 'sap/ui/unified/FileUploader';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IUploadCollectionItemSettings extends IElementSettings {
        contributor?: string;
        documentId?: string;
        fileName?: string;
        fileSize?: number;
        mimeType?: string;
        thumbnailUrl?: string;
        uploadedDate?: string;
        url?: string;
        enableEdit?: boolean;
        enableDelete?: boolean;
        visibleEdit?: boolean;
        visibleDelete?: boolean;
        ariaLabelForPicture?: string;
        selected?: boolean;
    }

    /**
    
    */
    export class UploadCollectionItem extends Element {

        /**
            * Constructor for a new UploadCollectionItem
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IUploadCollectionItemSettings);


        /**
            * Adds some attribute to the aggregation {@link #getAttributes attributes}.
        */
        public addAttribute(oAttribute: ObjectAttribute): this;

        /**
            * Adds some marker to the aggregation {@link #getMarkers markers}.
        */
        public addMarker(oMarker: ObjectMarker): this;

        /**
            * Adds some status to the aggregation {@link #getStatuses statuses}.
        */
        public addStatus(oStatus: ObjectStatus): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:deletePress deletePress} event of this `sap.m.UploadCollectionItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollectionItem` itself.
         * 
         * When a deletePress event handler is attached to the item and the user presses the delete button, this event is triggered. If this event is triggered, it overwrites the default delete behavior of UploadCollection and the fileDeleted event of UploadCollection is not triggered.
        */
        attachDeletePress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:deletePress deletePress} event of this `sap.m.UploadCollectionItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollectionItem` itself.
         * 
         * When a deletePress event handler is attached to the item and the user presses the delete button, this event is triggered. If this event is triggered, it overwrites the default delete behavior of UploadCollection and the fileDeleted event of UploadCollection is not triggered.
        */
        attachDeletePress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.UploadCollectionItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollectionItem` itself.
         * 
         * This event is triggered when the user presses the filename link. If this event is provided, it overwrites the default behavior of opening the file.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.UploadCollectionItem`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollectionItem` itself.
         * 
         * This event is triggered when the user presses the filename link. If this event is provided, it overwrites the default behavior of opening the file.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getAttributes attributes} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindAttributes(oBindingInfo: {}): this;

        /**
            * Binds aggregation {@link #getMarkers markers} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindMarkers(oBindingInfo: {}): this;

        /**
            * Binds aggregation {@link #getStatuses statuses} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindStatuses(oBindingInfo: {}): this;

        /**
            * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
        */
        public destroyAttributes(): this;

        /**
            * Destroys all the markers in the aggregation {@link #getMarkers markers}.
        */
        public destroyMarkers(): this;

        /**
            * Destroys all the statuses in the aggregation {@link #getStatuses statuses}.
        */
        public destroyStatuses(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:deletePress deletePress} event of this `sap.m.UploadCollectionItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDeletePress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.UploadCollectionItem`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Downloads the item. The sap.ui.core.util.File method is used here. For further details on this method, see {sap.ui.core.util.File.save}.
        */
        public download(askForLocation: boolean): boolean;

        /**
            * Creates a new subclass of class sap.m.UploadCollectionItem with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:deletePress deletePress} to attached listeners.
        */
        protected fireDeletePress(mParameters?: {}): this;

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getAriaLabelForPicture ariaLabelForPicture}.
         * 
         * Aria label for the icon (or for the image).
        */
        public getAriaLabelForPicture(): string;

        /**
            * Gets content of aggregation {@link #getAttributes attributes}.
         * 
         * Attributes of an uploaded item, for example, 'Uploaded By', 'Uploaded On', 'File Size' attributes are displayed after an item has been uploaded. Additionally, the Active property of sap.m.ObjectAttribute is supported.<br> Note that if one of the deprecated properties contributor, fileSize or UploadedDate is filled in addition to this attribute, two attributes with the same title are displayed as these properties get displayed as an attribute. Example: An application passes the property ‘contributor’ with the value ‘A’ and the aggregation attributes ‘contributor’: ‘B’. As a result, the attributes ‘contributor’:’A’ and ‘contributor’:’B’ are displayed. To make sure the title does not appear twice, check if one of the properties is filled.
        */
        public getAttributes(): {};

        /**
            * Gets current value of property {@link #getContributor contributor}.
         * 
         * Specifies the name of the user who uploaded the file.
        */
        public getContributor(): string;

        /**
            * Gets current value of property {@link #getDocumentId documentId}.
         * 
         * Specifies a unique identifier of the file (created by the application).
        */
        public getDocumentId(): string;

        /**
            * Gets current value of property {@link #getEnableDelete enableDelete}.
         * 
         * Enables/Disables the Delete button. If the value is true, the Delete button is enabled and the delete function can be used. If the value is false, the delete function is not available.
         * 
         * Default value is `true`.
        */
        public getEnableDelete(): boolean;

        /**
            * Gets current value of property {@link #getEnableEdit enableEdit}.
         * 
         * Enables/Disables the Edit button. If the value is true, the Edit button is enabled and the edit function can be used. If the value is false, the edit function is not available.
         * 
         * Default value is `true`.
        */
        public getEnableEdit(): boolean;

        /**
            * Gets current value of property {@link #getFileName fileName}.
         * 
         * Specifies the name of the uploaded file.
        */
        public getFileName(): string;

        /**
            * Gets current value of property {@link #getFileSize fileSize}.
         * 
         * Specifies the size of the uploaded file (in megabytes).
        */
        public getFileSize(): number;

        /**
            * ID of the element which is the current target of the association {@link #getFileUploader fileUploader}, or `null`.
        */
        public getFileUploader(): sap.ui.core.ID;

        /**
            * Gets content of aggregation {@link #getMarkers markers}.
         * 
         * Markers of an uploaded item Markers will be displayed after an item has been uploaded But not in Edit mode
        */
        public getMarkers(): {};

        /**
            * Returns a metadata object for class sap.m.UploadCollectionItem.
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
            * Gets current value of property {@link #getMimeType mimeType}.
         * 
         * Specifies the MIME type of the file.
        */
        public getMimeType(): string;

        /**
            * Gets current value of property {@link #getSelected selected}.
         * 
         * Defines the selected state of the UploadCollectionItem.
         * 
         * Default value is `false`.
        */
        public getSelected(): boolean;

        /**
            * Gets content of aggregation {@link #getStatuses statuses}.
         * 
         * Statuses of an uploaded item Statuses will be displayed after an item has been uploaded
        */
        public getStatuses(): {};

        /**
            * Gets current value of property {@link #getThumbnailUrl thumbnailUrl}.
         * 
         * Specifies the URL where the thumbnail of the file is located. This can also be an SAPUI5 icon URL.
        */
        public getThumbnailUrl(): string;

        /**
            * Gets current value of property {@link #getUploadedDate uploadedDate}.
         * 
         * Specifies the date on which the file was uploaded. The application has to define the date format.
        */
        public getUploadedDate(): string;

        /**
            * Gets current value of property {@link #getUrl url}.
         * 
         * Specifies the URL where the file is located. If the application doesn't provide a value for this property, the icon and the file name of the UploadCollectionItem are not clickable.
        */
        public getUrl(): string;

        /**
            * Gets current value of property {@link #getVisibleDelete visibleDelete}.
         * 
         * Show/Hide the Delete button. If the value is true, the Delete button is visible. If the value is false, the Delete button is not visible.
         * 
         * Default value is `true`.
        */
        public getVisibleDelete(): boolean;

        /**
            * Gets current value of property {@link #getVisibleEdit visibleEdit}.
         * 
         * Show/Hide the Edit button. If the value is true, the Edit button is visible. If the value is false, the Edit button is not visible.
         * 
         * Default value is `true`.
        */
        public getVisibleEdit(): boolean;

        /**
            * Checks for the provided `sap.m.ObjectAttribute` in the aggregation {@link #getAttributes attributes}. and returns its index if found or -1 otherwise.
        */
        public indexOfAttribute(oAttribute: ObjectAttribute): number;

        /**
            * Checks for the provided `sap.m.ObjectMarker` in the aggregation {@link #getMarkers markers}. and returns its index if found or -1 otherwise.
        */
        public indexOfMarker(oMarker: ObjectMarker): number;

        /**
            * Checks for the provided `sap.m.ObjectStatus` in the aggregation {@link #getStatuses statuses}. and returns its index if found or -1 otherwise.
        */
        public indexOfStatus(oStatus: ObjectStatus): number;

        /**
            * Inserts a attribute into the aggregation {@link #getAttributes attributes}.
        */
        public insertAttribute(oAttribute: ObjectAttribute, iIndex: number): this;

        /**
            * Inserts a marker into the aggregation {@link #getMarkers markers}.
        */
        public insertMarker(oMarker: ObjectMarker, iIndex: number): this;

        /**
            * Inserts a status into the aggregation {@link #getStatuses statuses}.
        */
        public insertStatus(oStatus: ObjectStatus, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getAttributes attributes}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllAttributes(): {};

        /**
            * Removes all the controls from the aggregation {@link #getMarkers markers}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllMarkers(): {};

        /**
            * Removes all the controls from the aggregation {@link #getStatuses statuses}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllStatuses(): {};

        /**
            * Removes a attribute from the aggregation {@link #getAttributes attributes}.
        */
        public removeAttribute(vAttribute: number | string | ObjectAttribute): ObjectAttribute;

        /**
            * Removes a marker from the aggregation {@link #getMarkers markers}.
        */
        public removeMarker(vMarker: number | string | ObjectMarker): ObjectMarker;

        /**
            * Removes a status from the aggregation {@link #getStatuses statuses}.
        */
        public removeStatus(vStatus: number | string | ObjectStatus): ObjectStatus;

        /**
            * Sets a new value for property {@link #getAriaLabelForPicture ariaLabelForPicture}.
         * 
         * Aria label for the icon (or for the image).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAriaLabelForPicture(sAriaLabelForPicture: string): this;

        /**
            * Sets a new value for property {@link #getContributor contributor}.
         * 
         * Specifies the name of the user who uploaded the file.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContributor(sContributor: string): this;

        /**
            * Sets a new value for property {@link #getDocumentId documentId}.
         * 
         * Specifies a unique identifier of the file (created by the application).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDocumentId(sDocumentId: string): this;

        /**
            * Sets a new value for property {@link #getEnableDelete enableDelete}.
         * 
         * Enables/Disables the Delete button. If the value is true, the Delete button is enabled and the delete function can be used. If the value is false, the delete function is not available.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableDelete(bEnableDelete: boolean): this;

        /**
            * Sets a new value for property {@link #getEnableEdit enableEdit}.
         * 
         * Enables/Disables the Edit button. If the value is true, the Edit button is enabled and the edit function can be used. If the value is false, the edit function is not available.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnableEdit(bEnableEdit: boolean): this;

        /**
            * Sets a new value for property {@link #getFileName fileName}.
         * 
         * Specifies the name of the uploaded file.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFileName(sFileName: string): this;

        /**
            * Sets a new value for property {@link #getFileSize fileSize}.
         * 
         * Specifies the size of the uploaded file (in megabytes).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFileSize(fFileSize: number): this;

        /**
            * Sets the associated {@link #getFileUploader fileUploader}.
        */
        public setFileUploader(oFileUploader: sap.ui.core.ID | FileUploader): this;

        /**
            * Sets a new value for property {@link #getMimeType mimeType}.
         * 
         * Specifies the MIME type of the file.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMimeType(sMimeType: string): this;

        /**
            * Sets a new value for property {@link #getSelected selected}.
         * 
         * Defines the selected state of the UploadCollectionItem.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSelected(bSelected: boolean): this;

        /**
            * Sets a new value for property {@link #getThumbnailUrl thumbnailUrl}.
         * 
         * Specifies the URL where the thumbnail of the file is located. This can also be an SAPUI5 icon URL.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setThumbnailUrl(sThumbnailUrl: string): this;

        /**
            * Sets a new value for property {@link #getUploadedDate uploadedDate}.
         * 
         * Specifies the date on which the file was uploaded. The application has to define the date format.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setUploadedDate(sUploadedDate: string): this;

        /**
            * Sets a new value for property {@link #getUrl url}.
         * 
         * Specifies the URL where the file is located. If the application doesn't provide a value for this property, the icon and the file name of the UploadCollectionItem are not clickable.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setUrl(sUrl: string): this;

        /**
            * Sets a new value for property {@link #getVisibleDelete visibleDelete}.
         * 
         * Show/Hide the Delete button. If the value is true, the Delete button is visible. If the value is false, the Delete button is not visible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleDelete(bVisibleDelete: boolean): this;

        /**
            * Sets a new value for property {@link #getVisibleEdit visibleEdit}.
         * 
         * Show/Hide the Edit button. If the value is true, the Edit button is visible. If the value is false, the Edit button is not visible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleEdit(bVisibleEdit: boolean): this;

        /**
            * Unbinds aggregation {@link #getAttributes attributes} from model data.
        */
        public unbindAttributes(): this;

        /**
            * Unbinds aggregation {@link #getMarkers markers} from model data.
        */
        public unbindMarkers(): this;

        /**
            * Unbinds aggregation {@link #getStatuses statuses} from model data.
        */
        public unbindStatuses(): this;

    }
}