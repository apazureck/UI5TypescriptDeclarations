declare module 'sap/m/ResponsivePopover' {
    import { Event } from 'sap/ui/base/Event';
    import { Button } from 'sap/m/Button';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IResponsivePopoverSettings extends IControlSettings {
        placement?: sap.m.PlacementType;
        showHeader?: boolean;
        title?: string;
        icon?: sap.ui.core.URI;
        modal?: boolean;
        offsetX?: number;
        offsetY?: number;
        showArrow?: boolean;
        contentWidth?: sap.ui.core.CSSSize;
        contentHeight?: sap.ui.core.CSSSize;
        horizontalScrolling?: boolean;
        verticalScrolling?: boolean;
        showCloseButton?: boolean;
        resizable?: boolean;
    }

    /**
    
    */
    export class ResponsivePopover extends Control {

        /**
            * Constructor for a new ResponsivePopover.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IResponsivePopoverSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds content to the ResponsivePopover
        */
        public addContent(oControl: Control): any;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterClose afterClose} event of this `sap.m.ResponsivePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ResponsivePopover` itself.
         * 
         * Event is fired after popover or dialog is closed.
        */
        attachAfterClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined. */
            openBy: Control, /* * This parameter contains the control which triggers the close of the ResponsivePopover. This parameter is undefined when runs on desktop or tablet. */
            origin: Button,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterClose afterClose} event of this `sap.m.ResponsivePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ResponsivePopover` itself.
         * 
         * Event is fired after popover or dialog is closed.
        */
        attachAfterClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined. */
            openBy: Control, /* * This parameter contains the control which triggers the close of the ResponsivePopover. This parameter is undefined when runs on desktop or tablet. */
            origin: Button,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.ResponsivePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ResponsivePopover` itself.
         * 
         * Event is fired after popover or dialog is open.
        */
        attachAfterOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined. */
            openBy: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:afterOpen afterOpen} event of this `sap.m.ResponsivePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ResponsivePopover` itself.
         * 
         * Event is fired after popover or dialog is open.
        */
        attachAfterOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined. */
            openBy: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.ResponsivePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ResponsivePopover` itself.
         * 
         * Event is fired before popover or dialog is closed.
        */
        attachBeforeClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined. */
            openBy: Control, /* * This parameter contains the control which triggers the close of the ResponsivePopover. This parameter is undefined when runs on desktop or tablet. */
            origin: Button,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeClose beforeClose} event of this `sap.m.ResponsivePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ResponsivePopover` itself.
         * 
         * Event is fired before popover or dialog is closed.
        */
        attachBeforeClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined. */
            openBy: Control, /* * This parameter contains the control which triggers the close of the ResponsivePopover. This parameter is undefined when runs on desktop or tablet. */
            origin: Button,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.ResponsivePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ResponsivePopover` itself.
         * 
         * Event is fired before popover or dialog is open.
        */
        attachBeforeOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined. */
            openBy: Control,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:beforeOpen beforeOpen} event of this `sap.m.ResponsivePopover`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ResponsivePopover` itself.
         * 
         * Event is fired before popover or dialog is open.
        */
        attachBeforeOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * This parameter contains the control which is passed as the parameter when calling openBy method. When runs on the phone, this parameter is undefined. */
            openBy: Control,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Creates a new instance of ResponsivePopover with the same settings as the ResponsivePopover on which the method is called
        */
        protected clone(): this;

        /**
            * Clones a tree of objects starting with the object on which clone is called first (root object).
         * 
         * The IDs within the newly created clone tree are derived from the original IDs by appending the given `sIdSuffix` (if no suffix is given, one will be created; it will be unique across multiple clone calls).
         * 
         * The `oOptions` configuration object can have the following properties:  * The boolean value `cloneChildren` specifies whether associations/aggregations will be cloned * The boolean value `cloneBindings` specifies if bindings will be cloned 
         * 
         * For each cloned object the following settings are cloned based on the metadata of the object and the defined options:  * all properties that are not bound. If `cloneBinding` is `false`, even these properties will be cloned; the values are used by reference, they are not cloned * all aggregated objects that are not bound. If `cloneBinding` is `false`, even the ones that are bound will be cloned; they are all cloned recursively using the same `sIdSuffix` * all associated controls; when an association points to an object inside the cloned object tree, then the cloned association will be modified to that it points to the clone of the target object. When the association points to a managed object outside of the cloned object tree, then its target won't be changed. * all models set via `setModel()`; used by reference * all property and aggregation bindings (if `cloneBindings` is `true`); the pure binding information (path, model name) is cloned, but all other information like template control or factory function, data type or formatter function are copied by reference. The bindings themselves are created anew as they are specific for the combination (object, property, model). As a result, any later changes to a binding of the original object are not reflected in the clone, but changes to e.g the type or template etc. are. 
         * 
         * Each clone is created by first collecting the above mentioned settings and then creating a new instance with the normal constructor function. As a result, any side effects of mutator methods (`setProperty` etc.) or init hooks are repeated during clone creation. There is no need to override `clone()` just to reproduce these internal settings!
         * 
         * Custom controls however can override `clone()` to implement additional clone steps. They usually will first call `clone()` on the super class and then modify the returned clone accordingly.
         * 
         * Applications ** must never provide ** the second parameter `aLocaleIds`. It is determined automatically for the root object (and its non-existence also serves as an indicator for the root object). Specifying it will break the implementation of `clone()`.
        */
        protected clone(sIdSuffix?: string, aLocalIds?: {}, oOptions?: {}, cloneChildren?: boolean, cloneBindings?: boolean): this;

        /**
            * Closes the ResponsivePopover.
        */
        public close(): Control;

        /**
            * Destroys the beginButton in the aggregation {@link #getBeginButton beginButton}.
        */
        public destroyBeginButton(): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Destroys the customHeader in the aggregation {@link #getCustomHeader customHeader}.
        */
        public destroyCustomHeader(): this;

        /**
            * Destroys the endButton in the aggregation {@link #getEndButton endButton}.
        */
        public destroyEndButton(): this;

        /**
            * Destroys the subHeader in the aggregation {@link #getSubHeader subHeader}.
        */
        public destroySubHeader(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterClose afterClose} event of this `sap.m.ResponsivePopover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:afterOpen afterOpen} event of this `sap.m.ResponsivePopover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachAfterOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeClose beforeClose} event of this `sap.m.ResponsivePopover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:beforeOpen beforeOpen} event of this `sap.m.ResponsivePopover`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachBeforeOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.ResponsivePopover with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:afterClose afterClose} to attached listeners.
        */
        protected fireAfterClose(mParameters?: { openBy?: Control, origin?: Button, }): this;

        /**
            * Fires event {@link #event:afterOpen afterOpen} to attached listeners.
        */
        protected fireAfterOpen(mParameters?: { openBy?: Control, }): this;

        /**
            * Fires event {@link #event:beforeClose beforeClose} to attached listeners.
        */
        protected fireBeforeClose(mParameters?: { openBy?: Control, origin?: Button, }): this;

        /**
            * Fires event {@link #event:beforeOpen beforeOpen} to attached listeners.
        */
        protected fireBeforeOpen(mParameters?: { openBy?: Control, }): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Getter for beginButton aggregation
        */
        public getBeginButton(): Button;

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Content is supported by both variants. Please see the documentation on sap.m.Popover#content and sap.m.Dialog#content
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getContentHeight contentHeight}.
         * 
         * This property is supported by both variants. Please see the documentation on sap.m.Popover#contentHeight and sap.m.Dialog#contentHeight
        */
        public getContentHeight(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getContentWidth contentWidth}.
         * 
         * This property is supported by both variants. Please see the documentation on sap.m.Popover#contentWidth and sap.m.Dialog#contentWidth
        */
        public getContentWidth(): sap.ui.core.CSSSize;

        /**
            * Gets content of aggregation {@link #getCustomHeader customHeader}.
         * 
         * CustomHeader is supported by both variants. Please see the documentation on sap.m.Popover#customHeader and sap.m.Dialog#customHeader
        */
        public getCustomHeader(): sap.m.IBar;

        /**
            * Getter for endButton aggregation
        */
        public getEndButton(): Button;

        /**
            * Gets current value of property {@link #getHorizontalScrolling horizontalScrolling}.
         * 
         * This property is supported by both variants. Please see the documentation on sap.m.Popover#horizontalScrolling and sap.m.Dialog#horizontalScrolling
         * 
         * Default value is `true`.
        */
        public getHorizontalScrolling(): boolean;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * This property only takes effect on phone. Please see the documentation sap.m.Dialog#icon.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * ID of the element which is the current target of the association {@link #getInitialFocus initialFocus}, or `null`.
        */
        public getInitialFocus(): sap.ui.core.ID;

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
            * Returns a metadata object for class sap.m.ResponsivePopover.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Gets current value of property {@link #getModal modal}.
         * 
         * This property only takes effect on desktop or tablet. Please see the documentation sap.m.Popover#modal.
        */
        public getModal(): boolean;

        /**
            * Gets current value of property {@link #getOffsetX offsetX}.
         * 
         * This property only takes effect on desktop or tablet. Please see the documentation sap.m.Popover#offsetX.
        */
        public getOffsetX(): number;

        /**
            * Gets current value of property {@link #getOffsetY offsetY}.
         * 
         * This property only takes effect on desktop or tablet. Please see the documentation sap.m.Popover#offsetY.
        */
        public getOffsetY(): number;

        /**
            * Gets current value of property {@link #getPlacement placement}.
         * 
         * This property only takes effect on desktop or tablet. Please see the documentation sap.m.Popover#placement.
         * 
         * Default value is `Right`.
        */
        public getPlacement(): sap.m.PlacementType;

        /**
            * Gets current value of property {@link #getResizable resizable}.
         * 
         * Whether resize option is enabled.
         * 
         * Default value is `false`.
        */
        public getResizable(): boolean;

        /**
            * Gets current value of property {@link #getShowArrow showArrow}.
         * 
         * This property only takes effect on desktop or tablet. Please see the documentation sap.m.Popover#showArrow.
         * 
         * Default value is `true`.
        */
        public getShowArrow(): boolean;

        /**
            * Gets current value of property {@link #getShowCloseButton showCloseButton}.
         * 
         * Determines if a close button should be inserted into the dialog's header dynamically to close the dialog. This property only takes effect on phone.
         * 
         * Default value is `true`.
        */
        public getShowCloseButton(): boolean;

        /**
            * Gets current value of property {@link #getShowHeader showHeader}.
         * 
         * This property is supported by both variants. Please see the documentation on sap.m.Popover#showHeader and sap.m.Dialog#showHeader
         * 
         * Default value is `true`.
        */
        public getShowHeader(): boolean;

        /**
            * Gets content of aggregation {@link #getSubHeader subHeader}.
         * 
         * SubHeader is supported by both variants. Please see the documentation on sap.m.Popover#subHeader and sap.m.Dialog#subHeader
        */
        public getSubHeader(): sap.m.IBar;

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * This property is supported by both variants. Please see the documentation on sap.m.Popover#title and sap.m.Dialog#title
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getVerticalScrolling verticalScrolling}.
         * 
         * This property is supported by both variants. Please see the documentation on sap.m.Popover#verticalScrolling and sap.m.Dialog#verticalScrolling
         * 
         * Default value is `true`.
        */
        public getVerticalScrolling(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Control): number;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Control, iIndex: number): this;

        /**
            * Checks whether the ResponsivePopover is currently open.
        */
        public isOpen(): Control;

        /**
            * Opens the ResponsivePopover. The ResponsivePopover is positioned relatively to the control parameter on tablet or desktop and is full screen on phone. Therefore the control parameter is only used on tablet or desktop and is ignored on phone.
        */
        public openBy(oControl: {}): {};

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Control): Control;

        /**
            * Setter for beginButton aggregation
        */
        public setBeginButton(oButton: Button): this;

        /**
            * Sets a new value for property {@link #getContentHeight contentHeight}.
         * 
         * This property is supported by both variants. Please see the documentation on sap.m.Popover#contentHeight and sap.m.Dialog#contentHeight
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContentHeight(sContentHeight: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getContentWidth contentWidth}.
         * 
         * This property is supported by both variants. Please see the documentation on sap.m.Popover#contentWidth and sap.m.Dialog#contentWidth
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setContentWidth(sContentWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets the aggregated {@link #getCustomHeader customHeader}.
        */
        public setCustomHeader(oCustomHeader: sap.m.IBar): this;

        /**
            * Setter for endButton aggregation
        */
        public setEndButton(oButton: Button): this;

        /**
            * Sets a new value for property {@link #getHorizontalScrolling horizontalScrolling}.
         * 
         * This property is supported by both variants. Please see the documentation on sap.m.Popover#horizontalScrolling and sap.m.Dialog#horizontalScrolling
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setHorizontalScrolling(bHorizontalScrolling: boolean): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * This property only takes effect on phone. Please see the documentation sap.m.Dialog#icon.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets the associated {@link #getInitialFocus initialFocus}.
        */
        public setInitialFocus(oInitialFocus: sap.ui.core.ID | Control): this;

        /**
            * Sets a new value for property {@link #getModal modal}.
         * 
         * This property only takes effect on desktop or tablet. Please see the documentation sap.m.Popover#modal.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setModal(bModal: boolean): this;

        /**
            * Sets a new value for property {@link #getOffsetX offsetX}.
         * 
         * This property only takes effect on desktop or tablet. Please see the documentation sap.m.Popover#offsetX.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setOffsetX(iOffsetX: number): this;

        /**
            * Sets a new value for property {@link #getOffsetY offsetY}.
         * 
         * This property only takes effect on desktop or tablet. Please see the documentation sap.m.Popover#offsetY.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setOffsetY(iOffsetY: number): this;

        /**
            * Sets a new value for property {@link #getPlacement placement}.
         * 
         * This property only takes effect on desktop or tablet. Please see the documentation sap.m.Popover#placement.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Right`.
        */
        public setPlacement(sPlacement: sap.m.PlacementType): this;

        /**
            * Sets a new value for property {@link #getResizable resizable}.
         * 
         * Whether resize option is enabled.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setResizable(bResizable: boolean): this;

        /**
            * Sets a new value for property {@link #getShowArrow showArrow}.
         * 
         * This property only takes effect on desktop or tablet. Please see the documentation sap.m.Popover#showArrow.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowArrow(bShowArrow: boolean): this;

        /**
            * Determines if the close button to the ResponsivePopover is shown or not. Works only when ResponsivePopover is used as a dialog
        */
        public setShowCloseButton(bShowCloseButton: boolean): this;

        /**
            * Sets a new value for property {@link #getShowHeader showHeader}.
         * 
         * This property is supported by both variants. Please see the documentation on sap.m.Popover#showHeader and sap.m.Dialog#showHeader
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowHeader(bShowHeader: boolean): this;

        /**
            * Sets the aggregated {@link #getSubHeader subHeader}.
        */
        public setSubHeader(oSubHeader: sap.m.IBar): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * This property is supported by both variants. Please see the documentation on sap.m.Popover#title and sap.m.Dialog#title
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getVerticalScrolling verticalScrolling}.
         * 
         * This property is supported by both variants. Please see the documentation on sap.m.Popover#verticalScrolling and sap.m.Dialog#verticalScrolling
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVerticalScrolling(bVerticalScrolling: boolean): this;

    }
}