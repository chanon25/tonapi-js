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
import type { FoundAccountsAddressesInner } from './FoundAccountsAddressesInner';
/**
 *
 * @export
 * @interface FoundAccounts
 */
export interface FoundAccounts {
    /**
     *
     * @type {Array<FoundAccountsAddressesInner>}
     * @memberof FoundAccounts
     */
    addresses: Array<FoundAccountsAddressesInner>;
}
/**
 * Check if a given object implements the FoundAccounts interface.
 */
export declare function instanceOfFoundAccounts(value: object): boolean;
export declare function FoundAccountsFromJSON(json: any): FoundAccounts;
export declare function FoundAccountsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FoundAccounts;
export declare function FoundAccountsToJSON(value?: FoundAccounts | null): any;
