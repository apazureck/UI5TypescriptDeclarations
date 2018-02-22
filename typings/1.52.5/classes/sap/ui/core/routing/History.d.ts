declare module 'sap/ui/core/routing/History' {


    export interface IHistorySettings {
    }

    export class History {


        /**
            * Determines what the navigation direction for a newly given hash would be It will say Unknown if there is a history foo - bar (current history) - foo If you now ask for the direction of the hash "foo" you get Unknown because it might be backwards or forwards. For hash replacements, the history stack will be replaced at this position for the history.
        */
        public getDirection(sNewHash?: string): sap.ui.core.routing.HistoryDirection;

        /**
            
        */
        public static getInstance(): History;

        /**
            * gets the previous hash in the history - if the last direction was Unknown or there was no navigation yet, undefined will be returned
        */
        public getPreviousHash(): string;

    }
}