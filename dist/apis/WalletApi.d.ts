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
import type { GetWalletBackup200Response, TonConnectProof200Response, TonConnectProofRequest } from '../models/index';
export interface GetWalletBackupRequest {
    xTonConnectAuth: string;
}
export interface SetWalletBackupRequest {
    xTonConnectAuth: string;
    body: Blob;
}
export interface TonConnectProofOperationRequest {
    tonConnectProofRequest: TonConnectProofRequest;
}
/**
 * WalletApi - interface
 *
 * @export
 * @interface WalletApiInterface
 */
export interface WalletApiInterface {
    /**
     * Get backup info
     * @param {string} xTonConnectAuth
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletApiInterface
     */
    getWalletBackupRaw(requestParameters: GetWalletBackupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetWalletBackup200Response>>;
    /**
     * Get backup info
     */
    getWalletBackup(requestParameters: GetWalletBackupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetWalletBackup200Response>;
    /**
     * Set backup info
     * @param {string} xTonConnectAuth
     * @param {Blob} body Information for saving backup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletApiInterface
     */
    setWalletBackupRaw(requestParameters: SetWalletBackupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Set backup info
     */
    setWalletBackup(requestParameters: SetWalletBackupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Account verification and token issuance
     * @param {TonConnectProofRequest} tonConnectProofRequest Data that is expected from TON Connect
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WalletApiInterface
     */
    tonConnectProofRaw(requestParameters: TonConnectProofOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TonConnectProof200Response>>;
    /**
     * Account verification and token issuance
     */
    tonConnectProof(requestParameters: TonConnectProofOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TonConnectProof200Response>;
}
/**
 *
 */
export declare class WalletApi extends runtime.BaseAPI implements WalletApiInterface {
    /**
     * Get backup info
     */
    getWalletBackupRaw(requestParameters: GetWalletBackupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetWalletBackup200Response>>;
    /**
     * Get backup info
     */
    getWalletBackup(requestParameters: GetWalletBackupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetWalletBackup200Response>;
    /**
     * Set backup info
     */
    setWalletBackupRaw(requestParameters: SetWalletBackupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Set backup info
     */
    setWalletBackup(requestParameters: SetWalletBackupRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Account verification and token issuance
     */
    tonConnectProofRaw(requestParameters: TonConnectProofOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TonConnectProof200Response>>;
    /**
     * Account verification and token issuance
     */
    tonConnectProof(requestParameters: TonConnectProofOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TonConnectProof200Response>;
}
