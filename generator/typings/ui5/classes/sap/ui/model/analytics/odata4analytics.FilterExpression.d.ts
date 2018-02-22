declare module 'sap/ui/model/analytics/odata4analytics' {
    import { EntityType } from 'sap/ui/model/analytics/odata4analytics';


    export interface IFilterExpressionSettings {
    }

    /**
    
    */
    export class FilterExpression {

        /**
            * Create a representation of a filter expression for a given entity type. It can be rendered as value for the $filter system query option.
        */
        public constructor(oModel: {}, oSchema: {}, oEntityType: EntityType);


        /**
            * Add a condition to the filter expression.
         * 
         * Multiple conditions on the same property are combined with a logical OR first, and in a second step conditions for different properties are combined with a logical AND.
        */
        public addCondition(sPropertyName: string, sOperator: sap.ui.model.FilterOperator, oValue: {}, oValue2: {}): this;

        /**
            * Add a set condition to the filter expression.
         * 
         * A set condition tests if the value of a property is included in a set of given values. It is a convenience method for this particular use case eliminating the need for multiple API calls.
        */
        public addSetCondition(sPropertyName: string, aValues: any[]): this;

        /**
            * Add an array of UI5 filter conditions to the filter expression.
         * 
         * The UI5 filter condition is combined with the other given conditions using a logical AND. This method is particularly useful for passing forward already created UI5 filter arrays.
        */
        public addUI5FilterConditions(aUI5Filter: {}): this;

        /**
            * Check if request is compliant with basic filter constraints expressed in metadata:
         * 
         * (a) all properties required in the filter expression have been referenced (b) the single-value filter restrictions have been obeyed
        */
        public checkValidity(): boolean;

        /**
            * Clear expression from any conditions that may have been set previously
        */
        public clear(): any;

        /**
            * Get description for this entity type
        */
        public getEntityType(): EntityType;

        /**
            * Get an array of SAPUI5 Filter objects corresponding to this expression.
        */
        public getExpressionAsUI5FilterArray(): {};

        /**
            * Get the value for the OData system query option $filter corresponding to this expression.
        */
        public getURIFilterOptionValue(): string;

        /**
            * Remove all conditions for some property from the filter expression.
         * 
         * All previously set conditions for some property are removed from the filter expression.
        */
        public removeConditions(sPropertyName: string): this;

    }
}