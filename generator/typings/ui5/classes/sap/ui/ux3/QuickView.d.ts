declare module 'sap/ui/ux3/QuickView' {
    import { Event } from 'sap/ui/base/Event';
    import { ThingAction } from 'sap/ui/ux3/ThingAction';
    import { Element } from 'sap/ui/core/Element';
    import { ActionBar } from 'sap/ui/ux3/ActionBar';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { CalloutBase, ICalloutBaseSettings } from 'sap/ui/commons/CalloutBase';

    export interface IQuickViewSettings extends ICalloutBaseSettings {
        type?: string;
        firstTitle?: string;
        firstTitleHref?: string;
        secondTitle?: string;
        icon?: sap.ui.core.URI;
        width?: sap.ui.core.CSSSize;
        showActionBar?: boolean;
        followState?: sap.ui.ux3.FollowActionState;
        flagState?: boolean;
        favoriteState?: boolean;
        favoriteActionEnabled?: boolean;
        updateActionEnabled?: boolean;
        followActionEnabled?: boolean;
        flagActionEnabled?: boolean;
        openActionEnabled?: boolean;
    }

    /**
    
    */
    export class QuickView extends CalloutBase {

        /**
            * Constructor for a new QuickView.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IQuickViewSettings);


        /**
            * Adds some action to the aggregation {@link #getActions actions}.
        */
        public addAction(oAction: ThingAction): this;

        /**
            * Adds some content to the aggregation {@link #getContent content}.
        */
        public addContent(oContent: Element): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this `sap.ui.ux3.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
         * 
         * Action is selected in Action Bar
        */
        attachActionSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of selected ThingAction */
            id: string, /* * Selected ThingAction */
            action: ThingAction, /* * New State of the selected action. Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite' */
            newState: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this `sap.ui.ux3.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
         * 
         * Action is selected in Action Bar
        */
        attachActionSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of selected ThingAction */
            id: string, /* * Selected ThingAction */
            action: ThingAction, /* * New State of the selected action. Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite' */
            newState: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
         * 
         * Fired when a new feed entry is submitted.
        */
        attachFeedSubmit<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Feed text */
            text: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
         * 
         * Fired when a new feed entry is submitted.
        */
        attachFeedSubmit<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Feed text */
            text: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.ui.ux3.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
         * 
         * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event object to cancel browser navigation.
        */
        attachNavigate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * URI of the Thing Inspector application. */
            href: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:navigate navigate} event of this `sap.ui.ux3.QuickView`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.QuickView` itself.
         * 
         * Event is fired when a user clicks on the firstTitle link. Call the preventDefault method of the event object to cancel browser navigation.
        */
        attachNavigate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * URI of the Thing Inspector application. */
            href: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys the actionBar in the aggregation {@link #getActionBar actionBar}.
        */
        public destroyActionBar(): this;

        /**
            * Destroys all the actions in the aggregation {@link #getActions actions}.
        */
        public destroyActions(): this;

        /**
            * Destroys all the content in the aggregation {@link #getContent content}.
        */
        public destroyContent(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:actionSelected actionSelected} event of this `sap.ui.ux3.QuickView`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachActionSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.QuickView`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFeedSubmit(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:navigate navigate} event of this `sap.ui.ux3.QuickView`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachNavigate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.QuickView with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.commons.CalloutBase.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:actionSelected actionSelected} to attached listeners.
        */
        protected fireActionSelected(mParameters?: { id?: string, action?: ThingAction, newState?: string, }): this;

        /**
            * Fires event {@link #event:feedSubmit feedSubmit} to attached listeners.
        */
        protected fireFeedSubmit(mParameters?: { text?: string, }): this;

        /**
            * Fires event {@link #event:navigate navigate} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireNavigate(mParameters?: { href?: string, }): boolean;

        /**
            * Gets content of aggregation {@link #getActionBar actionBar}.
         * 
         * ActionBar. If no actionBar is set a default ActionBar will be created. In any case, ActionBar is displayed only when the showActionBar property is set to true.
        */
        public getActionBar(): ActionBar;

        /**
            * Gets content of aggregation {@link #getActions actions}.
         * 
         * Actions of a Thing
        */
        public getActions(): {};

        /**
            * Gets content of aggregation {@link #getContent content}.
         * 
         * Body content of the QuickView
        */
        public getContent(): {};

        /**
            * Gets current value of property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
         * 
         * Favorite action enabled/disabled. If disabled the action will be invisible.
         * 
         * Default value is `true`.
        */
        public getFavoriteActionEnabled(): boolean;

        /**
            * Gets current value of property {@link #getFavoriteState favoriteState}.
         * 
         * State Of favorite Action
         * 
         * Default value is `false`.
        */
        public getFavoriteState(): boolean;

        /**
            * Gets current value of property {@link #getFirstTitle firstTitle}.
         * 
         * Thing name shown in the header of the QuickView
        */
        public getFirstTitle(): string;

        /**
            * Gets current value of property {@link #getFirstTitleHref firstTitleHref}.
         * 
         * URI to Thing Inspector
        */
        public getFirstTitleHref(): string;

        /**
            * Gets current value of property {@link #getFlagActionEnabled flagActionEnabled}.
         * 
         * Flag action enabled/disabled. If disabled the action will be invisible.
         * 
         * Default value is `true`.
        */
        public getFlagActionEnabled(): boolean;

        /**
            * Gets current value of property {@link #getFlagState flagState}.
         * 
         * State of Flag Action
         * 
         * Default value is `false`.
        */
        public getFlagState(): boolean;

        /**
            * Gets current value of property {@link #getFollowActionEnabled followActionEnabled}.
         * 
         * Follow action enabled/disabled. If disabled the action will be invisible.
         * 
         * Default value is `true`.
        */
        public getFollowActionEnabled(): boolean;

        /**
            * Gets current value of property {@link #getFollowState followState}.
         * 
         * Follow State of a Thing
         * 
         * Default value is `Default`.
        */
        public getFollowState(): sap.ui.ux3.FollowActionState;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * URI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical or horizontal).
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Returns a metadata object for class sap.ui.ux3.QuickView.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Gets current value of property {@link #getOpenActionEnabled openActionEnabled}.
         * 
         * Open Thing action enabled/disabled. If disabled the action will be invisible.
         * 
         * Default value is `true`.
        */
        public getOpenActionEnabled(): boolean;

        /**
            * Gets current value of property {@link #getSecondTitle secondTitle}.
         * 
         * Optional short text shown under the firstTitle
        */
        public getSecondTitle(): string;

        /**
            * Gets current value of property {@link #getShowActionBar showActionBar}.
         * 
         * Show Action Bar
         * 
         * Default value is `true`.
        */
        public getShowActionBar(): boolean;

        /**
            * Gets current value of property {@link #getType type}.
         * 
         * Thing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part of the QuickView.
        */
        public getType(): string;

        /**
            * Gets current value of property {@link #getUpdateActionEnabled updateActionEnabled}.
         * 
         * Update action enabled/disabled. If disabled the action will be invisible.
         * 
         * Default value is `true`.
        */
        public getUpdateActionEnabled(): boolean;

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Control width as common CSS-size (px or % as unit, for example).
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.ux3.ThingAction` in the aggregation {@link #getActions actions}. and returns its index if found or -1 otherwise.
        */
        public indexOfAction(oAction: ThingAction): number;

        /**
            * Checks for the provided `sap.ui.core.Element` in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise.
        */
        public indexOfContent(oContent: Element): number;

        /**
            * Inserts a action into the aggregation {@link #getActions actions}.
        */
        public insertAction(oAction: ThingAction, iIndex: number): this;

        /**
            * Inserts a content into the aggregation {@link #getContent content}.
        */
        public insertContent(oContent: Element, iIndex: number): this;

        /**
            * Removes a action from the aggregation {@link #getActions actions}.
        */
        public removeAction(vAction: number | string | ThingAction): ThingAction;

        /**
            * Removes all the controls from the aggregation {@link #getActions actions}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllActions(): {};

        /**
            * Removes all the controls from the aggregation {@link #getContent content}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllContent(): {};

        /**
            * Removes a content from the aggregation {@link #getContent content}.
        */
        public removeContent(vContent: number | string | Element): Element;

        /**
            * Sets the aggregated {@link #getActionBar actionBar}.
        */
        public setActionBar(oActionBar: ActionBar): this;

        /**
            * Sets a new value for property {@link #getFavoriteActionEnabled favoriteActionEnabled}.
         * 
         * Favorite action enabled/disabled. If disabled the action will be invisible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setFavoriteActionEnabled(bFavoriteActionEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getFavoriteState favoriteState}.
         * 
         * State Of favorite Action
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFavoriteState(bFavoriteState: boolean): this;

        /**
            * Sets a new value for property {@link #getFirstTitle firstTitle}.
         * 
         * Thing name shown in the header of the QuickView
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFirstTitle(sFirstTitle: string): this;

        /**
            * Sets a new value for property {@link #getFirstTitleHref firstTitleHref}.
         * 
         * URI to Thing Inspector
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFirstTitleHref(sFirstTitleHref: string): this;

        /**
            * Sets a new value for property {@link #getFlagActionEnabled flagActionEnabled}.
         * 
         * Flag action enabled/disabled. If disabled the action will be invisible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setFlagActionEnabled(bFlagActionEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getFlagState flagState}.
         * 
         * State of Flag Action
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFlagState(bFlagState: boolean): this;

        /**
            * Sets a new value for property {@link #getFollowActionEnabled followActionEnabled}.
         * 
         * Follow action enabled/disabled. If disabled the action will be invisible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setFollowActionEnabled(bFollowActionEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getFollowState followState}.
         * 
         * Follow State of a Thing
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Default`.
        */
        public setFollowState(sFollowState: sap.ui.ux3.FollowActionState): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * URI of the Thing icon image (mandatory). The image is scaled down to the maximal size of 32 pixel (vertical or horizontal).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getOpenActionEnabled openActionEnabled}.
         * 
         * Open Thing action enabled/disabled. If disabled the action will be invisible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setOpenActionEnabled(bOpenActionEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getSecondTitle secondTitle}.
         * 
         * Optional short text shown under the firstTitle
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setSecondTitle(sSecondTitle: string): this;

        /**
            * Sets a new value for property {@link #getShowActionBar showActionBar}.
         * 
         * Show Action Bar
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowActionBar(bShowActionBar: boolean): this;

        /**
            * Sets a new value for property {@link #getType type}.
         * 
         * Thing type (mandatory) like Account, Material, Employee etc. is displayed in a header at the top part of the QuickView.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setType(sType: string): this;

        /**
            * Sets a new value for property {@link #getUpdateActionEnabled updateActionEnabled}.
         * 
         * Update action enabled/disabled. If disabled the action will be invisible.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setUpdateActionEnabled(bUpdateActionEnabled: boolean): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Control width as common CSS-size (px or % as unit, for example).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}