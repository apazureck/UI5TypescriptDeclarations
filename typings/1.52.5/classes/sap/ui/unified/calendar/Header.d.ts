declare module 'sap/ui/unified/calendar/Header' {
    import { Event } from 'sap/ui/base/Event';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IHeaderSettings extends IControlSettings {
        textButton0?: string;
        additionalTextButton0?: string;
        ariaLabelButton0?: string;
        visibleButton0?: boolean;
        textButton1?: string;
        additionalTextButton1?: string;
        ariaLabelButton1?: string;
        visibleButton1?: boolean;
        textButton2?: string;
        additionalTextButton2?: string;
        ariaLabelButton2?: string;
        visibleButton2?: boolean;
        enabledPrevious?: boolean;
        enabledNext?: boolean;
    }

    /**
    
    */
    export class Header extends Control {

        /**
            * Constructor for a new Header.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IHeaderSettings);


        /**
            * Attaches event handler `fnFunction` to the {@link #event:pressButton0 pressButton0} event of this `sap.ui.unified.calendar.Header`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
         * 
         * First button pressed (normally day)
        */
        attachPressButton0<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:pressButton0 pressButton0} event of this `sap.ui.unified.calendar.Header`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
         * 
         * First button pressed (normally day)
        */
        attachPressButton0<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:pressButton1 pressButton1} event of this `sap.ui.unified.calendar.Header`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
         * 
         * Second button pressed (normally month)
        */
        attachPressButton1<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:pressButton1 pressButton1} event of this `sap.ui.unified.calendar.Header`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
         * 
         * Second button pressed (normally month)
        */
        attachPressButton1<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:pressButton2 pressButton2} event of this `sap.ui.unified.calendar.Header`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
         * 
         * Third button pressed (normally year)
        */
        attachPressButton2<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:pressButton2 pressButton2} event of this `sap.ui.unified.calendar.Header`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
         * 
         * Third button pressed (normally year)
        */
        attachPressButton2<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:pressNext pressNext} event of this `sap.ui.unified.calendar.Header`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
         * 
         * Next button pressed
        */
        attachPressNext<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:pressNext pressNext} event of this `sap.ui.unified.calendar.Header`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
         * 
         * Next button pressed
        */
        attachPressNext<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:pressPrevious pressPrevious} event of this `sap.ui.unified.calendar.Header`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
         * 
         * Previous button pressed
        */
        attachPressPrevious<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:pressPrevious pressPrevious} event of this `sap.ui.unified.calendar.Header`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
         * 
         * Previous button pressed
        */
        attachPressPrevious<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:pressButton0 pressButton0} event of this `sap.ui.unified.calendar.Header`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPressButton0(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:pressButton1 pressButton1} event of this `sap.ui.unified.calendar.Header`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPressButton1(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:pressButton2 pressButton2} event of this `sap.ui.unified.calendar.Header`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPressButton2(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:pressNext pressNext} event of this `sap.ui.unified.calendar.Header`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPressNext(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:pressPrevious pressPrevious} event of this `sap.ui.unified.calendar.Header`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPressPrevious(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.unified.calendar.Header with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:pressButton0 pressButton0} to attached listeners.
        */
        protected firePressButton0(mParameters?: {}): this;

        /**
            * Fires event {@link #event:pressButton1 pressButton1} to attached listeners.
        */
        protected firePressButton1(mParameters?: {}): this;

        /**
            * Fires event {@link #event:pressButton2 pressButton2} to attached listeners.
        */
        protected firePressButton2(mParameters?: {}): this;

        /**
            * Fires event {@link #event:pressNext pressNext} to attached listeners.
        */
        protected firePressNext(mParameters?: {}): this;

        /**
            * Fires event {@link #event:pressPrevious pressPrevious} to attached listeners.
        */
        protected firePressPrevious(mParameters?: {}): this;

        /**
            * Gets current value of property {@link #getAdditionalTextButton0 additionalTextButton0}.
         * 
         * Additional text of the first button (normally day)
        */
        public getAdditionalTextButton0(): string;

        /**
            * Gets current value of property {@link #getAdditionalTextButton1 additionalTextButton1}.
         * 
         * Additional text of the second button (normally month)
        */
        public getAdditionalTextButton1(): string;

        /**
            * Gets current value of property {@link #getAdditionalTextButton2 additionalTextButton2}.
         * 
         * Additional text of the third button (normally year)
        */
        public getAdditionalTextButton2(): string;

        /**
            * Gets current value of property {@link #getAriaLabelButton0 ariaLabelButton0}.
         * 
         * aria-label of the first button (normally day)
        */
        public getAriaLabelButton0(): string;

        /**
            * Gets current value of property {@link #getAriaLabelButton1 ariaLabelButton1}.
         * 
         * aria-label of the second button (normally month)
        */
        public getAriaLabelButton1(): string;

        /**
            * Gets current value of property {@link #getAriaLabelButton2 ariaLabelButton2}.
         * 
         * aria-label of the third button (normally year)
        */
        public getAriaLabelButton2(): string;

        /**
            * Gets current value of property {@link #getEnabledNext enabledNext}.
         * 
         * Enables the Next button
         * 
         * Default value is `true`.
        */
        public getEnabledNext(): boolean;

        /**
            * Gets current value of property {@link #getEnabledPrevious enabledPrevious}.
         * 
         * Enables the previous button
         * 
         * Default value is `true`.
        */
        public getEnabledPrevious(): boolean;

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
            * Returns a metadata object for class sap.ui.unified.calendar.Header.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getTextButton0 textButton0}.
         * 
         * Text of the first button (normally day)
        */
        public getTextButton0(): string;

        /**
            * Gets current value of property {@link #getTextButton1 textButton1}.
         * 
         * Text of the second button (normally month)
        */
        public getTextButton1(): string;

        /**
            * Gets current value of property {@link #getTextButton2 textButton2}.
         * 
         * Text of the third button (normally year)
        */
        public getTextButton2(): string;

        /**
            * Gets current value of property {@link #getVisibleButton0 visibleButton0}.
         * 
         * If set, the first button will be displayed
         * 
         * ** Note: ** The default is set to false to be compatible to older versions
         * 
         * Default value is `false`.
        */
        public getVisibleButton0(): boolean;

        /**
            * Gets current value of property {@link #getVisibleButton1 visibleButton1}.
         * 
         * If set, the second button will be displayed
         * 
         * Default value is `true`.
        */
        public getVisibleButton1(): boolean;

        /**
            * Gets current value of property {@link #getVisibleButton2 visibleButton2}.
         * 
         * If set, the third button will be displayed
         * 
         * Default value is `true`.
        */
        public getVisibleButton2(): boolean;

        /**
            * Sets a new value for property {@link #getAdditionalTextButton0 additionalTextButton0}.
         * 
         * Additional text of the first button (normally day)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAdditionalTextButton0(sAdditionalTextButton0: string): this;

        /**
            * Sets a new value for property {@link #getAdditionalTextButton1 additionalTextButton1}.
         * 
         * Additional text of the second button (normally month)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAdditionalTextButton1(sAdditionalTextButton1: string): this;

        /**
            * Sets a new value for property {@link #getAdditionalTextButton2 additionalTextButton2}.
         * 
         * Additional text of the third button (normally year)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAdditionalTextButton2(sAdditionalTextButton2: string): this;

        /**
            * Sets a new value for property {@link #getAriaLabelButton0 ariaLabelButton0}.
         * 
         * aria-label of the first button (normally day)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAriaLabelButton0(sAriaLabelButton0: string): this;

        /**
            * Sets a new value for property {@link #getAriaLabelButton1 ariaLabelButton1}.
         * 
         * aria-label of the second button (normally month)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAriaLabelButton1(sAriaLabelButton1: string): this;

        /**
            * Sets a new value for property {@link #getAriaLabelButton2 ariaLabelButton2}.
         * 
         * aria-label of the third button (normally year)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setAriaLabelButton2(sAriaLabelButton2: string): this;

        /**
            * Sets a new value for property {@link #getEnabledNext enabledNext}.
         * 
         * Enables the Next button
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabledNext(bEnabledNext: boolean): this;

        /**
            * Sets a new value for property {@link #getEnabledPrevious enabledPrevious}.
         * 
         * Enables the previous button
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEnabledPrevious(bEnabledPrevious: boolean): this;

        /**
            * Sets a new value for property {@link #getTextButton0 textButton0}.
         * 
         * Text of the first button (normally day)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTextButton0(sTextButton0: string): this;

        /**
            * Sets a new value for property {@link #getTextButton1 textButton1}.
         * 
         * Text of the second button (normally month)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTextButton1(sTextButton1: string): this;

        /**
            * Sets a new value for property {@link #getTextButton2 textButton2}.
         * 
         * Text of the third button (normally year)
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTextButton2(sTextButton2: string): this;

        /**
            * Sets a new value for property {@link #getVisibleButton0 visibleButton0}.
         * 
         * If set, the first button will be displayed
         * 
         * ** Note: ** The default is set to false to be compatible to older versions
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setVisibleButton0(bVisibleButton0: boolean): this;

        /**
            * Sets a new value for property {@link #getVisibleButton1 visibleButton1}.
         * 
         * If set, the second button will be displayed
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleButton1(bVisibleButton1: boolean): this;

        /**
            * Sets a new value for property {@link #getVisibleButton2 visibleButton2}.
         * 
         * If set, the third button will be displayed
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setVisibleButton2(bVisibleButton2: boolean): this;

    }
}