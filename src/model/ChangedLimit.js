/**
 * Cherwell Rest API
 * <a href=\"../../index.html\">Cherwell Rest API Documentation</a><br>Select version options from the header drop-down list (to the left of the Client Key box). Then, click Explore to view different versions of operations.
 *
 * OpenAPI spec version: 9.2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.ChangedLimit = factory(root.CherwellRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChangedLimit model module.
   * @module model/ChangedLimit
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>ChangedLimit</code>.
   * @alias module:model/ChangedLimit
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ChangedLimit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangedLimit} obj Optional instance to populate.
   * @return {module:model/ChangedLimit} The populated <code>ChangedLimit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('units')) {
        obj['units'] = ApiClient.convertToType(data['units'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * @member {String} units
   */
  exports.prototype['units'] = undefined;
  /**
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));

