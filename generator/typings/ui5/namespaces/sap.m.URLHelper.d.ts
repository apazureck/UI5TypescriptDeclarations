declare namespace sap.m.URLHelper {
    // Methods
    /**
        * Adds an event registration for redirect.
        */
    export function attachRedirect(fnFunction: (() => any), oListener: {}): {};/**
    * Detach already registered redirect event.
    */
    export function detachRedirect(fnFunction: (() => any), oListener: {}): {};/**
    * Builds Email URI from given parameter. Trims spaces from email addresses.
    */
    export function normalizeEmail(sEmail: string, sSubject: string, sBody: string, sCC: string, sBCC: string): string;/**
    * Sanitizes the given telephone number and returns SMS URI scheme.
    */
    export function normalizeSms(sTel: string): string;/**
    * Sanitizes the given telephone number and returns a telephone URI scheme.
    */
    export function normalizeTel(sTel: string): string;/**
    * Redirects to the given URL. This method fires "redirect" event before opening the URL.
    */
    export function redirect(sURL: string, bNewWindow: boolean): any;/**
    * Trigger email application to send email. Trims spaces from email addresses.
    */
    export function triggerEmail(sEmail: string, sSubject: string, sBody: string, sCC: string, sBCC: string): any;/**
    * Trigger SMS application to send SMS to given telephone number.
    */
    export function triggerSms(sTel: string): any;/**
    * Trigger telephone to call given telephone number.
    */
    export function triggerTel(sTel: string): any;
}