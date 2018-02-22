declare module 'sap/ui/base/Metadata' {


    export interface IMetadataSettings {
    }

    /**
    
    */
    export class Metadata {

        /**
            * Creates a new metadata object from the given static infos.
         * 
         * Note: throughout this class documentation, the described subclass of Object is referenced as * the described class *.
        */
        public constructor(sClassName: string, oClassInfo: {});


        /**
            * Returns an array with the names of all public methods declared by the described class and its ancestors.
        */
        public getAllPublicMethods(): {};

        /**
            * Returns the (constructor of the) described class
        */
        public getClass(): (() => any);

        /**
            * Returns the fully qualified name of the described class
        */
        public getName(): string;

        /**
            * Returns the metadata object of the base class of the described class or null if the class has no (documented) base class.
        */
        public getParent(): this;

        /**
            * Returns an array with the names of the public methods declared by the described class.
        */
        public getPublicMethods(): {};

        /**
            * Returns whether the described class is abstract
        */
        public isAbstract(): boolean;

        /**
            * Whether the described class is deprecated and should not be used any more
        */
        public isDeprecated(): boolean;

        /**
            * Returns whether the described class is final
        */
        public isFinal(): boolean;

        /**
            * Checks whether the described class or one of its ancestor classes implements the given interface.
        */
        public isInstanceOf(sInterface: string): boolean;

    }
}