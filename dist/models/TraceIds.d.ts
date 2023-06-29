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
import type { TraceId } from './TraceId';
/**
 *
 * @export
 * @interface TraceIds
 */
export interface TraceIds {
    /**
     *
     * @type {Array<TraceId>}
     * @memberof TraceIds
     */
    traces: Array<TraceId>;
}
/**
 * Check if a given object implements the TraceIds interface.
 */
export declare function instanceOfTraceIds(value: object): boolean;
export declare function TraceIdsFromJSON(json: any): TraceIds;
export declare function TraceIdsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceIds;
export declare function TraceIdsToJSON(value?: TraceIds | null): any;
