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
exports.GetRates200ResponseToJSON = exports.GetRates200ResponseFromJSONTyped = exports.GetRates200ResponseFromJSON = exports.instanceOfGetRates200Response = void 0;
/**
 * Check if a given object implements the GetRates200Response interface.
 */
function instanceOfGetRates200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "rates" in value;
    return isInstance;
}
exports.instanceOfGetRates200Response = instanceOfGetRates200Response;
function GetRates200ResponseFromJSON(json) {
    return GetRates200ResponseFromJSONTyped(json, false);
}
exports.GetRates200ResponseFromJSON = GetRates200ResponseFromJSON;
function GetRates200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'rates': json['rates'],
    };
}
exports.GetRates200ResponseFromJSONTyped = GetRates200ResponseFromJSONTyped;
function GetRates200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'rates': value.rates,
    };
}
exports.GetRates200ResponseToJSON = GetRates200ResponseToJSON;
