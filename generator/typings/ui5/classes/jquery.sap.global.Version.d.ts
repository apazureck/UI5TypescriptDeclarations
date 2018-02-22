declare namespace jQuery.sap {

    /**
    
    */
    export class Version {

        /**
            * Returns a Version instance created from the given parameters.
         * 
         * This function can either be called as a constructor (using `new`) or as a normal function. It always returns an immutable Version instance.
         * 
         * The parts of the version number (major, minor, patch, suffix) can be provided in several ways:  * Version("1.2.3-SNAPSHOT") - as a dot-separated string. Any non-numerical char or a dot followed by a non-numerical char starts the suffix portion. Any missing major, minor or patch versions will be set to 0. * Version(1,2,3,"-SNAPSHOT") - as individual parameters. Major, minor and patch must be integer numbers or empty, suffix must be a string not starting with digits. * Version([1,2,3,"-SNAPSHOT"]) - as an array with the individual parts. The same type restrictions apply as before. * Version(otherVersion) - as a Version instance (cast operation). Returns the given instance instead of creating a new one. 
         * 
         * To keep the code size small, this implementation mainly validates the single string variant. All other variants are only validated to some degree. It is the responsibility of the caller to provide proper parts.
        */
        public constructor(vMajor: number | string | {} | jQuery.sap.Version, iMinor: number, iPatch: number, sSuffix: string);


        /**
            * Compares this version with a given one.
         * 
         * The version with which this version should be compared can be given as a `jQuery.sap.Version` instance, as a string (e.g. `v.compareto("1.4.5")`). Or major, minor, patch and suffix values can be given as separate parameters (e.g. `v.compareTo(1, 4, 5)`) or in an array (e.g. `v.compareTo([1, 4, 5])`).
        */
        public compareTo(): number;

        /**
            * Returns the major version part of this version.
        */
        public getMajor(): number;

        /**
            * Returns the minor version part of this version.
        */
        public getMinor(): number;

        /**
            * Returns the patch (or micro) version part of this version.
        */
        public getPatch(): number;

        /**
            * Returns the version suffix of this version.
        */
        public getSuffix(): string;

        /**
            * Checks whether this version is in the range of the given interval (start inclusive, end exclusive).
         * 
         * The boundaries against which this version should be checked can be given as `jQuery.sap.Version` instances (e.g. `v.inRange(v1, v2)`), as strings (e.g. `v.inRange("1.4", "2.7")`) or as arrays (e.g. `v.inRange([1,4], [2,7])`).
        */
        public inRange(vMin: string | {} | jQuery.sap.Version, vMax: string | {} | jQuery.sap.Version): boolean;

        /**
            * Returns a string representation of this version.
        */
        public toString(): string;

    }
}