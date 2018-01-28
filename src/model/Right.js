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
    root.CherwellRestApi.Right = factory(root.CherwellRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Right model module.
   * @module model/Right
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>Right</code>.
   * @alias module:model/Right
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>Right</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Right} obj Optional instance to populate.
   * @return {module:model/Right} The populated <code>Right</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('add')) {
        obj['add'] = ApiClient.convertToType(data['add'], 'Boolean');
      }
      if (data.hasOwnProperty('allow')) {
        obj['allow'] = ApiClient.convertToType(data['allow'], 'Boolean');
      }
      if (data.hasOwnProperty('categoryDescription')) {
        obj['categoryDescription'] = ApiClient.convertToType(data['categoryDescription'], 'String');
      }
      if (data.hasOwnProperty('categoryId')) {
        obj['categoryId'] = ApiClient.convertToType(data['categoryId'], 'String');
      }
      if (data.hasOwnProperty('categoryName')) {
        obj['categoryName'] = ApiClient.convertToType(data['categoryName'], 'String');
      }
      if (data.hasOwnProperty('delete')) {
        obj['delete'] = ApiClient.convertToType(data['delete'], 'Boolean');
      }
      if (data.hasOwnProperty('edit')) {
        obj['edit'] = ApiClient.convertToType(data['edit'], 'Boolean');
      }
      if (data.hasOwnProperty('isYesNoRight')) {
        obj['isYesNoRight'] = ApiClient.convertToType(data['isYesNoRight'], 'Boolean');
      }
      if (data.hasOwnProperty('nonScopeOwnerAdd')) {
        obj['nonScopeOwnerAdd'] = ApiClient.convertToType(data['nonScopeOwnerAdd'], 'Boolean');
      }
      if (data.hasOwnProperty('nonScopeOwnerDelete')) {
        obj['nonScopeOwnerDelete'] = ApiClient.convertToType(data['nonScopeOwnerDelete'], 'Boolean');
      }
      if (data.hasOwnProperty('nonScopeOwnerEdit')) {
        obj['nonScopeOwnerEdit'] = ApiClient.convertToType(data['nonScopeOwnerEdit'], 'Boolean');
      }
      if (data.hasOwnProperty('nonScopeOwnerView')) {
        obj['nonScopeOwnerView'] = ApiClient.convertToType(data['nonScopeOwnerView'], 'Boolean');
      }
      if (data.hasOwnProperty('rightId')) {
        obj['rightId'] = ApiClient.convertToType(data['rightId'], 'String');
      }
      if (data.hasOwnProperty('rightName')) {
        obj['rightName'] = ApiClient.convertToType(data['rightName'], 'String');
      }
      if (data.hasOwnProperty('standardRightName')) {
        obj['standardRightName'] = ApiClient.convertToType(data['standardRightName'], 'String');
      }
      if (data.hasOwnProperty('viewRunOpen')) {
        obj['viewRunOpen'] = ApiClient.convertToType(data['viewRunOpen'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} add
   */
  exports.prototype['add'] = undefined;
  /**
   * @member {Boolean} allow
   */
  exports.prototype['allow'] = undefined;
  /**
   * @member {String} categoryDescription
   */
  exports.prototype['categoryDescription'] = undefined;
  /**
   * @member {String} categoryId
   */
  exports.prototype['categoryId'] = undefined;
  /**
   * @member {String} categoryName
   */
  exports.prototype['categoryName'] = undefined;
  /**
   * @member {Boolean} delete
   */
  exports.prototype['delete'] = undefined;
  /**
   * @member {Boolean} edit
   */
  exports.prototype['edit'] = undefined;
  /**
   * @member {Boolean} isYesNoRight
   */
  exports.prototype['isYesNoRight'] = undefined;
  /**
   * @member {Boolean} nonScopeOwnerAdd
   */
  exports.prototype['nonScopeOwnerAdd'] = undefined;
  /**
   * @member {Boolean} nonScopeOwnerDelete
   */
  exports.prototype['nonScopeOwnerDelete'] = undefined;
  /**
   * @member {Boolean} nonScopeOwnerEdit
   */
  exports.prototype['nonScopeOwnerEdit'] = undefined;
  /**
   * @member {Boolean} nonScopeOwnerView
   */
  exports.prototype['nonScopeOwnerView'] = undefined;
  /**
   * @member {String} rightId
   */
  exports.prototype['rightId'] = undefined;
  /**
   * @member {String} rightName
   */
  exports.prototype['rightName'] = undefined;
  /**
   * @member {String} standardRightName
   */
  exports.prototype['standardRightName'] = undefined;
  /**
   * @member {Boolean} viewRunOpen
   */
  exports.prototype['viewRunOpen'] = undefined;



  return exports;
}));

