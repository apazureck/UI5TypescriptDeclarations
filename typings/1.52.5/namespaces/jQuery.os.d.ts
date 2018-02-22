declare namespace jQuery.os {
    // Fields
    /**
    * Whether the current operating system is Android
    */
    export const android: boolean;
    // Fields
    /**
    * Whether the current operating system is BlackBerry
    */
    export const blackberry: boolean;
    // Fields
    /**
    * The version of the operating system parsed as a float (major and first minor version)
    */
    export const fVersion: number;
    // Fields
    /**
    * Whether the current operating system is Apple iOS
    */
    export const ios: boolean;
    // Fields
    /**
    * The name of the operating system; currently supported are: "ios", "android", "blackberry"
    */
    export const os: string;
    // Fields
    /**
    * The version of the operating system as a string (including minor versions)
    */
    export const version: string;
    // Fields
    /**
    * Whether the current operating system is Windows Phone
    */
    export const winphone: boolean;
}