declare module 'sap/ui/demokit/TagCloud' {
    import { Event } from 'sap/ui/base/Event';
    import { Tag } from 'sap/ui/demokit/Tag';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface ITagCloudSettings extends IControlSettings {
        maxFontSize?: number;
        minFontSize?: number;
    }

    /**
    
    */
    export class TagCloud extends Control {

        /**
            * Constructor for a new TagCloud.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: ITagCloudSettings);


        /**
            * Adds some tag to the aggregation {@link #getTags tags}.
        */
        public addTag(oTag: Tag): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.demokit.TagCloud`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.demokit.TagCloud` itself.
         * 
         * Fired when a Tag is clicked.
        */
        attachPress<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of the selected Tag. */
            tagId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.demokit.TagCloud`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.demokit.TagCloud` itself.
         * 
         * Fired when a Tag is clicked.
        */
        attachPress<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * Id of the selected Tag. */
            tagId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Destroys all the tags in the aggregation {@link #getTags tags}.
        */
        public destroyTags(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.demokit.TagCloud`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachPress(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.demokit.TagCloud with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:press press} to attached listeners.
        */
        protected firePress(mParameters?: { tagId?: string, }): this;

        /**
            * Gets current value of property {@link #getMaxFontSize maxFontSize}.
         * 
         * Maximum font size that may be chosen for a tag in this cloud
         * 
         * Default value is `30`.
        */
        public getMaxFontSize(): number;

        /**
            * Returns a metadata object for class sap.ui.demokit.TagCloud.
        */
        public static getMetadata(): Metadata | any | {};

        /**
            * Returns the runtime metadata for this UI element.
         * 
         * When using the defineClass method, this function is automatically created and returns a runtime representation of the design time metadata.
        */
        public getMetadata(): {} | any | Metadata;

        /**
            * Returns a metadata object for class sap.ui.core.Element.
        */
        public static getMetadata(): Metadata;

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
            * Gets current value of property {@link #getMinFontSize minFontSize}.
         * 
         * Minimum font size that must be used for a tag in this cloud
         * 
         * Default value is `10`.
        */
        public getMinFontSize(): number;

        /**
            * Gets content of aggregation {@link #getTags tags}.
         * 
         * The tags displayed in this tag cloud
        */
        public getTags(): {};

        /**
            * Checks for the provided `sap.ui.demokit.Tag` in the aggregation {@link #getTags tags}. and returns its index if found or -1 otherwise.
        */
        public indexOfTag(oTag: Tag): number;

        /**
            * Inserts a tag into the aggregation {@link #getTags tags}.
        */
        public insertTag(oTag: Tag, iIndex: number): this;

        /**
            * Removes all the controls from the aggregation {@link #getTags tags}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllTags(): {};

        /**
            * Removes a tag from the aggregation {@link #getTags tags}.
        */
        public removeTag(vTag: number | string | Tag): Tag;

        /**
            * Sets a new value for property {@link #getMaxFontSize maxFontSize}.
         * 
         * Maximum font size that may be chosen for a tag in this cloud
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `30`.
        */
        public setMaxFontSize(iMaxFontSize: number): this;

        /**
            * Sets a new value for property {@link #getMinFontSize minFontSize}.
         * 
         * Minimum font size that must be used for a tag in this cloud
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `10`.
        */
        public setMinFontSize(iMinFontSize: number): this;

    }
}