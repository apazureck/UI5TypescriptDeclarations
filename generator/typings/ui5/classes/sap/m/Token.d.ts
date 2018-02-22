declare module 'sap/m/Token' {
    import { Event } from 'sap/ui/base/Event';
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';


    export interface ITokenSettings {
        selected?: boolean;
        key?: string;
        text?: string;
        editable?: boolean;
        textDirection?: sap.ui.core.TextDirection;
    }

    /**
    
    */
    export class Token {

        /**
            * Constructor for a new Token.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITokenSettings);


        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:delete delete} event of this `sap.m.Token`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Token` itself.
         * 
         * This event is fired if the user clicks the token's delete icon.
        */
        attachDelete<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:delete delete} event of this `sap.m.Token`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Token` itself.
         * 
         * This event is fired if the user clicks the token's delete icon.
        */
        attachDelete<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:deselect deselect} event of this `sap.m.Token`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Token` itself.
         * 
         * This event is fired when the token gets deselected.
        */
        attachDeselect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:deselect deselect} event of this `sap.m.Token`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Token` itself.
         * 
         * This event is fired when the token gets deselected.
        */
        attachDeselect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.Token`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Token` itself.
         * 
         * This event is fired when the user clicks on the token.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.m.Token`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Token` itself.
         * 
         * This event is fired when the user clicks on the token.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.Token`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Token` itself.
         * 
         * This event is fired when the token gets selected.
        */
        attachSelect<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, void>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.m.Token`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Token` itself.
         * 
         * This event is fired when the token gets selected.
        */
        attachSelect<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, void>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:delete delete} event of this `sap.m.Token`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDelete(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:deselect deselect} event of this `sap.m.Token`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachDeselect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.m.Token`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.m.Token`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSelect(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Token with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:delete delete} to attached listeners.
        */
        protected fireDelete(mParameters?: {}): this;

        /**
            * Fires event {@link #event:deselect deselect} to attached listeners.
        */
        protected fireDeselect(mParameters?: {}): this;

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: {}): this;

        /**
            * Fires event {@link #event:select select} to attached listeners.
        */
        protected fireSelect(mParameters?: {}): this;

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public getAriaDescribedBy(): {};

        /**
            * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public getAriaLabelledBy(): {};

        /**
            * Gets current value of property {@link #getEditable editable}.
         * 
         * Indicates the editable status of the token. If it is set to `true`, token displays a delete icon.
         * 
         * Default value is `true`.
        */
        public getEditable(): boolean;

        /**
            * Gets current value of property {@link #getKey key}.
         * 
         * Key of the token.
         * 
         * Default value is ``.
        */
        public getKey(): string;

        /**
            * Returns a metadata object for class sap.m.Token.
        */
        public static getMetadata(): Metadata;

        /**
            * Gets current value of property {@link #getSelected selected}.
         * 
         * Indicates the current selection status of the token.
         * 
         * Default value is `false`.
        */
        public getSelected(): boolean;

        /**
            * Gets current value of property {@link #getText text}.
         * 
         * Displayed text of the token.
         * 
         * Default value is ``.
        */
        public getText(): string;

        /**
            * Gets current value of property {@link #getTextDirection textDirection}.
         * 
         * This property specifies the text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * Default value is `Inherit`.
        */
        public getTextDirection(): sap.ui.core.TextDirection;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Sets the editable status of the token.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Sets a new value for property {@link #getKey key}.
         * 
         * Key of the token.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setKey(sKey: string): this;

        /**
            * Sets the selection status of the token.
        */
        public setSelected(bSelected: boolean): this;

        /**
            * Sets a new value for property {@link #getText text}.
         * 
         * Displayed text of the token.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is ``.
        */
        public setText(sText: string): this;

        /**
            * Sets a new value for property {@link #getTextDirection textDirection}.
         * 
         * This property specifies the text directionality with enumerated options. By default, the control inherits text direction from the DOM.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `Inherit`.
        */
        public setTextDirection(sTextDirection: sap.ui.core.TextDirection): this;

    }
}