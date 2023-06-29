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
 * @interface TonConnectProofRequestProofDomain
 */
export interface TonConnectProofRequestProofDomain {
    /**
     *
     * @type {number}
     * @memberof TonConnectProofRequestProofDomain
     */
    lengthBytes?: number;
    /**
     *
     * @type {string}
     * @memberof TonConnectProofRequestProofDomain
     */
    value: string;
}
/**
 * Check if a given object implements the TonConnectProofRequestProofDomain interface.
 */
export declare function instanceOfTonConnectProofRequestProofDomain(value: object): boolean;
export declare function TonConnectProofRequestProofDomainFromJSON(json: any): TonConnectProofRequestProofDomain;
export declare function TonConnectProofRequestProofDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonConnectProofRequestProofDomain;
export declare function TonConnectProofRequestProofDomainToJSON(value?: TonConnectProofRequestProofDomain | null): any;
