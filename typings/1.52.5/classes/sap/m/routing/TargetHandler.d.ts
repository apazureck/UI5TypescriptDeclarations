declare module 'sap/m/routing/TargetHandler' {
    import { Metadata } from 'sap/ui/base/Metadata';


    export interface ITargetHandlerSettings {
    }

    export class TargetHandler {


        /**
            * Creates a new subclass of class sap.m.routing.TargetHandler with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.Object.extend Object.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Gets if a navigation should close dialogs
        */
        public getCloseDialogs(): boolean;

        /**
            * Returns a metadata object for class sap.m.routing.TargetHandler.
        */
        public static getMetadata(): Metadata;

        /**
            * Sets if a navigation should close dialogs
        */
        public setCloseDialogs(bCloseDialogs: boolean): this;

    }
}