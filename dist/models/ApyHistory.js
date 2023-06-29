"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApyHistoryToJSON = exports.ApyHistoryFromJSONTyped = exports.ApyHistoryFromJSON = exports.instanceOfApyHistory = void 0;
/**
 * Check if a given object implements the ApyHistory interface.
 */
function instanceOfApyHistory(value) {
    let isInstance = true;
    isInstance = isInstance && "apy" in value;
    isInstance = isInstance && "time" in value;
    return isInstance;
}
exports.instanceOfApyHistory = instanceOfApyHistory;
function ApyHistoryFromJSON(json) {
    return ApyHistoryFromJSONTyped(json, false);
}
exports.ApyHistoryFromJSON = ApyHistoryFromJSON;
function ApyHistoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'apy': json['apy'],
        'time': json['time'],
    };
}
exports.ApyHistoryFromJSONTyped = ApyHistoryFromJSONTyped;
function ApyHistoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'apy': value.apy,
        'time': value.time,
    };
}
exports.ApyHistoryToJSON = ApyHistoryToJSON;
