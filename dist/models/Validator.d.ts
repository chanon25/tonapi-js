/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface Validator
 */
export interface Validator {
    /**
     *
     * @type {string}
     * @memberof Validator
     */
    address: string;
}
/**
 * Check if a given object implements the Validator interface.
 */
export declare function instanceOfValidator(value: object): boolean;
export declare function ValidatorFromJSON(json: any): Validator;
export declare function ValidatorFromJSONTyped(json: any, ignoreDiscriminator: boolean): Validator;
export declare function ValidatorToJSON(value?: Validator | null): any;
