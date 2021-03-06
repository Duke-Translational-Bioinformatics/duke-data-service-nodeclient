/**
 * Duke Data Service API.
 * REST API to the Duke Data Service. Some requests require Authentication.
 *
 * OpenAPI spec version: 0.0.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
    if (!root.DukeDataServiceApi) {
      root.DukeDataServiceApi = {};
    }
    root.DukeDataServiceApi.SystemApi = factory(root.DukeDataServiceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * System service.
   * @module api/SystemApi
   * @version 0.0.2
   */

  /**
   * Constructs a new SystemApi. 
   * @alias module:api/SystemApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteApiV1SystemPermissionsUserId operation.
     * @callback module:api/SystemApi~deleteApiV1SystemPermissionsUserIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke system permissions to user
     * Revoke system permissions to user  Deletes system permissions for a given user
     * @param {Integer} userId 
     * @param {module:api/SystemApi~deleteApiV1SystemPermissionsUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteApiV1SystemPermissionsUserId = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteApiV1SystemPermissionsUserId";
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/system/permissions/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiV1SystemPermissions operation.
     * @callback module:api/SystemApi~getApiV1SystemPermissionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List system permissions
     * List system permissions  Returns a list of users with their associated auth_roles
     * @param {module:api/SystemApi~getApiV1SystemPermissionsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getApiV1SystemPermissions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/system/permissions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiV1SystemPermissionsUserId operation.
     * @callback module:api/SystemApi~getApiV1SystemPermissionsUserIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View system level permissions for user
     * View system level permissions for user  Returns the system permissions for a given user
     * @param {Integer} userId 
     * @param {module:api/SystemApi~getApiV1SystemPermissionsUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getApiV1SystemPermissionsUserId = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getApiV1SystemPermissionsUserId";
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/system/permissions/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putApiV1SystemPermissionsUserId operation.
     * @callback module:api/SystemApi~putApiV1SystemPermissionsUserIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Grant system level permission to user
     * Grant system level permission to user  Creates or updates system permission for a given user
     * @param {String} authRoleId 
     * @param {Integer} userId 
     * @param {module:api/SystemApi~putApiV1SystemPermissionsUserIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putApiV1SystemPermissionsUserId = function(authRoleId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'authRoleId' is set
      if (authRoleId == undefined || authRoleId == null) {
        throw "Missing the required parameter 'authRoleId' when calling putApiV1SystemPermissionsUserId";
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling putApiV1SystemPermissionsUserId";
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'auth_role[id]': authRoleId
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/system/permissions/{user_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
