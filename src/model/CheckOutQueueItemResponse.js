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
    root.CherwellRestApi.CheckOutQueueItemResponse = factory(root.CherwellRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CheckOutQueueItemResponse model module.
   * @module model/CheckOutQueueItemResponse
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>CheckOutQueueItemResponse</code>.
   * @alias module:model/CheckOutQueueItemResponse
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>CheckOutQueueItemResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckOutQueueItemResponse} obj Optional instance to populate.
   * @return {module:model/CheckOutQueueItemResponse} The populated <code>CheckOutQueueItemResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('historyRecId')) {
        obj['historyRecId'] = ApiClient.convertToType(data['historyRecId'], 'String');
      }
      if (data.hasOwnProperty('historyText')) {
        obj['historyText'] = ApiClient.convertToType(data['historyText'], 'String');
      }
      if (data.hasOwnProperty('historyTypeId')) {
        obj['historyTypeId'] = ApiClient.convertToType(data['historyTypeId'], 'String');
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
   * @member {String} historyRecId
   */
  exports.prototype['historyRecId'] = undefined;
  /**
   * @member {String} historyText
   */
  exports.prototype['historyText'] = undefined;
  /**
   * @member {String} historyTypeId
   */
  exports.prototype['historyTypeId'] = undefined;
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

