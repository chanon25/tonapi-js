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
exports.AccountStatusToJSON = exports.AccountStatusFromJSONTyped = exports.AccountStatusFromJSON = exports.AccountStatus = void 0;
/**
 *
 * @export
 */
exports.AccountStatus = {
    Nonexist: 'nonexist',
    Uninit: 'uninit',
    Active: 'active',
    Frozen: 'frozen'
};
function AccountStatusFromJSON(json) {
    return AccountStatusFromJSONTyped(json, false);
}
exports.AccountStatusFromJSON = AccountStatusFromJSON;
function AccountStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.AccountStatusFromJSONTyped = AccountStatusFromJSONTyped;
function AccountStatusToJSON(value) {
    return value;
}
exports.AccountStatusToJSON = AccountStatusToJSON;
