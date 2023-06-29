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
exports.JettonMetadataToJSON = exports.JettonMetadataFromJSONTyped = exports.JettonMetadataFromJSON = exports.instanceOfJettonMetadata = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the JettonMetadata interface.
 */
function instanceOfJettonMetadata(value) {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "decimals" in value;
    return isInstance;
}
exports.instanceOfJettonMetadata = instanceOfJettonMetadata;
function JettonMetadataFromJSON(json) {
    return JettonMetadataFromJSONTyped(json, false);
}
exports.JettonMetadataFromJSON = JettonMetadataFromJSON;
function JettonMetadataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'address': json['address'],
        'name': json['name'],
        'symbol': json['symbol'],
        'decimals': json['decimals'],
        'image': !(0, runtime_1.exists)(json, 'image') ? undefined : json['image'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'social': !(0, runtime_1.exists)(json, 'social') ? undefined : json['social'],
        'websites': !(0, runtime_1.exists)(json, 'websites') ? undefined : json['websites'],
        'catalogs': !(0, runtime_1.exists)(json, 'catalogs') ? undefined : json['catalogs'],
    };
}
exports.JettonMetadataFromJSONTyped = JettonMetadataFromJSONTyped;
function JettonMetadataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'address': value.address,
        'name': value.name,
        'symbol': value.symbol,
        'decimals': value.decimals,
        'image': value.image,
        'description': value.description,
        'social': value.social,
        'websites': value.websites,
        'catalogs': value.catalogs,
    };
}
exports.JettonMetadataToJSON = JettonMetadataToJSON;
