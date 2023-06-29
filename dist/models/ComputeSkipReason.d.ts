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
 */
export declare const ComputeSkipReason: {
    readonly NoState: "cskip_no_state";
    readonly BadState: "cskip_bad_state";
    readonly NoGas: "cskip_no_gas";
};
export declare type ComputeSkipReason = typeof ComputeSkipReason[keyof typeof ComputeSkipReason];
export declare function ComputeSkipReasonFromJSON(json: any): ComputeSkipReason;
export declare function ComputeSkipReasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputeSkipReason;
export declare function ComputeSkipReasonToJSON(value?: ComputeSkipReason | null): any;
