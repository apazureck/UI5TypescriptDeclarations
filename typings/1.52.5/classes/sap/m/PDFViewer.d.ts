declare module 'sap/m/PDFViewer' {
    import { Event } from 'sap/ui/base/Event';
    import { Button } from 'sap/m/Button';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ManagedObject } from 'sap/ui/base/ManagedObject';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IPDFViewerSettings extends IControlSettings {
        height?: sap.ui.core.CSSSize;
        width?: sap.ui.core.CSSSize;
        source?: sap.ui.core.URI;
        errorMessage?: string;
        errorPlaceholderMessage?: string;
        popupHeaderTitle?: string;
        title?: string;
        showDownloadButton?: boolean;
    }

    /**
    
    */
    export class PDFViewer extends Control {

        /**
            * Definition of PDFViewer control
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IPDFViewerSettings);


        /**
            * Adds some popupButton to the aggregation {@link #getPopupButtons popupButtons}.
        */
        public addPopupButton(oPopupButton: Button): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:error error} event of this `sap.m.PDFViewer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PDFViewer` itself.
         * 
         * This event is fired when there is an error loading the PDF file.
        */
        attachError<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:error error} event of this `sap.m.PDFViewer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PDFViewer` itself.
         * 
         * This event is fired when there is an error loading the PDF file.
        */
        attachError<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:loaded loaded} event of this `sap.m.PDFViewer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PDFViewer` itself.
         * 
         * This event is fired when a PDF file is loaded. If the PDF is loaded in smaller chunks, this event is fired as often as defined by the browser's plugin. This may happen after a couple chunks are processed.
        */
        attachLoaded<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:loaded loaded} event of this `sap.m.PDFViewer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PDFViewer` itself.
         * 
         * This event is fired when a PDF file is loaded. If the PDF is loaded in smaller chunks, this event is fired as often as defined by the browser's plugin. This may happen after a couple chunks are processed.
        */
        attachLoaded<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:sourceValidationFailed sourceValidationFailed} event of this `sap.m.PDFViewer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PDFViewer` itself.
         * 
         * This event is fired when the PDF viewer control cannot check the loaded content. For example, the default configuration of the Mozilla Firefox browser may not allow checking the loaded content. This may also happen when the source PDF file is stored in a different domain. If you want no error message to be displayed when this event is fired, call the preventDefault() method inside the event handler.
        */
        attachSourceValidationFailed<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:sourceValidationFailed sourceValidationFailed} event of this `sap.m.PDFViewer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.PDFViewer` itself.
         * 
         * This event is fired when the PDF viewer control cannot check the loaded content. For example, the default configuration of the Mozilla Firefox browser may not allow checking the loaded content. This may also happen when the source PDF file is stored in a different domain. If you want no error message to be displayed when this event is fired, call the preventDefault() method inside the event handler.
        */
        attachSourceValidationFailed<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Destroys the errorPlaceholder in the aggregation {@link #getErrorPlaceholder errorPlaceholder}.
        */
        public destroyErrorPlaceholder(): this;

        /**
            * Destroys all the popupButtons in the aggregation {@link #getPopupButtons popupButtons}.
        */
        public destroyPopupButtons(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:error error} event of this `sap.m.PDFViewer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachError(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:loaded loaded} event of this `sap.m.PDFViewer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachLoaded(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:sourceValidationFailed sourceValidationFailed} event of this `sap.m.PDFViewer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSourceValidationFailed(fnFunction: (() => any), oListener: {}): this;

        /**
            * Downloads the PDF file.
        */
        public downloadPDF(): any;

        /**
            * Creates a new subclass of class sap.m.PDFViewer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:error error} to attached listeners.
        */
        protected fireError(mParameters?: {}): this;

        /**
            * Fires event {@link #event:loaded loaded} to attached listeners.
        */
        protected fireLoaded(mParameters?: {}): this;

        /**
            * Fires event {@link #event:sourceValidationFailed sourceValidationFailed} to attached listeners.
        */
        protected fireSourceValidationFailed(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getErrorMessage errorMessage}.
         * 
         * A custom error message that is displayed when the PDF file cannot be loaded.
        */
        public getErrorMessage(): string;

        /**
            * Gets content of aggregation {@link #getErrorPlaceholder errorPlaceholder}.
         * 
         * A custom control that can be used instead of the error message specified by the errorPlaceholderMessage property.
        */
        public getErrorPlaceholder(): Control;

        /**
            * Gets current value of property {@link #getErrorPlaceholderMessage errorPlaceholderMessage}.
         * 
         * A custom text that is displayed instead of the PDF file content when the PDF file cannot be loaded.
        */
        public getErrorPlaceholderMessage(): string;

        /**
            * Gets current value of property {@link #getHeight height}.
         * 
         * Defines the height of the PDF viewer control, respective to the height of the parent container. Can be set to a percent, pixel, or em value.
         * 
         * Default value is `100%`.
        */
        public getHeight(): sap.ui.core.CSSSize;

        /**
            * Returns a metadata object for class sap.m.PDFViewer.
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
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets content of aggregation {@link #getPopupButtons popupButtons}.
         * 
         * A multiple aggregation for buttons that can be added to the footer of the popup dialog. Works only if the PDF viewer is set to open in a popup dialog.
        */
        public getPopupButtons(): {};

        /**
            * Gets current value of property {@link #getPopupHeaderTitle popupHeaderTitle}.
         * 
         * A custom title for the PDF viewer popup dialog. Works only if the PDF viewer is set to open in a popup dialog.
        */
        public getPopupHeaderTitle(): string;

        /**
            * Gets current value of property {@link #getShowDownloadButton showDownloadButton}.
         * 
         * Shows or hides the download button.
         * 
         * Default value is `true`.
        */
        public getShowDownloadButton(): boolean;

        /**
            * Gets current value of property {@link #getSource source}.
         * 
         * Specifies the path to the PDF file to display. Can be set to a relative or an absolute path.
        */
        public getSource(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * A custom title for the PDF viewer.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the width of the PDF viewer control, respective to the width of the parent container. Can be set to a percent, pixel, or em value.
         * 
         * Default value is `100%`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.m.Button` in the aggregation {@link #getPopupButtons popupButtons}. and returns its index if found or -1 otherwise.
        */
        public indexOfPopupButton(oPopupButton: Button): number;

        /**
            * Inserts a popupButton into the aggregation {@link #getPopupButtons popupButtons}.
        */
        public insertPopupButton(oPopupButton: Button, iIndex: number): this;

        /**
            * This triggers rerendering of itself and its children.
         *  As `sap.ui.base.ManagedObject` "bubbles up" the invalidate, changes to child-`Elements` will also result in rerendering of the whole sub tree.
        */
        protected invalidate(): any;

        /**
            * Triggers rerendering of this element and its children.
        */
        protected invalidate(oOrigin?: ManagedObject): any;

        /**
            * Opens the PDF viewer in a popup dialog.
        */
        public open(): any;

        /**
            * Removes all the controls from the aggregation {@link #getPopupButtons popupButtons}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllPopupButtons(): {};

        /**
            * Removes a popupButton from the aggregation {@link #getPopupButtons popupButtons}.
        */
        public removePopupButton(vPopupButton: number | string | Button): Button;

        /**
            * Sets a new value for property {@link #getErrorMessage errorMessage}.
         * 
         * A custom error message that is displayed when the PDF file cannot be loaded.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setErrorMessage(sErrorMessage: string): this;

        /**
            * Sets the aggregated {@link #getErrorPlaceholder errorPlaceholder}.
        */
        public setErrorPlaceholder(oErrorPlaceholder: Control): this;

        /**
            * Sets a new value for property {@link #getErrorPlaceholderMessage errorPlaceholderMessage}.
         * 
         * A custom text that is displayed instead of the PDF file content when the PDF file cannot be loaded.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setErrorPlaceholderMessage(sErrorPlaceholderMessage: string): this;

        /**
            * Sets a new value for property {@link #getHeight height}.
         * 
         * Defines the height of the PDF viewer control, respective to the height of the parent container. Can be set to a percent, pixel, or em value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setHeight(sHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getPopupHeaderTitle popupHeaderTitle}.
         * 
         * A custom title for the PDF viewer popup dialog. Works only if the PDF viewer is set to open in a popup dialog.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setPopupHeaderTitle(sPopupHeaderTitle: string): this;

        /**
            * Sets a new value for property {@link #getShowDownloadButton showDownloadButton}.
         * 
         * Shows or hides the download button.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowDownloadButton(bShowDownloadButton: boolean): this;

        /**
            * Sets a new value for property {@link #getSource source}.
         * 
         * Specifies the path to the PDF file to display. Can be set to a relative or an absolute path.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSource(sSource: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * A custom title for the PDF viewer.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the width of the PDF viewer control, respective to the width of the parent container. Can be set to a percent, pixel, or em value.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `100%`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}