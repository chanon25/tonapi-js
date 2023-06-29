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
exports.GetAccountInfoByStateInit200ResponseToJSON = exports.GetAccountInfoByStateInit200ResponseFromJSONTyped = exports.GetAccountInfoByStateInit200ResponseFromJSON = exports.instanceOfGetAccountInfoByStateInit200Response = void 0;
/**
 * Check if a given object implements the GetAccountInfoByStateInit200Response interface.
 */
function instanceOfGetAccountInfoByStateInit200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "publicKey" in value;
    isInstance = isInstance && "address" in value;
    return isInstance;
}
exports.instanceOfGetAccountInfoByStateInit200Response = instanceOfGetAccountInfoByStateInit200Response;
function GetAccountInfoByStateInit200ResponseFromJSON(json) {
    return GetAccountInfoByStateInit200ResponseFromJSONTyped(json, false);
}
exports.GetAccountInfoByStateInit200ResponseFromJSON = GetAccountInfoByStateInit200ResponseFromJSON;
function GetAccountInfoByStateInit200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'publicKey': json['public_key'],
        'address': json['address'],
    };
}
exports.GetAccountInfoByStateInit200ResponseFromJSONTyped = GetAccountInfoByStateInit200ResponseFromJSONTyped;
function GetAccountInfoByStateInit200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'public_key': value.publicKey,
        'address': value.address,
    };
}
exports.GetAccountInfoByStateInit200ResponseToJSON = GetAccountInfoByStateInit200ResponseToJSON;
