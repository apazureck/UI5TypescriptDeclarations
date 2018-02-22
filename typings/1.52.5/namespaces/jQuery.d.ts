declare namespace jQuery {
    // Methods
    /**
        * Adds the given ID reference to the aria-describedby attribute.
        */
    export function addAriaDescribedBy(sId: string, bPrepend: boolean): any;/**
    * Adds the given ID reference to the aria-labelledby attribute.
    */
    export function addAriaLabelledBy(sId: string, bPrepend: boolean): any;/**
    * Extension function to the jQuery.fn which identifies SAPUI5 controls in the given jQuery context.
    */
    export function control(iIndex: number): {} | {} | any;/**
    * Sets or gets the position of the cursor in an element that supports cursor positioning
    */
    export function cursorPos(iPos: number): number | any;/**
    * Returns the first focusable domRef in a given container (the first element of the collection)
    */
    export function firstFocusableDomRef(): any;/**
    * Retrieve the selected text in the first element of the collection.
 * 
 * ** Note **: This feature is only supported for input element’s type of text, search, url, tel and password.
    */
    export function getSelectedText(): string;/**
    * Returns `true` if the first element has a set tabindex
    */
    export function hasTabIndex(): boolean;/**
    * Returns the last focusable domRef in a given container
    */
    export function lastFocusableDomRef(): any;/**
    * Returns the outer HTML of the given HTML element
    */
    export function outerHTML(): string;/**
    * Gets the next parent DOM element with a given attribute and attribute value starting above the first given element
    */
    export function parentByAttribute(sAttribute: string, sValue: string): any;/**
    * Returns a rectangle describing the current visual positioning of the first DOM object in the collection (or `null` if no element was given)
    */
    export function rect(): {};/**
    * Returns whether a point described by X and Y is inside this Rectangle's boundaries
    */
    export function rectContains(iPosX: number, iPosY: number): boolean;/**
    * Removes the given ID reference from the aria-describedby attribute.
    */
    export function removeAriaDescribedBy(sId: string): any;/**
    * Removes the given ID reference from the aria-labelledby attribute.
    */
    export function removeAriaLabelledBy(sId: string): any;/**
    
    */
    export function root(oRootControl: {}): any;/**
    * Sets or returns the scrollLeft value of the first element in the given jQuery collection in right-to-left mode. Precondition: The element is rendered in RTL mode.
 * 
 * Reason for this method is that the major browsers use three different values for the same scroll position when in RTL mode. This method hides those differences and returns/applies the same value that would be returned in LTR mode: The distance in px how far the given container is scrolled away from the leftmost scroll position.
 * 
 * Returns "undefined" if no element and no iPos is given.
    */
    export function scrollLeftRTL(iPos: number): any | number;/**
    * Returns the MIRRORED scrollLeft value of the first element in the given jQuery collection in right-to-left mode. Precondition: The element is rendered in RTL mode.
 * 
 * Reason for this method is that the major browsers return three different values for the same scroll position when in RTL mode. This method hides those differences and returns the value that would be returned in LTR mode if the UI would be mirrored horizontally: The distance in px how far the given container is scrolled away from the rightmost scroll position.
 * 
 * Returns "undefined" if no element is given.
    */
    export function scrollRightRTL(): number;/**
    * Sets the text selection in the first element of the collection.
 * 
 * ** Note **: This feature is only supported for input element’s type of text, search, url, tel and password.
    */
    export function selectText(iStart: number, iEnd: number): any;/**
    
    */
    export function uiarea(iIdx: number): any;
}