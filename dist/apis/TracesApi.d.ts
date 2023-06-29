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
import type { Trace } from '../models/index';
export interface GetTraceRequest {
    traceId: string;
}
/**
 * TracesApi - interface
 *
 * @export
 * @interface TracesApiInterface
 */
export interface TracesApiInterface {
    /**
     * Get the trace by trace ID or hash of any transaction in trace
     * @param {string} traceId trace ID or transaction hash in hex (without 0x) or base64url format
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TracesApiInterface
     */
    getTraceRaw(requestParameters: GetTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Trace>>;
    /**
     * Get the trace by trace ID or hash of any transaction in trace
     */
    getTrace(requestParameters: GetTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Trace>;
}
/**
 *
 */
export declare class TracesApi extends runtime.BaseAPI implements TracesApiInterface {
    /**
     * Get the trace by trace ID or hash of any transaction in trace
     */
    getTraceRaw(requestParameters: GetTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Trace>>;
    /**
     * Get the trace by trace ID or hash of any transaction in trace
     */
    getTrace(requestParameters: GetTraceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Trace>;
}
