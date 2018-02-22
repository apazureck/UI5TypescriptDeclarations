declare module 'sap/ui/base/Object' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { Interface } from 'sap/ui/base/Interface';


    export interface IObjectSettings {
    }

    /**
    
    */
    export class Object {


        /**
            * Creates metadata for a given class and attaches it to the constructor and prototype of that class.
         * 
         * After creation, metadata can be retrieved with getMetadata().
         * 
         * The static info can at least contain the following entries:  <li>baseType: {string} fully qualified name of a base class or empty <li>publicMethods: {string} an array of method names that will be visible in the interface proxy returned by {@link #getInterface} 
        */
        public static defineClass(sClassName: string, oStaticInfo: { baseType: string, publicMethods: {}, }, FNMetaImpl?: (() => any)): Metadata;

        /**
            * Destructor method for objects
        */
        public destroy(): any;

        /**
            * Creates a subclass of class sap.ui.base.Object with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain three kinds of informations:  * `metadata:` an (optional) object literal with metadata about the class. The information in the object literal will be wrapped by an instance of {@link sap.ui.base.Metadata Metadata} and might contain the following information <ul> <li>`interfaces:` {string[]} (optional) set of names of implemented interfaces (defaults to no interfaces) * `publicMethods:` {string[]} (optional) list of methods that should be part of the public facade of the class * `abstract:` {boolean} (optional) flag that marks the class as abstract (purely informational, defaults to false) * `final:` {boolean} (optional) flag that marks the class as final (defaults to false)  Subclasses of sap.ui.base.Object can enrich the set of supported metadata (e.g. see {@link sap.ui.core.Element.extend}). </li>
         * 
         * <li>`constructor:` a function that serves as a constructor function for the new class. If no constructor function is given, the framework creates a default implementation that delegates all its arguments to the constructor function of the base class. </li>
         * 
         * <li>* any-other-name: * any other property in the `oClassInfo` is copied into the prototype object of the newly created class. Callers can thereby add methods or properties to all instances of the class. But be aware that the given values are shared between all instances of the class. Usually, it doesn't make sense to use primitive values here other than to declare public constants. </li>
         * 
         * </ul>
         * 
         * The prototype object of the newly created class uses the same prototype as instances of the base class (prototype chaining).
         * 
         * A metadata object is always created, even if there is no `metadata` entry in the `oClassInfo` object. A getter for the metadata is always attached to the prototype and to the class (constructor function) itself.
         * 
         * Last but not least, with the third argument `FNMetaImpl` the constructor of a metadata class can be specified. Instances of that class will be used to represent metadata for the newly created class and for any subclass created from it. Typically, only frameworks will use this parameter to enrich the metadata for a new class hierarchy they introduce (e.g. {@link sap.ui.core.Element.extend Element}).
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the public interface of the object.
        */
        public getInterface(): Interface | void | {};

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

    }
}