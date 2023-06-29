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
import type { AccStatusChange } from './AccStatusChange';
/**
 *
 * @export
 * @interface StoragePhase
 */
export interface StoragePhase {
    /**
     *
     * @type {number}
     * @memberof StoragePhase
     */
    feesCollected: number;
    /**
     *
     * @type {number}
     * @memberof StoragePhase
     */
    feesDue?: number;
    /**
     *
     * @type {AccStatusChange}
     * @memberof StoragePhase
     */
    statusChange: AccStatusChange;
}
/**
 * Check if a given object implements the StoragePhase interface.
 */
export declare function instanceOfStoragePhase(value: object): boolean;
export declare function StoragePhaseFromJSON(json: any): StoragePhase;
export declare function StoragePhaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoragePhase;
export declare function StoragePhaseToJSON(value?: StoragePhase | null): any;
