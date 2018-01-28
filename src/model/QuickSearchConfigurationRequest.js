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
    root.CherwellRestApi.QuickSearchConfigurationRequest = factory(root.CherwellRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The QuickSearchConfigurationRequest model module.
   * @module model/QuickSearchConfigurationRequest
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>QuickSearchConfigurationRequest</code>.
   * @alias module:model/QuickSearchConfigurationRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>QuickSearchConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuickSearchConfigurationRequest} obj Optional instance to populate.
   * @return {module:model/QuickSearchConfigurationRequest} The populated <code>QuickSearchConfigurationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('busObIds')) {
        obj['busObIds'] = ApiClient.convertToType(data['busObIds'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} busObIds
   */
  exports.prototype['busObIds'] = undefined;



  return exports;
}));

