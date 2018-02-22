declare module 'sap/ui/model/odata/ODataMetaModel' {
    import { Context } from 'sap/ui/model/Context';
    import { Metadata } from 'sap/ui/base/Metadata';
    import { ODataMetadata } from 'sap/ui/model/odata/ODataMetadata';
    import { ODataAnnotations } from 'sap/ui/model/odata/ODataAnnotations';
    import { MetaModel, IMetaModelSettings } from 'sap/ui/model/MetaModel';

    export interface IODataMetaModelSettings extends IMetaModelSettings {
    }

    /**
    
    */
    export class ODataMetaModel extends MetaModel {

        /**
            * DO NOT CALL this private constructor for a new `ODataMetaModel`, but rather use {@link sap.ui.model.odata.ODataModel#getMetaModel getMetaModel} instead!
        */
        public constructor(oMetadata: ODataMetadata, oAnnotations: ODataAnnotations, oODataModelInterface: { addAnnotationUrl?: (() => any), annotationsLoadedPromise?: any, });


        /**
            * Creates a new subclass of class sap.ui.model.odata.ODataMetaModel with name `sClassName` and enriches it with the information contained in `oClassInfo`.
         * 
         * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.model.MetaModel.extend}.
        */
        public static extend(sClassName: string, oClassInfo?: {}, FNMetaImpl?: (() => any)): (() => any);

        /**
            * Returns the OData meta model context corresponding to the given OData model path.
        */
        public getMetaContext(sPath?: string): Context;

        /**
            * Returns a metadata object for class sap.ui.model.odata.ODataMetaModel.
        */
        public static getMetadata(): Metadata | any;

        /**
            * Returns the metadata for the class that this object belongs to.
         * 
         * This method is only defined when metadata has been declared by using {@link sap.ui.base.Object.defineClass} or {@link sap.ui.base.Object.extend}.
        */
        public getMetadata(): any;

        /**
            * Returns the OData association end corresponding to the given entity type's navigation property of given name.
        */
        public getODataAssociationEnd(oEntityType: {}, sName: string): {};

        /**
            * Returns the OData association * set * end corresponding to the given entity type's navigation property of given name.
        */
        public getODataAssociationSetEnd(oEntityType: {}, sName: string): {};

        /**
            * Returns the OData complex type with the given qualified name, either as a path or as an object, as indicated.
        */
        public getODataComplexType(sQualifiedName: string, bAsPath?: boolean): {} | string;

        /**
            * Returns the OData default entity container. If there is only a single schema with a single entity container, the entity container does not need to be marked as default explicitly.
        */
        public getODataEntityContainer(bAsPath?: boolean): {} | string;

        /**
            * Returns the OData entity set with the given simple name from the default entity container.
        */
        public getODataEntitySet(sName: string, bAsPath?: boolean): {} | string;

        /**
            * Returns the OData entity type with the given qualified name, either as a path or as an object, as indicated.
        */
        public getODataEntityType(sQualifiedName: string, bAsPath?: boolean): {} | string;

        /**
            * Returns the OData function import with the given simple or qualified name from the default entity container or the respective entity container specified in the qualified name.
        */
        public getODataFunctionImport(sName: string, bAsPath?: boolean): {} | string;

        /**
            * Returns the given OData type's property (not navigation property!) of given name.
         * 
         * If an array is given instead of a single name, it is consumed (via `Array.prototype.shift`) piece by piece. Each element is interpreted as a property name of the current type, and the current type is replaced by that property's type. This is repeated until an element is encountered which cannot be resolved as a property name of the current type anymore; in this case, the last property found is returned and `vName` contains only the remaining names, with `vName[0]` being the one which was not found.
         * 
         * Examples:  * Get address property of business partner: `var oEntityType = oMetaModel.getODataEntityType("GWSAMPLE_BASIC.BusinessPartner"),
         *     oAddressProperty = oMetaModel.getODataProperty(oEntityType, "Address");
         * oAddressProperty.name === "Address";
         * oAddressProperty.type === "GWSAMPLE_BASIC.CT_Address";` * Get street property of address type: `var oComplexType = oMetaModel.getODataComplexType("GWSAMPLE_BASIC.CT_Address"),
         *     oStreetProperty = oMetaModel.getODataProperty(oComplexType, "Street");
         * oStreetProperty.name === "Street";
         * oStreetProperty.type === "Edm.String";` * Get address' street property directly from business partner: `var aParts = ["Address", "Street"];
         * oMetaModel.getODataProperty(oEntityType, aParts) === oStreetProperty;
         * aParts.length === 0;` * Trying to get address' foo property directly from business partner: `aParts = ["Address", "foo"];
         * oMetaModel.getODataProperty(oEntityType, aParts) === oAddressProperty;
         * aParts.length === 1;
         * aParts[0] === "foo";` 
        */
        public getODataProperty(oType: {}, vName: string | {}, bAsPath?: boolean): {} | string;

        /**
            * Returns a `Promise` which is resolved with a map representing the `com.sap.vocabularies.Common.v1.ValueList` annotations of the given property or rejected with an error. The key in the map provided on successful resolution is the qualifier of the annotation or the empty string if no qualifier is defined. The value in the map is the JSON object for the annotation. The map is empty if the property has no `com.sap.vocabularies.Common.v1.ValueList` annotations.
        */
        public getODataValueLists(oPropertyContext: Context): any;

        /**
            * Returns a promise which is fulfilled once the meta model data is loaded and can be used.
        */
        public loaded(): any;

        /**
            * Refresh not supported by OData meta model!
        */
        public refresh(): any;

        /**
            * Legacy syntax not supported by OData meta model!
        */
        public setLegacySyntax(bLegacySyntax: boolean): any;

    }
}