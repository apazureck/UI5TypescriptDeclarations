declare module 'sap/ui/core/delegate/ScrollEnablement' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { IconTabBar } from 'sap/m/IconTabBar';
    import { Control } from 'sap/ui/core/Control';
    import { Object, IObjectSettings } from 'sap/ui/base/Object';

    export interface IScrollEnablementSettings extends IObjectSettings {
    }

    /**
    
    */
    export class ScrollEnablement extends Object {

        /**
            * Creates a ScrollEnablement delegate that can be attached to Controls requiring capabilities for scrolling of a certain part of their DOM.
        */
        public constructor(oControl: Control, sScrollContentDom: string, oConfig: { horizontal?: boolean, vertical?: boolean, zynga?: boolean, iscroll?: boolean, preventDefault?: boolean, nonTouchScrolling?: boolean, scrollContainerId?: string, });


        /**
            * Destroys this Scrolling delegate.
         * 
         * This function must be called by the control which uses this delegate in the `exit` function.
        */
        public destroy(): any;

        /**
            * Destructor method for objects
        */
        public destroy(): any;

        /**
            * Creates a new subclass of class sap.ui.core.delegate.ScrollEnablement with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Calculates scroll position of a child of a container.
        */
        protected getChildPosition(vElement: any | any): {};

        /**
            * Get current setting for horizontal scrolling.
        */
        protected getHorizontal(): boolean;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns a metadata object for class sap.ui.core.delegate.ScrollEnablement.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Get current setting for vertical scrolling.
        */
        protected getVertical(): boolean;

        /**
            * Refreshes this Scrolling delegate.
        */
        protected refresh(): any;

        /**
            * Scrolls to an element within a container.
        */
        protected scrollToElement(oElement: any, iTime?: number): this;

        /**
            * Setter for property `bounce`.
        */
        protected setBounce(bBounce: boolean): any;

        /**
            * Sets GrowingList control to scroll container
        */
        protected setGrowingList(fnScrollLoadCallback: (() => any), sScrollLoadDirection: sap.m.ListGrowingDirection): any;

        /**
            * Enable or disable horizontal scrolling.
        */
        protected setHorizontal(bHorizontal: boolean): any;

        /**
            * Sets IconTabBar control to scroll container
        */
        protected setIconTabBar(oIconTabBar: IconTabBar, fnScrollEndCallback: (() => any), fnScrollStartCallback: (() => any)): any;

        /**
            * Set overflow control on top of scroll container.
        */
        protected setPullDown(oControl: Control): any;

        /**
            * Enable or disable vertical scrolling.
        */
        protected setVertical(bVertical: boolean): any;

    }
}