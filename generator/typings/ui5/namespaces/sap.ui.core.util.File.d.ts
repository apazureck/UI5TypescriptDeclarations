declare namespace sap.ui.core.util.File {
    // Methods
    /**
        * Triggers a download / save action of the given file.
     * 
     * There are limitations for this feature in some browsers:<p>
     * 
     * <p>** macOS Safari < 10.1 / iOS Safari **<br> A new window or tab is opened. In macOS, the user has to save the file manually (by using key combination "CMD + S", choosing the page source format, and specifying a file name). In iOS, the content can be opened in another app (Mail, Notes, ...) or can be copied to the clipboard. If a pop-up blocker prevents this action, an error will be thrown which can be used to notify the user that the pop-up blocker needs to be disabled.
     * 
     * ** Android Browser **<br> Not supported
     * 
     * ** Windows Phone 10 Edge **<br> Not supported
        */
    export function save(sData: string, sFileName: string, sFileExtension: string, sMimeType: string, sCharset: string, bByteOrderMark: boolean): any;
}