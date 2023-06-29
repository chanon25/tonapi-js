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
exports.StakingPoolInfo200ResponseToJSON = exports.StakingPoolInfo200ResponseFromJSONTyped = exports.StakingPoolInfo200ResponseFromJSON = exports.instanceOfStakingPoolInfo200Response = void 0;
const PoolImplementation_1 = require("./PoolImplementation");
const PoolInfo_1 = require("./PoolInfo");
/**
 * Check if a given object implements the StakingPoolInfo200Response interface.
 */
function instanceOfStakingPoolInfo200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "implementation" in value;
    isInstance = isInstance && "pool" in value;
    return isInstance;
}
exports.instanceOfStakingPoolInfo200Response = instanceOfStakingPoolInfo200Response;
function StakingPoolInfo200ResponseFromJSON(json) {
    return StakingPoolInfo200ResponseFromJSONTyped(json, false);
}
exports.StakingPoolInfo200ResponseFromJSON = StakingPoolInfo200ResponseFromJSON;
function StakingPoolInfo200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'implementation': (0, PoolImplementation_1.PoolImplementationFromJSON)(json['implementation']),
        'pool': (0, PoolInfo_1.PoolInfoFromJSON)(json['pool']),
    };
}
exports.StakingPoolInfo200ResponseFromJSONTyped = StakingPoolInfo200ResponseFromJSONTyped;
function StakingPoolInfo200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'implementation': (0, PoolImplementation_1.PoolImplementationToJSON)(value.implementation),
        'pool': (0, PoolInfo_1.PoolInfoToJSON)(value.pool),
    };
}
exports.StakingPoolInfo200ResponseToJSON = StakingPoolInfo200ResponseToJSON;
