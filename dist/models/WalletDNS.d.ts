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
 * @interface WalletDNS
 */
export interface WalletDNS {
    /**
     *
     * @type {string}
     * @memberof WalletDNS
     */
    address: string;
    /**
     *
     * @type {boolean}
     * @memberof WalletDNS
     */
    isWallet: boolean;
    /**
     *
     * @type {boolean}
     * @memberof WalletDNS
     */
    hasMethodPubkey: boolean;
    /**
     *
     * @type {boolean}
     * @memberof WalletDNS
     */
    hasMethodSeqno: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof WalletDNS
     */
    names: Array<string>;
}
/**
 * Check if a given object implements the WalletDNS interface.
 */
export declare function instanceOfWalletDNS(value: object): boolean;
export declare function WalletDNSFromJSON(json: any): WalletDNS;
export declare function WalletDNSFromJSONTyped(json: any, ignoreDiscriminator: boolean): WalletDNS;
export declare function WalletDNSToJSON(value?: WalletDNS | null): any;
