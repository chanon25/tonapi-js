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
import type { TonConnectProofRequestProof } from './TonConnectProofRequestProof';
/**
 *
 * @export
 * @interface TonConnectProofRequest
 */
export interface TonConnectProofRequest {
    /**
     *
     * @type {string}
     * @memberof TonConnectProofRequest
     */
    address: string;
    /**
     *
     * @type {TonConnectProofRequestProof}
     * @memberof TonConnectProofRequest
     */
    proof: TonConnectProofRequestProof;
}
/**
 * Check if a given object implements the TonConnectProofRequest interface.
 */
export declare function instanceOfTonConnectProofRequest(value: object): boolean;
export declare function TonConnectProofRequestFromJSON(json: any): TonConnectProofRequest;
export declare function TonConnectProofRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TonConnectProofRequest;
export declare function TonConnectProofRequestToJSON(value?: TonConnectProofRequest | null): any;
