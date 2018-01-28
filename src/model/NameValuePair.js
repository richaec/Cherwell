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
    define(['ApiClient', 'model/ModelObject'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelObject'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.NameValuePair = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.ModelObject);
  }
}(this, function(ApiClient, ModelObject) {
  'use strict';




  /**
   * The NameValuePair model module.
   * @module model/NameValuePair
   * @version 9.2.0
   */

  /**
   * Constructs a new <code>NameValuePair</code>.
   * @alias module:model/NameValuePair
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>NameValuePair</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NameValuePair} obj Optional instance to populate.
   * @return {module:model/NameValuePair} The populated <code>NameValuePair</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('valueObject')) {
        obj['valueObject'] = ModelObject.constructFromObject(data['valueObject']);
      }
      if (data.hasOwnProperty('valueString')) {
        obj['valueString'] = ApiClient.convertToType(data['valueString'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('displayShowsValue')) {
        obj['displayShowsValue'] = ApiClient.convertToType(data['displayShowsValue'], 'Boolean');
      }
      if (data.hasOwnProperty('specialUseFlag')) {
        obj['specialUseFlag'] = ApiClient.convertToType(data['specialUseFlag'], 'Boolean');
      }
      if (data.hasOwnProperty('displayString')) {
        obj['displayString'] = ApiClient.convertToType(data['displayString'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/ModelObject} valueObject
   */
  exports.prototype['valueObject'] = undefined;
  /**
   * @member {String} valueString
   */
  exports.prototype['valueString'] = undefined;
  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Boolean} displayShowsValue
   */
  exports.prototype['displayShowsValue'] = undefined;
  /**
   * @member {Boolean} specialUseFlag
   */
  exports.prototype['specialUseFlag'] = undefined;
  /**
   * @member {String} displayString
   */
  exports.prototype['displayString'] = undefined;



  return exports;
}));

