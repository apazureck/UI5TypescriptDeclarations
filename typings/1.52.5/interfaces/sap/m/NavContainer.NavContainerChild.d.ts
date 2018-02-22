declare namespace sap.m {

    /**
    
    */
    export interface NavContainerChild {

        /**
         * This event is fired every time when the NavContainer has made this child control invisible. In case of animated transitions this event is fired after the transition finishes. This control is now no longer being displayed and not animated anymore.
     * 
        */
        AfterHide: () => void;
        /**
         * This event is fired every time when the NavContainer has made this child control visible. In case of animated transitions this event is fired after the transition finishes. This control is now being displayed and not animated anymore.
     * 
        */
        AfterShow: () => void;
        /**
         * This event is fired before the NavContainer shows this child control for the first time.
     * 
        */
        BeforeFirstShow: () => void;
        /**
         * This event is fired every time before the NavContainer hides this child control. In case of animated transitions this event is fired before the transition starts.
     * 
        */
        BeforeHide: () => void;
        /**
         * This event is fired every time before the NavContainer shows this child control. In case of animated transitions this event is fired before the transition starts.
     * 
        */
        BeforeShow: () => void;

    }
}