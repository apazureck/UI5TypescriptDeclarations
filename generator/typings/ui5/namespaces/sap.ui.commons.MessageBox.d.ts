declare namespace sap.ui.commons.MessageBox {
    // Methods
    /**
        * Displays an alert box with the given message and an OK button (no icons). If a callback is given, it is called after the alert box has been closed by the user via the OK button or via the Close icon. The callback is called with the following signature:
     * 
     * `function ()`
     * 
     * The alert box opened by this method is modal and it is processed asynchronously. Applications have to use the `fnCallback` to continue work after the user closed the alert box.
        */
    export function alert(vMessage: string | {}, fnCallback: (() => any), sTitle: string, sDialogId: string): any;/**
    * Displays a confirmation dialog box with the given message, a question icon, an OK button, and a Cancel button. If a callback is given, it is called after the alert box has been closed by the user via one of the buttons or via the close icon. The callback is called with the following signature
 * 
 * `function(bConfirmed)`
 * 
 * where bConfirmed is set to true when the user has activated the OK button.
 * 
 * The confirmation dialog box opened by this method is modal and it is processed asynchronously. Applications have to use the `fnCallback` to continue work after the user closed the alert box.
    */
    export function confirm(vMessage: string | {}, fnCallback: (() => any), sTitle: string, sDialogId: string): any;/**
    * Creates and displays a simple message box with the given text and buttons, and optionally other parts. After the user has selected a button or closed the message box using the close icon, the `callback` function is invoked when given.
 * 
 * The only mandatory parameter is `vMessage`. Either a string with the corresponding text or even a layout control could be provided.
 * 
 * The created dialog box is executed asynchronously. When it has been created and registered for rendering, this function returns without waiting for a user reaction.
 * 
 * When applications have to react on the users choice, they have to provide a callback function and postpone any reaction on the user choice until that callback is triggered.
 * 
 * The signature of the callback is
 * 
 * function (oAction);
 * 
 * where `oAction` is the button that the user has pressed. When the user has pressed the close button, a MessageBox.Action.Close is returned.
    */
    export function show(vMessage: string | {}, oIcon: sap.ui.commons.MessageBox.Icon, sTitle: string, vActions: sap.ui.commons.MessageBox.Action | {}, fnCallback: (() => any), oDefaultAction: sap.ui.commons.MessageBox.Action, sDialogId: string): any;
}