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
    root.DukeDataServiceApi.CurrentuserApi = factory(root.DukeDataServiceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Currentuser service.
   * @module api/CurrentuserApi
   * @version 0.0.2
   */

  /**
   * Constructs a new CurrentuserApi. 
   * @alias module:api/CurrentuserApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteApiV1CurrentUserApiKey operation.
     * @callback module:api/CurrentuserApi~deleteApiV1CurrentUserApiKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Current User API key
     * Delete a Current User API key  Delete a Current User API key
     * @param {module:api/CurrentuserApi~deleteApiV1CurrentUserApiKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteApiV1CurrentUserApiKey = function(callback) {
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
        '/api/v1/current_user/api_key', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiV1CurrentUser operation.
     * @callback module:api/CurrentuserApi~getApiV1CurrentUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * current_user
     * current_user  allows a user to get their User object with a valid api_token
     * @param {module:api/CurrentuserApi~getApiV1CurrentUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getApiV1CurrentUser = function(callback) {
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
        '/api/v1/current_user', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiV1CurrentUserApiKey operation.
     * @callback module:api/CurrentuserApi~getApiV1CurrentUserApiKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View Current User API key
     * View Current User API key  View current_user api_key.
     * @param {module:api/CurrentuserApi~getApiV1CurrentUserApiKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getApiV1CurrentUserApiKey = function(callback) {
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
        '/api/v1/current_user/api_key', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiV1CurrentUserUsage operation.
     * @callback module:api/CurrentuserApi~getApiV1CurrentUserUsageCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * current_user usage
     * current_user usage  get data about user projects, files, and storage usage
     * @param {module:api/CurrentuserApi~getApiV1CurrentUserUsageCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getApiV1CurrentUserUsage = function(callback) {
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
        '/api/v1/current_user/usage', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putApiV1CurrentUserApiKey operation.
     * @callback module:api/CurrentuserApi~putApiV1CurrentUserApiKeyCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * manage current_user api_key
     * manage current_user api_key  create or recreate the current_user api_key
     * @param {module:api/CurrentuserApi~putApiV1CurrentUserApiKeyCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putApiV1CurrentUserApiKey = function(callback) {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/v1/current_user/api_key', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));