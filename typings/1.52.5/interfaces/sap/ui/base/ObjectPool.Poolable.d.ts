declare namespace sap.ui.base {

    /**
    
    */
    export interface Poolable {


        /**
            * Called by the object pool when this instance will be actived for a caller. The same method will be called after a new instance has been created by an otherwise exhausted pool.
         * 
         * If the caller provided any arguments to {@link sap.ui.base.ObjectPool#borrowObject} all arguments will be propagated to this method.
        */
        init(): any;

        /**
            * Called by the object pool when an instance is returned to the pool. While no specific implementation is required, poolable objects in general should clean all caller specific state (set to null) in this method to avoid memory leaks and to enforce garbage collection of the caller state.
        */
        reset(): any;

    }
}