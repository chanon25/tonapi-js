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
import type { AccountAddress } from './AccountAddress';
/**
 *
 * @export
 * @interface DepositStakeAction
 */
export interface DepositStakeAction {
    /**
     *
     * @type {number}
     * @memberof DepositStakeAction
     */
    amount: number;
    /**
     *
     * @type {AccountAddress}
     * @memberof DepositStakeAction
     */
    staker: AccountAddress;
}
/**
 * Check if a given object implements the DepositStakeAction interface.
 */
export declare function instanceOfDepositStakeAction(value: object): boolean;
export declare function DepositStakeActionFromJSON(json: any): DepositStakeAction;
export declare function DepositStakeActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositStakeAction;
export declare function DepositStakeActionToJSON(value?: DepositStakeAction | null): any;
