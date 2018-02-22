declare namespace jQuery.support {
    // Fields
    /**
    * Whether the current browser supports (named) CSS animations
    */
    export const cssAnimations: boolean;
    // Fields
    /**
    * Whether the current browser supports CSS gradients. Note that ANY support for CSS gradients leads to "true" here, no matter what the syntax is.
    */
    export const cssGradients: boolean;
    // Fields
    /**
    * Whether the current browser supports (2D) CSS transforms
    */
    export const cssTransforms: boolean;
    // Fields
    /**
    * Whether the current browser supports 3D CSS transforms
    */
    export const cssTransforms3d: boolean;
    // Fields
    /**
    * Whether the current browser supports CSS transitions
    */
    export const cssTransitions: boolean;
    // Fields
    /**
    * Whether the current browser supports the OLD CSS3 Flexible Box Layout directly or via vendor prefixes
    */
    export const flexBoxLayout: boolean;
    // Fields
    /**
    * Whether the current browser supports only prefixed flexible layout properties
    */
    export const flexBoxPrefixed: boolean;
    // Fields
    /**
    * Whether the current browser supports any kind of Flexible Box Layout directly or via vendor prefixes
    */
    export const hasFlexBoxSupport: boolean;
    // Fields
    /**
    * Whether the current browser supports the IE10 CSS3 Flexible Box Layout directly or via vendor prefixes
    */
    export const ie10FlexBoxLayout: boolean;
    // Fields
    /**
    * Whether the current browser supports the NEW CSS3 Flexible Box Layout directly or via vendor prefixes
    */
    export const newFlexBoxLayout: boolean;
}