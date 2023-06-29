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
import type { JettonVerificationType } from './JettonVerificationType';
/**
 *
 * @export
 * @interface JettonPreview
 */
export interface JettonPreview {
    /**
     *
     * @type {string}
     * @memberof JettonPreview
     */
    address: string;
    /**
     *
     * @type {string}
     * @memberof JettonPreview
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof JettonPreview
     */
    symbol: string;
    /**
     *
     * @type {number}
     * @memberof JettonPreview
     */
    decimals: number;
    /**
     *
     * @type {string}
     * @memberof JettonPreview
     */
    image: string;
    /**
     *
     * @type {JettonVerificationType}
     * @memberof JettonPreview
     */
    verification: JettonVerificationType;
}
/**
 * Check if a given object implements the JettonPreview interface.
 */
export declare function instanceOfJettonPreview(value: object): boolean;
export declare function JettonPreviewFromJSON(json: any): JettonPreview;
export declare function JettonPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): JettonPreview;
export declare function JettonPreviewToJSON(value?: JettonPreview | null): any;
