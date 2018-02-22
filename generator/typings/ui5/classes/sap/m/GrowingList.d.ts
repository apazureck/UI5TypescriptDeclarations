declare module 'sap/m/GrowingList' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { List, IListSettings } from 'sap/m/List';

    export interface IGrowingListSettings extends IListSettings {
        threshold?: number;
        triggerText?: string;
        scrollToLoad?: boolean;
    }

    /**
    
    */
    export class GrowingList extends List {

        /**
            * Constructor for a new GrowingList.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IGrowingListSettings);


        /**
            * Creates a new subclass of class sap.m.GrowingList with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.m.List.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

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
            * Returns a metadata object for class sap.m.GrowingList.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Gets current value of property {@link #getScrollToLoad scrollToLoad}.
         * 
         * If you set this property to true then user needs to scroll end to trigger loading a new page. Default value is false which means user needs to scroll end and then click button to load new page. NOTE: This property can be set true, if growing property is set "true" and if you only have one instance of this control inside the scroll container(e.g Page).
         * 
         * Default value is `false`.
        */
        public getScrollToLoad(): boolean;

        /**
            * Gets current value of property {@link #getThreshold threshold}.
         * 
         * Number of items requested from the server. To activate this you should set growing property to "true"
         * 
         * Default value is `20`.
        */
        public getThreshold(): number;

        /**
            * Gets current value of property {@link #getTriggerText triggerText}.
         * 
         * Text which is displayed on the trigger at the end of the list. The default is a translated text ("Load More Data") coming from the messagebundle properties. This property can be used only if growing property is set "true" and scrollToLoad property is set "false".
        */
        public getTriggerText(): string;

        /**
            * Sets a new value for property {@link #getScrollToLoad scrollToLoad}.
         * 
         * If you set this property to true then user needs to scroll end to trigger loading a new page. Default value is false which means user needs to scroll end and then click button to load new page. NOTE: This property can be set true, if growing property is set "true" and if you only have one instance of this control inside the scroll container(e.g Page).
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `false`.
        */
        public setScrollToLoad(bScrollToLoad: boolean): this;

        /**
            * Sets a new value for property {@link #getThreshold threshold}.
         * 
         * Number of items requested from the server. To activate this you should set growing property to "true"
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `20`.
        */
        public setThreshold(iThreshold: number): this;

        /**
            * Sets a new value for property {@link #getTriggerText triggerText}.
         * 
         * Text which is displayed on the trigger at the end of the list. The default is a translated text ("Load More Data") coming from the messagebundle properties. This property can be used only if growing property is set "true" and scrollToLoad property is set "false".
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
        */
        public setTriggerText(sTriggerText: string): this;

    }
}