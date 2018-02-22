declare namespace jQuery.sap.history {
    // Methods
    /**
        * This function adds a history record. It will not trigger the related handler of the routes, the changes have to be done by the developer. Normally, a history record should be added when changes are done already.
        */
    export function addHistory(sIdf: string, oStateData: {}, bBookmarkable: boolean, bVirtual: boolean): string;/**
    * Adds a route to the history handling.
    */
    export function addRoute(sIdf: string, fn: (() => any), oThis: {}): {};/**
    * This function adds a virtual history record based on the current hash. A virtual record is only for marking the current state of the application, and when the back button clicked it will return to the previous state. It is used when the marked state shouldn't be seen by the user when user click the back or forward button of the browser. For example, when showing a context menu a virtual history record should be added and this record will be skipped when user navigates back and it will return directly to the previous history record. If you avoid adding the virtual history record, it will return to one history record before the one your virtual record is based on. That's why virtual record is necessary.
    */
    export function addVirtualHistory(): any;/**
    * This function navigates back through the history stack. The number of steps is set by the parameter iSteps. It also handles the situation when it's called while there's nothing in the history stack. Normally this happens when the application is restored from the bookmark. If there's nothing in the history stack, the default handler will be called with NavType jQuery.sap.history.NavType.Back.
    */
    export function back(iSteps: number): any;/**
    * This function will navigate back to the recent history state which has the sPath identifier. It is usually used to navigate back along one specific route and jump over the intermediate history state if there are any.
    */
    export function backThroughPath(sPath: string): any;/**
    * This function calculate the number of back steps to the specific sHash passed as parameter, and then go back to the history state with this hash.
    */
    export function backToHash(sHash: string): any;/**
    * Set the default handler which will be called when there's an empty hash in the url.
    */
    export function setDefaultHandler(fn: (() => any)): any;
}