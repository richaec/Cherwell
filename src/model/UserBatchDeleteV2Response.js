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
    define(['ApiClient', 'model/UserDeleteV2Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserDeleteV2Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.UserBatchDeleteV2Response = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.UserDeleteV2Response);
  }
}(this, function(ApiClient, UserDeleteV2Response) {
  'use strict';




  /**
   * The UserBatchDeleteV2Response model module.
   * @module model/UserBatchDeleteV2Response
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>UserBatchDeleteV2Response</code>.
   * @alias module:model/UserBatchDeleteV2Response
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UserBatchDeleteV2Response</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserBatchDeleteV2Response} obj Optional instance to populate.
   * @return {module:model/UserBatchDeleteV2Response} The populated <code>UserBatchDeleteV2Response</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('responses')) {
        obj['responses'] = ApiClient.convertToType(data['responses'], [UserDeleteV2Response]);
      }
      if (data.hasOwnProperty('errorCode')) {
        obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
      }
      if (data.hasOwnProperty('errorMessage')) {
        obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
      }
      if (data.hasOwnProperty('hasError')) {
        obj['hasError'] = ApiClient.convertToType(data['hasError'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/UserDeleteV2Response>} responses
   */
  exports.prototype['responses'] = undefined;
  /**
   * @member {String} errorCode
   */
  exports.prototype['errorCode'] = undefined;
  /**
   * @member {String} errorMessage
   */
  exports.prototype['errorMessage'] = undefined;
  /**
   * @member {Boolean} hasError
   */
  exports.prototype['hasError'] = undefined;



  return exports;
}));

