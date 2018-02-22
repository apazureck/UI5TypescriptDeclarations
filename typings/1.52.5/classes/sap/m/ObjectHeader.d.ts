declare module 'sap/m/ObjectHeader' {
    import { Event } from 'sap/ui/base/Event';
    import { ObjectNumber } from 'sap/m/ObjectNumber';
    import { ObjectAttribute } from 'sap/m/ObjectAttribute';
    import { ObjectMarker } from 'sap/m/ObjectMarker';
    import { ObjectStatus } from 'sap/m/ObjectStatus';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IObjectHeaderSettings extends IControlSettings {
        title?: string;
        number?: string;
        numberUnit?: string;
        intro?: string;
        introActive?: boolean;
        titleActive?: boolean;
        icon?: sap.ui.core.URI;
        iconActive?: boolean;
        iconAlt?: string;
        iconTooltip?: string;
        iconDensityAware?: boolean;
        markFavorite?: boolean;
        markFlagged?: boolean;
        showMarkers?: boolean;
        showTitleSelector?: boolean;
        numberState?: sap.ui.core.ValueState;
        condensed?: boolean;
        backgroundDesign?: sap.m.BackgroundDesign;
        responsive?: boolean;
        fullScreenOptimized?: boolean;
        titleHref?: sap.ui.core.URI;
        titleTarget?: string;
        introHref?: sap.ui.core.URI;
        introTarget?: string;
        titleTextDirection?: sap.ui.core.TextDirection;
        introTextDirection?: sap.ui.core.TextDirection;
        numberTextDirection?: sap.ui.core.TextDirection;
        titleSelectorTooltip?: string;
        titleLevel?: sap.ui.core.TitleLevel;
    }

    /**
    
    */
    export class ObjectHeader extends Control {

        /**
            * Constructor for a new `ObjectHeader`.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IObjectHeaderSettings);


        /**
            * Adds some additionalNumber to the aggregation {@link #getAdditionalNumbers additionalNumbers}.
        */
        public addAdditionalNumber(oAdditionalNumber: ObjectNumber): this;

        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

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
        public addStatus(oStatus: Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:iconPress iconPress} event of this `sap.m.ObjectHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectHeader` itself.
         * 
         * Event is fired when the title icon is active and the user taps/clicks on it
        */
        attachIconPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Dom reference of the object header' icon to be used for positioning. */
            domRef: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:iconPress iconPress} event of this `sap.m.ObjectHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectHeader` itself.
         * 
         * Event is fired when the title icon is active and the user taps/clicks on it
        */
        attachIconPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Dom reference of the object header' icon to be used for positioning. */
            domRef: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:introPress introPress} event of this `sap.m.ObjectHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectHeader` itself.
         * 
         * Event is fired when the intro is active and the user taps/clicks on it
        */
        attachIntroPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Dom reference of the object header' intro to be used for positioning. */
            domRef: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:introPress introPress} event of this `sap.m.ObjectHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectHeader` itself.
         * 
         * Event is fired when the intro is active and the user taps/clicks on it
        */
        attachIntroPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Dom reference of the object header' intro to be used for positioning. */
            domRef: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:titlePress titlePress} event of this `sap.m.ObjectHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectHeader` itself.
         * 
         * Event is fired when the title is active and the user taps/clicks on it
        */
        attachTitlePress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Dom reference of the object header' title to be used for positioning. */
            domRef: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:titlePress titlePress} event of this `sap.m.ObjectHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectHeader` itself.
         * 
         * Event is fired when the title is active and the user taps/clicks on it
        */
        attachTitlePress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Dom reference of the object header' title to be used for positioning. */
            domRef: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:titleSelectorPress titleSelectorPress} event of this `sap.m.ObjectHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectHeader` itself.
         * 
         * Event is fired when the object header title selector (down-arrow) is pressed
        */
        attachTitleSelectorPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Dom reference of the object header' titleArrow to be used for positioning. */
            domRef: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:titleSelectorPress titleSelectorPress} event of this `sap.m.ObjectHeader`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.ObjectHeader` itself.
         * 
         * Event is fired when the object header title selector (down-arrow) is pressed
        */
        attachTitleSelectorPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Dom reference of the object header' titleArrow to be used for positioning. */
            domRef: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the additionalNumbers in the aggregation {@link #getAdditionalNumbers additionalNumbers}.
        */
        public destroyAdditionalNumbers(): this;

        /**
            * Destroys all the attributes in the aggregation {@link #getAttributes attributes}.
        */
        public destroyAttributes(): this;

        /**
            * Destroys the firstStatus in the aggregation {@link #getFirstStatus firstStatus}.
        */
        public destroyFirstStatus(): this;

        /**
            * Destroys the headerContainer in the aggregation {@link #getHeaderContainer headerContainer}.
        */
        public destroyHeaderContainer(): this;

        /**
            * Destroys all the markers in the aggregation {@link #getMarkers markers}.
        */
        public destroyMarkers(): this;

        /**
            * Destroys the secondStatus in the aggregation {@link #getSecondStatus secondStatus}.
        */
        public destroySecondStatus(): this;

        /**
            * Destroys all the statuses in the aggregation {@link #getStatuses statuses}.
        */
        public destroyStatuses(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:iconPress iconPress} event of this `sap.m.ObjectHeader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachIconPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:introPress introPress} event of this `sap.m.ObjectHeader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachIntroPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:titlePress titlePress} event of this `sap.m.ObjectHeader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTitlePress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:titleSelectorPress titleSelectorPress} event of this `sap.m.ObjectHeader`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTitleSelectorPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.ObjectHeader with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:iconPress iconPress} to attached listeners.
        */
        protected fireIconPress(mParameters?: { domRef?: {}, }): this;

        /**
            * Fires event {@link #event:introPress introPress} to attached listeners.
        */
        protected fireIntroPress(mParameters?: { domRef?: {}, }): this;

        /**
            * Fires event {@link #event:titlePress titlePress} to attached listeners.
        */
        protected fireTitlePress(mParameters?: { domRef?: {}, }): this;

        /**
            * Fires event {@link #event:titleSelectorPress titleSelectorPress} to attached listeners.
        */
        protected fireTitleSelectorPress(mParameters?: { domRef?: {}, }): this;

        /**
            * Gets content of aggregation {@link #getAdditionalNumbers additionalNumbers}.
         * 
         * NOTE: Only applied if you set "responsive=false". Additional object numbers and units are managed in this aggregation. The numbers are hidden on tablet and phone size screens. When only one number is provided, it is rendered with additional separator from the main ObjectHeader number.
        */
        public getAdditionalNumbers(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets content of aggregation {@link #getAttributes attributes}.
         * 
         * The list of Object Attributes
        */
        public getAttributes(): {};

        /**
            * Gets current value of property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Determines the background color of the `ObjectHeader`.
         * 
         * ** Note: ** The different types of `ObjectHeader` come with different default background:  * non responsive - Transparent * responsive - Translucent * condensed - Solid 
        */
        public getBackgroundDesign(): sap.m.BackgroundDesign;

        /**
            * Gets current value of property {@link #getCondensed condensed}.
         * 
         * `ObjectHeader` with title, one attribute, number, and number unit.
         * 
         * ** Note: ** Only applied if the `responsive` property is set to `false`.
         * 
         * Default value is `false`.
        */
        public getCondensed(): boolean;

        /**
            * Gets content of aggregation {@link #getFirstStatus firstStatus}.
         * 
         * First status shown on the right side of the attributes above the second status. If it is not set the first attribute will expand to take the entire row.
        */
        public getFirstStatus(): ObjectStatus;

        /**
            * Gets current value of property {@link #getFullScreenOptimized fullScreenOptimized}.
         * 
         * Optimizes the display of the elements of the `ObjectHeader`.
         * 
         * Set this property to `true` if your app uses a fullscreen layout (as opposed to a master-detail or other split-screen layout).
         * 
         * ** Note **: Only applied if the `responsive` property is also set to `true`.
         * 
         * If set to `true`, the following situations apply:  * On desktop, 1-3 attributes/statuses - positioned as a third block on the right side of the Title/Number group * On desktop, 4+ attributes/statuses - 4 columns below the Title/Number * On tablet (portrait mode), always in 2 columns below the Title/Number * On tablet (landscape mode), 1-2 attributes/statuses - 2 columns below the Title/Number * On tablet (landscape mode), 3+ attributes/statuses - 3 columns below the Title/Number  On phone, the attributes and statuses are always positioned in 1 column below the Title/Number of the `ObjectHeader`.
         * 
         * If set to `false`, the attributes and statuses are being positioned below the Title/Number of the `ObjectHeader` in 2 or 3 columns depending on their number:  * On desktop, 1-4 attributes/statuses - 2 columns * On desktop, 5+ attributes/statuses - 3 columns * On tablet, always in 2 columns 
         * 
         * Default value is `false`.
        */
        public getFullScreenOptimized(): boolean;

        /**
            * Gets content of aggregation {@link #getHeaderContainer headerContainer}.
         * 
         * This aggregation takes only effect when you set "responsive" to true. It can either be filled with an sap.m.IconTabBar or an sap.suite.ui.commons.HeaderContainer control. Overflow handling must be taken care of by the inner control. If used with an IconTabBar control, only the header will be displayed inside the object header, the content will be displayed below the ObjectHeader.
        */
        public getHeaderContainer(): sap.m.ObjectHeaderContainer;

        /**
            * Gets current value of property {@link #getIcon icon}.
         * 
         * Defines the icon of the `ObjectHeader`.
         * 
         * ** Note: ** Recursive resolution of binding expressions is not supported by the framework. It works only in ObjectHeader, since it is a composite control and creates an Image control internally.
        */
        public getIcon(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIconActive iconActive}.
         * 
         * Determines whether the `ObjectHeader` icon is clickable.
        */
        public getIconActive(): boolean;

        /**
            * Gets current value of property {@link #getIconAlt iconAlt}.
         * 
         * Determines the alternative text of the `ObjectHeader` icon. The text is displayed if the image for the icon is not available, or cannot be displayed.
        */
        public getIconAlt(): string;

        /**
            * Gets current value of property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to `true` but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If bandwidth is the key for the application, set this value to `false`.
         * 
         * Default value is `true`.
        */
        public getIconDensityAware(): boolean;

        /**
            * Gets current value of property {@link #getIconTooltip iconTooltip}.
         * 
         * Determines the tooltip text of the `ObjectHeader` icon.
        */
        public getIconTooltip(): string;

        /**
            * Gets current value of property {@link #getIntro intro}.
         * 
         * Determines the introductory text for the `ObjectHeader`.
        */
        public getIntro(): string;

        /**
            * Gets current value of property {@link #getIntroActive introActive}.
         * 
         * Determines whether the introductory text of the `ObjectHeader` is clickable.
        */
        public getIntroActive(): boolean;

        /**
            * Gets current value of property {@link #getIntroHref introHref}.
         * 
         * Determines the intro link target URI. Supports standard hyperlink behavior. If an action should be triggered, this should not be set, but instead an event handler for the `introPress` event should be registered.
        */
        public getIntroHref(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getIntroTarget introTarget}.
         * 
         * Determines the `target` attribute for the intro link. Options are `_self`, `_top`, `_blank`, `_parent`, `_search`. Alternatively, a frame name can be entered.
        */
        public getIntroTarget(): string;

        /**
            * Gets current value of property {@link #getIntroTextDirection introTextDirection}.
         * 
         * Specifies the intro text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getIntroTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets content of aggregation {@link #getMarkers markers}.
         * 
         * List of markers (icon and/or text) that can be displayed for the `ObjectHeader`, such as favorite and flagged.<br><br> ** Note: ** You should use either this aggregation or the already deprecated properties - `markFlagged` and `markFavorite`. Using both can lead to unexpected results.
        */
        public getMarkers(): {};

        /**
            * Gets current value of property {@link #getMarkFavorite markFavorite}.
         * 
         * Sets the favorite state for the `ObjectHeader`. The `showMarkers` property must be set to `true` for this property to take effect.
         * 
         * ** Note: ** As this property is deprecated, we recommend that you use the `markers` aggregation - add `sap.m.ObjectMarker` with type `sap.m.ObjectMarkerType.Favorite`. You should use either this property or the `markers` aggregation, using both may lead to unpredicted behavior.
         * 
         * Default value is `false`.
        */
        public getMarkFavorite(): boolean;

        /**
            * Gets current value of property {@link #getMarkFlagged markFlagged}.
         * 
         * Sets the flagged state for the `ObjectHeader`. The `showMarkers` property must be set to `true` for this property to take effect.
         * 
         * ** Note: ** As this property is deprecated, we recommend that you use the `markers` aggregation - add `sap.m.ObjectMarker` with type `sap.m.ObjectMarkerType.Flagged`. You should use either this property or the `markers` aggregation, using both may lead to unpredicted behavior.
         * 
         * Default value is `false`.
        */
        public getMarkFlagged(): boolean;

        /**
            * Returns a metadata object for class sap.m.ObjectHeader.
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
            * Gets current value of property {@link #getNumber number}.
         * 
         * Determines the displayed number of the `ObjectHeader` number field.
        */
        public getNumber(): string;

        /**
            * Gets current value of property {@link #getNumberState numberState}.
         * 
         * Determines the value state of the `number` and `numberUnit` properties.
         * 
         * Default value is `None`.
        */
        public getNumberState(): sap.ui.core.ValueState;

        /**
            * Gets current value of property {@link #getNumberTextDirection numberTextDirection}.
         * 
         * Specifies the number and unit text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getNumberTextDirection(): sap.ui.core.TextDirection;

        /**
            * Gets current value of property {@link #getNumberUnit numberUnit}.
         * 
         * Determines the units qualifier of the `ObjectHeader` number.
         * 
         * ** Note: ** The value of the `numberUnit` is not displayed if the number property is set to `null`.
        */
        public getNumberUnit(): string;

        /**
            * Gets current value of property {@link #getResponsive responsive}.
         * 
         * Determines whether the `ObjectHeader` is rendered with a different design that reacts responsively to the screen sizes.
         * 
         * ** Note: ** Be aware that the design and behavior of the responsive `ObjectHeader` could change without further notification.
         * 
         * Default value is `false`.
        */
        public getResponsive(): boolean;

        /**
            * Gets content of aggregation {@link #getSecondStatus secondStatus}.
         * 
         * Second status shown on the right side of the attributes below the first status. If it is not set the second attribute will expand to take the entire row.
        */
        public getSecondStatus(): ObjectStatus;

        /**
            * Gets current value of property {@link #getShowMarkers showMarkers}.
         * 
         * If set to `true`, the `ObjectHeader` can be marked with icons such as favorite and flag.
         * 
         * ** Note: ** This property is valid only if you are using the already deprecated properties - `markFlagged` and `markFavorite`. If you are using the `markers` aggregation, the visibility of the markers depends on what is set in the aggregation itself.
         * 
         * Default value is `false`.
        */
        public getShowMarkers(): boolean;

        /**
            * Gets current value of property {@link #getShowTitleSelector showTitleSelector}.
         * 
         * Determines whether the selector arrow icon/image is displayed and can be pressed.
         * 
         * Default value is `false`.
        */
        public getShowTitleSelector(): boolean;

        /**
            * Gets content of aggregation {@link #getStatuses statuses}.
         * 
         * The list of Object sap.ui.core.Control. It will only allow sap.m.ObjectStatus and sap.m.ProgressIndicator controls.
        */
        public getStatuses(): {};

        /**
            * Gets current value of property {@link #getTitle title}.
         * 
         * Determines the title of the `ObjectHeader`.
        */
        public getTitle(): string;

        /**
            * Gets current value of property {@link #getTitleActive titleActive}.
         * 
         * Determines whether the title of the `ObjectHeader` is clickable and is set only if a title is provided.
        */
        public getTitleActive(): boolean;

        /**
            * Gets current value of property {@link #getTitleHref titleHref}.
         * 
         * Defines the title link target URI. Supports standard hyperlink behavior.
         * 
         * ** Note: ** If an action should be triggered, this property should not be set, but instead an event handler for the `titlePress` event should be registered.
        */
        public getTitleHref(): sap.ui.core.URI;

        /**
            * Gets current value of property {@link #getTitleLevel titleLevel}.
         * 
         * Defines the semantic level of the title.
         * 
         * This information is used by assistive technologies, such as screen readers to create a hierarchical site map for faster navigation. Depending on this setting an HTML h1-h6 element is used.
         * 
         * Default value is `H1`.
        */
        public getTitleLevel(): sap.ui.core.TitleLevel;

        /**
            * Gets current value of property {@link #getTitleSelectorTooltip titleSelectorTooltip}.
         * 
         * Determines a custom text for the tooltip of the select title arrow. If not set, a default text of the tooltip will be displayed.
         * 
         * Default value is `Options`.
        */
        public getTitleSelectorTooltip(): string;

        /**
            * Gets current value of property {@link #getTitleTarget titleTarget}.
         * 
         * Determines the `target` attribute for the title link. Options are `_self`, `_top`, `_blank`, `_parent`, `_search`. Alternatively, a frame name can be entered.
        */
        public getTitleTarget(): string;

        /**
            * Gets current value of property {@link #getTitleTextDirection titleTextDirection}.
         * 
         * Specifies the title text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getTitleTextDirection(): sap.ui.core.TextDirection;

        /**
            * Checks for the provided `sap.m.ObjectNumber` in the aggregation {@link #getAdditionalNumbers additionalNumbers}. and returns its index if found or -1 otherwise.
        */
        public indexOfAdditionalNumber(oAdditionalNumber: ObjectNumber): number;

        /**
            * Checks for the provided `sap.m.ObjectAttribute` in the aggregation {@link #getAttributes attributes}. and returns its index if found or -1 otherwise.
        */
        public indexOfAttribute(oAttribute: ObjectAttribute): number;

        /**
            * Checks for the provided `sap.m.ObjectMarker` in the aggregation {@link #getMarkers markers}. and returns its index if found or -1 otherwise.
        */
        public indexOfMarker(oMarker: ObjectMarker): number;

        /**
            * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getStatuses statuses}. and returns its index if found or -1 otherwise.
        */
        public indexOfStatus(oStatus: Control): number;

        /**
            * Inserts a additionalNumber into the aggregation {@link #getAdditionalNumbers additionalNumbers}.
        */
        public insertAdditionalNumber(oAdditionalNumber: ObjectNumber, iIndex: number): this;

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
        public insertStatus(oStatus: Control, iIndex: number): this;

        /**
            * Removes a additionalNumber from the aggregation {@link #getAdditionalNumbers additionalNumbers}.
        */
        public removeAdditionalNumber(vAdditionalNumber: number | string | ObjectNumber): ObjectNumber;

        /**
            * Removes all the controls from the aggregation {@link #getAdditionalNumbers additionalNumbers}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllAdditionalNumbers(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

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
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

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
        public removeStatus(vStatus: number | string | Control): Control;

        /**
            * Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.
         * 
         * Determines the background color of the `ObjectHeader`.
         * 
         * ** Note: ** The different types of `ObjectHeader` come with different default background:  * non responsive - Transparent * responsive - Translucent * condensed - Solid 
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setBackgroundDesign(sBackgroundDesign: sap.m.BackgroundDesign): this;

        /**
            * Set the condensed flag
        */
        public setCondensed(bCondensed: boolean): this;

        /**
            * Sets the aggregated {@link #getFirstStatus firstStatus}.
        */
        public setFirstStatus(oFirstStatus: ObjectStatus): this;

        /**
            * Sets a new value for property {@link #getFullScreenOptimized fullScreenOptimized}.
         * 
         * Optimizes the display of the elements of the `ObjectHeader`.
         * 
         * Set this property to `true` if your app uses a fullscreen layout (as opposed to a master-detail or other split-screen layout).
         * 
         * ** Note **: Only applied if the `responsive` property is also set to `true`.
         * 
         * If set to `true`, the following situations apply:  * On desktop, 1-3 attributes/statuses - positioned as a third block on the right side of the Title/Number group * On desktop, 4+ attributes/statuses - 4 columns below the Title/Number * On tablet (portrait mode), always in 2 columns below the Title/Number * On tablet (landscape mode), 1-2 attributes/statuses - 2 columns below the Title/Number * On tablet (landscape mode), 3+ attributes/statuses - 3 columns below the Title/Number  On phone, the attributes and statuses are always positioned in 1 column below the Title/Number of the `ObjectHeader`.
         * 
         * If set to `false`, the attributes and statuses are being positioned below the Title/Number of the `ObjectHeader` in 2 or 3 columns depending on their number:  * On desktop, 1-4 attributes/statuses - 2 columns * On desktop, 5+ attributes/statuses - 3 columns * On tablet, always in 2 columns 
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setFullScreenOptimized(bFullScreenOptimized: boolean): this;

        /**
            * Sets the aggregated {@link #getHeaderContainer headerContainer}.
        */
        public setHeaderContainer(oHeaderContainer: sap.m.ObjectHeaderContainer): this;

        /**
            * Sets a new value for property {@link #getIcon icon}.
         * 
         * Defines the icon of the `ObjectHeader`.
         * 
         * ** Note: ** Recursive resolution of binding expressions is not supported by the framework. It works only in ObjectHeader, since it is a composite control and creates an Image control internally.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIcon(sIcon: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIconActive iconActive}.
         * 
         * Determines whether the `ObjectHeader` icon is clickable.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconActive(bIconActive: boolean): this;

        /**
            * Sets a new value for property {@link #getIconAlt iconAlt}.
         * 
         * Determines the alternative text of the `ObjectHeader` icon. The text is displayed if the image for the icon is not available, or cannot be displayed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconAlt(sIconAlt: string): this;

        /**
            * Sets a new value for property {@link #getIconDensityAware iconDensityAware}.
         * 
         * By default, this is set to `true` but then one or more requests are sent trying to get the density perfect version of image if this version of image doesn't exist on the server.
         * 
         * If bandwidth is the key for the application, set this value to `false`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setIconDensityAware(bIconDensityAware: boolean): this;

        /**
            * Sets a new value for property {@link #getIconTooltip iconTooltip}.
         * 
         * Determines the tooltip text of the `ObjectHeader` icon.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIconTooltip(sIconTooltip: string): this;

        /**
            * Sets a new value for property {@link #getIntro intro}.
         * 
         * Determines the introductory text for the `ObjectHeader`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIntro(sIntro: string): this;

        /**
            * Sets a new value for property {@link #getIntroActive introActive}.
         * 
         * Determines whether the introductory text of the `ObjectHeader` is clickable.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIntroActive(bIntroActive: boolean): this;

        /**
            * Sets a new value for property {@link #getIntroHref introHref}.
         * 
         * Determines the intro link target URI. Supports standard hyperlink behavior. If an action should be triggered, this should not be set, but instead an event handler for the `introPress` event should be registered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIntroHref(sIntroHref: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getIntroTarget introTarget}.
         * 
         * Determines the `target` attribute for the intro link. Options are `_self`, `_top`, `_blank`, `_parent`, `_search`. Alternatively, a frame name can be entered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setIntroTarget(sIntroTarget: string): this;

        /**
            * Sets a new value for property {@link #getIntroTextDirection introTextDirection}.
         * 
         * Specifies the intro text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setIntroTextDirection(sIntroTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Sets the visibility value of the Favorite marker.
        */
        public setMarkFavorite(bMarked: boolean): this;

        /**
            * Sets the visibility value of the Flagged marker.
        */
        public setMarkFlagged(bMarked: boolean): this;

        /**
            * Set the number value to the internal aggregation
        */
        public setNumber(sNumber: string): this;

        /**
            * Set the number state to the internal aggregation
        */
        public setNumberState(sState: sap.ui.core.ValueState): this;

        /**
            * Sets a new value for property {@link #getNumberTextDirection numberTextDirection}.
         * 
         * Specifies the number and unit text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setNumberTextDirection(sNumberTextDirection: sap.ui.core.TextDirection): this;

        /**
            * Set the number unit to the internal aggregation
        */
        public setNumberUnit(sUnit: string): this;

        /**
            * Sets a new value for property {@link #getResponsive responsive}.
         * 
         * Determines whether the `ObjectHeader` is rendered with a different design that reacts responsively to the screen sizes.
         * 
         * ** Note: ** Be aware that the design and behavior of the responsive `ObjectHeader` could change without further notification.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setResponsive(bResponsive: boolean): this;

        /**
            * Sets the aggregated {@link #getSecondStatus secondStatus}.
        */
        public setSecondStatus(oSecondStatus: ObjectStatus): this;

        /**
            * Sets the visibility value of the Flagged and Favorite markers.
        */
        public setShowMarkers(bMarked: boolean): this;

        /**
            * Sets a new value for property {@link #getShowTitleSelector showTitleSelector}.
         * 
         * Determines whether the selector arrow icon/image is displayed and can be pressed.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setShowTitleSelector(bShowTitleSelector: boolean): this;

        /**
            * Sets a new value for property {@link #getTitle title}.
         * 
         * Determines the title of the `ObjectHeader`.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitle(sTitle: string): this;

        /**
            * Sets a new value for property {@link #getTitleActive titleActive}.
         * 
         * Determines whether the title of the `ObjectHeader` is clickable and is set only if a title is provided.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitleActive(bTitleActive: boolean): this;

        /**
            * Sets a new value for property {@link #getTitleHref titleHref}.
         * 
         * Defines the title link target URI. Supports standard hyperlink behavior.
         * 
         * ** Note: ** If an action should be triggered, this property should not be set, but instead an event handler for the `titlePress` event should be registered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitleHref(sTitleHref: sap.ui.core.URI): this;

        /**
            * Sets a new value for property {@link #getTitleLevel titleLevel}.
         * 
         * Defines the semantic level of the title.
         * 
         * This information is used by assistive technologies, such as screen readers to create a hierarchical site map for faster navigation. Depending on this setting an HTML h1-h6 element is used.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `H1`.
        */
        public setTitleLevel(sTitleLevel: sap.ui.core.TitleLevel): this;

        /**
            * Sets the new text for the tooltip of the select title arrow to the internal aggregation
        */
        public setTitleSelectorTooltip(sTooltip: string): this;

        /**
            * Sets a new value for property {@link #getTitleTarget titleTarget}.
         * 
         * Determines the `target` attribute for the title link. Options are `_self`, `_top`, `_blank`, `_parent`, `_search`. Alternatively, a frame name can be entered.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTitleTarget(sTitleTarget: string): this;

        /**
            * Sets a new value for property {@link #getTitleTextDirection titleTextDirection}.
         * 
         * Specifies the title text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTitleTextDirection(sTitleTextDirection: sap.ui.core.TextDirection): this;

    }
}