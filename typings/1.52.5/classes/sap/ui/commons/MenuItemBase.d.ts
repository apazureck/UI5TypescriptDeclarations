declare module 'sap/ui/commons/MenuItemBase' {
    import { MenuItemBase as MenuItemBaseBase, IMenuItemBaseSettings as IMenuItemBaseBaseSettings } from 'sap/ui/unified/MenuItemBase';

    export interface IMenuItemBaseSettings extends IMenuItemBaseBaseSettings {
    }

    /**
    
    */
    export class MenuItemBase extends MenuItemBaseBase {

        /**
            * Abstract base class `MenuItemBase` for menu item elements. Please use concrete subclasses.
        */
        public constructor(sId: string, mSettings: IMenuItemBaseSettings);


    }
}