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
 * @interface PoolImplementation
 */
export interface PoolImplementation {
    /**
     *
     * @type {string}
     * @memberof PoolImplementation
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof PoolImplementation
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof PoolImplementation
     */
    url: string;
}
/**
 * Check if a given object implements the PoolImplementation interface.
 */
export declare function instanceOfPoolImplementation(value: object): boolean;
export declare function PoolImplementationFromJSON(json: any): PoolImplementation;
export declare function PoolImplementationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PoolImplementation;
export declare function PoolImplementationToJSON(value?: PoolImplementation | null): any;
