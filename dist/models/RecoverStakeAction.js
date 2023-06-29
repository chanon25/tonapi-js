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
exports.RecoverStakeActionToJSON = exports.RecoverStakeActionFromJSONTyped = exports.RecoverStakeActionFromJSON = exports.instanceOfRecoverStakeAction = void 0;
const AccountAddress_1 = require("./AccountAddress");
/**
 * Check if a given object implements the RecoverStakeAction interface.
 */
function instanceOfRecoverStakeAction(value) {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "staker" in value;
    return isInstance;
}
exports.instanceOfRecoverStakeAction = instanceOfRecoverStakeAction;
function RecoverStakeActionFromJSON(json) {
    return RecoverStakeActionFromJSONTyped(json, false);
}
exports.RecoverStakeActionFromJSON = RecoverStakeActionFromJSON;
function RecoverStakeActionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': json['amount'],
        'staker': (0, AccountAddress_1.AccountAddressFromJSON)(json['staker']),
    };
}
exports.RecoverStakeActionFromJSONTyped = RecoverStakeActionFromJSONTyped;
function RecoverStakeActionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'staker': (0, AccountAddress_1.AccountAddressToJSON)(value.staker),
    };
}
exports.RecoverStakeActionToJSON = RecoverStakeActionToJSON;
