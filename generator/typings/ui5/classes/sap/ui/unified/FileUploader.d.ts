declare module 'sap/ui/unified/FileUploader' {
    import { Event } from 'sap/ui/base/Event';
    import { FileUploaderParameter } from 'sap/ui/unified/FileUploaderParameter';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { FileUploaderXHRSettings } from 'sap/ui/unified/FileUploaderXHRSettings';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IFileUploaderSettings extends IControlSettings {
        value?: string;
        enabled?: boolean;
        uploadUrl?: sap.ui.core.URI;
        name?: string;
        width?: sap.ui.core.CSSSize;
        uploadOnChange?: boolean;
        additionalData?: string;
        sameFilenameAllowed?: boolean;
        buttonText?: string;
        fileType?: string[];
        multiple?: boolean;
        maximumFileSize?: number;
        mimeType?: string[];
        sendXHR?: boolean;
        placeholder?: string;
        style?: string;
        buttonOnly?: boolean;
        useMultipart?: boolean;
        maximumFilenameLength?: number;
        valueState?: sap.ui.core.ValueState;
        valueStateText?: string;
        icon?: sap.ui.core.URI;
        iconHovered?: sap.ui.core.URI;
        iconSelected?: sap.ui.core.URI;
        iconFirst?: boolean;
        iconOnly?: boolean;
    }

    /**
    
    */
    export class FileUploader extends Control {

        /**
            * Constructor for a new FileUploader.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IFileUploaderSettings);


        /**
            * Aborts the currently running upload.
        */
        public abort(): any;

        /**
            * Adds some headerParameter to the aggregation {@link #getHeaderParameters headerParameters}.
        */
        public addHeaderParameter(oHeaderParameter: FileUploaderParameter): this;

        /**
            * Adds some parameter to the aggregation {@link #getParameters parameters}.
        */
        public addParameter(oParameter: FileUploaderParameter): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired when the value of the file path has been changed.
        */
        attachChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * New file path value. */
            newValue: string, /* * Files. */
            files: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired when the value of the file path has been changed.
        */
        attachChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * New file path value. */
            newValue: string, /* * Files. */
            files: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:fileAllowed fileAllowed} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired when the file is allowed for upload on client side.
        */
        attachFileAllowed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:fileAllowed fileAllowed} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired when the file is allowed for upload on client side.
        */
        attachFileAllowed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filenameLengthExceed filenameLengthExceed} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired, if the filename of a chosen file is longer than the value specified with the maximumFilenameLength property.
        */
        attachFilenameLengthExceed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The filename, which is longer than specified by the value of the property maximumFilenameLength. */
            fileName: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:filenameLengthExceed filenameLengthExceed} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired, if the filename of a chosen file is longer than the value specified with the maximumFilenameLength property.
        */
        attachFilenameLengthExceed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The filename, which is longer than specified by the value of the property maximumFilenameLength. */
            fileName: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:fileSizeExceed fileSizeExceed} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired when the size of a file is above the maximumFileSize property. This event is not supported by Internet Explorer 9 (same restriction as for the property maximumFileSize).
        */
        attachFileSizeExceed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of a file to be uploaded. */
            fileName: string, /* * The size in MB of a file to be uploaded. */
            fileSize: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:fileSizeExceed fileSizeExceed} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired when the size of a file is above the maximumFileSize property. This event is not supported by Internet Explorer 9 (same restriction as for the property maximumFileSize).
        */
        attachFileSizeExceed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of a file to be uploaded. */
            fileName: string, /* * The size in MB of a file to be uploaded. */
            fileSize: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:typeMissmatch typeMissmatch} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired when the type of a file does not match the mimeType or fileType property.
        */
        attachTypeMissmatch<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of a file to be uploaded. */
            fileName: string, /* * The file ending of a file to be uploaded. */
            fileType: string, /* * The MIME type of a file to be uploaded. */
            mimeType: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:typeMissmatch typeMissmatch} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired when the type of a file does not match the mimeType or fileType property.
        */
        attachTypeMissmatch<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of a file to be uploaded. */
            fileName: string, /* * The file ending of a file to be uploaded. */
            fileType: string, /* * The MIME type of a file to be uploaded. */
            mimeType: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:uploadAborted uploadAborted} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired after the current upload has been aborted. This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 9.
        */
        attachUploadAborted<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of a file to be uploaded. */
            fileName: string, /* * Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9. */
            requestHeaders: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:uploadAborted uploadAborted} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired after the current upload has been aborted. This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 9.
        */
        attachUploadAborted<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of a file to be uploaded. */
            fileName: string, /* * Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9. */
            requestHeaders: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:uploadComplete uploadComplete} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired as soon as the upload request is completed (either successful or unsuccessful). To see if the upload request was successful, check the 'state' parameter for a value 2xx. The uploads actual progress can be retrieved via the 'uploadProgress' Event. However this covers only the client side of the Upload process and does not give any success status from the server.
        */
        attachUploadComplete<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of a file to be uploaded. */
            fileName: string, /* * Response message which comes from the server. On the server side this response has to be put within the &quot;body&quot; tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios. */
            response: string, /* * ReadyState of the XHR request. Required for receiving a readyState is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9. */
            readyStateXHR: string, /* * Status of the XHR request. Required for receiving a status is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9. */
            status: string, /* * Http-Response which comes from the server. Required for receiving "responseRaw" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9. */
            responseRaw: string, /* * Http-Response-Headers which come from the server. provided as a JSON-map, i.e. each header-field is reflected by a property in the header-object, with the property value reflecting the header-field's content. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9. */
            headers: {}, /* * Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9. */
            requestHeaders: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:uploadComplete uploadComplete} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired as soon as the upload request is completed (either successful or unsuccessful). To see if the upload request was successful, check the 'state' parameter for a value 2xx. The uploads actual progress can be retrieved via the 'uploadProgress' Event. However this covers only the client side of the Upload process and does not give any success status from the server.
        */
        attachUploadComplete<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of a file to be uploaded. */
            fileName: string, /* * Response message which comes from the server. On the server side this response has to be put within the &quot;body&quot; tags of the response document of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain scenarios. */
            response: string, /* * ReadyState of the XHR request. Required for receiving a readyState is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9. */
            readyStateXHR: string, /* * Status of the XHR request. Required for receiving a status is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9. */
            status: string, /* * Http-Response which comes from the server. Required for receiving "responseRaw" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9. */
            responseRaw: string, /* * Http-Response-Headers which come from the server. provided as a JSON-map, i.e. each header-field is reflected by a property in the header-object, with the property value reflecting the header-field's content. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9. */
            headers: {}, /* * Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9. */
            requestHeaders: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:uploadProgress uploadProgress} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired after the upload has started and before the upload is completed and contains progress information related to the running upload. Depending on file size, band width and used browser the event is fired once or multiple times. This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 9.
        */
        attachUploadProgress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Indicates whether or not the relative upload progress can be calculated out of loaded and total. */
            lengthComputable: boolean, /* * The number of bytes of the file which have been uploaded by to the time the event was fired. */
            loaded: number, /* * The total size of the file to be uploaded in byte. */
            total: number, /* * The name of a file to be uploaded. */
            fileName: string, /* * Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9. */
            requestHeaders: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:uploadProgress uploadProgress} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired after the upload has started and before the upload is completed and contains progress information related to the running upload. Depending on file size, band width and used browser the event is fired once or multiple times. This is event is only supported with property sendXHR set to true, i.e. the event is not supported in Internet Explorer 9.
        */
        attachUploadProgress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Indicates whether or not the relative upload progress can be calculated out of loaded and total. */
            lengthComputable: boolean, /* * The number of bytes of the file which have been uploaded by to the time the event was fired. */
            loaded: number, /* * The total size of the file to be uploaded in byte. */
            total: number, /* * The name of a file to be uploaded. */
            fileName: string, /* * Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9. */
            requestHeaders: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:uploadStart uploadStart} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired before an upload is started.
        */
        attachUploadStart<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of a file to be uploaded. */
            fileName: string, /* * Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9. */
            requestHeaders: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:uploadStart uploadStart} event of this `sap.ui.unified.FileUploader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
         * 
         * Event is fired before an upload is started.
        */
        attachUploadStart<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The name of a file to be uploaded. */
            fileName: string, /* * Http-Request-Headers. Required for receiving "header" is to set the property "sendXHR" to true. This property is not supported by Internet Explorer 9. */
            requestHeaders: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Clears the content of the FileUploader. The attached additional data however is retained.
        */
        public clear(): any;

        /**
            * Destroys all the headerParameters in the aggregation {@link #getHeaderParameters headerParameters}.
        */
        public destroyHeaderParameters(): this;

        /**
            * Destroys all the parameters in the aggregation {@link #getParameters parameters}.
        */
        public destroyParameters(): this;

        /**
            * Destroys the xhrSettings in the aggregation {@link #getXhrSettings xhrSettings}.
        */
        public destroyXhrSettings(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.unified.FileUploader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:fileAllowed fileAllowed} event of this `sap.ui.unified.FileUploader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFileAllowed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:filenameLengthExceed filenameLengthExceed} event of this `sap.ui.unified.FileUploader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFilenameLengthExceed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:fileSizeExceed fileSizeExceed} event of this `sap.ui.unified.FileUploader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFileSizeExceed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:typeMissmatch typeMissmatch} event of this `sap.ui.unified.FileUploader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTypeMissmatch(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:uploadAborted uploadAborted} event of this `sap.ui.unified.FileUploader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUploadAborted(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:uploadComplete uploadComplete} event of this `sap.ui.unified.FileUploader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUploadComplete(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:uploadProgress uploadProgress} event of this `sap.ui.unified.FileUploader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUploadProgress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:uploadStart uploadStart} event of this `sap.ui.unified.FileUploader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachUploadStart(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.unified.FileUploader with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:change change} to attached listeners.
        */
        protected fireChange(mParameters?: { newValue?: string, files?: {}, }): this;

        /**
            * Fires event {@link #event:fileAllowed fileAllowed} to attached listeners.
        */
        protected fireFileAllowed(mParameters?: {}): this;

        /**
            * Fires event {@link #event:filenameLengthExceed filenameLengthExceed} to attached listeners.
        */
        protected fireFilenameLengthExceed(mParameters?: { fileName?: string, }): this;

        /**
            * Fires event {@link #event:fileSizeExceed fileSizeExceed} to attached listeners.
        */
        protected fireFileSizeExceed(mParameters?: { fileName?: string, fileSize?: string, }): this;

        /**
            * Fires event {@link #event:typeMissmatch typeMissmatch} to attached listeners.
        */
        protected fireTypeMissmatch(mParameters?: { fileName?: string, fileType?: string, mimeType?: string, }): this;

        /**
            * Fires event {@link #event:uploadAborted uploadAborted} to attached listeners.
        */
        protected fireUploadAborted(mParameters?: { fileName?: string, requestHeaders?: {}, }): this;

        /**
            * Fires event {@link #event:uploadComplete uploadComplete} to attached listeners.
        */
        protected fireUploadComplete(mParameters?: { fileName?: string, response?: string, readyStateXHR?: string, status?: string, responseRaw?: string, headers?: {}, requestHeaders?: {}, }): this;

        /**
            * Fires event {@link #event:uploadProgress uploadProgress} to attached listeners.
        */
        protected fireUploadProgress(mParameters?: { lengthComputable?: boolean, loaded?: number, total?: number, fileName?: string, requestHeaders?: {}, }): this;

        /**
            * Fires event {@link #event:uploadStart uploadStart} to attached listeners.
        */
        protected fireUploadStart(mParameters?: { fileName?: string, requestHeaders?: {}, }): this;

        /**
            * Gets current value of property {@link #getAdditionalData additionalData}.
         * 
         * Additional data that is sent to the back end service. Data will be transmitted as value of a hidden input where the name is derived from the name property with suffix -data.
        */
        public getAdditionalData(): string;

        /**
            * Gets current value of property {@link #getButtonOnly buttonOnly}.
         * 
         * If set to "true", the FileUploader will be rendered as Button only, without showing the InputField.
         * 
         * Default value is `false`.
        */
        public getButtonOnly(): boolean;

        /**
            * Gets current value of property {@link #getButtonText buttonText}.
         * 
         * The Button text can be overwritten using this property.
        */
        public getButtonText(): string;

        /**
            * Gets current value of property {@link #getEnabled enabled}.
         * 
         * Disabled controls have different colors, depending on customer settings.
         * 
         * Default value is `true`.
        */
        public getEnabled(): boolean;

        /**
            * Gets current value of property {@link #getFileType fileType}.
         * 
         * The chosen files will be checked against an array of file types. If at least one file does not fit the file type restriction the upload is prevented. Example: ["jpg", "png", "bmp"].
        */
        public getFileType(): {};

        /**
            * Gets content of aggregation {@link #getHeaderParameters headerParameters}.
         * 
         * The header parameters for the FileUploader which are only submitted with XHR requests. Header parameters are not supported by Internet Explorer 9.
        */
        public getHeaderParameters(): {};

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Icon to be displayed as graphical element within the button. This can be a URI to an image or an icon font URI.
         * 
         * Default value is ``.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconFirst iconFirst}.
         * 
         * If set to true (default), the display sequence is 1. icon 2. control text.
         * 
         * Default value is `true`.
        */
        public getIconFirst(): boolean;

        /**
            * Gets current value of property {@link #getIconHovered iconHovered}.
         * 
         * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon was specified). If not specified the base icon is used. If an icon font icon is used, this property is ignored.
         * 
         * Default value is ``.
        */
        public getIconHovered(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconOnly iconOnly}.
         * 
         * If set to true, the button is displayed without any text.
         * 
         * Default value is `false`.
        */
        public getIconOnly(): boolean;

        /**
            * Gets current value of property {@link #getIconSelected iconSelected}.
         * 
         * Icon to be displayed as graphical element within the button when it is selected (only if also a base icon was specified). If not specified the base or hovered icon is used. If an icon font icon is used, this property is ignored.
         * 
         * Default value is ``.
        */
        public getIconSelected(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getMaximumFilenameLength maximumFilenameLength}.
         * 
         * The maximum length of a filename which the FileUploader will accept. If the maximum filename length is exceeded, the corresponding Event 'filenameLengthExceed' is fired.
        */
        public getMaximumFilenameLength(): number;

        /**
            * Gets current value of property {@link #getMaximumFileSize maximumFileSize}.
         * 
         * A file size limit in megabytes which prevents the upload if at least one file exceeds it. This property is not supported by Internet Explorer 9.
        */
        public getMaximumFileSize(): number;

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
            * Returns a metadata object for class sap.ui.unified.FileUploader.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getMimeType mimeType}.
         * 
         * The chosen files will be checked against an array of mime types. If at least one file does not fit the mime type restriction the upload is prevented. This property is not supported by Internet Explorer 9. Example: mimeType ["image/png", "image/jpeg"].
        */
        public getMimeType(): {};

        /**
            * Gets current value of property {@link #getMultiple multiple}.
         * 
         * Allows multiple files to be chosen and uploaded from the same folder. This property is not supported by Internet Explorer 9.
         * 
         * Default value is `false`.
        */
        public getMultiple(): boolean;

        /**
            * Gets current value of property {@link #getName name}.
         * 
         * Unique control name for identification on the server side after sending data to the server.
        */
        public getName(): string;

        /**
            * Gets content of aggregation {@link #getParameters parameters}.
         * 
         * The parameters for the FileUploader which are rendered as a hidden inputfield.
        */
        public getParameters(): {};

        /**
            * Gets current value of property {@link #getPlaceholder placeholder}.
         * 
         * Placeholder for the text field.
        */
        public getPlaceholder(): string;

        /**
            * Allows to process Blobs before they get uploaded. This API can be used to create custom Blobs and upload these custom Blobs instead of the received/initials Blobs in the parameter `aBlobs`. One use case could be to create and upload zip archives based on the passed Blobs. The default implementation of this API should simply resolve with the received Blobs (parameter `aBlobs`).
         * 
         * This API is only supported in case `sendXHR` is `true`. This means only IE10+ is supported, while IE9 and below is not.
         * 
         * This is a default implementation of the interface `sap.ui.unified.IProcessableBlobs`.
        */
        public getProcessedBlobsFromArray(aBlobs: {}): any;

        /**
            * Gets current value of property {@link #getSameFilenameAllowed sameFilenameAllowed}.
         * 
         * If the FileUploader is configured to upload the file directly after the file is selected it is not allowed to upload a file with the same name again. If a user should be allowed to upload a file with the same name again this parameter has to be "true". A typical use case would be if the files have different paths.
         * 
         * Default value is `false`.
        */
        public getSameFilenameAllowed(): boolean;

        /**
            * Gets current value of property {@link #getSendXHR sendXHR}.
         * 
         * If set to "true", the request will be sent as XHR request instead of a form submit. This property is not supported by Internet Explorer 9.
         * 
         * Default value is `false`.
        */
        public getSendXHR(): boolean;

        /**
            * Gets current value of property {@link #getStyle style}.
         * 
         * Style of the button. "Transparent, "Accept", "Reject", or "Emphasized" is allowed.
        */
        public getStyle(): string;

        /**
            * Gets current value of property {@link #getUploadOnChange uploadOnChange}.
         * 
         * If set to "true", the upload immediately starts after file selection. With the default setting, the upload needs to be explicitly triggered.
         * 
         * Default value is `false`.
        */
        public getUploadOnChange(): boolean;

        /**
            * Gets current value of property {@link #getUploadUrl uploadUrl}.
         * 
         * Used when URL address is on a remote server.
         * 
         * Default value is ``.
        */
        public getUploadUrl(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getUseMultipart useMultipart}.
         * 
         * If set to "false", the request will be sent as file only request instead of a multipart/form-data request. Only one file could be uploaded using this type of request. Required for sending such a request is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9.
         * 
         * Default value is `true`.
        */
        public getUseMultipart(): boolean;

        /**
            * Gets current value of property {@link #getValue value}.
         * 
         * Value of the path for file upload.
         * 
         * Default value is ``.
        */
        public getValue(): string;

        /**
            * Gets current value of property {@link #getValueState valueState}.
         * 
         * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success, None.
         * 
         * Default value is `None`.
        */
        public getValueState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getValueStateText valueStateText}.
         * 
         * Custom text for the value state message pop-up.
         * 
         * ** Note: ** If not specified, a default text, based on the value state type, will be used instead.
        */
        public getValueStateText(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Specifies the displayed control width.
         * 
         * Default value is ``.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Gets content of aggregation {@link #getXhrSettings xhrSettings}.
         * 
         * Settings for the `XMLHttpRequest` object. ** Note: ** This aggregation is only used when the `sendXHR` property is set to `true`.
        */
        public getXhrSettings(): FileUploaderXHRSettings;

        /**
            * Checks for the provided `sap.ui.unified.FileUploaderParameter` in the aggregation {@link #getHeaderParameters headerParameters}. and returns its index if found or -1 otherwise.
        */
        public indexOfHeaderParameter(oHeaderParameter: FileUploaderParameter): number;

        /**
            * Checks for the provided `sap.ui.unified.FileUploaderParameter` in the aggregation {@link #getParameters parameters}. and returns its index if found or -1 otherwise.
        */
        public indexOfParameter(oParameter: FileUploaderParameter): number;

        /**
            * Inserts a headerParameter into the aggregation {@link #getHeaderParameters headerParameters}.
        */
        public insertHeaderParameter(oHeaderParameter: FileUploaderParameter, iIndex: number): this;

        /**
            * Inserts a parameter into the aggregation {@link #getParameters parameters}.
        */
        public insertParameter(oParameter: FileUploaderParameter, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getHeaderParameters headerParameters}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllHeaderParameters(): {};

        /**
            * Removes all the controls from the aggregation {@link #getParameters parameters}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllParameters(): {};

        /**
            * Removes a headerParameter from the aggregation {@link #getHeaderParameters headerParameters}.
        */
        public removeHeaderParameter(vHeaderParameter: number | string | FileUploaderParameter): FileUploaderParameter;

        /**
            * Removes a parameter from the aggregation {@link #getParameters parameters}.
        */
        public removeParameter(vParameter: number | string | FileUploaderParameter): FileUploaderParameter;

        /**
            * Sets a new value for property {@link #getAdditionalData additionalData}.
         * 
         * Additional data that is sent to the back end service. Data will be transmitted as value of a hidden input where the name is derived from the name property with suffix -data.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAdditionalData(sAdditionalData: string): this;

        /**
            * Sets a new value for property {@link #getButtonOnly buttonOnly}.
         * 
         * If set to "true", the FileUploader will be rendered as Button only, without showing the InputField.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setButtonOnly(bButtonOnly: boolean): this;

        /**
            * Sets a new value for property {@link #getButtonText buttonText}.
         * 
         * The Button text can be overwritten using this property.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setButtonText(sButtonText: string): this;

        /**
            * Sets a new value for property {@link #getEnabled enabled}.
         * 
         * Disabled controls have different colors, depending on customer settings.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabled(bEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getFileType fileType}.
         * 
         * The chosen files will be checked against an array of file types. If at least one file does not fit the file type restriction the upload is prevented. Example: ["jpg", "png", "bmp"].
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFileType(sFileType: {}): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Icon to be displayed as graphical element within the button. This can be a URI to an image or an icon font URI.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconFirst iconFirst}.
         * 
         * If set to true (default), the display sequence is 1. icon 2. control text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconFirst(bIconFirst: boolean): this;

        /**
            * Sets a new value for property {@link #getIconHovered iconHovered}.
         * 
         * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon was specified). If not specified the base icon is used. If an icon font icon is used, this property is ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIconHovered(sIconHovered: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconOnly iconOnly}.
         * 
         * If set to true, the button is displayed without any text.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setIconOnly(bIconOnly: boolean): this;

        /**
            * Sets a new value for property {@link #getIconSelected iconSelected}.
         * 
         * Icon to be displayed as graphical element within the button when it is selected (only if also a base icon was specified). If not specified the base or hovered icon is used. If an icon font icon is used, this property is ignored.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setIconSelected(sIconSelected: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getMaximumFilenameLength maximumFilenameLength}.
         * 
         * The maximum length of a filename which the FileUploader will accept. If the maximum filename length is exceeded, the corresponding Event 'filenameLengthExceed' is fired.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaximumFilenameLength(iMaximumFilenameLength: number): this;

        /**
            * Sets a new value for property {@link #getMaximumFileSize maximumFileSize}.
         * 
         * A file size limit in megabytes which prevents the upload if at least one file exceeds it. This property is not supported by Internet Explorer 9.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMaximumFileSize(fMaximumFileSize: number): this;

        /**
            * Sets a new value for property {@link #getMimeType mimeType}.
         * 
         * The chosen files will be checked against an array of mime types. If at least one file does not fit the mime type restriction the upload is prevented. This property is not supported by Internet Explorer 9. Example: mimeType ["image/png", "image/jpeg"].
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setMimeType(sMimeType: {}): this;

        /**
            * Sets a new value for property {@link #getMultiple multiple}.
         * 
         * Allows multiple files to be chosen and uploaded from the same folder. This property is not supported by Internet Explorer 9.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setMultiple(bMultiple: boolean): this;

        /**
            * Sets a new value for property {@link #getName name}.
         * 
         * Unique control name for identification on the server side after sending data to the server.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setName(sName: string): this;

        /**
            * Sets a new value for property {@link #getPlaceholder placeholder}.
         * 
         * Placeholder for the text field.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPlaceholder(sPlaceholder: string): this;

        /**
            * Sets a new value for property {@link #getSameFilenameAllowed sameFilenameAllowed}.
         * 
         * If the FileUploader is configured to upload the file directly after the file is selected it is not allowed to upload a file with the same name again. If a user should be allowed to upload a file with the same name again this parameter has to be "true". A typical use case would be if the files have different paths.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSameFilenameAllowed(bSameFilenameAllowed: boolean): this;

        /**
            * Sets a new value for property {@link #getSendXHR sendXHR}.
         * 
         * If set to "true", the request will be sent as XHR request instead of a form submit. This property is not supported by Internet Explorer 9.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setSendXHR(bSendXHR: boolean): this;

        /**
            * Sets a new value for property {@link #getStyle style}.
         * 
         * Style of the button. "Transparent, "Accept", "Reject", or "Emphasized" is allowed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setStyle(sStyle: string): this;

        /**
            * Sets a new value for property {@link #getUploadOnChange uploadOnChange}.
         * 
         * If set to "true", the upload immediately starts after file selection. With the default setting, the upload needs to be explicitly triggered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setUploadOnChange(bUploadOnChange: boolean): this;

        /**
            * Sets a new value for property {@link #getUploadUrl uploadUrl}.
         * 
         * Used when URL address is on a remote server.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setUploadUrl(sUploadUrl: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getUseMultipart useMultipart}.
         * 
         * If set to "false", the request will be sent as file only request instead of a multipart/form-data request. Only one file could be uploaded using this type of request. Required for sending such a request is to set the property "sendXHR" to "true". This property is not supported by Internet Explorer 9.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setUseMultipart(bUseMultipart: boolean): this;

        /**
            * Sets a new value for property {@link #getValue value}.
         * 
         * Value of the path for file upload.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setValue(sValue: string): this;

        /**
            * Sets a new value for property {@link #getValueState valueState}.
         * 
         * Visualizes warnings or errors related to the text field. Possible values: Warning, Error, Success, None.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `None`.
        */
        public setValueState(sValueState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getValueStateText valueStateText}.
         * 
         * Custom text for the value state message pop-up.
         * 
         * ** Note: ** If not specified, a default text, based on the value state type, will be used instead.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setValueStateText(sValueStateText: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Specifies the displayed control width.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets the aggregated {@link #getXhrSettings xhrSettings}.
        */
        public setXhrSettings(oXhrSettings: FileUploaderXHRSettings): this;

        /**
            * Starts the upload (as defined by uploadUrl)
        */
        public upload(bPreProcessFiles?: boolean): any;

    }
}