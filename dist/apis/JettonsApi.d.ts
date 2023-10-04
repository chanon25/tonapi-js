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
import * as runtime from '../runtime';
import type { Event, JettonHolders, JettonInfo, Jettons } from '../models/index';
export interface GetJettonHoldersRequest {
    accountId: string;
    limit?: number;
    offset?: number;
}
export interface GetJettonInfoRequest {
    accountId: string;
}
export interface GetJettonsRequest {
    limit?: number;
    offset?: number;
}
export interface GetJettonsEventsRequest {
    eventId: string;
    acceptLanguage?: string;
}
/**
 * JettonsApi - interface
 *
 * @export
 * @interface JettonsApiInterface
 */
export interface JettonsApiInterface {
    /**
     * Get jetton\'s holders
     * @param {string} accountId account ID
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonsApiInterface
     */
    getJettonHoldersRaw(requestParameters: GetJettonHoldersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonHolders>>;
    /**
     * Get jetton\'s holders
     */
    getJettonHolders(requestParameters: GetJettonHoldersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonHolders>;
    /**
     * Get jetton metadata by jetton master address
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonsApiInterface
     */
    getJettonInfoRaw(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonInfo>>;
    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfo(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonInfo>;
    /**
     * Get a list of all indexed jetton masters in the blockchain.
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonsApiInterface
     */
    getJettonsRaw(requestParameters: GetJettonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Jettons>>;
    /**
     * Get a list of all indexed jetton masters in the blockchain.
     */
    getJettons(requestParameters: GetJettonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Jettons>;
    /**
     * Get only jetton transfers in the event
     * @param {string} eventId event ID or transaction hash in hex (without 0x) or base64url format
     * @param {string} [acceptLanguage]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonsApiInterface
     */
    getJettonsEventsRaw(requestParameters: GetJettonsEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>>;
    /**
     * Get only jetton transfers in the event
     */
    getJettonsEvents(requestParameters: GetJettonsEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event>;
}
/**
 *
 */
export declare class JettonsApi extends runtime.BaseAPI implements JettonsApiInterface {
    /**
     * Get jetton\'s holders
     */
    getJettonHoldersRaw(requestParameters: GetJettonHoldersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonHolders>>;
    /**
     * Get jetton\'s holders
     */
    getJettonHolders(requestParameters: GetJettonHoldersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonHolders>;
    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfoRaw(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonInfo>>;
    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfo(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonInfo>;
    /**
     * Get a list of all indexed jetton masters in the blockchain.
     */
    getJettonsRaw(requestParameters: GetJettonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Jettons>>;
    /**
     * Get a list of all indexed jetton masters in the blockchain.
     */
    getJettons(requestParameters?: GetJettonsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Jettons>;
    /**
     * Get only jetton transfers in the event
     */
    getJettonsEventsRaw(requestParameters: GetJettonsEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Event>>;
    /**
     * Get only jetton transfers in the event
     */
    getJettonsEvents(requestParameters: GetJettonsEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Event>;
}
