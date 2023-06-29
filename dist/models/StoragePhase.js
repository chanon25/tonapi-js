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
exports.StoragePhaseToJSON = exports.StoragePhaseFromJSONTyped = exports.StoragePhaseFromJSON = exports.instanceOfStoragePhase = void 0;
const runtime_1 = require("../runtime");
const AccStatusChange_1 = require("./AccStatusChange");
/**
 * Check if a given object implements the StoragePhase interface.
 */
function instanceOfStoragePhase(value) {
    let isInstance = true;
    isInstance = isInstance && "feesCollected" in value;
    isInstance = isInstance && "statusChange" in value;
    return isInstance;
}
exports.instanceOfStoragePhase = instanceOfStoragePhase;
function StoragePhaseFromJSON(json) {
    return StoragePhaseFromJSONTyped(json, false);
}
exports.StoragePhaseFromJSON = StoragePhaseFromJSON;
function StoragePhaseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'feesCollected': json['fees_collected'],
        'feesDue': !(0, runtime_1.exists)(json, 'fees_due') ? undefined : json['fees_due'],
        'statusChange': (0, AccStatusChange_1.AccStatusChangeFromJSON)(json['status_change']),
    };
}
exports.StoragePhaseFromJSONTyped = StoragePhaseFromJSONTyped;
function StoragePhaseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fees_collected': value.feesCollected,
        'fees_due': value.feesDue,
        'status_change': (0, AccStatusChange_1.AccStatusChangeToJSON)(value.statusChange),
    };
}
exports.StoragePhaseToJSON = StoragePhaseToJSON;
