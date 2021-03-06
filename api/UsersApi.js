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
    root.DukeDataServiceApi.UsersApi = factory(root.DukeDataServiceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 0.0.2
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getApiV1Users operation.
     * @callback module:api/UsersApi~getApiV1UsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * users
     * users  This allows a client to get a list of users, with an optional filter
     * @param {Object} opts Optional parameters
     * @param {String} opts.lastNameBeginsWith list users whose last name begins with this string
     * @param {String} opts.firstNameBeginsWith list users whose first name begins with this string
     * @param {String} opts.fullNameContains list users whose full name contains this string
     * @param {Integer} opts.page Requested Page (default first page)
     * @param {Integer} opts.perPage Number of Objects per page (default 25)
     * @param {module:api/UsersApi~getApiV1UsersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getApiV1Users = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'last_name_begins_with': opts['lastNameBeginsWith'],
        'first_name_begins_with': opts['firstNameBeginsWith'],
        'full_name_contains': opts['fullNameContains'],
        'page': opts['page'],
        'per_page': opts['perPage']
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
        '/api/v1/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getApiV1UsersId operation.
     * @callback module:api/UsersApi~getApiV1UsersIdCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * View user details
     * View user details  Returns the user details for a given uuid of a user.
     * @param {String} id User UUID
     * @param {module:api/UsersApi~getApiV1UsersIdCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getApiV1UsersId = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getApiV1UsersId";
      }


      var pathParams = {
        'id': id
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
        '/api/v1/users/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
