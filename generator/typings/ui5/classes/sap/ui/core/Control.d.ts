declare module 'sap/ui/core/Control' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ManagedObject } from 'sap/ui/base/ManagedObject';
    import { Element, IElementSettings } from 'sap/ui/core/Element';

    export interface IControlSettings extends IElementSettings {
        busy?: boolean;
        busyIndicatorDelay?: number;
        visible?: boolean;
        fieldGroupIds?: string[];
    }

    /**
    
    */
    export class Control extends Element {

        /**
            * Creates and initializes a new control with the given `sId` and settings.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IControlSettings);


        /**
            * The string given as "sStyleClass" will be added to the "class" attribute of this control's root HTML element.
         * 
         * This method is intended to be used to mark controls as being of a special type for which special styling can be provided using CSS selectors that reference this style class name.
         * 
         * `Example:
         *    myButton.addStyleClass("myRedTextButton"); // add a CSS class to one button instance
         * 
         * ...and in CSS:
         *    .myRedTextButton {
         *       color: red;
         *    }`
         * 
         * This will add the CSS class "myRedTextButton" to the Button HTML and the CSS code above will then make the text in this particular button red.
         * 
         * Only characters allowed inside HTML attributes are allowed. Quotes are not allowed and this method will ignore any strings containing quotes. Strings containing spaces are interpreted as multiple custom style classes which are split by space and can be removed individually later by calling removeStyleClass. Multiple calls with the same sStyleClass will have no different effect than calling once. If sStyleClass is null, empty string or it contains quotes, the call is ignored.
        */
        public addStyleClass(sStyleClass: string): this;

        /**
            * Defines whether the user can select text inside this control. Defaults to `true` as long as this method has not been called.
         * 
         * ** Note: **This only works in IE and Safari; for Firefox the element's style must be set to: `-moz-user-select: none;` in order to prevent text selection.
        */
        public allowTextSelection(bAllow: boolean): this;

        /**
            * Allows binding handlers for any native browser event to the root HTML element of this Control. This internally handles DOM element replacements caused by re-rendering.
         * 
         * ** IMPORTANT: **
         *  This should be only used as FALLBACK when the Control events do not cover a specific use-case! Always try using SAPUI5 control events, as e.g. accessibility-related functionality is then provided automatically. E.g. when working with a `sap.ui.commons.Button`, always use the Button's "press" event, not the native "click" event, because "press" is also guaranteed to be fired when certain keyboard activity is supposed to trigger the Button.
         * 
         * In the event handler, `this` refers to the Control - not to the root DOM element like in jQuery. While the DOM element can be used and modified, the general caveats for working with SAPUI5 control DOM elements apply. In particular the DOM element may be destroyed and replaced by a new one at any time, so modifications that are required to have permanent effect may not be done. E.g. use {@link sap.ui.core.Control.prototype.addStyleClass} instead if the modification is of visual nature.
         * 
         * Use {@link #detachBrowserEvent} to remove the event handler(s) again.
        */
        public attachBrowserEvent(sEventType?: string, fnHandler?: (() => any), oListener?: {}): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:validateFieldGroup validateFieldGroup} event of this `sap.ui.core.Control`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.Control` itself.
         * 
         * Event is fired if a logical field group defined by `fieldGroupIds` of a control was left or the user explicitly pressed a key combination that triggers validation.
         * 
         * Listen to this event to validate data of the controls belonging to a field group. See {@link sap.ui.core.Control#setFieldGroupIds}.
        */
        attachValidateFieldGroup<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * field group IDs of the logical field groups to validate */
            fieldGroupIds: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:validateFieldGroup validateFieldGroup} event of this `sap.ui.core.Control`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.core.Control` itself.
         * 
         * Event is fired if a logical field group defined by `fieldGroupIds` of a control was left or the user explicitly pressed a key combination that triggers validation.
         * 
         * Listen to this event to validate data of the controls belonging to a field group. See {@link sap.ui.core.Control#setFieldGroupIds}.
        */
        attachValidateFieldGroup<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * field group IDs of the logical field groups to validate */
            fieldGroupIds: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Returns whether the control has a given field group. If `vFieldGroupIds` is not given it checks whether at least one field group ID is given for this control. If `vFieldGroupIds` is an empty array or empty string, true is returned if there is no field group ID set for this control. If `vFieldGroupIds` is a string array or a string all expected field group IDs are checked and true is returned if all are contained for given for this control. The comma delimiter can be used to separate multiple field group IDs in one string.
        */
        public checkFieldGroupIds(vFieldGroupIds?: string | {}): boolean;

        /**
            * Overrides {@link sap.ui.core.Element#clone Element.clone} to clone additional internal state.
         * 
         * The additionally cloned information contains:  <li>browser event handlers attached with {@link #attachBrowserEvent} <li>text selection behavior <li>style classes added with {@link #addStyleClass} 
        */
        protected clone(sIdSuffix?: string, aLocalIds?: {}): this;

        /**
            * Removes event handlers which have been previously attached using {@link #attachBrowserEvent}.
         * 
         * Note: listeners are only removed, if the same combination of event type, callback function and context object is given as in the call to `attachBrowserEvent`.
        */
        public detachBrowserEvent(sEventType?: string, fnHandler?: (() => any), oListener?: {}): any;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:validateFieldGroup validateFieldGroup} event of this `sap.ui.core.Control`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachValidateFieldGroup(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.core.Control with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:validateFieldGroup validateFieldGroup} to attached listeners.
        */
        protected fireValidateFieldGroup(mParameters?: { fieldGroupIds?: {}, }): this;

        /**
            * This function (if available on the concrete control) provides the current accessibility state of the control.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should implement this hook to provide any necessary accessibility information:
         * 
         * `MyControl.prototype.getAccessibilityInfo = function() {
         *    return {
         *      role: "textbox",      // String which represents the WAI-ARIA role which is implemented by the control.
         *      type: "date input",   // String which represents the control type (Must be a translated text). Might correlate with
         *                            // the role.
         *      description: "value", // String which describes the most relevant control state (e.g. the inputs value). Must be a
         *                            // translated text.
         *                            // Note: The type and the enabled/editable state must not be handled here.
         *      focusable: true,      // Boolean which describes whether the control can get the focus.
         *      enabled: true,        // Boolean which describes whether the control is enabled. If not relevant it must not be set or
         *                            // `null` can be provided.
         *      editable: true,       // Boolean which describes whether the control is editable. If not relevant it must not be set or
         *                            // `null` can be provided.
         *      children: []          // Aggregations of the given control (e.g. when the control is a layout). Primitive aggregations will be ignored.
         *                            // Note: Children should only be provided when it is helpful to understand the accessibility context
         *                            //       (e.g. a form control must not provide details of its internals (fields, labels, ...) but a
         *                            //       layout should).
         *    };
         * };`
         * 
         * Note: The returned object provides the accessibility state of the control at the point in time when this function is called.
        */
        protected getAccessibilityInfo(): {};

        /**
            * Gets current value of property {@link #getBusy busy}.
         * 
         * Whether the control is currently in busy state.
         * 
         * Default value is `false`.
        */
        public getBusy(): boolean;

        /**
            * Gets current value of property {@link #getBusyIndicatorDelay busyIndicatorDelay}.
         * 
         * The delay in milliseconds, after which the busy indicator will show up for this control.
         * 
         * Default value is `1000`.
        */
        public getBusyIndicatorDelay(): number;

        /**
            * Returns a list of all child controls with a field group ID. See {@link #checkFieldGroupIds checkFieldGroupIds} for a description of the `vFieldGroupIds` parameter. Associated controls are not taken into account.
        */
        public getControlsByFieldGroupId(vFieldGroupIds?: string | {}): {};

        /**
            * Returns a copy of the field group IDs array. Modification of the field group IDs need to call {@link #setFieldGroupIds setFieldGroupIds} to apply the changes.
        */
        public getFieldGroupIds(): {};

        /**
            * Returns the DOMNode Id to be used for the "labelFor" attribute of the label.
         * 
         * By default, this is the Id of the control itself.
        */
        public getIdForLabel(): string;

        /**
            * Returns a metadata object for class sap.ui.core.Control.
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
            * Returns a renderer for this control instance.
         * 
         * It is retrieved using the RenderManager as done during rendering.
        */
        protected getRenderer(): {};

        /**
            * Gets current value of property {@link #getVisible visible}.
         * 
         * Whether the control should be visible on the screen.
         * 
         * If set to false, a placeholder will be rendered to mark the location of the invisible control in the DOM of the current page. The placeholder will be hidden and have zero dimensions (`display: none`).
         * 
         * See {@link sap.ui.core.RenderManager#writeInvisiblePlaceholderData RenderManager#writeInvisiblePlaceholderData} for details.
         * 
         * Default value is `true`.
        */
        public getVisible(): boolean;

        /**
            * Returns true if the given style class or all multiple style classes which are generated by splitting the given string with space are already set on the control via previous call(s) to addStyleClass().
        */
        public hasStyleClass(sStyleClass: string): boolean;

        /**
            * Triggers rerendering of this element and its children.
         * 
         * As `sap.ui.core.Element` "bubbles up" the invalidate, changes to children potentially result in rerendering of the whole sub tree.
         * 
         * The `oOrigin` parameter was introduced to allow parent controls to limit their rerendering to certain areas that have been invalidated by their children. As there is no strong guideline for control developers to provide the parameter, it is not a reliable source of information. It is therefore not recommended in general to use it, only in scenarios where a control and its descendants know each other very well (e.g. complex controls where parent and children have the same code owner).
        */
        protected invalidate(oOrigin?: ManagedObject): any;

        /**
            * Check if the control is currently in busy state.
        */
        public isBusy(): any;

        /**
            * Function is called when the rendering of the control is completed.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should override this hook to implement any necessary actions after the rendering.
        */
        protected onAfterRendering(): any;

        /**
            * Function is called before the rendering of the control is started.
         * 
         * Applications must not call this hook method directly, it is called by the framework.
         * 
         * Subclasses of Control should override this hook to implement any necessary actions before the rendering.
        */
        protected onBeforeRendering(): any;

        /**
            * Puts `this` control into the specified container (`oRef`) at the given position (`oPosition`).
         * 
         * First it is checked whether `oRef` is a container element / control (has a multiple aggregation with type `sap.ui.core.Control` and name 'content') or is an Id String of such a container. If this is not the case `oRef` can either be a Dom Reference or Id String of the UIArea (if it does not yet exist implicitly a new UIArea is created),
         * 
         * The `oPosition` can be one of the following:
         * 
         *  * "first": The control is added as the first element to the container. * "last": The control is added as the last element to the container (default). * "only": All existing children of the container are removed (not destroyed!) and the control is added as new child. * * index *: The control is added at the specified * index * to the container. 
        */
        public placeAt(oRef: string | any | this, vPosition?: string | number): this;

        /**
            * Removes the given string from the list of custom style classes that have been set previously. Regular style classes like "sapUiBtn" cannot be removed.
        */
        public removeStyleClass(sStyleClass: string): this;

        /**
            * Tries to replace its DOM reference by re-rendering.
        */
        protected rerender(): any;

        /**
            * Set the controls busy state.
        */
        public setBusy(bBusy: boolean): this;

        /**
            * Define the delay, after which the busy indicator will show up.
        */
        public setBusyIndicatorDelay(iDelay: number): this;

        /**
            * Sets a new value for property {@link #getFieldGroupIds fieldGroupIds}.
         * 
         * The IDs of a logical field group that this control belongs to.
         * 
         * All fields in a logical field group should share the same `fieldGroupId`. Once a logical field group is left, the `validateFieldGroup` event is raised.
         * 
         * See {@link sap.ui.core.Control#attachValidateFieldGroup}.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `[]`.
        */
        public setFieldGroupIds(sFieldGroupIds: {}): this;

        /**
            * Sets a new value for property {@link #getVisible visible}.
         * 
         * Whether the control should be visible on the screen.
         * 
         * If set to false, a placeholder will be rendered to mark the location of the invisible control in the DOM of the current page. The placeholder will be hidden and have zero dimensions (`display: none`).
         * 
         * See {@link sap.ui.core.RenderManager#writeInvisiblePlaceholderData RenderManager#writeInvisiblePlaceholderData} for details.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisible(bVisible: boolean): this;

        /**
            * The string given as "sStyleClass" will be be either added to or removed from the "class" attribute of this control's root HTML element, depending on the value of "bAdd": if bAdd is true, sStyleClass will be added. If bAdd is not given, sStyleClass will be removed if it is currently present and will be added if not present. If sStyleClass is null or empty string, the call is ignored.
         * 
         * See addStyleClass and removeStyleClass for further documentation.
        */
        public toggleStyleClass(sStyleClass: string, bAdd: boolean): this;

        /**
            * Triggers the `validateFieldGroup` event for this control.
         * 
         * Called by `sap.ui.core.UIArea` if a field group should be validated after it lost the focus or when the key combination was pressed that was configured to trigger validation (defined in the UI area member `UIArea._oFieldGroupValidationKey`).
         * 
         * See {@link #attachValidateFieldGroup}.
        */
        public triggerValidateFieldGroup(): any;

    }
}