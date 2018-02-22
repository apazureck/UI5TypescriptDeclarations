declare module 'sap/ui/commons/Accordion' {
    import { Event } from 'sap/ui/base/Event';
    import { AccordionSection } from 'sap/ui/commons/AccordionSection';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Control, IControlSettings } from 'sap/ui/core/Control';

    export interface IAccordionSettings extends IControlSettings {
        width?: sap.ui.core.CSSSize;
        openedSectionsId?: string;
    }

    /**
    
    */
    export class Accordion extends Control {

        /**
            * Constructor for a new Accordion.
         * 
         * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
        */
        public constructor(sId: string, mSettings: IAccordionSettings);


        /**
            * Adds some section to the aggregation {@link #getSections sections}.
        */
        public addSection(oSection: AccordionSection): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:sectionClose sectionClose} event of this `sap.ui.commons.Accordion`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Accordion` itself.
         * 
         * Event is triggered when the user closes a section.
        */
        attachSectionClose<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ID of the closed section */
            closeSectionId: string,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:sectionClose sectionClose} event of this `sap.ui.commons.Accordion`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Accordion` itself.
         * 
         * Event is triggered when the user closes a section.
        */
        attachSectionClose<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ID of the closed section */
            closeSectionId: string,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:sectionOpen sectionOpen} event of this `sap.ui.commons.Accordion`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Accordion` itself.
         * 
         * Event is triggered when the user opens a section.
        */
        attachSectionOpen<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ID of the opened section */
            openSectionId: string, /* * IDs of the sections to be closed. Can be initial in the case of no previously opened section. */
            closeSectionIds: {},
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:sectionOpen sectionOpen} event of this `sap.ui.commons.Accordion`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Accordion` itself.
         * 
         * Event is triggered when the user opens a section.
        */
        attachSectionOpen<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ID of the opened section */
            openSectionId: string, /* * IDs of the sections to be closed. Can be initial in the case of no previously opened section. */
            closeSectionIds: {},
        }>) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:sectionsReorder sectionsReorder} event of this `sap.ui.commons.Accordion`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Accordion` itself.
         * 
         * Event is triggered when the user changes the position of a section.
        */
        attachSectionsReorder<TcustomData, Tcontext>(oData: {}, fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ID of the moved section */
            movedSectionId: string, /* * New index of the moved section */
            newIndex: number,
        }>, oCustomData?: TcustomData) => void, oListener?: Tcontext): this;

        /**
            * Attaches event handler `fnFunction` to the {@link #event:sectionsReorder sectionsReorder} event of this `sap.ui.commons.Accordion`.
         * 
         * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified, otherwise it will be bound to this `sap.ui.commons.Accordion` itself.
         * 
         * Event is triggered when the user changes the position of a section.
        */
        attachSectionsReorder<Tcontext>(fnFunction: (this: Tcontext, oEvent: Event<this, { /* * ID of the moved section */
            movedSectionId: string, /* * New index of the moved section */
            newIndex: number,
        }>) => void, oListener?: Tcontext): this;

        /**
            * Closes a section and opens the default one
        */
        public closeSection(sSectionId: string): any;

        /**
            * Destroys all the sections in the aggregation {@link #getSections sections}.
        */
        public destroySections(): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:sectionClose sectionClose} event of this `sap.ui.commons.Accordion`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSectionClose(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:sectionOpen sectionOpen} event of this `sap.ui.commons.Accordion`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSectionOpen(fnFunction: (() => any), oListener: {}): this;

        /**
            * Detaches event handler `fnFunction` from the {@link #event:sectionsReorder sectionsReorder} event of this `sap.ui.commons.Accordion`.
         * 
         * The passed function and listener object must match the ones used for event registration.
        */
        public detachSectionsReorder(fnFunction: (() => any), oListener: {}): this;

        /**
            * Creates a new subclass of class sap.ui.commons.Accordion with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Fires event {@link #event:sectionClose sectionClose} to attached listeners.
        */
        protected fireSectionClose(mParameters?: { closeSectionId?: string, }): this;

        /**
            * Fires event {@link #event:sectionOpen sectionOpen} to attached listeners.
        */
        protected fireSectionOpen(mParameters?: { openSectionId?: string, closeSectionIds?: {}, }): this;

        /**
            * Fires event {@link #event:sectionsReorder sectionsReorder} to attached listeners.
        */
        protected fireSectionsReorder(mParameters?: { movedSectionId?: string, newIndex?: number, }): this;

        /**
            * Returns a metadata object for class sap.ui.commons.Accordion.
        */
        public static getMetadata(): Metadata | any | {};

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
            * Gets current value of property {@link #getOpenedSectionsId openedSectionsId}.
         * 
         * Section IDs that are opened by default at application start
        */
        public getOpenedSectionsId(): string;

        /**
            * Gets content of aggregation {@link #getSections sections}.
         * 
         * Empty container used to display any library control
        */
        public getSections(): {};

        /**
            * Gets current value of property {@link #getWidth width}.
         * 
         * When the specified width is less than the width of a section content, a horizontal scroll bar is provided.
         * 
         * Default value is `200px`.
        */
        public getWidth(): sap.ui.core.CSSSize;

        /**
            * Checks for the provided `sap.ui.commons.AccordionSection` in the aggregation {@link #getSections sections}. and returns its index if found or -1 otherwise.
        */
        public indexOfSection(oSection: AccordionSection): number;

        /**
            * Inserts a section into the aggregation {@link #getSections sections}.
        */
        public insertSection(oSection: AccordionSection, iIndex: number): this;

        /**
            * Opens a section
        */
        public openSection(sSectionId: string): any;

        /**
            * Removes all the controls from the aggregation {@link #getSections sections}.
         * 
         * Additionally, it unregisters them from the hosting UIArea.
        */
        public removeAllSections(): {};

        /**
            * Removes a section from the aggregation {@link #getSections sections}.
        */
        public removeSection(vSection: number | string | AccordionSection): AccordionSection;

        /**
            * Redefinition of the method to add additional handling
        */
        public setOpenedSectionsId(sOpenedSectionsId: string): this;

        /**
            * Sets a new value for property {@link #getWidth width}.
         * 
         * When the specified width is less than the width of a section content, a horizontal scroll bar is provided.
         * 
         * When called with a value of `null` or `undefined`, the default value of the property will be restored.
         * 
         * Default value is `200px`.
        */
        public setWidth(sWidth: sap.ui.core.CSSSize): this;

    }
}