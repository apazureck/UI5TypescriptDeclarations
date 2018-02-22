declare module 'sap/m/UploadCollection' {
    import { Event } from 'sap/ui/base/Event';
    import { UploadCollectionItem } from 'sap/m/UploadCollectionItem';
    import { UploadCollectionParameter } from 'sap/m/UploadCollectionParameter';
    import { Toolbar } from 'sap/m/Toolbar';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { OverflowToolbar } from 'sap/m/OverflowToolbar';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IUploadCollectionSettings extends IControlSettings {
        fileType?: string[];
        maximumFilenameLength?: number;
        maximumFileSize?: number;
        mimeType?: string[];
        multiple?: boolean;
        noDataText?: string;
        noDataDescription?: string;
        sameFilenameAllowed?: boolean;
        showSeparators?: sap.m.ListSeparators;
        uploadEnabled?: boolean;
        uploadUrl?: string;
        instantUpload?: boolean;
        numberOfAttachmentsText?: string;
        mode?: sap.m.ListMode;
        uploadButtonInvisible?: boolean;
        terminationEnabled?: boolean;
    }

    /**
    
    */
    export class UploadCollection extends Control {

        /**
            * Constructor for a new UploadCollection.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IUploadCollectionSettings);


        /**
            * Adds some headerParameter to the aggregation {@link #getHeaderParameters headerParameters}.
        */
        public addHeaderParameter(oHeaderParameter: UploadCollectionParameter): this;

        /**
            * Adds some item to the aggregation {@link #getItems items}.
        */
        public addItem(oItem: UploadCollectionItem): this;

        /**
            * Adds some parameter to the aggregation {@link #getParameters parameters}.
        */
        public addParameter(oParameter: UploadCollectionParameter): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeUploadStarts beforeUploadStarts} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered before the actual upload starts. An event is fired per file. All the necessary header parameters should be set here.
        */
        attachBeforeUploadStarts<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Specifies the name of the file to be uploaded. */
            fileName: string, /* * Adds a header parameter to the file that will be uploaded. */
            addHeaderParameter: (() => any), /* * Returns the corresponding header parameter (type sap.m.UploadCollectionParameter) if available. */
            getHeaderParameter: (() => any),
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeUploadStarts beforeUploadStarts} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered before the actual upload starts. An event is fired per file. All the necessary header parameters should be set here.
        */
        attachBeforeUploadStarts<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Specifies the name of the file to be uploaded. */
            fileName: string, /* * Adds a header parameter to the file that will be uploaded. */
            addHeaderParameter: (() => any), /* * Returns the corresponding header parameter (type sap.m.UploadCollectionParameter) if available. */
            getHeaderParameter: (() => any),
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered when files are selected in the FileUploader dialog. Applications can set parameters and headerParameters which will be dispatched to the embedded FileUploader control. Limitation: parameters and headerParameters are not supported by Internet Explorer 9.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A unique Id of the attached document. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            documentId: string, /* * A FileList of individually selected files from the underlying system. See www.w3.org for the FileList Interface definition. Limitation: Internet Explorer 9 supports only single file with property file.name. Since version 1.28.0. */
            files: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered when files are selected in the FileUploader dialog. Applications can set parameters and headerParameters which will be dispatched to the embedded FileUploader control. Limitation: parameters and headerParameters are not supported by Internet Explorer 9.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A unique Id of the attached document. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            documentId: string, /* * A FileList of individually selected files from the underlying system. See www.w3.org for the FileList Interface definition. Limitation: Internet Explorer 9 supports only single file with property file.name. Since version 1.28.0. */
            files: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:fileDeleted fileDeleted} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered when an uploaded attachment is selected and the Delete button is pressed.
        */
        attachFileDeleted<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A unique Id of the attached document. This parameter is deprecated since 1.28.0. Use the <code>item</code> parameter instead. */
            documentId: string, /* * An item to be deleted from the collection. Since version 1.28.0. */
            item: UploadCollectionItem,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:fileDeleted fileDeleted} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered when an uploaded attachment is selected and the Delete button is pressed.
        */
        attachFileDeleted<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A unique Id of the attached document. This parameter is deprecated since 1.28.0. Use the <code>item</code> parameter instead. */
            documentId: string, /* * An item to be deleted from the collection. Since version 1.28.0. */
            item: UploadCollectionItem,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filenameLengthExceed filenameLengthExceed} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered when the name of a chosen file is longer than the value specified with the maximumFilenameLength property (only if provided by the application).
        */
        attachFilenameLengthExceed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A unique Id of the attached document. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            documentId: string, /* * A FileList of individually selected files from the underlying system. Limitation: Internet Explorer 9 supports only single file with property file.name. Since version 1.28.0. */
            files: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filenameLengthExceed filenameLengthExceed} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered when the name of a chosen file is longer than the value specified with the maximumFilenameLength property (only if provided by the application).
        */
        attachFilenameLengthExceed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A unique Id of the attached document. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            documentId: string, /* * A FileList of individually selected files from the underlying system. Limitation: Internet Explorer 9 supports only single file with property file.name. Since version 1.28.0. */
            files: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:fileRenamed fileRenamed} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered when the file name is changed.
        */
        attachFileRenamed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A unique Id of the attached document. This parameter is deprecated since 1.28.0. Use the <code>item</code> parameter instead. */
            documentId: string, /* * The new file name. This parameter is deprecated since 1.28.0. Use the <code>item</code> parameter instead. */
            fileName: string, /* * The renamed UI element as an UploadCollectionItem. Since 1.28.0. */
            item: UploadCollectionItem,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:fileRenamed fileRenamed} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered when the file name is changed.
        */
        attachFileRenamed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A unique Id of the attached document. This parameter is deprecated since 1.28.0. Use the <code>item</code> parameter instead. */
            documentId: string, /* * The new file name. This parameter is deprecated since 1.28.0. Use the <code>item</code> parameter instead. */
            fileName: string, /* * The renamed UI element as an UploadCollectionItem. Since 1.28.0. */
            item: UploadCollectionItem,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:fileSizeExceed fileSizeExceed} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered when the file size of an uploaded file is exceeded (only if the maxFileSize property was provided by the application). This event is not supported by Internet Explorer 9.
        */
        attachFileSizeExceed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A unique Id of the attached document. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            documentId: string, /* * The size in MB of a file to be uploaded. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            fileSize: string, /* * A FileList of individually selected files from the underlying system. Limitation: Internet Explorer 9 supports only single file with property file.name. Since 1.28.0. */
            files: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:fileSizeExceed fileSizeExceed} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered when the file size of an uploaded file is exceeded (only if the maxFileSize property was provided by the application). This event is not supported by Internet Explorer 9.
        */
        attachFileSizeExceed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A unique Id of the attached document. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            documentId: string, /* * The size in MB of a file to be uploaded. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            fileSize: string, /* * A FileList of individually selected files from the underlying system. Limitation: Internet Explorer 9 supports only single file with property file.name. Since 1.28.0. */
            files: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * Fires when selection is changed via user interaction inside the control.
        */
        attachSelectionChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item whose selection has changed. In <code>MultiSelect</code> mode, only the topmost selected item is returned. This parameter can be used for single-selection modes. */
            selectedItem: UploadCollectionItem, /* * Array of items whose selection has changed. This parameter can be used for <code>MultiSelect</code> mode. */
            selectedItems: {}, /* * Indicates whether the <code>listItem</code> parameter is selected or not. */
            selected: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:selectionChange selectionChange} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * Fires when selection is changed via user interaction inside the control.
        */
        attachSelectionChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The item whose selection has changed. In <code>MultiSelect</code> mode, only the topmost selected item is returned. This parameter can be used for single-selection modes. */
            selectedItem: UploadCollectionItem, /* * Array of items whose selection has changed. This parameter can be used for <code>MultiSelect</code> mode. */
            selectedItems: {}, /* * Indicates whether the <code>listItem</code> parameter is selected or not. */
            selected: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:typeMissmatch typeMissmatch} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered when the file type or the MIME type don't match the permitted types (only if the fileType property or the mimeType property are provided by the application).
        */
        attachTypeMissmatch<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A unique Id of the attached document. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            documentId: string, /* * File type. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            fileType: string, /* * MIME type. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            mimeType: string, /* * A FileList of individually selected files from the underlying system. Limitation: Internet Explorer 9 supports only single file. Since 1.28.0. */
            files: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:typeMissmatch typeMissmatch} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered when the file type or the MIME type don't match the permitted types (only if the fileType property or the mimeType property are provided by the application).
        */
        attachTypeMissmatch<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * A unique Id of the attached document. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            documentId: string, /* * File type. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            fileType: string, /* * MIME type. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            mimeType: string, /* * A FileList of individually selected files from the underlying system. Limitation: Internet Explorer 9 supports only single file. Since 1.28.0. */
            files: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:uploadComplete uploadComplete} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered as soon as the upload request is completed.
        */
        attachUploadComplete<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Ready state XHR. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            readyStateXHR: string, /* * Response of the completed upload request. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            response: string, /* * Status Code of the completed upload event. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            status: string, /* * A list of uploaded files. Each entry contains the following members. fileName : The name of a file to be uploaded. response : Response message which comes from the server. On the server side, this response has to be put within the 'body' tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios. reponse : deprecated Since version 1.48.0. This parameter is deprecated, use parameter response instead. responseRaw : HTTP-Response which comes from the server. This property is not supported by Internet Explorer Versions lower than 9. status : Status of the XHR request. This property is not supported by Internet Explorer 9 and lower. headers : HTTP-Response-Headers which come from the server. Provided as a JSON-map, i.e. each header-field is reflected by a property in the header-object, with the property value reflecting the header-field's content. This property is not supported by Internet Explorer 9 and lower. Since 1.28.0. */
            files: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:uploadComplete uploadComplete} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered as soon as the upload request is completed.
        */
        attachUploadComplete<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Ready state XHR. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            readyStateXHR: string, /* * Response of the completed upload request. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            response: string, /* * Status Code of the completed upload event. This parameter is deprecated since 1.28.0. Use the <code>files</code> parameter instead. */
            status: string, /* * A list of uploaded files. Each entry contains the following members. fileName : The name of a file to be uploaded. response : Response message which comes from the server. On the server side, this response has to be put within the 'body' tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios. reponse : deprecated Since version 1.48.0. This parameter is deprecated, use parameter response instead. responseRaw : HTTP-Response which comes from the server. This property is not supported by Internet Explorer Versions lower than 9. status : Status of the XHR request. This property is not supported by Internet Explorer 9 and lower. headers : HTTP-Response-Headers which come from the server. Provided as a JSON-map, i.e. each header-field is reflected by a property in the header-object, with the property value reflecting the header-field's content. This property is not supported by Internet Explorer 9 and lower. Since 1.28.0. */
            files: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:uploadTerminated uploadTerminated} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered as soon as the upload request was terminated by the user.
        */
        attachUploadTerminated<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Specifies the name of the file of which the upload is to be terminated. */
            fileName: string, /* * This callback function returns the corresponding header parameter (type sap.m.UploadCollectionParameter) if available. */
            getHeaderParameter: (() => any),
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:uploadTerminated uploadTerminated} event of this `sap.m.UploadCollection`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.UploadCollection` itself.
         * 
         * The event is triggered as soon as the upload request was terminated by the user.
        */
        attachUploadTerminated<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Specifies the name of the file of which the upload is to be terminated. */
            fileName: string, /* * This callback function returns the corresponding header parameter (type sap.m.UploadCollectionParameter) if available. */
            getHeaderParameter: (() => any),
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Binds aggregation {@link #getItems items} to model data.
         * 
         * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of `oBindingInfo`.
        */
        public bindItems(oBindingInfo: {}): this;

        /**
            * Destroys all the headerParameters in the aggregation {@link #getHeaderParameters headerParameters}.
        */
        public destroyHeaderParameters(): this;

        /**
            * Destroys the infoToolbar in the aggregation {@link #getInfoToolbar infoToolbar}.
        */
        public destroyInfoToolbar(): this;

        /**
            * Destroys all the items in the aggregation {@link #getItems items}.
        */
        public destroyItems(): this;

        /**
            * Destroys all the parameters in the aggregation {@link #getParameters parameters}.
        */
        public destroyParameters(): this;

        /**
            * Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.
        */
        public destroyToolbar(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeUploadStarts beforeUploadStarts} event of this `sap.m.UploadCollection`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeUploadStarts(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.m.UploadCollection`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:fileDeleted fileDeleted} event of this `sap.m.UploadCollection`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFileDeleted(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:filenameLengthExceed filenameLengthExceed} event of this `sap.m.UploadCollection`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFilenameLengthExceed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:fileRenamed fileRenamed} event of this `sap.m.UploadCollection`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFileRenamed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:fileSizeExceed fileSizeExceed} event of this `sap.m.UploadCollection`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFileSizeExceed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:selectionChange selectionChange} event of this `sap.m.UploadCollection`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelectionChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:typeMissmatch typeMissmatch} event of this `sap.m.UploadCollection`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTypeMissmatch(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:uploadComplete uploadComplete} event of this `sap.m.UploadCollection`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUploadComplete(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:uploadTerminated uploadTerminated} event of this `sap.m.UploadCollection`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUploadTerminated(fnFunction: (() => any), oListener: {}): this;

        /**
            * Downloads the given item. This function delegates to {@link sap.m.UploadCollectionItem.download UploadCollectionItem.download}.
        */
        public downloadItem(uploadCollectionItem: UploadCollectionItem, askForLocation: boolean): boolean;

        /**
            * Creates a new subclass of class sap.m.UploadCollection with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:beforeUploadStarts beforeUploadStarts} to attached listeners.
        */
        protected fireBeforeUploadStarts(mParameters?: { fileName?: string, addHeaderParameter?: (() => any), getHeaderParameter?: (() => any), }): this;

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { documentId?: string, files?: {}, }): this;

        /**
            * Fires event {@link #event:fileDeleted fileDeleted} to attached listeners.
        */
        protected fireFileDeleted(mParameters?: { documentId?: string, item?: UploadCollectionItem, }): this;

        /**
            * Fires event {@link #event:filenameLengthExceed filenameLengthExceed} to attached listeners.
        */
        protected fireFilenameLengthExceed(mParameters?: { documentId?: string, files?: {}, }): this;

        /**
            * Fires event {@link #event:fileRenamed fileRenamed} to attached listeners.
        */
        protected fireFileRenamed(mParameters?: { documentId?: string, fileName?: string, item?: UploadCollectionItem, }): this;

        /**
            * Fires event {@link #event:fileSizeExceed fileSizeExceed} to attached listeners.
        */
        protected fireFileSizeExceed(mParameters?: { documentId?: string, fileSize?: string, files?: {}, }): this;

        /**
            * Fires event {@link #event:selectionChange selectionChange} to attached listeners.
        */
        protected fireSelectionChange(mParameters?: { selectedItem?: UploadCollectionItem, selectedItems?: {}, selected?: boolean, }): this;

        /**
            * Fires event {@link #event:typeMissmatch typeMissmatch} to attached listeners.
        */
        protected fireTypeMissmatch(mParameters?: { documentId?: string, fileType?: string, mimeType?: string, files?: {}, }): this;

        /**
            * Fires event {@link #event:uploadComplete uploadComplete} to attached listeners.
        */
        protected fireUploadComplete(mParameters?: { readyStateXHR?: string, response?: string, status?: string, files?: {}, }): this;

        /**
            * Fires event {@link #event:uploadTerminated uploadTerminated} to attached listeners.
        */
        protected fireUploadTerminated(mParameters?: { fileName?: string, getHeaderParameter?: (() => any), }): this;

        /**
            * Gets current value of property {@link #getFileType fileType}.
         * 
         * Defines the allowed file types for the upload. The chosen files will be checked against an array of file types. If at least one file does not fit the file type requirements, the upload is prevented. Example: ["jpg", "png", "bmp"].
        */
        public getFileType(): {};

        /**
            * Gets content of aggregation {@link #getHeaderParameters headerParameters}.
         * 
         * Specifies the header parameters for the FileUploader that are submitted only with XHR requests. Header parameters are not supported by Internet Explorer 8 and 9.
        */
        public getHeaderParameters(): {};

        /**
            * Gets content of aggregation {@link #getInfoToolbar infoToolbar}.
         * 
         * Specifies the info toolbar for filtering information. Sorting information will not displayed.
        */
        public getInfoToolbar(): Toolbar;

        /**
            * Gets current value of property {@link #getInstantUpload instantUpload}.
         * 
         * If false, no upload is triggered when a file is selected. In addition, if a file was selected, a new FileUploader instance is created to ensure that multiple files from multiple folders can be chosen.
         * 
         * Default value is `true`.
        */
        public getInstantUpload(): boolean;

        /**
            * Provides access to the internally used request headers to allow adding them to the "Access-Control-Allow-Headers" header parameter if needed.
        */
        public getInternalRequestHeaderNames(): {};

        /**
            * Gets content of aggregation {@link #getItems items}.
         * 
         * Uploaded items.
        */
        public getItems(): {};

        /**
            * Gets current value of property {@link #getMaximumFilenameLength maximumFilenameLength}.
         * 
         * Specifies the maximum length of a file name. If the maximum file name length is exceeded, the corresponding event 'filenameLengthExceed' is triggered.
        */
        public getMaximumFilenameLength(): number;

        /**
            * Gets current value of property {@link #getMaximumFileSize maximumFileSize}.
         * 
         * Specifies a file size limit in megabytes that prevents the upload if at least one file exceeds the limit. This property is not supported by Internet Explorer 8 and 9.
        */
        public getMaximumFileSize(): number;

        /**
            * Returns a metadata object for class sap.m.UploadCollection.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Gets current value of property {@link #getMimeType mimeType}.
         * 
         * Defines the allowed MIME types of files to be uploaded. The chosen files will be checked against an array of MIME types. If at least one file does not fit the MIME type requirements, the upload is prevented. This property is not supported by Internet Explorer 8 and 9. Example: mimeType ["image/png", "image/jpeg"].
        */
        public getMimeType(): {};

        /**
            * Gets current value of property {@link #getMode mode}.
         * 
         * Defines the selection mode of the control (e.g. None, SingleSelect, MultiSelect, SingleSelectLeft, SingleSelectMaster). Since the UploadCollection reacts like a list for attachments, the API is close to the ListBase Interface. sap.m.ListMode.Delete mode is not supported and will be automatically set to sap.m.ListMode.None. In addition, if instant upload is set to false the mode sap.m.ListMode.MultiSelect is not supported and will be automatically set to sap.m.ListMode.None.
         * 
         * Default value is `None`.
        */
        public getMode(): sap.m.ListMode;

        /**
            * Gets current value of property {@link #getMultiple multiple}.
         * 
         * Lets the user select multiple files from the same folder and then upload them. Internet Explorer 8 and 9 do not support this property. Please note that the various operating systems for mobile devices can react differently to the property so that fewer upload functions may be available in some cases.
         * 
         * If multiple property is set to false, the control shows an error message if more than one file is chosen for drag & drop.
         * 
         * Default value is `false`.
        */
        public getMultiple(): boolean;

        /**
            * Gets current value of property {@link #getNoDataDescription noDataDescription}.
         * 
         * Allows you to set your own text for the 'No data' description label.
        */
        public getNoDataDescription(): string;

        /**
            * Gets current value of property {@link #getNoDataText noDataText}.
         * 
         * Allows you to set your own text for the 'No data' text label.
        */
        public getNoDataText(): string;

        /**
            * Gets current value of property {@link #getNumberOfAttachmentsText numberOfAttachmentsText}.
         * 
         * Sets the title text in the toolbar of the list of attachments. To show as well the number of attachments in brackets like the default text does. The number of attachments could be retrieved via "getItems().length". If a new title is set, the default is deactivated. The default value is set to language-dependent "Attachments (n)".
        */
        public getNumberOfAttachmentsText(): string;

        /**
            * Gets content of aggregation {@link #getParameters parameters}.
         * 
         * Specifies the parameters for the FileUploader that are rendered as a hidden input field.
        */
        public getParameters(): {};

        /**
            * Gets current value of property {@link #getSameFilenameAllowed sameFilenameAllowed}.
         * 
         * Allows the user to use the same name for a file when editing the file name. 'Same name' refers to an already existing file name in the list.
         * 
         * Default value is `false`.
        */
        public getSameFilenameAllowed(): boolean;

        /**
            * Retrieves the currently selected UploadCollectionItem.
        */
        public getSelectedItem(): UploadCollectionItem | any;

        /**
            * Returns an array containing the selected UploadCollectionItems.
        */
        public getSelectedItems(): {};

        /**
            * Gets current value of property {@link #getShowSeparators showSeparators}.
         * 
         * Defines whether separators are shown between list items.
         * 
         * Default value is `All`.
        */
        public getShowSeparators(): sap.m.ListSeparators;

        /**
            * Gets current value of property {@link #getTerminationEnabled terminationEnabled}.
         * 
         * If true, the button that is used to terminate the instant file upload gets visible. The button normally appears when a file is being uploaded.
         * 
         * Default value is `true`.
        */
        public getTerminationEnabled(): boolean;

        /**
            * Gets content of aggregation {@link #getToolbar toolbar}.
         * 
         * Specifies the toolbar.
        */
        public getToolbar(): OverflowToolbar;

        /**
            * Gets current value of property {@link #getUploadButtonInvisible uploadButtonInvisible}.
         * 
         * If true, the button used for uploading files is invisible.
         * 
         * Default value is `false`.
        */
        public getUploadButtonInvisible(): boolean;

        /**
            * Gets current value of property {@link #getUploadEnabled uploadEnabled}.
         * 
         * Enables the upload of a file.
         * 
         * Default value is `true`.
        */
        public getUploadEnabled(): boolean;

        /**
            * Gets current value of property {@link #getUploadUrl uploadUrl}.
         * 
         * Specifies the URL where the uploaded files have to be stored.
         * 
         * Default value is `../../../upload`.
        */
        public getUploadUrl(): string;

        /**
            * Checks for the provided `sap.m.UploadCollectionParameter` in the aggregation {@link #getHeaderParameters headerParameters}. and returns its index if found or -1 otherwise.
        */
        public indexOfHeaderParameter(oHeaderParameter: UploadCollectionParameter): number;

        /**
            * Checks for the provided `sap.m.UploadCollectionItem` in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise.
        */
        public indexOfItem(oItem: UploadCollectionItem): number;

        /**
            * Checks for the provided `sap.m.UploadCollectionParameter` in the aggregation {@link #getParameters parameters}. and returns its index if found or -1 otherwise.
        */
        public indexOfParameter(oParameter: UploadCollectionParameter): number;

        /**
            * Inserts a headerParameter into the aggregation {@link #getHeaderParameters headerParameters}.
        */
        public insertHeaderParameter(oHeaderParameter: UploadCollectionParameter, iIndex: number): this;

        /**
            * Inserts a item into the aggregation {@link #getItems items}.
        */
        public insertItem(oItem: UploadCollectionItem, iIndex: number): this;

        /**
            * Inserts a parameter into the aggregation {@link #getParameters parameters}.
        */
        public insertParameter(oParameter: UploadCollectionParameter, iIndex: number): this;

        /**
            * Opens the FileUploader dialog. When an UploadCollectionItem is provided, this method can be used to update a file with a new version. In this case, the upload progress can be sequenced using the events: beforeUploadStarts, uploadComplete and uploadTerminated. For this use, multiple properties from the UploadCollection have to be set to false. If no UploadCollectionItem is provided, only the dialog opens and no further configuration of the UploadCollection is needed.
        */
        public openFileDialog(item: UploadCollectionItem): this;

        /**
            * Removes all the controls from the aggregation {@link #getHeaderParameters headerParameters}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllHeaderParameters(): {};

        /**
            * Removes all the controls from the aggregation {@link #getItems items}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllItems(): {};

        /**
            * Removes all the controls from the aggregation {@link #getParameters parameters}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllParameters(): {};

        /**
            * Removes a headerParameter from the aggregation {@link #getHeaderParameters headerParameters}.
        */
        public removeHeaderParameter(vHeaderParameter: number | string | UploadCollectionParameter): UploadCollectionParameter;

        /**
            * Removes a item from the aggregation {@link #getItems items}.
        */
        public removeItem(vItem: number | string | UploadCollectionItem): UploadCollectionItem;

        /**
            * Removes a parameter from the aggregation {@link #getParameters parameters}.
        */
        public removeParameter(vParameter: number | string | UploadCollectionParameter): UploadCollectionParameter;

        /**
            * Select all items in "MultiSelection" mode.
        */
        public selectAll(): this;

        /**
            * Sets a new value for property {@link #getFileType fileType}.
         * 
         * Defines the allowed file types for the upload. The chosen files will be checked against an array of file types. If at least one file does not fit the file type requirements, the upload is prevented. Example: ["jpg", "png", "bmp"].
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFileType(sFileType: {}): this;

        /**
            * Sets the aggregated {@link #getInfoToolbar infoToolbar}.
        */
        public setInfoToolbar(oInfoToolbar: Toolbar): this;

        /**
            * Sets a new value for property {@link #getInstantUpload instantUpload}.
         * 
         * If false, no upload is triggered when a file is selected. In addition, if a file was selected, a new FileUploader instance is created to ensure that multiple files from multiple folders can be chosen.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setInstantUpload(bInstantUpload: boolean): this;

        /**
            * Sets a new value for property {@link #getMaximumFilenameLength maximumFilenameLength}.
         * 
         * Specifies the maximum length of a file name. If the maximum file name length is exceeded, the corresponding event 'filenameLengthExceed' is triggered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaximumFilenameLength(iMaximumFilenameLength: number): this;

        /**
            * Sets a new value for property {@link #getMaximumFileSize maximumFileSize}.
         * 
         * Specifies a file size limit in megabytes that prevents the upload if at least one file exceeds the limit. This property is not supported by Internet Explorer 8 and 9.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaximumFileSize(fMaximumFileSize: number): this;

        /**
            * Sets a new value for property {@link #getMimeType mimeType}.
         * 
         * Defines the allowed MIME types of files to be uploaded. The chosen files will be checked against an array of MIME types. If at least one file does not fit the MIME type requirements, the upload is prevented. This property is not supported by Internet Explorer 8 and 9. Example: mimeType ["image/png", "image/jpeg"].
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMimeType(sMimeType: {}): this;

        /**
            * Sets a new value for property {@link #getMode mode}.
         * 
         * Defines the selection mode of the control (e.g. None, SingleSelect, MultiSelect, SingleSelectLeft, SingleSelectMaster). Since the UploadCollection reacts like a list for attachments, the API is close to the ListBase Interface. sap.m.ListMode.Delete mode is not supported and will be automatically set to sap.m.ListMode.None. In addition, if instant upload is set to false the mode sap.m.ListMode.MultiSelect is not supported and will be automatically set to sap.m.ListMode.None.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setMode(sMode: sap.m.ListMode): this;

        /**
            * Sets a new value for property {@link #getMultiple multiple}.
         * 
         * Lets the user select multiple files from the same folder and then upload them. Internet Explorer 8 and 9 do not support this property. Please note that the various operating systems for mobile devices can react differently to the property so that fewer upload functions may be available in some cases.
         * 
         * If multiple property is set to false, the control shows an error message if more than one file is chosen for drag & drop.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setMultiple(bMultiple: boolean): this;

        /**
            * Sets a new value for property {@link #getNoDataDescription noDataDescription}.
         * 
         * Allows you to set your own text for the 'No data' description label.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNoDataDescription(sNoDataDescription: string): this;

        /**
            * Sets a new value for property {@link #getNoDataText noDataText}.
         * 
         * Allows you to set your own text for the 'No data' text label.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNoDataText(sNoDataText: string): this;

        /**
            * Sets a new value for property {@link #getNumberOfAttachmentsText numberOfAttachmentsText}.
         * 
         * Sets the title text in the toolbar of the list of attachments. To show as well the number of attachments in brackets like the default text does. The number of attachments could be retrieved via "getItems().length". If a new title is set, the default is deactivated. The default value is set to language-dependent "Attachments (n)".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setNumberOfAttachmentsText(sNumberOfAttachmentsText: string): this;

        /**
            * Sets a new value for property {@link #getSameFilenameAllowed sameFilenameAllowed}.
         * 
         * Allows the user to use the same name for a file when editing the file name. 'Same name' refers to an already existing file name in the list.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSameFilenameAllowed(bSameFilenameAllowed: boolean): this;

        /**
            * Selects or deselects the given list item.
        */
        public setSelectedItem(uploadCollectionItem: UploadCollectionItem, select: boolean): this;

        /**
            * Sets an UploadCollectionItem to be selected by ID. In single selection mode, the method removes the previous selection.
        */
        public setSelectedItemById(id: string, select: boolean): this;

        /**
            * Sets a new value for property {@link #getShowSeparators showSeparators}.
         * 
         * Defines whether separators are shown between list items.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `All`.
        */
        public setShowSeparators(sShowSeparators: sap.m.ListSeparators): this;

        /**
            * Sets a new value for property {@link #getTerminationEnabled terminationEnabled}.
         * 
         * If true, the button that is used to terminate the instant file upload gets visible. The button normally appears when a file is being uploaded.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setTerminationEnabled(bTerminationEnabled: boolean): this;

        /**
            * Sets the aggregated {@link #getToolbar toolbar}.
        */
        public setToolbar(oToolbar: OverflowToolbar): this;

        /**
            * Sets a new value for property {@link #getUploadButtonInvisible uploadButtonInvisible}.
         * 
         * If true, the button used for uploading files is invisible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setUploadButtonInvisible(bUploadButtonInvisible: boolean): this;

        /**
            * Sets a new value for property {@link #getUploadEnabled uploadEnabled}.
         * 
         * Enables the upload of a file.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setUploadEnabled(bUploadEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getUploadUrl uploadUrl}.
         * 
         * Specifies the URL where the uploaded files have to be stored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `../../../upload`.
        */
        public setUploadUrl(sUploadUrl: string): this;

        /**
            * Unbinds aggregation {@link #getItems items} from model data.
        */
        public unbindItems(): this;

        /**
            * Starts the upload for all selected files.
        */
        public upload(): any;

    }
}