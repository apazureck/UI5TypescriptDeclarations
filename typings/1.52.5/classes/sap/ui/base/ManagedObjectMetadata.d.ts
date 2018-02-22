declare module 'sap/ui/base/ManagedObjectMetadata' {


    export interface IManagedObjectMetadataSettings {
    }

    /**
    
    */
    export class ManagedObjectMetadata {

        /**
            * Creates a new metadata object that describes a subclass of ManagedObject.
         * 
         * ** Note: ** Code outside the `sap.ui.base` namespace must not call this constructor directly. Instances will be created automatically when a new class is defined with one of the {@link sap.ui.base.ManagedObject.extend * SomeClass *.extend} methods.
         * 
         * ** Note **: throughout this class documentation, the described subclass of ManagedObject is referenced as * the described class *.
        */
        public constructor(sClassName: string, oClassInfo: {});


        /**
            * Returns an info object for the named public aggregation of the described class no matter whether the aggregation was defined by the class itself or by one of its ancestor classes.
         * 
         * If neither the class nor its ancestor classes define a public aggregation with the given name, `undefined` is returned.
         * 
         * If the name is not given (or has a falsy value), then it is substituted by the name of the default aggregation of the 'described class' (if any).
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        public getAggregation(sName?: string): {};

        /**
            * Returns a map of info objects for the public aggregations of the described class. Aggregations declared by ancestor classes are not included.
         * 
         * The returned map keys the aggregation info objects by their name. In case of 0..1 aggregations this is the singular name, otherwise it is the plural name.
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        public getAggregations(): any;

        /**
            * Returns a map of info objects for all public aggregations of the described class, including public aggregations form the ancestor classes.
         * 
         * The returned map keys the aggregation info objects by their name. In case of 0..1 aggregations this is the singular name, otherwise it is the plural name.
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        public getAllAggregations(): any;

        /**
            * Returns a map of info objects for all public associations of the described class, including public associations form the ancestor classes.
         * 
         * The returned map keys the association info objects by their name. In case of 0..1 associations this is the singular name, otherwise it is the plural name.
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        public getAllAssociations(): any;

        /**
            * Returns a map of info objects for all public events of the described class, including public events form the ancestor classes.
         * 
         * The returned map keys the event info objects by their name.
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        public getAllEvents(): any;

        /**
            * Returns a map of info objects for all private (hidden) aggregations of the described class, including private aggregations from the ancestor classes.
         * 
         * The returned map contains aggregation info objects keyed by the aggregation name. In case of 0..1 aggregations this is the singular name, otherwise it is the plural name.
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        protected getAllPrivateAggregations(): any;

        /**
            * Returns a map of info objects for all public properties of the described class, including public properties from the ancestor classes.
         * 
         * The returned map keys the property info objects by their name.
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        public getAllProperties(): any;

        /**
            * Returns an info object for the named public association of the described class, no matter whether the association was defined by the class itself or by one of its ancestor classes.
         * 
         * If neither the described class nor its ancestor classes define an association with the given name, `undefined` is returned.
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        public getAssociation(sName: string): {};

        /**
            * Returns a map of info objects for all public associations of the described class. Associations declared by ancestor classes are not included.
         * 
         * The returned map keys the association info objects by their name. In case of 0..1 associations this is the singular name, otherwise it is the plural name.
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        public getAssociations(): any;

        /**
            * Returns an info object for the named public event of the described class, no matter whether the event was defined by the class itself or by one of its ancestor classes.
         * 
         * If neither the described class nor its ancestor classes define an event with the given name, `undefined` is returned.
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        public getEvent(sName: string): {};

        /**
            * Returns a map of info objects for the public events of the described class. Events declared by ancestor classes are not included.
         * 
         * The returned map keys the event info objects by their name.
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        public getEvents(): any;

        /**
            * Returns the name of the library that contains the described UIElement.
        */
        public getLibraryName(): string;

        /**
            * Returns the info object for the named public or private aggregation declared by the described class or by any of its ancestors.
         * 
         * If the name is not given (or has a falsy value), then it is substituted by the name of the default aggregation of the described class (if it is defined).
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        protected getManagedAggregation(sAggregationName: string): {};

        /**
            * Returns a map of info objects for the public properties of the described class. Properties declared by ancestor classes are not included.
         * 
         * The returned map keys the property info objects by their name.
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        public getProperties(): any;

        /**
            * Returns an info object for the named public property of the described class, no matter whether the property was defined by the class itself or by one of its ancestor classes.
         * 
         * If neither the described class nor its ancestor classes define a property with the given name, `undefined` is returned.
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        public getProperty(sName: string): {};

        /**
            * Returns a map of default values for all properties declared by the described class and its ancestors, keyed by the property name.
        */
        public getPropertyDefaults(): any;

        /**
            * Returns an info object for a public setting with the given name that either is a managed property or a managed aggregation of cardinality 0..1 and with at least one simple alternative type. The setting can be defined by the class itself or by one of its ancestor classes.
         * 
         * If neither the described class nor its ancestor classes define a suitable setting with the given name, `undefined` is returned.
         * 
         * ** Warning: ** Type, structure and behavior of the returned info objects is not documented and therefore not part of the API. See the {@link #constructor Notes about Info objects} in the constructor documentation of this class.
        */
        public getPropertyLikeSetting(sName: string): {};

        /**
            * Checks the existence of the given aggregation by its name.
        */
        public hasAggregation(sName: string): boolean;

        /**
            * Checks the existence of the given association by its name
        */
        public hasAssociation(sName: string): boolean;

        /**
            * Checks the existence of the given event by its name
        */
        public hasEvent(sName: string): boolean;

        /**
            * Checks the existence of the given property by its name
        */
        public hasProperty(sName: string): boolean;

        /**
            * Test whether a given ID looks like it was automatically generated.
         * 
         * Examples: `True for:
         *   "foo--__bar04--baz"
         *   "foo--__bar04"
         *   "__bar04--baz"
         *   "__bar04"
         *   "__bar04--"
         *   "__bar04--foo"
         * False for:
         *   "foo__bar04"
         *   "foo__bar04--baz"`
         * 
         * See {@link sap.ui.base.ManagedObjectMetadata.prototype.uid} for details on ID generation.
        */
        public static isGeneratedId(sId: string): boolean;

        /**
            * Load and returns the design time metadata asynchronously.
         * 
         * Be aware that ManagedObjects do not ensure to have unique IDs. This may lead to issues if you would like to persist DesignTime based information. In that case you need to take care of identification yourself.
        */
        private loadDesignTime(): any;

        /**
            * Calculates a new ID for an instance of this class.
         * 
         * Note that the calculated short name part is usually not unique across all classes, but doesn't have to be. It might even be empty when the class name consists of invalid characters only.
        */
        public uid(): string;

        /**
            * Calculates a new ID based on a prefix.
         * 
         * To guarantee uniqueness of the generated IDs across all ID prefixes, prefixes must not end with digits.
        */
        public static uid(sIdPrefix: string): string;

    }
}