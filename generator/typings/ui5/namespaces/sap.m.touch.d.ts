declare namespace sap.m.touch {
    // Methods
    /**
        * Given a list of touches, count the number of touches related with the given element.
        */
    export function countContained(oTouchList: any, vElement: any | any | string): number;/**
    * Given a list of touch objects, find the touch that matches the given one.
    */
    export function find(oTouchList: any, oTouch: any | number): {} | any;
}