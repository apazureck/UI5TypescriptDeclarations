declare module 'sap/m/ActionSheet' {
    import { Event } from 'sap/ui/base/Event';
    import { Button } from 'sap/m/Button';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IActionSheetSettings extends IControlSettings {
        placement?: sap.m.PlacementType;
        showCancelButton?: boolean;
        cancelButtonText?: string;
        title?: string;
    }

    /**
    
    */
    export class ActionSheet extends Control {

        /**
            * Constructor for a new ActionSheet.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IActionSheetSettings);


        /**
            * Adds some button to the aggregation {@link #getButtons buttons}.
        */
        public addButton(oButton: Button): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterClose afterClose} event of this `sap.m.ActionSheet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ActionSheet` itself.
         * 
         * This event will be fired after the ActionSheet is closed.
        */
        attachAfterClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterClose afterClose} event of this `sap.m.ActionSheet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ActionSheet` itself.
         * 
         * This event will be fired after the ActionSheet is closed.
        */
        attachAfterClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.ActionSheet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ActionSheet` itself.
         * 
         * This event will be fired after the ActionSheet is opened.
        */
        attachAfterOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.ActionSheet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ActionSheet` itself.
         * 
         * This event will be fired after the ActionSheet is opened.
        */
        attachAfterOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.ActionSheet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ActionSheet` itself.
         * 
         * This event will be fired before the ActionSheet is closed.
        */
        attachBeforeClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.ActionSheet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ActionSheet` itself.
         * 
         * This event will be fired before the ActionSheet is closed.
        */
        attachBeforeClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.ActionSheet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ActionSheet` itself.
         * 
         * This event will be fired before the ActionSheet is opened.
        */
        attachBeforeOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.ActionSheet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ActionSheet` itself.
         * 
         * This event will be fired before the ActionSheet is opened.
        */
        attachBeforeOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cancelButtonPress cancelButtonPress} event of this `sap.m.ActionSheet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ActionSheet` itself.
         * 
         * This event is fired when the cancelButton is clicked. For iPad, this event is also fired when showCancelButton is set to true, and Popover is closed by clicking outside.
        */
        attachCancelButtonPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cancelButtonPress cancelButtonPress} event of this `sap.m.ActionSheet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ActionSheet` itself.
         * 
         * This event is fired when the cancelButton is clicked. For iPad, this event is also fired when showCancelButton is set to true, and Popover is closed by clicking outside.
        */
        attachCancelButtonPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cancelButtonTap cancelButtonTap} event of this `sap.m.ActionSheet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ActionSheet` itself.
         * 
         * This event is fired when the cancelButton is tapped. For iPad, this event is also fired when showCancelButton is set to true, and Popover is closed by tapping outside.
        */
        attachCancelButtonTap<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:cancelButtonTap cancelButtonTap} event of this `sap.m.ActionSheet`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ActionSheet` itself.
         * 
         * This event is fired when the cancelButton is tapped. For iPad, this event is also fired when showCancelButton is set to true, and Popover is closed by tapping outside.
        */
        attachCancelButtonTap<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Calling this method will make the ActionSheet disappear from the screen.
        */
        public close(): any;

        /**
            * Destroys all the buttons in the aggregation {@link #getButtons buttons}.
        */
        public destroyButtons(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterClose afterClose} event of this `sap.m.ActionSheet`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterOpen afterOpen} event of this `sap.m.ActionSheet`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeClose beforeClose} event of this `sap.m.ActionSheet`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeOpen beforeOpen} event of this `sap.m.ActionSheet`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:cancelButtonPress cancelButtonPress} event of this `sap.m.ActionSheet`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachCancelButtonPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:cancelButtonTap cancelButtonTap} event of this `sap.m.ActionSheet`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachCancelButtonTap(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.ActionSheet with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:afterClose afterClose} to attached listeners.
        */
        protected fireAfterClose(mParameters?: {}): this;

        /**
            * Fires event {@link #event:afterOpen afterOpen} to attached listeners.
        */
        protected fireAfterOpen(mParameters?: {}): this;

        /**
            * Fires event {@link #event:beforeClose beforeClose} to attached listeners.
        */
        protected fireBeforeClose(mParameters?: {}): this;

        /**
            * Fires event {@link #event:beforeOpen beforeOpen} to attached listeners.
        */
        protected fireBeforeOpen(mParameters?: {}): this;

        /**
            * Fires event {@link #event:cancelButtonPress cancelButtonPress} to attached listeners.
        */
        protected fireCancelButtonPress(mParameters?: {}): this;

        /**
            * Fires event {@link #event:cancelButtonTap cancelButtonTap} to attached listeners.
        */
        protected fireCancelButtonTap(mParameters?: {}): this;

        /**
            * Gets content of aggregation {@link #getButtons buttons}.
         * 
         * These buttons are added to the content area in ActionSheet control. When button is tapped, the ActionSheet is closed before the tap event listener is called.
        */
        public getButtons(): {};

        /**
            * Gets current value of property {@link #getCancelButtonText cancelButtonText}.
         * 
         * This is the text displayed in the cancelButton. Default value is "Cancel", and it's translated according to the current locale setting. This property will be ignored when running either in iPad or showCancelButton is set to false.
        */
        public getCancelButtonText(): string;

        /**
            * Returns a metadata object for class sap.m.ActionSheet.
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
            * Gets current value of property {@link #getPlacement placement}.
         * 
         * The ActionSheet behaves as an sap.m.Popover in iPad and this property is the information about on which side will the popover be placed at. Possible values are sap.m.PlacementType.Left, sap.m.PlacementType.Right, sap.m.PlacementType.Top, sap.m.PlacementType.Bottom, sap.m.PlacementType.Horizontal, sap.m.PlacementType.HorizontalPreferedLeft, sap.m.PlacementType.HorizontalPreferedRight, sap.m.PlacementType.Vertical, sap.m.PlacementType.VerticalPreferedTop, sap.m.PlacementType.VerticalPreferedBottom. The default value is sap.m.PlacementType.Bottom.
         * 
         * Default value is `Bottom`.
        */
        public getPlacement(): sap.m.PlacementType;

        /**
            * Gets the ID of the hidden label
        */
        protected getPopupHiddenLabelId(): string;

        /**
            * Gets current value of property {@link #getShowCancelButton showCancelButton}.
         * 
         * If this is set to true, there will be a cancel button shown below the action buttons. There won't be any cancel button shown in iPad regardless of this property. The default value is set to true.
         * 
         * Default value is `true`.
        */
        public getShowCancelButton(): boolean;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Title will be shown in the header area in iPhone and every Android devices. This property will be ignored in tablets and desktop browser.
        */
        public getTitle(): string;

        /**
            * Checks for the provided `sap.m.Button` in the aggregation {@link #getButtons buttons}. and returns its index if found or -1 otherwise.
        */
        public indexOfButton(oButton: Button): number;

        /**
            * Inserts a button into the aggregation {@link #getButtons buttons}.
        */
        public insertButton(oButton: Button, iIndex: number): this;

        /**
            * The method checks if the ActionSheet is open. It returns true when the ActionSheet is currently open (this includes opening and closing animations), otherwise it returns false.
        */
        public isOpen(): any;

        /**
            * Calling this method will make the ActionSheet visible on the screen. The control parameter is the object to which the ActionSheet will be placed. It can be not only a UI5 control, but also an existing DOM reference. The side of the placement depends on the `placement` property set in the Popover (on tablet and desktop). On other platforms, ActionSheet behaves as a standard dialog and this parameter is ignored because dialog is aligned to the screen.
        */
        public openBy(oControl: {}): any;

        /**
            * Removes all the controls from the aggregation {@link #getButtons buttons}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllButtons(): {};

        /**
            * Removes a button from the aggregation {@link #getButtons buttons}.
        */
        public removeButton(vButton: number | string | Button): Button;

        /**
            * Sets a new value for property {@link #getCancelButtonText cancelButtonText}.
         * 
         * This is the text displayed in the cancelButton. Default value is "Cancel", and it's translated according to the current locale setting. This property will be ignored when running either in iPad or showCancelButton is set to false.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setCancelButtonText(sCancelButtonText: string): this;

        /**
            * Sets a new value for property {@link #getPlacement placement}.
         * 
         * The ActionSheet behaves as an sap.m.Popover in iPad and this property is the information about on which side will the popover be placed at. Possible values are sap.m.PlacementType.Left, sap.m.PlacementType.Right, sap.m.PlacementType.Top, sap.m.PlacementType.Bottom, sap.m.PlacementType.Horizontal, sap.m.PlacementType.HorizontalPreferedLeft, sap.m.PlacementType.HorizontalPreferedRight, sap.m.PlacementType.Vertical, sap.m.PlacementType.VerticalPreferedTop, sap.m.PlacementType.VerticalPreferedBottom. The default value is sap.m.PlacementType.Bottom.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Bottom`.
        */
        public setPlacement(sPlacement: sap.m.PlacementType): this;

        /**
            * Sets a new value for property {@link #getShowCancelButton showCancelButton}.
         * 
         * If this is set to true, there will be a cancel button shown below the action buttons. There won't be any cancel button shown in iPad regardless of this property. The default value is set to true.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowCancelButton(bShowCancelButton: boolean): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Title will be shown in the header area in iPhone and every Android devices. This property will be ignored in tablets and desktop browser.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

    }
}