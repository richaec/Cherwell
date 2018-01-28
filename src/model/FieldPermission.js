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
    root.CherwellRestApi.FieldPermission = factory(root.CherwellRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FieldPermission model module.
   * @module model/FieldPermission
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>FieldPermission</code>.
   * @alias module:model/FieldPermission
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>FieldPermission</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FieldPermission} obj Optional instance to populate.
   * @return {module:model/FieldPermission} The populated <code>FieldPermission</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('departmentMemberEdit')) {
        obj['departmentMemberEdit'] = ApiClient.convertToType(data['departmentMemberEdit'], 'Boolean');
      }
      if (data.hasOwnProperty('departmentMemberView')) {
        obj['departmentMemberView'] = ApiClient.convertToType(data['departmentMemberView'], 'Boolean');
      }
      if (data.hasOwnProperty('edit')) {
        obj['edit'] = ApiClient.convertToType(data['edit'], 'Boolean');
      }
      if (data.hasOwnProperty('fieldId')) {
        obj['fieldId'] = ApiClient.convertToType(data['fieldId'], 'String');
      }
      if (data.hasOwnProperty('fieldName')) {
        obj['fieldName'] = ApiClient.convertToType(data['fieldName'], 'String');
      }
      if (data.hasOwnProperty('managerOfOwnerEdit')) {
        obj['managerOfOwnerEdit'] = ApiClient.convertToType(data['managerOfOwnerEdit'], 'Boolean');
      }
      if (data.hasOwnProperty('managerOfOwnerView')) {
        obj['managerOfOwnerView'] = ApiClient.convertToType(data['managerOfOwnerView'], 'Boolean');
      }
      if (data.hasOwnProperty('ownerEdit')) {
        obj['ownerEdit'] = ApiClient.convertToType(data['ownerEdit'], 'Boolean');
      }
      if (data.hasOwnProperty('ownerView')) {
        obj['ownerView'] = ApiClient.convertToType(data['ownerView'], 'Boolean');
      }
      if (data.hasOwnProperty('teamEdit')) {
        obj['teamEdit'] = ApiClient.convertToType(data['teamEdit'], 'Boolean');
      }
      if (data.hasOwnProperty('teamManagerOfOwnerEdit')) {
        obj['teamManagerOfOwnerEdit'] = ApiClient.convertToType(data['teamManagerOfOwnerEdit'], 'Boolean');
      }
      if (data.hasOwnProperty('teamManagerOfOwnerView')) {
        obj['teamManagerOfOwnerView'] = ApiClient.convertToType(data['teamManagerOfOwnerView'], 'Boolean');
      }
      if (data.hasOwnProperty('teamView')) {
        obj['teamView'] = ApiClient.convertToType(data['teamView'], 'Boolean');
      }
      if (data.hasOwnProperty('view')) {
        obj['view'] = ApiClient.convertToType(data['view'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} departmentMemberEdit
   */
  exports.prototype['departmentMemberEdit'] = undefined;
  /**
   * @member {Boolean} departmentMemberView
   */
  exports.prototype['departmentMemberView'] = undefined;
  /**
   * @member {Boolean} edit
   */
  exports.prototype['edit'] = undefined;
  /**
   * @member {String} fieldId
   */
  exports.prototype['fieldId'] = undefined;
  /**
   * @member {String} fieldName
   */
  exports.prototype['fieldName'] = undefined;
  /**
   * @member {Boolean} managerOfOwnerEdit
   */
  exports.prototype['managerOfOwnerEdit'] = undefined;
  /**
   * @member {Boolean} managerOfOwnerView
   */
  exports.prototype['managerOfOwnerView'] = undefined;
  /**
   * @member {Boolean} ownerEdit
   */
  exports.prototype['ownerEdit'] = undefined;
  /**
   * @member {Boolean} ownerView
   */
  exports.prototype['ownerView'] = undefined;
  /**
   * @member {Boolean} teamEdit
   */
  exports.prototype['teamEdit'] = undefined;
  /**
   * @member {Boolean} teamManagerOfOwnerEdit
   */
  exports.prototype['teamManagerOfOwnerEdit'] = undefined;
  /**
   * @member {Boolean} teamManagerOfOwnerView
   */
  exports.prototype['teamManagerOfOwnerView'] = undefined;
  /**
   * @member {Boolean} teamView
   */
  exports.prototype['teamView'] = undefined;
  /**
   * @member {Boolean} view
   */
  exports.prototype['view'] = undefined;



  return exports;
}));

