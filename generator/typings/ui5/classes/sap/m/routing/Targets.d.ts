declare module 'sap/m/routing/Targets' {
    import { Metadata } from 'sap/ui/base/Metadata';
    import { TargetHandler } from 'sap/m/routing/TargetHandler';
    import { Targets as TargetsBase, ITargetsSettings as ITargetsBaseSettings } from 'sap/ui/core/routing/Targets';

    export interface ITargetsSettings extends ITargetsBaseSettings {
    }

    export class Targets extends TargetsBase {


        /**
            * Creates a new subclass of class sap.m.routing.Targets with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.routing.Targets.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns a metadata object for class sap.m.routing.Targets.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the TargetHandler instance.
        */
        public getTargetHandler(): TargetHandler;

    }
}