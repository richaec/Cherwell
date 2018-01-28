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
    define(['ApiClient', 'model/ServiceInfoResponse', 'model/TokenResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ServiceInfoResponse'), require('../model/TokenResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CherwellRestApi) {
      root.CherwellRestApi = {};
    }
    root.CherwellRestApi.ServiceApi = factory(root.CherwellRestApi.ApiClient, root.CherwellRestApi.ServiceInfoResponse, root.CherwellRestApi.TokenResponse);
  }
}(this, function(ApiClient, ServiceInfoResponse, TokenResponse) {
  'use strict';

  /**
   * Service service.
   * @module api/ServiceApi
   * @version 9.2.0
   */

  /**
   * Constructs a new ServiceApi. 
   * @alias module:api/ServiceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the serviceGetServiceInfoV1 operation.
     * @callback module:api/ServiceApi~serviceGetServiceInfoV1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInfoResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information about the REST Api and CSM
     * Operation to get information about the REST API and CSM.  The response is latest REST API operation version, CSM version, and CSM system date and time.
     * @param {module:api/ServiceApi~serviceGetServiceInfoV1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInfoResponse}
     */
    this.serviceGetServiceInfoV1 = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ServiceInfoResponse;

      return this.apiClient.callApi(
        '/api/V1/serviceinfo', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the serviceLogoutUserV1 operation.
     * @callback module:api/ServiceApi~serviceLogoutUserV1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log out user by token
     * Operation that logs out the user referenced in the authentication token.
     * @param {module:api/ServiceApi~serviceLogoutUserV1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.serviceLogoutUserV1 = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/V1/logout', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the serviceToken operation.
     * @callback module:api/ServiceApi~serviceTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an access token
     * Operation to request an access token for one of the following authentication modes. Or, you can request an access token using a refresh token. An API client key is required in both cases, and the authentication mode you use must be the mode used by the CSM Browser Client. &lt;/br&gt;  Internal - Use a CSM username and password. If no other mode is specified, Internal mode is used.&lt;/br&gt;  Windows - Uses the server variable LOGON_USER to attempt to find a CSM user.  You can also use domain\\username and password.&lt;/br&gt;  LDAP - Uses the LDAP settings configured for CSM and the server variable LOGON_USER to attempt to find a CSM user. You can also use domain\\username and password.&lt;/br&gt;  SAML - Uses the SAML settings configured for CSM to validate credentials and find the CSM user.&lt;/br&gt;  Auto - Uses the enabled authentication types configured for CSM.
     * @param {String} grantType The type of grant being requested: password or refresh_token.
     * @param {String} clientId The API client key for the client making the token request.
     * @param {Object} opts Optional parameters
     * @param {String} opts.clientSecret The API client secret for the native client making the token request.  This is only required for native clients.
     * @param {String} opts.username Specify the login ID for the CSM user who will be granted the access token. 
     * @param {String} opts.password Specify the password assigned to the login ID.
     * @param {String} opts.refreshToken Specify the refresh token used to grant another access token.
     * @param {module:model/String} opts.authMode Specify the Authentication Mode to use for requesting an access token.
     * @param {String} opts.siteName If for portal specify the Site name to use for requesting an access token.
     * @param {module:api/ServiceApi~serviceTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TokenResponse}
     */
    this.serviceToken = function(grantType, clientId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'grantType' is set
      if (grantType === undefined || grantType === null) {
        throw new Error("Missing the required parameter 'grantType' when calling serviceToken");
      }

      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling serviceToken");
      }


      var pathParams = {
      };
      var queryParams = {
        'auth_mode': opts['authMode'],
        'site_name': opts['siteName'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'grant_type': grantType,
        'client_id': clientId,
        'client_secret': opts['clientSecret'],
        'username': opts['username'],
        'password': opts['password'],
        'refresh_token': opts['refreshToken']
      };

      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = TokenResponse;

      return this.apiClient.callApi(
        '/token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));