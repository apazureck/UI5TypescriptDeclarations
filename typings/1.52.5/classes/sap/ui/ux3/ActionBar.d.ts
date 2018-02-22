declare module 'sap/ui/ux3/ActionBar' {
    import { Event } from 'sap/ui/base/Event';
    import { ThingAction } from 'sap/ui/ux3/ThingAction';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IActionBarSettings extends IControlSettings {
        followState?: sap.ui.ux3.FollowActionState;
        flagState?: boolean;
        favoriteState?: boolean;
        updateState?: boolean;
        thingIconURI?: sap.ui.core.URI;
        alwaysShowMoreMenu?: boolean;
        showUpdate?: boolean;
        showFollow?: boolean;
        showFlag?: boolean;
        showFavorite?: boolean;
        showOpen?: boolean;
        dividerWidth?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class ActionBar extends Control {

        /**
            * Constructor for a new ActionBar.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IActionBarSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this `sap.ui.ux3.ActionBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ActionBar` itself.
         * 
         * Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the latter if applicable only) ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default ‘Mark for follow up’ button: id: flag, newState: true/false ‘Favorite’ button: id: favorite, newState: true/false ‘Open Thing Inspector’ button id: open Business Actions: id: the ThingAction id
         * 
         * For ‘Update’, please refer to event ‘feedSubmit’
        */
        attachActionSelected<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of selected ThingAction */
            id: string, /* * Selected ThingAction */
            action: ThingAction, /* * New State of the selected action.Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite' */
            newState: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:actionSelected actionSelected} event of this `sap.ui.ux3.ActionBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ActionBar` itself.
         * 
         * Fired when any of the social action’s toolbar buttons except ‘Update’ or any of the business action’s menu items resp. buttons is pressed. The selected action can be identified by its id and newState (the latter if applicable only) ‘Follow’ button + menu: id: follow, newState: Follow/Hold/Default ‘Mark for follow up’ button: id: flag, newState: true/false ‘Favorite’ button: id: favorite, newState: true/false ‘Open Thing Inspector’ button id: open Business Actions: id: the ThingAction id
         * 
         * For ‘Update’, please refer to event ‘feedSubmit’
        */
        attachActionSelected<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of selected ThingAction */
            id: string, /* * Selected ThingAction */
            action: ThingAction, /* * New State of the selected action.Only filled if the respective action maintains a state property, for example 'FollowUp' or 'Favorite' */
            newState: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ActionBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ActionBar` itself.
         * 
         * Fired when a new feed entry is submitted.
        */
        attachFeedSubmit<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Feed text */
            text: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ActionBar`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.ux3.ActionBar` itself.
         * 
         * Fired when a new feed entry is submitted.
        */
        attachFeedSubmit<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Feed text */
            text: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Closes all popups which might be opened as ActionBar children These are the more- and follow menu and the feeder popup
        */
        public closePopups(): any;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:actionSelected actionSelected} event of this `sap.ui.ux3.ActionBar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachActionSelected(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:feedSubmit feedSubmit} event of this `sap.ui.ux3.ActionBar`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachFeedSubmit(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.ux3.ActionBar with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
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
            * Gets current value of property {@link #getAlwaysShowMoreMenu alwaysShowMoreMenu}.
         * 
         * If true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu button is only displayed for overflow and business actions are rendered as inidividual buttons.
         * 
         * Default value is `true`.
        */
        public getAlwaysShowMoreMenu(): boolean;

        /**
            * Gets content of aggregation {@link #getBusinessActions businessActions}.
         * 
         * Displayed on the actionBar's right hand-side, either as menu item under 'More' or as individual buttons
        */
        public getBusinessActions(): {};

        /**
            * Gets current value of property {@link #getDividerWidth dividerWidth}.
         * 
         * The minimum width of ActionBar's the social actions part: business action controls have to be rendered outside this area
        */
        public getDividerWidth(): sap.ui.core.CSSSize;

        /**
            * Gets current value of property {@link #getFavoriteState favoriteState}.
         * 
         * Indicates whether “Favorite” is active
        */
        public getFavoriteState(): boolean;

        /**
            * Gets current value of property {@link #getFlagState flagState}.
         * 
         * Indicates whether “Mark for Follow Up” is active
        */
        public getFlagState(): boolean;

        /**
            * Gets current value of property {@link #getFollowState followState}.
         * 
         * Keeps track of the actionBars Follow/Unfollow button’s state. Its value is one of - FollowActionState.Default - FollowActionState.Follow - FollowActionState.Hold
         * 
         * Default value is `Default`.
        */
        public getFollowState(): sap.ui.ux3.FollowActionState;

        /**
            * Returns a metadata object for class sap.ui.ux3.ActionBar.
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
            * Gets current value of property {@link #getShowFavorite showFavorite}.
         * 
         * Indicates whether social action “Favorite” is shown, default is ‘true’
         * 
         * Default value is `true`.
        */
        public getShowFavorite(): boolean;

        /**
            * Gets current value of property {@link #getShowFlag showFlag}.
         * 
         * Indicates whether social action “Mark for Follow Up” is shown, default is ‘true’
         * 
         * Default value is `true`.
        */
        public getShowFlag(): boolean;

        /**
            * Gets current value of property {@link #getShowFollow showFollow}.
         * 
         * Indicates whether social action “Follow” is shown, default is ‘true’
         * 
         * Default value is `true`.
        */
        public getShowFollow(): boolean;

        /**
            * Gets current value of property {@link #getShowOpen showOpen}.
         * 
         * Indicates whether social action “Open” is shown, default is ‘true’
         * 
         * Default value is `true`.
        */
        public getShowOpen(): boolean;

        /**
            * Gets current value of property {@link #getShowUpdate showUpdate}.
         * 
         * Indicates whether social action “Update” is shown, default is ‘true’
         * 
         * Default value is `true`.
        */
        public getShowUpdate(): boolean;

        /**
            * Gets current value of property {@link #getThingIconURI thingIconURI}.
         * 
         * The thing icon uri. Icon will be displayed in Feeder
        */
        public getThingIconURI(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getUpdateState updateState}.
         * 
         * Indicates whether “Update” is active
        */
        public getUpdateState(): boolean;

        /**
            * Checks for the provided `sap.ui.ux3.ThingAction` in the aggregation {@link #getBusinessActions businessActions}. and returns its index if found or -1 otherwise.
        */
        public indexOfBusinessAction(oBusinessAction: ThingAction): number;

        /**
            * Checks whether the control is still valid (is in the DOM). ActionBar instance is rendered if and only if 'isActive' returns 'true'. This check is called implicitely by the rendere, MUST not be removed.
        */
        protected isActive(): boolean;

        /**
            * Sets a new value for property {@link #getAlwaysShowMoreMenu alwaysShowMoreMenu}.
         * 
         * If true, business actions are rendered as menu items of the 'More' menu button. Otherwise, 'More' menu button is only displayed for overflow and business actions are rendered as inidividual buttons.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setAlwaysShowMoreMenu(bAlwaysShowMoreMenu: boolean): this;

        /**
            * Sets a new value for property {@link #getDividerWidth dividerWidth}.
         * 
         * The minimum width of ActionBar's the social actions part: business action controls have to be rendered outside this area
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setDividerWidth(sDividerWidth: sap.ui.core.CSSSize): this;

        /**
            * Sets a new value for property {@link #getFavoriteState favoriteState}.
         * 
         * Indicates whether “Favorite” is active
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFavoriteState(bFavoriteState: boolean): this;

        /**
            * Sets a new value for property {@link #getFlagState flagState}.
         * 
         * Indicates whether “Mark for Follow Up” is active
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setFlagState(bFlagState: boolean): this;

        /**
            * Sets a new value for property {@link #getFollowState followState}.
         * 
         * Keeps track of the actionBars Follow/Unfollow button’s state. Its value is one of - FollowActionState.Default - FollowActionState.Follow - FollowActionState.Hold
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Default`.
        */
        public setFollowState(sFollowState: sap.ui.ux3.FollowActionState): this;

        /**
            * Sets a new value for property {@link #getShowFavorite showFavorite}.
         * 
         * Indicates whether social action “Favorite” is shown, default is ‘true’
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowFavorite(bShowFavorite: boolean): this;

        /**
            * Sets a new value for property {@link #getShowFlag showFlag}.
         * 
         * Indicates whether social action “Mark for Follow Up” is shown, default is ‘true’
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowFlag(bShowFlag: boolean): this;

        /**
            * Sets a new value for property {@link #getShowFollow showFollow}.
         * 
         * Indicates whether social action “Follow” is shown, default is ‘true’
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowFollow(bShowFollow: boolean): this;

        /**
            * Sets a new value for property {@link #getShowOpen showOpen}.
         * 
         * Indicates whether social action “Open” is shown, default is ‘true’
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowOpen(bShowOpen: boolean): this;

        /**
            * Sets a new value for property {@link #getShowUpdate showUpdate}.
         * 
         * Indicates whether social action “Update” is shown, default is ‘true’
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setShowUpdate(bShowUpdate: boolean): this;

        /**
            * Sets a new value for property {@link #getThingIconURI thingIconURI}.
         * 
         * The thing icon uri. Icon will be displayed in Feeder
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setThingIconURI(sThingIconURI: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getUpdateState updateState}.
         * 
         * Indicates whether “Update” is active
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setUpdateState(bUpdateState: boolean): this;

    }
}