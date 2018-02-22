declare module 'sap/m/Tokenizer' {
    import { Event } from 'sap/ui/base/Event';
    import { Token } from 'sap/m/Token';
    import { Control } from 'sap/ui/core/Control';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ScrollEnablement } from 'sap/ui/core/delegate/ScrollEnablement';


    export interface ITokenizerSettings {
        editable?: boolean;
        width?: sap.ui.core.CSSSize;
    }

    /**
    
    */
    export class Tokenizer {

        /**
            * Constructor for a new Tokenizer.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITokenizerSettings);


        /**
            * Function removes all selected tokens
        */
        public _removeSelectedTokens(): this;

        /**
            * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public addAriaDescribedBy(vAriaDescribedBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public addAriaLabelledBy(vAriaLabelledBy: sap.ui.core.ID | Control): this;

        /**
            * Adds some token to the aggregation {@link #getTokens tokens}.
        */
        public addToken(oToken: Token): this;

        /**
            * Function validates the given text and adds a new token if validation was successful
        */
        public addValidateToken(oParameters: {}): any;

        /**
            * Function adds a validation callback called before any new token gets added to the tokens aggregation
        */
        public addValidator(fValidator: (() => any)): any;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tokenChange tokenChange} event of this `sap.m.Tokenizer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Tokenizer` itself.
         * 
         * fired when the tokens aggregation changed (add / remove token)
        */
        attachTokenChange<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * type of tokenChange event. There are four TokenChange types: "added", "removed", "removedAll", "tokensChanged". Use Tokenizer.TokenChangeType.Added for "added", Tokenizer.TokenChangeType.Removed for "removed", Tokenizer.TokenChangeType.RemovedAll for "removedAll" and Tokenizer.TokenChangeType.TokensChanged for "tokensChanged". */
            type: string, /* * the added token or removed token. This parameter is used when tokenChange type is "added" or "removed". */
            token: Token, /* * the array of removed tokens. This parameter is used when tokenChange type is "removedAll". */
            tokens: {}, /* * the array of tokens that are added. This parameter is used when tokenChange type is "tokenChanged". */
            addedTokens: {}, /* * the array of tokens that are removed. This parameter is used when tokenChange type is "tokenChanged". */
            removedTokens: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tokenChange tokenChange} event of this `sap.m.Tokenizer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Tokenizer` itself.
         * 
         * fired when the tokens aggregation changed (add / remove token)
        */
        attachTokenChange<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * type of tokenChange event. There are four TokenChange types: "added", "removed", "removedAll", "tokensChanged". Use Tokenizer.TokenChangeType.Added for "added", Tokenizer.TokenChangeType.Removed for "removed", Tokenizer.TokenChangeType.RemovedAll for "removedAll" and Tokenizer.TokenChangeType.TokensChanged for "tokensChanged". */
            type: string, /* * the added token or removed token. This parameter is used when tokenChange type is "added" or "removed". */
            token: Token, /* * the array of removed tokens. This parameter is used when tokenChange type is "removedAll". */
            tokens: {}, /* * the array of tokens that are added. This parameter is used when tokenChange type is "tokenChanged". */
            addedTokens: {}, /* * the array of tokens that are removed. This parameter is used when tokenChange type is "tokenChanged". */
            removedTokens: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tokenUpdate tokenUpdate} event of this `sap.m.Tokenizer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Tokenizer` itself.
         * 
         * Fired when the tokens aggregation changed (add / remove token)
        */
        attachTokenUpdate<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Type of tokenChange event. There are two TokenUpdate types: "added", "removed" Use Tokenizer.TokenUpdateType.Added for "added" and Tokenizer.TokenUpdateType.Removed for "removed". */
            type: string, /* * The array of tokens that are added. This parameter is used when tokenUpdate type is "added". */
            addedTokens: {}, /* * The array of tokens that are removed. This parameter is used when tokenUpdate type is "removed". */
            removedTokens: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:tokenUpdate tokenUpdate} event of this `sap.m.Tokenizer`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.m.Tokenizer` itself.
         * 
         * Fired when the tokens aggregation changed (add / remove token)
        */
        attachTokenUpdate<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Type of tokenChange event. There are two TokenUpdate types: "added", "removed" Use Tokenizer.TokenUpdateType.Added for "added" and Tokenizer.TokenUpdateType.Removed for "removed". */
            type: string, /* * The array of tokens that are added. This parameter is used when tokenUpdate type is "added". */
            addedTokens: {}, /* * The array of tokens that are removed. This parameter is used when tokenUpdate type is "removed". */
            removedTokens: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the tokens in the aggregation {@link #getTokens tokens}.
        */
        public destroyTokens(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:tokenChange tokenChange} event of this `sap.m.Tokenizer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTokenChange(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:tokenUpdate tokenUpdate} event of this `sap.m.Tokenizer`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachTokenUpdate(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.m.Tokenizer with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:tokenChange tokenChange} to attached listeners.
        */
        protected fireTokenChange(mParameters?: { type?: string, token?: Token, tokens?: {}, addedTokens?: {}, removedTokens?: {}, }): this;

        /**
            * Fires event {@link #event:tokenUpdate tokenUpdate} to attached listeners.
         * 
         * Listeners may prevent the default action of this event by using the `preventDefault`-method on the event object.
        */
        protected fireTokenUpdate(mParameters?: { type?: string, addedTokens?: {}, removedTokens?: {}, }): boolean;

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
         * true if tokens shall be editable otherwise false
         * 
         * Default value is `true`.
        */
        public getEditable(): boolean;

        /**
            * Returns a metadata object for class sap.m.Tokenizer.
        */
        public static getMetadata(): Metadata;

        /**
            * Function returns the internally used scroll delegate
        */
        public getScrollDelegate(): ScrollEnablement;

        /**
            * Function returns the tokens' width
        */
        public getScrollWidth(): number;

        /**
            * Function returns all currently selected tokens
        */
        public getSelectedTokens(): {};

        /**
            * Gets content of aggregation {@link #getTokens tokens}.
         * 
         * the currently displayed tokens
        */
        public getTokens(): {};

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * Defines the width of the Tokenizer.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.m.Token` in the aggregation {@link #getTokens tokens}. and returns its index if found or -1 otherwise.
        */
        public indexOfToken(oToken: Token): number;

        /**
            * Inserts a token into the aggregation {@link #getTokens tokens}.
        */
        public insertToken(oToken: Token, iIndex: number): this;

        /**
            * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAllAriaDescribedBy(): {};

        /**
            * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAllAriaLabelledBy(): {};

        /**
            * Removes all the controls from the aggregation {@link #getTokens tokens}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllTokens(): {};

        /**
            * Function removes all validation callbacks
        */
        public removeAllValidators(): any;

        /**
            * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
        */
        public removeAriaDescribedBy(vAriaDescribedBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
        */
        public removeAriaLabelledBy(vAriaLabelledBy: number | sap.ui.core.ID | Control): sap.ui.core.ID;

        /**
            * Removes a token from the aggregation {@link #getTokens tokens}.
        */
        public removeToken(vToken: number | string | Token): Token;

        /**
            * Function removes a validation callback
        */
        public removeValidator(fValidator: (() => any)): any;

        /**
            * Function scrolls the tokens to the end
        */
        public scrollToEnd(): any;

        /**
            * Function scrolls the tokens to the start
        */
        public scrollToStart(): any;

        /**
            * Function selects all tokens
        */
        public selectAllTokens(bSelect: boolean): this;

        /**
            * Sets a new value for property {@link #getEditable editable}.
         * 
         * true if tokens shall be editable otherwise false
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `true`.
        */
        public setEditable(bEditable: boolean): this;

        /**
            * Function sets the tokenizer's width in pixels
        */
        public setPixelWidth(nWidth: number): any;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * Defines the width of the Tokenizer.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}