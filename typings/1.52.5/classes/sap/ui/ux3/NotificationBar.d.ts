declare module 'sap/ui/ux3/NotificationBar' {
    import { Event } from 'sap/ui/base/Event';
    import { Element } from 'sap/ui/core/Element';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface INotificationBarSettings extends IControlSettings {
        visibleStatus?: sap.ui.ux3.NotificationBarStatus;
        resizeEnabled?: boolean;
        alwaysShowToggler?: boolean;
    }

    /**
    
    */
    export class NotificationBar extends Control {

        /**
            * Constructor for a new NotificationBar.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: INotificationBarSettings);


        /**
            * Adds some notifier to the aggregation {@link #getNotifiers notifiers}.
        */
        public addNotifier(oNotifier: Element): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:display display} event of this `sap.ui.ux3.NotificationBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.NotificationBar` itself.
         * 
         * Event is fired when the bar wants to be displayed depending on given flag. This allows the application to decide what to do.
        */
        attachDisplay<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Indicates if the bar wants to be shown or hidden */
            show: boolean,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:display display} event of this `sap.ui.ux3.NotificationBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.NotificationBar` itself.
         * 
         * Event is fired when the bar wants to be displayed depending on given flag. This allows the application to decide what to do.
        */
        attachDisplay<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Indicates if the bar wants to be shown or hidden */
            show: boolean,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.ux3.NotificationBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.NotificationBar` itself.
         * 
         * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None). The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions firing this event.
        */
        attachResize<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The corresponding status to which the bar was resized. The corresponding heights can be taken for the bar's CSS file. */
            status: sap.ui.ux3.NotificationBarStatus,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:resize resize} event of this `sap.ui.ux3.NotificationBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.NotificationBar` itself.
         * 
         * This event is thrown when the bar was resized (to the different valid states: Min, Max, Default, None). The event itself can be used from SAPUI5-version 1.12.2 since there was a bug in the previous versions firing this event.
        */
        attachResize<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * The corresponding status to which the bar was resized. The corresponding heights can be taken for the bar's CSS file. */
            status: sap.ui.ux3.NotificationBarStatus,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys the messageNotifier in the aggregation {@link #getMessageNotifier messageNotifier}.
        */
        public destroyMessageNotifier(): this;

        /**
            * Destroys all the notifiers in the aggregation {@link #getNotifiers notifiers}.
        */
        public destroyNotifiers(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:display display} event of this `sap.ui.ux3.NotificationBar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDisplay(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:resize resize} event of this `sap.ui.ux3.NotificationBar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachResize(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.NotificationBar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:display display} to attached listeners.
        */
        protected fireDisplay(mParameters?: { show?: boolean, }): this;

        /**
            * Fires event {@link #event:resize resize} to attached listeners.
        */
        protected fireResize(mParameters?: { status?: sap.ui.ux3.NotificationBarStatus, }): this;

        /**
            * Gets current value of property {@link #getAlwaysShowToggler alwaysShowToggler}.
         * 
         * This property defines if the toggler should be displayed the whole time when the NotificationBar is shown.
         * 
         * Default value is `false`.
        */
        public getAlwaysShowToggler(): boolean;

        /**
            * Gets content of aggregation {@link #getMessageNotifier messageNotifier}.
         * 
         * Notifier that shows messages
        */
        public getMessageNotifier(): Element;

        /**
            * Returns a metadata object for class sap.ui.ux3.NotificationBar.
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
            * Gets content of aggregation {@link #getNotifiers notifiers}.
         * 
         * Notifiers that monitor something within the application and display the corresponding notifications.
        */
        public getNotifiers(): {};

        /**
            * Gets current value of property {@link #getResizeEnabled resizeEnabled}.
         * 
         * This property enables the bar to be resized by the user.
         * 
         * Default value is `true`.
        */
        public getResizeEnabled(): boolean;

        /**
            * Gets current value of property {@link #getVisibleStatus visibleStatus}.
         * 
         * This property displays the bar corresponding to given status
         * 
         * Default value is `Default`.
        */
        public getVisibleStatus(): sap.ui.ux3.NotificationBarStatus;

        /**
            * This method checks if the NotificationBar has any items (notifications or messages) to show and returns true if there are any items to show. So the application should decide if the bar should be displayed.
        */
        public hasItems(): boolean;

        /**
            * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getNotifiers notifiers}. and returns its index if found or -1 otherwise.
        */
        public indexOfNotifier(oNotifier: Element): number;

        /**
            * Inserts a notifier into the aggregation {@link #getNotifiers notifiers}.
        */
        public insertNotifier(oNotifier: Element, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getNotifiers notifiers}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllNotifiers(): {};

        /**
            * Removes a notifier from the aggregation {@link #getNotifiers notifiers}.
        */
        public removeNotifier(vNotifier: number | string | Element): Element;

        /**
            
        */
        public setAlwaysShowToggler(bAlwaysShow: boolean): any;

        /**
            * Sets the aggregated {@link #getMessageNotifier messageNotifier}.
        */
        public setMessageNotifier(oMessageNotifier: Element): this;

        /**
            * Sets a new value for property {@link #getResizeEnabled resizeEnabled}.
         * 
         * This property enables the bar to be resized by the user.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setResizeEnabled(bResizeEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getVisibleStatus visibleStatus}.
         * 
         * This property displays the bar corresponding to given status
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Default`.
        */
        public setVisibleStatus(sVisibleStatus: sap.ui.ux3.NotificationBarStatus): this;

    }
}